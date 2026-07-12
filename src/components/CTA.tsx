"use client";

import { motion } from "framer-motion";
import { Send, Zap, Timer, ShieldX, Lightbulb } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export default function CTA() {
  return (
    <section className="w-full py-20 lg:py-24 relative overflow-hidden" id="contact" style={{ background: "var(--cta-bg)" }}>
      {/* Blueprint drawing overlay */}
      <div className="absolute inset-0 bg-[url(/assets/bg-blueprint.png)] bg-no-repeat bg-cover opacity-[0.08] pointer-events-none -z-10" />

      {/* Ambient glowing gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px] opacity-50 pointer-events-none" style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }} />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

        {/* Left Side: Text & Features */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{ borderColor: "color-mix(in srgb, var(--primary) 25%, transparent)", background: "color-mix(in srgb, var(--primary) 10%, transparent)" }}>
            <Send className="w-4 h-4" style={{ color: "var(--primary)" }} />
            <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "var(--primary)" }}>Let&apos;s work together</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-[1.1] drop-shadow-lg" style={{ color: "var(--cta-text)" }}>
            Let&apos;s Build <br className="hidden lg:block" /> Something <br className="hidden lg:block" /><span style={{ color: "var(--primary)" }}>Amazing.</span>
          </h2>
          
          <p className="text-sm sm:text-base mb-10 lg:mb-12 drop-shadow-md max-w-md leading-relaxed" style={{ color: "var(--cta-muted)" }}>
            Whether you need a modern website, automation system, or digital marketing, we&apos;re here to bring your ideas to life.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-10 mb-10 lg:mb-14">
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 lg:gap-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <Timer className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div className="pt-0.5 max-w-[120px] lg:max-w-none">
                <h4 className="font-bold text-[11px] sm:text-xs lg:text-base leading-tight" style={{ color: "var(--cta-text)" }}>Free 15-min consultation</h4>
                <p className="hidden lg:block text-sm opacity-70 mt-1" style={{ color: "var(--cta-muted)" }}>Get expert advice with no strings attached.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 lg:gap-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <ShieldX className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div className="pt-0.5 max-w-[120px] lg:max-w-none">
                <h4 className="font-bold text-[11px] sm:text-xs lg:text-base leading-tight" style={{ color: "var(--cta-text)" }}>No <br className="lg:hidden" /> obligation</h4>
                <p className="hidden lg:block text-sm opacity-70 mt-1" style={{ color: "var(--cta-muted)" }}>Explore your options with zero commitment.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 lg:gap-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <Lightbulb className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div className="pt-0.5 max-w-[120px] lg:max-w-none">
                <h4 className="font-bold text-[11px] sm:text-xs lg:text-base leading-tight" style={{ color: "var(--cta-text)" }}>Clear advice for your business</h4>
                <p className="hidden lg:block text-sm opacity-70 mt-1" style={{ color: "var(--cta-muted)" }}>Technical insights tailored to your specific goals.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 lg:gap-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <Zap className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div className="pt-0.5 max-w-[120px] lg:max-w-none">
                <h4 className="font-bold text-[11px] sm:text-xs lg:text-base leading-tight" style={{ color: "var(--cta-text)" }}>Fast & reliable communication</h4>
                <p className="hidden lg:block text-sm opacity-70 mt-1" style={{ color: "var(--cta-muted)" }}>We typically respond to inquiries within a few hours.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="border backdrop-blur-xl rounded-lg p-8 lg:p-10 shadow-2xl relative overflow-hidden" style={{ background: "var(--cta-panel)", borderColor: "color-mix(in srgb, var(--cta-text) 8%, transparent)" }}>
            {/* Soft inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
            <ContactForm />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
