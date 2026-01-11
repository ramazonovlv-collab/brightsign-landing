import { Factory, Clock, Signpost, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-signage.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Signpost, value: '11 372', label: t('hero.stat1') },
    { icon: Factory, value: '335', suffix: 'М²', label: t('hero.stat2') },
    { icon: MapPin, value: '10', label: t('hero.stat3') },
    { icon: Users, value: '3 996', label: t('hero.stat4') },
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

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm px-4 py-4 rounded-xl border border-border text-center"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                  {stat.suffix && <span className="text-lg align-super">{stat.suffix}</span>}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
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
