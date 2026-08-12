"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auditFormSchema, type AuditFormData } from "@/lib/schemas";
import { getStoredAttribution, type UtmAttribution } from "@/lib/attribution";
import FormField from "./FormField";
import Button from "@/components/ui/Button";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: (...args: any[]) => void;
  }
}

export default function AuditForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
  });

  const trackAuditLead = (utm: UtmAttribution, eventId: string) => {
    if (typeof window.fbq !== "function") return;

    window.fbq(
      "track",
      "Lead",
      {
        content_name: "Technical SEO Audit",
        content_category: "Audit Request",
        lead_channel: "audit_form",
        ...(utm.utm_source && { utm_source: utm.utm_source }),
        ...(utm.utm_medium && { utm_medium: utm.utm_medium }),
        ...(utm.utm_campaign && { utm_campaign: utm.utm_campaign }),
        ...(utm.utm_content && { utm_content: utm.utm_content }),
        ...(utm.utm_term && { utm_term: utm.utm_term }),
        ...(utm.fbclid && { fbclid: utm.fbclid }),
      },
      { eventID: eventId }
    );
  };

  const onSubmit = async (data: AuditFormData) => {
    setStatus("loading");
    setErrorMessage("");

    const utm = getStoredAttribution();
    const eventId = `audit_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const payload = {
      ...data,
      utm,
      eventId,
    };

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit audit request. Please check your connection and try again.");
      }

      setStatus("success");
      trackAuditLead(utm, eventId);
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "success" && (
        <div className="rounded-lg bg-green-50 p-4 border border-green-200 text-sm font-semibold text-green-700">
          Audit request submitted successfully! We will analyze your site and contact you.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 border border-red-200 text-sm font-semibold text-red-700">
          {errorMessage}
        </div>
      )}

      <FormField
        id="audit-name"
        label="Full Name"
        placeholder="Your Name Here"
        error={errors.name?.message}
        {...register("name")}
      />

      <FormField
        id="audit-email"
        label="Email Address"
        type="email"
        placeholder="your@email.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <FormField
        id="audit-website"
        label="Website URL"
        placeholder="https://yourwebsite.com"
        error={errors.websiteUrl?.message}
        {...register("websiteUrl")}
      />

      <FormField
        id="audit-comments"
        label="Additional Comments (Optional)"
        isTextArea
        placeholder="Any specific concerns, pages you'd like us to focus on, or goals you have in mind..."
        error={errors.comments?.message}
        {...register("comments")}
      />

      <Button type="submit" variant="success" className="w-full h-12 cursor-pointer" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Get Free Website Audit"}
      </Button>
    </form>
  );
}
