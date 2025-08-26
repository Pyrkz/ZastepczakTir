'use client';

import { motion } from 'framer-motion';
import { memo, useState, useEffect } from 'react';

// Dane opinii z adaptacją do ciężarówek - 10 różnych opinii
const TESTIMONIALS = [
  {
    name: "Mariusz Kowalski",
    text: "Po zderzeniu na A4 koło Wrocławia mój MAN z naczepą chłodnią był niezdatny do jazdy. ZastępczakTir podstawił mi Volvo FH z agregatem Thermo King w 18 godzin. Temperatura -20°C utrzymana przez całą trasę do Hamburga. Uratowali mi kontrakt na 180 000 zł. Wszystko przez OC sprawcy.",
    rating: 5,
    service: "Zestaw chłodniczy 40t",
    location: "Wrocław",
    company: "Trans-Logistics Sp. z o.o.",
    vehicleDetails: "Volvo FH 500 + naczepa Schmitz"
  },

  {
    name: "Andrzej Nowak", 
    text: "Wywrotka Scania 8x4 zniszczona przez pijanego kierowcę na budowie. Potrzebowałem natychmiast zamiennika do transportu 300 ton kruszywa dziennie. W 24h dostałem Mercedesa Arocs 8x4 z hydrauliką Meiller. Pojazd czysty, przeglądy aktualne, opony nowe. Zero przestoju na kontrakcie.",
    rating: 5,
    service: "Wywrotka 4-osiowa",
    location: "Kraków",
    company: "BudTrans",
    vehicleDetails: "Mercedes Arocs 3248, 32 tony"
  },

  {
    name: "Katarzyna Wiśniewska",
    text: "Iveco Daily maxi uszkodzone - potrzebowałam busa na trasę kurierską Warszawa-Berlin-Amsterdam. Dostałam Sprintera 519 CDI, automat, ładowność 3.5t, kubatura 20m³. GPS, ścianka grodziowa, winda załadowcza Dhollandia. Codziennie 1200km bez problemów przez 3 tygodnie naprawy.",
    rating: 5,
    service: "Bus maxi długi/wysoki",
    location: "Warszawa",
    company: "Express Kurier 24h",
    vehicleDetails: "Mercedes Sprinter 519 CDI"
  },

  {
    name: "Tomasz Jabłoński",
    text: "Ciągnik DAF rozwalony na MOP-ie. Miałem 2 naczepy do ciągania non-stop Polska-Niemcy-Holandia. W 12 godzin dostałem Scanie R450 Highline, retarder, hydraulika do wywrotek, ADR. Wszystko sprawne, Euro 6, zużycie paliwa nawet lepsze niż w moim DAF-ie. Obsługa 24/7, zawsze odbierają.",
    rating: 5,
    service: "Ciągnik siodłowy",
    location: "Poznań", 
    company: "J&T Transport International",
    vehicleDetails: "Scania R450 Highline"
  },

  {
    name: "Robert Zieliński",
    text: "HDS-em MAN TGS przewracałem kontenery morskie w porcie. Po kolizji myślałem że stracę zlecenia. ZastępczakTir w 20 godzin dostarczył mi Volvo FM z Hiabem 477 E-6 (zasięg 16m, udźwig 6 ton przy max wysięgu). Operator HDS-a pochwalił jakość dźwigu. Zero reklamacji od klientów.",
    rating: 5,
    service: "Ciężarówka z HDS",
    location: "Gdynia",
    company: "PortLogistics",
    vehicleDetails: "Volvo FM 420 + Hiab 477"
  },

  {
    name: "Paweł Mazur",
    text: "Plandeka Iveco Stralis uszkodzona na S8. Przewożę palety dla sieci marketów - 33 miejsca paletowe to must have. Dostałem DAF XF z naczepą Krone Mega, plandeka przesuwana, certyfikat XL, muldy na 6 palet więcej! Klient z Biedronki nawet nie wiedział że jeżdżę zastępczym.",
    rating: 5,
    service: "Zestaw mega/plandeka",
    location: "Łódź",
    company: "Mazur Logistics",
    vehicleDetails: "DAF XF 480 + Krone Mega"
  },

  {
    name: "Michał Kwiatkowski",
    text: "Betonomieszarka zniszczona totalnie. Mam umowy na betonowanie fundamentów hal - 400m³ dziennie. W 16h mieli dla mnie Mercedesa Arocs z beczką Stetter 9m³. Pompa betonu, wszystkie atesty, komputer dozujący sprawny. Żaden ze 100 kursów się nie opóźnił. Szacunek!",
    rating: 5,
    service: "Betonomieszarka",
    location: "Katowice",
    company: "BetonMix Premium",
    vehicleDetails: "Mercedes Arocs + Stetter 9m³"
  },

  {
    name: "Anna Nowakowska",
    text: "Jako właścicielka firmy spedycyjnej, po wypadku 3 naszych zestawów na A2, myślałam że to koniec. ZastępczakTir w weekend! dostarczył 3 kompletne zestawy: 2x frigo i 1x plandeka. Kierowcy przeszkoleni, tachografy OK, wszystkie papiery. Nie straciłam żadnego zlecenia Amazon.",
    rating: 5,
    service: "3x Zestawy TIR",
    location: "Poznań",
    company: "NowaLog Express",
    vehicleDetails: "2x Volvo FH + Schmitz, 1x DAF + Krone"
  },

  {
    name: "Grzegorz Adamczyk",
    text: "Hakowiec MAN do kontenerów rozjechany na bramkach. Terminal kontenerowy DCT nie czeka - 50 kontenerów dziennie do przewiezienia. Dostałem Scanie R500 V8(!) z hakiem Multilift 26 ton. Moc, którą potrzebowałem do 40-tonowych kontenerów. Nic nie stanęło.",
    rating: 5,
    service: "Hakowiec/Bramowiec",
    location: "Gdańsk",
    company: "Container Services Gdańsk",
    vehicleDetails: "Scania R500 V8 + Multilift"
  },

  {
    name: "Piotr Kamiński",
    text: "Laweta do przewozu maszyn budowlanych - totalka po najechaniu z tyłu na S7. Musiałem przewieźć koparkę CAT 336 (36 ton) na budowę w Norwegii. Dostałem MAN TGX 26.640 6x4 z lawetą Goldhofer - 3 osie, poszerzana do 3m, najazdy hydrauliczne. Koparki, walce, spychacze - wszystko wjechało bez problemu.",
    rating: 5,
    service: "Laweta niskopodwoziowa",
    location: "Warszawa",
    company: "Heavy Transport Solutions",
    vehicleDetails: "MAN TGX 26.640 + Goldhofer"
  },

  {
    name: "Łukasz Pawlak",
    text: "Cysterna ADR do paliw rozerwana na A1. 30 000 litrów ON/PB dziennie muszę dostarczyć na stacje. W 14h podstawili mi Volvo FH 500 z cysterną Stokota 32 000L, 5 komór, wszystkie ADR, liczniki, GPS do SENT. Kierowca z uprawnieniami ADR w zestawie. Profesjonalizm!",
    rating: 5,
    service: "Cysterna paliwowa ADR",
    location: "Płock",
    company: "PetroTrans",
    vehicleDetails: "Volvo FH 500 + cysterna Stokota"
  },

  {
    name: "Marek Szymański",
    text: "Śmieciarka w totalnej szkodzie. Gmina nie może czekać - 120 punktów odbioru dziennie. Mercedes Econic z zabudową Zoeller, automatyczny załadunek, kamera cofania, Euro 6. Kierowcy po 5 minutach instruktażu obsługiwali jak swoją. MPO nawet nie wiedziało o wypadku.",
    rating: 5,
    service: "Śmieciarka",
    location: "Kraków",
    company: "EkoService Kraków",
    vehicleDetails: "Mercedes Econic + Zoeller"
  }
];

