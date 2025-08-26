import type { FooterData } from '../types';

export const footerData: FooterData = {
  regions: [
    'Dolnośląskie', 'Lubelskie', 'Lubuskie', 'Łódzkie', 'Kujawsko-pomorskie',
    'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie',
    'Pomorskie', 'Śląskie', 'Świętokrzyskie', 'Warmińsko-Mazurskie',
    'Wielkopolskie', 'Zachodniopomorskie',
  ],
  
  insurers: [
    'Allianz', 'Beesafe', 'Benefia', 'Compensa', 'Ergo Hestia',
    'Euroins', 'Europa', 'Generali', 'Gothaer', 'HDI', 'InteRisk',
    'Link4', 'PZU', 'Trasti', 'TUW', 'TUZ', 'Uniqa', 'Warta',
    'Wefox', 'Wiener', 'Inne',
  ],
  
  fleetTypes: [
    'Osobowe', 'Premium', 'Rodzinne', 
    'Dostawcze', 'Specjalistyczne', 'Ciężarowe'
  ],
  
  services: [
    { name: 'Auta zastępcze', url: 'https://zastepczak.pl' },
    { name: 'Tiry zastępcze', url: 'https://zastepczaktir.pl' },
    { name: 'Dopłaty do odszkodowań', url: 'https://zastepczak.pl/doplaty-do-odszkodowan/' },
    { name: 'Naprawy z OC/AC', url: 'https://zastepczak.pl' }
  ],
  
  offices: [
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
  ],
  
  contactInfo: {
    phone: '+48536565565',
    email: 'szkody@zastepczak.pl'
  }
};