# Step 2 — Own-site Content Inventory

**Date:** 2026-07-15  
**Source:** Full codebase inspection of all `src/app/**/page.tsx` files and component data

---

## 2.1 Full Page Inventory with Keyword Intent Mapping

| URL | Current Title | Realistic Keyword Intent | Quality Assessment |
|---|---|---|---|
| `/` | Digital Product Studio & Web Engineering | "web development company Ahmedabad", "next.js agency India", "digital agency India" | ✅ Exists — **weak keyword targeting**, no geo |
| `/about-us` | About Us \| TechMate4u | "web development company Ahmedabad about", "who is TechMate4u" | ✅ Exists — H1 is generic brand copy, no keywords |
| `/services` | (no page.tsx found) | "web development services Ahmedabad" (high intent) | ❌ **404** — listed in sitemap, linked in footer, does not exist |
| `/services/web-development` | Web Development & Engineering | "web development company Ahmedabad", "Next.js development India", "custom website development" | ✅ Good content — H1/title weak on geo |
| `/services/technical-seo` | Technical SEO & Site Speed | "technical SEO services India", "website speed optimization Ahmedabad" | ✅ Good content — best-named service page |
| `/services/automation-systems` | AI & Business Automation | "AI automation agency India", "business automation Ahmedabad", "n8n automation services" | ✅ Good — strong differentiator, sparse content |
| `/services/mobile-app-development` | Mobile App Development | "mobile app development Ahmedabad", "React Native app development India" | ✅ Exists — weak FAQ coverage |
| `/services/digital-marketing` | Conversion-Optimized Marketing | "digital marketing agency Ahmedabad", "performance marketing India" | ⚠️ H1 title "Conversion-Optimized Marketing" not a search phrase anyone uses |
| `/services/social-media-management` | Social Media Management | "social media management Ahmedabad", "Instagram management India" | ⚠️ Exists in code — **missing from sitemap** |
| `/work` | Selected Work | "web development portfolio", "digital agency portfolio India" | ⚠️ "Selected Work" title has no keyword value |
| `/work/riwaaz-ethnic` | Riwaaz Ethnic \| Case Study | "headless commerce Next.js case study", "e-commerce website development India" | ✅ Rich case study content + real metrics |
| `/work/lab2door` | Lab2Door \| Case Study | "healthcare app development India", "medical scheduling software" | ✅ Rich content + real metrics |
| `/work/restaurant-management` | Restaurant POS Dashboard \| Case Study | "restaurant POS software India", "restaurant management system" | ✅ Rich content + real metrics |
| `/work/techflow-systems` | TechFlow Systems \| Case Study | "SaaS platform redesign", "onboarding optimization" | ⚠️ In code data, **not in sitemap** — not indexed |
| `/work/finserve-solutions` | FinServe Solutions \| Case Study | "enterprise portal migration", "finance dashboard development" | ⚠️ In code data, **not in sitemap** — not indexed |
| `/testimonials` | Client Reviews & Testimonials | "TechMate4u reviews", "web agency reviews India" | ⚠️ 9 testimonials — thin page, no schema |
| `/blog` | Engineering Journal & Insights | "web development blog India", "technical SEO blog" | ⚠️ "Engineering Journal" — not a search phrase, only 3 posts |
| `/blog/why-headless-commerce-is-the-future-for-ethnic-brands` | Why Headless Commerce... | "headless commerce ethnic brands", "Next.js e-commerce" | ✅ Specific, well-targeted niche angle |
| `/blog/how-we-reduced-onboarding-latency-by-80-percent-with-ai-agents` | How We Reduced Onboarding... | "AI automation case study", "onboarding latency reduction" | ✅ Informational, demonstrates expertise |
| `/blog/demystifying-technical-seo-why-lighthouse-score-isnt-everything` | Demystifying Technical SEO... | "technical SEO beyond Lighthouse", "Lighthouse score SEO" | ✅ Good — targets a real search question |
| `/contact` | Get in Touch | "contact TechMate4u", "hire web developer Ahmedabad" | ✅ Fine for conversion — no keyword issues |
| `/audit` | Request a Free Website Audit | "free website SEO audit", "website speed audit India" | ✅ Strong lead-gen page — well-targeted |