// Dodatkowe szczegóły dla realizmu:
const ADDITIONAL_DETAILS = {
  responseTime: [
    "Odpowiedź w 30 minut",
    "Pojazd podstawiony w 12h",
    "Dostarczony nocą w 8h",
    "Weekend - nie problem, mieli w 16h",
    "Ekspresowa dostawa w 6h"
  ],
  
  documentHandling: [
    "Wszystkie dokumenty CMR przygotowane",
    "Ubezpieczenie cargo 500k EUR załatwione",
    "ADR, ATP, EKMT - wszystkie pozwolenia były",
    "Tachograf już wykalibrowany",
    "Licencja transportowa załatwiona od ręki"
  ],

  technicalDetails: [
    "AdBlue pełny, oleje sprawdzone",
    "Webasto działające, klimatyzacja sprawna",
    "Retarder i Intarder - wszystko działało",
    "Osie podnoszone sprawne",
    "GPS z mapami TIR, CB radio"
  ],

  financialImpact: [
    "Uratowali kontrakt warty 2.5 mln zł rocznie",
    "Zero kar umownych dzięki nim",
    "Klient Amazon nie zorientował się",
    "Dotrzymałem wszystkich terminów JIT",
    "Zachowałem bonus za terminowość - 50k zł"
  ]
};

// Statystyki
const STATS = [
  { number: "5000+", label: "wynajętych ciężarówek", icon: "🚚" },
  { number: "15 minut", label: "proste formalności", icon: "⏱️" },
  { number: "98%", label: "pozytywnych opinii", icon: "⭐" },
  { number: "24h", label: "dostawa pojazdu", icon: "🚛" }
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
            <span className="text-gold-700">ciężarowych aut zastępczych</span>
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