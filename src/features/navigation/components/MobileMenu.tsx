'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="lg:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-[#004A7C] transition-colors"
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[73px] bg-white z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <nav className="px-4 py-6 text-left">
              {navigationConfig.mainItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="border-b border-gray-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                {item.href && !item.subMenuCategories ? (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-4 text-gray-700 hover:text-[#004A7C] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <motion.button
                      className="flex items-center justify-between w-full py-4 text-gray-700 hover:text-[#004A7C] transition-colors"
                      onClick={() => toggleItem(item.id)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.title}
                      <motion.div
                        animate={{ rotate: expandedItems.has(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedItems.has(item.id) && item.subMenuCategories && (
                        <motion.div
                          className="pb-4"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.subMenuCategories.map((category, categoryIndex) => (
                            <motion.div
                              key={category.id}
                              className="mb-4"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: categoryIndex * 0.05, duration: 0.3 }}
                            >
                            <h3 className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-50">
                              {category.title}
                            </h3>
                            <ul className="mt-2 space-y-1">
                              {category.items.map((subItem, itemIndex) => (
                                <motion.li
                                  key={subItem.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: categoryIndex * 0.05 + itemIndex * 0.02, duration: 0.3 }}
                                  whileHover={{ x: 10 }}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center gap-2 px-8 py-2 text-sm text-gray-600 hover:text-[#004A7C] hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <motion.div
                                      whileHover={{ x: 5 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <ChevronRight className="w-4 h-4" />
                                    </motion.div>
                                    <div>
                                      <div>{subItem.title}</div>
                                      {subItem.description && (
                                        <p className="text-xs text-gray-500 mt-1">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            ))}
            
            <motion.div 
              className="px-4 py-6 border-t border-gray-200 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigationConfig.mainItems.length * 0.1 + 0.2, duration: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="w-full text-base"
                >
                  <Link href="tel:+48536565565" onClick={() => setIsOpen(false)}>
                    <Phone className="w-5 h-5 mr-2" />
                    Zadzwoń: +48 536 565 565
                  </Link>
                </Button>
              </motion.div>
              
              <div className="mt-4 space-y-2 text-sm text-center">
                <p className="text-gray-600">biuro.motoassist@gmail.com</p>
                <p className="text-gray-600">Dostępny 24/7</p>
              </div>
            </motion.div>
          </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}