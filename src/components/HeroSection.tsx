import { Factory, Clock, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-signage.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Factory, text: t('hero.benefit1') },
    { icon: Clock, text: t('hero.benefit2') },
    { icon: FileCheck, text: t('hero.benefit3') },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Современная световая вывеска"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in">
            {t('hero.title')}
            <span className="text-primary block mt-2">
              {t('hero.titleHighlight')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-6 mb-10 animate-fade-in shadow-glow hover:shadow-glow-hover transition-shadow"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.cta')}
          </Button>

          {/* Benefits */}
          <div className="flex flex-wrap gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-border"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
