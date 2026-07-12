import type { Metadata } from "next";
import Link from "next/link";
import { Database, FileText, LockKeyhole, Mail, MapPin, ShieldCheck } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy | TechMate4u",
  description:
    "Read TechMate4u's Privacy Policy, last updated on 12 May 2026, covering how we collect, use, store, and protect personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const collectedInfoRows = [
  ["Full name", "Contact forms, project inquiry submissions"],
  ["Email address", "Contact forms, email communications"],
  ["Phone number", "Contact forms, WhatsApp or call interactions"],
  ["Business / company name", "Project inquiry & onboarding"],
  ["Billing information", "Invoice & payment processing"],
  ["Project requirements & briefs", "Discovery calls, forms, email"],
  ["Communication records", "Ongoing project correspondence"],
];

const cookieRows = [
  [
    "Essential Cookies",
    "Required for basic website functionality. Cannot be disabled without affecting site performance.",
  ],
  [
    "Analytics Cookies",
    "Help us understand how visitors interact with our site, such as Google Analytics. Data is aggregated and anonymized.",
  ],
  ["Performance Cookies", "Used to monitor and improve page load speeds and technical performance."],
  [
    "Marketing Cookies",
    "Used to track the effectiveness of our advertising campaigns and deliver relevant content.",
  ],
];

const retentionRows = [
  ["Project communications & correspondence", "Minimum 3 years post-project completion"],
  ["Billing and invoice records", "Minimum 7 years for legal and tax compliance"],
  ["Marketing & analytics data", "Until consent is withdrawn or data is no longer relevant"],
  ["Contact form submissions", "Until purpose is fulfilled or deletion is requested"],
  ["Technical logs, including IP and browser data", "Up to 12 months"],
];

