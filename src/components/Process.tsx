"use client";

import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        num: "01",
        title: "Discovery",
        description: "We analyze your business goals, current tech stack, and identify areas for digital transformation. This phase eliminates assumptions and establishes a rigorous architectural blueprint."
    },
    {
        num: "02",
        title: "Design",
        description: "We craft modern UX/UI designs and architect the technical systems required to achieve your objectives. Every interaction is mapped, tested, and aligned with your core brand identity."
    },
    {
        num: "03",
        title: "Development",
        description: "Our engineers build your solution using modern, scalable frameworks and rigorous testing protocols. We write strict, type-safe code prioritized for performance and maintainability."
    },
    {
        num: "04",
        title: "Launch",
        description: "We deploy your project to production, ensure everything runs smoothly, and hand over the keys. Our CI/CD pipelines guarantee zero-downtime shipping and automated rollbacks."
    }
];

export default function Process() {
    return (
        <section
            id="process"
            className="w-full relative z-20 bg-[#fafafa] bg-blueprint-light bg-fixed"
        >
            <div className="hidden lg:block relative w-full">
                <ProcessDesktop />
            </div>
            <div className="block lg:hidden relative w-full">
                <ProcessMobile />
            </div>
        </section>
    );
}

function ProcessDesktop() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track total scroll progress through the 250vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // The line grows fully from 0 to 100% width across the exactly matched 100% width wrapper container
    const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="w-full relative" style={{ height: "250vh" }}>
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden">

                {/* Header Area */}
                <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 absolute top-[10vh] md:top-[12vh] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <div className="text-left w-full max-w-2xl">
                        <h2 className="text-5xl xl:text-6xl font-black text-slate-900 tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md">How We Build.</h2>
                        <p className="text-slate-500 text-lg lg:text-xl mt-4 leading-relaxed drop-shadow-md">
                            A rigorous, transparent engineering pipeline designed to eliminate technical debt and deliver high-quality digital products on time.
                        </p>
                    </div>
                </div>

                {/* Grid Layout Area (All 4 cards in a single row simultaneously) */}
                <div className="relative w-full max-w-7xl mx-auto mt-[18vh]">

                    {/* Universal Tracker Wrapper (Strictly matches Grid Width) */}
                    <div className="absolute top-[20px] left-0 w-full px-4 lg:px-8 z-0">
                        <div className="relative w-full">
                            {/* Fixed Background Line spans universally */}
                            <div className="w-full h-[2px] bg-slate-200/80" />

                            {/* Fixed Illuminating Line - Synchronized perfectly 0-100% */}
                            <motion.div
                                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-fuchsia-500 to-purple-600 origin-left"
                                style={{
                                    width: "100%",
                                    scaleX: lineScaleX,
                                    boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)"
                                }}
                            />
                        </div>
                    </div>

                    {/* Staggered Row of Cards inside exact bounds content structure */}
                    <div className="grid grid-cols-4 gap-6 relative w-full pt-0 px-4 lg:px-8">
                        {steps.map((step, index) => {
                            return <ProcessCardDesktop key={index} step={step} index={index} progress={scrollYProgress} total={steps.length} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProcessCardDesktop({ step, index, progress, total }: { step: { num: string; title: string; description: string; }, index: number, progress: MotionValue<number>, total: number }) {
    // Physical center of the node on the timeline line itself.
    // 4 equal grid columns implies bounds at 0..25%, 25..50%, 50..75%, 75..100%. 
    // The node icon wrapper has `pl-[10%]`. So 10% * 25% = 2.5% physical offset within its bounding box.
    // Nodes lay exactly at: 2.5%, 27.5%, 52.5%, 77.5%.
    const physicalPosition = 0.025 + (index * 0.25);

    // Cards ONLY start fading in when the animating line tip approaches, and finish EXACTLY when the line hits their physical center.
    const startAppear = Math.max(0, physicalPosition - 0.08);
    const endAppear = physicalPosition;

    const opacity = useTransform(progress, [startAppear, endAppear], [0, 1]);
    const y = useTransform(progress, [startAppear, endAppear], [40, 0]);

    // Ring styling hits precisely on threshold bounds
    const isActive = useTransform(progress, [Math.max(0, physicalPosition - 0.01), physicalPosition + 0.01], [0, 1]);

    return (
        <div className="flex flex-col relative w-full h-full">
            {/* Node Marker on the Line */}
            <div className="h-[40px] flex items-center justify-start mb-8 lg:mb-10 relative z-10 w-full pl-[10%]">
                {/* Background inactive ring */}
                <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center absolute -translate-x-1/2">
                    <span className="text-[10px] font-black text-slate-400">{step.num}</span>
                </div>

                {/* Illuminated active ring */}
                <motion.div
                    style={{ opacity: isActive, scale: isActive }}
                    className="w-10 h-10 rounded-full border-[2px] border-white bg-gradient-to-br from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center absolute -translate-x-1/2"
                >
                    <span className="text-[10px] font-black text-white">{step.num}</span>
                </motion.div>
            </div>

            {/* Content Card */}
            <motion.div
                style={{ opacity, y }}
                className="bg-white border border-slate-200/60 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 rounded-[2rem] p-6 lg:p-8 relative flex flex-col h-[320px] group"
            >
                <div className="flex items-center gap-3 mb-4 xl:mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">Phase {step.num}</span>
                </div>
                <h3 className="text-xl xl:text-2xl font-black text-slate-900 mb-3 xl:mb-4 font-[family-name:var(--font-outfit)] tracking-tight">
                    {step.title}
                </h3>
                <p className="text-slate-600 text-xs lg:text-sm leading-relaxed">
                    {step.description}
                </p>
            </motion.div>
        </div>
    );
}

function ProcessMobile() {
    return (
        <div className="w-full pt-24 pb-16 px-0 overflow-hidden relative">
            <div className="px-4 mb-12">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md">How We Build.</h2>
                <p className="text-slate-500 text-lg mt-4 leading-relaxed drop-shadow-md">
                    A rigorous, transparent engineering pipeline designed to eliminate technical debt.
                </p>
            </div>

            <div className="relative w-full mt-4">
                {/* Background Horizontal Line */}
                <div className="absolute top-[20px] left-0 w-full h-[2px] bg-slate-200/80" />

                {/* Horizontal Native Scroll Container for Mobile */}
                <div className="flex flex-nowrap overflow-x-auto gap-4 px-4 pt-0 pb-12 snap-x snap-mandatory w-full scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />
                    {steps.map((step, index) => (
                        <div className="flex flex-col h-full relative w-[80vw] shrink-0 snap-center" key={index}>
                            {/* Node Marker */}
                            <div className="h-[40px] flex items-center justify-start mb-6 relative z-10 w-full">
                                {/* Fully illuminated active ring for mobile native scroll style */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ amount: 0.8 }}
                                    className="w-10 h-10 rounded-full border-[2px] border-white bg-gradient-to-br from-blue-600 to-purple-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center justify-center relative"
                                >
                                    <span className="text-[10px] font-black text-white">{step.num}</span>
                                </motion.div>
                            </div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.4 }}
                                className="bg-white border border-slate-200/60 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] rounded-[2rem] p-6 relative flex flex-col h-full"
                            >
                                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">Phase {step.num}</span>
                                <h3 className="text-xl font-black text-slate-900 mb-3 font-[family-name:var(--font-outfit)] tracking-tight">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
