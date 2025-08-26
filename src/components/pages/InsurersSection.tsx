'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import InsurersSlider from '@/components/pages/InsurersSlider';

// Stałe kolorów dla spójności
const COLORS = {
  primary: '#A4833B',
  text: '#171717',
  textSecondary: '#6b7280',
  success: '#10b981',
  background: '#fefdf8',
  border: '#e5e7eb'
} as const;

function InsurersSection() {
  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.08)' }}
        />
        <div 
          className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.05)' }}
        />
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
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight order-2 relative"
            style={{ color: COLORS.text }}
          >
            Wszystkich należności dochodzimy sami od{' '}
            <br className="hidden md:inline" />
            <span style={{ color: COLORS.primary }}>Towarzystwa Ubezpieczeniowego</span>
            
            {/* Dekoracyjna linia */}
            <motion.div 
              className="w-20 h-1 mx-auto mt-4 rounded-full"
              style={{ backgroundColor: COLORS.primary }}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>

          {/* H3 - semantycznie drugi, wizualnie pierwszy */}
          <h3 
            className="text-lg font-semibold mb-4 order-1"
            style={{ color: COLORS.primary }}
          >
            <span className="relative flex h-2 w-2 mr-2 inline-flex">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                style={{ backgroundColor: COLORS.success }}
              />
              <span 
                className="relative inline-flex rounded-full h-2 w-2" 
                style={{ backgroundColor: COLORS.success }}
              />
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
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border mb-4"
            style={{ 
              color: COLORS.primary,
              backgroundColor: COLORS.background,
              borderColor: COLORS.border
            }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Rozliczamy się bezgotówkowo ze wszystkimi ubezpieczycielami
          </div>

          {/* Dodatkowy opis */}
          <p 
            className="text-sm max-w-3xl mx-auto leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            Dzięki długoletniemu doświadczeniu i współpracy z największymi towarzystwami ubezpieczeniowymi w Polsce,
            zapewniamy{' '}
            <span className="font-semibold" style={{ color: COLORS.primary }}>
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