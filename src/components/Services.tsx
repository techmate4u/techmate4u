"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/sections/SectionHeading";
import { SERVICES_DATA } from "@/components/servicesData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const wave1Ref = useRef<HTMLDivElement>(null);
  const wave2Ref = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const glowOverlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger on client-side
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    // Set initial states for transition animations
    gsap.set(characterRef.current, { x: 260, y: 30, rotate: 0, opacity: 0 });
    gsap.set(ringRef.current, { scale: 0, opacity: 0 });
    gsap.set(wave1Ref.current, { scale: 0, opacity: 0 });
    gsap.set(wave2Ref.current, { scale: 0, opacity: 0 });
    gsap.set(cardsGridRef.current, { y: 120, opacity: 0.2, scale: 0.98 });
    gsap.set(glowOverlayRef.current, { opacity: 0, scale: 0.95 });
    gsap.set(headingRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // Trigger starts when top of services enters screen bottom
        end: "center center", // Reaches completion when services center is at screen center
        scrub: 1.5,
      },
      defaults: { ease: "power3.out" }
    });

    // Step 1: Character walks in from the right
    tl.to(characterRef.current, { x: 0, opacity: 1, duration: 1.2 })
      .to(ringRef.current, { scale: 1, opacity: 1, duration: 0.4 }, "-=0.4");

    // Step 2 & 3: Character looks down and touches the glowing ring
    tl.to(characterRef.current, { rotate: -4, y: 45, duration: 0.8 })
      .to(characterRef.current, { scaleX: 1.05, scaleY: 0.95, duration: 0.3 })
      .to(ringRef.current, { scale: 1.2, borderColor: "rgba(47, 107, 255, 0.8)", boxShadow: "0 0 15px rgba(47, 107, 255, 0.5)", duration: 0.3 }, "-=0.3");

    // Step 4: Large soft wave expands from touchpoint
    tl.to(characterRef.current, { scaleX: 1, scaleY: 1, rotate: 2, duration: 0.5 })
      .fromTo(wave1Ref.current, 
        { scale: 0.2, opacity: 1 }, 
        { scale: 8, opacity: 0, duration: 1.2 }, 
        "-=0.5"
      )
      .fromTo(wave2Ref.current, 
        { scale: 0.2, opacity: 0.8 }, 
        { scale: 11, opacity: 0, duration: 1.5 }, 
        "-=1.0"
      );

    // Step 5: Services cards rise from below + heading fades in
    tl.to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=1.4")
      .to(cardsGridRef.current, { y: 0, opacity: 1, scale: 1, duration: 1.2 }, "-=1.2");

    // Step 6: Background glow expands and follows the rise of the cards (fully visible up to 0.95 opacity)
    tl.to(glowOverlayRef.current, { opacity: 0.95, scale: 1, duration: 1.2 }, "-=1.2");

    // Step 7: Character waves (slow elegant head tilt / rotate back and forth)
    tl.to(characterRef.current, { rotate: 5, y: 35, duration: 0.6 })
      .to(characterRef.current, { rotate: -1, duration: 0.6 })
      .to(characterRef.current, { rotate: 0, duration: 0.4 });

    // Step 8: Walks away (slides back offscreen to the right and fades behind next scroll blocks)
    tl.to(characterRef.current, { x: 260, opacity: 0, duration: 1.2 })
      .to(ringRef.current, { scale: 0, opacity: 0, duration: 0.8 }, "-=1.2");

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full relative z-20 overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-28 bg-white border-y border-[var(--line-soft)]" 
      id="services"
    >
      {/* Premium Minimal Background Overlay */}
      <div 
        ref={glowOverlayRef}
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-white origin-bottom"
      >
        {/* Radial Slate-Indigo Glow */}
        <div 
          className="absolute top-[-30%] left-[-15%] w-[85%] h-[85%] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)"
          }}
        />

        {/* Soft Champagne Gold Glow */}
        <div 
          className="absolute bottom-[-15%] right-[-10%] w-[75%] h-[75%] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(251, 191, 36, 0.12) 0%, transparent 70%)"
          }}
        />

        {/* Radial Mineral Teal Glow */}
        <div 
          className="absolute top-[25%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)"
          }}
        />

        {/* Radial Dusty Rose Glow */}
        <div 
          className="absolute bottom-[35%] right-[-15%] w-[65%] h-[65%] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, transparent 70%)"
          }}
        />

        {/* Blurred Gradient Mesh */}
        <div 
          className="absolute top-[15%] right-[10%] w-[380px] h-[380px] rounded-full blur-[110px] mix-blend-multiply opacity-50 bg-gradient-to-tr from-amber-100/20 via-rose-100/15 to-transparent"
        />

        {/* Light Beam from Top Left */}
        <div 
          className="absolute top-0 left-0 w-full h-[65%] pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.07) 0%, transparent 55%)"
          }}
        />

        {/* Translucent Blurred Circles */}
        <div className="absolute top-[20%] left-[22%] w-[120px] h-[120px] rounded-full bg-blue-300/20 blur-[35px] backdrop-filter" />
        <div className="absolute bottom-[30%] right-[25%] w-[170px] h-[170px] rounded-full bg-purple-300/15 blur-[45px] backdrop-filter" />

        {/* Very Light Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating 3D WWDC Character & Scroll Interactions (Right Side) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-visible hidden lg:block">
        {/* The 3D Character (Positioned higher next to title) */}
        <div 
          ref={characterRef}
          className="absolute right-[50px] top-[1%] w-[270px] h-[270px] pointer-events-none select-none z-20 flex items-center justify-center bg-white p-2 rounded-full border border-blue-500/10 shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
          style={{ transformOrigin: "bottom center" }}
        >
          <img
            src="/assets/3d_character_wwdc.webp"
            alt="WWDC Character"
            loading="lazy"
            className="w-full h-full object-contain pointer-events-none select-none rounded-full"
          />
        </div>

        {/* Glowing Touch Ring */}
        <div 
          ref={ringRef}
          className="absolute right-[300px] top-[12%] w-[56px] h-[56px] rounded-full border border-blue-400/30 bg-blue-500/5 shadow-[0_0_12px_rgba(47,107,255,0.15)] flex items-center justify-center z-10"
        >
          <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_#2f6bff] animate-pulse" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-500" />
        </div>

        {/* Expanding Wave Rings */}
        <div 
          ref={wave1Ref}
          className="absolute right-[304px] top-[14%] w-[48px] h-[48px] rounded-full border border-blue-400/20 pointer-events-none z-0"
        />
        <div 
          ref={wave2Ref}
          className="absolute right-[304px] top-[14%] w-[48px] h-[48px] rounded-full border border-purple-400/15 pointer-events-none z-0"
        />
      </div>

      <div className="w-full relative overflow-visible z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div ref={headingRef}>
            <SectionHeading
              title="Comprehensive services we provide"
              subtitle="From web design to mobile apps, SEO, AI automation, digital marketing, and social media management—everything your business needs to thrive online."
              align="left"
            />
          </div>

          {/* Services Grid */}
          <div 
            ref={cardsGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
          >
            {SERVICES_DATA.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.slug}
                  className="flex flex-col relative overflow-hidden group hover:border-[var(--primary)] transition-all duration-300"
                >
                  {/* Visual Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Header */}
                    <div className="mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--primary)] group-hover:border-[var(--primary-soft)] transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)] mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA link */}
                    <div className="mt-auto">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-[var(--primary)] hover:opacity-80 transition-opacity cursor-pointer mt-auto"
                      >
                        Learn more <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
