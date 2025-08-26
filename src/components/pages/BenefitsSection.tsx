'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';

// Ikony SVG dla każdego benefitu - dostosowane do branży taxi
const BENEFIT_ICONS = {
  money: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  ),
  speed: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  taxi: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 9a2 2 0 002 2h8a2 2 0 002-2l-2-9m-8 0V6a2 2 0 012-2h4a2 2 0 012 2v1" />
    </svg>
  ),
  support: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  license: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
} as const;

// Benefity dostosowane do taksówkarzy
const BENEFITS = [
  {
    title: 'Zero kosztów',
    desc: 'Taxi zastępcze całkowicie za darmo z OC sprawcy. Nie tracisz ani złotówki.',
    icon: BENEFIT_ICONS.money,
    highlight: 'Bezpłatny'
  },
  {
    title: 'Ekspresowa dostawa',
    desc: 'Dostarczamy licencjonowane taxi w najkrótszym czasie wszędzie w Polsce.',
    icon: BENEFIT_ICONS.speed,
    highlight: 'Natychmiast'
  },
  {
    title: 'Taxi z licencją',
    desc: 'Wszystkie nasze pojazdy mają ważne licencje taxi. Możesz od razu pracować.',
    icon: BENEFIT_ICONS.license,
    highlight: 'Licencjonowane'
  },
  {
    title: 'Formalności za Ciebie',
    desc: 'Załatwiamy wszystko z ubezpieczycielem. Ty koncentrujesz się na zarabiu.',
    icon: BENEFIT_ICONS.support,
    highlight: 'Bez stresu'
  },
  {
    title: 'Wsparcie 24/7',
    desc: 'Całodobowa pomoc dla taksówkarzy. Zawsze jesteśmy gotowi pomóc.',
    icon: BENEFIT_ICONS.clock,
    highlight: 'Non-stop'
  }
] as const;

// Animacje
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

function BenefitsSection() {
  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl bg-gold-700/5" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 - semantycznie pierwszy, ale wizualnie drugi (order-2) */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight order-2 text-foreground">
            Wynajmij taxi zastępcze{' '}
            <span className="text-gold-700">z OC sprawcy</span>
            <br className="hidden md:inline" />
            <span className="text-2xl sm:text-3xl lg:text-4xl block mt-2 text-muted-foreground">
              i kontynuuj pracę jako taksówkarz
            </span>
          </h2>

          {/* H3 - semantycznie drugi, ale wizualnie pierwszy (order-1) */}
          <h3 className="text-lg font-semibold mb-4 order-1 text-gold-700">
            <span className="relative flex h-2 w-2 mr-2 inline-flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Specjalizujemy się w taxi zastępczych dla taksówkarzy
          </h3>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                {/* Icon + Highlight badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-50 text-gold-700">
                    {benefit.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gold-700/10 text-gold-700">
                    {benefit.highlight}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold mb-3 text-foreground group-hover:text-opacity-80 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.desc}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-gold-700/5 to-transparent border-2 border-gold-700/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg font-medium text-muted-foreground">
            Potrzebujesz taxi zastępczego? 
            <span className="font-semibold ml-1 text-gold-700">
              Zadzwoń: +48 536 565 565
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(BenefitsSection);