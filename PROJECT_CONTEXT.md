# PROJECT_CONTEXT.md
## TechMate4u.com — Website Redevelopment
### Permanent Development Guide for Human Developers & AI Coding Agents

> **This document is the single source of truth for this project.**
> The site structure referenced throughout is `techmate4u-website-structure.md` (Revised) — treat it as final and do not redesign page structure without explicit approval.

---

## ⚠️ READ THIS FIRST — Rules for Any Agent Working on This Project

1. **This project is built in STAGES, not all at once.** Stages are defined in Section 5. Work through them in order.
2. **Do not start Stage N+1 until Stage N is marked ✅ Approved** in the Stage Log (Section 15). If you are an AI agent and no Stage Log entry exists for the current stage, assume nothing has been approved yet and start from the earliest incomplete stage.
3. **Do not build ahead.** If you finish a stage early and have spare capacity, stop and report — do not silently start the next stage's components.
4. **Do not modify a completed/approved stage** unless the user explicitly asks for a change to it. If a later stage requires a change to an earlier one, stop and flag it instead of silently editing.
5. **Reuse components.** Before creating a new component, check `/src/components` (see Section 12) for something that already does the job.
6. **One stage = one reviewable chunk of work.** End every stage by presenting the QA checklist (Section 6 template) filled in, and explicitly ask for approval before continuing.
7. If any instruction in this file conflicts with a request in chat, surface the conflict rather than silently picking one.

---

## 1. Project Overview

**Business:** TechMate4u is a web design & development agency offering website development, redesigns, e-commerce builds, UI/UX design, SEO, and ongoing maintenance.

**Website goals (in priority order):**
1. Generate qualified leads via the Free Website Audit tool and "Book a Call" CTA
2. Build credibility fast for cold traffic (ads, referrals, cold outreach) landing on Home or a Case Study
3. Rank organically for service + local keywords via SEO-structured pages and the Blog
4. Present a portfolio strong enough to justify premium pricing

**Target audience:**
- Small-to-mid-size business owners who need a new or redesigned website
- Marketing managers evaluating agencies for a redesign or e-commerce build
- Referral traffic already warmed up, looking to confirm credibility quickly

**Primary conversions (in priority order):**
1. Free Website Audit form submission
2. "Book a Call" click → booking page/calendar
3. Contact form submission
4. WhatsApp click

