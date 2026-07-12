import type { Metadata } from "next";
import { Mail, Clock, MapPin, Send, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch | TechMate4u",
  description:
    "Have a project or design in mind? Drop us a message, schedule a call, or start a WhatsApp chat with TechMate4u engineers.",
};

const STUDIO_COORDINATES = [
  {
    icon: Mail,
    label: "Email directly",
    value: "support@techmate4u.com",
    href: "mailto:support@techmate4u.com",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp quick chat",
    value: "+91 93272 63267",
    href: "https://wa.me/919327263267",
  },
  {
    icon: Clock,
    label: "Response times",
    value: "Within 24 hours (Mon - Sat)",
  },
  {
    icon: MapPin,
    label: "Studio hub",
    value: "Gujarat, India (Serving Globally)",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-0 relative overflow-hidden">
      {/* 3D hexagon wall pattern overlay on the right */}
      <div className="absolute right-[-5%] top-[15%] w-[600px] h-[700px] bg-[url(/assets/bg-hexagons.png)] bg-no-repeat bg-contain opacity-[0.09] pointer-events-none -z-10" />

      {/* Blueprint drawing overlay on the left */}
      <div className="absolute left-[-10%] bottom-0 w-[550px] h-[550px] bg-[url(/assets/bg-blueprint.png)] bg-no-repeat bg-contain opacity-[0.08] pointer-events-none -z-10 animate-float" />

      {/* Background blueprint details */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <SectionHeading
          eyebrow="Contact Studio"
          title="Let's build something beautiful together"
          subtitle="Have a defined scope, a legacy portal to modernise, or just looking to brainstorm an application architecture? Drop us a note."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Coordinates Details Column */}
          <div className="space-y-6 lg:sticky lg:top-36">
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold tracking-tight text-[var(--text)] mb-4">
              Direct Channels
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {STUDIO_COORDINATES.map((coord, idx) => {
                const isLink = !!coord.href;
                const Component = isLink ? "a" : "div";
                return (
                  <Card
                    key={idx}
                    className="p-5 flex gap-4 items-center bg-[var(--panel)] border-[var(--line)]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                      <coord.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-soft)]">
                        {coord.label}
                      </span>
                      {isLink ? (
                        <a
                          href={coord.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[var(--text)] hover:text-[var(--primary)] transition-colors mt-0.5 block break-all"
                        >
                          {coord.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-[var(--text-soft)] mt-0.5 block">
                          {coord.value}
                        </span>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Micro FAQ widget */}
            <Card className="p-6 bg-[var(--panel)] border-[var(--line)]">
              <h4 className="font-[family-name:var(--font-outfit)] text-sm font-bold tracking-wide uppercase text-[var(--text-soft)] mb-3">
                What happens next?
              </h4>
              <ul className="space-y-3 text-xs leading-relaxed text-[var(--text-muted)] font-medium">
                <li className="flex gap-2">
                  <span className="text-[var(--primary)] font-bold">1.</span>
                  We read your spec details and scope requirements immediately.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--primary)] font-bold">2.</span>
                  A lead engineer reaches out to coordinate a 15-minute sync schedule.
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--primary)] font-bold">3.</span>
                  You get an execution roadmap, milestone checklist, and fixed-price scope proposal within 48 hours.
                </li>
              </ul>
            </Card>
          </div>

          {/* Form card wrapper */}
          <Card className="p-6 sm:p-10 bg-[var(--panel)] border border-[var(--line)] shadow-2xl relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Send className="size-20 text-[var(--primary)]" />
            </div>
            <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-black text-[var(--text)] mb-6">
              Scope Submission Form
            </h3>
            <ContactForm />
          </Card>
        </div>
      </div>
    </main>
  );
}
