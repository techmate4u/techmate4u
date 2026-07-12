import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ClientVoice from "@/components/ClientVoice";
import ProcessLite from "@/components/ProcessLite";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-x-clip pt-0 mt-0">
      <Hero />
      <Services />
      <Portfolio />
      <ClientVoice />
      <ProcessLite />
      <CTA />
    </main>
  );
}
