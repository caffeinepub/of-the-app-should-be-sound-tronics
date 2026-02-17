import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import CatalogSection from '../components/sections/CatalogSection';

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <CatalogSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
