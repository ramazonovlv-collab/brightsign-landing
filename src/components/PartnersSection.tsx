import partnersLogos from '@/assets/partners-logos.png';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-16 md:py-20 bg-gradient-to-b from-muted/30 via-muted/30 to-primary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
          {t('partners.title')}
        </h2>
        <img
          src={partnersLogos}
          alt={t('partners.alt')}
          className="w-full max-w-5xl mx-auto object-contain"
        />
      </div>
    </section>
  );
};

export default PartnersSection;
