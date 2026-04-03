import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Education from "@/components/Education";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
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
