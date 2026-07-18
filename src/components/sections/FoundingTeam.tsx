import Image from "next/image";
import Card from "@/components/ui/Card";
import { Zap, Award, Users } from "lucide-react";

export default function FoundingTeam() {
  const members = [
    {
      name: "Manav Rajvansh",
      role: "Co-Founder & Chief Technology Officer",
      desc: "Manav leads the technology vision at TechMate4u, architecting high-performance web systems and AI-powered solutions. He transforms complex business requirements into secure, future-ready digital platforms that scale.",
      expertise: "Software Architecture, Full-Stack Engineering, AI & SaaS Solutions",
      icon: Zap,
      color: "text-blue-600",
      bg: "bg-blue-50 text-blue-700 border-blue-200/50",
      panelBg: "from-blue-200/40 to-indigo-100/40 border-blue-200/20",
      image: "/assets/manav_rajvansh.webp",
      imgScale: "scale-[1.08] translate-y-1.5"
    },
    {
      name: "Keyur Sonagara",
      role: "Co-Founder • Business Growth & Digital Strategy",
      desc: "Keyur drives business strategy, client success, and digital growth at TechMate4u. He partners directly with startups and enterprises to solve their digital challenges, scaling their reach through performance marketing.",
      expertise: "Business Consulting, Growth Strategy, Digital Marketing",
      icon: Award,
      color: "text-teal-600",
      bg: "bg-teal-50 text-teal-700 border-teal-200/50",
      panelBg: "from-teal-200/40 to-emerald-100/40 border-teal-200/20",
      image: "/assets/keyur_sonagara.webp",
      imgScale: "scale-[1.08] translate-y-1.5"
    },
    {
      name: "Jay Memgara",
      role: "Co-Founder • Creative Director & Product Experience",
      desc: "Jay designs engaging digital experiences that connect with users and grow brands. He leads UI/UX design, visual identity, and product strategy, ensuring every touchpoint is intuitive and user-centered.",
      expertise: "UI/UX & Product Design, Creative Direction, Brand Identity",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
      panelBg: "from-emerald-200/40 to-teal-100/40 border-emerald-200/20",
      image: "/assets/jay_patel.webp",
      imgScale: "scale-[1.22] translate-y-4"
    }
  ];

  return (
    <section
      className="w-full relative z-20 overflow-hidden py-24 border-b"
      style={{
        borderColor: "var(--line-soft)",
        background: "linear-gradient(180deg, #ffffff 0%, var(--surface-muted) 50%, #ffffff 100%)"
      }}
    >
      {/* Premium background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Soft pulsing glow orbs */}
        <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-500/12 to-indigo-500/12 blur-[90px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-purple-500/12 to-pink-500/12 blur-[90px] animate-pulse" />

        {/* Floating tech background elements */}
        {/* Left Floating Concentric Rings */}
        <div className="absolute top-[10%] left-[-40px] w-64 h-64 opacity-45 hidden lg:block animate-float-1 text-blue-500/80">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
          </svg>
        </div>

        {/* Right Floating Grid / Network Structure */}
        <div className="absolute bottom-[10%] right-[-40px] w-64 h-64 opacity-45 hidden lg:block animate-float-2 text-purple-500/80">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M 10 10 L 90 90" stroke="currentColor" strokeWidth="0.25" />
            <path d="M 90 10 L 10 90" stroke="currentColor" strokeWidth="0.25" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <circle cx="10 10" r="3" fill="currentColor" />
            <circle cx="90 10" r="3" fill="currentColor" />
            <circle cx="90 90" r="3" fill="currentColor" />
            <circle cx="10 90" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Diagonal blueprint alignment lines */}
        <div className="absolute inset-0 opacity-[0.04] hidden lg:block">
          <svg className="w-full h-full text-slate-400" viewBox="0 0 1000 800" fill="none">
            <line x1="100" y1="100" x2="900" y2="700" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="900" y1="100" x2="100" y2="700" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Edge blend gradient masks to prevent hard grid borders */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-outfit)] text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
            Meet Our Founding Team
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)]">
            Decades of combined experience in technology, strategy, and design. We&apos;re obsessed with delivering results for our clients.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => {
            const Icon = member.icon;
            return (
              <Card
                key={i}
                className="group flex flex-col overflow-hidden p-0 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "var(--panel)",
                  borderColor: "var(--line)",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none"
                }}
              >
                {/* Visual Panel Header */}
                <div
                  className={`w-full aspect-[3/4] relative flex items-center justify-center border-b overflow-hidden ${member.image ? 'bg-white' : 'bg-[var(--surface-muted)]'
                    }`}
                  style={{ borderColor: "var(--line-soft)" }}
                >
                  {member.image ? (
                    <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover object-top ${member.imgScale}`}
                        priority={i < 3}
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${member.panelBg}`}>
                      <Icon className={`h-12 w-12 ${member.color}`} />
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-1 font-[family-name:var(--font-outfit)] leading-tight text-[var(--text)]">
                    {member.name}
                  </h3>

                  <span className={`text-[10px] font-bold tracking-wider uppercase mb-4 ${member.color}`}>
                    {member.role}
                  </span>

                  <p className="text-[13px] leading-relaxed text-[var(--text-muted)] flex-grow whitespace-pre-line">
                    {member.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t" style={{ borderColor: "var(--line-soft)" }}>
                    <h4 className="text-[9.5px] font-extrabold tracking-wider uppercase text-[var(--text-soft)] mb-2">
                      Expertise
                    </h4>
                    <p className="text-[12.5px] leading-relaxed text-[var(--text-muted)]">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
