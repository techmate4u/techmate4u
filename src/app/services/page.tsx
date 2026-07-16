import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Layout, Smartphone, Workflow, Search, Target, Share2, LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/sections/SectionHeading";
import { SERVICES_DATA } from "./[slug]/page";

export const metadata: Metadata = {
  title: "Our Services | Custom Web Development, AI & Automation | TechMate4u",
  description:
    "Explore our core engineering capabilities, including custom Next.js development, AI workflow automation, technical SEO, mobile applications, and performance marketing.",
  alternates: {
    canonical: "/services",
  },
};

const iconMap: Record<string, LucideIcon> = {
  "web-development": Layout,
  "technical-seo": Search,
  "automation-systems": Workflow,
  "mobile-app-development": Smartphone,
  "digital-marketing": Target,
  "social-media-management": Share2,
};

export default function ServicesIndexPage() {
  const servicesList = Object.values(SERVICES_DATA);

  // Breadcrumb schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://techmate4u.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://techmate4u.com/services"
      }
    ]
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Background blueprint details grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Our Core Services"
            subtitle="We build high-performance web applications, automated business systems, and scalable mobile platforms engineered to convert."
            align="center"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesList.map((service) => {
            const Icon = iconMap[service.slug] || Cpu;
            return (
              <Card
                key={service.slug}
                className="p-8 border border-[var(--line)] bg-[var(--panel)] flex flex-col justify-between hover:border-[var(--primary)] transition-all duration-300 group"
              >
                <div>
                  <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2 block">
                    {service.eyebrow}
                  </span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-black text-[var(--text)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-6">
                    {service.heroDescription}
                  </p>
                  
                  {/* Service Key outcomes list */}
                  <ul className="space-y-2 mb-8">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="text-xs text-[var(--text-muted)] font-semibold flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[var(--primary)] group-hover:translate-x-1.5 transition-transform duration-300 mt-auto"
                >
                  Explore Capabilities
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Card className="p-12 border border-[var(--line)] bg-[var(--panel)] text-center relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-black text-[var(--text)] mb-4">
            Need a Custom Digital System?
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-8">
            Tell us about your operations bottleneck or web product goals. Our engineering lead will respond with a technical architecture draft and free quote.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" href="/contact">
              Let&apos;s Talk
            </Button>
            <Button variant="secondary" href="/#portfolio">
              Our Work
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
