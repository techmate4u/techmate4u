import { z } from "zod";

// Reusable validators
const nameSchema = z
  .string()
  .min(2, { message: "Please enter your full name (at least 2 characters)." })
  .max(80, { message: "Name is too long." })
  .regex(/^[\p{L}\s'\-\.]+$/u, { message: "Name can only contain letters, spaces, hyphens, and apostrophes." });

const emailSchema = z
  .string()
  .email({ message: "Please enter a valid email address." })
  .max(254, { message: "Email address is too long." })
  .refine((val) => !val.includes("+"), { message: "Please use a standard email address without aliases." });

const phoneSchema = z
  .string()
  .optional()
  .refine(
    (val) => !val || /^[+\d][\d\s\-().]{6,19}$/.test(val),
    { message: "Please enter a valid phone number (e.g. +91 98765 43210)." }
  );

const messageSchema = z
  .string()
  .min(20, { message: "Please share a bit more detail — at least 20 characters." })
  .max(2000, { message: "Message is too long. Please keep it under 2000 characters." })
  .refine(
    (val) => !/^(.)\1{9,}/.test(val),
    { message: "Message appears to be invalid. Please describe your project." }
  )
  .refine(
    (val) => val.split(" ").length >= 3,
    { message: "Please write at least a few words describing your needs." }
  );

export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  company: z.string().max(100, { message: "Company name is too long." }).optional(),
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const auditFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  websiteUrl: z
    .string()
    .url({ message: "Please enter a valid website URL starting with https://" })
    .startsWith("https://", { message: "Website URL must start with https://" })
    .max(300, { message: "URL is too long." }),
  comments: z
    .string()
    .max(1000, { message: "Comments are too long. Please keep it under 1000 characters." })
    .optional(),
});

export type AuditFormData = z.infer<typeof auditFormSchema>;

export const newsletterSchema = z.object({
  email: emailSchema,
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

