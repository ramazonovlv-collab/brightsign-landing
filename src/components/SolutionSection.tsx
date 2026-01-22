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
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={sectionBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('solution.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('solution.subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Steps */}
          <ScrollAnimation direction="left">
            <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex gap-4 p-4 rounded-2xl hover:bg-muted/50 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {/* Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {step.number}
                  </span>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-8 bg-border group-hover:bg-primary/30 -translate-x-1/2 transition-colors duration-300" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </ScrollAnimation>

          {/* Right - Image */}
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover-zoom">
                <img
                  src={productionImage}
                  alt="Производственный цех"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">3-7</p>
                <p className="text-sm opacity-90">{t('solution.badge')}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
