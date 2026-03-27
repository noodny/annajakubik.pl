import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stages = [
  {
    stage: 'Etap 1',
    title: 'Zapalenie dziąseł',
    description: 'Wczesny objaw choroby przyzębia, charakteryzujący się krwawieniem i zaczerwienieniem dziąseł. W pełni odwracalny przy odpowiednim leczeniu.',
    visual: '●○○○',
    color: 'text-sage',
  },
  {
    stage: 'Etap 2',
    title: 'Wczesne zapalenie przyzębia',
    description: 'Stan zapalny rozprzestrzenia się poniżej linii dziąseł. Zaczynają powstawać kieszenie przyzębne. Rozpoczyna się utrata kości — ale progresję można zatrzymać.',
    visual: '●●○○',
    color: 'text-gold',
  },
  {
    stage: 'Etap 3',
    title: 'Umiarkowane zapalenie przyzębia',
    description: 'Głębsze kieszenie, nasilona utrata kości i potencjalna ruchomość zębów. Związek między chorobą przyzębia a zdrowiem ogólnym staje się krytyczny.',
    visual: '●●●○',
    color: 'text-gold-dark',
  },
  {
    stage: 'Etap 4',
    title: 'Zaawansowane zapalenie przyzębia',
    description: 'Ciężka destrukcja kości. Zęby mogą się rozchwiać lub wymagać usunięcia. Może skutkować utratą zębów.',
    visual: '●●●●',
    color: 'text-red-400/70',
  },
]

const stats = [
  { value: 'Tylko 1%', label: 'Polaków ma zdrowe przyzębie' },
  { value: 'Ponad 16%', label: 'choruje na zaawansowane zapalenie przyzębia' },
  { value: '6. miejsce', label: 'wśród najczęstszych chorób na świecie' },
]

export default function Conditions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="conditions" className="relative py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-20"
        >
          <p className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
            Choroby przyzębia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Cicha
            <br />
            <span className="text-white/30">progresja</span>
          </h2>
          <p className="mt-6 text-white/30 text-base leading-relaxed max-w-xl">
            Choroba przyzębia rozwija się stopniowo, często bez bólu. Rozpoznanie jej etapów to pierwszy krok do ochrony nie tylko zębów — ale całego organizmu.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid sm:grid-cols-3 gap-8 mb-20 p-8 border border-white/[0.06] bg-charcoal/30"
        >
          {stats.map((s) => (
            <div key={s.value} className="text-center sm:text-left">
              <p className="font-serif text-3xl md:text-4xl text-gold">{s.value}</p>
              <p className="text-white/30 text-sm mt-2 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Stages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.02]">
          {stages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 bg-charcoal-dark border border-white/[0.03] hover:border-white/[0.08] transition-all duration-700"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-white/20 mb-4">
                {item.stage}
              </p>
              <p className={`text-lg tracking-widest mb-4 ${item.color}`}>
                {item.visual}
              </p>
              <h3 className="font-serif text-xl text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Systemic connections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 p-8 lg:p-12 border border-white/[0.06] bg-charcoal/20"
        >
          <h3 className="font-serif text-2xl text-white mb-4">
            Związek ze zdrowiem ogólnym
          </h3>
          <p className="text-white/40 text-base leading-relaxed max-w-3xl">
            Choroby przyzębia mogą mieć związek z <span className="text-white/60">cukrzycą</span>, <span className="text-white/60">udarem mózgu</span>, <span className="text-white/60">chorobami sercowo-naczyniowymi</span>, <span className="text-white/60">miażdżycą</span>, <span className="text-white/60">przedwczesnym porodem</span> i&nbsp;<span className="text-white/60">niską masą urodzeniową</span>. Leczenie dziąseł to inwestycja w zdrowie całego organizmu.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
