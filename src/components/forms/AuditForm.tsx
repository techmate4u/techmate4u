"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auditFormSchema, type AuditFormData } from "@/lib/schemas";
import FormField from "./FormField";
import Button from "@/components/ui/Button";

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

  const onSubmit = async (data: AuditFormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit audit request. Please try again later.");
      }

      setStatus("success");
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
