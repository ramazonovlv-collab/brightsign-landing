import { AlertTriangle, Lightbulb, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PainSection = () => {
  const { t } = useLanguage();

  const painPoints = [
    {
      icon: AlertTriangle,
      title: t('pain.card1.title'),
      description: t('pain.card1.desc'),
    },
    {
      icon: Lightbulb,
      title: t('pain.card2.title'),
      description: t('pain.card2.desc'),
    },
    {
      icon: Eye,
      title: t('pain.card3.title'),
      description: t('pain.card3.desc'),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          {t('pain.title')}
        </h2>

        {/* Pain Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Red accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive/60 to-destructive/20 rounded-t-2xl" />
              
              {/* Icon */}
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
