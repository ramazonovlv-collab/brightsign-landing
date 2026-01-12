import { useLanguage } from '@/contexts/LanguageContext';
import partnersImage from '@/assets/partners.jpg';

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          {t('partners.title')}
        </h2>

        {/* Partners Grid */}
        <div className="max-w-5xl mx-auto">
          <img 
            src={partnersImage} 
            alt={t('partners.alt')}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
