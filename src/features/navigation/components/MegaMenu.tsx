'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '@/types/navigation';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface MegaMenuProps {
  item: MenuItem;
}

export function MegaMenu({ item }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (item.href && !item.subMenuCategories) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={item.href}
          target={item.href?.startsWith('http') ? '_blank' : undefined}
          className="flex items-center px-2 py-2 text-gray-700 hover:text-[#004A7C] transition-colors duration-200 font-medium"
        >
          {item.title}
          {item.href?.startsWith('http') && ' ↗'}
        </Link>
      </motion.div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <motion.button
        className={clsx(
          'flex items-center gap-1 px-2 py-2 text-gray-700 hover:text-[#004A7C] transition-colors duration-200 font-medium',
          isOpen && 'text-[#004A7C]'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {item.title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {item.subMenuCategories && isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-0 top-full mt-0 bg-white shadow-xl rounded-lg border border-gray-200 origin-top text-left"
            style={{ minWidth: '800px' }}
          >
            <div className="grid grid-cols-4 gap-6 p-6">
              {item.subMenuCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.05, duration: 0.3 }}
                >
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((subItem, itemIndex) => (
                      <motion.li
                        key={subItem.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.05 + itemIndex * 0.02, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          href={subItem.href}
                          className="block group"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="text-sm text-gray-600 hover:text-[#004A7C] transition-colors duration-200">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                              {subItem.description}
                            </p>
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}