import type { ReactNode } from "react";
import Link from "next/link";
import { FileText, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LegalPage({
  title,
  intro,
  updated,
  appliesTo = "techmate4u.com",
  sections,
  children,
}: {
  title: string;
  intro: ReactNode;
  updated: string;
  appliesTo?: string;
  sections: string[];
  children: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip bg-[var(--background)]">
      <Navbar />

      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-base)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-55"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 32%), radial-gradient(circle at 82% 20%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 28%)",
        }}
      />

      <header className="mx-auto w-full max-w-7xl px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16 lg:pt-40">
        <div className="max-w-5xl">
          <div className="mb-8 h-px w-24 bg-[var(--primary)]" />
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            {intro}
          </div>
          <div className="mt-9 grid max-w-4xl gap-0 border-y md:grid-cols-3" style={{ borderColor: "var(--line)" }}>
            <div className="py-5 md:border-r md:pr-6" style={{ borderColor: "var(--line-soft)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-soft)]">
                Last updated
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">{updated}</p>
            </div>
            <div className="border-t py-5 md:border-r md:border-t-0 md:px-6" style={{ borderColor: "var(--line-soft)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-soft)]">
                Applies to
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">{appliesTo}</p>
            </div>
            <div className="border-t py-5 md:border-t-0 md:pl-6" style={{ borderColor: "var(--line-soft)" }}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-soft)]">
                Jurisdiction
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <MapPin className="h-4 w-4 text-[var(--primary)]" />
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <div
              className="rounded-lg border bg-[var(--glass-bg)] p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.65)] backdrop-blur"
              style={{ borderColor: "var(--glass-border)" }}
            >
              <div className="mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-[var(--primary)]" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-soft)]">
                  Contents
                </h2>
              </div>
              <nav className="flex flex-col gap-2">
                {sections.map((section, index) => (
                  <Link
                    key={section}
                    href={`#${slugify(section)}`}
                    className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-[var(--text)]"
                  >
                    <span className="text-xs text-[var(--text-soft)]">{String(index + 1).padStart(2, "0")}</span>
                    <span>{section}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <article
            className="rounded-lg border bg-[color-mix(in_srgb,var(--panel)_70%,transparent)] px-5 py-2 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.75)] sm:px-8 lg:px-10"
            style={{ borderColor: "var(--line)" }}
          >
            {children}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={slugify(title)} className="scroll-mt-28 border-t py-10" style={{ borderColor: "var(--line)" }}>
      <div className="mb-5 flex items-start gap-4">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-black"
          style={{
            borderColor: "color-mix(in srgb, var(--primary) 28%, transparent)",
            background: "color-mix(in srgb, var(--primary) 10%, transparent)",
            color: "var(--primary)",
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-black tracking-tight text-[var(--text)] md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-5 text-base leading-8 text-[var(--text-muted)]">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalCards({ items }: { items: Array<[string, string]> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(([title, copy]) => (
        <div key={title} className="rounded-lg border p-5" style={{ borderColor: "var(--line-soft)" }}>
          <h3 className="font-bold text-[var(--text)]">{title}</h3>
          <p className="mt-2 text-sm leading-7">{copy}</p>
        </div>
      ))}
    </div>
  );
}
