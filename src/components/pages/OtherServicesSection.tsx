'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import Image from 'next/image';

// Dane usług - poprawione zgodnie z wymaganiami
const SERVICES = [
  {
    id: 'doplaty',
    title: 'Dopłaty do odszkodowań',
    description: 'Profesjonalne wsparcie w uzyskaniu wyższego odszkodowania za szkody powstałe w wyniku kolizji drogowej.',
    image: 'Resources/zastepczak-doplaty-do-odszkodowan.jpg',
    icon: '$',
    features: [
      'Analiza wysokości szkody',
      'Negocjacje z ubezpieczycielem', 
      'Wsparcie prawne',
      'Maksymalizacja odszkodowania'
    ],
    buttonText: 'Więcej'
  },
  {
    id: 'naprawy',
    title: 'Naprawy z OC / AC',
    description: 'Kompleksowe naprawy pojazdów z wykorzystaniem ubezpieczenia OC sprawcy lub własnego AC.',
    image: 'Resources/zastepczak-naprawy-ocac.jpg',
    icon: '⚙',
    features: [
      'Naprawy blacharsko-lakiernicze',
      'Dochodzenie należności',
      'Gwarancja na naprawy',
      'Profesjonalny serwis'
    ],
    buttonText: 'Więcej'
  },
  {
    id: 'samochody',
    title: 'Samochody zastępcze',
    description: 'Szeroki wybór samochodów zastępczych różnych kategorii. Od kompaktowych po luksusowe i dostawcze.',
    image: 'Resources/zastepczak-auta-zastepcze.jpg',
    icon: '🚗',
    features: [
      'Różne kategorie pojazdów',
      'Dostawa pod wskazany adres',
      'Bezgotówkowy wynajem',
      'Obsługa całej Polski'
    ],
    buttonText: 'Więcej'
  },
  {
    id: 'tiry',
    title: 'TIRy zastępcze',
    description: 'Specjalistyczne pojazdy dostawcze i ciężarowe dla firm transportowych i przedsiębiorców.',
    image: 'Resources/zastepczak-auta-zastepcze.jpg',
    icon: '🚛',
    features: [
      'Pojazdy dostawcze',
      'TIRy i naczepy',
      'Obsługa firm transportowych',
      'Szybka dostępność'
    ],
    buttonText: 'Więcej'
  }
];

// Animacje
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

function OtherServicesSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/10" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl bg-gold-700/8" />
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
          {/* H3 - semantycznie drugi, wizualnie pierwszy */}
          <h3 className="text-lg font-semibold mb-4 order-1 text-gold-700">
            <span className="relative flex h-2 w-2 mr-2 inline-flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Oferujemy wsparcie na każdym etapie
          </h3>

          {/* H2 - semantycznie pierwszy, wizualnie drugi */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight order-2 text-foreground">
            Inne nasze{' '}
            <span className="text-gold-700">usługi</span>
            <br className="hidden md:inline" />
            <span className="text-2xl sm:text-3xl lg:text-4xl block mt-2 text-muted-foreground">
              kompleksowa obsługa po kolizji
            </span>
          </h2>
        </motion.div>

        {/* Services Grid - zmieniono na md:grid-cols-2 dla 4 kafelków */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={85}
                    priority={false}
                  />
                  
                  {/* Overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg bg-gold-700">
                    {service.icon}
                  </div>

                  {/* Service title overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 
                      className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight"
                    >
                      {service.title}
                    </h4>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  {/* Description */}
                  <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold mb-3 uppercase tracking-wide text-foreground">
                      Zakres usługi:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gold-700" />
                          <span className="text-sm font-medium text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-6 rounded-2xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 bg-gold-700 hover:bg-gold-800 text-white">
                    <span className="flex items-center justify-center gap-2">
                      {service.buttonText}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-gold-700/10 to-transparent border-2 border-gold-700/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(OtherServicesSection);