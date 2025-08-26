import { MapPin } from 'lucide-react';
import type { Office } from '../types';

interface OfficesListProps {
  offices: Office[];
}

export const OfficesList = ({ offices }: OfficesListProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-gray-900">Nasze główne oddziały</h3>
      <div className="space-y-3">
        {offices.map((office, index) => (
          <div key={index} className="flex items-start gap-3">
            <MapPin size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-800 leading-relaxed">
              <div className="font-medium text-gray-900">
                {office.city} {office.isMain && <span className="text-xs text-[#A4833B] font-semibold">(Główny)</span>}
              </div>
              <div>{office.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};