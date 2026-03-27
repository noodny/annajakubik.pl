import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const principles = [
  {
    number: '01',
    title: 'Holistyczna diagnostyka',
    text: 'Każde leczenie zaczyna się od kompleksowej oceny — nie tylko jamy ustnej, ale powiązanych systemów wpływających na zdrowie przyzębia.',
  },
  {
    number: '02',
    title: 'Współpraca interdyscyplinarna',
    text: 'Złożone przypadki wymagają skoordynowanej wiedzy. Współpraca z ortodontami, implantologami i innymi specjalistami zapewnia zintegrowane, długoterminowe rezultaty.',
  },
  {
    number: '03',
    title: 'Precyzja oparta na dowodach',
    text: 'Decyzje kliniczne zakorzenione w najnowszych badaniach naukowych. Żadnych skrótów, żadnych trendów — tylko to, co potwierdza nauka.',
  },
]

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="philosophy" className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-sage/[0.03] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
            Podejście
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Więcej niż
            <br />
            <span className="text-white/30">stomatologia</span>
          </h2>
        </motion.div>

        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed font-serif italic">
              „Już od czasu studiów interesował mnie związek chorób jamy ustnej ze zdrowiem ogólnym oraz holistyczne podejście do każdego pacjenta, obejmujące kompleksową diagnostykę i&nbsp;prowadzenie leczenia zarówno zachowawczego, jak i&nbsp;chirurgicznego."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-gold/30" />
              <p className="text-sm text-gold/60 tracking-wide">
                Anna Jakubik
              </p>
            </div>
          </motion.div>

          {/* Right: principles */}
          <div className="space-y-12">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-6"
              >
                <span className="text-gold/20 font-serif text-3xl leading-none pt-1 group-hover:text-gold/40 transition-colors duration-500">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold-light transition-colors duration-500">
                    {p.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
