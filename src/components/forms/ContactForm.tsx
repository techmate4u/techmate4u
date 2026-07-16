"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
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
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 1.968 14.1 1.94 11.99 1.94c-5.433 0-9.859 4.372-9.863 9.8.001 1.97.521 3.9 1.508 5.618l-.997 3.638 3.737-.962zm12.39-7.147c-.285-.141-1.688-.813-1.947-.906-.26-.094-.448-.141-.636.141-.188.282-.727.906-.89.1.094-.162.188-.405.282-.693.388-1.71.777-1.77.886-.06.11-.189.16-.473.06-.282-.138-1.2-.43-2.285-1.373-.843-.732-1.412-1.634-1.578-1.916-.166-.282-.017-.434.122-.573.125-.124.282-.329.424-.494.14-.165.188-.282.281-.47.095-.188.047-.353-.024-.494-.07-.141-.636-1.494-.87-2.047-.23-.54-.482-.465-.636-.474-.15-.007-.323-.008-.494-.008-.17 0-.448.063-.683.312-.236.248-.9.86-.9 2.097 0 1.237.915 2.43 1.042 2.597.127.167 1.8 2.682 4.363 3.753.61.255 1.084.407 1.455.521.613.19 1.174.164 1.616.1.493-.07 1.687-.71 1.922-1.365.236-.653.236-1.213.165-1.328-.07-.116-.26-.188-.542-.33z"/>
              </svg>
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
