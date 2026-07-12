import type { Metadata } from "next";
import { ShieldAlert, Cpu, Target, FileText, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import Card from "@/components/ui/Card";
import AuditForm from "@/components/forms/AuditForm";

export const metadata: Metadata = {
  title: "Request a Free Website Audit | TechMate4u",
  description:
    "Get a free, comprehensive technical SEO audit of your site. We evaluate speed metrics, Core Web Vitals, crawl errors, and mobile performance.",
};

const AUDIT_STAGES = [
  {
    icon: Cpu,
    title: "Performance & Edge Core Web Vitals",
    description: "We measure LCP, CLS, and Interaction to Next Paint (INP) to pinpoint layout shifts and hydration bottlenecks.",
  },
  {
    icon: Target,
    title: "On-Page Schema & Indexing Analysis",
    description: "We inspect your JSON-LD structural graphs, heading order hierarchies, and canonical redirections.",
  },
  {
    icon: ShieldAlert,
    title: "Mobile Responsiveness & Blocker Auditing",
    description: "We evaluate tap target offsets, browser viewport scales, and script load ordering to maximize mobile engagement.",
  },
  {
    icon: FileText,
    title: "15-Page Custom PDF Report",
    description: "You receive a clear, actionable guide outlining step-by-step code adjustments to boost search visibility.",
  },
];

export default function AuditPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <SectionHeading
          eyebrow="SEO & Speed Audit"
          title="Identify the bottlenecks holding back your rankings"
          subtitle="Submit your website URL and keywords. A senior engineer will analyze your site and send you a custom PDF report within 48 hours — with zero sales pressure."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Analysis Coordinates */}
          <div className="space-y-6 lg:sticky lg:top-36">
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold tracking-tight text-[var(--text)] mb-4">
              What is included in the evaluation?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {AUDIT_STAGES.map((stage, idx) => (
                <Card
                  key={idx}
                  className="p-5 flex gap-4 bg-[var(--panel)] border-[var(--line)]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                    <stage.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text)] mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-xs leading-normal text-[var(--text-muted)] font-medium">
                      {stage.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quality seal */}
            <Card className="p-6 bg-[var(--panel)] border-[var(--line)]">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                <h4 className="font-[family-name:var(--font-outfit)] text-sm font-bold tracking-wide uppercase text-[var(--text-soft)]">
                  Our Audit Guarantee
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] font-medium">
                No automated scanner boilerplate templates. Every website request is hand-reviewed by a developer checking actual code setups. We focus on engineering metrics, not vague marketing buzzwords.
              </p>
            </Card>
          </div>

          {/* Request Form Wrap */}
          <Card className="p-6 sm:p-10 bg-[var(--panel)] border border-[var(--line)] shadow-2xl relative">
            <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-black text-[var(--text)] mb-6">
              Request Your SEO Report
            </h3>
            <AuditForm />
          </Card>
        </div>
      </div>
    </main>
  );
}
