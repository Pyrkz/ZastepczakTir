'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';

// Stałe kolorów dla spójności
const COLORS = {
  primary: '#A4833B',
  text: '#171717',
  textSecondary: '#6b7280',
  success: '#10b981',
  background: '#fefdf8',
  border: '#e5e7eb',
  cardBg: '#ffffff'
} as const;

// Animacje
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.3 }
  }
};

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
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.08)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.06)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.04)' }}
        />
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
            <div 
              className="flex items-center px-4 py-2 rounded-full text-sm font-semibold border-2"
              style={{ 
                color: COLORS.primary,
                backgroundColor: COLORS.background,
                borderColor: COLORS.primary
              }}
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span 
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                  style={{ backgroundColor: COLORS.success }}
                />
                <span 
                  className="relative inline-flex rounded-full h-2 w-2" 
                  style={{ backgroundColor: COLORS.success }}
                />
              </span>
              Jesteśmy dostępni 24/7
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: COLORS.text }}
          >
            Skontaktuj się z nami i skorzystaj{' '}
            <span style={{ color: COLORS.primary }}>z naszych usług!</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-8 lg:mb-12"
          >
            <p 
              className="text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl mx-auto"
              style={{ color: COLORS.textSecondary }}
            >
              Jesteśmy dostępni 24/7. Skontaktuj się z nami, a zajmiemy się wszystkimi formalnościami za Ciebie!
            </p>
            <p 
              className="text-base lg:text-lg font-medium max-w-2xl mx-auto"
              style={{ color: COLORS.text }}
            >
              Nasz zespół ekspertów pomoże Ci w każdej sytuacji i zapewni szybkie rozwiązanie Twojego problemu.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* Primary CTA - Phone */}
            <motion.button
              variants={buttonVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              onClick={() => handlePhoneCall('+48536565565')}
              className="group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              style={{ 
                backgroundColor: COLORS.primary,
                color: 'white'
              }}
              type="button"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8f6f32';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              }}
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +48 536 565 565
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: 'white' }}
              />
            </motion.button>

            {/* Secondary CTA - Contact Form */}
            <motion.button
              variants={buttonVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              onClick={handleScrollToContact}
              className="group px-8 py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{ 
                color: COLORS.primary,
                backgroundColor: 'white',
                borderColor: COLORS.primary
              }}
              type="button"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.background;
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              }}
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Napisz do nas
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom message */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div 
              className="inline-flex items-center px-6 py-3 rounded-2xl border-2"
              style={{ 
                backgroundColor: COLORS.cardBg,
                borderColor: COLORS.border
              }}
            >
              <svg 
                className="w-5 h-5 mr-3" 
                fill="none" 
                stroke={COLORS.success} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span 
                className="text-lg font-semibold"
                style={{ color: COLORS.text }}
              >
                Czekamy na Ciebie!
              </span>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: COLORS.primary, animationDelay: '0s' }} />
            <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: COLORS.success, animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: COLORS.primary, animationDelay: '1s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CTASection);