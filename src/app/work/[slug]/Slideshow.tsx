"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideshowProps {
  images: string[];
  title: string;
}

export default function Slideshow({ images, title }: SlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [images]);

  const prev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full h-full relative group">
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

      {/* Manual Navigation Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-slate-900/40 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-900/60 cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-slate-900/40 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-900/60 cursor-pointer"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentImageIndex ? "bg-white w-5" : "bg-white/40"
                }`}
                aria-label={`Go to screenshot ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
