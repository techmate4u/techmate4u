"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazyRenderProps {
  children: React.ReactNode;
  placeholderHeight?: number;
  className?: string;
}

export default function LazyRender({
  children,
  placeholderHeight = 600,
  className = "",
}: LazyRenderProps) {
  const [isRendered, setIsRendered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minHeight: isRendered ? "auto" : `${placeholderHeight}px` }}
    >
      {isRendered ? children : null}
    </div>
  );
}