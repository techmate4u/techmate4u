"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import FormField from "./FormField";
import Button from "@/components/ui/Button";

// Inline SVG — avoids loading the entire react-icons/fa package (~430KB wasted JS)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);


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
          placeholder="+91 93272 63267"
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
              <WhatsAppIcon />
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
