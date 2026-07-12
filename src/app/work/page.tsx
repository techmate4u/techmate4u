import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import WorkGrid from "@/components/sections/WorkGrid";
import CTABanner from "@/components/sections/CTABanner";
import type { Project } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Selected Work | TechMate4u",
  description:
    "A curated deck of custom web applications, headless e-commerce, and high-performance design systems engineered by TechMate4u.",
};

const PROJECTS: Project[] = [
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

const CATEGORIES = ["All", "E-commerce", "Healthcare Logistics", "Hospitality & POS"];

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 relative overflow-hidden">
      {/* Blueprint background layout texture */}
      <div className="absolute inset-0 bg-[url(/assets/bg-blueprint.png)] bg-no-repeat bg-cover opacity-[0.06] pointer-events-none -z-10" />

      {/* Network Globe background representing scale */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-[url(/assets/bg-globe.png)] bg-no-repeat bg-contain opacity-[0.09] pointer-events-none -z-10 animate-float" />

      {/* Waves background line-work */}
      <div className="absolute left-[-10%] bottom-[5%] w-[800px] h-[550px] bg-[url(/assets/bg-waves.png)] bg-no-repeat bg-contain opacity-[0.08] pointer-events-none -z-10 animate-float-delayed" />

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
          eyebrow="Portfolio"
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
