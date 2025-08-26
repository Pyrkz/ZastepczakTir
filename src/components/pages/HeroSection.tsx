'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { Button } from '@/components/ui/button';

// Zoptymalizowane animacje - wyciągnięte jako stałe
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
} as const;

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }
  }
} as const;

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }
  }
} as const;

// Trust indicators jako stała (nie będą się re-renderować)
const TRUST_INDICATORS = [
  'Obsługa w całej Polsce',
  'Bezgotówkowy wynajem taxi', 
  'Formalności w 15 minut',
  '24/7 Wsparcie dla taksówkarzy'
] as const;

function HeroSection() {
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
    <main 
      className="bg-white relative overflow-hidden mt-20 sm:mt-0 pt-20 sm:pt-24 md:pt-28 lg:pt-32" 
      style={{ userSelect: 'text' }}
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ZastępczakTir - Taxi Zastępcze",
            "description": "Profesjonalny wynajem taxi zastępczych dla taksówkarzy po kolizji. Bezgotówkowe wynajmy z OC sprawcy w całej Polsce.",
            "url": "https://zastepczaktir.pl",
            "telephone": "+48536565565",
            "areaServed": "Polska",
            "serviceType": "Taxi zastępcze",
            "priceRange": "Bezpłatny wynajem z OC sprawcy",
            "availableLanguage": "Polish",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Taxi zastępcze",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wynajem taxi zastępczego",
                    "description": "Bezgotówkowy wynajem taxi zastępczego z OC sprawcy kolizji"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Section */}
        <header className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.div 
            className="mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Top notification banner */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full border-gold-200 text-gold-700 bg-gold-50"
              role="banner"
              aria-label="Oferta specjalna"
            >
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-gold-700" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-700" />
              </span>
              Taxi zastępcze od ręki – bez kosztów, kontynuuj pracę w całej Polsce!
            </motion.div>

            {/* CTA Navigation */}
            <nav aria-label="Główne działania" className="mb-6">
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Primary CTA - Phone */}
                <motion.div
                  variants={buttonVariants}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() => handlePhoneCall('+48536565565')}
                    className="group w-full text-lg"
                    aria-label="Zadzwoń teraz po taxi zastępcze"
                  >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="mr-2">+48 536 565 565</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </motion.div>

                {/* Secondary CTA - Contact Form */}
                <motion.div
                  variants={buttonVariants}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleScrollToContact}
                    className="group w-full text-lg"
                    aria-label="Napisz do nas formularzem kontaktowym"
                  >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="mr-2">Napisz do nas</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </motion.div>
              </motion.div>
            </nav>

            {/* Legal notice */}
            <motion.p 
              variants={fadeInUp}
              className="text-sm font-semibold tracking-wide uppercase text-gold-700"
              role="note"
              aria-label="Informacja prawna"
            >
              Taxi zastępcze należy Ci się od pierwszego dnia kolizji
            </motion.p>
          </motion.div>
        </header>

        {/* Hero Image Section - PRZED nagłówkiem dla SEO */}
        <section className="mb-12 lg:mb-16" aria-labelledby="hero-image">
          <motion.figure 
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto max-w-6xl"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/Resources/ZastepczakTir-Hero-min.jpg"
              alt="Taxi zastępcze ZastępczakTir - profesjonalna flota licencjonowanych taksówek dostępnych bezgotówkowo w całej Polsce dla taksówkarzy po kolizji, wynajem z OC sprawcy"
              fill
              className="object-contain object-center"
              priority={true}
              quality={85}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <figcaption className="sr-only" id="hero-image">
              Obrazek przedstawia flotę taxi zastępczych dostępnych dla taksówkarzy po kolizji
            </figcaption>
          </motion.figure>
        </section>

        {/* Main Content Section */}
        <section className="text-center max-w-4xl mx-auto mb-12 lg:mb-16" aria-labelledby="main-heading">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              id="main-heading"
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
            >
              Zamów Taxi zastępcze z OC sprawcy{' '}
              <span className="text-gold-700">bezgotówkowo</span>
              <br className="hidden md:inline" />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2 text-gray-900">
                nie przerywaj pracy jako taksówkarz
              </span>
            </motion.h1>

            <motion.div 
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <h2 className="sr-only">Dlaczego wybrać ZastępczakTir</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-600">
                Specjalizujemy się w wynajmie taxi zastępczych dla taksówkarzy po kolizji. W ciągu zaledwie{' '}
                <strong className="font-semibold text-gold-700">15 minut</strong>{' '}
                załatwiamy wszystkie formalności, abyś mógł szybko wrócić do wykonywania swojej pracy.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Rozumiemy, że każda godzina bez pracy to strata zarobków. Dlatego dostarczamy sprawne taxi z licencją dokładnie tam, gdzie potrzebujesz – <strong>w całej Polsce</strong>.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Trust Indicators Section */}
        <aside className="mt-12 pt-8 border-t border-gray-200" aria-labelledby="trust-indicators">
          <h3 id="trust-indicators" className="sr-only">Nasze gwarancje</h3>
          <motion.ul 
            className="flex flex-wrap justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            role="list"
          >
            {TRUST_INDICATORS.map((indicator, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                <span>{indicator}</span>
              </li>
            ))}
          </motion.ul>
        </aside>
      </div>

      {/* Background decorative elements - używamy arbitrary values dla opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.05)' }} // gold-700 z opacity 5%
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.03)' }} // gold-700 z opacity 3%
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </main>
  );
}

// Memoizacja komponentu dla lepszej wydajności
export default memo(HeroSection);