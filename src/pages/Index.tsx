import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import PortfolioSection from '@/components/PortfolioSection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import MobileCallButton from '@/components/MobileCallButton';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionSection />
        <BenefitsSection />
        <PortfolioSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
