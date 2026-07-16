import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Gauge,
  Globe,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Check,
  X,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";
import ProcessLite from "@/components/ProcessLite";

export const metadata: Metadata = {
  title: "About Us | TechMate4u",
  description:
    "Meet TechMate4u, a full-cycle digital product studio building high-performance websites, automation systems, SEO infrastructure, and mobile apps.",
  alternates: {
    canonical: "/about-us",
  },
};

const values = [
  {
    title: "Engineering-first mindset",
    copy: "Strict, type-safe, maintainable code. No technical debt quietly handed off six months later.",
    icon: Braces,
    accent: "var(--primary)",
  },
  {
    title: "Transparent process",
    copy: "Discovery, design, development, and launch stay visible — no mystery gaps or surprise pivots.",
    icon: Workflow,
    accent: "#6a9eab",
  },
  {
    title: "Performance obsessed",
    copy: "Speed, search, and conversion quality are built into every build because pretty pixels alone don't pay the bills.",
    icon: Gauge,
    accent: "#2563eb",
  },
  {
    title: "Startup-friendly, enterprise-ready",
    copy: "We move quickly, but still build with CI/CD pipelines, careful releases, and rollback-aware delivery.",
    icon: Rocket,
    accent: "var(--accent)",
  },
  {
    title: "End-to-end delivery",
    copy: "One accountable team from discovery to deployment to handover — not five vendors pointing fingers.",
    icon: ShieldCheck,
    accent: "var(--primary)",
  },
  {
    title: "Global reach, local precision",
    copy: "We serve teams across time zones with async-first workflows, clean documentation, and overlap hours that work.",
    icon: Globe,
    accent: "#6a9eab",
  },
];

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Avg. weeks to launch" },
  { value: "0", label: "Missed deadlines" },
  { value: "3", label: "People. That's it." },
];

