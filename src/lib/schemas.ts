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
  .min(1, { message: "Phone number is required." })
  .regex(/^[+\d][\d\s\-().]{6,19}$/, { message: "Please enter a valid phone number (e.g. +91 98765 43210)." });

const messageSchema = z
  .string()
  .max(2000, { message: "Message is too long. Please keep it under 2000 characters." })
  .optional()
  .or(z.literal(""));

const serviceSchema = z.enum(
  [
    "Web Development",
    "Technical SEO",
    "Automation Systems",
    "Mobile App Development",
    "Digital Marketing",
    "Social Media Management",
    "Consultation",
    "Other"
  ],
  { message: "Please select a valid service or consultation." }
);

export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  company: z.string().max(100, { message: "Company name is too long." }).optional().or(z.literal("")),
  service: serviceSchema,
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

