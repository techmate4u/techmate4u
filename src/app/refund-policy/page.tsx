import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LegalCards, LegalList, LegalPage, LegalSection } from "@/components/LegalDocument";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Refund Policy | TechMate4u",
  description:
    "Read TechMate4u's Refund Policy, last updated on 12 May 2026, for custom development, design, SEO, automation, marketing, and consulting services.",
  alternates: {
    canonical: "/refund-policy",
  },
};

const sections = [
  "Nature of Our Services",
  "Payment Structure",
  "Refund Eligibility",
  "Cancellation by the Client",
  "Cancellation by TechMate4u",
  "Subscription & Retainer Services",
  "Revisions vs. Refunds",
  "Chargebacks",
  "Processing Refunds",
  "Contact Us",
  "Changes to This Policy",
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="12 May 2026"
      sections={sections}
      intro={
        <p>
          At TechMate4u, our refund policy is built around the reality of custom
          digital work: strategy, design, development, SEO, automation, and consulting
          all require dedicated time and resources from the start of an engagement.
        </p>
      }
    >
      <section className="border-t py-10" style={{ borderColor: "var(--line)" }}>
        <Card className="p-5">
          <p className="text-base leading-8 text-[var(--text-muted)]">
            We are committed to delivering high-quality digital products and services
            that meet the goals agreed upon at the start of every engagement. Because
            our work involves custom development, design, strategy, and dedicated team
            hours, this policy is structured to be fair to both our clients and our
            team. By making a payment to TechMate4u, you agree to the terms outlined
            below.
          </p>
        </Card>
      </section>

      <LegalSection index={1} title="Nature of Our Services">
        <p>
          TechMate4u provides custom-built services including website development,
          technical SEO, AI automation systems, mobile app development, UI/UX design,
          and related consulting. Each project is unique, scoped individually, and
          executed with dedicated time and resources. Once work has begun, the time
          and effort invested cannot be recovered.
        </p>
      </LegalSection>

      <LegalSection index={2} title="Payment Structure">
        <p>Most of our projects follow a milestone-based payment structure:</p>
        <LegalCards
          items={[
            ["Advance / Booking Fee", "A non-refundable deposit, typically 30% of the project value, is required before work begins. This secures your project slot and covers initial discovery, planning, and resource allocation."],
            ["Milestone Payments", "Subsequent payments are tied to project milestones such as design approval, development completion, or pre-launch work."],
            ["Final Payment", "Final payment is due upon project completion and before final handover or deployment."],
          ]}
        />
        <p>
          Specific payment terms for your project will be outlined in your individual
          proposal or service agreement.
        </p>
      </LegalSection>

      <LegalSection index={3} title="Refund Eligibility">
        <h3 className="text-lg font-bold text-[var(--text)]">Eligible for a partial refund</h3>
        <LegalList
          items={[
            "The project has not yet started, and cancellation is requested within 48 hours of payment. The advance or booking fee may still be retained to cover administrative costs.",
            "TechMate4u is unable to deliver the agreed-upon scope due to reasons solely on our end, and an alternative solution cannot be reached.",
          ]}
        />
        <h3 className="pt-2 text-lg font-bold text-[var(--text)]">Not eligible for a refund</h3>
        <LegalList
          items={[
            "Work has already commenced, including discovery, design, development, or strategy work.",
            "The client changes their mind, abandons the project, or becomes unresponsive for more than 30 consecutive days.",
            "The client requests changes outside the original agreed scope. These are handled as paid revisions or change requests.",
            "Delays are caused by the client, including late feedback, missing content, unresponsive communication, or third-party dependencies.",
            "Completed and delivered work, including websites, code, designs, SEO reports, or automation systems that have been deployed or handed over.",
            "Third-party costs already paid on the client's behalf, including domains, hosting, plugins, premium APIs, licenses, or similar expenses.",
            "Subscription-based or monthly retainer services after the billing cycle has started.",
          ]}
        />
      </LegalSection>

      <LegalSection index={4} title="Cancellation by the Client">
        <p>If you wish to cancel an ongoing project:</p>
        <LegalList
          items={[
            "Notify us in writing via any official communication channel at the earliest.",
            "Any work completed up to the cancellation date will be billed and is non-refundable.",
            "If payments made so far exceed the value of work completed, the remaining balance may be refunded at our discretion after deducting administrative and resource costs.",
            "All deliverables, source code, and design assets remain the property of TechMate4u until full payment is received.",
          ]}
        />
      </LegalSection>

      <LegalSection index={5} title="Cancellation by TechMate4u">
        <p>
          In rare cases where we are unable to continue a project due to unforeseen
          circumstances, scope misalignment, or client conduct that violates our
          terms, we will:
        </p>
        <LegalList
          items={[
            "Notify the client in writing.",
            "Refund any unearned portion of the payment after deducting work already completed and resources committed.",
            "Hand over any deliverables completed up to that point.",
          ]}
        />
      </LegalSection>

      <LegalSection index={6} title="Subscription & Retainer Services">
        <p>
          For ongoing services such as SEO retainers, maintenance plans, or automation
          subscriptions:
        </p>
        <LegalList
          items={[
            "Payments are billed in advance for the agreed period, whether monthly, quarterly, or otherwise agreed.",
            "No refunds are issued for partially used billing cycles.",
            "You may cancel future renewals by notifying us at least 7 days before the next billing date.",
          ]}
        />
      </LegalSection>

      <LegalSection index={7} title="Revisions vs. Refunds">
        <p>
          We are committed to client satisfaction. If you are not happy with a
          deliverable, we encourage you to first request a revision within the agreed
          revision rounds outlined in your project scope. Most concerns can be
          resolved through clear communication and collaborative iteration rather than
          cancellation.
        </p>
      </LegalSection>

      <LegalSection index={8} title="Chargebacks">
        <p>
          Before initiating a chargeback or payment dispute with your bank or payment
          provider, we ask that you contact us directly so we can attempt to resolve
          the issue. Unjustified chargebacks may result in legal action and forfeiture
          of all delivered work and intellectual property.
        </p>
      </LegalSection>

      <LegalSection index={9} title="Processing Refunds">
        <p>
          Approved refunds will be processed within 7-14 business days through the
          original payment method. Depending on your bank or payment provider, it may
          take additional time for the amount to reflect in your account.
        </p>
      </LegalSection>

      <LegalSection index={10} title="Contact Us">
        <Card className="p-5">
          <Mail className="mb-4 h-5 w-5 text-[var(--primary)]" />
          <h3 className="font-bold text-[var(--text)]">Refund Requests & Questions</h3>
          <p className="mt-2 text-sm leading-7">
            Email: info@techmate4u.com
            <br />
            Website: www.techmate4u.com
            <br />
            Response Time: Within 24 business hours
          </p>
        </Card>
      </LegalSection>

      <LegalSection index={11} title="Changes to This Policy">
        <p>
          TechMate4u reserves the right to update or modify this Refund Policy at any
          time. Changes will be posted on this page with an updated effective date.
          Continued use of our services after such changes constitutes acceptance of
          the revised policy.
        </p>
        <p className="text-sm text-[var(--text-soft)]">
          Last updated: 12 May 2026
        </p>
      </LegalSection>
    </LegalPage>
  );
}
