# Step 10 — Quick-Win Optimization List

**Date:** 2026-07-15  
**Source:** Step 1 (Technical Audit) + Step 2 (Content Inventory)

---

## 10.1 Overview

A prioritized list of 9 quick-win optimization actions that can be implemented in under 2 hours each. These address the highest-severity technical and on-page SEO issues identified in the audit.

---

## 10.2 The 9 Quick-Win Actions

| Priority | Issue | Action Required | Files to Modify | Estimated Time |
|---|---|---|---|---|
| **1 (Critical)** | `/services` returns 404 but is in sitemap.xml | Create a simple, clean, responsive Services index page listing all 6 services with proper internal links. | `src/app/services/page.tsx` [NEW] | 60 mins |
| **2 (Critical)** | Missing routes in `sitemap.ts` | Add `/services/social-media-management` and the two dynamic case studies (`techflow-systems`, `finserve-solutions`) to the static and dynamic route arrays. | `src/app/sitemap.ts` | 15 mins |
| **3 (High)** | Homepage H1 has zero keyword relevance | Update the main hero H1 (or secondary hidden header) to contain target keyphrases like *"Custom Web Engineering & AI Automation Studio"*. | `src/components/Hero.tsx` | 20 mins |
| **4 (High)** | Homepage Meta Title has no location modifiers | Append geographical anchors to the metadata title block, changing it from `Digital Product Studio & Web Engineering` to `Digital Product Studio & Web Engineering \| Ahmedabad, India`. | `src/app/page.tsx` (Metadata) | 10 mins |
| **5 (High)** | Gaps in Local Schema and Social Profiles | Expand the `ProfessionalService` schema in global layout. Add social profile links (LinkedIn, Instagram) to `sameAs` array, and specify local coordinates or physical address details. | `src/app/layout.tsx` | 30 mins |
| **6 (High)** | FAQPage Schema missing on Service Pages | Map the existing FAQ array in service data to JSON-LD `FAQPage` schemas rendered dynamically on service detail pages. | `src/app/services/[slug]/page.tsx` | 40 mins |
| **7 (Medium)** | Placeholder alt text `"WWDC Character"` on Services section | Replace the placeholder alt description on the Services grid graphic with a descriptive, keyword-supportive string. | `src/components/Services.tsx` | 10 mins |
| **8 (Medium)** | Article Schema missing on Blog Posts | Implement JSON-LD `Article` schema on dynamic blog post details, pulling author name, publish date, and thumbnail dynamically. | `src/app/blog/[slug]/page.tsx` | 30 mins |
| **9 (Low)** | Missing Canonical Tags | Add dynamic canonical tag matching the current pathname (without search queries) to the global layout header metadata. | `src/app/layout.tsx` (Metadata config) | 15 mins |
