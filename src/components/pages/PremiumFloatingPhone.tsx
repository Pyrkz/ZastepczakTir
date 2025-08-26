'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { memo } from 'react';

const COLORS = {
  primary: '#A4833B',
  primaryDark: '#8f6f32',
  white: '#ffffff',
  success: '#10b981',
  shadow: 'rgba(0, 0, 0, 0.1)',
  backdrop: 'rgba(0, 0, 0, 0.5)'
} as const;

interface StablePhoneCTAProps {
  phoneNumber?: string;
  showAfterScroll?: number;
}

function StablePhoneCTA({ 
  phoneNumber = '+48 536 565 565',
  showAfterScroll = 200 
}: StablePhoneCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Device detection
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Simple scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  if (!isVisible) return null;

  // MOBILE: Full-width bottom bar
  if (isMobile) {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
        style={{ 
          background: `linear-gradient(to top, ${COLORS.white}, ${COLORS.white}f0)`,
          backdropFilter: 'blur(10px)',
          borderTop: `1px solid ${COLORS.primary}20`
        }}
      >
        <div className="max-w-sm mx-auto">
          <button
            onClick={handlePhoneCall}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl shadow-lg active:scale-[0.98] transition-transform duration-150"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
              color: COLORS.white
            }}
          >
            {/* Phone icon */}
            <Phone size={24} color={COLORS.white} />
            
            {/* Text content */}
            <div className="flex-1 text-center">
              <div className="font-bold text-lg leading-tight">
                Zadzwoń teraz
              </div>
              <div className="text-sm opacity-90 leading-tight">
                {phoneNumber}
              </div>
            </div>

            {/* Status indicator */}
            <div className="relative">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS.success }}
              />
              <div 
                className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
                style={{ backgroundColor: COLORS.success }}
              />
            </div>
          </button>

          {/* Availability text */}
          <div className="text-center mt-2 text-xs" style={{ color: COLORS.primary }}>
            <span className="font-medium">Dostępni 24/7</span> • Bezpłatna konsultacja
          </div>
        </div>
      </motion.div>
    );
  }

  // DESKTOP: Expandable floating button
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[9999]"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Tooltip */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full right-0 mb-3 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap"
          style={{ 
            backgroundColor: COLORS.white,
            border: `1px solid ${COLORS.primary}30`,
            color: COLORS.primary
          }}
        >
          <div className="flex items-center gap-2 text-sm">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS.success }}
            />
            <div>
              <div className="font-semibold">Dostępni 24/7</div>
              <div className="text-xs opacity-70">Bezpłatna konsultacja</div>
            </div>
          </div>
          
          {/* Arrow */}
          <div 
            className="absolute top-full right-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent"
            style={{ borderTopColor: COLORS.white }}
          />
        </motion.div>
      )}

      {/* Main expandable button */}
      <motion.button
        onClick={handlePhoneCall}
        className="relative flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
          minWidth: '64px',
          height: '64px'
        }}
        animate={{
          width: isExpanded ? '200px' : '64px',
          paddingLeft: isExpanded ? '20px' : '0px',
          paddingRight: isExpanded ? '20px' : '0px'
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Phone Icon */}
        <motion.div 
          className="flex items-center justify-center flex-shrink-0"
          animate={{ 
            marginRight: isExpanded ? '12px' : '0px'
          }}
          transition={{ duration: 0.25 }}
        >
          <Phone 
            size={24} 
            color={COLORS.white}
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="overflow-hidden">
          <motion.div
            animate={{
              width: isExpanded ? '120px' : '0px',
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="whitespace-nowrap"
          >
            <div className="text-left">
              <div 
                className="text-sm font-bold leading-tight"
                style={{ 
                  color: COLORS.white,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Zadzwoń teraz
              </div>
              <div 
                className="text-xs leading-tight opacity-90"
                style={{ 
                  color: COLORS.white,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {phoneNumber}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Status dot - perfectly positioned */}
        <div 
            className="absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-white transform translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: COLORS.success }}
            >
            {/* Pulsing ring effect - teraz idealnie wycentrowany */}
            <motion.div 
                className="absolute inset-0 w-4 h-4 rounded-full -m-[2px]"
                style={{ backgroundColor: COLORS.success }}
                animate={{ 
                scale: [1, 1.8],
                opacity: [0.6, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
        </div>
      </motion.button>

      {/* Subtle glow */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 blur-lg pointer-events-none -z-10"
        style={{ 
          backgroundColor: COLORS.primary,
          transform: 'scale(1.2)'
        }}
      />
    </motion.div>
  );
}

export default memo(StablePhoneCTA);