const sections = [
  "Information We Collect",
  "How We Use Your Information",
  "Legal Basis for Processing",
  "Cookies & Tracking Technologies",
  "Data Controller vs. Data Processor",
  "Third-Party Services",
  "Data Security",
  "Data Retention",
  "Your Privacy Rights",
  "Marketing Communications & Opt-Out",
  "Confidentiality",
  "International Data Transfers",
  "Children's Privacy",
  "External Links",
  "Policy Updates",
  "Contact Us & Grievance Officer",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function PolicyTable({
  columns,
  rows,
}: {
  columns: [string, string];
  rows: string[][];
}) {
  return (
    <div className="mt-5 overflow-hidden rounded-lg border" style={{ borderColor: "var(--line)" }}>
      <div className="grid grid-cols-1 sm:grid-cols-[0.8fr_1.2fr] bg-[var(--surface-muted)]">
        {columns.map((column) => (
          <div
            key={column}
            className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-[var(--text-soft)]"
          >
            {column}
          </div>
        ))}
      </div>
      {rows.map((row) => (
        <div
          key={row.join("-")}
          className="grid grid-cols-1 border-t sm:grid-cols-[0.8fr_1.2fr]"
          style={{ borderColor: "var(--line-soft)" }}
        >
          <div className="px-4 py-3 text-sm font-semibold text-[var(--text)]">{row[0]}</div>
          <div className="px-4 pb-4 pt-0 text-sm leading-relaxed text-[var(--text-muted)] sm:py-3">
            {row[1]}
          </div>
        </div>
      ))}
    </div>
  );
}

function PolicySection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={slugify(title)} className="scroll-mt-28 border-t py-10" style={{ borderColor: "var(--line)" }}>
      <div className="mb-5 flex items-start gap-4">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-black"
          style={{
            borderColor: "color-mix(in srgb, var(--primary) 28%, transparent)",
            background: "color-mix(in srgb, var(--primary) 10%, transparent)",
            color: "var(--primary)",
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-black tracking-tight text-[var(--text)] md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-5 text-base leading-8 text-[var(--text-muted)]">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip bg-[var(--background)]">

      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-base)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-55"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 32%), radial-gradient(circle at 82% 20%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 28%)",
        }}
      />

      <header className="mx-auto w-full max-w-7xl px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16 lg:pt-40">
        <div className="max-w-5xl">
          <div className="mb-8 h-px w-24 bg-[var(--primary)]" />
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            Welcome to TechMate4u. Your privacy matters to us. This Privacy Policy explains how
            TechMate4u collects, uses, stores, and protects your personal information when you visit
            techmate4u.com or engage our services.
          </p>
          <div className="mt-9 grid max-w-4xl gap-0 border-y md:grid-cols-3" style={{ borderColor: "var(--line)" }}>
            <div className="py-5 md:border-r md:pr-6" style={{ borderColor: "var(--line-soft)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-soft)]">
                Last updated
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">12 May 2026</p>
            </div>
            <div className="border-t py-5 md:border-r md:border-t-0 md:px-6" style={{ borderColor: "var(--line-soft)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-soft)]">
                Applies to
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">techmate4u.com</p>
            </div>
            <div className="border-t py-5 md:border-t-0 md:pl-6" style={{ borderColor: "var(--line-soft)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-soft)]">
                Jurisdiction
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <MapPin className="h-4 w-4 text-[var(--primary)]" />
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-lg border bg-[var(--glass-bg)] p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.65)] backdrop-blur" style={{ borderColor: "var(--glass-border)" }}>
              <div className="mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-[var(--primary)]" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-soft)]">
                  Contents
                </h2>
              </div>
              <nav className="flex flex-col gap-2">
                {sections.map((section, index) => (
                  <Link
                    key={section}
                    href={`#${slugify(section)}`}
                    className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-[var(--text)]"
                  >
                    <span className="text-xs text-[var(--text-soft)]">{String(index + 1).padStart(2, "0")}</span>
                    <span>{section}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <article className="rounded-lg border bg-[color-mix(in_srgb,var(--panel)_70%,transparent)] px-5 py-2 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.75)] sm:px-8 lg:px-10" style={{ borderColor: "var(--line)" }}>
            <PolicySection index={1} title="Information We Collect">
              <p>
                We collect information in two ways: information you provide to us directly, and
                information collected automatically when you use our website.
              </p>
              <div>
                <h3 className="text-lg font-bold text-[var(--text)]">Personal Information You Provide</h3>
                <PolicyTable columns={["Data Type", "When Collected"]} rows={collectedInfoRows} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text)]">
                  Technical Information Collected Automatically
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    "IP address and approximate geographic location",
                    "Browser type, version, and language settings",
                    "Device type and operating system",
                    "Pages visited, time spent, and navigation paths",
                    "Referring URLs",
                    "Website interaction data, including clicks and scroll depth",
                  ].map((item) => (
                    <li key={item} className="rounded-md border px-4 py-3 text-sm" style={{ borderColor: "var(--line-soft)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PolicySection>

            <PolicySection index={2} title="How We Use Your Information">
              <p>We use your information strictly for legitimate business and operational purposes:</p>
              <ul className="grid gap-3">
                {[
                  "To provide, manage, and deliver our services, including web development, marketing, automation, and related work.",
                  "To respond to inquiries, project briefs, and support requests.",
                  "To process payments and manage project billing.",
                  "To send service-related updates, project communications, and invoices.",
                  "To improve our website performance and user experience.",
                  "To analyze traffic and usage trends for internal business planning.",
                  "To detect, investigate, and prevent fraud or unauthorized access.",
                  "To comply with applicable legal obligations.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="rounded-lg border p-5 font-semibold text-[var(--text)]" style={{ borderColor: "var(--line)" }}>
                We do not sell, rent, or trade your personal information to any third parties for
                their own marketing or commercial use.
              </p>
            </PolicySection>

            <PolicySection index={3} title="Legal Basis for Processing">
              <p>
                If you access our services from a region governed by the General Data Protection
                Regulation or similar data protection frameworks, our legal basis depends on the context.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Performance of a Contract", "Processing necessary to deliver the services you have requested from us."],
                  ["Legitimate Interests", "To improve our services, respond to inquiries, market our agency, and maintain system security."],
                  ["Consent", "Where you have expressly given us permission to use your data for a specific purpose."],
                  ["Legal Obligation", "Where processing is required to comply with applicable Indian or international laws."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-lg border p-5" style={{ borderColor: "var(--line-soft)" }}>
                    <h3 className="font-bold text-[var(--text)]">{title}</h3>
                    <p className="mt-2 text-sm leading-7">{copy}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection index={4} title="Cookies & Tracking Technologies">
              <p>
                TechMate4u uses cookies and similar technologies to improve user experience, analyze
                website traffic, and understand visitor behavior.
              </p>
              <PolicyTable columns={["Cookie Type", "Purpose"]} rows={cookieRows} />
              <p>
                You may disable cookies at any time through your browser settings. Disabling certain
                cookies may affect website functionality.
              </p>
            </PolicySection>

            <PolicySection index={5} title="Data Controller vs. Data Processor">
              <p>As a digital agency, TechMate4u operates in two distinct roles depending on the context.</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-5" style={{ borderColor: "var(--line-soft)" }}>
                  <Database className="mb-4 h-5 w-5 text-[var(--primary)]" />
                  <h3 className="font-bold text-[var(--text)]">TechMate4u as Data Controller</h3>
                  <p className="mt-2 text-sm leading-7">
                    When we collect and use your data for our own business purposes, such as client
                    relationships, billing, marketing, and analytics, we are the Data Controller.
                  </p>
                </div>
                <div className="rounded-lg border p-5" style={{ borderColor: "var(--line-soft)" }}>
                  <LockKeyhole className="mb-4 h-5 w-5 text-[var(--primary)]" />
                  <h3 className="font-bold text-[var(--text)]">TechMate4u as Data Processor</h3>
                  <p className="mt-2 text-sm leading-7">
                    When we build and operate digital products, websites, bots, or automation systems
                    on behalf of clients, we process end-user data only on client instructions.
                  </p>
                </div>
              </div>
              <p>
                We do not claim ownership of, or independently use, end-user data collected through
                client-built systems or platforms.
              </p>
            </PolicySection>

            <PolicySection index={6} title="Third-Party Services">
              <p>To deliver our services, we work with trusted third-party platforms and service providers.</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Hosting providers",
                  "Payment gateways",
                  "Analytics providers such as Google Analytics",
                  "Email communication services",
                  "Cloud storage platforms",
                  "Marketing and advertising tools, including Google Ads and Meta Ads",
                  "CRM and project management tools",
                  "AI and automation platforms such as OpenAI, WhatsApp Business API, and Twilio",
                ].map((item) => (
                  <li key={item} className="rounded-md border px-4 py-3 text-sm" style={{ borderColor: "var(--line-soft)" }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                These services may collect, process, or store data according to their own privacy
                policies. TechMate4u is not responsible for third-party privacy practices.
              </p>
            </PolicySection>

            <PolicySection index={7} title="Data Security">
              <p>
                TechMate4u implements reasonable technical and organizational security measures to
                protect your personal data from unauthorized access, misuse, loss, or disclosure.
              </p>
              <ul className="grid gap-3">
                {[
                  "SSL/TLS encryption for all data transmitted via our website.",
                  "Access controls limiting data access to authorized personnel only.",
                  "Regular security reviews and system vulnerability assessments.",
                  "Secure handling and encrypted storage of sensitive credentials.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                No method of internet transmission or electronic storage is 100% secure. Internet-based
                services carry inherent security risks.
              </p>
              <p>
                In the event of a personal data breach likely to result in significant risk to your
                rights, TechMate4u will notify affected users and relevant regulatory authorities in a
                timely manner as required by applicable law.
              </p>
            </PolicySection>

            <PolicySection index={8} title="Data Retention">
              <p>
                We retain your personal information only for as long as necessary to fulfill the
                purposes described in this policy, or as required by law.
              </p>
              <PolicyTable columns={["Data Category", "Retention Period"]} rows={retentionRows} />
              <p>
                You may request deletion of your personal data at any time by contacting us, subject to
                legal retention obligations.
              </p>
            </PolicySection>

            <PolicySection index={9} title="Your Privacy Rights">
              <p>Depending on your location and applicable laws, you may have the following rights.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Right to Access", "Request a copy of the personal data we hold about you."],
                  ["Right to Correction", "Request correction of inaccurate or incomplete personal data."],
                  ["Right to Deletion", "Request erasure of your data, subject to legal retention obligations."],
                  ["Right to Object", "Object to data processing for specific purposes such as direct marketing."],
                  ["Right to Restrict", "Request limitation of how we process your data in certain circumstances."],
                  ["Right to Portability", "Receive your data in a portable, machine-readable format where applicable."],
                  ["Withdraw Consent", "Withdraw consent for marketing or optional data processing at any time."],
                  ["Right to Complain", "Lodge a complaint with the relevant data protection authority in your jurisdiction."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-lg border p-5" style={{ borderColor: "var(--line-soft)" }}>
                    <h3 className="font-bold text-[var(--text)]">{title}</h3>
                    <p className="mt-2 text-sm leading-7">{copy}</p>
                  </div>
                ))}
              </div>
              <p>We aim to respond to all data rights requests within 30 days of receipt.</p>
            </PolicySection>

            <PolicySection index={10} title="Marketing Communications & Opt-Out">
              <p>
                TechMate4u will only send marketing or promotional communications if you have explicitly
                opted in to receive them.
              </p>
              <ul className="grid gap-3">
                {[
                  'Clicking the "Unsubscribe" link included at the bottom of any marketing email.',
                  'Replying to any communication with "Unsubscribe" or "Remove me".',
                  "Contacting us directly at info@techmate4u.com with your opt-out request.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Even after opting out, we may still send essential service-related messages such as
                billing updates, project status notifications, or important account information.
              </p>
            </PolicySection>

            <PolicySection index={11} title="Confidentiality">
              <p>
                Confidential business information shared during a project engagement, including business
                strategies, technical details, financial data, access credentials, and customer
                information, will be handled with reasonable care and strict confidentiality.
              </p>
              <p>
                Unless explicitly agreed in a separate written Non-Disclosure Agreement signed by both
                parties before project commencement, submitting information through our website or
                standard communication channels does not automatically create a formal NDA.
              </p>
            </PolicySection>

            <PolicySection index={12} title="International Data Transfers">
              <p>
                TechMate4u is based in Ahmedabad, Gujarat, India. If you access our services from
                outside India, your information may be transferred to and processed in India or other
                countries where our service providers and hosting infrastructure operate.
              </p>
              <p>
                By using our services, you consent to the transfer of your data to India and any other
                jurisdiction where our service providers operate, subject to appropriate safeguards.
              </p>
            </PolicySection>

            <PolicySection index={13} title="Children's Privacy">
              <p>
                TechMate4u&apos;s website and services are intended solely for business clients and individuals
                who are 18 years of age or older. We do not knowingly collect, store, or process personal
                information from minors under the age of 18.
              </p>
              <p>
                If we become aware that personal data has been collected from a minor, we will take
                immediate steps to delete that information. If you believe a minor has submitted
                information to us, please contact us immediately.
              </p>
            </PolicySection>

            <PolicySection index={14} title="External Links">
              <p>
                Our website may contain links to external websites, client project demos, or third-party
                platforms. TechMate4u is not responsible for the privacy practices, content, or security
                of external websites.
              </p>
              <p>
                We encourage you to review the privacy policy of any website you visit through a link
                from our platform before submitting personal information.
              </p>
            </PolicySection>

            <PolicySection index={15} title="Policy Updates">
              <p>
                TechMate4u reserves the right to modify or update this Privacy Policy at any time to
                reflect changes in our practices, services, or applicable laws.
              </p>
              <ul className="grid gap-3">
                {[
                  'Update the "Last Updated" date at the top of this page.',
                  "Post the revised policy on this page at techmate4u.com.",
                  "Where required by law or where changes are significant, notify affected users via email.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Your continued use of our website and services after the revised policy is posted
                constitutes acceptance of the updated terms.
              </p>
            </PolicySection>

            <PolicySection index={16} title="Contact Us & Grievance Officer">
              <p>
                For questions, concerns, or requests regarding this Privacy Policy or how your data is
                handled, please contact us.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-5">
                  <Mail className="mb-4 h-5 w-5 text-[var(--primary)]" />
                  <h3 className="font-bold text-[var(--text)]">TechMate4u</h3>
                  <p className="mt-2 text-sm leading-7">
                    techmate4u.com
                    <br />
                    info@techmate4u.com
                    <br />
                    Ahmedabad, Gujarat, India
                  </p>
                </Card>
                <Card className="p-5">
                  <ShieldCheck className="mb-4 h-5 w-5 text-[var(--primary)]" />
                  <h3 className="font-bold text-[var(--text)]">Grievance Officer</h3>
                  <p className="mt-2 text-sm leading-7">
                    Grievance Officer - TechMate4u
                    <br />
                    info@techmate4u.com
                    <br />
                    Ahmedabad, Gujarat, India
                  </p>
                </Card>
              </div>
              <p>
                We will acknowledge your grievance within 5 business days and aim to resolve it within
                30 days of receipt.
              </p>
              <p className="text-sm text-[var(--text-soft)]">
                © 2026 TechMate4u. All rights reserved. Compliant with IT Act 2000 & DPDPA 2023, India.
              </p>
            </PolicySection>
          </article>
        </div>
      </section>
    </main>
  );
}
