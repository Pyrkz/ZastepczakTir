import { ExternalLink } from 'lucide-react';
import type { Service } from '../types';

interface ServicesFleetProps {
  services: Service[];
  fleetTypes: string[];
}

export const ServicesFleet = ({ services, fleetTypes }: ServicesFleetProps) => {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">Nasze usługi</h3>
          <nav>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[#A4833B] transition-colors duration-200 inline-flex items-center gap-1 group"
                    style={{ color: '#1f2937 !important' }}
                  >
                    {service.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">Nasza flota</h3>
          <nav>
            <ul className="space-y-2">
              {fleetTypes.map((type) => (
                <li key={type}>
                  <span className="text-sm text-gray-800 cursor-default">
                    {type}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};