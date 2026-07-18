import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck, Cpu, Target, Layers } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ContactForm from "@/components/forms/ContactForm";
import AuditForm from "@/components/forms/AuditForm";

export interface ServiceData {
  slug: string;
  title: string;
  eyebrow: string;
  heroDescription: string;
  benefits: string[];
  features: {
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development & Engineering",
    eyebrow: "Engineering",
    heroDescription: "High-fidelity, lightning-fast React and Next.js applications engineered to convert visitors into customers.",
    benefits: [
      "99+ Lighthouse performance, accessibility, and best practices scores",
      "React Server Components (RSC) for zero client-bundle overhead",
      "Modern Tailwind CSS design framework configuration",
      "Tactile user interactions with Framer Motion animations"
    ],
    features: [
      {
        title: "Custom Web Applications",
        desc: "Full-stack JavaScript applications utilizing Next.js App Router for optimal dynamic/static page pre-rendering."
      },
      {
        title: "Responsive Layout Systems",
        desc: "Mobile-first responsive viewport layouts, utilizing flexible grid tracks that look gorgeous from 375px through 4K displays."
      },
      {
        title: "API & Headless Integrations",
        desc: "Sync systems with Stripe payments, headless Shopify e-commerce backends, Sanity CMS, and robust client tools."
      }
    ],
    faqs: [
      {
        question: "Which frontend frameworks do you use?",
        answer: "We build exclusively with Next.js, React, and TypeScript. This stack ensures robust compile-time security, fast loading times, and solid developer support."
      },
      {
        question: "Do you build custom admin dashboards?",
        answer: "Yes, we design custom dashboards using Tailwind CSS and integrate database backends like PostgreSQL, Supabase, or MongoDB to track records."
      },
      {
        question: "How long does an average website build take?",
        answer: "A typical custom landing page takes 2 weeks, while larger web applications and custom systems usually deliver in 4 to 6 weeks."
      }
    ]
  },
  "technical-seo": {
    slug: "technical-seo",
    title: "Technical SEO & Site Speed",
    eyebrow: "Optimization",
    heroDescription: "Organic traffic optimization systems utilizing semantic HTML structure, JSON-LD schemas, and Core Web Vitals refinement.",
    benefits: [
      "< 1.2s Largest Contentful Paint (LCP) for instant mobile loading",
      "Valid Structured Data to guarantee rich snippet ranking features",
      "Clean Site Architectures optimized to minimize search crawler budget",
      "Fully accessible WCAG 2.2 AA compliant layouts"
    ],
    features: [
      {
        title: "Core Web Vitals Boost",
        desc: "We optimize scripts, split styles, and lazy load assets to pass Google's strict performance and UX criteria."
      },
      {
        title: "JSON-LD Schema Markup",
        desc: "Generate custom rich snippets for services, articles, and reviews so engines index your precise context."
      },
      {
        title: "Crawl Budget Optimization",
        desc: "Configure robots.txt, dynamic sitemap templates, canonical links, and redirect sheets to streamline search indexing."
      }
    ],
    faqs: [
      {
        question: "What is technical SEO?",
        answer: "Technical SEO focuses on optimizing the code, performance, and structure of your site so search engines can crawl, render, and index it efficiently."
      },
      {
        question: "Do you rewrite site copy?",
        answer: "We focus on the technical code, tag structure, and semantic elements. We can consult on keyword research and layout structure, but copywriting is handled separately."
      }
    ]
  },
  "automation-systems": {
    slug: "automation-systems",
    title: "AI & Business Automation",
    eyebrow: "AI Ops",
    heroDescription: "Automate manual operations, sync spreadsheets to databases, and deploy custom LLM agents to scale business workloads.",
    benefits: [
      "80%+ time saved on daily operations and manual data entry",
      "Zero error integrations linking CRM pipelines and client communication",
      "Custom AI assistance utilizing OpenAI, Claude, and specialized APIs",
      "Automated reports delivered daily straight to your inbox"
    ],
    features: [
      {
        title: "Custom LLM Assistants",
        desc: "Integrate AI models inside support chat triggers, lead qualifiers, or automated summary analyzers."
      },
      {
        title: "Workflow Pipelines",
        desc: "Sync HubSpot, Salesforce, Gmail, and databases using Zapier, Make, or custom API endpoints."
      },
      {
        title: "Automated Reporting Sheets",
        desc: "Compile data across various source feeds into clean Google Sheets or interactive visual dashboards."
      }
    ],
    faqs: [
      {
        question: "What workflows can be automated?",
        answer: "Any repetitive, rule-based task can be automated. Examples include lead routing, invoicing, database syncs, notification alerts, and PDF report creation."
      },
      {
        question: "Which automation tools do you use?",
        answer: "We use Make.com, Zapier, Python scripts, Node.js cron workers, and directly link APIs together based on complexity."
      }
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Tactile Mobile",
    heroDescription: "Tactile native iOS and Android application builds combining modern fluid motion with offline-first synchronization.",
    benefits: [
      "Cross-platform delivery using React Native to cut cost in half",
      "Tactile tactility using smooth transitions and haptic triggers",
      "Offline-first design caching network data for uninterrupted usage",
      "Deployment across both Apple App Store and Google Play Store"
    ],
    features: [
      {
        title: "React Native Engineering",
        desc: "Single codebase compilation for iOS and Android platforms ensuring rapid feature updates."
      },
      {
        title: "Tactile User Interfaces",
        desc: "High-fidelity, responsive screen transitions, custom navigation systems, and interactive buttons."
      },
      {
        title: "Offline Sync Engines",
        desc: "Store user actions locally in secure databases and sync automatically when network connection returns."
      }
    ],
    faqs: [
      {
        question: "Do you develop native Swift or Kotlin apps?",
        answer: "We focus on React Native, which compiles code down to native iOS and Android packages. This approach allows sharing up to 90% of business logic across platforms."
      },
      {
        question: "How do you handle App Store submissions?",
        answer: "We manage the entire submission pipeline, including App Store Connect setup, Play Store configuration, metadata prep, and privacy compliance."
      }
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Conversion-Optimized Marketing",
    eyebrow: "Acquisition",
    heroDescription: "Acquisition campaign execution, analytics tracking audits, and conversion rate optimizations designed to scale ROI.",
    benefits: [
      "Conversion tracking audits using Meta Pixel and Google Tag Manager",
      "Funnel mapping aligning landing page copywriting with ad visuals",
      "Continuous CRO testing to reduce customer acquisition costs",
      "Clear, customizable Looker Studio KPI dashboard layouts"
    ],
    features: [
      {
        title: "Conversion Funnel Design",
        desc: "Map precise user paths from initial ad click to contact page submissions, removing friction points."
      },
      {
        title: "GTM & Analytics Setup",
        desc: "Configure advanced Google Analytics 4 tracks to measure exact clicks, scroll depths, and conversion values."
      },
      {
        title: "Landing Page Optimizations",
        desc: "A/B test copywriting hooks, button placements, form fields, and load times to maximize conversion rates."
      }
    ],
    faqs: [
      {
        question: "Do you manage ad spend budgets?",
        answer: "Yes, we configure and monitor campaigns across Meta, Google Search, and LinkedIn Ads, tailoring optimizations around target cost-per-acquisition (CPA)."
      },
      {
        question: "How do you measure marketing ROI?",
        answer: "We integrate GTM event tracking and compile live Looker Studio dashboard sheets showing CPC, Conversion Rate, and total Customer Acquisition Cost."
      }
    ]
  },
  "social-media-management": {
    slug: "social-media-management",
    title: "Social Media Management",
    eyebrow: "Engagement",
    heroDescription: "Build a strong, organic social media presence with data-backed content strategies and active community management.",
    benefits: [
      "Consistent brand voice and aesthetic across all primary channels",
      "Targeted growth strategies focusing on high-intent target audiences",
      "Data-driven performance updates and analytic reports every month",
      "Full handling of graphics, copywriting, scheduling, and community replies"
    ],
    features: [
      {
        title: "Content Production",
        desc: "Custom graphic designs, video outlines, and professional copy tailored specifically for each social channel."
      },
      {
        title: "Community Interaction",
        desc: "Engaging with target profiles, replying to comments, and monitoring inbox messages to capture fresh leads."
      },
      {
        title: "Aesthetic Planning",
        desc: "Maintaining grid aesthetics, brand kit alignments, and scheduled updates so profiles stay consistently fresh."
      }
    ],
    faqs: [
      {
        question: "Which platforms do you support?",
        answer: "We specialize in LinkedIn, Instagram, X (Twitter), and TikTok. We optimize content templates depending on your core target demographic."
      },
      {
        question: "Do you handle video filming?",
        answer: "We provide video scripting, guidelines, editing, and animation. If physical filming is required, we help write storyboards that your local team can capture, which we then edit."
      }
    ]
  }
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | TechMate4u`,
    description: service.heroDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | TechMate4u`,
      description: service.heroDescription,
      url: `https://techmate4u.com/services/${slug}`,
      type: "website",
      siteName: "TechMate4u",
      images: [
        {
          url: "/assets/hero-visual.webp",
          width: 1200,
          height: 630,
          alt: `${service.title} — TechMate4u`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | TechMate4u`,
      description: service.heroDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const isSEO = slug === "technical-seo";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.heroDescription,
    "provider": {
      "@type": "ProfessionalService",
      "name": "TechMate4u",
      "url": "https://techmate4u.com",
      "logo": "https://techmate4u.com/assets/t-logo.webp"
    },
    "areaServed": "Worldwide",
    "serviceType": service.eyebrow
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://techmate4u.com/services/${slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen pt-32 pb-0 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      

      

      

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
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:opacity-80 transition-opacity mb-8"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
          Back to all services
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center mb-24">
          <div className="text-left items-start flex flex-col">
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-black leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl max-w-2xl">
              {service.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-[var(--text-muted)] sm:text-lg max-w-xl">
              {service.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" href="#get-started">
                {isSEO ? "Get Free Audit" : "Request Free Consultation"}
              </Button>
              <Button variant="secondary" href="/#portfolio">
                View Projects
              </Button>
            </div>
          </div>

          {/* Benefits Panel */}
          <Card className="p-8 lg:p-10 border border-[var(--line)] bg-[var(--panel)]">
            <h3 className="font-[family-name:var(--font-outfit)] text-lg font-black text-[var(--text)] mb-6 pb-2 border-b border-[var(--line-soft)] flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[var(--primary)]" />
              Service Key Outcomes
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[var(--text-muted)] leading-normal">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Core Capabilities */}
        <div className="mb-24">
          <SectionHeading
            title="Core Architecture Capabilities"
            subtitle="How we structure our development frameworks to ensure optimal product output."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {service.features.map((feat, index) => {
              const icons = [Cpu, Target, Layers];
              const FeatIcon = icons[index % icons.length];
              return (
                <Card key={feat.title} className="p-6 border border-[var(--line)] bg-[var(--panel)] flex flex-col">
                  <div className="p-3.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] w-fit mb-5">
                    <FeatIcon className="h-5 w-5" />
                  </div>
                  <h4 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[var(--text)] mb-3">
                    {feat.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {feat.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-24">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Get technical insights and details about our execution roadmap."
            align="center"
          />
          <FAQAccordion items={service.faqs} />
        </div>

        {/* Inline Conversion Form */}
        <div id="get-started" className="max-w-3xl mx-auto mb-24 scroll-mt-24">
          <Card className="p-8 lg:p-12 border border-[var(--line)] bg-[var(--panel)] shadow-xl relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-10 relative z-10">
              <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-black text-[var(--text)] mb-3">
                {isSEO ? "Get Your Free Website Audit" : "Let's Scale Your Business"}
              </h2>
              <p className="text-sm text-[var(--text-muted)] max-w-lg mx-auto">
                {isSEO
                  ? "Enter your details below and we will perform a thorough technical audit on your speed, schema structure, and indexing errors."
                  : "Fill out the contact form below and our lead engineer will respond within 4 hours with a custom consultation."}
              </p>
            </div>

            <div className="relative z-10">
              {isSEO ? <AuditForm /> : <ContactForm />}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
