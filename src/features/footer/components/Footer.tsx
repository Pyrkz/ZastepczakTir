'use client';

import { CompanyInfo } from './CompanyInfo';
import { OfficesList } from './OfficesList';
import { CoverageAreas } from './CoverageAreas';
import { InsuranceCompanies } from './InsuranceCompanies';
import { ServicesFleet } from './ServicesFleet';
import { CallToAction } from './CallToAction';
import { Copyright } from './Copyright';
import { useFooterActions } from '../hooks/useFooterActions';
import { footerData } from '../data/footerData';

export default function Footer() {
  const { handlePhoneCall, handleScrollToContact } = useFooterActions();

  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6">
            <CompanyInfo 
              contactInfo={footerData.contactInfo}
              onPhoneCall={handlePhoneCall}
            />
            <OfficesList offices={footerData.offices} />
          </div>
          
          <CoverageAreas regions={footerData.regions} />
          
          <InsuranceCompanies insurers={footerData.insurers} />
          
          <ServicesFleet 
            services={footerData.services}
            fleetTypes={footerData.fleetTypes}
          />
        </div>

        <CallToAction 
          phoneNumber={footerData.contactInfo.phone}
          onPhoneCall={handlePhoneCall}
          onScrollToContact={handleScrollToContact}
        />
      </div>

      <Copyright />
    </footer>
  );
}