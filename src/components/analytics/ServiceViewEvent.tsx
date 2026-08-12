"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: (...args: any[]) => void;
  }
}

interface ServiceViewEventProps {
  slug: string;
  title: string;
}

export default function ServiceViewEvent({
  slug,
  title,
}: ServiceViewEventProps) {
  useEffect(() => {
    if (typeof window.fbq !== "function") return;

    window.fbq("trackCustom", "ServiceView", {
      service_slug: slug,
      service_name: title,
    });
  }, [slug, title]);

  return null;
}
