'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import { NavItem, MobileMenu } from '@/features/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 lg:px-12 py-3">
        <Link href="/" className="flex items-center">
          {/* NEXT.JS IMAGE - z poprawną konfiguracją */}
          <Image
            src="/ZastepczakTir logo.svg"
            alt="ZastepczakTir.pl logo"
            width={200}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigationConfig.mainItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              variant="gradient"
              size="default"
              className="ml-6 text-base"
            >
              <Link href="tel:+48536565565">
                <Phone className="w-5 h-5 mr-2" />
                +48 536 565 565
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}