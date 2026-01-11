import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import PortfolioSection from '@/components/PortfolioSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import MobileCallButton from '@/components/MobileCallButton';

const SectionDivider = () => (
  <div className="h-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <SolutionSection />
        <SectionDivider />
        <BenefitsSection />
        <SectionDivider />
        <PortfolioSection />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <CTASection />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
