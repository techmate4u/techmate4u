import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-x-clip pt-0 mt-0">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}
