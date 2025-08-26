import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
import LenisProvider from "@/components/LenisProvider";
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import PremiumFloatingPhone from "@/components/pages/PremiumFloatingPhone";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odbierz Darmowe Taxi Zastępcze z OC Sprawcy Wypadku",
  description: "Odbierz darmowe taxi zastępcze z OC sprawcy wypadku. Profesjonalna obsługa szkód komunikacyjnych, szybka realizacja. Zadzwoń już dziś!",
  keywords: "taxi zastępcze, wypadek samochodowy, szkoda komunikacyjna, auto zastępcze",
  authors: [{ name: "ZastępczakTaxi.pl" }],
  creator: "ZastępczakTaxi.pl",
  publisher: "ZastępczakTaxi.pl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zastepczaktaxi.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ZastępczakTaxi.pl - Taxi Zastępcze po Szkodzie",
    description: "Profesjonalne taxi zastępcze po wypadku. Szybka obsługa, pełen serwis ubezpieczeniowy.",
    url: 'https://zastepczaktaxi.pl',
    siteName: 'ZastępczakTaxi.pl',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZastępczakTaxi.pl - Profesjonalne taxi zastępcze',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ZastępczakTaxi.pl - Taxi Zastępcze po Szkodzie",
    description: "Profesjonalne taxi zastępcze po wypadku samochodowym.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'twój-google-verification-code',
    // other: {
    //   'facebook-domain-verification': 'twój-facebook-verification-code',
    // },
  },
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        {/* Dodatkowe meta tagi dla SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#A4833B" />
        <meta name="msapplication-TileColor" content="#A4833B" />
        <meta name="google-site-verification" content="7Iy1M2s7NTFdpGUT3pbFu4b4uh1RqTuCJuqisNeMnC4" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ZastępczakTaxi" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect dla lepszej wydajności */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Ukrycie ikonki reCAPTCHA */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .grecaptcha-badge {
              visibility: hidden !important;
            }
          `
        }} />
        
        {/* Schema.org JSON-LD dla lepszego SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ZastępczakTaxi.pl",
              "description": "Profesjonalne taxi zastępcze po wypadku samochodowym",
              "url": "https://zastepczaktaxi.pl",
              "telephone": "+48536565565",
              "email": "kontakt@zastepczaktaxi.pl",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PL",
                "addressLocality": "Częstochowa",
                "addressRegion": "Śląskie"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.8118",
                "longitude": "19.1203"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "priceRange": "$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "50.8118",
                  "longitude": "19.1203"
                },
                "geoRadius": "50000"
              },
              "areaServed": [
                "Częstochowa",
                "Katowice", 
                "Sosnowiec",
                "Dąbrowa Górnicza",
                "Będzin",
                "Zawiercie"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Usługi taxi zastępczego",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Taxi zastępcze po wypadku",
                      "description": "Profesjonalne taxi zastępcze po szkodzie komunikacyjnej"
                    }
                  }
                ]
              },
              "sameAs": [
                // "https://www.facebook.com/zastepczaktaxi",
                // "https://www.instagram.com/zastepczaktaxi"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K5ZFP7X7');`
          }}
        />

        {/* Google Analytics - używając next/script */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        <LenisProvider>
          <ReCaptchaProvider 
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          >
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-K5ZFP7X7"
                height="0" 
                width="0" 
                style={{display:'none',visibility:'hidden'}}
              />
            </noscript>
            
            {/* Skip to main content dla accessibility */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
              Przejdź do głównej treści
            </a>
            
            <Header />
            
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <PremiumFloatingPhone />
            <Footer />
          </ReCaptchaProvider>
        </LenisProvider>
      </body>
    </html>
  );
}