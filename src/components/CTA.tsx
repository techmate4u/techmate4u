"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle2, MessageSquare, Zap, User, Layout, Lock, CheckSquare, FileText, ChevronDown, Phone, AlertCircle, Timer, ShieldX, Lightbulb, Code2, Search, Bot, Smartphone, Megaphone, Mail } from "lucide-react";
import { countryCodes } from "./countryData";

type InquiryType = "website" | "seo" | "automation" | "mobile" | "other";

// Sanitize user input to prevent XSS
function sanitizeInput(str: string): string {
    return str
        .replace(/</g, '')
        .replace(/>/g, '')
        .replace(/"/g, '')
        .replace(/'/g, '')
        .replace(/`/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim();
}

const inquiryOptions = [
    { id: "website", label: "Website Development", icon: Code2 },
    { id: "seo", label: "Technical SEO", icon: Search },
    { id: "automation", label: "AI Automation", icon: Bot },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "marketing", label: "Digital Marketing", icon: Megaphone },
    { id: "other", label: "Other Query", icon: MessageSquare },
] as const;

export default function CTA() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [inquiryType, setInquiryType] = useState<InquiryType>("website");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const countryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSelect = (e: CustomEvent) => {
            if (["website", "seo", "automation", "mobile", "marketing", "other"].includes(e.detail)) {
                setInquiryType(e.detail as InquiryType);
            }
        };
        window.addEventListener('selectService', handleSelect as EventListener);
        return () => window.removeEventListener('selectService', handleSelect as EventListener);
    }, []);

    // Close country dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
                setIsCountryOpen(false);
                setCountrySearch("");
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg(null);

        const formData = new FormData(e.currentTarget);
        const rawName = (formData.get('name') as string || '').trim();
        const rawEmail = (formData.get('email') as string || '').trim();
        const rawMobile = (formData.get('mobile') as string || '').trim();
        const rawMessage = (formData.get('message') as string || '').trim();

        // Sanitize all inputs
        const name = sanitizeInput(rawName);
        const email = sanitizeInput(rawEmail);
        const mobile = rawMobile.replace(/\D/g, ''); // digits only
        const message = sanitizeInput(rawMessage);

        // Validation: Name (2-100 chars, letters/spaces only)
        if (name.length < 2 || name.length > 100) {
            setErrorMsg("Please enter a valid name (2-100 characters).");
            return;
        }
        if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
            setErrorMsg("Name can only contain letters, spaces, and basic punctuation.");
            return;
        }

        // Validation: Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email.length > 254) {
            setErrorMsg("Please enter a valid email address.");
            return;
        }

        // Validation: Phone (optional, but must be 10 digits if provided)
        if (mobile && mobile.length !== 10) {
            setErrorMsg("Phone number must be exactly 10 digits.");
            return;
        }

        // Validation: Message length
        if (message.length > 2000) {
            setErrorMsg("Project details must be under 2000 characters.");
            return;
        }

        setStatus("submitting");

        const data = {
            name,
            email,
            countryCode: mobile ? selectedCountry.dial : '',
            mobile,
            service: inquiryType,
            message,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setStatus("success");
        } catch (error) {
            console.error('Form submission error:', error);
            alert("There was an error sending your message. Please try again.");
            setStatus("idle");
        }
    };



    return (
        <section className="w-full py-20 lg:py-24 relative overflow-hidden" id="contact" style={{ background: "var(--cta-bg)" }}>
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

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center text-center py-20 relative z-10"
                                >
                                    <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 shadow-inner border border-emerald-500/20">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: "var(--cta-text)" }}>Request Received!</h3>
                                    <p className="text-base max-w-sm" style={{ color: "var(--cta-muted)" }}>Our team will review your project details and be in touch shortly.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-8 relative z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Section 1: Contact Details */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-5">
                                            <User className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                            <div>
                                                <h3 className="font-bold text-sm" style={{ color: "var(--cta-text)" }}>Contact Details</h3>
                                                <p className="text-[13px] opacity-80 mt-0.5" style={{ color: "var(--cta-muted)" }}>We&apos;ll use this to get in touch with you</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {/* Full Name */}
                                            <div className="relative rounded-md p-3.5 pb-2.5 transition-all focus-within:ring-1 focus-within:ring-[var(--primary)]" style={{ background: "var(--cta-input)" }}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <User className="w-3.5 h-3.5" style={{ color: "var(--cta-soft)" }} />
                                                    <span className="text-[11px] font-semibold tracking-wide" style={{ color: "var(--cta-text)" }}>Full Name</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder="Enter Name"
                                                    className="w-full bg-transparent focus:outline-none text-[15px] placeholder:opacity-90"
                                                    style={{ color: "var(--cta-text)", border: "none", background: "none" }}
                                                />
                                            </div>
                                            {/* Work Email */}
                                            <div className="relative rounded-md p-3.5 pb-2.5 transition-all focus-within:ring-1 focus-within:ring-[var(--primary)]" style={{ background: "var(--cta-input)" }}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Mail className="w-3.5 h-3.5" style={{ color: "var(--cta-soft)" }} />
                                                    <span className="text-[11px] font-semibold tracking-wide" style={{ color: "var(--cta-text)" }}>Work Email</span>
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="Enter Email"
                                                    className="w-full bg-transparent focus:outline-none text-[15px] placeholder:opacity-90"
                                                    style={{ color: "var(--cta-text)", border: "none", background: "none" }}
                                                />
                                            </div>
                                            {/* Phone/WhatsApp */}
                                            <div className="relative rounded-md p-3.5 pb-2.5 transition-all focus-within:ring-1 focus-within:ring-[var(--primary)] sm:col-span-2" style={{ background: "var(--cta-input)" }}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Phone className="w-3.5 h-3.5" style={{ color: "var(--cta-soft)" }} />
                                                    <span className="text-[11px] font-semibold tracking-wide" style={{ color: "var(--cta-text)" }}>Phone / WhatsApp (Optional)</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {/* Country Code Selector */}
                                                    <div className="relative" ref={countryRef}>
                                                        <button
                                                            type="button"
                                                            onClick={() => { setIsCountryOpen(!isCountryOpen); setCountrySearch(""); }}
                                                            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[14px] cursor-pointer transition-colors hover:bg-white/5 shrink-0"
                                                            style={{ color: "var(--cta-text)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                                                        >
                                                            <span className="text-base leading-none">{selectedCountry.flag}</span>
                                                            <span className="text-[13px] font-medium">{selectedCountry.dial}</span>
                                                            <ChevronDown className={`w-3 h-3 opacity-50 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                                                        </button>
                                                        <AnimatePresence>
                                                            {isCountryOpen && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: -8 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -8 }}
                                                                    transition={{ duration: 0.15 }}
                                                                    className="absolute top-full left-0 mt-2 w-56 max-h-52 overflow-y-auto rounded-md border z-50 shadow-2xl"
                                                                    style={{ background: "var(--cta-bg)", borderColor: "color-mix(in srgb, var(--cta-text) 10%, transparent)" }}
                                                                >
                                                                    <div className="sticky top-0 p-2" style={{ background: "var(--cta-bg)" }}>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search country..."
                                                                            value={countrySearch}
                                                                            onChange={(e) => setCountrySearch(e.target.value)}
                                                                            className="w-full px-2 py-1.5 rounded text-[13px] bg-transparent focus:outline-none placeholder:opacity-60"
                                                                            style={{ color: "var(--cta-text)", border: "1px solid rgba(255,255,255,0.1)" }}
                                                                            autoFocus
                                                                        />
                                                                    </div>
                                                                    {countryCodes
                                                                        .filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.dial.includes(countrySearch))
                                                                        .map((country) => (
                                                                        <button
                                                                            key={country.code}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setSelectedCountry(country);
                                                                                setIsCountryOpen(false);
                                                                                setCountrySearch("");
                                                                            }}
                                                                            className={`w-full text-left px-3 py-2 text-[13px] transition-colors flex items-center gap-2.5 hover:bg-white/5 ${
                                                                                selectedCountry.code === country.code ? 'bg-white/8' : ''
                                                                            }`}
                                                                            style={{ color: "var(--cta-text)" }}
                                                                        >
                                                                            <span className="text-base leading-none">{country.flag}</span>
                                                                            <span className="flex-1">{country.name}</span>
                                                                            <span className="opacity-50 text-[12px]">{country.dial}</span>
                                                                        </button>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                    {/* Phone Input */}
                                                    <input
                                                        type="tel"
                                                        id="mobile"
                                                        name="mobile"
                                                        maxLength={10}
                                                        placeholder="Enter 10-digit number"
                                                        onKeyDown={(e) => {
                                                            if (!/[0-9]/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight','Home','End'].includes(e.key) && !e.ctrlKey && !e.metaKey) {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                        onPaste={(e) => {
                                                            const pasted = e.clipboardData.getData('text');
                                                            if (!/^\d+$/.test(pasted)) e.preventDefault();
                                                        }}
                                                        className="flex-1 bg-transparent focus:outline-none text-[15px] placeholder:opacity-90"
                                                        style={{ color: "var(--cta-text)", border: "none", background: "none" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 2: Project Information */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-5">
                                            <Layout className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                            <div>
                                                <h3 className="font-bold text-sm" style={{ color: "var(--cta-text)" }}>Project Information</h3>
                                                <p className="text-[13px] opacity-80 mt-0.5" style={{ color: "var(--cta-muted)" }}>Tell us about your project and goals</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            {/* Dropdown */}
                                            <div className="relative rounded-md p-3.5 transition-all focus-within:ring-1 focus-within:ring-[var(--primary)]" style={{ background: "var(--cta-input)" }}>
                                                <div className="flex items-center gap-2 mb-2 pointer-events-none">
                                                    <CheckSquare className="w-3.5 h-3.5" style={{ color: "var(--cta-text)" }} />
                                                    <span className="text-[11px] font-semibold tracking-wide" style={{ color: "var(--cta-text)" }}>Project Type</span>
                                                </div>
                                                <div className="relative">
                                                    <input type="hidden" name="service" value={inquiryType} />
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                        className="w-full bg-transparent flex items-center justify-between focus:outline-none text-[15px] pb-0.5 opacity-90 cursor-pointer"
                                                        style={{ color: "var(--cta-text)" }}
                                                    >
                                                        <span>{inquiryOptions.find(o => o.id === inquiryType)?.label}</span>
                                                        <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isDropdownOpen && (
                                                            <>
                                                                <div
                                                                    className="fixed inset-0 z-40"
                                                                    onClick={() => setIsDropdownOpen(false)}
                                                                />
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    transition={{ duration: 0.15 }}
                                                                    className="absolute top-full left-[-15px] right-[-15px] mt-3 rounded-md border overflow-hidden z-50 shadow-2xl"
                                                                    style={{ background: "var(--cta-bg)", borderColor: "color-mix(in srgb, var(--cta-text) 10%, transparent)" }}
                                                                >
                                                                    {inquiryOptions.map((option) => (
                                                                        <button
                                                                            key={option.id}
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setInquiryType(option.id);
                                                                                setIsDropdownOpen(false);
                                                                            }}
                                                                            className="w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-3 hover:bg-white/5"
                                                                            style={{ color: "var(--cta-text)" }}
                                                                        >
                                                                            <option.icon className="w-4 h-4 opacity-70" />
                                                                            {option.label}
                                                                        </button>
                                                                    ))}
                                                                </motion.div>
                                                            </>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>

                                            {/* Textarea */}
                                            <div className="relative rounded-md p-3.5 transition-all focus-within:ring-1 focus-within:ring-[var(--primary)]" style={{ background: "var(--cta-input)" }}>
                                                <div className="flex items-center gap-2 mb-3 pointer-events-none">
                                                    <FileText className="w-3.5 h-3.5" style={{ color: "var(--cta-soft)" }} />
                                                    <span className="text-[11px] font-semibold tracking-wide" style={{ color: "var(--cta-text)" }}>Project Details (Optional)</span>
                                                </div>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={3}
                                                    placeholder="Tell us about your goals, timeline, budget range, and any specific requirements..."
                                                    className="w-full bg-transparent focus:outline-none text-[15px] placeholder:opacity-90 resize-none leading-relaxed"
                                                    style={{ color: "var(--cta-text)", border: "none", background: "none" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Area */}
                                    <div className="pt-2">
                                        <AnimatePresence>
                                            {errorMsg && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                                    animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                                    className="flex items-center justify-center overflow-hidden"
                                                >
                                                    <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium w-full">
                                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                                        <span>{errorMsg}</span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <motion.button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative group overflow-hidden disabled:opacity-60 text-white text-base font-bold rounded-lg h-14 px-8 flex items-center justify-center gap-3 w-full transition-shadow"
                                            style={{ background: "linear-gradient(135deg, var(--primary), #0f766e)", boxShadow: "0 10px 30px -10px var(--primary)" }}
                                        >
                                            {status === "submitting" ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Processing...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2 relative z-10">
                                                    Let&apos;s Discuss!
                                                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">north_east</span>
                                                </span>
                                            )}
                                        </motion.button>
                                        <div className="flex items-center justify-center gap-1.5 mt-5 opacity-50">
                                            <Lock className="w-3 h-3" style={{ color: "var(--cta-text)" }} />
                                            <span className="text-[11px] font-medium" style={{ color: "var(--cta-text)" }}>Your information is secure and encrypted</span>
                                        </div>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