---

## 2.2 Content Gaps — Missing Pages That Should Exist

| Gap | Why it matters | Priority |
|---|---|---|
| `/services` index page (currently 404s) | Receives sitemapped traffic, linked from footer — Googlebot hits a 404 for a priority-0.8 URL | **Critical** |
| Location/city landing page (e.g. `/web-development-ahmedabad`) | High local intent — "web development company Ahmedabad" is primary commercial term; no page targets it directly | **High** |
| `/services/erp-software` or `/services/custom-software` | ERP/custom software is mentioned throughout but has no dedicated page | **High** |
| `/services/ecommerce-development` | E-commerce is a major use case (Riwaaz Ethnic) but no dedicated service page exists | **High** |
| Blog posts for AI automation, mobile apps, digital marketing | 3 blog posts total, none targeting "AI automation Ahmedabad", "mobile app agency India" — zero TOFU coverage for 4 of 6 services | **High** |
| `/pricing` or `/packages` | Agencies with transparent pricing signals convert better; competitors use this as a trust differentiator | **Medium** |
| Industry vertical landing pages (restaurants, healthcare, e-commerce) | Case studies cover all 3 — no pages that say "restaurant software development India" to capture that traffic | **Medium** |
| `/process` or `/how-we-work` as standalone page | Process is a homepage section only; standalone page would capture "how to hire a web developer" type queries | **Low** |

---

## 2.3 Blog Content Assessment

**Current state:** 3 blog posts. All written by "Jay Patel". All technically competent but:
- Zero posts targeting local search intent (e.g. "web development Ahmedabad", "AI automation for small businesses India")
- Zero posts in the "digital marketing" or "social media" topic cluster — two services with no blog support
- Zero how-to guides or comparison articles (high-volume informational intent)
- Posts hardcoded in `page.tsx` — no CMS, no dynamic authoring, no date-based freshness signal

**Recommended topic clusters that are missing:**
1. AI Automation — "What is n8n automation", "Make vs Zapier for small business India", "WhatsApp automation for business"
2. Mobile Apps — "React Native vs Flutter 2026", "cost of mobile app development in India"
3. Digital Marketing — "Google Ads vs Meta Ads for Indian SMBs", "CRO for e-commerce in India"
4. Local SEO — "how to rank a service business in Ahmedabad", "Google Business Profile optimization"
5. Case Studies (narrative SEO) — "how we built a restaurant POS system" (long-form retelling of existing work)

---

## 2.4 Case Study Coverage (Work Pages)

| Slug | In sitemap? | Tech demonstrated | Service it supports |
|---|---|---|---|
| `riwaaz-ethnic` | ✅ | Next.js, headless e-commerce, Core Web Vitals | Web development |
| `lab2door` | ✅ | Supabase, scheduling, cron | Web development + automation |
| `restaurant-management` | ✅ | Real-time sync, POS, Next.js | Web development + ERP/custom software |
| `techflow-systems` | ❌ **NOT in sitemap** | SaaS redesign, onboarding UX | Web development |
| `finserve-solutions` | ❌ **NOT in sitemap** | Enterprise portal, PostgreSQL | Web development + custom software |

**Two case studies are live pages but not indexed** — `techflow-systems` and `finserve-solutions` are in the codebase and served but not in `sitemap.ts`.

---

## 2.5 Content Quality Issues

| Issue | Detail |
|---|---|
| Testimonials page | 9 testimonials — no `AggregateRating` or `Review` schema; content not linked to service pages |
| Service page FAQ content | Good questions but short answers (1-3 sentences). Google favors longer, more comprehensive FAQ answers for featured snippets |
| About Us page | H1 is brand narrative ("We build the digital systems that power modern businesses") — no keyword anywhere in H1 or meta title |
| Homepage | All below-fold content is inside `content-visibility: auto` + `dynamic()` — technically crawlable with JS rendering but adds a crawl tier delay |
| `/work` index page | H1 is "Selected Digital Products & Architectures" (from SectionHeading component) — poetic, no keyword |
| Service page internal links | Service pages link back to `/#services` (homepage hash) instead of `/services` (dedicated page that doesn't exist) |
