'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { Button } from '@/components/ui/button';

// Usunięto stałe kolorów - teraz używamy Tailwind CSS v4 classes

// Animacje
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }
  }
} as const;

function CTASection() {
  // Funkcja do dzwonienia
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Funkcja do płynnego przewijania do sekcji kontakt
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('kontakt');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-16 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/8 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gold-700/6" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-gold-700/4" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Top badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center mb-6"
          >
            <div className="flex items-center px-4 py-2 rounded-full text-sm font-semibold border-2 text-gold-700 bg-gold-50 border-gold-700">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Jesteśmy dostępni 24/7
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
          >
            Potrzebujesz ciężarówki zastępczej?{' '}
            <span className="text-gold-700">Zadzwoń już teraz!</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-8 lg:mb-12"
          >
            <p className="text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl mx-auto text-gray-600">
              Oferujemy pełną gamę pojazdów ciężarowych: TIR-y, wywrotki, izotermiczne, z HDS, busy dostawcze i wiele innych. Wszystko z OC sprawcy!
            </p>
            <p className="text-base lg:text-lg font-medium max-w-2xl mx-auto text-gray-900">
              Szybka dostawa, pełna obsługa prawna, bez ukrytych kosztów. Dzięki nam nie stracisz ani jednego kontraktu!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* Primary CTA - Phone */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={() => handlePhoneCall('+48536565565')}
                className="group text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +48 536 565 565
                <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </motion.div>

            {/* Secondary CTA - Contact Form */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={handleScrollToContact}
                className="group text-lg px-8 py-4 rounded-2xl"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Napisz do nas
                <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>

          {/* Bottom message */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-2xl border-2 bg-white border-gold-50">
              <svg 
                className="w-5 h-5 mr-3 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg font-semibold text-gray-900">
                Nie czekaj - Twój biznes nie może stać!
              </span>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full animate-bounce bg-gold-700" style={{ animationDelay: '0s' }} />
            <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full animate-bounce bg-green-500" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full animate-bounce bg-gold-700" style={{ animationDelay: '1s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CTASection);