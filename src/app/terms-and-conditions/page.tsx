import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LegalCards, LegalList, LegalPage, LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms & Conditions | TechMate4u",
  description:
    "Read TechMate4u's Terms & Conditions, last updated on 12 May 2026, for website development, SEO, automation, marketing, design, and mobile app services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const sections = [
  "Introduction",
  "Services Provided",
  "Payment Terms",
  "Refund Policy",
  "Client Responsibilities",
  "Revisions Policy",
  "Acceptance & Approval",
  "Intellectual Property & Portfolio Rights",
  "Maintenance & Post-Launch Support",
  "SEO & Digital Marketing Services",
  "Browser & Device Compatibility",
  "Domain, Hosting & Third-Party Expenses",
  "Confidentiality",
  "Automation & AI Services Disclaimer",
  "Mobile App Store Disclaimer",
  "Limitation of Liability",
  "Project Abandonment",
  "Force Majeure",
  "Termination",
  "Governing Law & Dispute Resolution",
  "Contact Information",
];

const services: Array<[string, string]> = [
  ["Website Development", "Custom web apps, landing pages, and performance-optimized sites."],
  ["UI/UX Design", "Interface design, prototyping, and brand-aligned UX engineering."],
  ["Branding", "Visual identity, logo design, and brand system creation."],
  ["Automation & AI Integration", "AI agents, CRM integrations, WhatsApp, and SMS automation."],
  ["Technical SEO", "Audits, on-page/off-page SEO, and schema optimization."],
  ["Digital Marketing", "Paid ads, social media, email campaigns, and growth strategy."],
  ["Mobile App Development", "Android and iOS apps with Firebase or Supabase backends."],
  ["Maintenance & Support", "Post-launch updates, monitoring, and ongoing technical support."],
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="12 May 2026"
      sections={sections}
      intro={
        <p>
          These Terms & Conditions define how TechMate4u works with clients across
          website development, AI automation, technical SEO, digital marketing, UI/UX
          design, branding, mobile app development, maintenance, and support.
        </p>
      }
    >
      <LegalSection index={1} title="Introduction">
        <p>
          Welcome to TechMate4u, a full-cycle digital product studio and technology
          agency specializing in website development, AI-integrated automation,
          technical SEO, digital marketing, UI/UX design, and mobile application
          development. We engineer high-performance digital systems designed to
          accelerate business growth.
        </p>
        <p>
          These Terms & Conditions constitute a legally binding agreement between you
          as the Client and TechMate4u as the Company. These Terms govern your access
          to techmate4u.com and all services we provide. By visiting our website,
          submitting a project inquiry, or entering any service engagement, you
          confirm that you have read and agreed to these Terms in full.
        </p>
      </LegalSection>

      <LegalSection index={2} title="Services Provided">
        <p>
          TechMate4u offers professional digital services. Each service is subject to
          a separate project proposal, scope agreement, or service contract.
        </p>
        <LegalCards items={services} />
        <p>
          The specific scope of work for each engagement is defined through an
          official proposal, invoice, or service agreement. Any features, deliverables,
          or tasks not explicitly listed in the agreed scope will be treated as
          additional work and billed separately.
        </p>
      </LegalSection>

      <LegalSection index={3} title="Payment Terms">
        <LegalCards
          items={[
            ["Advance Deposit", "An upfront payment, typically 30% of the total project fee, is strictly required before work begins. The exact deposit amount will be stated in the project proposal."],
            ["Final Payment", "The remaining balance must be paid in full before final deliverable handover, source code transfer, website launch, or app launch."],
            ["Milestone Payments", "For larger projects, a milestone-based schedule may be agreed. Delays in milestone payments may pause work until the outstanding balance is cleared."],
            ["Digital Marketing Retainers", "Ongoing digital marketing payments are due in advance of each billing cycle. Failure to pay by the due date may pause campaigns."],
            ["Accepted Methods", "Bank transfer, UPI, and other methods specified in the invoice. All prices are exclusive of applicable GST unless stated otherwise."],
            ["Late Payments", "TechMate4u may pause or terminate work if payments are delayed beyond 7 days. A late fee of 2% per month may apply to overdue balances."],
          ]}
        />
        <p>
          No intellectual property, assets, or ownership rights are transferred to the
          client until full and final payment is received.
        </p>
      </LegalSection>

      <LegalSection index={4} title="Refund Policy">
        <p>
          Due to the custom and digital nature of our services, refunds are generally
          not provided once work has commenced. Time and resources invested in
          research, planning, design, and development are non-recoverable.
        </p>
        <LegalList
          items={[
            "Advance deposits are non-refundable because they secure our team's capacity and cover discovery and planning work already performed.",
            "Approved and completed milestones are strictly non-refundable.",
            "For digital marketing services, ad spend already deployed to third-party platforms such as Google or Meta is non-refundable.",
            "Partial refunds may only be considered under exceptional circumstances, entirely at the sole discretion of TechMate4u.",
          ]}
        />
      </LegalSection>

      <LegalSection index={5} title="Client Responsibilities">
        <p>
          Successful project delivery is collaborative. The client agrees to provide
          the following in a timely manner:
        </p>
        <LegalList
          items={[
            "High-resolution logos, brand assets, and style guidelines.",
            "Necessary access credentials, including hosting panels, domain accounts, CMS logins, ad accounts, analytics access, and third-party API keys.",
            "Content, copy, and media required for the project unless content creation is explicitly included in the agreed scope.",
            "For digital marketing services, timely approval of ad creatives, copy, and campaign strategies before launch.",
            "Timely feedback and approvals within agreed timeframes.",
            "Accurate business information, product or service details, and target audience data required for the project.",
          ]}
        />
        <p>
          Delays caused by the client&apos;s failure to provide required materials,
          access, approvals, or feedback will directly impact delivery timelines.
          TechMate4u will not be responsible for deadline overruns resulting from
          client-side delays.
        </p>
      </LegalSection>

      <LegalSection index={6} title="Revisions Policy">
        <LegalList
          items={[
            "Each project includes a defined number of revision rounds as specified in the proposal, typically up to 3 rounds for design or development unless stated otherwise.",
            "Revisions must be requested during the designated review period and must relate to the original agreed scope.",
            "Additional revisions beyond the included limit will be billed at our standard hourly or fixed rate.",
            "Major structural, functional, or design changes outside the originally agreed scope require a separate quotation and written approval before work proceeds.",
            "For digital marketing campaigns, strategy revisions and creative refreshes beyond the agreed monthly quota will be billed separately.",
            "Revision requests submitted after the 7-day acceptance window will be treated as new change requests and billed accordingly.",
          ]}
        />
      </LegalSection>

      <LegalSection index={7} title="Acceptance & Approval">
        <LegalList
          items={[
            "Upon delivery of a completed project or milestone, the client has a 7-day review period to test deliverables and report bugs or discrepancies against the original agreed scope.",
            "Bug reports must clearly identify the issue, browser or device used, and steps to reproduce.",
            "If no feedback is provided within 7 calendar days of delivery, the project or milestone will be deemed accepted and approved.",
            "Approval, whether explicit or implicit, triggers the final payment obligation if not already settled.",
            "For ongoing marketing services, campaign reports and strategy documents are considered approved if no objections are raised within 5 business days of delivery.",
          ]}
        />
      </LegalSection>

      <LegalSection index={8} title="Intellectual Property & Portfolio Rights">
        <LegalCards
          items={[
            ["Before Full Payment", "TechMate4u retains full ownership of all drafts, code, designs, ad creatives, and work-in-progress until the final invoice is paid in full."],
            ["After Full Payment", "Upon receipt of complete payment, ownership of final approved deliverables transfers to the client. Pre-existing tools, frameworks, templates, and methodologies remain TechMate4u property."],
          ]}
        />
        <p>
          TechMate4u retains the right to feature completed projects, case studies,
          screenshots, campaign results, and design work in our portfolio and
          marketing materials. Third-party components, open-source libraries,
          licensed fonts, and stock assets are governed by their respective licenses.
        </p>
        <p>
          If a project is explicitly agreed as private or governed by a signed
          Non-Disclosure Agreement before project commencement, we will keep all
          details confidential and refrain from featuring it publicly.
        </p>
      </LegalSection>

      <LegalSection index={9} title="Maintenance & Post-Launch Support">
        <LegalList
          items={[
            "Unless a dedicated maintenance or support contract has been purchased separately, TechMate4u's responsibility concludes once the project is delivered and accepted.",
            "Future updates, feature additions, bug fixes, software patches, or content changes after final handover will be billed at our standard rate.",
            "We do not guarantee compatibility with future updates to third-party platforms, CMS systems, browser versions, or operating systems unless covered under a maintenance agreement.",
            "TechMate4u offers dedicated maintenance plans for ongoing support. Contact us for details.",
          ]}
        />
      </LegalSection>

      <LegalSection index={10} title="SEO & Digital Marketing Services">
        <h3 className="text-lg font-bold text-[var(--text)]">Technical SEO</h3>
        <LegalList
          items={[
            "A standard website development package does not include comprehensive SEO. Basic setup only means submitting the website to Google Search Console and Bing Webmaster Tools so it can be crawled and indexed.",
            "TechMate4u's Technical SEO service is a separate engagement covering audits, on-page/off-page optimization, schema markup, Core Web Vitals, and indexing strategy.",
            "No guarantees are made regarding specific search rankings, organic traffic volumes, or timelines. SEO results depend on algorithm changes, market competition, domain history, and other factors outside our control.",
          ]}
        />
        <h3 className="pt-2 text-lg font-bold text-[var(--text)]">Digital Marketing Services</h3>
        <LegalList
          items={[
            "The client is solely responsible for funding advertising budgets directly on platforms such as Google and Meta. TechMate4u's fee covers campaign management and strategy only unless explicitly stated otherwise.",
            "All campaigns are subject to third-party platform policies. TechMate4u is not responsible for ad rejections, account suspensions, or policy changes by Google, Meta, or any other platform.",
            "TechMate4u does not guarantee leads, sales, return on ad spend, click-through rates, follower growth, or any specific performance metric.",
            "We provide regular performance reports based on platform dashboards and analytics tools.",
            "TechMate4u may pause active campaigns if ad accounts run out of funds, management fees are overdue, or required approvals are not provided.",
            "All ad accounts, pages, and profiles used for campaigns must be owned by the client. TechMate4u manages these on the client's behalf but does not take ownership.",
            "All ad creatives, copy, and campaign strategies require written approval before going live.",
            "Monthly retainer-based marketing services require a minimum 30-day written cancellation notice.",
          ]}
        />
      </LegalSection>

      <LegalSection index={11} title="Browser & Device Compatibility">
        <LegalList
          items={[
            "Web projects are built for modern, up-to-date versions of major browsers including Google Chrome, Safari, Mozilla Firefox, and Microsoft Edge.",
            "We do not guarantee pixel-perfect rendering on outdated browsers such as Internet Explorer or obsolete hardware.",
            "Compatibility testing is performed on current stable browser releases at the time of project delivery.",
            "Issues arising from browser or operating system updates after delivery are not covered under the standard scope.",
          ]}
        />
      </LegalSection>

      <LegalSection index={12} title="Domain, Hosting & Third-Party Expenses">
        <p>
          Our project fees cover design and development only unless otherwise stated.
          The following operational costs remain the client&apos;s responsibility:
        </p>
        <LegalList
          items={[
            "Purchasing, renewing, and maintaining domain names, web hosting servers, and SSL certificates.",
            "Premium plugins, licensed stock images, paid APIs, or third-party software required for functionality unless explicitly included in the proposal.",
            "Subscription fees for platforms integrated into the project, including Firebase, Supabase, WhatsApp Business API, CRM tools, email platforms, and ad platforms.",
            "Advertising budgets paid to Google, Meta, or any other platform.",
          ]}
        />
        <p>
          TechMate4u is not liable for server downtime, data loss, hosting provider
          outages, third-party API changes, plugin updates, or platform policy changes
          beyond our control.
        </p>
      </LegalSection>

      <LegalSection index={13} title="Confidentiality">
        <p>
          Both parties agree to maintain strict confidentiality of proprietary,
          sensitive, or commercially valuable information shared during an engagement.
        </p>
        <LegalList
          items={[
            "Business strategies, plans, and financial data.",
            "Technical architectures, source code, and system designs shared in confidence.",
            "Login credentials, API keys, access tokens, and account details.",
            "Customer data, pricing structures, and marketing strategies.",
          ]}
        />
        <p>
          TechMate4u will not disclose client confidential information to any third
          party without prior written consent, except where required by applicable
          law, court order, or regulatory authority. This obligation survives the
          termination of any project engagement.
        </p>
      </LegalSection>

      <LegalSection index={14} title="Automation & AI Services Disclaimer">
        <LegalList
          items={[
            "Automation services rely on third-party APIs and platforms such as Meta WhatsApp Business API, Twilio, and OpenAI. TechMate4u is not responsible for changes to those platforms after delivery.",
            "The client is responsible for ensuring their use of automation complies with the terms of service of all underlying platforms.",
            "TechMate4u is not liable if a client's WhatsApp Business account, ad account, or other platform account is restricted, suspended, or banned due to policy violations.",
            "AI-generated responses or outputs are not guaranteed to be 100% accurate, complete, or appropriate in every situation.",
            "The client is responsible for monitoring AI system outputs and putting appropriate human oversight in place.",
            "Customer or user data processed by automation systems is handled in accordance with our Privacy Policy. The client is responsible for their own compliance with applicable data protection laws, including India's DPDPA 2023.",
          ]}
        />
      </LegalSection>

      <LegalSection index={15} title="Mobile App Store Disclaimer">
        <LegalList
          items={[
            "TechMate4u will prepare and submit your application to the Google Play Store and/or Apple App Store as part of the agreed scope, where applicable.",
            "Approval, rejection, or removal of applications is entirely at the discretion of Google and Apple.",
            "If an application is rejected, TechMate4u will make reasonable efforts to address the stated reasons. Additional revisions may be billed depending on the nature of the required changes.",
            "Developer account fees for Google Play Console or Apple Developer Program are the client's responsibility unless otherwise agreed.",
            "Future app store policy changes requiring updates after delivery fall outside standard project scope and will be handled under maintenance or billed at our standard rate.",
          ]}
        />
      </LegalSection>

      <LegalSection index={16} title="Limitation of Liability">
        <p>
          TechMate4u&apos;s total liability for any claim arising from our services
          shall not exceed the total fees paid by the client for the specific service
          giving rise to the claim in the 3 months preceding the claim.
        </p>
        <LegalList
          items={[
            "Loss of business, revenue, profits, or market share.",
            "Loss of data or unauthorized data access caused by third-party hosting or security breaches.",
            "Poor digital marketing performance, low ad returns, or failure to achieve business targets.",
            "Platform account suspensions caused by third-party policy enforcement.",
            "Operational interruptions resulting from use or inability to use our deliverables.",
            "Damages arising from client-provided content that infringes third-party intellectual property rights.",
          ]}
        />
      </LegalSection>

      <LegalSection index={17} title="Project Abandonment">
        <LegalList
          items={[
            "If a client becomes unresponsive or fails to provide necessary feedback, content, or assets for 30 consecutive calendar days, the project will be considered abandoned.",
            "No refunds will be issued for abandoned projects.",
            "All work completed up to the point of abandonment remains fully payable.",
            "Resuming an abandoned project may require a reactivation fee and revised timelines.",
          ]}
        />
      </LegalSection>

      <LegalSection index={18} title="Force Majeure">
        <p>
          Neither TechMate4u nor the client shall be liable for delays or failure to
          fulfill obligations caused by events beyond reasonable control, including
          natural disasters, government restrictions, widespread internet outages,
          power failures, cyberattacks on infrastructure providers, or other
          extraordinary circumstances. The affected party shall notify the other as
          soon as reasonably practicable, and both parties will make good-faith
          efforts to resume obligations once conditions allow.
        </p>
      </LegalSection>

      <LegalSection index={19} title="Termination">
        <LegalCards
          items={[
            ["By Client", "You may terminate the agreement before completion with written notice. All work completed up to the termination date remains fully payable. Advance deposits are non-refundable."],
            ["By TechMate4u", "We may terminate immediately due to abusive behavior, material breach of these Terms, or repeated failure to make payments. Completed work must be settled in full."],
          ]}
        />
        <p>
          Upon termination, TechMate4u will deliver all work completed and fully paid
          for up to that date. Work-in-progress that remains unpaid will not be
          transferred until the outstanding balance is cleared. For marketing
          retainers, a minimum 30-day written notice is required before cancellation
          takes effect.
        </p>
      </LegalSection>

      <LegalSection index={20} title="Governing Law & Dispute Resolution">
        <p>
          These Terms & Conditions shall be governed by and construed in accordance
          with the laws of India. Any disputes arising from or relating to these
          Terms or TechMate4u&apos;s services shall first be attempted to be resolved
          through good-faith negotiation between both parties.
        </p>
        <p>
          If a resolution cannot be reached within 30 days of the dispute being
          raised in writing, both parties agree to submit to the exclusive
          jurisdiction of the courts in Ahmedabad, Gujarat, India.
        </p>
      </LegalSection>

      <LegalSection index={21} title="Contact Information">
        <div className="rounded-lg border p-5" style={{ borderColor: "var(--line-soft)" }}>
          <Mail className="mb-4 h-5 w-5 text-[var(--primary)]" />
          <h3 className="font-bold text-[var(--text)]">TechMate4u</h3>
          <p className="mt-2 text-sm leading-7">
            techmate4u.com
            <br />
            info@techmate4u.com
            <br />
            Ahmedabad, Gujarat, India
          </p>
        </div>
        <p>
          TechMate4u reserves the right to update or modify these Terms at any time.
          Revised Terms will be posted on our website with an updated effective date.
          Continued use of our website or services after changes constitutes
          acceptance of the updated Terms.
        </p>
        <p className="text-sm text-[var(--text-soft)]">
          © 2026 TechMate4u. All rights reserved. Governed by the laws of India,
          jurisdiction: Ahmedabad, Gujarat.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
