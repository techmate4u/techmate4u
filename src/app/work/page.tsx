import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import WorkGrid from "@/components/sections/WorkGrid";
import CTABanner from "@/components/sections/CTABanner";
import type { Project } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | TechMate4u — Case Studies",
  description:
    "A curated deck of custom web applications, headless e-commerce, and high-performance design systems engineered by TechMate4u.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "TechMate4u Portfolio | Web Apps, E-commerce & AI Systems",
    description:
      "Selected case studies from TechMate4u: headless e-commerce, Next.js web apps, AI automation systems — all with real outcome metrics.",
    url: "https://techmate4u.com/work",
    type: "website",
    siteName: "TechMate4u",
    images: [
      {
        url: "/assets/hero-visual.webp",
        width: 1200,
        height: 630,
        alt: "TechMate4u Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMate4u Portfolio | Selected Work",
    description:
      "Case studies with real outcome numbers — conversion lifts, Lighthouse scores, and delivery timelines.",
  },
};

const PROJECTS: Project[] = [
  {
    title: "Rapture Tech Website Redesign",
    category: "Web Application",
    challenge: "Migrating a legacy Django-based product portal into a headless Next.js static site to solve hosting overhead, layout shifts, and search engine indexing bottlenecks.",
    resultBold: "Sub-second page speeds, ",
    resultText: "with 100% SEO sitemap indexing, direct WhatsApp inquiry channels, and secure image-download deterrence.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    themeId: "cyan",
    video: "/assets/rapturetech-web.webm",
    slug: "rapturetech-website-redesign",
    link: "https://rapturetech.co.in/"
  },
  {
    title: "Offline POS & Weighbridge System",
    category: "Enterprise Software",
    challenge: "Developing a 100% offline billing and receipt management application that interfaces directly with thermal printing hardware in a zero-network warehouse environment.",
    resultBold: "100% offline operational reliability, ",
    resultText: "with background SQLite backup syncs and native AIDL hardware print integration.",
    tags: ["React Native", "Kotlin", "SQLite", "Drizzle ORM"],
    themeId: "blue",
    images: ["/assets/POS_App.webp"],
    slug: "offline-pos-weighbridge"
  },
  {
    title: "Riwaaz Ethnic",
    category: "E-commerce",
    challenge: "Legacy storefront suffered from slow load times, high mobile bounce rates, and limited design layout control.",
    resultBold: "Lighthouse mobile score of 99/100, +38% conversion lift, ",
    resultText: "and sub-second page transitions.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    themeId: "rose",
    video: "/assets/riwaazethnic.webm",
    slug: "riwaaz-ethnic",
    link: "https://riwaazethnic.vercel.app/"
  },
  {
    title: "Lab2Door",
    category: "Healthcare Logistics",
    challenge: "Confusing patient scheduling flow and manual routing overhead led to booking collisions and logistical delays.",
    resultBold: "50% reduction in booking friction, zero slot collisions, ",
    resultText: "and 2.5x scheduled appointments growth.",
    tags: ["Next.js", "TypeScript", "React", "Supabase"],
    themeId: "blue",
    video: "/assets/lab2door.webm",
    slug: "lab2door",
    link: "https://lab2door.vercel.app/"
  },
  {
    title: "Restaurant Management",
    category: "Hospitality & POS",
    challenge: "Legacy POS dining system had high sync latency and lacked touch-optimized waiter interfaces tableside.",
    resultBold: "Sub-100ms kitchen sync latency, 22% faster table turnover, ",
    resultText: "and full mobile optimization.",
    tags: ["Next.js", "React", "TypeScript", "Real-time Sync"],
    themeId: "cyan",
    images: [
      "/assets/erp1.webp",
      "/assets/erp2.webp",
      "/assets/erp3.webp",
      "/assets/erp4.webp",
      "/assets/erp5.webp",
    ],
    slug: "restaurant-management"
  }
];

const CATEGORIES = ["All", "Web Application", "Enterprise Software", "E-commerce", "Healthcare Logistics", "Hospitality & POS"];

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 relative overflow-hidden">
      

      

      

      {/* Background blueprint details grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Selected Digital Products & Architectures"
          subtitle="A curated deck of custom web applications, automation pipelines, and high-performance design systems we've shipped."
          align="center"
        />

        <WorkGrid projects={PROJECTS} categories={CATEGORIES} />
      </div>

      <CTABanner
        title="Ready to build your custom application?"
        description="Schedule a 15-minute consultation to scope out your engineering timeline and target goals."
        primaryBtnText="Schedule call"
        primaryBtnHref="/#contact"
        secondaryBtnText="See Services"
        secondaryBtnHref="/#services"
      />
    </main>
  );
}
