'use client';

import Image from 'next/image';

const brandLogos = [
  'alfa-romeo-simple.svg', 'audi-color.svg', 'bmw.svg', 'citroen.svg', 'dacia-new.svg',
  'fiat-2.svg', 'ford-simple.svg', 'hyundai.svg', 'iveco.svg', 'jeep.svg',
  'kia.svg', 'lexus-simple.svg', 'man-black.svg', 'mazda-new.svg', 'mercedes-simple.svg',
  'mitsubishi.svg', 'nissan.svg', 'opel-new.svg', 'peugeot-simple.svg', 'renault-black.svg',
  'seat.svg', 'skoda-simple.svg', 'suzuki.svg', 'toyota-new.svg', 'volkswagen-simple.svg', 'volvo.svg',
];

export default function BrandSlider() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="relative w-full">
        <div className="animate-slide flex gap-10 w-max px-4">
          {brandLogos.concat(brandLogos).map((logo, index) => (
            <div key={index} className="min-w-[100px] h-16 flex items-center justify-center relative">
              <Image
                src={`/Marki/${logo}`}
                alt={logo.replace('.svg', '').replace('-', ' ')}
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}