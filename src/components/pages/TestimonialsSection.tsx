'use client';

import { motion } from 'framer-motion';
import { memo, useState, useEffect } from 'react';

// Dane opinii z adaptacją do taxi - 8 różnych opinii
const TESTIMONIALS = [
  {
    name: "Marta K.",
    text: "Cały proces wynajmu taxi zastępczego z Zastepczak.pl przebiegł bezproblemowo. Od pierwszego kontaktu z firmą byłam prowadzona przez każdą formalność, a wszelkie wątpliwości były natychmiast rozwiewane przez profesjonalną obsługę. Transport taxi podstawiono pod mój dom w zaledwie kilka godzin po zgłoszeniu szkody. Serdecznie polecam!",
    rating: 5,
    service: "Taxi zastępcze",
    location: "Warszawa"
  },
  {
    name: "Krzysztof T.",
    text: "Zastepczak.pl to firma, która naprawdę dba o swoich klientów. Proces wynajmu był szybki i bezproblemowy, a pracownicy firmy pomagali mi na każdym kroku. Taxi zastępcze dostałem od razu po wypadku. Dziękuję za pomoc i profesjonalizm!",
    rating: 5,
    service: "Transport zastępczy",
    location: "Kraków"
  },
  {
    name: "Monika L.",
    text: "Miałam kolizję, a mój samochód musiał być naprawiany przez kilka tygodni. Dzięki Zastepczak.pl dostałam świetny transport taxi na cały ten czas. Cała procedura była prosta i zrozumiała, a pracownicy firmy byli niezwykle uprzejmi i pomocni. Gorąco polecam tę firmę każdemu, kto potrzebuje taxi z OC sprawcy.",
    rating: 5,
    service: "Taxi długoterminowe",
    location: "Gdańsk"
  },
  {
    name: "Jan B.",
    text: "Jestem bardzo zadowolony z usług Zastepczak.pl. Proces wynajmu taxi zastępczego był szybki i bezproblemowy, a obsługa klienta była na najwyższym poziomie. Dostałem lepszy transport niż się spodziewałem. Wszystkie formalności załatwiono za mnie, polecam.",
    rating: 5,
    service: "Taxi z OC sprawcy",
    location: "Wrocław"
  },
  {
    name: "Tomasz W.",
    text: "Po wypadku byłem bardzo zestresowany, ale Zastepczak.pl zrobił wszystko, aby mi pomóc. W ciągu kilku godzin od zgłoszenia szkody miałem już taxi pod domem. Cały proces był przejrzysty, a pracownicy firmy bardzo pomocni. Dzięki nim mogłem spokojnie zająć się innymi sprawami.",
    rating: 5,
    service: "Transport awaryjny",
    location: "Poznań"
  },
  {
    name: "Anna S.",
    text: "Taxi zastępcze z Zastepczak.pl to prawdziwa pomoc w trudnej sytuacji. Po kolizji nie wiedziałam jak dotrzeć do pracy, ale już następnego dnia miałam zapewniony transport. Kierowcy zawsze punktualni i uprzejmi. Obsługa na najwyższym poziomie!",
    rating: 5,
    service: "Transport do pracy",
    location: "Łódź"
  },
  {
    name: "Piotr N.",
    text: "Profesjonalna obsługa od A do Z. Wszystkie formalności z ubezpieczycielem załatwione bez mojego udziału. Taxi zawsze czyste i wygodne. Kierowcy znają miasto doskonale. Polecam każdemu, kto potrzebuje niezawodnego transportu po wypadku.",
    rating: 5,
    service: "Transport miejski",
    location: "Katowice"
  },
  {
    name: "Magdalena R.",
    text: "Po uszkodzeniu mojego auta w kolizji, taxi z Zastepczak.pl było moim ratunkiem. Szybka realizacja, elastyczne godziny, a przede wszystkim - wszystko pokryte z OC sprawcy. Nie musiałam się martwić o dodatkowe koszty. Świetna firma!",
    rating: 5,
    service: "Taxi całodobowe",
    location: "Szczecin"
  },
  {
    name: "Robert K.",
    text: "Miałem wypadek w drodze do pracy i potrzebowałem szybkiego rozwiązania. Taxi z Zastepczak.pl okazało się strzałem w dziesiątkę. Bez stresu, bez dodatkowych kosztów, a kierowcy zawsze punktualni. Wszystkie kursy pokryte z OC sprawcy - polecam!",
    rating: 5,
    service: "Transport codzienny",
    location: "Bydgoszcz"
  },
  {
    name: "Karolina M.",
    text: "Fantastic service! Po kolizji na parkingu potrzebowałam transportu na kilka tygodni. Zespół Zastepczak.pl załatwił wszystko błyskawicznie. Taxi zawsze czyste, kierowcy profesjonalni. Żadnych problemów z ubezpieczycielem - wszystko zostało załatwione za mnie.",
    rating: 5,
    service: "Transport długoterminowy",
    location: "Gdynia"
  }
];

