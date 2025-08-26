'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { memo } from 'react';

// Województwa podzielone na dwie kolumny
const REGIONS_LEFT = [
  'Dolnośląskie', 'Kujawsko-Pomorskie', 'Lubelskie', 'Lubuskie',
  'Łódzkie', 'Małopolskie', 'Mazowieckie', 'Opolskie',
] as const;

const REGIONS_RIGHT = [
  'Podkarpackie', 'Podlaskie', 'Pomorskie', 'Śląskie',
  'Świętokrzyskie', 'Warmińsko-Mazurskie', 'Wielkopolskie', 'Zachodniopomorskie',
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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

const mapVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }
  }
} as const;

function CoverageMapSection() {
  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl bg-gold-700/10" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl bg-gold-700/8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header z poprawną semantyką i CSS order */}
        <motion.div 
          className="text-center mb-12 lg:mb-16 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 - semantycznie pierwszy, wizualnie drugi */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight order-2 text-foreground">
            Ogólnopolski zasięg działania{' '}
            <span className="text-gold-700">dostarczamy pojazd tam, gdzie jesteś</span>
          </h2>

          {/* H3 - semantycznie drugi, wizualnie pierwszy */}
          <h3 className="text-lg font-semibold mb-4 order-1 text-gold-700">
            <span className="relative flex h-2 w-2 mr-2 inline-flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Obsługujemy klientów niezależnie od miejsca zdarzenia czy siedziby firmy
          </h3>
        </motion.div>

        {/* Opis */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground">
            Niezależnie od miejsca Twojego zamieszkania czy miejsca zdarzenia, jesteśmy gotowi dostarczyć samochód zastępczy w dowolne miejsce w Polsce. Nasza sieć obejmuje wszystkie województwa, zapewniając{' '}
            <span className="font-semibold text-gold-700">szybki i sprawny wynajem</span>{' '}
            auta zastępczego wszędzie tam, gdzie tego potrzebujesz.
            <br /><br />
            <span className="font-semibold text-foreground">
              Zaufaj nam, aby szybko i bezproblemowo odzyskać mobilność.
            </span>
          </p>
        </motion.div>

        {/* Główna sekcja z mapą i listami */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">
          {/* Lista województw – lewa */}
          <motion.div
            className="hidden lg:block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="flex flex-col items-end justify-center gap-3">
              {REGIONS_LEFT.map((region) => (
                <motion.li 
                  key={region} 
                  variants={itemVariants}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <span className="text-sm font-medium group-hover:text-opacity-80 transition-colors text-foreground">
                    {region}
                  </span>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-200 bg-gold-700">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mapa */}
          <motion.div 
            className="relative mx-auto w-full max-w-[500px]"
            variants={mapVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Glow effect za mapą */}
              <div className="absolute inset-0 rounded-2xl blur-xl bg-gold-700 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              {/* Mapa */}
              <Image
                src="/maps/obszar-dzialania-zastepczak.png"
                alt="Mapa działania Zastepczak.pl - obsługa ciężarowych aut zastępczych w całej Polsce"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                priority={true}
                quality={90}
                unoptimized={process.env.NODE_ENV === 'development'}
                onError={(e) => {
                  console.error('❌ Błąd ładowania mapy:', e);
                  // Fallback - ukryj obraz jeśli nie można załadować
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Badge na mapie */}
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-bold shadow-lg bg-gold-700 text-white">
                Cała Polska
              </div>
            </div>
          </motion.div>

          {/* Lista województw – prawa */}
          <motion.div
            className="hidden lg:block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="flex flex-col items-start justify-center gap-3">
              {REGIONS_RIGHT.map((region) => (
                <motion.li 
                  key={region} 
                  variants={itemVariants}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full group-hover:scale-110 transition-transform duration-200 bg-gold-700">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium group-hover:text-opacity-80 transition-colors text-foreground">
                    {region}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Lista województw – mobile */}
        <motion.div 
          className="mt-12 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-lg font-bold mb-6 text-center text-foreground">
            Wszystkie województwa w Polsce
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[...REGIONS_LEFT, ...REGIONS_RIGHT].map((region) => (
              <div key={region} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 bg-gold-700">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {region}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border-2 text-gold-700 bg-gold-50 border-gold-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Dostawa ciężarowych aut zastępczych w całej Polsce • Bezgotówkowo • 24/7
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CoverageMapSection);