import { Ruler, Palette, Settings, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import productionImage from '@/assets/production-workshop.jpg';
import sectionBg from '@/assets/bg/section-light.jpg';
import ScrollAnimation from './ScrollAnimation';

const SolutionSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Ruler,
      number: '01',
      title: t('solution.step1.title'),
      description: t('solution.step1.desc'),
    },
    {
      icon: Palette,
      number: '02',
      title: t('solution.step2.title'),
      description: t('solution.step2.desc'),
    },
    {
      icon: Settings,
      number: '03',
      title: t('solution.step3.title'),
      description: t('solution.step3.desc'),
    },
    {
      icon: Wrench,
      number: '04',
      title: t('solution.step4.title'),
      description: t('solution.step4.desc'),
    },
  ];

  return (
    <section className="relative py-12 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={sectionBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              {t('solution.title')}
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('solution.subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Steps */}
          <ScrollAnimation direction="left">
            <div className="space-y-3 md:space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-muted/50 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {/* Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                    <step.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-5 h-5 md:w-6 md:h-6 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {step.number}
                  </span>
                  {/* Connector line - hidden on mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-0.5 h-8 bg-border group-hover:bg-primary/30 -translate-x-1/2 transition-colors duration-300" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-0.5 md:mb-1 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm group-hover:text-foreground/70 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </ScrollAnimation>

          {/* Right - Image */}
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative group mt-4 md:mt-0">
              <div className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover-zoom">
                <img
                  src={productionImage}
                  alt="Производственный цех"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-primary text-primary-foreground px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg">
                <p className="text-2xl md:text-3xl font-bold">3-7</p>
                <p className="text-xs md:text-sm opacity-90">{t('solution.badge')}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
