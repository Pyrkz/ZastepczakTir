'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import InsurersSlider from '@/components/pages/InsurersSlider';

// Usunięto stałe kolorów - teraz używamy Tailwind CSS v4 classes

function InsurersSection() {
  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl bg-gold-700/8" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl bg-gold-700/5" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header z poprawną semantyką i CSS order */}
        <motion.div 
          className="text-center mb-12 lg:mb-16 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 - semantycznie pierwszy, wizualnie drugi */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight order-2 relative text-gray-900">
            Wszystkich należności dochodzimy sami od{' '}
            <br className="hidden md:inline" />
            <span className="text-gold-700">Towarzystwa Ubezpieczeniowego</span>
            
            {/* Dekoracyjna linia */}
            <motion.div 
              className="w-20 h-1 mx-auto mt-4 rounded-full bg-gold-700"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>

          {/* H3 - semantycznie drugi, wizualnie pierwszy */}
          <h3 className="text-lg font-semibold mb-4 order-1 text-gold-700">
            <span className="relative flex h-2 w-2 mr-2 inline-flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Wszystkie koszty za wynajem taxi zastępczego z OC pokrywane są przez ubezpieczyciela sprawcy szkody
          </h3>
        </motion.div>

        {/* Slider z ubezpieczycielami */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <InsurersSlider />
        </motion.div>

        {/* Dodatkowe informacje */}
        <motion.div 
          className="text-center mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Info box */}
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border mb-4 text-gold-700 bg-gold-50 border-gray-200">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Rozliczamy się bezgotówkowo ze wszystkimi ubezpieczycielami
          </div>

          {/* Dodatkowy opis */}
          <p className="text-sm max-w-3xl mx-auto leading-relaxed text-gray-600">
            Dzięki długoletniemu doświadczeniu i współpracy z największymi towarzystwami ubezpieczeniowymi w Polsce,
            zapewniamy{' '}
            <span className="font-semibold text-gold-700">
              płynny proces rozliczania
            </span>{' '}
            bez żadnych dodatkowych formalności z Twojej strony.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(InsurersSection);