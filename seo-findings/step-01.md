# Step 1 — Own-site Technical Audit

**Date:** 2026-07-15  
**Source:** Codebase inspection + live production fetch (techmate4u.com) + cached Lighthouse report (port 3001, latest build)

---

## 1.1 Lighthouse Scores (Mobile, Cached Report)

| Metric | Score / Value |
|---|---|
| Performance | **88** ⚠️ |
| SEO | **100** ✅ |
| Accessibility | **100** ✅ |
| Best Practices | **100** ✅ |
| LCP | **3.9 s** ❌ (target: < 2.5 s) |
| FCP | **1.1 s** ✅ |
| CLS | **0** ✅ |
| TBT | **50 ms** ✅ |
| Speed Index | **1.7 s** ✅ |

**Summary:** The 3.9 s LCP is the single performance bottleneck keeping the score at 88 instead of 95+. All other metrics are excellent. LCP is caused by the desktop background mesh image (`bg.webp`) and/or heavy JS chunk evaluation before the largest visible element paints. FCP at 1.1 s is clean. This report was run on the local dev build at port 3001 — production CDN caching and edge optimizations (via Vercel) will likely improve LCP by 0.5–1.0 s, but it still warrants investigation.

---

## 1.2 Route Map (All Pages)

| URL | Type | Notes |
|---|---|---|
| `/` | Homepage | Server component with dynamic imports for all below-fold sections |
| `/about-us` | Static page | Has canonical |
| `/services` | Static page | Listed in sitemap but no `page.tsx` exists — likely 404s ⚠️ |
| `/work` | Static page | Portfolio index |
| `/work/riwaaz-ethnic` | Dynamic | |
| `/work/lab2door` | Dynamic | |
| `/work/restaurant-management` | Dynamic | |
| `/testimonials` | Static page | |
| `/blog` | Static page | Blog index |
| `/blog/why-headless-commerce-is-the-future-for-ethnic-brands` | Dynamic | |
| `/blog/how-we-reduced-onboarding-latency-by-80-percent-with-ai-agents` | Dynamic | |
| `/blog/demystifying-technical-seo-why-lighthouse-score-isnt-everything` | Dynamic | |
| `/contact` | Static page | |
| `/audit` | Static page | Lead-gen audit request page |
| `/services/web-development` | Dynamic | |
| `/services/technical-seo` | Dynamic | |
| `/services/automation-systems` | Dynamic | |
| `/services/mobile-app-development` | Dynamic | |
| `/services/digital-marketing` | Dynamic | |
| `/services/social-media-management` | Dynamic | **Present in page data + navbar but MISSING from sitemap.ts** ❌ |
| `/privacy-policy` | Static | Has canonical |
| `/terms-and-conditions` | Static | Has canonical |
| `/refund-policy` | Static | Has canonical |

**Total unique URLs in sitemap:** 22 (as confirmed from live sitemap.xml)  
**Missing from sitemap:** `/services/social-media-management` (exists in codebase, linked from navbar)

---

## 1.3 Meta Titles

| Page | Title Tag |
|---|---|
| Homepage | `TechMate4u \| Digital Product Studio & Web Engineering` |
| About Us | `About Us \| TechMate4u` |
| Contact | `Get in Touch \| TechMate4u` |
| Blog index | `Engineering Journal & Insights \| TechMate4u` |
| Audit | `Request a Free Website Audit \| TechMate4u` |
| Work index | `Selected Work \| TechMate4u` |
| Testimonials | `Client Reviews & Testimonials \| TechMate4u` |
| Services/web-development | `Web Development & Engineering \| TechMate4u` |
| Services/technical-seo | `Technical SEO & Site Speed \| TechMate4u` |
| Services/automation-systems | `AI & Business Automation \| TechMate4u` |
| Services/mobile-app-development | `Mobile App Development \| TechMate4u` |
| Services/digital-marketing | `Conversion-Optimized Marketing \| TechMate4u` |
| Services/social-media-management | `Social Media Management \| TechMate4u` |
| Work/[slug] | `[Project Title] \| Case Study \| TechMate4u` |

