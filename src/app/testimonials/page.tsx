import type { Metadata } from "next";
import { Star, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | TechMate4u",
  description:
    "Read honest reviews from founders, product managers, and developers who partner with TechMate4u for high-performance software engineering.",
};

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  category: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "TechMate4u delivered a clean and modern website that matched our brand perfectly. The process was smooth, communication was quick, and the final result exceeded expectations.",
    author: "Pratha Patel",
    role: "Founder",
    company: "Riwaaz Ethnic",
    category: "E-commerce",
    rating: 5,
  },
  {
    quote: "The dashboard and platform experience were designed thoughtfully with attention to usability and performance. The team was responsive and easy to work with.",
    author: "Dr. A. K. Sharma",
    role: "Director of Operations",
    company: "Lab2Door Specimen Logistics",
    category: "Healthcare Logistics",
    rating: 5,
  },
  {
    quote: "The AI automation system they built for our customer onboarding reduced manual data entry by 80%. We were able to scale operations without increasing head count. Highly recommended engineering team.",
    author: "Siddharth Mehta",
    role: "Co-Founder",
    company: "CapitalFlow SaaS",
    category: "Automation Systems",
    rating: 5,
  },
  {
    quote: "Their SEO audit and Core Web Vitals optimization pushed our rankings to page one for our target keywords. Organic leads have tripled since the launch. The speed is unbelievable.",
    author: "Elena Rostova",
    role: "Director of Growth",
    company: "NovaHR",
    category: "Technical SEO",
    rating: 5,
  },
  {
    quote: "We needed a fast tableside interface for our waitstaff that worked perfectly under load. TechMate4u designed a real-time sync POS screen that feels fluid and cut order latency to zero.",
    author: "Marcus Chen",
    role: "General Manager",
    company: "Lantern Hospitality Group",
    category: "Hospitality & POS",
    rating: 5,
  },
  {
    quote: "Outstanding engineering execution. They delivered a modular dashboard in TypeScript that is cleaner than what most enterprise teams write. They stay on for handover and documentation.",
    author: "Devendra Rao",
    role: "VP of Product",
    company: "LogisticsGo",
    category: "Mobile & Web Apps",
    rating: 5,
  }
];

const HIGHLIGHTS = [
  { value: "5.0/5", label: "Client Satisfaction Score" },
  { value: "100%", label: "On-Time Handover Rate" },
  { value: "95+", label: "Avg. Core Web Vitals Score" },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 relative overflow-hidden">
      {/* Blueprint background layout texture */}
      <div className="absolute inset-0 bg-[url(/assets/bg-blueprint.png)] bg-no-repeat bg-cover opacity-[0.06] pointer-events-none -z-10" />

      {/* Hexagons background mesh */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-[url(/assets/bg-hexagons.png)] bg-no-repeat bg-contain opacity-[0.09] pointer-events-none -z-10 animate-float" />

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
          eyebrow="Reviews"
          title="Trusted by Startups and Product Teams"
          subtitle="Read honest reviews and engineering case notes from founders, operators, and product managers who build with TechMate4u."
          align="center"
        />

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-20">
          {HIGHLIGHTS.map((stat, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center justify-center p-8 text-center select-none bg-[var(--panel)]"
            >
              <span className="font-[family-name:var(--font-outfit)] text-4xl font-black text-[var(--primary)] mb-2 flex items-center gap-1.5 justify-center">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </span>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-24 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-6 md:p-8 flex flex-col justify-between border border-[var(--line)] bg-[var(--panel)] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] text-[var(--primary)] border border-[color-mix(in_srgb,var(--primary)_15%,transparent)]">
                    {testimonial.category}
                  </span>
                  <div className="flex gap-0.5 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-[var(--text)] italic mb-8 font-medium">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="border-t pt-5 flex items-center gap-3.5" style={{ borderColor: "var(--line-soft)" }}>
                <span className="flex size-10 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--text-soft)]">
                  <MessageSquare className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text)]">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {testimonial.role}, <span className="font-semibold text-[var(--text-soft)]">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CTABanner
        title="Ready to build your high-performance application?"
        description="Schedule a short scoping consultation to plan your milestones, architecture, and launch timelines with us."
        primaryBtnText="Start Project"
        primaryBtnHref="/#contact"
        secondaryBtnText="View Our Services"
        secondaryBtnHref="/#services"
      />
    </main>
  );
}
