import { Ruler, Palette, Settings, Wrench, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import productionImage from '@/assets/production-workshop.jpg';

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
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('solution.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('solution.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                {/* Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-8 bg-border -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-muted-foreground/0 group-hover:text-primary transition-all mt-4 group-hover:translate-x-1" />
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={productionImage}
                alt="Производственный цех"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold">3-7</p>
              <p className="text-sm opacity-90">дней на изготовление</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
