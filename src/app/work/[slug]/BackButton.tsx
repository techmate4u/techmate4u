"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  const [referrerIsHome, setReferrerIsHome] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.hostname === window.location.hostname && (refUrl.pathname === "/" || refUrl.pathname === "")) {
          setReferrerIsHome(true);
        }
      } catch (e) {
        // Ignore parsing errors
      }
    }
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(referrerIsHome ? "/" : "/work");
    }
  };

  return (
    <a
      href={referrerIsHome ? "/" : "/work"}
      onClick={handleBack}
      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:opacity-80 transition-opacity mb-8 cursor-pointer"
    >
      <ArrowLeft className="h-4.5 w-4.5" />
      Back to {referrerIsHome ? "home" : "portfolio"}
    </a>
  );
}
