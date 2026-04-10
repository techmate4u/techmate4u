"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, Rocket, MessageSquare, Briefcase, Zap } from "lucide-react";

type InquiryType = "estimate" | "inquiry" | "partnership" | "other";

const inquiryOptions = [
    { id: "estimate", label: "Project Estimate", icon: Rocket },
    { id: "inquiry", label: "General Inquiry", icon: MessageSquare },
    { id: "partnership", label: "Partnership", icon: Briefcase },
    { id: "other", label: "Other", icon: Zap },
] as const;

export default function CTA() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [inquiryType, setInquiryType] = useState<InquiryType>("estimate");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");
    };

    const buttonText = {
        estimate: "Get Project Estimate",
        inquiry: "Send Inquiry",
        partnership: "Explore Partnership",
        other: "Send Message",
    }[inquiryType];

    return (
        <section className="w-full py-32 relative overflow-hidden" id="contact" style={{ background: "var(--cta-bg)" }}>
            {/* Ambient glowing gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px] opacity-50 pointer-events-none" style={{ background: "color-mix(in srgb, var(--accent) 26%, transparent)" }} />

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]" style={{ color: "var(--cta-text)" }}>
                        Ready to Build Your Digital Presence?
                    </h2>
                    <p className="text-lg mb-8 drop-shadow-md" style={{ color: "var(--cta-muted)" }}>
                        Let&apos;s discuss how we can engineer a custom solution to help your business scale and succeed online. Reach out to our team of experts below.
                    </p>

                    <div className="flex items-center gap-4 drop-shadow-sm" style={{ color: "var(--cta-soft)" }}>
                        <div className="w-12 h-[1px]" style={{ background: "color-mix(in srgb, var(--cta-soft) 50%, transparent)" }}></div>
                        <span className="text-sm font-medium uppercase tracking-wider">Fast Response Guaranteed</span>
                    </div>
                </motion.div>

                {/* Form Component */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="border backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden" style={{ background: "var(--cta-panel)", borderColor: "color-mix(in srgb, var(--cta-text) 10%, transparent)" }}>

                        {/* Soft inner glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center text-center py-12 relative z-10 drop-shadow-md"
                                >
                                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3 tracking-tight" style={{ color: "var(--cta-text)" }}>Request Received!</h3>
                                    <p className="text-lg" style={{ color: "var(--cta-muted)" }}>Our team will review your details and be in touch shortly.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-6 relative z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium" style={{ color: "var(--cta-muted)" }}>Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                placeholder="Jane Doe"
                                                className="w-full border rounded-xl h-12 px-4 focus:outline-none focus:ring-1 transition-all placeholder:text-slate-600"
                                                style={{ background: "var(--cta-input)", borderColor: "color-mix(in srgb, var(--cta-text) 10%, transparent)", color: "var(--cta-text)" }}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--cta-muted)" }}>Work Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                placeholder="jane@company.com"
                                                className="w-full border rounded-xl h-12 px-4 focus:outline-none focus:ring-1 transition-all placeholder:text-slate-600"
                                                style={{ background: "var(--cta-input)", borderColor: "color-mix(in srgb, var(--cta-text) 10%, transparent)", color: "var(--cta-text)" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Inquiry Type Pills */}
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium" style={{ color: "var(--cta-muted)" }}>What can we help you with?</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {inquiryOptions.map((option) => {
                                                const Icon = option.icon;
                                                const isSelected = inquiryType === option.id;
                                                return (
                                                    <button
                                                        key={option.id}
                                                        type="button"
                                                        onClick={() => setInquiryType(option.id as InquiryType)}
                                                        className="flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-300"
                                                        style={{
                                                            background: isSelected ? "color-mix(in srgb, var(--primary) 12%, transparent)" : "var(--cta-input)",
                                                            borderColor: isSelected ? "color-mix(in srgb, var(--primary) 52%, transparent)" : "color-mix(in srgb, var(--cta-text) 6%, transparent)",
                                                            color: isSelected ? "var(--primary)" : "var(--cta-soft)",
                                                            boxShadow: isSelected ? "0 0 15px color-mix(in srgb, var(--primary) 22%, transparent)" : "none"
                                                        }}
                                                    >
                                                        <Icon className="w-5 h-5 transition-colors" style={{ color: isSelected ? "var(--primary)" : "var(--cta-soft)" }} />
                                                        <span className="font-medium text-sm">{option.label}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--cta-muted)" }}>Project Details</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            placeholder="Tell us about your goals, timeline, and current challenges..."
                                            className="w-full border rounded-lg p-4 focus:outline-none focus:ring-1 transition-all placeholder:text-slate-600 resize-none"
                                            style={{ background: "var(--cta-input)", borderColor: "color-mix(in srgb, var(--cta-text) 10%, transparent)", color: "var(--cta-text)" }}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="mt-2 relative group overflow-hidden disabled:opacity-60 text-white text-lg font-bold rounded-xl h-14 px-8 flex items-center justify-center gap-2 w-full"
                                        style={{ background: "var(--primary)", boxShadow: "0 16px 36px -20px var(--theme-glow)" }}
                                    >
                                        {/* Dynamic shimmer hover effect using native tailwind */}
                                        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />

                                        {status === "submitting" ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Processing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2 relative z-10">
                                                {buttonText}
                                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </span>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
