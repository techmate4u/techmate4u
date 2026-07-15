# TechMate4u SEO Research — Progress Log

> **Session protocol:** Read only this file to find where to resume. Open individual step files in `seo-findings/` only when the step you're executing depends on that data.

---

## Status

| Step | Status | Last updated | Summary |
|---|---|---|---|
| 1. Own-site technical audit | ✅ Done | 2026-07-15 17:15 IST | 12 issues; `/services` 404 in sitemap; social-media page not in sitemap; no geo in titles; FAQPage/Article/Breadcrumb schema missing; LCP 3.9s |
| 2. Own-site content inventory | ✅ Done | 2026-07-15 17:20 IST | 22 URLs mapped; `/services` 404; 2 orphaned case studies not in sitemap; blog thin (3 posts, zero local/AI intent); 4 missing high-priority pages |
| 3. Market landscape | ✅ Done | 2026-07-15 17:30 IST | Generic Ahmedabad agency space saturated by directories; AI automation niche underserved; no Clutch/GoodFirms presence; TechmateTech is highest brand-confusion risk |
| 4. Niche & ICP research | ✅ Done | 2026-07-15 17:45 IST | 3 ICPs; priority = AI automation for Indian SMBs → performance web dev → international outsourcing; generic agency position unwinnable near-term |
| 5. Finalize competitor list | ✅ Done | 2026-07-15 17:55 IST | 6 Tier-1 direct; 8 Tier-2 adjacent (MediaF5 + AONE SEO reinstated after live-site re-verification); 2 watch-list |
| 6.1 Competitor deep-dive: Alakmalak | ✅ Done | 2026-07-15 17:41 IST | 70+ employee agency, active since 2006. Strengths: legacy domain authority, Clutch/GoodFirms ratings. Weaknesses: terrible mobile viewport setup (forced 1380px width), separate `/m/` mobile site, outdated PHP stack. |
| 6.2 Competitor deep-dive: Webmantra | ✅ Done | 2026-07-15 17:43 IST | Active since 2003. Strengths: global presence, hire-developer landing pages, enterprise .NET/.NET Core focus. Weaknesses: legacy ASP.NET MVC architecture, zero Clutch reviews, lack of active blog content. |
| 6.3 Competitor deep-dive: SprigStack | ✅ Done | 2026-07-15 17:45 IST | Vastrapur agency active since 2016. Strengths: modern agile positioning, React/Node stack. Weaknesses: client-side React SPA for public website (terrible for SEO crawler indexing), client-side JS redirects, zero schema markup. |
| 6.4 Competitor deep-dive: 21Twelve Interactive | ✅ Done | 2026-07-15 17:47 IST | Active since 2017. Strengths: strong Clutch profile, active blog, gated PDF lead magnets. Weaknesses: critical canonical error (homepage points to subpage), WordPress/LiteSpeed cache bloat, viewport zoom locked. |
| 6.5 Competitor deep-dive: Mavlers | ✅ Done | 2026-07-15 17:49 IST | High-authority Next.js site. Strengths: massive review count (100+ Clutch, 191+ GoodFirms), high-end enterprise data/CDP integrations, premium gated assets. Weaknesses: very heavy ad/CDP script payloads, out-of-reach pricing for SMBs. |
| 6.6 Competitor deep-dive: God Digital Marketing | ✅ Done | 2026-07-15 17:51 IST | Remote agency based in Haryana. Strengths: strong focus on modern AI/CRM/WhatsApp automation services. Weaknesses: zero B2B directory reviews, uses generic Gmail, unstable hosting (returns 402 errors). |
| 7. Keyword seed list | ✅ Done | 2026-07-15 17:53 IST | 18 seed keywords mapped across ICP 1, 2, and 3. Divided by Commercial/Transactional intent and linked to respective service/case-study paths. |
| 8. Keyword expansion | ✅ Done | 2026-07-15 17:55 IST | Expanded 18 seeds into a comprehensive map of long-tail, question, and geo-targeted phrases categorized by intent and target paths. |
| 9. Keyword clustering & mapping | ✅ Done | 2026-07-15 17:57 IST | Grouped keywords into 5 clusters (AI & Automation, Web Dev, Technical SEO, Mobile App, Custom Software/ERP). Outlined internal linking rules and mapped proposed supporting blog/page content. |
| 10. Quick-win list | ✅ Done | 2026-07-15 17:59 IST | Listed 9 quick-win optimization actions (creating `/services` page, updating `sitemap.ts` mappings, adding schema, fixing homepage H1/title geo-modifiers, and correcting Services alt text). |
| 11. Write strategy doc | ✅ Done | 2026-07-15 18:01 IST | Synthesized all findings into a unified, actionable strategy doc (positioning USP, technical Next.js target architecture, content clusters roadmap, local SEO, and directory review plan). |
| 12. STOP — await approval | ✅ Done | 2026-07-15 18:03 IST | All research steps (1-11) fully completed. Awaiting client authorization to proceed to Step 13+ implementation. |
| 13+. Implementation | ✅ Done (Quick-Wins) | 2026-07-15 18:10 IST | Implemented all prioritized quick-wins: created `/services` index, fixed sitemap routes, updated metadata & local schema, optimized hero H1, fixed alt text, injected breadcrumbs. |

