"use client";

import { motion } from "framer-motion";
import { Send, Zap, Timer, ShieldX, Lightbulb, Sparkles } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import tLogo from "../../public/assets/t-logo.webp";

export default function CTA() {
  return (
    <section 
      className="w-full py-16 lg:py-24 relative overflow-hidden cta-premium-section" 
      id="contact"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">

        {/* Left Side: Monogram, Text, and Features */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          {/* Top Row: Monogram Card and Text Content side-by-side on desktop/tablet */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Floating Monogram Card */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative p-4 rounded-2xl border backdrop-blur-md shadow-lg flex items-center justify-center shrink-0 w-24 h-24 sm:w-28 sm:h-28"
              style={{
                background: "var(--glass-bg)",
                borderColor: "var(--glass-border)",
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.05)"
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Spinning/pulsing outer ring */}
                <div className="absolute inset-0 rounded-full border border-[var(--primary)]/20 animate-ping opacity-25" />
                <Image
                  src={tLogo}
                  alt="TM4U Monogram"
                  className="w-16 h-auto object-contain transition-transform duration-500 hover:scale-105"
                  style={{ filter: "sepia(1) saturate(300%) hue-rotate(190deg)" }}
                />
              </div>
            </motion.div>

            {/* Text & Header */}
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ borderColor: "color-mix(in srgb, var(--primary) 25%, transparent)", background: "color-mix(in srgb, var(--primary) 10%, transparent)" }}>
                <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "var(--primary)" }}>We Build Digital Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 tracking-tight leading-[1.15]" style={{ color: "var(--cta-text)" }}>
                Let&apos;s Build <br className="hidden sm:block" /> Something <span style={{ color: "var(--primary)" }}>Amazing.</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--cta-muted)" }}>
                Whether you need a modern website, automation system, or digital marketing, we&apos;re here to bring your ideas to life.
              </p>
            </div>
          </div>

          {/* Bottom Row: 2-Column Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[var(--line)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <Timer className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-snug" style={{ color: "var(--cta-text)" }}>Free 15-min consultation</h4>
                <p className="text-xs opacity-75 mt-1" style={{ color: "var(--cta-muted)" }}>Get expert advice with no strings attached.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <ShieldX className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-snug" style={{ color: "var(--cta-text)" }}>No obligation</h4>
                <p className="text-xs opacity-75 mt-1" style={{ color: "var(--cta-muted)" }}>Explore your options with zero commitment.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <Lightbulb className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-snug" style={{ color: "var(--cta-text)" }}>Clear advice for your business</h4>
                <p className="text-xs opacity-75 mt-1" style={{ color: "var(--cta-muted)" }}>Technical insights tailored to your specific goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}>
                <Zap className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-snug" style={{ color: "var(--cta-text)" }}>Fast & reliable communication</h4>
                <p className="text-xs opacity-75 mt-1" style={{ color: "var(--cta-muted)" }}>We typically respond to inquiries within a few hours.</p>
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
