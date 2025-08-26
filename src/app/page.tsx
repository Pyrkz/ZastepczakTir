// src/app/page.tsx
import HeroSection from "@/components/pages/HeroSection";
import BrandSlider from "@/components/pages/BrandSlider";
import BenefitsSection from "@/components/pages/BenefitsSection";
import CoverageMapSection from "@/components/pages/CoverageMapSection";
import InsurersSection from "@/components/pages/InsurersSection";
import FleetSection from "@/components/pages/FleetSection";
import RentalProcessSection from "@/components/pages/RentalProcessSection";
import ContactFormSection from "@/components/pages/ContactFormSection";
import FAQSection from "@/components/pages/FAQSection";
import TestimonialsSection from "@/components/pages/TestimonialsSection";
import OtherServicesSection from "@/components/pages/OtherServicesSection";
import CTASection from "@/components/pages/CTASection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <BrandSlider />
    <BenefitsSection />
    <FleetSection />
    <CoverageMapSection />
    <InsurersSection />
    <RentalProcessSection />
    <ContactFormSection />
    <FAQSection />
    <TestimonialsSection />
    <OtherServicesSection />
    <CTASection />


    </>
  );
}