**Brand positioning:** Premium but approachable — not a cheap freelancer, not an intimidating enterprise agency. Proof-driven (real case studies, real numbers) rather than hype-driven (no stock photos, no fake history — see the site structure's content rules).

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | SSR/SSG for SEO, file-based routing maps cleanly to the sitemap, built-in image/font optimization, easy Vercel deployment, React Server Components reduce client JS |
| **Language** | TypeScript | Type safety across props/forms/API routes; catches errors before runtime; self-documenting components |
| **Styling** | Tailwind CSS | Utility-first matches the "Design System" approach in Section 4; fast iteration; small production CSS via purge |
| **Animation** | Framer Motion | Declarative, works natively with React/Next, good for the hover/scroll effects called for in Section 7 without hand-rolled CSS keyframes everywhere |
| **Icons** | Lucide React | Tree-shakeable, consistent stroke-based style, matches "no boring stock icons" instruction from the site structure |
| **Images** | `next/image` + Sharp (built-in) | Automatic responsive images, lazy loading, WebP/AVIF conversion — directly supports Section 8 performance targets |
| **Forms** | React Hook Form + Zod | Type-safe validation shared between client and server; needed for Contact form, Audit form, Newsletter signup |
| **Fonts** | `next/font` (self-hosted, e.g. Inter or a similar variable font) | Avoids render-blocking external font requests, improves Core Web Vitals |
| **Deployment** | Vercel | Native Next.js support, automatic preview deployments per stage/PR, edge caching |
| **SEO** | Next.js Metadata API + `next-sitemap` + JSON-LD | Per-page metadata, auto-generated sitemap.xml/robots.txt, structured data for LocalBusiness/Service/Article |
| **Analytics** | Vercel Analytics or Plausible (privacy-friendly) | Lightweight, doesn't hurt performance budget |
| **CMS (Blog only)** | MDX files in-repo initially; revisit a headless CMS (e.g. Sanity/Contentful) only if non-technical staff need to publish without a dev | Keeps Stage 10 simple; avoids over-engineering before it's needed |

---

## 3. Coding Standards

**Component architecture**
- One component per file. Component name = file name (PascalCase).
- Prefer composition over configuration: small components combined, not one component with 15 boolean props.
- Server Components by default; add `"use client"` only when the component needs interactivity, state, or browser APIs.

**Naming conventions**
- Components: `PascalCase` (e.g. `ServiceCard.tsx`)
- Functions/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- CSS/Tailwind: no custom class names where a utility will do; custom classes (if any) in `kebab-case`
- Files that export a single default component match the component name; utility files are `camelCase.ts`

**File organization**
- Route-specific components live beside the route in `app/(routes)/.../_components/` **only if not reused elsewhere.**
- Anything used on 2+ pages goes in `/src/components` (see Section 12).

**Type safety**
- No `any`. Use `unknown` + narrowing if a type is genuinely unknown.
- All form schemas defined once with Zod, and the TypeScript type inferred from the schema (`z.infer<>`) — never hand-duplicated.

**Formatting**
- Prettier + ESLint (Next.js recommended config + `eslint-plugin-jsx-a11y` for accessibility linting).
- No commented-out dead code committed.

**Comments**
- Comment *why*, not *what*. Explain non-obvious business logic (e.g. "why this field is optional") not "this is a button."

**Performance**
- No unnecessary client components.
- No unoptimized `<img>` tags — always `next/image`.
- Dynamic import for anything below the fold and non-critical (e.g. video testimonial players, modals).

**Accessibility & SEO**
- Semantic HTML first (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) — divs are a fallback, not a default.
- Every image has meaningful `alt` text (or `alt=""` if purely decorative).
- Every interactive element reachable and operable by keyboard.

---

## 4. Design System

> Exact hex values / font choices should be finalized in Stage 1 with the user (brand colors aren't in the site structure doc). Below is the *system* — the rules that make it scalable, to be filled in with real values during Stage 1.

**Colors**
- `primary` (Blue — matches "Primary" button = "Blue filled" from the button system)
- `secondary` / `neutral` scale (grays for text/backgrounds)
- `success` (Green — matches "Success" button = "Get Free Website Audit")
- `accent` (used sparingly — highlights, badges)
- Each color defined as a Tailwind theme token (e.g. `primary-50` → `primary-900`), never hardcoded hex in components.

**Typography**
- One display/heading font, one body font (or one variable font used at different weights).
- Type scale defined in Tailwind config (`text-xs` → `text-6xl`) — components only use scale tokens, never arbitrary font sizes.

**Spacing system**
- Stick to Tailwind's default spacing scale (4px base unit) — no arbitrary pixel values in components.

**Border radius**
- 2–3 tokens max (e.g. `rounded-md` for buttons/inputs, `rounded-xl` for cards) — consistent across the whole site.

**Shadows**
- 2–3 elevation levels max (e.g. `shadow-sm` resting, `shadow-md` hover) — used consistently for the same purpose everywhere (cards, dropdowns).

**Button styles** (per the site's finalized 4-button system — do not add a 5th)
- Primary: filled, primary color — main conversion actions ("Book a Free Consultation")
- Secondary: outline — secondary actions ("View Our Work")
- Success: filled, green accent — the Audit CTA specifically
- Text button: no background, arrow suffix (`→`) — "Learn More", "View Case Study", "Read More"

**Card styles**
- One base `Card` component (padding, radius, shadow, hover state) that Service Cards, Case Study cards, Testimonial cards, etc. all extend — not five independently styled card types.

**Form styles**
- Consistent input height, border, focus ring (visible, meets contrast requirements), error state (red border + inline message), label position — defined once, reused by Contact form, Audit form, Newsletter signup.

**Icons**
- Lucide React only, consistent stroke width across the site.

**Responsive breakpoints** (Tailwind defaults, confirm in Stage 1)
- `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px · `2xl` 1536px
- Mobile-first: base styles target mobile, breakpoints add complexity upward — never the reverse.

---

## 5. Complete Development Roadmap

Each stage is independent, self-contained, and must be reviewed/approved before the next begins. See Section 6 for what "included in every stage" means, and Section 15 for the live Stage Log to track approval status.

| Stage | Name | Depends On |
|---|---|---|
| 1 | Project Initialization & Design Foundations | — |
| 2 | Global Layout (Header, Footer, base layout shell) | 1 |
| 3 | Navigation (desktop dropdown + mobile menu) | 2 |
| 4 | Reusable Component Library | 1–3 |
| 5 | Homepage | 4 |
| 6 | Services (main + individual service template) | 4 |
| 7 | Work / Portfolio Page | 4 |
| 8 | Case Study Template | 4, 7 |
| 9 | About Page | 4 |
| 10 | Testimonials Page | 4 |
| 11 | Blog (listing + post template) | 4 |
| 12 | Contact Page | 4 |
| 13 | Free Website Audit Page | 4 |
| 14 | Legal Pages | 2 |
| 15 | SEO Implementation (sitewide) | 5–14 |
| 16 | Animations & Micro-interactions Pass | 5–14 |
| 17 | Performance Optimization Pass | 5–16 |
| 18 | Accessibility Audit Pass | 5–16 |
| 19 | Cross-browser/Device Testing | 17, 18 |
| 20 | Production Deployment | 19 |

---

## 6. Stage Template — Required for Every Stage

Every stage, when worked on, must produce the following before it can be marked complete:

```
### Stage N: [Name]

**Goal:** One sentence — what this stage achieves.

**Description:** Short paragraph of context/approach.

**Features to build:**
- [ ] ...

**Components required (new):**
- ...

**Components reused (existing):**
- ...

**Pages/routes involved:**
- ...

**Folder/file changes:**
- Created: ...
- Modified: ...

**Acceptance criteria:**
- [ ] Matches the approved site structure section for this page/feature
- [ ] Responsive at all breakpoints (mobile-first)
- [ ] No console errors/warnings
- [ ] Passes relevant a11y checks (keyboard nav, contrast, alt text)
- [ ] Uses only design system tokens (Section 4) — no ad hoc colors/spacing

**Definition of Done:**
- [ ] Code reviewed against Section 3 coding standards
- [ ] Reuses existing components where applicable (no duplication)
- [ ] Works with real or realistic placeholder content (no lorem ipsum in final)

**QA checklist:**
- [ ] Visual check at 375px, 768px, 1280px, 1536px
- [ ] Keyboard-only navigation works
- [ ] Lighthouse run (note scores)
- [ ] Links/CTAs go to correct destinations (even if placeholder routes)

**Manual testing checklist:**
- [ ] Tested in Chrome
- [ ] Tested in Safari (or noted as pending)
- [ ] Tested on an actual mobile device or accurate emulation
- [ ] Forms (if any) submit, validate, and show errors correctly

**Status:** 🔲 Not Started / 🟡 In Progress / 🟠 Ready for Review / ✅ Approved
```

---

## 7. UI/UX Guidelines

- **Consistency:** the same component (button, card, badge) must look and behave identically everywhere it's used. If a page seems to need a variant, extend the base component with a prop — don't fork it.
- **White space:** generous section padding (don't cram sections together); let sections breathe, especially around the Hero and CTA blocks.
- **Visual hierarchy:** one clear H1 per page, consistent heading scale down from there; the primary CTA on any page should be the visually loudest element on that screen.
- **User flow:** every page should have an obvious "next step" — Home → Book a Call/View Work, Service page → Book a Call/Contact, Case Study → Next Project/Book Similar Project.
- **CTA placement:** primary CTA visible without scrolling on Home (in the Hero); a closing CTA section at the bottom of every page.
- **Hover effects:** subtle (slight scale, shadow lift, or color shift) — consistent timing/easing across all interactive elements (define once in Tailwind config, reuse everywhere).
- **Loading states:** skeleton loaders for anything fetched client-side (e.g. blog post grid, testimonial carousel); never a blank flash.
- **Empty states:** e.g. Work page filter returning zero results, or Blog with no posts in a category — needs a designed empty state, not a broken-looking blank grid.
- **Error handling:** form validation errors shown inline, near the field; network/submit errors shown as a clear, non-blaming message with a retry option.
- **Mobile-first:** design and build for 375px width first, then scale up — not the reverse.

---

## 8. Performance Standards

- **Target:** Lighthouse 95+ across Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals:** LCP < 2.5s, CLS < 0.1, INP < 200ms
- **Lazy loading:** below-the-fold images and non-critical components (video players, carousels, modals)
- **Code splitting:** route-based by default (Next.js App Router); dynamic import for heavy client components
- **Image optimization:** `next/image` everywhere, correctly sized `sizes` prop, modern formats served automatically
- **Font optimization:** `next/font`, subset where possible, `font-display: swap`
- **Minimal JavaScript:** default to Server Components; justify every `"use client"` boundary
- **Fast loading:** no render-blocking third-party scripts above the fold (defer chat widgets, WhatsApp buttons, analytics)

---

## 9. SEO Standards

- **Metadata:** unique `title` and `meta description` per page/route via the Metadata API
- **Open Graph:** OG image, title, description per page (especially Home, Services, each Case Study, each Blog post)
- **Structured Data (JSON-LD):** `LocalBusiness`/`Organization` sitewide; `Service` schema on service pages; `Article` schema on blog posts; `Review`/`AggregateRating` on Testimonials if using real review data
- **Sitemap & robots.txt:** auto-generated via `next-sitemap` at build time
- **Canonical URLs:** set on every page to avoid duplicate-content issues (especially Work page filters)
- **Semantic HTML:** required (see Section 3) — this is an SEO requirement as much as an accessibility one
- **Internal linking:** every Service page links to relevant Case Studies; every Case Study links back to the related Service; Blog posts link to relevant Service pages where genuinely relevant
- **Blog SEO strategy:** target long-tail, service-adjacent keywords (e.g. "how much should a small business website cost in [region]") — defined properly at Stage 11, not before

---

## 10. Accessibility Standards (WCAG 2.2 AA)

- Full keyboard navigation: every interactive element reachable via Tab, visible focus ring at all times (never `outline: none` without a replacement)
- ARIA labels on icon-only buttons (e.g. WhatsApp icon, hamburger menu, accordion toggles)
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text/UI components — checked against the actual design system tokens, not assumed
- Screen reader support: meaningful heading order, landmark regions (`<nav>`, `<main>`, `<footer>`), form labels properly associated with inputs
- Semantic HTML used as the accessibility foundation, not ARIA patched on top of divs

---

## 11. Reusable Component Library (build in Stage 4, before page work begins)

- `Button` (primary / secondary / success / text variants — see Section 4)
- `Card` (base — extended by ServiceCard, CaseStudyCard, BlogPostCard, TestimonialCard)
- `SectionHeading` (eyebrow + title + optional subtitle, consistent across all pages)
- `CTABanner` (headline + button — used at the bottom of every page)
- `ServiceCard`
- `CaseStudyCard` / `ProjectCard`
- `TestimonialCard` (video or written variant)
- `BlogPostCard`
- `FAQAccordion`
- `TrustBar` (logo strip / stat strip)
- `Header` / `Navigation` (desktop dropdown + mobile menu)
- `Footer`
- `ContactForm`, `AuditForm`, `NewsletterForm` (share base `FormField`, `FormError` components)
- `Modal` (if needed for gallery/video lightboxes)
- `Badge` / `Tag` (used for Blog categories, Work filters)
- `StatCard` (used in Trust Bar / Why Choose Us)
- `WhatsAppButton` (floating action button, sitewide)

---

## 12. Folder Structure

```
techmate4u/
├── app/
│   ├── layout.tsx                  # Root layout — fonts, global providers
│   ├── page.tsx                    # Home
│   ├── services/
│   │   ├── page.tsx                 # Services grid page
│   │   └── [slug]/page.tsx          # Individual service template
│   ├── work/
│   │   ├── page.tsx                 # Work/portfolio grid + filter
│   │   └── [slug]/page.tsx          # Case Study template
│   ├── about/page.tsx
│   ├── testimonials/page.tsx
│   ├── blog/
│   │   ├── page.tsx                 # Blog listing
│   │   └── [slug]/page.tsx          # Blog post template
│   ├── contact/page.tsx
│   ├── free-website-audit/page.tsx
│   ├── legal/
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── refund-policy/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── api/
│       ├── contact/route.ts
│       ├── audit/route.ts
│       └── newsletter/route.ts
├── src/
│   ├── components/
│   │   ├── ui/                      # Button, Card, Badge, Modal, etc.
│   │   ├── layout/                  # Header, Footer, Navigation
│   │   ├── sections/                # SectionHeading, CTABanner, TrustBar
│   │   └── forms/                   # ContactForm, AuditForm, FormField
│   ├── lib/                         # utils, zod schemas, constants
│   ├── content/                     # MDX blog posts, case study data (Stage-dependent)
│   ├── types/                       # shared TypeScript types
│   └── styles/                      # globals.css, tailwind config extensions
├── public/
│   ├── images/
│   └── fonts/                       # if self-hosting beyond next/font defaults
├── tailwind.config.ts
├── next.config.js
├── PROJECT_CONTEXT.md               # this file
└── techmate4u-website-structure.md  # source-of-truth site structure
```

---

## 13. Development Rules for the AI Agent

The AI agent must:
- Never skip development stages.
- Never build future stages early, even if it seems efficient to "batch" work.
- Never modify a completed/approved stage unless explicitly asked.
- Reuse components from Section 11 wherever possible — check before creating anything new.
- Maintain visual and code consistency across all stages.
- Avoid duplicate code — if the same UI pattern appears twice, it should be a shared component.
- Keep code clean, modular, and production-ready — no throwaway/demo-quality code.
- Document non-obvious architectural decisions inline or in this file's Section 15 log.
- Validate each stage against its Section 6 checklist before presenting it for approval.
- If a request from the user conflicts with this file, pause and flag the conflict rather than guessing.

---

## 14. Content Rules (carried over from the site structure doc — non-negotiable)

- No fake company history on the About page.
- No fake/stock office photos — real photos only.
- No 5th button style — only Primary / Secondary / Success / Text.
- No pricing shown as exact fixed numbers unless the business confirms it wants that — a range/starting-from format is the default per the structure doc's pricing note.

---

## 15. Stage Log (update as work progresses)

| Stage | Status | Notes / Approval Date |
|---|---|---|
| 1. Project Initialization & Design Foundations | ✅ Approved | 2026-07-10 |
| 2. Global Layout | ✅ Approved | 2026-07-10 |
| 3. Navigation | ✅ Approved | 2026-07-10 |
| 4. Reusable Component Library | ✅ Approved | 2026-07-10 |
| 5. Homepage | ✅ Approved | 2026-07-10 |
| 6. Services | ✅ Approved | 2026-07-10 |
| 7. Work / Portfolio | ✅ Approved | 2026-07-10 |
| 8. Case Study Template | ✅ Approved | 2026-07-10 |
| 9. About | ✅ Approved | 2026-07-10 |
| 10. Testimonials | ✅ Approved | 2026-07-10 |
| 11. Blog | ✅ Approved | 2026-07-10 |
| 12. Contact | ✅ Approved | 2026-07-10 |
| 13. Free Website Audit | ✅ Approved | 2026-07-10 |
| 14. Legal Pages | ✅ Approved | 2026-07-10 |
| 15. SEO Implementation | ✅ Approved | 2026-07-10 |
| 16. Animations Pass | ✅ Approved | 2026-07-10 |
| 17. Performance Optimization | ✅ Approved | 2026-07-10 |
| 18. Accessibility Audit | ✅ Approved | 2026-07-10 |
| 19. Cross-browser/Device Testing | ✅ Approved | 2026-07-10 |
| 20. Production Deployment | ✅ Approved | 2026-07-10 |

---

## 16. How to Use This File (for whoever/whatever picks this up next)

1. Open this file and check Section 15 for the first stage that isn't ✅ Approved.
2. Read that stage's row in Section 5, then produce the full Stage Template (Section 6) for it before writing any code.
3. Build only what that stage's template specifies.
4. Present the filled-in checklist and explicitly ask for approval.
5. On approval, update Section 15, then move to the next stage — not before.

---

## 17. Late-Stage Performance & Agentic Browsing Optimization Pass (2026-07-15)

To address mobile page-speed targets and the **3/3 Agentic Browsing** Lighthouse score, the following adjustments were executed:

### Agentic Browsing & Accessibility Tree Fixes
- **Interactive Testimonial Cards (`ClientVoice.tsx`)**: Replaced unlabelled clickable card `div` containers with semantic `<button>` tags and added descriptive `aria-label` tags.
- **Audio Seeker Slider (`ClientVoice.tsx`)**: Added `role="slider"`, `aria-label="Seek time"`, and dynamic `aria-valuemin`/`aria-valuemax`/`aria-valuenow` attributes to the testimonial seek bar.
- **Media Controls (`ClientVoice.tsx`)**: Appended descriptive `aria-label` values to all audio toggles, play buttons, and mute controls.
- **Desktop/Mobile Menus (`Navbar.tsx`)**: Appended `aria-haspopup="true"` and dynamic `aria-expanded` attributes to dropdown submenu triggers. Configured `role="dialog"`, `aria-modal="true"`, and `aria-label` on the mobile slide-out container.
- **Regex Link Matching (`llms.txt`)**: Replaced all raw URL text links in `llms.txt` with strictly formatted Markdown links `[text](url)` to pass regex matching checks.

### Critical Load Path & JS Bundle Optimization
- **`framer-motion` & Scroll Animations Elimination**:
  - Removed static imports of `framer-motion` from the home page.
  - Dynamically loaded the graphics component `HeroVisual.tsx` (`ssr: false`) to completely exclude `framer-motion` dependencies from the mobile bundle on initial load.
  - Replaced all scroll-triggered fade-in `motion.div` containers and micro-animations with standard static `div` elements in `Portfolio.tsx`, `ProcessLite.tsx`, and `CTA.tsx` to make sections render completely static, smooth, and layouts stable on scroll.
- **`IntroLoader` Removal**: Deleted `IntroLoader.tsx` and its references in `layout.tsx` to stop high-resolution video preloading and CPU decode loops.
- **Logo Optimization**: Resized and compressed `logo.webp` from 1536x1024px to its display target size, dropping file size from **128 KB** to **3.7 KB** (a **97% bandwidth reduction**).

### Mobile LCP Optimization
- **Desktop/Mobile Layout Split**: Replaced the absolute background mesh image (`bg.webp`) on mobile and tablet screens with an optimized CSS-only radial gradient mesh (0 network requests, 0ms paint delay).
- **Responsive Preloading**: Appended media query properties to the HTML link preload tag: `media="(min-width: 1024px)"`. This blocks mobile devices from preloading the `bg.webp` asset.
- **Text-Based LCP**: With `isDesktop` React state guards hiding the mesh image on mobile, the LCP candidate falls back to the text headline. Using `font-display: optional` on the primary Google Font, the text paints instantly at FCP, resulting in a **95+ Performance score** on mobile and a perfect **100/100** on other metrics in clean/isolated browser profiles.

---

## 18. Post-Optimization Polish Pass (2026-07-15 Afternoon)

A follow-up cleanup and UX polish pass after the core performance work was completed.

### Animation Audit — All Pages

A global `grep` across the entire `src/` tree was run to find every remaining `motion.*` usage. All scroll-triggered fade-in/fly-in animations were removed from every page and component:

- **`WorkGrid.tsx`** (`/work` page): Removed `AnimatePresence` card fade-in, layout animation container (`motion.div`), and the spring-animated filter ring (`motion.span`). Removed `framer-motion` import entirely.
- **`BlogGrid.tsx`** (`/blog` page): Same removal — filter ring, `AnimatePresence`, and per-card `motion.div` with `initial/animate/exit` removed. Removed `framer-motion` import entirely.
- **`Portfolio.tsx`**, **`ProcessLite.tsx`**, **`CTA.tsx`**: Removed stale dead `import { motion } from "framer-motion"` lines left over from the previous animation removal pass.

**Preserved (intentional, functional UI animations):**
- `Modal.tsx` — modal open/close scale (user-triggered, not scroll-driven)
- `FAQAccordion.tsx` — accordion height expand/collapse (functional UX)
- `ClientVoice.tsx` — video player modal backdrop/scale (functional UX)
- `HeroVisual.tsx` — the entire 3D floating hero canvas graphic

### Navbar Services Dropdown Fix

**Problem:** The "Services" hover dropdown was dismissing immediately when the cursor moved from the trigger link into the panel, because the 8px CSS `mt-2` gap between the two elements briefly put the cursor outside the parent container, firing `onMouseLeave`.

**Fix (`Navbar.tsx`):**
- Added a `closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)`.
- `onMouseEnter` → immediately cancels any pending close timer and opens the dropdown.
- `onMouseLeave` → schedules `setServicesOpen(false)` with a **150ms delay** instead of firing immediately.
- If the cursor transitions into the dropdown panel within 150ms, `onMouseEnter` re-fires and cancels the timer — keeping the dropdown open stably.
- This is the standard "grace period" pattern used by Radix UI and Headless UI.

### Service Page Eyebrow Pill Removed

The generic category label pill (e.g. "Engineering", "Optimization") that appeared above every service page `<h1>` was removed from `src/app/services/[slug]/page.tsx`. It was identified as a visual pattern associated with generic AI-generated page layouts and added no user value since the title itself is fully descriptive.

### Form Placeholders & Validation Hardening

**Placeholders (`ContactForm.tsx`, `AuditForm.tsx`):**
- `"John Doe"` → `"Your Name Here"`
- `"john@example.com"` → `"your@email.com"`
- `"+1 (555) 000-0000"` → `"+91 98765 43210"` (region-appropriate)
- `"Acme Corp"` → `"Your Company Name"`
- `"https://example.com"` → `"https://yourwebsite.com"`
- Message/comments text areas updated with warm, inviting, non-generic copy.

**Validation hardening (`src/lib/schemas.ts`):**
- **Name**: Unicode letter regex — blocks numeric strings, random symbols, all-same-character spam.
- **Email**: Blocks `+alias` addressing (common bot evasion technique); max 254 chars enforced.
- **Phone**: If provided, must match international format regex `^[+\d][\d\s\-().]{6,19}$`.
- **Message**: Minimum 20 chars; requires at least 3 space-separated words; regex blocks repeated-character spam (`aaaaaaaaaa…`); max 2000 chars.
- **Audit URL**: Must start with `https://` (not `http://` or bare domains); max 300 chars.
- **Comments**: Max 1000 chars cap.
- All reusable validators (`nameSchema`, `emailSchema`, `phoneSchema`, `messageSchema`) are defined once and shared across both `contactFormSchema` and `auditFormSchema`.

### Step 13+ — SEO Quick-Wins & Technical Architecture Implementation

A comprehensive technical SEO implementation pass was completed on 2026-07-15:

- **Services Index Page (`/services`)**: Created `src/app/services/page.tsx` displaying all 6 core service modules in a responsive, pre-rendered Next.js page.
- **Sitemap Mappings (`/sitemap.xml`)**: Updated `sitemap.ts` to include the missing `/services/social-media-management` slug and dynamic case studies (`techflow-systems`, `finserve-solutions`).
- **Global Metadata & Local Schema (`layout.tsx`)**:
  - Appended geographical geo-targeting metadata title anchors (`Ahmedabad, India`).
  - Set default canonical link configurations matching the root.
  - Expanded `ProfessionalService` JSON-LD schema with physical address details (Ashram Road), `priceRange` (`$$`), and corporate social entity handles (`sameAs` array mapping LinkedIn, Instagram, and WhatsApp profiles).
- **Hero Copywriting Refinement (`Hero.tsx`)**: Optimized H1 headline to focus on target keywords: `"Custom Web Engineering & AI Automation Systems"`. Refined subheading to focus on Next.js websites and custom AI workflows.
- **Graphic Alt Descriptions (`Services.tsx`)**: Changed placeholder `alt="WWDC Character"` on the 3D graphic to `"TechMate4u Custom Software Engineer Mascot"`.
- **Dynamic Subpage Breadcrumbs**: Injected dynamic `BreadcrumbList` schemas into dynamic service details and dynamic blog post pages to build strong structural search indexing.
- **Verification**: Executed `npm run build` locally; verified 100% successful static page compilation (30 paths) and sitemap path output.
- **Google Analytics Integration**: Integrated the GA tracking tag (`G-FW1J903DLP`) inside `layout.tsx` using the Next.js `Script` component with `afterInteractive` strategy to track user conversion metrics without degrading site loading speeds.

---

## 19. Contact Form Channel & Validation Upgrades (2026-07-16)

To provide multi-channel conversion routes and secure contact form data handling, the following updates were implemented:

### Contact Form Field & Validation Architecture
- **Dropdown Services Select**: Extended the [FormField.tsx](file:///c:/Techmate4u/techmate-wb/src/components/forms/FormField.tsx) component to dynamically support select HTML components. Form configured a required dropdown selector listing the 6 core services, plus "Consultation" and "Other".
- **Strict Optionality Mapping**: Refactored the form schemas in [schemas.ts](file:///c:/Techmate4u/techmate-wb/src/lib/schemas.ts) to define only "Project Details / Message" and "Company Name" as optional fields. All other fields (Full Name, Email Address, Phone Number, and Service Required) are strictly required.
- **Form Button Rebrand & Dual Channels**:
  - Replaced the generic "Send Message" action with a direct "Send Email" action button.
  - Added a dedicated "Send Inquiry" button for WhatsApp, customized using the official brand color (`#25D366`), visual hover elevations, and the official WhatsApp vector logo SVG.
  - Built form action routing in [ContactForm.tsx](file:///c:/Techmate4u/techmate-wb/src/components/forms/ContactForm.tsx) to record the lead via API, and then open a pre-filled WhatsApp window when "Send Inquiry" is clicked.

### Cyber-Sec & Web Dev Hardened API Route
- **Zod Server-Side Parsing**: Modified [route.ts](file:///c:/Techmate4u/techmate-wb/src/app/api/contact/route.ts) to parse incoming requests directly against the shared `contactFormSchema` object, guaranteeing 100% logic alignment between front-end and back-end constraints.
- **XSS & HTML Injection Defense**: Implemented input sanitization on all text fields (`name`, `email`, `phone`, `company`, `service`, `message`) before formatting HTML bodies.
- **Email Header Injection Prevention**: Applied a newline stripping filter (`\r` and `\n`) on all inputs referenced inside outbound mail headers (subject, reply-to fields), blocking header parsing exploits.
