"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { FaWhatsapp } from "react-icons/fa";
import FormField from "./FormField";
import Button from "@/components/ui/Button";

// WhatsApp number for TechMate4u
const WA_NUMBER = "919327263267";

// Build a pre-filled WhatsApp message with all lead details
function buildWhatsAppUrl(data: ContactFormData): string {
  const text = [
    "Hello TechMate4u! I'd like to get in touch.",
    "",
    `• Name: ${data.name}`,
    `• Email: ${data.email}`,
    `• Phone: ${data.phone}`,
    `• Company: ${data.company || "N/A"}`,
    `• Service: ${data.service}`,
    "",
    `Project Details: ${data.message || "N/A"}`,
  ].join("\n");
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // useRef reads synchronously inside onSubmit — avoids React state batch race condition
  const submitTypeRef = useRef<"email" | "whatsapp">("email");

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

    const isWhatsApp = submitTypeRef.current === "whatsapp";

    // ── WhatsApp channel: open immediately with pre-filled message ──
    // Fires regardless of email API result so the lead is never lost.
    if (isWhatsApp) {
      window.open(buildWhatsAppUrl(data), "_blank");
    }

    // ── Email channel: always send lead to info@techmate4u.com ──
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Email delivery failed. Your WhatsApp message was still sent.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      // If WhatsApp was chosen, the lead was already sent — show partial success
      if (isWhatsApp) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
      }
    }
  };

  const serviceOptions = [
    { value: "Web Development", label: "Web Development" },
    { value: "Technical SEO", label: "Technical SEO" },
    { value: "Automation Systems", label: "Automation Systems" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Social Media Management", label: "Social Media Management" },
    { value: "Consultation", label: "Consultation" },
    { value: "Other", label: "Other" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "success" && (
        <div className="rounded-lg bg-green-50 p-4 border border-green-200 text-sm font-semibold text-green-700">
          Inquiry sent successfully! We will get back to you shortly.
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
          placeholder="Your Name Here"
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          id="contact-email"
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="contact-phone"
          label="Phone Number"
          placeholder="+91 98765 43210"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <FormField
          id="contact-company"
          label="Company (Optional)"
          placeholder="Your Company Name"
          error={errors.company?.message}
          {...register("company")}
        />
      </div>

      <FormField
        id="contact-service"
        label="Service Required"
        isSelect
        placeholder="Select a service..."
        options={serviceOptions}
        error={errors.service?.message}
        {...register("service")}
      />

      <FormField
        id="contact-message"
        label="Project Details / Message (Optional)"
        isTextArea
        placeholder="Tell us a little about your project, your goals, or the problem you'd like us to solve..."
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full h-12 cursor-pointer font-bold" 
          disabled={status === "loading"}
          onClick={() => { submitTypeRef.current = "email"; }}
        >
          {status === "loading" ? "Sending..." : "Send Email"}
        </Button>

        <button
          type="submit"
          disabled={status === "loading"}
          onClick={() => { submitTypeRef.current = "whatsapp"; }}
          className="w-full h-12 rounded-lg flex items-center justify-center gap-2 font-bold text-white transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          style={{
            background: "#25D366",
            boxShadow: "0 4px 14px rgba(37, 211, 102, 0.25)"
          }}
        >
          {status === "loading" ? (
            "Processing..."
          ) : (
            <>
              <FaWhatsapp className="h-5 w-5" />
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
