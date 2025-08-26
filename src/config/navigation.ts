import { NavigationConfig } from '@/types/navigation';

export const PROVINCES = [
  'Dolnośląskie',
  'Kujawsko-pomorskie',
  'Lubelskie',
  'Lubuskie',
  'Łódzkie',
  'Małopolskie',
  'Mazowieckie',
  'Opolskie',
  'Podkarpackie',
  'Podlaskie',
  'Pomorskie',
  'Śląskie',
  'Świętokrzyskie',
  'Warmińsko-Mazurskie',
  'Wielkopolskie',
  'Zachodniopomorskie',
] as const;

export const navigationConfig: NavigationConfig = {
  mainItems: [
    {
      id: 'fleet',
      title: 'Nasza flota',
      subMenuCategories: [
        {
          id: 'tractors',
          title: 'Ciągniki siodłowe',
          items: [
            {
              id: 'tractor-hydraulic',
              title: 'Z hydrauliką',
              href: '/flota/ciagniki/hydraulika',
              description: 'Ciągniki siodłowe wyposażone w system hydrauliczny',
            },
            {
              id: 'tractor-low-deck',
              title: 'Low deck',
              href: '/flota/ciagniki/low-deck',
              description: 'Ciągniki siodłowe typu low deck dla niskich naczep',
            },
            {
              id: 'tractor-standard',
              title: 'Standard',
              href: '/flota/ciagniki/standard',
              description: 'Standardowe ciągniki siodłowe',
            },
          ],
        },
        {
          id: 'solo-trucks',
          title: 'Solówka',
          items: [
            {
              id: 'solo-isothermal',
              title: 'Izoterma 18 palet z windą (2 osie)',
              href: '/flota/solowka/izoterma',
              description: 'Pojazd izotermiczny na 18 palet z windą załadunkową',
            },
            {
              id: 'solo-curtain',
              title: 'Plandeka z windą 18 palet (2 osie)',
              href: '/flota/solowka/plandeka',
              description: 'Pojazd z plandeką na 18 palet z windą załadunkową',
            },
            {
              id: 'solo-refrigerated',
              title: 'Chłodnia 18 palet (3 osie)',
              href: '/flota/solowka/chlodnia',
              description: 'Pojazd chłodniczy na 18 palet z trzema osiami',
            },
          ],
        },
        {
          id: 'dump-trucks',
          title: 'Wywrotka',
          items: [
            {
              id: 'dump-8x4',
              title: '8x4',
              href: '/flota/wywrotka/8x4',
              description: 'Wywrotka z napędem 8x4',
            },
            {
              id: 'dump-6x4',
              title: '6x4',
              href: '/flota/wywrotka/6x4',
              description: 'Wywrotka z napędem 6x4',
            },
          ],
        },
        {
          id: 'vans',
          title: 'Bus',
          items: [
            {
              id: 'van-container',
              title: 'Kontener z windą 3,5t',
              href: '/flota/bus/kontener',
              description: 'Bus kontenerowy z windą, DMC 3,5 tony',
            },
            {
              id: 'van-refrigerated',
              title: 'Chłodnia kontener 10 palet 3,5t',
              href: '/flota/bus/chlodnia',
              description: 'Bus chłodniczy na 10 palet, DMC 3,5 tony',
            },
            {
              id: 'van-freezer',
              title: 'Mroźnia blaszak 3,5t',
              href: '/flota/bus/mroznia',
              description: 'Bus mroźniczy typu blaszak, DMC 3,5 tony',
            },
            {
              id: 'van-curtain',
              title: 'Plandeka 10 palet z kurnikiem',
              href: '/flota/bus/plandeka',
              description: 'Bus z plandeką na 10 palet z kurnikiem',
            },
          ],
        },
        {
          id: 'other',
          title: 'Inne',
          items: [
            {
              id: 'other-flatbed',
              title: 'Platforma',
              href: '/flota/inne/platforma',
              description: 'Pojazdy z platformą załadunkową',
            },
            {
              id: 'other-tanker',
              title: 'Cysterna',
              href: '/flota/inne/cysterna',
              description: 'Pojazdy cysternowe',
            },
            {
              id: 'other-special',
              title: 'Pojazdy specjalistyczne',
              href: '/flota/inne/specjalistyczne',
              description: 'Inne pojazdy specjalistyczne',
            },
          ],
        },
      ],
    },
    {
      id: 'substitute-trucks',
      title: 'Tiry zastępcze',
      subMenuCategories: PROVINCES.map((province) => ({
        id: `truck-${province.toLowerCase().replace(/[ś]/g, 's').replace(/[ą]/g, 'a').replace(/[ł]/g, 'l').replace(/[ę]/g, 'e').replace(/[ó]/g, 'o').replace(/[ń]/g, 'n').replace(/[ź]/g, 'z').replace(/[ż]/g, 'z')}`,
        title: province,
        items: [
          {
            id: `truck-${province}-main`,
            title: `Tiry zastępcze ${province}`,
            href: `/tiry-zastepcze/${province.toLowerCase().replace(/[ś]/g, 's').replace(/[ą]/g, 'a').replace(/[ł]/g, 'l').replace(/[ę]/g, 'e').replace(/[ó]/g, 'o').replace(/[ń]/g, 'n').replace(/[ź]/g, 'z').replace(/[ż]/g, 'z')}`,
          },
        ],
      })),
    },
    {
      id: 'substitute-cargo',
      title: 'Ciężarowe auta zastępcze',
      subMenuCategories: PROVINCES.map((province) => ({
        id: `cargo-${province.toLowerCase().replace(/[ś]/g, 's').replace(/[ą]/g, 'a').replace(/[ł]/g, 'l').replace(/[ę]/g, 'e').replace(/[ó]/g, 'o').replace(/[ń]/g, 'n').replace(/[ź]/g, 'z').replace(/[ż]/g, 'z')}`,
        title: province,
        items: [
          {
            id: `cargo-${province}-main`,
            title: `Auta ciężarowe ${province}`,
            href: `/ciezarowe-zastepcze/${province.toLowerCase().replace(/[ś]/g, 's').replace(/[ą]/g, 'a').replace(/[ł]/g, 'l').replace(/[ę]/g, 'e').replace(/[ó]/g, 'o').replace(/[ń]/g, 'n').replace(/[ź]/g, 'z').replace(/[ż]/g, 'z')}`,
          },
        ],
      })),
    },
    {
      id: 'declaration',
      title: 'Oświadczenie sprawcy',
      href: 'https://zastepczak.pl/wp-content/uploads/2023/07/oswiadczenie-sprawcy-wypadku.pdf',
    },
    {
      id: 'contact',
      title: 'Kontakt',
      href: '/kontakt',
    },
  ],
};