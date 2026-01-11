import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainSection from '@/components/PainSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import PortfolioSection from '@/components/PortfolioSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import MobileCallButton from '@/components/MobileCallButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <BenefitsSection />
        <PortfolioSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
