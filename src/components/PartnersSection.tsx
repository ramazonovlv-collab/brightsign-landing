import { useLanguage } from '@/contexts/LanguageContext';
import partnersImage from '@/assets/partners.jpg';
import ScrollAnimation from './ScrollAnimation';

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-muted/30 to-primary/20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            {t('partners.title')}
          </h2>
        </ScrollAnimation>

        {/* Partners Grid */}
        <ScrollAnimation delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <img 
              src={partnersImage} 
              alt={t('partners.alt')}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PartnersSection;
