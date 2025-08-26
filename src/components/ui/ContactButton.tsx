'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

interface ContactButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function ContactButton({ href, text, className = "" }: ContactButtonProps) {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Usuwamy # z href jeśli istnieje
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Płynne przewijanie do elementu
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      
      // Opcjonalnie: dodaj offset dla fixed header (jeśli istnieje)
      // setTimeout(() => {
      //   const headerHeight = 80; // wysokość sticky header w px
      //   const elementPosition = targetElement.getBoundingClientRect().top;
      //   const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      //   
      //   window.scrollTo({
      //     top: offsetPosition,
      //     behavior: 'smooth'
      //   });
      // }, 100);
    }
  };

  return (
    <motion.div variants={fadeInUp} className={className}>
      <Button 
        asChild 
        variant="outline"
        size="lg"
        className="w-full font-medium transition-all duration-300 group border-2 hover:shadow-md"
        style={{ 
          borderColor: '#A4833B',
          color: '#A4833B',
          backgroundColor: 'transparent'
        }}
      >
        <a 
          href={href}
          onClick={handleScrollToSection}
          className="inline-flex items-center justify-center gap-2 transition-colors duration-300 cursor-pointer"
          style={{
            // Używamy CSS custom properties dla hover state
            '--hover-bg': '#A4833B',
            '--hover-text': '#ffffff'
          } as React.CSSProperties}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#A4833B';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#A4833B';
          }}
        >
          <MessageCircle className="w-4 h-4" />
          {text}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </Button>
    </motion.div>
  );
}