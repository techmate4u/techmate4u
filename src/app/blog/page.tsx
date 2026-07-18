import type { Metadata } from "next";
import SectionHeading from "@/components/sections/SectionHeading";
import BlogGrid, { type BlogPost } from "@/components/sections/BlogGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Engineering Journal & Insights | TechMate4u Blog",
  description:
    "Technical articles, architectural insights, and headless commerce blueprints compiled by the TechMate4u engineering team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "TechMate4u Engineering Journal | Web Dev, AI & SEO Insights",
    description:
      "In-depth technical articles on Next.js, AI automation, technical SEO, and headless commerce from the TechMate4u team.",
    url: "https://techmate4u.com/blog",
    type: "website",
    siteName: "TechMate4u",
    images: [
      {
        url: "/assets/hero-visual.webp",
        width: 1200,
        height: 630,
        alt: "TechMate4u Engineering Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMate4u Engineering Journal",
    description: "Technical articles on Next.js, AI, and SEO from the TechMate4u team.",
  },
};

const POSTS: BlogPost[] = [
  {
    slug: "why-headless-commerce-is-the-future-for-ethnic-brands",
    title: "Why Headless Commerce is the Future for Ethnic Wear Brands",
    category: "E-commerce",
    readTime: "5 min read",
    date: "July 8, 2026",
    author: "Jay Patel",
    excerpt: "How transitioning from legacy monolithic e-commerce platforms to decoupled Next.js storefronts solves layout shifts, improves core web vitals, and drives 30%+ higher conversions.",
  },
  {
    slug: "how-we-reduced-onboarding-latency-by-80-percent-with-ai-agents",
    title: "How We Reduced Onboarding Latency by 80% with AI Automation",
    category: "Automation",
    readTime: "6 min read",
    date: "June 24, 2026",
    author: "Jay Patel",
    excerpt: "A deep-dive technical blueprint of our event-driven cron orchestration pipelines, secure databases integration, and instant user updates sync workflows.",
  },
  {
    slug: "demystifying-technical-seo-why-lighthouse-score-isnt-everything",
    title: "Demystifying Technical SEO: Why a 100/100 Lighthouse Score Is Only the Beginning",
    category: "SEO",
    readTime: "4 min read",
    date: "May 15, 2026",
    author: "Jay Patel",
    excerpt: "Exploring search engine index parameters, crawler latency, server-side generation (SSG) hydration, and semantic HTML markup for modern indexing optimization.",
  },
];

const CATEGORIES = ["All", "E-commerce", "Automation", "SEO"];

export default function BlogListingPage() {
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
          eyebrow="Journal"
          title="Engineering Logs & Architectural Notes"
          subtitle="Real-world learnings, production code guides, and execution insights from the developer console."
          align="center"
        />

        <BlogGrid posts={POSTS} categories={CATEGORIES} />
      </div>

      <CTABanner
        title="Looking for technical execution on your product?"
        description="Let's schedule a scoping call to map out your architecture, API integrations, and database design parameters."
        primaryBtnText="Consult Engineering"
        primaryBtnHref="/#contact"
        secondaryBtnText="See Our Work"
        secondaryBtnHref="/work"
      />
    </main>
  );
}