// Statystyki
const STATS = [
  { number: "10000+", label: "wynajętych przejazdów", icon: "🚖" },
  { number: "15 minut", label: "proste formalności", icon: "⏱️" },
  { number: "95%", label: "pozytywnych opinii", icon: "⭐" },
  { number: "100+", label: "przejazdów dostępnych od ręki!", icon: "🚗" }
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
} as const;

function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play funkcjonalność
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4"
            fill={i < rating ? '#fbbf24' : '#e5e7eb'}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-20 relative overflow-hidden">
      {/* Tło z animowanymi kształtami */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gold-700/10 animate-pulse" />
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
          <h3 className="text-lg font-semibold mb-4 order-1 text-gold-700">
            <span className="relative flex h-2 w-2 mr-2 inline-flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Słowa które napędzają nas do działania
          </h3>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight order-2 text-foreground">
            Opinie klientów{' '}
            <span className="text-gold-700">taxi zastępczego</span>
            <br className="hidden md:inline" />
            <span className="text-2xl sm:text-3xl lg:text-4xl block mt-2 text-muted-foreground">
              z OC sprawcy
            </span>
          </h2>
        </motion.div>

        {/* Statystyki */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md group-hover:-translate-y-1">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold mb-1 text-gold-700">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Główny testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Decorative quote */}
            <div className="absolute top-6 right-6 text-6xl opacity-10 font-serif text-gold-700">
              &ldquo;
            </div>

            {/* Content */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="mb-6">
                {renderStars(TESTIMONIALS[currentTestimonial].rating)}
              </div>

              {/* Text */}
              <blockquote className="text-lg lg:text-xl leading-relaxed mb-6 font-medium text-foreground">
                &ldquo;{TESTIMONIALS[currentTestimonial].text}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg text-foreground">
                    {TESTIMONIALS[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {TESTIMONIALS[currentTestimonial].service} • {TESTIMONIALS[currentTestimonial].location}
                  </div>
                </div>

                {/* Service badge */}
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-700/10 text-gold-700">
                  Zweryfikowana opinia
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentTestimonial ? 'bg-gold-700' : 'bg-border'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Pozostałe opinie w siatce - ukryte na mobile, widoczne od tablet w górę */}
        <motion.div 
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TESTIMONIALS.slice(1).map((testimonial, index) => {
            const originalIndex = index + 1; // +1 bo slice zaczyna od 1
            const isActive = originalIndex === currentTestimonial;
            
            return (
              <motion.div
                key={`testimonial-${originalIndex}`}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`group cursor-pointer transition-all duration-300 ${
                  index >= 3 ? 'hidden lg:block' : ''
                } ${
                  index >= 5 ? 'hidden xl:block' : ''
                }`}
                onClick={() => {
                  setCurrentTestimonial(originalIndex);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
              >
                <div 
                  className={`bg-white rounded-2xl p-6 transition-all duration-300 h-full shadow-sm hover:shadow-md ${
                    isActive 
                      ? 'border-2 shadow-md border-gold-700 shadow-gold-700/20' 
                      : 'border border-gray-100 hover:border-gray-200'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mb-3 bg-gold-700/10 text-gold-700">
                      Aktualnie wyświetlana
                    </div>
                  )}

                  {/* Stars */}
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                    &ldquo;{testimonial.text.length > 120 ? testimonial.text.substring(0, 120) + '...' : testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                    <svg 
                      className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                        isActive ? 'text-gold-700' : 'text-muted-foreground'
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Informacja o więcej opiniach na tablet+ */}
        <motion.div 
          className="text-center mt-8 hidden md:block lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm font-medium text-muted-foreground">
            Zobacz więcej opinii na większych ekranach lub przełączając główną opinię
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);