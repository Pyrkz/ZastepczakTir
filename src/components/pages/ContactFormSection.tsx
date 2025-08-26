'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import PhoneContactForm from '@/components/pages/PhoneContactForm';
import ContactInfoSection from '@/components/pages/ContactInfoSection';

function ContactFormSection() {
  return (
    <section 
      id="kontakt" 
      className="bg-gray-50 py-16 lg:py-20 relative overflow-hidden scroll-mt-20"
    >
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/5" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gold-700/3" />
      </div>

      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-1 relative z-10">
        {/* Header z poprawną semantyką i CSS order */}
        <motion.div 
          className="text-center mb-12 lg:mb-16 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 - semantycznie pierwszy, wizualnie drugi */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight order-2 text-foreground">
            Gotowy na{' '}
            <span className="text-gold-700">Wynajem?</span>
            
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
            Skorzystaj z Naszych Prostych i Szybkich Procedur
          </h3>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Phone Mockup with Form */}
          <motion.div

            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <PhoneContactForm />
          </motion.div>

          {/* Right Side - Contact Info */}
          <ContactInfoSection />
        </div>
      </div>
    </section>
  );
}

export default memo(ContactFormSection);