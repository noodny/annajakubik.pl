import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Education />
    </div>
  );
}