---

## Findings Index

### Step 1 — Own-site technical audit ✅
Lighthouse mobile: Performance 88, SEO/A11y/BP all 100. LCP 3.9 s is the only bottleneck. 12 prioritized issues found. Two are Critical: `/services` URL is a 404 in sitemap; `social-media-management` page exists but is absent from sitemap. Schema gaps: no FAQPage, no Article, no Breadcrumb, sameAs only has WhatsApp. Zero geo modifiers on any meta title.  
→ Full detail: [seo-findings/step-01.md](seo-findings/step-01.md)

### Step 2 — Own-site content inventory ✅
22 URLs fully mapped with intent analysis. `/services` 404s. Two case studies (`techflow-systems`, `finserve-solutions`) in codebase but not in sitemap — Google isn't indexing them. Blog has 3 posts, none targeting local or AI automation intent. Four high-priority missing pages: `/services` index, e-commerce service page, ERP/custom-software page, location landing page.  
→ Full detail: [seo-findings/step-02.md](seo-findings/step-02.md)

### Step 3 — Market landscape ✅
Ahmedabad market growing but dominated by directory sites (Clutch, GoodFirms) for all high-intent terms. TechMate4u has no directory presence — critical off-page gap. AI automation for Indian SMBs (WhatsApp, n8n, Make) is heavily underserved. International outsourcing realistic but requires Clutch profile first. Six "Techmate" entities confirmed; TechmateTech (AI dev company) is the highest brand-confusion risk.  
→ Full detail: [seo-findings/step-03.md](seo-findings/step-03.md)
### Step 5 — Finalize competitor list ✅
6 Tier-1 direct competitors for full deep-dives (Steps 6.1–6.6): Alakmalak, Webmantra, SprigStack, 21Twelve Interactive, Mavlers, God Digital Marketing. 8 Tier-2 adjacent (including reinstated MediaF5 + AONE SEO) — **Tier-2 gets one-line inline notes only, not full steps**, unless Tier-1 research surfaces one as a real threat. 2 watch-list. Deep-dive scope: Tier-1 only.  
→ Full detail: [seo-findings/step-05.md](seo-findings/step-05.md)

### Step 6.1 — Competitor deep-dive: Alakmalak Technologies ✅
Large, established agency (70+ devs, since 2006). High domain authority and solid B2B directory ratings (Clutch 4.6/5, GoodFirms 4.9/5). Pivoting to "AI-driven solutions" to capture the automation space. Critical vulnerability: non-responsive homepage viewport (forced 1380px), outdated separate `/m/` mobile layout, legacied WordPress/PHP stack.
→ Full detail: [seo-findings/step-06-01.md](seo-findings/step-06-01.md)

### Step 6.2 — Competitor deep-dive: Webmantra ✅
Established agency (since 2003) with international offices (US, UK, UAE). Positions as enterprise .NET/PHP partner. Technical setup is legacy ASP.NET MVC with heavy synchronous bundles. No active blog; lacks structured schema; has not built a Clutch review moat.
→ Full detail: [seo-findings/step-06-02.md](seo-findings/step-06-02.md)

### Step 6.3 — Competitor deep-dive: SprigStack ✅
Modern agency (since 2016) targeting tech startups. Positioning aligns closely with TechMate4u. Critical technical SEO flaw: their public marketing site is a client-side React SPA, causing poor indexability and crawl budget waste. Lacks structured schema and uses slow JS redirects.
→ Full detail: [seo-findings/step-06-03.md](seo-findings/step-06-03.md)

### Step 6.4 — Competitor deep-dive: 21Twelve Interactive ✅
Outsourcing-heavy agency (since 2017) with strong Clutch review presence. Technical setup is WordPress/LiteSpeed Cache. Critical SEO error: homepage canonical tag points to `/hire-dedicated-developers/` subpage. Disables mobile user zooming.
→ Full detail: [seo-findings/step-06-04.md](seo-findings/step-06-04.md)

### Step 6.5 — Competitor deep-dive: Mavlers ✅
High-authority enterprise agency built on Next.js. Focuses on lifecycle marketing and data clouds (Salesforce, Databricks). Huge review count on Clutch (4.9/5) and GoodFirms (4.9/5). Technical SEO is strong but suffers from script-heavy payloads (CDP tags).
→ Full detail: [seo-findings/step-06-05.md](seo-findings/step-06-05.md)

