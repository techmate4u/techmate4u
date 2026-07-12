"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas";
import FormError from "./FormError";
import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex flex-col items-start">
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className={`w-full rounded-lg border px-4 py-3 text-sm outline-none bg-[var(--cta-input)] font-medium text-[var(--text)] transition-colors duration-200 ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-[var(--line)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            }`}
            {...register("email")}
            aria-label="Email address for newsletter"
          />
          <FormError message={errors.email?.message} />
        </div>
        <Button type="submit" variant="primary" className="h-12 shrink-0 cursor-pointer" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-sm font-semibold text-green-600 text-left">
          Thank you for subscribing to our newsletter!
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-red-500 text-left">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
