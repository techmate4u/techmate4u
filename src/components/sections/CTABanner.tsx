import Button from "@/components/ui/Button";

interface CTABannerProps {
  title: string;
  description: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CTABanner({
  title,
  description,
  primaryBtnText = "Book a Free Call",
  primaryBtnHref = "/#contact",
  secondaryBtnText = "See Our Work",
  secondaryBtnHref = "/#portfolio",
}: CTABannerProps) {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 border-t border-[var(--line-soft)]" style={{ background: "var(--cta-bg)" }}>
      {/* Subtle blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ background: "color-mix(in srgb, var(--primary) 20%, transparent)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
        <div className="mb-8 mx-auto h-px w-16 bg-[var(--primary)]" />
        <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold leading-[1.2] tracking-tight text-[var(--text)] sm:text-3xl lg:text-4xl max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="mt-6 mx-auto max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button variant="primary" href={primaryBtnHref}>
            {primaryBtnText}
          </Button>
          <Button variant="secondary" href={secondaryBtnHref}>
            {secondaryBtnText}
          </Button>
        </div>
      </div>
    </section>
  );
}
