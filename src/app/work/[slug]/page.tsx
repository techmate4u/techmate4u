import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Lightbulb, Compass, Award, WifiOff, Cpu, Printer, Database, Users, History, ShieldCheck, CheckCircle2, RefreshCw, FileText } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import ProjectCard, { type ThemeId } from "@/components/ui/ProjectCard";

// Helper component for static slideshow inside Server Component
import Slideshow from "./Slideshow";
import LazyVideo from "@/components/ui/LazyVideo";
import BackButton from "./BackButton";

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
  logo?: string;
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  "rapturetech-website-redesign": {
    slug: "rapturetech-website-redesign",
    title: "Rapture Tech Website Redesign",
    category: "Web Application",
    themeId: "cyan",
    description: "A high-performance product catalog and marketing portal built for Rapture Tech Pvt Ltd, featuring headless Next.js architecture, static export delivery, and direct customer inquiry channels.",
    challenge: "The company's legacy Django portal suffered from critical performance bottlenecks, slow mobile loading times, and layout shifts that frustrated clients. In addition, search engine indexing was highly incomplete, and the company needed to showcase its 37-product catalog with direct conversion channels while preventing unverified image downloads.",
    solution: "We engineered a decoupled Next.js static site optimized for Hostinger deployment. The platform displays all 37 industrial machines in categorised filters, utilizing local storage for navigation persistence and exact scroll restorations. We integrated secure image-download deterrence wrappers and pre-filled WhatsApp/email enquiry workflows to maximize direct inbound conversions.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web3Forms"],
    results: [
      { value: "Sub-1.0s", label: "Page Load Speed" },
      { value: "100%", label: "SEO Indexing" },
      { value: "Zero", label: "Hosting Overhead" }
    ],
    video: "/assets/rapturetech-web.webm",
    link: "https://rapturetech.co.in/",
    logo: "/assets/rapturetech-logo.webp"
  },
  "offline-pos-weighbridge": {
    slug: "offline-pos-weighbridge",
    title: "Offline POS & Weighbridge System",
    category: "Enterprise Software",
    themeId: "blue",
    description: "A production-ready, 100% offline-first Android application designed for Shreeji Building Material Supplier, executing high-speed local transactions and direct thermal printer billing via Android AIDL.",
    challenge: "Industrial weighbridge terminals operate in remote quarry and warehouse environments with highly unstable cellular networks. Legacy cloud systems caused major operational delays when connectivity dropped. Manual logbooks resulted in ticket number collision, mismatched billing weight records, and slow print queues for waiting drivers.",
    solution: "We developed a real-time POS dashboard utilizing local state caching and instant data sync triggers. The interface handles orders, kitchen progress statuses, billing, table layouts, and analytics through a sleek design system.",
    techStack: ["React Native", "Kotlin", "SQLite", "Drizzle ORM", "Android AIDL", "MMKV", "Expo Bare Workflow"],
    results: [],
    images: ["/assets/POS_App.webp"],
    logo: "/assets/rapturetech-logo.webp"
  },
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
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${study.title} | TechMate4u Case Study`,
      description: study.description,
      url: `https://techmate4u.com/work/${slug}`,
      type: "website",
      siteName: "TechMate4u",
      images: [
        {
          url: study.images?.[0] || "/assets/hero-visual.webp",
          width: 1200,
          height: 630,
          alt: `${study.title} — TechMate4u`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | TechMate4u Case Study`,
      description: study.description,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

  const isOfflinePOS = slug === "offline-pos-weighbridge";

  if (isOfflinePOS) {
    return (
      <main className="min-h-screen pt-32 pb-0 relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
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
          <BackButton />

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start mb-12 w-full">
            <div className="text-left items-start flex flex-col">
              <span className="text-xs font-extrabold tracking-wider uppercase text-[var(--primary)] mb-3">
                Client: Rapture Tech
              </span>
              <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-black leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl max-w-3xl mb-6">
                {study.title}
              </h1>
              <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg max-w-3xl mb-8">
                {study.description}
              </p>
            </div>
            {study.logo && (
              <div className="relative h-24 w-56 overflow-hidden border border-[var(--line-soft)] bg-white p-3 rounded-2xl flex items-center justify-center shadow-md shrink-0 lg:mt-8">
                <Image
                  src={study.logo}
                  alt="Rapture Tech Logo"
                  fill
                  sizes="(max-width: 768px) 224px, 224px"
                  className="object-contain p-2"
                />
              </div>
            )}
          </div>


            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 border rounded-md border-[var(--line)] bg-[var(--surface-muted)] text-[var(--text-soft)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Mockup Showcase */}
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--panel)] shadow-2xl p-4 sm:p-6 mb-24 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
                <Image
                  src="/assets/POS_App.webp"
                  alt="Offline POS & Weighbridge System Main View"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>


          {/* Project Overview & Business Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
            <Card className="p-8 lg:p-10 border border-[var(--line)] bg-[var(--panel)]">
              <h3 className="font-[family-name:var(--font-outfit)] text-xl font-black text-[var(--text)] mb-5 flex items-center gap-2.5">
                <FileText className="h-5.5 w-5.5 text-[var(--primary)]" />
                Project Overview
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)] font-medium">
                The Offline POS & Weighbridge Management System was engineered to replace slow, error-prone manual ledger recording at active industrial supply hubs. The solution operates completely offline, allowing weighbridge operators to instantly weigh transport vehicles, record material supplier details, and issue printed invoices without dependency on network availability.
              </p>
            </Card>

            <Card className="p-8 lg:p-10 border border-[var(--line)] bg-[var(--panel)]">
              <h3 className="font-[family-name:var(--font-outfit)] text-xl font-black text-[var(--text)] mb-5 flex items-center gap-2.5">
                <Compass className="h-5.5 w-5.5 text-yellow-500" />
                The Business Challenge
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)] font-medium">
                Industrial weighbridge terminals operate in remote quarry and warehouse environments with highly unstable cellular networks. Legacy cloud systems caused major operational delays when connectivity dropped. Manual logbooks resulted in ticket number collision, mismatched billing weight records, and slow print queues for waiting drivers.
              </p>
            </Card>
          </div>

          {/* Our Solution (Feature Cards) */}
          <div className="mb-24">
            <SectionHeading
              title="Our Solution Architecture"
              subtitle="Modular features designed for hardware reliability, low latency, and zero data loss."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
              <Card className="p-6 border border-[var(--line)] bg-[var(--panel)] flex flex-col">
                <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-5">
                  <WifiOff className="h-5 w-5" />
                </div>
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--text)] mb-3">
                  Offline Billing
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Transact continuously under zero-network conditions with immediate SQLite commits and local transactional safety.
                </p>
              </Card>

              <Card className="p-6 border border-[var(--line)] bg-[var(--panel)] flex flex-col">
                <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-5">
                  <FileText className="h-5 w-5" />
                </div>
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--text)] mb-3">
                  Receipt Generation
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Automatically compile invoice data into crisp print templates using structured layouts with 24-hour time standards.
                </p>
              </Card>

              <Card className="p-6 border border-[var(--line)] bg-[var(--panel)] flex flex-col">
                <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-5">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--text)] mb-3">
                  Customer Management
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Instant character-by-character local queries auto-fill customer name, location, and account details to reduce operator typing.
                </p>
              </Card>

              <Card className="p-6 border border-[var(--line)] bg-[var(--panel)] flex flex-col">
                <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-5">
                  <Printer className="h-5 w-5" />
                </div>
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--text)] mb-3">
                  Native Printer Integration
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Direct bitmap rendering pipelines push layouts to built-in thermal printers via a high-performance Android AIDL service.
                </p>
              </Card>

              <Card className="p-6 border border-[var(--line)] bg-[var(--panel)] flex flex-col">
                <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-5">
                  <History className="h-5 w-5" />
                </div>
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--text)] mb-3">
                  Receipt History
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Locally store, search, and reprint past invoices. Built-in Drizzle query filters prevent duplicate entry updates.
                </p>
              </Card>

              <Card className="p-6 border border-[var(--line)] bg-[var(--panel)] flex flex-col">
                <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--text)] mb-3">
                  Backup & Restore
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Password-protected settings dashboard lets managers securely export backup DBs and restore files via scoped storage APIs.
                </p>
              </Card>
            </div>
          </div>

          {/* Project Highlights (Responsive Icon Grid) */}
          <div className="mb-24 py-16 border-y border-[var(--line)] bg-[var(--surface-muted)] relative overflow-hidden rounded-3xl px-8">
            <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-black text-center text-[var(--text)] mb-12">
              Project Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <WifiOff className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">100% Offline</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">Native Android</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <Printer className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">Thermal Printer Integration</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <Database className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">Local Database</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <Users className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">Customer Records</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <History className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">Receipt History</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">Backup & Restore</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-4 dark:bg-slate-900 dark:border-slate-800">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <span className="font-bold text-sm text-[var(--text)]">Production Ready</span>
              </div>
            </div>
          </div>

          {/* Engineering Highlights */}
          <div className="mb-24">
            <SectionHeading
              title="Engineering Highlights"
              subtitle="Solving physical hardware and OS level boundaries under offline conditions."
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 max-w-6xl">
              <div>
                <h4 className="font-bold text-base text-[var(--text)] mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  Offline-First Architecture
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] pl-3.5">
                  Powered by local SQLite and Drizzle ORM. Transaction logs and schema migrations run natively on startup. SQLite database files can be copied cleanly without file-locks for direct device-to-device sharing.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[var(--text)] mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  Native Android Hardware Bridging
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] pl-3.5">
                  Bypassed React Native asynchronous bridge boundaries by implementing a native Kotlin AIDL thread wrapper. This allows the JavaScript layout to render directly to native hardware bitmaps for high-speed printing.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[var(--text)] mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  Optimized Mobile UX
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] pl-3.5">
                  Eliminated soft keyboard occlusion bugs on handheld screens by placing actions in-flow. Dynamic autofocus and real-time uppercase format locks speed up operators' input flow significantly.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-base text-[var(--text)] mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  Local Data Reliability
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] pl-3.5">
                  Database backups execute through a debounced background sync exporter utilizing Android's Storage Access Framework (SAF), writing files off-thread without causing layout stutters or UI lag.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div className="mb-24">
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-black text-[var(--text)] mb-6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border rounded-xl border-[var(--line)] bg-[var(--panel)] text-sm font-bold text-[var(--text-soft)] shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-24">
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-black text-[var(--text)] mb-8">
              Application Gallery
            </h3>
            <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--panel)] shadow-xl relative aspect-[16/10]">
              <Image
                src="/assets/POS_App.webp"
                alt="POS App Dashboard Layout"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <CTABanner
          title="Need custom software for your business?"
          description="Connect with our design studio to scope out your next enterprise application, offline system, or custom hardware integration."
          primaryBtnText="Start Your Project"
          primaryBtnHref="/#contact"
          secondaryBtnText="View More Projects"
          secondaryBtnHref="/work"
        />
      </main>
    );
  }

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
        <BackButton />

        {/* Case Study Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start mb-16 w-full">
          <div className="text-left items-start flex flex-col">
            <span className="text-xs font-extrabold tracking-wider uppercase text-[var(--primary)] mb-3 block">
              {study.category}
            </span>
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-black leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl max-w-3xl mb-6">
              {study.title}
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg max-w-2xl">
              {study.description}
            </p>
          </div>
          {study.logo && (
            <div className="relative h-24 w-56 overflow-hidden border border-[var(--line-soft)] bg-white p-3 rounded-2xl flex items-center justify-center shadow-md shrink-0 lg:mt-8">
              <Image
                src={study.logo}
                alt={`${study.title} Logo`}
                fill
                sizes="(max-width: 768px) 224px, 224px"
                className="object-contain p-2"
              />
            </div>
          )}
        </div>

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