**Issues:**
- Homepage title `"Digital Product Studio & Web Engineering"` — generic phrase with low local search intent; missing geo modifier (Ahmedabad/India) ⚠️
- `About Us | TechMate4u` — weak; no keyword in title ⚠️
- `Selected Work` — zero keyword value ⚠️
- `Engineering Journal & Insights` — branded language, not search-intent aligned ⚠️
- `Conversion-Optimized Marketing` — unusual phrasing; users search for "digital marketing agency" ⚠️
- **None of the high-value pages include geo modifiers** (Ahmedabad, Gujarat, India) ❌
- OG title differs from `<title>` on homepage (`"Next-Gen Digital Products"` vs `"Digital Product Studio & Web Engineering"`) — inconsistency ⚠️

---

## 1.4 Meta Descriptions

| Page | Description quality |
|---|---|
| Homepage | ✅ Good — clear value proposition |
| About Us | ✅ Good — mentions key services |
| Blog | ✅ Clear |
| Contact | ✅ Clear, has call-to-action |
| Audit | ✅ Strong — mentions Core Web Vitals |
| Service pages | ✅ Uses `heroDescription` field directly — descriptive |
| Work/[slug] | ✅ Uses project description |

**No major description issues.** All descriptions are within character limits and are human-readable.

---

## 1.5 H1 Hierarchy

| Page | H1 text |
|---|---|
| Homepage | `Accelerate Growth with Next-Generation Digital Systems` |
| About Us | `We build the digital systems that power modern businesses.` |
| Service pages | `{service.title}` — e.g. "Web Development & Engineering" |
| Blog posts | `{article.title}` — article headline |
| Work/[slug] | `{study.title}` — project name |
| Legal pages | Via `LegalDocument` component |

**Issues:**
- Homepage H1 (`"Accelerate Growth with Next-Generation Digital Systems"`) — poetic/brand copy, **zero keyword match** for any search term a potential client would actually type ❌
- `/work` and `/testimonials` index pages: H1s not confirmed from code; likely use `SectionHeading` components — need to verify they render as H1s not H2s.
- Service pages use `service.title` as H1 — good structure, but titles like "Technical SEO & Site Speed" are better optimized than "Conversion-Optimized Marketing" (not what people search).

---

## 1.6 Schema Markup

**Present:**
- `ProfessionalService` schema in `layout.tsx` (global, every page) — includes name, URL, logo, image, description, address (Ahmedabad/Gujarat/IN), contactPoint (phone + email), sameAs (WhatsApp only)
- `Service` schema on every `/services/[slug]` page — includes name, description, provider, areaServed: "Worldwide", serviceType

**Issues:**
- `ProfessionalService` schema missing: `openingHours`, `priceRange`, `aggregateRating`, `geo` (latitude/longitude), `hasMap` ⚠️
- `sameAs` array only includes WhatsApp — should include LinkedIn, Instagram, X, Google Business Profile URL ❌
- `areaServed: "Worldwide"` on service pages is vague — local services should specify India/Ahmedabad alongside international ⚠️
- No `BreadcrumbList` schema on service or blog pages ❌
- No `Article` schema on blog posts ❌
- No `FAQPage` schema on service pages despite explicit FAQ sections being present ❌ (high-value for featured snippets)
- No `Organization` schema (only `ProfessionalService`) — some ranking signals prefer `Organization` for knowledge panel eligibility ⚠️

---

## 1.7 Internal Linking

**Positive:**
- Footer has full nav links to all major pages
- Navbar dropdown links to all 6 service pages
- Service pages link back to `/#services`
- Blog posts link back to blog index via CTABanner

