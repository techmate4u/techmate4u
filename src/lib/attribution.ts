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

/**
 * Retrieves the stored first-touch UTM attribution from browser storage.
 */
export function getStoredAttribution(): UtmAttribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Failed to read stored UTM attribution:", e);
  }
  return {};
}

/**
 * Captures UTM parameters from URL search params and stores them in browser storage.
 * Enforces first-touch attribution: existing stored attribution is never overwritten.
 */
export function captureUtmAttribution(params: Record<string, string>): UtmAttribution {
  if (typeof window === "undefined") return {};

  try {
    const existing = getStoredAttribution();
    // Preserve first-touch attribution: do NOT overwrite if already set
    if (Object.keys(existing).length > 0) {
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
