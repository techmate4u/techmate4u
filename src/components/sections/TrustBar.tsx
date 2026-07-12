import Card from "@/components/ui/Card";

const LOGOS = [
  { name: "Next.js", url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
  { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" },
  { name: "Vercel", url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg" },
  { name: "Framer", url: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/framer.svg" },
];

const STATS = [
  { value: "99%", label: "Lighthouse Performance" },
  { value: "4 Weeks", label: "Average Delivery Time" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Dedicated Support" },
];

export default function TrustBar() {
  return (
    <div className="w-full py-12 border-y border-[var(--line-soft)]" style={{ background: "var(--surface-muted)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--text-soft)] mb-8">
          Our Engineering Stack & Credentials
        </p>

        {/* Logos Flex grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 transition-all duration-300">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2" title={logo.name}>
              <img
                src={logo.url}
                alt={logo.name}
                className="h-5 w-5 brightness-50 contrast-120"
                style={{ filter: "sepia(1) saturate(300%) hue-rotate(190deg)" }}
              />
              <span className="text-sm font-semibold text-[var(--text-muted)]">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {STATS.map((stat, idx) => (
            <Card key={idx} className="flex flex-col items-center justify-center p-6 text-center select-none">
              <span className="font-[family-name:var(--font-outfit)] text-3xl font-black text-[var(--primary)] mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
