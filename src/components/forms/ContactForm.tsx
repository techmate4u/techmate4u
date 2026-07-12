"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import FormField from "./FormField";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
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
          Message sent successfully! We will get back to you shortly.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 border border-red-200 text-sm font-semibold text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="contact-name"
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          id="contact-email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="contact-phone"
          label="Phone Number (Optional)"
          placeholder="+1 (555) 000-0000"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <FormField
          id="contact-company"
          label="Company (Optional)"
          placeholder="Acme Corp"
          error={errors.company?.message}
          {...register("company")}
        />
      </div>

      <FormField
        id="contact-message"
        label="Project Details / Message"
        isTextArea
        placeholder="Tell us about your project requirements..."
        error={errors.message?.message}
        {...register("message")}
      />

      <Button type="submit" variant="primary" className="w-full h-12 cursor-pointer" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
