// src/app/components/ui/PhoneButton.tsx
'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const phoneButtonVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  tap: { scale: 0.98 }
};

interface PhoneButtonProps {
  phoneNumber: string;
  className?: string;
}

export default function PhoneButton({ phoneNumber, className = "" }: PhoneButtonProps) {
  return (
    <motion.div
      variants={phoneButtonVariants}
      whileHover="hover"
      whileTap="tap"
      className={className}
    >
      <Button 
        asChild
        size="lg"
        className="w-full font-bold text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
        style={{ 
          background: 'linear-gradient(to right, #A4833B, #dfbc7a)',
          color: '#ffffff'
        }}
      >
        <a href={`tel:${phoneNumber}`} className="inline-flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" />
          {phoneNumber}
        </a>
      </Button>
    </motion.div>
  );
}