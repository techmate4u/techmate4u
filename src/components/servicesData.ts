import { Globe, Smartphone, Search, Zap, PenTool, Share2 } from "lucide-react";
import React from "react";

export interface ServiceItem {
  slug: string;
  keyId: string;
  shortTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
  icon: typeof Globe;
  gradient: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "web-development",
    keyId: "website",
    shortTitle: "WEBSITE",
    title: "Website Design & Development",
    eyebrow: "Engineering",
    description: "Custom-built, responsive websites that showcase your brand and drive conversions with modern technologies.",
    features: ["Custom Apps", "JAMstack Platforms", "Headless CMS Solutions", "Site Speed Audits"],
    icon: Globe,
    gradient: "from-blue-500/10 to-cyan-500/5",
  },
  {
    slug: "mobile-app-development",
    keyId: "mobile",
    shortTitle: "MOBILE",
    title: "Mobile App Development",
    eyebrow: "Cross-Platform",
    description: "Native and cross-platform mobile applications built for performance, user engagement, and scalability.",
    features: ["React Native Builds", "Tactile UI/UX Design", "Push Notification Systems", "Offline Storage Sync"],
    icon: Smartphone,
    gradient: "from-indigo-500/10 to-blue-500/5",
  },
  {
    slug: "technical-seo",
    keyId: "seo",
    shortTitle: "SEO",
    title: "SEO Optimization",
    eyebrow: "Optimization",
    description: "Strategic search engine optimization to boost your visibility, organic traffic, and online rankings.",
    features: ["Core Web Vitals Boost", "JSON-LD Schema Markup", "Crawlability Audits", "Keyword Context Mapping"],
    icon: Search,
    gradient: "from-amber-500/10 to-orange-500/5",
  },
  {
    slug: "automation-systems",
    keyId: "automation",
    shortTitle: "AI & AUTOMATION",
    title: "AI Automation",
    eyebrow: "AI Ops",
    description: "Tailored AI solutions and automated workflows designed to streamline operations, reduce manual errors, and boost efficiency.",
    features: ["Custom AI Agents", "Zapier & Make Integrations", "Database Synchronization", "Automated Reporting"],
    icon: Zap,
    gradient: "from-fuchsia-500/10 to-purple-500/5",
  },
  {
    slug: "digital-marketing",
    keyId: "marketing",
    shortTitle: "MARKETING",
    title: "Digital Marketing",
    eyebrow: "Acquisition",
    description: "Results-driven marketing campaigns and funnel optimizations tailored to scale your brand and maximize acquisition ROI.",
    features: ["Conversion Rate Opt", "Funnel Automation Mapping", "Paid Ads Setup", "Advanced Analytics Tracks"],
    icon: PenTool,
    gradient: "from-rose-500/10 to-pink-500/5",
  },
  {
    slug: "social-media-management",
    keyId: "social",
    shortTitle: "SOCIAL MEDIA",
    title: "Social Media Management",
    eyebrow: "Engagement",
    description: "Strategic content creation, community engagement, and brand optimization to build a powerful organic social media presence.",
    features: ["Content Strategy", "Community Management", "Organic Growth", "Performance Reports"],
    icon: Share2,
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
];