const contrast = [
  {
    theirs: "Assigns a junior dev after the sales call",
    ours: "The people you talk to are the people who build it",
  },
  {
    theirs: "Hands off a site that's slow, bloated, and hard to manage",
    ours: "Engineers high-performance, lightweight assets built to scale",
  },
  {
    theirs: "Makes you wait days for a simple status update",
    ours: "Maintains a direct, transparent communication loop with you",
  },
  {
    theirs: "Disappears after launch day",
    ours: "Stays on for post-launch fixes, monitoring, and handover",
  },
  {
    theirs: "Sends a 40-page proposal nobody reads",
    ours: "Sends a clear scope, timeline, and fixed price in 48 hours",
  },
  {
    theirs: "Treats SEO as a checkbox at the end",
    ours: "Bakes performance, indexing, and Core Web Vitals into the build",
  },
];

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "TechMate4u",
      "url": "https://techmate4u.com",
      "logo": "https://techmate4u.com/assets/t-logo.webp",
      "founder": [
        {
          "@type": "Person",
          "name": "Manav Rajvansh",
          "jobTitle": "Founder & CTO"
        },
        {
          "@type": "Person",
          "name": "Keyur Sonagara",
          "jobTitle": "Co-founder & CSO"
        },
        {
          "@type": "Person",
          "name": "Jay Patel",
          "jobTitle": "Head of Product & Design"
        }
      ]
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Fixed background ── */}
      <div className="fixed inset-0 -z-20" style={{ background: "var(--hero-base)" }} />
      
      

      

      <div
        className="fixed inset-0 -z-20 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--line-soft) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36">
        <div>
          <div className="mb-8 h-px w-24 bg-[var(--primary)]" />
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[var(--text-soft)]">
            TechMate4u Studio
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-bold leading-[1.1] tracking-tight text-[var(--text)] sm:text-4xl lg:text-6xl">
            We build the digital systems that power modern businesses.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            TechMate4u is a full-cycle digital product studio engineering
            high-performance websites, intelligent automation, and scalable mobile
            applications for ambitious brands and growing startups.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              variant="primary"
              href="/#contact"
              className="h-12 rounded-full px-7 shadow-lg"
              icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              iconPosition="right"
            >
              Start Your Project
            </Button>
            <Button
              variant="secondary"
              href="/#portfolio"
              className="h-12 rounded-full px-7"
            >
              See the Work
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 hidden h-40 w-px bg-[var(--primary)]/70 lg:block" />
          <div
            className="overflow-hidden rounded-lg border shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)]"
            style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--panel) 72%, transparent)" }}
          >
            <div className="border-b p-5" style={{ borderColor: "var(--line-soft)" }}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                    Delivery console
                  </p>
                  <p className="mt-2 text-xl font-bold text-[var(--text)]">One accountable team</p>
                </div>
                <Sparkles className="h-5 w-5 text-[var(--primary)]" />
              </div>
            </div>

            <div className="grid gap-px bg-[var(--line-soft)] md:grid-cols-2">
              {[
                ["Scope", "Business goals, users, and constraints"],
                ["Design", "Interfaces that feel simple under pressure"],
                ["Code", "Typed, maintainable, release-ready systems"],
                ["Growth", "Speed, search, analytics, and iteration"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[var(--panel)] p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-soft)]">{label}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{value}</p>
                </div>
              ))}
            </div>

            <div className="p-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border" style={{ borderColor: "var(--line-soft)" }}>
                <Image
                  src="/assets/amara.webp"
                  alt="TechMate4u product work on a laptop"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — WHO WE ARE + STATS
      ═══════════════════════════════════════════════════ */}
      <section className="w-full border-y py-24" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--text-soft)]">Who we are</p>
              <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
                Not a template shop. A product studio with opinions.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[var(--text-muted)]">
              <p>
                TechMate4u is a team of engineers, designers, and digital strategists
                obsessed with building things that actually work: fast, scalable, and
                built to convert. Every project is treated like our own, with clean
                engineering and thoughtful design working together.
              </p>
              <p>
                From the first discovery call to post-launch optimization, we handle
                the entire journey. Whether you are validating an idea, scaling a
                business, or modernizing an established brand, we bring the technical
                depth and creative direction to make it happen.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="flex flex-col items-center justify-center p-8 text-center select-none bg-[var(--panel)]">
                <span className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-[var(--primary)] mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">{stat.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2.5 — OUR PROCESS
      ═══════════════════════════════════════════════════ */}
      <ProcessLite />

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — WHY TECHMATE4U (Values Grid)
      ═══════════════════════════════════════════════════ */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--text-soft)]">
            Why teams choose us
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-outfit)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            Serious execution without agency fog.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)]">
            Six principles that shape every project we take on — and every line of code we ship.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => (
            <Card
              key={item.title}
              className="group relative overflow-hidden p-6 hover:-translate-y-1"
              style={{ background: "color-mix(in srgb, var(--panel) 60%, transparent)" }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
              />

              <span
                className="mb-5 flex size-11 items-center justify-center rounded-lg border"
                style={{
                  borderColor: "var(--line-soft)",
                  background: `color-mix(in srgb, ${item.accent} 10%, transparent)`,
                }}
              >
                <item.icon className="h-5 w-5" style={{ color: item.accent }} />
              </span>

              <h3 className="text-lg font-bold text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — AGENCY VS US (honest contrast)
      ═══════════════════════════════════════════════════ */}
      <section className="w-full border-y py-24" style={{ borderColor: "var(--line)", background: "var(--surface-muted)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--text-soft)]">
              The honest difference
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
              What you actually get vs. the usual agency experience.
            </h2>
          </div>

          {/* Comparison table */}
          <div className="overflow-hidden rounded-lg border" style={{ borderColor: "var(--line)" }}>
            {/* Table header */}
            <div className="grid grid-cols-2 border-b" style={{ borderColor: "var(--line)", background: "var(--panel)" }}>
              <div className="px-5 py-4 sm:px-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-soft)]">Typical agency</span>
              </div>
              <div className="border-l px-5 py-4 sm:px-8" style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--primary) 6%, var(--panel))" }}>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">With TechMate4u</span>
              </div>
            </div>

            {/* Rows */}
            {contrast.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${i < contrast.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--line-soft)" }}
              >
                <div className="flex items-start gap-3 px-5 py-5 sm:px-8" style={{ background: "color-mix(in srgb, var(--panel) 40%, transparent)" }}>
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                  <span className="text-sm leading-6 text-[var(--text-muted)]">{row.theirs}</span>
                </div>
                <div className="flex items-start gap-3 border-l px-5 py-5 sm:px-8" style={{ borderColor: "var(--line-soft)", background: "color-mix(in srgb, var(--primary) 4%, transparent)" }}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span className="text-sm leading-6 text-[var(--text)]">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="You tell us what needs to get built. We'll tell you exactly what it takes."
        description="No 40-page proposals. No discovery phase that costs half the budget. A clear scope, a fixed timeline, and a price — within 48 hours of your first message."
        primaryBtnText="Get in Touch"
        primaryBtnHref="/#contact"
        secondaryBtnText="See Past Work"
        secondaryBtnHref="/#portfolio"
      />
    </main>
  );
}
