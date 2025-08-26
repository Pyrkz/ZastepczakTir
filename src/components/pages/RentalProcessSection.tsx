'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';

// Dane kroków procesu
const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Kontakt',
    description: 'Skontaktuj się z nami telefonicznie, przez formularz na stronie lub mailowo. Nasi specjaliści są dostępni, aby odpowiedzieć na wszystkie Twoje pytania i rozpocząć proces wynajmu taxi zastępczego. Działamy szybko i sprawnie, abyś mógł jak najszybciej wrócić do normalności.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Weryfikacja dokumentów',
    description: 'Przygotuj niezbędne dokumenty, takie jak prawo jazdy, dowód rejestracyjny uszkodzonego pojazdu oraz dokumenty potwierdzające szkodę. Jeśli masz wątpliwości co do wymaganych dokumentów, nasz zespół pomoże Ci w ich skompletowaniu i sprawdzeniu.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Wybór pojazdu',
    description: 'Wybierz samochód odpowiadający Twoim potrzebom z naszej szerokiej floty. Oferujemy pojazdy z różnych segmentów, aby zapewnić Ci komfort i wygodę podczas użytkowania taxi zastępczego. Każdy pojazd jest w pełni sprawny i gotowy do użytku.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Odbiór lub dostarczenie samochodu',
    description: 'Odbierz pojazd osobiście z naszego punktu lub skorzystaj z opcji dostawy pod wskazany adres. Dbamy o to, aby cały proces był dla Ciebie jak najbardziej wygodny, dostosowując się do Twoich potrzeb i oczekiwań.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
] as const;

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

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

function RentalProcessSection() {
  // Funkcja do płynnego przewijania do sekcji kontakt
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetElement = document.getElementById('kontakt');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  // Funkcja do dzwonienia (opcjonalna walidacja numeru)
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl bg-gold-700/8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header z poprawną semantyką i CSS order */}
        <motion.div 
          className="text-center mb-12 lg:mb-20 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 - semantycznie pierwszy, wizualnie drugi */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight order-2 max-w-4xl mx-auto text-foreground">
            Jak wynająć taxi zastępcze tej samej klasy{' '}
            <br className="hidden sm:inline" />
            <span className="text-gold-700">co uszkodzony pojazd?</span>
            
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
          <h3 className="text-base sm:text-lg font-semibold mb-4 order-1 max-w-3xl mx-auto text-gold-700">
            Skontaktuj się z nami jeśli potrzebujesz samochodu zastępczego
          </h3>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="relative group"
            >
              {/* Connecting line - tylko na desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 z-0">
                  <motion.div 
                    className="h-full rounded-full bg-border"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                  />
                </div>
              )}

              {/* Step Content */}
              <div className="relative z-10 text-center">
                {/* Icon Circle with Number */}
                <div className="relative inline-block mb-6">
                  <motion.div 
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      index === 2 ? 'bg-gold-700' : 'bg-gray-800'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Number Badge - directly on the icon */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg border-2 border-white bg-gold-700">
                    {step.id}
                  </div>
                </div>

                {/* Step Title */}
                <h4 className="text-lg sm:text-xl font-bold mb-4 group-hover:text-opacity-80 transition-colors text-foreground">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-sm sm:text-base leading-relaxed text-center lg:text-left text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-8 py-6 rounded-2xl bg-gold-50">
            <div className="text-center sm:text-left">
              <h5 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                Potrzebujesz pomocy z procesem?
              </h5>
              <p className="text-sm sm:text-base text-muted-foreground">
                Nasi specjaliści pomogą Ci na każdym kroku
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handlePhoneCall('+48536565565')}
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-white cursor-pointer bg-gold-700"
                type="button"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zadzwoń teraz
              </button>
              
              <a
                href="#kontakt"
                onClick={handleScrollToContact}
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 cursor-pointer text-gold-700 border-gold-700 bg-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Napisz do nas
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default memo(RentalProcessSection);