import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Education from "@/components/Education";
import Conditions from "@/components/Conditions";
import Contact from "@/components/Contact";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Header />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Education />
      <Conditions />
      <Contact />
      <CtaSection />
      <Footer />
    </div>
  );
}
