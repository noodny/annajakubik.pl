import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "Wykształcenie",
    title: "Collegium Medicum Uniwersytetu Jagiellońskiego",
    description:
      "Ukończenie jednej z najstarszych i najbardziej prestiżowych uczelni medycznych w Polsce, w Krakowie - gdzie narodziło się głębokie zainteresowanie związkiem zdrowia jamy ustnej ze zdrowiem ogólnym.",
  },
  {
    year: "Specjalizacja",
    title: "Najwyższy wynik egzaminu w kraju",
    description:
      "Ukończenie 3-letniego szkolenia specjalizacyjnego z periodontologii zakończone Państwowym Egzaminem Specjalizacyjnym z najwyższym wynikiem w kraju. Nagroda Izby Lekarskiej za wybitne osiągnięcie.",
  },
  {
    year: "Nauka",
    title: "Praca naukowa i dydaktyczna",
    description:
      "Aktywna rola asystenta na uczelni - udział w badaniach naukowych, publikacjach oraz kształceniu przyszłych lekarzy dentystów.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 lg:py-44 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-16 lg:space-y-24">
            {milestones.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot on the timeline */}
                <div className="absolute left-[15px] lg:left-1/2 lg:-translate-x-1/2 top-1 w-[9px] h-[9px] rounded-full border border-gold/40 bg-charcoal-dark z-10">
                  <div className="absolute inset-1 rounded-full bg-gold/60" />
                </div>

                {/* Content */}
                <div
                  className={`pl-12 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:pl-16"}`}
                >
                  <p className="text-gold/50 text-xs tracking-[0.3em] uppercase mb-3">
                    {item.year}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed max-w-md inline-block">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
