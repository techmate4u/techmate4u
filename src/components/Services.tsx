"use client";

import React from 'react';
import Link from 'next/link';
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/sections/SectionHeading";
import { SERVICES_DATA } from "@/components/servicesData";

export default function Services() {
  return (
    <section className="w-full relative z-20 overflow-hidden py-16 lg:py-24 services-premium-section" id="services">
      

      

      {/* Background blueprint details */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="w-full relative overflow-hidden">
        {/* Left Interactive Decoration */}
        <div className="absolute top-[30%] left-[-40px] w-32 h-64 opacity-30 hover:opacity-80 transition-all duration-700 hover:translate-x-[40px] z-0 hidden lg:block group">
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-blue-500 transition-colors duration-700 animate-float-1">
            <circle cx="20" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="20" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
            <path d="M 20 20 L 20 180" stroke="currentColor" strokeWidth="1" />
            <path d="M -60 100 L 100 100" stroke="currentColor" strokeWidth="0.5" />
            <rect x="-10" y="85" width="30" height="30" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-45 origin-center transition-transform duration-1000" />
          </svg>
        </div>

        {/* Right Interactive Decoration */}
        <div className="absolute top-[60%] right-[-40px] w-32 h-64 opacity-30 hover:opacity-80 transition-all duration-700 hover:-translate-x-[40px] z-0 hidden lg:block group">
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400 group-hover:text-fuchsia-500 transition-colors duration-700 animate-float-2">
            <path d="M 50 20 L 120 60 L 120 140 L 50 180 L -20 140 L -20 60 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 50 50 L 90 75 L 90 125 L 50 150 L 10 125 L 10 75 Z" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-180 origin-center transition-transform duration-1000" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Comprehensive services we provide"
            subtitle="From web design to mobile apps, SEO, AI automation, digital marketing, and social media management—everything your business needs to thrive online."
            align="left"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
