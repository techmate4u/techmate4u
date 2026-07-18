import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Bookmark } from "lucide-react";
import Card from "@/components/ui/Card";
import NewsletterForm from "@/components/forms/NewsletterForm";

interface BlogPostData {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  sections: {
    heading: string;
    body: string;
    code?: string;
  }[];
}

const ARTICLES: Record<string, BlogPostData> = {
  "why-headless-commerce-is-the-future-for-ethnic-brands": {
    slug: "why-headless-commerce-is-the-future-for-ethnic-brands",
    title: "Why Headless Commerce is the Future for Ethnic Wear Brands",
    category: "E-commerce",
    readTime: "5 min read",
    date: "July 8, 2026",
    author: "Jay Patel",
    excerpt: "How transitioning from legacy monolithic e-commerce platforms to decoupled Next.js storefronts solves layout shifts, improves core web vitals, and drives 30%+ higher conversions.",
    sections: [
      {
        heading: "1. The Bottlenecks of Legacy Stores",
        body: "Monolithic storefront templates are loaded with script overhead. Heavy JavaScript libraries, unoptimized image tags, and rendering blockers keep mobile visitor experiences slow. For premium ethnic brands where fabric textures, detailed embroidery zoom, and color depth are critical, legacy templates often result in Layout Shifts (CLS) and sluggish load times."
      },
      {
        heading: "2. Decoupling the Presentation Layer",
        body: "Headless commerce separates the backend business rules (like checkout, inventories, and cart endpoints) from the user interface. Using Next.js on the frontend allows developers to pull product details via fast GraphQL or REST APIs during static site generation (SSG). Visual files like high-resolution images are served over edge CDNs using modern compression formats (WebP/AVIF) and dynamic subset loaders.",
        code: `// Fetching static paths for product pages in Next.js
export async function generateStaticParams() {
  const products = await commerceApi.getProducts();
  return products.map(product => ({
    handle: product.slug
  }));
}`
      },
      {
        heading: "3. Direct Conversion Returns",
        body: "By implementing a headless storefront, page loads drop to sub-second speeds. In test runs, Core Web Vitals optimization directly correlates with conversion improvements: page speeds under 1.5s yield up to a 38% conversion increase. Eliminating mobile layout shifts also improves crawl search ranking metrics significantly."
      }
    ]
  },
  "how-we-reduced-onboarding-latency-by-80-percent-with-ai-agents": {
    slug: "how-we-reduced-onboarding-latency-by-80-percent-with-ai-agents",
    title: "How We Reduced Onboarding Latency by 80% with AI Automation",
    category: "Automation",
    readTime: "6 min read",
    date: "June 24, 2026",
    author: "Jay Patel",
    excerpt: "A deep-dive technical blueprint of our event-driven cron orchestration pipelines, secure databases integration, and instant user updates sync workflows.",
    sections: [
      {
        heading: "1. The Event-driven Architecture",
        body: "Manual data input and customer verification are classic bottlenecks during user onboarding. By replacing manual processing steps with asynchronous queue triggers, incoming user payloads trigger instantaneous background jobs. This offloads thread computation, returning immediate success responses to client browsers."
      },
      {
        heading: "2. Setting up Job Queues and Cron Orchestrators",
        body: "We set up decoupled event consumer threads utilizing serverless edge runtimes and fast Redis transaction caching. As soon as a transaction payload registers, a background worker sanitizes, formats, and executes authentication verification rules asynchronously without blocking thread response loops.",
        code: `// Queue consumer trigger example
export async function POST(req: Request) {
  const payload = await req.json();
  // Queue task in background worker
  await edgeQueue.enqueue("onboard-verification", {
    userId: payload.userId,
    timestamp: Date.now()
  });
  
  return Response.json({ status: "queued" });
}`
      },
      {
        heading: "3. Database Synchronization and User Messaging",
        body: "Using instant webhook notifications via platforms like Twilio and Sendgrid, users receive confirmation details in less than 3 seconds. The automated verification and processing loops cut overall setup friction to zero, yielding an 80% decrease in manual onboarding latency times."
      }
    ]
  },
  "demystifying-technical-seo-why-lighthouse-score-isnt-everything": {
    slug: "demystifying-technical-seo-why-lighthouse-score-isnt-everything",
    title: "Demystifying Technical SEO: Why a 100/100 Lighthouse Score Is Only the Beginning",
    category: "SEO",
    readTime: "4 min read",
    date: "May 15, 2026",
    author: "Jay Patel",
    excerpt: "Exploring search engine index parameters, crawler latency, server-side generation (SSG) hydration, and semantic HTML markup for modern indexing optimization.",
    sections: [
      {
        heading: "1. The Crawler Perspective",
        body: "A clean 100/100 score in your local browser Lighthouse audits does not guarantee page-one visibility. Crawlers parse pages headlessly and index raw content structures. If your single-page app requires client-side JavaScript hydration to display title tags, headers, and context layouts, index crawlers may hit timeout limits before indexing takes place."
      },
      {
        heading: "2. Hydration vs. Static Pre-Rendering (SSG)",
        body: "Static site generation ensures that all page contents, structural headers, and JSON-LD schema definitions are hardcoded directly into the static HTML files delivered by server CDNs. Index bots parse pre-rendered documents instantly, avoiding JS execution latency altogether.",
        code: `// Structured JSON-LD metadata payload
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Demystifying Technical SEO",
  "author": { "@type": "Person", "name": "Jay Patel" }
};`
      },
      {
        heading: "3. Semantic HTML Hierarchy",
        body: "Use semantic tags (<main>, <article>, <section>, <header>, <footer>) instead of nesting div blocks indefinitely. Proper hierarchy (single h1 per route, structured h2 and h3 subsections) allows index crawlers to determine your context outlines, drastically boosting domain authority metrics."
      }
    ]
  }
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | TechMate4u Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://techmate4u.com/blog/${slug}`,
      type: "article",
      siteName: "TechMate4u",
      images: [
        {
          url: "/assets/hero-visual.webp",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": new Date(article.date).toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "TechMate4u",
      "logo": {
        "@type": "ImageObject",
        "url": "https://techmate4u.com/assets/t-logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://techmate4u.com/blog/${article.slug}`
    }
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
        "name": "Blog",
        "item": "https://techmate4u.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://techmate4u.com/blog/${article.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen pt-32 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Background blueprint details */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:opacity-80 transition-opacity mb-8"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
          Back to journal
        </Link>

        {/* Article Meta Header */}
        <div className="border-b pb-8 mb-12" style={{ borderColor: "var(--line)" }}>
          <span className="text-xs font-extrabold tracking-wider uppercase text-[var(--primary)] mb-3 block">
            {article.category}
          </span>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-black leading-[1.15] tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[var(--text-soft)] font-semibold">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-[var(--primary)]" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[var(--primary)]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[var(--primary)]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Article Contents */}
        <article className="space-y-10 pb-24 text-[var(--text)]">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold tracking-tight text-[var(--text)] sm:text-2xl">
                {section.heading}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[var(--text-muted)] font-medium">
                {section.body}
              </p>
              {section.code && (
                <div className="rounded-lg overflow-hidden border border-[var(--line-soft)] bg-slate-950 p-4 font-mono text-xs text-slate-300 leading-normal max-w-full overflow-x-auto">
                  <pre><code>{section.code}</code></pre>
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Closing Callout with Newsletter subscription */}
        <div className="pb-24">
          <Card className="p-6 sm:p-10 border border-[var(--line)] bg-[var(--panel)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="flex size-10 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mb-4">
                  <Bookmark className="h-5 w-5" />
                </span>
                <h3 className="font-[family-name:var(--font-outfit)] text-lg md:text-xl font-black text-[var(--text)] mb-3 leading-tight">
                  Get Technical Updates in Your Inbox
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-[var(--text-muted)]">
                  Subscribe to our monthly engineering logs for storefront audits, database schemas, and performance benchmarks. No marketing spam.
                </p>
              </div>
              <div className="bg-[var(--surface-muted)] p-5 rounded-xl border border-[var(--line-soft)]">
                <NewsletterForm />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
