'use client';

import { motion } from 'framer-motion';
import { memo, useState } from 'react';

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

// FAQ Data
const FAQ_DATA = [
  {
    question: "Jak długo mogę korzystać z taxi zastępczego z OC sprawcy?",
    answer: "Okres korzystania z taxi zastępczego jest uzależniony od czasu naprawy uszkodzonego pojazdu lub okresu leczenia po wypadku. Zapewniamy transport już od pierwszego dnia powstania szkody, gdy nie możesz korzystać z własnego pojazdu."
  },
  {
    question: "Czy muszę ponosić jakiekolwiek koszty taxi zastępczego?",
    answer: "Nie, jako osoba poszkodowana w wypadku drogowym nie musisz ponosić kosztów taxi zastępczego. Przysługuje Ci transport całkowicie bezpłatny, finansowany z OC sprawcy. Skontaktuj się z nami już teraz i dowiedz się więcej o darmowym taxi zastępczym."
  },
  {
    question: "Jakie dokumenty będą potrzebne do skorzystania z taxi z OC sprawcy?",
    answer: "Będą potrzebne dokumenty potwierdzające szkodę oraz dokumenty tożsamości. Jeśli masz wątpliwości dotyczące procedur lub formalności, skontaktuj się z nami, a my odpowiemy na wszystkie Twoje pytania. Pomożemy Ci uzyskać bezgotówkowy transport aż do momentu naprawy pojazdu."
  },
  {
    question: "Co się stanie, jeśli naprawa mojego pojazdu przedłuży się?",
    answer: "Jeśli naprawa pojazdu przedłuży się, możesz korzystać z taxi zastępczego aż do momentu jego naprawy. Nasz zespół zajmie się formalnościami tak, aby zasadność całego okresu transportu była uzasadniona wobec ubezpieczyciela."
  },
  {
    question: "Czy mogę skorzystać z taxi zastępczego już od pierwszego dnia powstania szkody?",
    answer: "Tak, możesz skorzystać z taxi zastępczego już od pierwszego dnia powstania szkody. Organizujemy transport na wskazany przez Ciebie adres najszybciej jak to możliwe - często w ciągu kilku godzin od zgłoszenia."
  },
  {
    question: "Jakie rodzaje przejazdów obejmuje taxi zastępcze?",
    answer: "Taxi zastępcze obejmuje przejazdy służbowe, do pracy, na zakupy, do lekarza oraz inne niezbędne podróże związane z codziennym funkcjonowaniem. Wszystkie pojazdy w naszej flocie są w pełni sprawne i zapewniają komfortowy transport."
  },
  {
    question: "Jak mogę skontaktować się z Waszą firmą taxi zastępczych z OC sprawcy?",
    answer: "Oferujemy wiele możliwości kontaktu. Możesz skontaktować się z nami telefonicznie pod numerem 536 565 565, za pośrednictwem formularza kontaktowego na stronie internetowej, a także za pomocą maila szkody@zastepczak.pl."
  },
  {
    question: "Czy mogę skorzystać z taxi zastępczego, jeśli nie jestem sprawcą kolizji?",
    answer: "Tak, możesz skorzystać z taxi zastępczego, jeśli nie jesteś sprawcą kolizji. Bezpłatny transport z OC sprawcy przysługuje poszkodowanym na okres likwidacji szkody lub naprawy pojazdu. Zadzwoń i dowiedz się więcej o usłudze taxi zastępczego."
  }
];

// Animacje
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(0); // Pierwszy element otwarty domyślnie

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
      {/* Subtelne tło */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.08)' }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: 'rgba(164, 131, 59, 0.05)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* H2 - semantycznie pierwszy, wizualnie drugi */}
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight order-2"
            style={{ color: COLORS.text }}
          >
            Najczęściej zadawane pytania{' '}
            <span style={{ color: COLORS.primary }}>(FAQ)</span>
            <br className="hidden md:inline" />
            <span className="text-2xl sm:text-3xl lg:text-4xl block mt-2" style={{ color: COLORS.textSecondary }}>
              o taxi zastępczym z OC sprawcy
            </span>
          </h2>

          {/* H3 - semantycznie drugi, wizualnie pierwszy */}
          <h3 
            className="text-lg font-semibold mb-4 order-1"
            style={{ color: COLORS.primary }}
          >
            <span className="relative flex h-2 w-2 mr-2 inline-flex">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                style={{ backgroundColor: COLORS.success }}
              />
              <span 
                className="relative inline-flex rounded-full h-2 w-2" 
                style={{ backgroundColor: COLORS.success }}
              />
            </span>
            Znajdź odpowiedzi na najważniejsze pytania dotyczące naszych usług
          </h3>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div 
                className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
                style={{ backgroundColor: COLORS.cardBg }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200"
                  style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties}
                  aria-expanded={openItem === index}
                >
                  <div className="flex items-center justify-between">
                    <h4 
                      className="text-lg font-semibold pr-4 leading-tight group-hover:text-opacity-80 transition-colors"
                      style={{ color: COLORS.text }}
                    >
                      {item.question}
                    </h4>
                    
                    {/* Icon */}
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: openItem === index ? COLORS.primary : COLORS.background,
                        transform: openItem === index ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      <svg 
                        className="w-4 h-4 transition-colors duration-300" 
                        fill="none" 
                        stroke={openItem === index ? 'white' : COLORS.primary} 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openItem === index ? 'auto' : 0,
                    opacity: openItem === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div 
                      className="w-full h-px mb-4"
                      style={{ backgroundColor: COLORS.border }}
                    />
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div 
            className="inline-flex items-center px-6 py-4 rounded-2xl border-2 hover:shadow-md transition-all duration-300 group"
            style={{ 
              backgroundColor: COLORS.background,
              borderColor: COLORS.primary
            }}
          >
            <svg 
              className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" 
              fill="none" 
              stroke={COLORS.primary} 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <div className="text-left">
              <p 
                className="text-sm font-medium"
                style={{ color: COLORS.textSecondary }}
              >
                Nie znalazłeś odpowiedzi? 
              </p>
              <p 
                className="text-lg font-bold"
                style={{ color: COLORS.primary }}
              >
                Zadzwoń: +48 536 565 565
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(FAQSection);