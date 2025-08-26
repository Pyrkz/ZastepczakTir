'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';

// Stałe kolorów
const COLORS = {
  primary: '#A4833B',
  text: '#171717',
  textSecondary: '#6b7280',
  success: '#10b981',
  background: '#fefdf8',
  border: '#e5e7eb'
} as const;

// Animacje
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function ContactInfoSection() {
  return (
    <motion.div
      className="order-1 lg:order-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <h4 
          className="text-xl sm:text-2xl font-bold mb-4"
          style={{ color: COLORS.text }}
        >
          Skorzystaj z formularza
        </h4>
        <p 
          className="text-base sm:text-lg leading-relaxed mb-6"
          style={{ color: COLORS.textSecondary }}
        >
          Wypełnij formularz kontaktowy na naszej stronie, aby szybko i łatwo rozpocząć proces wynajmu.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8 text-center">
        <h5 
          className="text-lg font-bold mb-4"
          style={{ color: COLORS.text }}
        >
          Lub zadzwoń
        </h5>
        <div className="flex justify-center">
          <a
            href="tel:+48536565565"
            className="inline-flex items-center px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-white"
            style={{ backgroundColor: COLORS.primary }}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +48 536 565 565
          </a>
        </div>
      </motion.div>

      {/* Features List */}
      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h6 
          className="text-lg font-bold mb-4"
          style={{ color: COLORS.text }}
        >
          Dlaczego warto skorzystać z naszych usług?
        </h6>
        
        <div className="space-y-4">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ),
              title: 'Bezgotówkowy wynajem',
              description: 'Wszystkie koszty pokrywa ubezpieczyciel sprawcy'
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Szybka realizacja',
              description: 'Pojazd zastępczy w ciągu 24 godzin'
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Dostawa w całej Polsce',
              description: 'Dowozimy auto pod wskazany adres'
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Pełna obsługa prawna',
              description: 'Załatwiamy wszystkie formalności z ubezpieczycielem'
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div 
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                {feature.icon}
              </div>
              <div>
                <div 
                  className="font-semibold text-sm mb-1"
                  style={{ color: COLORS.text }}
                >
                  {feature.title}
                </div>
                <p 
                  className="text-xs leading-relaxed"
                  style={{ color: COLORS.textSecondary }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div 
          className="mt-6 pt-6 border-t text-center"
          style={{ borderColor: COLORS.border }}
        >
          <div className="flex items-center justify-center gap-2 text-sm">
            <svg className="w-4 h-4" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span style={{ color: COLORS.textSecondary }}>
              Czas odpowiedzi: <strong style={{ color: COLORS.text }}>do 30 minut</strong>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div 
        variants={itemVariants}
        className="mt-6 grid grid-cols-2 gap-4"
      >
        <div 
          className="text-center p-4 rounded-xl"
          style={{ backgroundColor: COLORS.background }}
        >
          <div 
            className="text-2xl font-bold"
            style={{ color: COLORS.primary }}
          >
            5000+
          </div>
          <div 
            className="text-xs font-medium"
            style={{ color: COLORS.textSecondary }}
          >
            Zadowolonych klientów
          </div>
        </div>
        <div 
          className="text-center p-4 rounded-xl"
          style={{ backgroundColor: COLORS.background }}
        >
          <div 
            className="text-2xl font-bold"
            style={{ color: COLORS.primary }}
          >
            24h
          </div>
          <div 
            className="text-xs font-medium"
            style={{ color: COLORS.textSecondary }}
          >
            Czas realizacji
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default memo(ContactInfoSection);