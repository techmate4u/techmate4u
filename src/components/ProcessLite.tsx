"use client";

const steps = [
  {
    title: "Discovery & Research",
    description: "Analyzing your goals, target audience, and current technical landscape to define project requirements."
  },
  {
    title: "Proposal & Quote",
    description: "Delivering a comprehensive project scope, timeline, and transparent pricing structure."
  },
  {
    title: "Agreement Signed",
    description: "Finalizing contract terms and establishing clear project milestones and deliverables."
  },
  {
    title: "Initial Payment",
    description: "Securing resources, aligning our engineering team, and officially kicking off the project."
  },
  {
    title: "Design Phase",
    description: "Creating wireframes, user flows, and high-fidelity visual prototypes for your approval."
  },
  {
    title: "Development",
    description: "Building the solution using modern, scalable frameworks and rigorous coding standards."
  },
  {
    title: "Revisions & Testing",
    description: "Conducting quality assurance, performance testing, and iterative client feedback rounds."
  },
  {
    title: "Final Delivery",
    description: "Deploying to production, performing final code reviews, and handing over the keys."
  },
  {
    title: "Support & Maintenance",
    description: "Providing ongoing updates, uptime monitoring, and proactive technical support."
  }
];

export default function ProcessLite() {
  return (
    <section id="process" className="w-full relative z-20 overflow-hidden -mt-10 lg:-mt-14 pt-10 lg:pt-14 pb-16 lg:pb-24">
      {/* City Skyline drawing on the right side bottom */}
      <div className="absolute right-[0%] bottom-[0%] w-[650px] h-[450px] bg-[url(/assets/bg-skyline.png)] bg-no-repeat bg-contain opacity-[0.09] pointer-events-none -z-10" />
      
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-16 lg:pt-24 relative z-10">
        <div className="max-w-2xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: "var(--line-strong)" }}></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">How We Work</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight font-[family-name:var(--font-outfit)] drop-shadow-md text-[var(--text)]">
            Our Process
          </h2>
          <p className="text-lg lg:text-xl mt-6 leading-relaxed drop-shadow-md text-[var(--text-muted)]">
            A rigorous, transparent timeline designed to ensure seamless delivery from initial concept to final launch.
          </p>
        </div>

        {/* Professional Static Horizontal Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 lg:gap-y-16 gap-x-6 lg:gap-x-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col relative">
              {/* Minimal Timeline Track */}
              <div className="w-full h-[1px] mb-6 relative" style={{ background: "var(--line-strong)" }}>
                  {/* Clean Node */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full" 
                       style={{ background: "var(--primary)" }} 
                  />
              </div>

              {/* Step Content */}
              <div className="flex flex-col pr-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "var(--primary)" }}>
                  {String(i + 1).padStart(2, '0')} {/* Phase */}
                </span>
                <h3 className="text-base font-bold font-[family-name:var(--font-outfit)] tracking-tight leading-snug mb-3" style={{ color: "var(--text)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