**Issues:**
- Homepage sections (Services, Portfolio, Process, CTA) are all inside `content-visibility: auto` + `dynamic()` imports — Google CAN crawl these with JavaScript rendering but it adds a processing tier ⚠️
- No contextual internal links between blog posts and service pages (e.g. blog post on headless commerce should link to web-development service page) ❌
- Work/case study pages do not link to the relevant service page (e.g. Riwaaz Ethnic should link to `/services/web-development`) ❌
- `/services` is in sitemap at priority 0.8 but likely 404s since there's no `src/app/services/page.tsx` file ❌ — this is a **crawl waste** — Googlebot will hit a 404 for a URL it believes is high-priority

---

## 1.8 Image Alt Text

| Location | Alt text quality |
|---|---|
| Navbar logo | `"TechMate4u"` ✅ |
| Footer logo | `"TechMate4u"` ✅ |
| Hero bg image | `"Background Mesh"` — decorative, `aria-hidden` ✅ |
| Project screenshots | `"${title} screenshot ${idx + 1}"` — generic ⚠️ |
| About Us team photos | `{member.name}` ✅ |
| About Us laptop image | `"TechMate4u product work on a laptop"` ✅ |
| Services section character | `"WWDC Character"` — wrong/generic ❌ |
| CTA monogram | `"TM4U Monogram"` — decorative, acceptable |

**Critical:** The `"WWDC Character"` alt text on the Services section is wrong — it appears to be a leftover from a placeholder and should describe the actual image content. ❌

---

## 1.9 Canonical Tags

| Page | Canonical declared |
|---|---|
| About Us | ✅ `/about-us` |
| Privacy Policy | ✅ `/privacy-policy` |
| Terms & Conditions | ✅ `/terms-and-conditions` |
| Refund Policy | ✅ `/refund-policy` |
| Homepage | ❌ Not explicitly set (Next.js defaults to current URL) |
| All service pages | ❌ Not set |
| All work pages | ❌ Not set |
| All blog posts | ❌ Not set |
| Contact | ❌ Not set |
| Blog index | ❌ Not set |
| Audit | ❌ Not set |

**Risk:** Without canonical tags on service, work, and blog pages, if any query params or UTM parameters get indexed, duplicate content signals could be sent to Google. Low risk with Next.js but best practice to add explicitly.

---

## 1.10 robots.txt (Live)

```
User-Agent: *
Allow: /
Disallow: /api/
Sitemap: https://techmate4u.com/sitemap.xml
```

✅ Correct — allows all bots, blocks only API routes, points to sitemap.

**Note:** No specific rules for `Anthropic-ai`, `GPTBot`, `ClaudeBot` — these are allowed by default under `*`. No reason to block them for a marketing site.

---

## 1.11 Critical Issues Summary (Prioritized)

| # | Issue | Severity | Impact |
|---|---|---|---|
| 1 | `/services` returns 404 (no `page.tsx`) but is in sitemap at priority 0.8 | **Critical** | Crawl waste, 404 signal |
| 2 | `social-media-management` service page missing from sitemap | **Critical** | Page not indexed |
| 3 | Homepage H1 has zero keyword match — purely brand copy | **High** | No keyword relevance signal |
| 4 | Homepage title has no geo modifier (Ahmedabad/India) | **High** | Local SEO gap |
| 5 | No `FAQPage` schema despite FAQ sections on every service page | **High** | Missing featured snippet opportunity |
| 6 | No `Article` schema on blog posts | **High** | Reduced SERP rich results eligibility |
| 7 | No `BreadcrumbList` schema on service/blog pages | **Medium** | Missing SERP breadcrumb display |
| 8 | `sameAs` schema only has WhatsApp — missing LinkedIn, Instagram | **Medium** | Weaker entity disambiguation |
| 9 | Internal linking gap: blog ↔ services, case studies ↔ services | **Medium** | PageRank dilution, weaker topical signals |
| 10 | Alt text `"WWDC Character"` on Services section image | **Medium** | Wrong/misleading alt text |
| 11 | No canonical tags on service/blog/work pages | **Low** | Low risk but best practice gap |
| 12 | LCP 3.9 s (Performance 88) — not an SEO blocker but affects user signals | **Low-Medium** | CWV ranking signal (minor) |
