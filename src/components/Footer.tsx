'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  // Funkcja do dzwonienia
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

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

  const regions = [
    'Dolnośląskie', 'Lubelskie', 'Lubuskie', 'Łódzkie', 'Kujawsko-pomorskie',
    'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie',
    'Pomorskie', 'Śląskie', 'Świętokrzyskie', 'Warmińsko-Mazurskie',
    'Wielkopolskie', 'Zachodniopomorskie',
  ];

  const insurers = [
    'Allianz', 'Beesafe', 'Benefia', 'Compensa', 'Ergo Hestia',
    'Euroins', 'Europa', 'Generali', 'Gothaer', 'HDI', 'InteRisk',
    'Link4', 'PZU', 'Trasti', 'TUW', 'TUZ', 'Uniqa', 'Warta',
    'Wefox', 'Wiener', 'Inne',
  ];

  const fleetTypes = [
    'Osobowe', 'Premium', 'Rodzinne', 
    'Dostawcze', 'Specjalistyczne', 'Ciężarowe'
  ];

  const services = [
    { name: 'Auta zastępcze', url: 'https://zastepczak.pl' },
    { name: 'Tiry zastępcze', url: 'https://zastepczaktir.pl' },
    { name: 'Dopłaty do odszkodowań', url: 'https://zastepczak.pl/doplaty-do-odszkodowan/' },
    { name: 'Naprawy z OC/AC', url: 'https://zastepczak.pl' }
  ];

  const offices = [
    {
      city: 'Częstochowa',
      address: 'Równoległa 82/86, 42-216 Częstochowa',
      isMain: true
    },
    {
      city: 'Łódź', 
      address: 'al. Śmigłego-Rydza 42, 93-281 Łódź',
      isMain: false
    },
    {
      city: 'Warszawa',
      address: 'Gordona Bennetta 12, 01-001 Warszawa', 
      isMain: false
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Company Info & Contact */}
          <div className="space-y-6 lg:pr-4">
            <div className="space-y-4">
              <Link href="/" className="inline-block relative w-[180px] h-[60px]">
                <Image
                  src="/ZastepczakTir logo.svg"
                  alt="Zastepczak Logo"
                  fill
                  sizes="180px"
                  priority
                  className="object-contain"
                />
              </Link>
              <p className="text-sm font-medium text-gray-800">
                Zastępczaktaxi.pl – Auta Zastępcze z OC sprawcy
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900">Kontakt</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handlePhoneCall('+48536565565')}
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#A4833B] transition-colors duration-200 group cursor-pointer bg-transparent border-none p-0"
                  type="button"
                >
                  <Phone size={16} className="text-gray-900 group-hover:text-[#A4833B] transition-colors" />
                  <span className="text-gray-900">+48 536 565 565</span>
                </button>
                <a 
                  href="mailto:szkody@zastepczak.pl" 
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#A4833B] transition-colors duration-200 group"
                >
                  <Mail size={16} className="text-gray-900 group-hover:text-[#A4833B] transition-colors" />
                  <span className="text-gray-900">szkody@zastepczak.pl</span>
                </a>
              </div>
            </div>

            {/* Offices */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900">Nasze główne oddziały</h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <MapPin size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-800 leading-relaxed">
                      <div className="font-medium text-gray-900">
                        {office.city} {office.isMain && <span className="text-xs text-[#A4833B] font-semibold">(Główny)</span>}
                      </div>
                      <div>{office.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">Działamy w całej Polsce</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {regions.map((region) => (
                <div 
                  key={region} 
                  className="text-sm text-gray-800 hover:text-[#A4833B] hover:bg-gray-50 transition-all duration-200 py-1 px-2 -mx-2 rounded cursor-pointer"
                >
                  {region}
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Companies */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">Ubezpieczyciele</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {insurers.map((insurer) => (
                <div 
                  key={insurer} 
                  className="text-sm text-gray-800 hover:text-[#A4833B] hover:bg-gray-50 transition-all duration-200 py-1 px-2 -mx-2 rounded cursor-pointer"
                >
                  {insurer}
                </div>
              ))}
            </div>
          </div>

          {/* Services & Fleet */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-gray-900">Nasze usługi</h3>
                <nav>
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <li key={service.name}>
                        <a 
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-[#A4833B] transition-colors duration-200 inline-flex items-center gap-1 group"
                          style={{ color: '#1f2937 !important' }}
                        >
                          {service.name}
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Fleet */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-gray-900">Nasza flota</h3>
                <nav>
                  <ul className="space-y-2">
                    {fleetTypes.map((type) => (
                      <li key={type}>
                        <span className="text-sm text-gray-800 cursor-default">
                          {type}
                        </span>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with CTA */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Potrzebujesz auta zastępczego?
              </h3>
              <p className="text-sm text-gray-600">
                Skontaktuj się z nami już dziś i otrzymaj pomoc w 24h
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handlePhoneCall('+48536565565')}
                className="px-6 py-3 bg-gradient-to-r from-[#A4833B] to-[#dfbc7a] text-white font-medium text-sm rounded-full shadow-sm transform transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 text-center cursor-pointer border-none"
                style={{ color: '#ffffff !important' }}
                type="button"
              >
                Zadzwoń teraz
              </button>
              <a
                href="#kontakt"
                onClick={handleScrollToContact}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium text-sm rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-center cursor-pointer"
              >
                Formularz kontaktowy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© 2025 ZastępczakTir.pl. Wszystkie prawa zastrzeżone.</p>
              <div className="flex items-center gap-4">
                <Link href="/polityka-prywatnosci" className="hover:text-gray-700 transition-colors">
                  Polityka prywatności
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span>Powered by</span>
              <Link 
                href="https://sitefy.pl" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors font-medium"
              >
                Sitefy.pl
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}