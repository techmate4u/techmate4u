export interface UtmAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  captured_at?: string;
}

const STORAGE_KEY = "tm4u_utm_attribution";
const EXPIRATION_DAYS = 30;
const EXPIRATION_MS = EXPIRATION_DAYS * 24 * 60 * 60 * 1000; // 30 days in milliseconds

/**
 * Checks if a captured_at timestamp is older than 30 days.
 */
function isExpired(capturedAt?: string): boolean {
  if (!capturedAt) return false;
  const capturedTime = new Date(capturedAt).getTime();
  if (isNaN(capturedTime)) return false;
  return Date.now() - capturedTime > EXPIRATION_MS;
}

/**
 * Retrieves the stored first-touch UTM attribution from browser storage.
 * Automatically purges attribution if older than 30 days.
 */
export function getStoredAttribution(): UtmAttribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const parsed: UtmAttribution = JSON.parse(raw);

    // Purge expired attribution (> 30 days)
    if (parsed.captured_at && isExpired(parsed.captured_at)) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }

    return parsed;
  } catch (e) {
    console.error("Failed to read stored UTM attribution:", e);
  }
  return {};
}

/**
 * Captures UTM parameters from URL search params and stores them in browser storage.
 * Enforces first-touch attribution within a 30-day window:
 * - If valid unexpired attribution exists, it is preserved (NOT overwritten).
 * - If no attribution exists or existing attribution expired (> 30 days), new parameters are saved.
 * - Direct/organic visits without UTM parameters do NOT overwrite existing valid attribution.
 */
export function captureUtmAttribution(params: Record<string, string>): UtmAttribution {
  if (typeof window === "undefined") return {};

  try {
    const existing = getStoredAttribution();

    // Preserve valid first-touch attribution: do NOT overwrite if already set & unexpired
    if (Object.keys(existing).length > 0 && existing.captured_at && !isExpired(existing.captured_at)) {
      return existing;
    }

    const utmKeys: (keyof UtmAttribution)[] = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
    ];

    const captured: UtmAttribution = {};
    let hasAny = false;

    for (const key of utmKeys) {
      const val = params[key];
      if (val && typeof val === "string" && val.trim() !== "") {
        captured[key] = val.trim();
        hasAny = true;
      }
    }

    // Only save if there is at least one valid attribution parameter present
    if (hasAny) {
      captured.captured_at = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
      return captured;
    }
  } catch (e) {
    console.error("Failed to store UTM attribution:", e);
  }

  return getStoredAttribution();
}
