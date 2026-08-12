"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { captureUtmAttribution } from "@/lib/attribution";

function UtmTrackerContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    captureUtmAttribution(params);
  }, [searchParams]);

  return null;
}

export default function UtmTracker() {
  return (
    <Suspense fallback={null}>
      <UtmTrackerContent />
    </Suspense>
  );
}
