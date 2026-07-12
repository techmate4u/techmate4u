import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const auditFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  websiteUrl: z.string().url({ message: "Please enter a valid website URL (e.g. https://example.com)." }),
  comments: z.string().optional(),
});

export type AuditFormData = z.infer<typeof auditFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
