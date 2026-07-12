"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";

export type ThemeId = "blue" | "purple" | "cyan" | "rose" | "emerald";

export interface Project {
  title: string;
  category: string;
  challenge: string;
  resultBold: string;
  resultText: string;
  tags: string[];
  themeId: ThemeId;
  video?: string;
  images?: string[];
  link?: string;
  slug?: string;
}

export default function ProjectCard({
  title,
  challenge,
  resultBold,
  resultText,
  category,
  themeId,
  tags,
  video,
  images,
  link,
  slug,
}: Project) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [images]);

  // Map theme to gradient and badge color matching the screenshots
  let headerGradient = "from-blue-200 to-indigo-100";
  let badgeClass = "bg-blue-50 text-blue-700 border-blue-200/50";
  
  if (themeId === "cyan" || themeId === "emerald") {
    headerGradient = "from-teal-200/80 to-emerald-100/50";
    badgeClass = "bg-teal-50 text-teal-700 border-teal-200/50";
  } else if (themeId === "rose") {
    headerGradient = "from-rose-200 to-pink-100";
    badgeClass = "bg-rose-50 text-rose-700 border-rose-200/50";
  } else if (themeId === "purple") {
    headerGradient = "from-purple-200 to-fuchsia-100";
    badgeClass = "bg-purple-50 text-purple-700 border-purple-200/50";
  }

  return (
    <div className="w-full flex justify-center group h-full">
      <Card
        className="flex flex-col w-full min-h-[520px] overflow-hidden relative p-0 transition-all duration-300 hover:border-[var(--primary)]"
        style={{ background: "var(--panel)" }}
      >
        {/* Media or Color Panel Header */}
        <div
          className="w-full aspect-video relative overflow-hidden shrink-0 border-b"
          style={{ borderColor: "var(--line-soft)", background: "var(--surface-muted)" }}
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : images && images.length > 0 ? (
            <div className="w-full h-full relative">
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`${title} screenshot ${idx + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
                    idx === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Slideshow indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "bg-white w-4" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${headerGradient}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-muted)] to-transparent opacity-20 pointer-events-none" />
        </div>

        {/* Content Block */}
        <div className="w-full grow p-6 md:p-8 flex flex-col justify-start relative z-10">
          {/* Category Badge */}
          <span className={`inline-block self-start text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${badgeClass} mb-4`}>
            {category}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-5 font-[family-name:var(--font-outfit)] leading-tight text-[var(--text)]">
            {title}
          </h3>

          {/* Challenge */}
          <div className="mb-5">
            <h4 className="text-[10px] font-extrabold tracking-wider uppercase text-[var(--text-soft)] mb-1.5">
              Challenge
            </h4>
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[var(--text-muted)]">
              {challenge}
            </p>
          </div>

          {/* Result */}
          <div className="mb-6">
            <h4 className="text-[10px] font-extrabold tracking-wider uppercase text-[var(--text-soft)] mb-1.5">
              Result
            </h4>
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[var(--text-muted)]">
              <span className="font-bold text-[var(--text)]">{resultBold}</span>
              {resultText}
            </p>
          </div>

          {/* Divider and Tags/Links Footer */}
          <div className="mt-auto pt-4 border-t flex flex-row items-center justify-between gap-4" style={{ borderColor: "var(--line-soft)" }}>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10.5px] font-bold text-[var(--text-soft)] bg-[var(--surface-muted)] border px-2 py-0.5 rounded-md"
                  style={{ borderColor: "var(--line-soft)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read Case Study Button */}
            {(slug || link) && (
              <div className="shrink-0 flex items-center gap-4">
                {slug && (
                  <Link
                    href={`/work/${slug}`}
                    className="inline-flex items-center gap-1 text-[12px] font-extrabold text-[var(--primary)] hover:opacity-80 transition-opacity"
                  >
                    Case Study
                  </Link>
                )}
                {link && link !== "#" && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[var(--text-soft)] hover:text-[var(--text)] transition-colors"
                  >
                    Demo <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
