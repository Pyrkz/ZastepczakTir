'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Dane typów pojazdów
const VEHICLE_TYPES = [
  {
    id: 'ciagniki-siodlowe',
    name: 'Ciągniki siodłowe',
    image: '/fleet/ciagniki-siodlowe.jpg',
    category: 'Ciężarowe'
  },
  {
    id: 'solowka',
    name: 'Solówka',
    image: '/fleet/solowka.jpg',
    category: 'Ciężarowe'
  },
  {
    id: 'wywrotka',
    name: 'Wywrotka',
    image: '/fleet/wywrotka.jpg',
    category: 'Ciężarowe'
  },
  {
    id: 'bus',
    name: 'Bus',
    image: '/fleet/bus.jpg',
    category: 'Bus'
  },
  {
    id: 'dostawcze-izoterma',
    name: 'Dostawcze Izoterma',
    image: '/fleet/dostawcze-izoterma.jpg',
    category: 'Specjalistyczne'
  },
  {
    id: 'kontenery-chlodnia',
    name: 'Kontenery z chłodnią',
    image: '/fleet/kontener-chlodnia.jpg',
    category: 'Specjalistyczne'
  },
  {
    id: 'dostawcze-plandeka',
    name: 'Dostawcze z plandeką',
    image: '/fleet/dostawcze-plandeka.jpg',
    category: 'Specjalistyczne'
  },
  {
    id: 'kontenery-winda',
    name: 'Kontenery z windą',
    image: '/fleet/kontener-winda.jpg',
    category: 'Specjalistyczne'
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

function VehicleTypesSection() {
  // Funkcja do płynnego przewijania do sekcji kontakt
  const handleShowFleet = () => {
    const targetElement = document.getElementById('flota');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/8" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gold-700/6" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-gold-700/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center mb-6"
          >
            <div className="flex items-center px-4 py-2 rounded-full text-sm font-semibold border-2 text-gold-700 bg-gold-50 border-gold-700">
              Wynajmujemy auta zastępcze w każdej klasie
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900"
          >
            Jakie ciężarowe i specjalistyczne rodzaje pojazdów{' '}
            <span className="text-gold-700">posiadamy w naszej flocie?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto text-gray-600"
          >
            Dla nasze zastępcze samochody ciężarowe z OC sprawcy, które oferują Ci bezproblemowe rozwiązanie, abyś mógł kontynuować pracę bez zastrzeżeń.
          </motion.p>
        </motion.div>

        {/* Vehicle Types Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {VEHICLE_TYPES.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Vehicle Image */}
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md bg-gray-900">
                    {vehicle.category}
                  </div>

                </div>

                {/* Vehicle Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gold-700 transition-colors duration-300">
                    {vehicle.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
              Sprawdź całą flotę
            </h3>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ y: 0, scale: 0.98 }}
          >
            <Button
              variant="gradient"
              size="lg"
              onClick={handleShowFleet}
              className="group text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl"
            >
              Zobacz więcej
              <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(VehicleTypesSection);