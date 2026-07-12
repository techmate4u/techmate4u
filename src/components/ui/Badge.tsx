import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "accent" | "gray";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
  ...props
}: BadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[var(--primary-soft)] text-[var(--primary)] border-[color-mix(in_srgb,var(--primary)_20%,transparent)]";
      case "secondary":
        return "bg-slate-50 text-slate-700 border-slate-200";
      case "success":
        return "bg-green-50 text-green-700 border-green-200";
      case "accent":
        return "bg-violet-50 text-violet-700 border-violet-200";
      case "gray":
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors ${getVariantStyles()} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
