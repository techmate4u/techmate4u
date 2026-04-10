import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ProcessLite from "@/components/ProcessLite";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-x-clip pt-0 mt-0">
      <Navbar />
      <ThemeSwitcher />
      <Hero />
      <Services />
      <Portfolio />
      <ProcessLite />
      <CTA />
      <Footer />
    </main>
  );
}
