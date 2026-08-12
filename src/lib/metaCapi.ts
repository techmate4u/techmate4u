import crypto from "crypto";
import { UtmAttribution } from "./attribution";

export interface CapiLeadPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  channel?: "email" | "whatsapp";
  eventId?: string;
  utm?: UtmAttribution;
  clientIp?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  sourceUrl?: string;
}

/**
 * Normalizes and hashes strings (e.g., email) to SHA-256 per Meta CAPI specifications.
 */
export function hashSha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/**
 * Normalizes and hashes phone numbers to SHA-256 per Meta CAPI specifications.
 * Strips all non-digit characters before hashing.
 */
export function hashPhone(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, "");
  return crypto.createHash("sha256").update(digitsOnly).digest("hex");
}

/**
 * Sends a Lead event to Meta Conversions API (CAPI).
 * Handled gracefully so failures never affect lead delivery to the user.
 */
export async function sendMetaCapiLeadEvent(payload: CapiLeadPayload): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID || "2596569040773118";
  const accessToken = process.env.META_ACCESS_TOKEN;

  // Gracefully skip if CAPI access token is not configured
  if (!accessToken) {
    console.log("[Meta CAPI] Skipping server CAPI event: META_ACCESS_TOKEN environment variable is not configured.");
    return;
  }

  try {
    const eventTime = Math.floor(Date.now() / 1000);
    const eventId = payload.eventId || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Hash PII for user_data matching signals
    const userData: Record<string, any> = {
      em: [hashSha256(payload.email)],
      ph: [hashPhone(payload.phone)],
    };

    if (payload.clientIp) {
      userData.client_ip_address = payload.clientIp;
    }
    if (payload.userAgent) {
      userData.client_user_agent = payload.userAgent;
    }
    if (payload.fbp) {
      userData.fbp = payload.fbp;
    }
    if (payload.fbc || payload.utm?.fbclid) {
      userData.fbc = payload.fbc || `fb.1.${Date.now()}.${payload.utm?.fbclid}`;
    }

    // Build custom_data without any PII
    const customData: Record<string, any> = {
      content_name: payload.service,
      content_category: "Service Inquiry",
      lead_channel: payload.channel || "email",
    };

    if (payload.utm?.utm_source) customData.utm_source = payload.utm.utm_source;
    if (payload.utm?.utm_medium) customData.utm_medium = payload.utm.utm_medium;
    if (payload.utm?.utm_campaign) customData.utm_campaign = payload.utm.utm_campaign;
    if (payload.utm?.utm_content) customData.utm_content = payload.utm.utm_content;
    if (payload.utm?.utm_term) customData.utm_term = payload.utm.utm_term;
    if (payload.utm?.fbclid) customData.fbclid = payload.utm.fbclid;

    const capiEvent = {
      event_name: "Lead",
      event_time: eventTime,
      event_id: eventId,
      action_source: "website",
      event_source_url: payload.sourceUrl || "https://techmate4u.com",
      user_data: userData,
      custom_data: customData,
    };

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [capiEvent],
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("[Meta CAPI Error]", {
        status: response.status,
        message: result?.error?.message || "Unknown CAPI error",
        code: result?.error?.code,
      });
    } else {
      console.log(`[Meta CAPI Success] Lead event (${eventId}) received by Meta. Events count: ${result?.events_received || 1}`);
    }
  } catch (error) {
    console.error("[Meta CAPI Exception] Failed to send CAPI Lead event:", error instanceof Error ? error.message : error);
  }
}
