"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { Carousel } from "./Carousel";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  source: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Katarzyna M.",
    text: "Pani doktor podeszła do mojego problemu z niezwykłą starannością. Po latach unikania dentysty w końcu trafiłam na specjalistkę, która wszystko spokojnie wytłumaczyła i zaproponowała skuteczne leczenie. Dziąsła przestały krwawić już po kilku tygodniach.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Tomasz W.",
    text: "Profesjonalne podejście na każdym etapie — od diagnostyki po zabieg. Pani doktor Jakubik przeprowadziła przeszczep dziąsła z niezwykłą precyzją. Efekt przerósł moje oczekiwania, a gojenie przebiegło bez komplikacji.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Agnieszka K.",
    text: "Miałam zaawansowane zapalenie przyzębia i byłam przerażona wizją utraty zębów. Dzięki Pani doktor udało się zatrzymać chorobę. Jestem pod stałą opieką i czuję, że moje zęby są w najlepszych rękach.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Marcin P.",
    text: "Zabieg podcięcia wędzidełka u mojego synka przebiegł szybko i bezboleśnie. Pani doktor świetnie radzi sobie z małymi pacjentami — syn był spokojny przez cały czas. Polecam z całego serca.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Joanna D.",
    text: "Po leczeniu ortodontycznym pojawił się problem z recesją dziąseł. Pani doktor Jakubik przeprowadziła zabieg mikrochirurgiczny i efekt jest rewelacyjny — nie ma śladu po odsłoniętych szyjkach. Dziękuję!",
    rating: 5,
    source: "Google",
  },
];

function TestimonialCard({ name, text, rating, source }: Testimonial) {
  return (
    <div className="h-full pl-8 border-l border-gold/20 flex flex-col justify-center">
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} size={12} className="text-gold fill-gold" />
        ))}
      </div>
      <p className="text-white/50 text-lg leading-relaxed font-light">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-8 h-px bg-white/10" />
        <p className="text-white/60 text-sm">{name}</p>
        <span className="text-white/15 text-xs">{source}</span>
      </div>
    </div>
  );
}

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="philosophy"
      className="relative pbs-32 pbe-16 lg:pbs-44 lg:pbe-32"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-sage/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading + quote */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
              Podejście
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Oparte na
              <br />
              <span className="text-white/30">wiedzy i doświadczeniu</span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white/60 font-light leading-relaxed font-serif italic">
              „Już od czasu studiów interesował mnie związek chorób jamy ustnej
              ze zdrowiem ogólnym oraz holistyczne podejście do każdego
              pacjenta, obejmujące kompleksową diagnostykę i&nbsp;prowadzenie
              leczenia zarówno zachowawczego, jak i&nbsp;chirurgicznego."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-gold/30" />
              <p className="text-sm text-gold/60 tracking-wide">Anna Jakubik</p>
            </div>
          </motion.div>

          {/* Right: testimonials carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-8 self-end"
          >
            <Carousel
              items={testimonials}
              ItemComponent={TestimonialCard}
              autoScroll
              hasNavigation
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
