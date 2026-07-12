import type { ReactNode } from "react";
import Badge from "@/components/ui/Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${isLeft ? "text-left items-start" : "text-center items-center"} ${className}`}>
      {eyebrow && (
        <Badge variant="primary" className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className={`font-[family-name:var(--font-outfit)] text-3xl font-bold leading-[1.15] tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl ${isLeft ? "max-w-2xl" : "max-w-3xl"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg ${isLeft ? "max-w-xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
