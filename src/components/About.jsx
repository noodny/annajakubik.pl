import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeInSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-44">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Label + Photo placeholder */}
          <FadeInSection>
            <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
              O mnie
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Anna
              <br />
              <span className="text-white/30">Jakubik</span>
            </h2>

            {/* Photo */}
            <div className="mt-12 aspect-[3/4] max-w-md bg-charcoal-light relative overflow-hidden">
              <img
                src="/photo.jpg"
                alt="Anna Jakubik — specjalista periodontologii"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent" />
              {/* Accent border */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
            </div>
          </FadeInSection>

          {/* Right: Bio text */}
          <div className="lg:pt-24">
            <FadeInSection delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed font-serif italic">
                Jestem lekarzem dentystą, specjalistą periodontologii. Państwowy Egzamin Specjalizacyjny zdałam z&nbsp;najwyższym wynikiem w&nbsp;kraju, za co otrzymałam nagrodę Izby Lekarskiej.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="mt-12 space-y-6 text-white/40 text-base leading-relaxed">
                <p>
                  Już od czasu studiów interesował mnie związek chorób jamy ustnej ze zdrowiem ogólnym oraz holistyczne podejście do każdego pacjenta, obejmujące kompleksową diagnostykę i&nbsp;prowadzenie leczenia zarówno zachowawczego, jak i&nbsp;chirurgicznego.
                </p>
                <p>
                  W tej dziedzinie kształciłam się podczas dodatkowego 3-letniego szkolenia specjalizacyjnego z&nbsp;periodontologii. Obecnie łączę pracę kliniczną z&nbsp;działalnością naukową i&nbsp;dydaktyczną na uczelni, dbając o&nbsp;to, by moja praktyka była zawsze oparta na najnowszych dowodach naukowych.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <div className="mt-16 grid grid-cols-2 gap-8">
                {[
                  { number: '#1', label: 'Wynik egzaminu w kraju' },
                  { number: 'UJ CM', label: 'Uniwersytet Jagielloński' },
                  { number: '3+', label: 'Lata specjalizacji' },
                  { number: '∞', label: 'Zaangażowanie w pacjentów' },
                ].map((stat) => (
                  <div key={stat.label} className="border-t border-white/10 pt-4">
                    <p className="font-serif text-2xl text-gold">{stat.number}</p>
                    <p className="text-xs text-white/30 mt-1 tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