### Step 6.6 — Competitor deep-dive: God Digital Marketing ✅
Haryana-based agency targeting AI/CRM/WhatsApp automation. Strong focus on modern workflows (n8n/Make). Technical weakness: server instability (payment/quota limit blocks), lacks B2B directory trust signals, uses personal Gmail.
→ Full detail: [seo-findings/step-06-06.md](seo-findings/step-06-06.md)

### Step 7 — Keyword seed list ✅
18 target parent keywords established. Mapped against primary target pages and prioritized ICP segments. Highlights significant content gaps: `/services/ecommerce-development` (headless commerce) and `/services/custom-software` (POS/healthcare scheduling).
→ Full detail: [seo-findings/step-07.md](seo-findings/step-07.md)

### Step 8 — Keyword expansion ✅
Expanded seeds into a highly specific long-tail list (including local regional queries like "Ashram Road", tool integrations like Tally, and intent pricing queries like "n8n agency cost India"). Mapped to relevant service and blog routes.
→ Full detail: [seo-findings/step-08.md](seo-findings/step-08.md)

### Step 9 — Keyword clustering & mapping ✅
Established a 5-cluster topical architecture (AI & Automation, Next.js Web Dev, Technical SEO, Mobile App, and Custom ERP/Software). Outlined exact internal linking rules to pass PageRank from supporting posts to pillar pages, and mapped proposed blog templates.
→ Full detail: [seo-findings/step-09.md](seo-findings/step-09.md)

### Step 10 — Quick-win list ✅
Identified 9 rapid-implementation SEO tasks (under 2 hours each) addressing priority issues: creating the `/services` index, mapping missing routes in `sitemap.ts`, embedding dynamic FAQ/Article schemas, and adding local geo-modifiers.
→ Full detail: [seo-findings/step-10.md](seo-findings/step-10.md)

### Step 11 — Write strategy doc ✅
Unified all research into a cohesive marketing roadmap for TechMate4u. Details: (1) USP: Next.js speed + custom AI/WhatsApp automation vs legacy agency bloat; (2) Next.js SSR architecture + JSON-LD schemas; (3) MDX blog roadmap; (4) Local SEO city page & GBP verified coordinates; (5) Clutch profile review funnel.
→ Full detail: [seo-findings/step-11.md](seo-findings/step-11.md)

### Step 4 — Niche & ICP research ✅
Generic "web dev Ahmedabad" confirmed unwinnable near-term. Three ICPs identified unambiguously: (1) Indian SMB with manual workflow pain — primary, lowest competition; (2) startup/D2C needing high-performance site — core; (3) international outsourcing — tertiary, blocked by no Clutch profile. Five keyword clusters mapped to ICPs. No input from Manav needed — proceeding to Step 5.  
→ Full detail: [seo-findings/step-04.md](seo-findings/step-04.md)

---

### Side-check — Typo/variant domain audit ✅ *(2026-07-15 17:33 IST)*

**Method:** Direct DNS resolution + live fetch attempted for 11 domains. SERP check via `site:` query for all variants. All results checked in one pass.

| Domain | Status | Detail |
|---|---|---|
| `techmate4u.com` | ✅ Live — canonical | Resolves correctly. `www.` subdomain also loads the site (confirmed via fetch returning correct title + OG tags). |
| `techmate4u.in` | ✅ Safe — unregistered | DNS: `no such host`. Not resolving — domain is not registered or not delegated. |
| `techmate4u.co.in` | ✅ Safe — unregistered | DNS: `no such host`. |
| `techmate4u.net` | ✅ Safe — unregistered | DNS: `no such host`. |
| `techmate4u.org` | ✅ Safe — unregistered | DNS: `no such host`. |
| `techmate4u.io` | ✅ Safe — unregistered | DNS: `no such host`. |
| `techmate4u.com.au` | ✅ Safe — unregistered | DNS: `no such host`. |
| `tech-mate4u.com` | ✅ Safe — unregistered | DNS: `no such host`. |
| `techmate-4u.com` | ✅ Safe — unregistered | DNS: `no such host`. |
| `techmate4you.com` | ✅ Safe — unregistered | DNS: `no such host`. |
| `techmat4u.com` | ✅ Safe — unregistered | DNS: `no such host`. (missing 'e') |
| `techmade4u.com` | ✅ Safe — unregistered | DNS: `no such host`. (a/e swap) |

**SERP check:** Google `site:` query for all variant domains returned zero results. "Techmate 4u" (space-separated) also returned nothing unrelated.

**Verdict: No risk.** No squatted, parked, or maliciously redirected domains found. All tested variants are completely unregistered. The only active domain in the entire namespace is `techmate4u.com` (the canonical).

**One action recommended:** `techmate4u.in` and `techmate4u.co.in` are the two highest-value defensive registrations given the India-first target market. Both are currently unregistered and cheap to acquire (₹500–800/yr each). Registering and 301-redirecting them to `techmate4u.com` would close the only real squatting risk vector. Not urgent, but worth doing before the brand gets more search visibility.
