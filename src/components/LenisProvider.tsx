'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        // smoothTouch: false, // Właściwość nieobsługiwana w najnowszej wersji Lenis
      }}
    >
      {children}
    </ReactLenis>
  );
}