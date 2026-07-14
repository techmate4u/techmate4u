import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Lightbulb, Compass, Award } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import ProjectCard, { type ThemeId } from "@/components/ui/ProjectCard";

// Helper component for static slideshow inside Server Component
import Slideshow from "./Slideshow";
import LazyVideo from "@/components/ui/LazyVideo";

interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  themeId: ThemeId;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: {
    value: string;
    label: string;
  }[];
  video?: string;
  images?: string[];
  link?: string;
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  "riwaaz-ethnic": {
    slug: "riwaaz-ethnic",
    title: "Riwaaz Ethnic",
    category: "E-commerce",
    themeId: "rose",
    description: "A premium ethnic wear brand featuring timeless kurtis with intricate embroidery and elegant designs.",
    challenge: "The brand needed a high-performance storefront to showcase their premium garment collections. Legacy platforms suffered from slow load times, high bounce rates on mobile viewports, and restricted design systems that failed to convey the premium craftsmanship of their intricate embroidery.",
    solution: "We engineered a headless e-commerce frontend using Next.js, React, and Tailwind CSS. The storefront is fully optimized for Core Web Vitals, utilizing sub-second page transitions, dynamic image subset loads, and responsive fluid grids to capture every garment detail cleanly.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Headless Commerce"],
    results: [
      { value: "99/100", label: "Lighthouse Mobile Score" },
      { value: "+38%", label: "Conversion Lift" },
      { value: "< 1.0s", label: "Page Load Speed" }
    ],
    video: "/assets/riwaazethnic.webm",
    link: "https://riwaazethnic.vercel.app/"
  },
  "lab2door": {
    slug: "lab2door",
    title: "Lab2Door",
    category: "Healthcare Logistics",
    themeId: "blue",
    description: "A professional medical service bringing laboratory specimen collection directly to patients' homes and offices.",
    challenge: "Lab2Door needed an intuitive patient scheduling and logistics dashboard. Patients found booking medical specimen appointments confusing, and operators struggled with scheduling routes, leading to logistical delays and high support ticket volume.",
    solution: "We designed and deployed a streamlined appointment builder and real-time scheduling dashboard. The system integrates secure client databases, optimized auto-assigned booking slots, and automated notification triggers for field agents.",
    techStack: ["Next.js", "TypeScript", "React", "Supabase", "Cron Operations"],
    results: [
      { value: "-50%", label: "Booking Friction" },
      { value: "0", label: "Slot Collisions" },
      { value: "2.5x", label: "Scheduled Appointments Growth" }
    ],
    video: "/assets/lab2door.webm",
    link: "https://lab2door.vercel.app/"
  },
  "restaurant-management": {
    slug: "restaurant-management",
    title: "Restaurant POS Dashboard",
    category: "Hospitality & POS",
    themeId: "cyan",
    description: "A modern restaurant POS and management system designed to streamline table handling, orders, kitchen workflows, billing, and waiter operations through a clean real-time dashboard.",
    challenge: "The client faced operational bottlenecks with dining POS systems. Legacy POS platforms had laggy interfaces, failed to sync kitchen orders in real time, and lacked intuitive mobile designs for waitstaff tableside.",
    solution: "We developed a real-time POS dashboard utilizing local state caching and instant data sync triggers. The interface handles orders, kitchen progress statuses, billing, table layouts, and analytics through a sleek design system.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Real-time Sync"],
    results: [
      { value: "< 100ms", label: "Kitchen Sync Latency" },
      { value: "22%", label: "Faster Table Turnover" },
      { value: "100%", label: "Mobile Touch Optimization" }
    ],
    images: [
      "/assets/erp1.webp",
      "/assets/erp2.webp",
      "/assets/erp3.webp",
      "/assets/erp4.webp",
      "/assets/erp5.webp"
    ]
  },
  "techflow-systems": {
    slug: "techflow-systems",
    title: "TechFlow Systems",
    category: "SAAS PLATFORM REDESIGN",
    themeId: "blue",
    description: "A comprehensive SaaS platform redesign that streamlined patient onboarding and drove paid conversions.",
    challenge: "Complex user onboarding process was causing 40% drop-off rate. Users struggled with multi-page navigation and lacked inline field feedback, leading to friction and high abandonment before registration completion.",
    solution: "We re-engineered the signup workflow into a modern progressive multi-step layout. Integrating instant email verification checks, interactive progress micro-animations, and client-side form validation reduced onboarding drop-offs dramatically.",
    techStack: ["Next.js", "TypeScript", "React", "Framer Motion", "React Hook Form"],
    results: [
      { value: "-67%", label: "Onboarding Friction" },
      { value: "+45%", label: "Conversion Lift" },
      { value: "< 5%", label: "Drop-off Rate" }
    ],
    link: "#"
  },
  "finserve-solutions": {
    slug: "finserve-solutions",
    title: "FinServe Solutions",
    category: "ENTERPRISE PORTAL MIGRATION",
    themeId: "cyan",
    description: "Migrating a legacy enterprise finance portal to a modern tech stack to improve employee adoption.",
    challenge: "The client's legacy portal had critical latency bottlenecks, inconsistent data synchronization across divisions, and poor mobile UX layout, prompting employees to bypass the platform entirely.",
    solution: "We migrated the frontend layer to Next.js App Router and optimized DB transaction sync hooks. Using responsive dashboard layout tokens and local browser caching minimized API load times and ensured zero sync conflicts.",
    techStack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Tailwind CSS"],
    results: [
      { value: "+340%", label: "Employee Productivity" },
      { value: "99.9%", label: "Uptime Achieved" },
      { value: "100%", label: "User Adoption" }
    ],
    link: "#"
  }
};

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | Case Study | TechMate4u`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

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
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:opacity-80 transition-opacity mb-8"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
          Back to portfolio
        </Link>

        {/* Case Study Header */}
        <div className="text-left items-start flex flex-col mb-16">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide bg-[var(--primary-soft)] text-[var(--primary)] border-[color-mix(in_srgb,var(--primary)_20%,transparent)] mb-4">
            {study.category}
          </span>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-black leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl max-w-3xl mb-6">
            {study.title}
          </h1>
          <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg max-w-2xl mb-8">
            {study.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 border rounded-md border-[var(--line)] bg-[var(--surface-muted)] text-[var(--text-soft)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:opacity-80 transition-opacity mt-2"
            >
              View Live Deployment
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Media Block Showcase */}
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--panel)] shadow-2xl mb-24 aspect-video relative">
          {study.video ? (
            <LazyVideo
              src={study.video}
              className="w-full h-full object-cover object-top"
            />
          ) : study.images ? (
            <Slideshow images={study.images} title={study.title} />
          ) : null}
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          <Card className="p-8 lg:p-10 border border-[var(--line)] bg-[var(--panel)]">
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-black text-[var(--text)] mb-5 flex items-center gap-2.5">
              <Compass className="h-5.5 w-5.5 text-[var(--primary)]" />
              The Business Challenge
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] font-medium">
              {study.challenge}
            </p>
          </Card>

          <Card className="p-8 lg:p-10 border border-[var(--line)] bg-[var(--panel)]">
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-black text-[var(--text)] mb-5 flex items-center gap-2.5">
              <Lightbulb className="h-5.5 w-5.5 text-yellow-500" />
              Our Engineering Solution
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] font-medium">
              {study.solution}
            </p>
          </Card>
        </div>

        {/* Results / Key Metrics */}
        <div className="mb-24">
          <SectionHeading
            title="Measurable Business Impact"
            subtitle="The core metrics and conversions delivered through our performance systems."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {study.results.map((res, idx) => (
              <Card key={idx} className="flex flex-col items-center justify-center p-8 text-center bg-[var(--panel)]">
                <span className="font-[family-name:var(--font-outfit)] text-4xl font-black text-[var(--primary)] mb-3 flex items-center gap-2 justify-center">
                  <Award className="h-6 w-6 shrink-0 text-yellow-500" />
                  {res.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  {res.label}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <CTABanner
        title="Want similar performance for your next project?"
        description="Connect with our design studio to scope out your dynamic website build or custom CRM automation."
        primaryBtnText="Let's Talk"
        primaryBtnHref="/#contact"
        secondaryBtnText="See Services"
        secondaryBtnHref="/#services"
      />
    </main>
  );
}
