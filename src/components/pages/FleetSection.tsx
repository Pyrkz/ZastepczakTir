'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';
import Image from 'next/image';

// Usunięto stałe kolorów - teraz używamy Tailwind CSS v4 classes

// Dane pojazdów z kategoryzacją
const FLEET_DATA = {
  'Osobowe': [
    { name: 'Audi A4', image: '/fleet/audi-a4.png' },
    { name: 'Ford Focus', image: '/fleet/Ford-Focus.png' },
    { name: 'Ford Mondeo', image: '/fleet/Ford-Mondeo.png' },
    { name: 'Opel Insignia', image: '/fleet/opel-insignia-b.png' },
    { name: 'Seat Leon', image: '/fleet/Seat-Leon.png' },
    { name: 'Skoda Octavia', image: '/fleet/Skoda-Octavia.png' },
    { name: 'Toyota Avensis', image: '/fleet/Toyota-Avensis.png' },
    { name: 'Toyota Camry', image: '/fleet/toyota-camry.png' }
  ],
  'Premium': [
    { name: 'Audi A6', image: '/fleet/audi-a6.png' },
    { name: 'Audi A8', image: '/fleet/audi-a8.png' },
    { name: 'BMW 3', image: '/fleet/bmw-3.png' },
    { name: 'BMW 5', image: '/fleet/BMW-5.png' },
    { name: 'Jaguar XF', image: '/fleet/Jaguar-XF.png' },
    { name: 'Lexus RX', image: '/fleet/lexus-rx.png' },
    { name: 'BMW M2', image: '/fleet/BMW-M2.png' }
  ],
  'Rodzinne': [
    { name: 'Audi Q7', image: '/fleet/Audi-Q7.png' },
    { name: 'Seat Arona', image: '/fleet/Seat-Arona.png' },
    { name: 'Volvo XC90', image: '/fleet/Volvo-XC90.png' }
  ],
  'Dostawcze': [
    { name: 'Citroen Jumper', image: '/fleet/Citroen-Jumper.png' },
    { name: 'Fiat Doblo', image: '/fleet/Fiat-Doblo.png' },
    { name: 'Fiat Ducato', image: '/fleet/Fiat-Ducato.png' },
    { name: 'Fiat Talento', image: '/fleet/Fiat-Talento.png' },
    { name: 'Ford Transit', image: '/fleet/Ford-Transit.png' },
    { name: 'Opel Movano', image: '/fleet/Opel-Movano.png' },
    { name: 'Peugeot Boxer', image: '/fleet/Peugeot-Boxer.png' },
    { name: 'Volkswagen T5', image: '/fleet/Volkswagen-T5.png' }
  ],
  'Specjalistyczne': [
    { name: 'Kontenery z Windą', image: '/fleet/kontener-winda.jpg' },
    { name: 'Kontenery z Chłodnią', image: '/fleet/kontener-chlodnia.jpg' },
    { name: 'Dostawcze Izoterma', image: '/fleet/dostawcze-izoterma.jpg' },
    { name: 'Dostawcze z Plandeką', image: '/fleet/dostawcze-plandeka.jpg' }
  ],
  'Ciężarowe': [
    { name: 'Ciągniki siodłowe', image: '/fleet/ciagniki-siodlowe.jpg' },
    { name: 'Solówka', image: '/fleet/solowka.jpg' },
    { name: 'Wywrotka', image: '/fleet/wywrotka.jpg' },
    { name: 'Bus', image: '/fleet/bus.jpg' }
  ]
} as const;

type CategoryKey = keyof typeof FLEET_DATA;

// Animacje
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

function FleetSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('Osobowe');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  
  const categories = Object.keys(FLEET_DATA) as CategoryKey[];
  const currentVehicles = FLEET_DATA[activeCategory];
  
  // Responsive vehicles per slide
  const getVehiclesPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;  // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3; // fallback
  };

  const [vehiclesPerSlide, setVehiclesPerSlide] = useState(3);
  
  // Update vehicles per slide on window resize
  useEffect(() => {
    const handleResize = () => {
      setVehiclesPerSlide(getVehiclesPerSlide());
      setCurrentSlide(0); // Reset slide when changing layout
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.ceil(currentVehicles.length / vehiclesPerSlide);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlides - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlides - 1 ? prev + 1 : 0));
  };

  const getCurrentSlideVehicles = () => {
    const startIndex = currentSlide * vehiclesPerSlide;
    return currentVehicles.slice(startIndex, startIndex + vehiclesPerSlide);
  };

  const handleCategoryChange = (category: CategoryKey) => {
    setActiveCategory(category);
    setCurrentSlide(0);
    // Reset image states when category changes
    setImageErrors(new Set());
  };

  const handleImageError = (imageSrc: string) => {
    setImageErrors(prev => new Set(prev).add(imageSrc));
  };

  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gold-700/8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header z poprawną semantyką i CSS order */}
        <motion.div 
          className="text-center mb-8 lg:mb-16 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 - semantycznie pierwszy, wizualnie drugi */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight order-2 px-4 text-gray-900">
            Nasza rozbudowana flota{' '}
            <br className="hidden sm:inline" />
            <span className="text-gold-700">gwarantuje dopasowanie pojazdu</span>
            
            {/* Dekoracyjna linia */}
            <motion.div 
              className="w-16 sm:w-20 h-1 mx-auto mt-3 lg:mt-4 rounded-full bg-gold-700"
              initial={{ width: 0 }}
              whileInView={{ width: typeof window !== 'undefined' && window.innerWidth < 640 ? 64 : 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>

          {/* H3 - semantycznie drugi, wizualnie pierwszy */}
          <h3 className="text-base sm:text-lg font-semibold mb-4 order-1 px-4 text-gold-700">
            Dziesiątki modeli pojazdów - znajdziemy odpowiednik Twojego taxi
          </h3>
        </motion.div>

        {/* Opis */}
        <motion.div
          className="text-center mb-8 lg:mb-12 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 lg:mb-4 text-gray-600">
            Dzięki szerokiemu parkowi pojazdów możemy zapewnić Ci pojazd zastępczy w tej samej klasie lub wyższej niż Twoje uszkodzone taxi.
            Dysponujemy samochodami osobowymi, premium, rodzinnymi oraz specjalistycznymi pojazdami dostawczymi i ciężarowymi.
          </p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600">
            Niezależnie od marki i modelu Twojego taxi, w naszej flocie znajdziesz odpowiedni pojazd zastępczy, który pozwoli Ci kontynuować działalność bez przestojów.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-white bg-gray-900 transform scale-105 shadow-lg'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Vehicle Slider */}
        <motion.div 
          className="relative px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Navigation Buttons - tylko na desktop */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-2 xl:-left-12 z-10">
            <button
              onClick={handlePrevSlide}
              disabled={maxSlides <= 1}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed text-gold-700"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-2 xl:-right-12 z-10">
            <button
              onClick={handleNextSlide}
              disabled={maxSlides <= 1}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed text-gold-700"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-between items-center mb-4">
            <button
              onClick={handlePrevSlide}
              disabled={maxSlides <= 1}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-gold-700"
            >
              <ChevronLeft size={20} />
            </button>
            
            <span className="text-sm font-medium text-gray-600">
              {currentSlide + 1} / {maxSlides}
            </span>
            
            <button
              onClick={handleNextSlide}
              disabled={maxSlides <= 1}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-gold-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Vehicles Grid */}
          <div className="overflow-visible rounded-xl lg:rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentSlide}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                {getCurrentSlideVehicles().map((vehicle) => (
                  <motion.div
                    key={vehicle.name}
                    variants={cardVariants}
                    className="group relative"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="block bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      {/* Vehicle Image */}
                      <div className="aspect-[4/3] sm:aspect-[16/10] bg-gray-100 relative">
                        {!imageErrors.has(vehicle.image) ? (
                          <>
                            <Image
                              src={vehicle.image}
                              alt={vehicle.name}
                              fill
                              className="object-cover"
                              onError={() => handleImageError(vehicle.image)}
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            
                            {/* Category badge */}
                            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md bg-gold-700">
                              {activeCategory}
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Fallback when image fails to load */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <div className="text-center">
                                <svg 
                                  className="w-16 h-16 mx-auto mb-2 opacity-50 text-gold-700" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 9a2 2 0 002 2h8a2 2 0 002-2l-2-9m-8 0V6a2 2 0 012-2h4a2 2 0 012 2v1" />
                                </svg>
                                <p className="text-sm font-medium text-gray-600">
                                  {vehicle.name}
                                </p>
                              </div>
                            </div>
                            {/* Category badge */}
                            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md bg-gold-700">
                              {activeCategory}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Vehicle Info */}
                      <div className="p-5 sm:p-6 lg:p-8">
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold transition-colors text-center text-gray-900">
                          {vehicle.name}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          {maxSlides > 1 && (
            <div className="flex justify-center mt-6 lg:mt-8 gap-2">
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => setCurrentSlide(slideIndex)}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${currentSlide === slideIndex ? 'bg-gold-700' : 'bg-gray-300'}`}
                  aria-label={`Przejdź do slajdu ${slideIndex + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
        
      </div>
    </section>
  );
}

export default memo(FleetSection);