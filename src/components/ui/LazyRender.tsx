"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazyRenderProps {
  children: React.ReactNode;
  placeholderHeight?: number;
  className?: string;
  id?: string;
}

export default function LazyRender({
  children,
  placeholderHeight = 600,
  className = "",
  id,
}: LazyRenderProps) {
  const [isRendered, setIsRendered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Render immediately if a hash is present on mount to avoid scroll shifts
    if (typeof window !== "undefined" && window.location.hash) {
      setIsRendered(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRendered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Defer rendering until component is 300px close to the viewport
    );

    observer.observe(el);

    // 2. Render immediately if any hash link is clicked to allow correct scroll targeting
    const handleHashChange = () => {
      if (window.location.hash) {
        setIsRendered(true);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      id={id}
      style={{ minHeight: isRendered ? "auto" : `${placeholderHeight}px` }}
    >
      {isRendered ? children : null}
    </div>
  );
}