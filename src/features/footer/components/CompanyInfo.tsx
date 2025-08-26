import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import type { ContactInfo } from '../types';

interface CompanyInfoProps {
  contactInfo: ContactInfo;
  onPhoneCall: (phoneNumber: string) => void;
}

export const CompanyInfo = ({ contactInfo, onPhoneCall }: CompanyInfoProps) => {
  return (
    <div className="space-y-6 lg:pr-4">
      <div className="space-y-4">
        <Link href="/" className="inline-block relative w-[180px] h-[60px]">
          <Image
            src="/ZastepczakTir logo.svg"
            alt="Zastepczak Logo"
            fill
            sizes="180px"
            priority
            className="object-contain"
          />
        </Link>
        <p className="text-sm font-medium text-gray-800">
          Zastępczaktaxi.pl – Auta Zastępcze z OC sprawcy
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-semibold text-gray-900">Kontakt</h3>
        <div className="space-y-2">
          <button 
            onClick={() => onPhoneCall(contactInfo.phone)}
            className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#A4833B] transition-colors duration-200 group cursor-pointer bg-transparent border-none p-0"
            type="button"
          >
            <Phone size={16} className="text-gray-900 group-hover:text-[#A4833B] transition-colors" />
            <span className="text-gray-900">+48 536 565 565</span>
          </button>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#A4833B] transition-colors duration-200 group"
          >
            <Mail size={16} className="text-gray-900 group-hover:text-[#A4833B] transition-colors" />
            <span className="text-gray-900">{contactInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};