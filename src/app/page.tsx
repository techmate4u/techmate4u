import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import LazyRender from "@/components/ui/LazyRender";

// Dynamic imports to split and defer JS bundle evaluation on client-side
const Services = dynamic(() => import(/* webpackPreload: false */ "@/components/Services"), {
  loading: () => <div className="min-h-[400px] w-full bg-white opacity-0" />,
});

const Portfolio = dynamic(() => import(/* webpackPreload: false */ "@/components/Portfolio"), {
  loading: () => <div className="min-h-[500px] w-full bg-white opacity-0" />,
});

const ClientVoice = dynamic(() => import(/* webpackPreload: false */ "@/components/ClientVoice"), {
  loading: () => <div className="min-h-[400px] w-full bg-[var(--surface-muted)] opacity-0" />,
});

const ProcessLite = dynamic(() => import(/* webpackPreload: false */ "@/components/ProcessLite"), {
  loading: () => <div className="min-h-[400px] w-full bg-white opacity-0" />,
});

const CTA = dynamic(() => import(/* webpackPreload: false */ "@/components/CTA"), {
  loading: () => <div className="min-h-[400px] w-full bg-[var(--surface-muted)] opacity-0" />,
});

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-x-clip pt-0 mt-0">
      <Hero />
      
      {/* Defer script hydration and DOM parsing of below-the-fold sections entirely */}
      <LazyRender placeholderHeight={600} className="content-visibility-auto">
        <Services />
      </LazyRender>

      <LazyRender placeholderHeight={850} className="content-visibility-auto">
        <Portfolio />
      </LazyRender>

      <LazyRender placeholderHeight={500} className="content-visibility-auto">
        <ClientVoice />
      </LazyRender>

      <LazyRender placeholderHeight={600} className="content-visibility-auto">
        <ProcessLite />
      </LazyRender>

      <LazyRender placeholderHeight={600} className="content-visibility-auto">
        <CTA />
      </LazyRender>
    </main>
  );
}
