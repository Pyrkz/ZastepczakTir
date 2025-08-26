'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';

// Usunięto stałe kolorów - teraz używamy Tailwind CSS v4 classes

// Lista ubezpieczycieli
const INSURERS = [
  'Allianz', 'Beesafe', 'Benefia', 'Compensa', 'Ergo Hestia',
  'Euroins', 'Europa', 'Generali', 'Gothaer', 'HDI', 'InteRisk',
  'Link4', 'PZU', 'Trasti', 'TUW', 'TUZ', 'Uniqa', 'Warta', 'Wefox', 'Wiener',
] as const;

// Responsive slides per view
const getSlidesPerView = (width: number) => {
  if (width < 640) return 2;  // mobile
  if (width < 768) return 3;  // sm
  if (width < 1024) return 4; // md
  return 5; // lg+
};

function InsurersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = INSURERS.length - slidesPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesPerView, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      const maxIndex = INSURERS.length - slidesPerView;
      return Math.min(maxIndex, prev + 1);
    });
  };

  const maxIndex = INSURERS.length - slidesPerView;
  const visibleInsurers = INSURERS.slice(currentIndex, currentIndex + slidesPerView);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header slidera */}
      <motion.div 
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full border-2 border-gold-700 text-gold-700 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Poprzedni"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-2 rounded-full border-2 border-gold-700 text-gold-700 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Następny"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>

      {/* Slider container */}
      <motion.div 
        className="relative overflow-hidden rounded-2xl p-6 bg-gold-50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onHoverStart={() => setIsAutoPlaying(false)}
        onHoverEnd={() => setIsAutoPlaying(true)}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
          <motion.div 
            className="h-full rounded-full bg-gold-700"
            initial={{ width: '0%' }}
            animate={{ 
              width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` 
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Insurers grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${slidesPerView}, 1fr)`
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {visibleInsurers.map((name, index) => (
              <motion.div
                key={`${name}-${currentIndex}-${index}`}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Card - teraz bez linku */}
                <div 
                  className="block bg-white rounded-xl p-4 border border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-gold-700">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 18.75a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5T9.75 8.25v8.25a1.5 1.5 0 01-1.5 1.5zm6.75-10.5a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V9a1.5 1.5 0 00-1.5-1.5h-3z" />
                    </svg>
                  </div>

                  {/* Company name */}
                  <h5 className="font-bold text-sm mb-1 transition-colors text-gray-900">
                    {name}
                  </h5>

                  {/* Description */}
                  <p className="text-xs text-gray-600">
                    Ubezpieczenia komunikacyjne
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => {
                setCurrentIndex(dotIndex);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === dotIndex ? 'bg-gold-700' : 'bg-gray-300'
              }`}
              aria-label={`Przejdź do slajdu ${dotIndex + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Statistics */}
      <motion.div 
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          { label: 'Ubezpieczycieli', value: `${INSURERS.length}+` },
          { label: 'Lat doświadczenia', value: '10+' },
          { label: 'Wynajętych pojazdów', value: '5000+' },
          { label: 'Zadowolonych taksówkarzy', value: '99%' }
        ].map((stat) => (
          <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50">
            <div className="text-2xl font-bold mb-1 text-gold-700">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default memo(InsurersSlider);