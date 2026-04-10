"use client";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We analyze your business goals, current tech stack, and identify areas for digital transformation. This phase eliminates assumptions and establishes a rigorous architectural blueprint.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We craft modern UX/UI designs and architect the technical systems required to achieve your objectives. Every interaction is mapped, tested, and aligned with your core brand identity.",
  },
  {
    num: "03",
    title: "Development",
    description:
      "Our engineers build your solution using modern, scalable frameworks and rigorous testing protocols. We write strict, type-safe code prioritized for performance and maintainability.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "We deploy your project to production, ensure everything runs smoothly, and hand over the keys. Our CI/CD pipelines guarantee zero-downtime shipping and automated rollbacks.",
  },
];

export default function ProcessLite() {
  return (
    <section
      id="process"
      className="w-full relative z-20 bg-fixed -mt-10 lg:-mt-14 pt-10 lg:pt-14"
    >
      {/* Background layers moved to src/app/page.tsx for centralized editing.
          Previous local layers:
          background: var(--surface)
          top fade: surface-muted -> surface
          bottom fade: transparent -> cta-bg
      */}
      <div className="hidden lg:block">
        <ProcessLiteDesktop />
      </div>
      <div className="block lg:hidden">
        <ProcessLiteMobile />
      </div>
    </section>
  );
}

function ProcessLiteDesktop() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-22 lg:pt-24 pb-24 relative z-10">
      <div className="max-w-2xl">
        <h2 className="text-5xl xl:text-6xl font-black tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
          How We Build.
        </h2>
        <p className="text-lg lg:text-xl mt-4 leading-relaxed drop-shadow-md text-[var(--text-muted)]">
          A rigorous, transparent engineering pipeline designed to eliminate
          technical debt and deliver high-quality digital products on time.
        </p>
      </div>

      <div className="relative mt-24">
        <div className="absolute top-5 left-0 right-0 h-[2px]" style={{ background: "var(--line)" }} />

        <div className="grid grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <article key={step.num} className="group flex flex-col">
              <div className="h-[40px] flex items-center mb-8 lg:mb-10 relative z-10 pl-[10%]">
                <div className="w-10 h-10 rounded-full border-[2px] border-white flex items-center justify-center -translate-x-1/2 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-2))", boxShadow: "0 0 15px var(--theme-glow)" }}>
                  <span className="text-[10px] font-black text-white">
                    {step.num}
                  </span>
                </div>
              </div>

              <div className="border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] rounded-[2rem] p-6 lg:p-8 flex flex-col h-[320px] transition-all duration-300 group-hover:-translate-y-2" style={{ background: "var(--panel)", borderColor: "var(--line)" }}>
                <div className="flex items-center gap-3 mb-4 xl:mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--primary)]">
                    Phase {step.num}
                  </span>
                </div>
                <h3 className="text-xl xl:text-2xl font-black mb-3 xl:mb-4 font-[family-name:var(--font-outfit)] tracking-tight transition-colors duration-300 text-[var(--text)] group-hover:text-[var(--primary)]">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-sm leading-relaxed text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessLiteMobile() {
  return (
    <div className="w-full pt-20 pb-16 px-4 relative z-10">
      <div className="max-w-xl mb-12">
        <h2 className="text-4xl font-black tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
          How We Build.
        </h2>
        <p className="text-lg mt-4 leading-relaxed drop-shadow-md text-[var(--text-muted)]">
          A rigorous, transparent engineering pipeline designed to eliminate
          technical debt and deliver high-quality digital products on time.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-[2px]" style={{ background: "var(--line)" }} />

        <div className="space-y-6 relative">
          {steps.map((step) => (
            <article key={step.num} className="group flex gap-4">
              <div className="w-10 shrink-0 flex justify-center pt-6">
                <div className="w-10 h-10 rounded-full border-[2px] border-white flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-2))", boxShadow: "0 0 15px var(--theme-glow)" }}>
                  <span className="text-[10px] font-black text-white">
                    {step.num}
                  </span>
                </div>
              </div>

              <div className="flex-1 border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] rounded-[2rem] p-6 transition-all duration-300 group-hover:-translate-y-1" style={{ background: "var(--panel)", borderColor: "var(--line)" }}>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-[var(--primary)]">
                  Phase {step.num}
                </span>
                <h3 className="text-xl font-black mb-3 font-[family-name:var(--font-outfit)] tracking-tight transition-colors duration-300 text-[var(--text)] group-hover:text-[var(--primary)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
