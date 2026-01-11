import { Factory, Signpost, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCountUp, formatNumber } from '@/hooks/useCountUp';
import heroImage from '@/assets/hero-signage.jpg';

const AnimatedStat = ({ 
  icon: Icon, 
  endValue, 
  suffix, 
  label, 
  delay 
}: { 
  icon: React.ElementType; 
  endValue: number; 
  suffix?: string; 
  label: string; 
  delay: number;
}) => {
  const { count, ref } = useCountUp({ end: endValue, duration: 2000, delay });
  
  return (
    <div
      ref={ref}
      className="bg-card/80 backdrop-blur-sm px-4 py-4 rounded-xl border border-border text-center"
    >
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        {formatNumber(count)}
        {suffix && <span className="text-lg align-super">{suffix}</span>}
      </div>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const TextStat = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="bg-card/80 backdrop-blur-sm px-4 py-4 rounded-xl border border-border text-center">
    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div className="text-sm md:text-base font-semibold text-foreground leading-tight">
      {label}
    </div>
  </div>
);

const HeroSection = () => {
  const { t } = useLanguage();

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
            <AnimatedStat 
              icon={Signpost} 
              endValue={11372} 
              label={t('hero.stat1')} 
              delay={0} 
            />
            <AnimatedStat 
              icon={Factory} 
              endValue={500} 
              suffix="М²" 
              label={t('hero.stat2')} 
              delay={100} 
            />
            <TextStat icon={MapPin} label={t('hero.stat3')} />
            <AnimatedStat 
              icon={Users} 
              endValue={5000} 
              suffix="+" 
              label={t('hero.stat4')} 
              delay={200} 
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
