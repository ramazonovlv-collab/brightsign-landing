import { Award, Clock, Gem, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollAnimation from './ScrollAnimation';
import sectionDarkBg from '@/assets/bg/section-dark.jpg';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Award,
      title: t('benefits.card1.title'),
      description: t('benefits.card1.desc'),
      gradient: 'from-primary/20 to-blue-500/20',
      iconColor: 'text-primary',
    },
    {
      icon: Clock,
      title: t('benefits.card2.title'),
      description: t('benefits.card2.desc'),
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-500',
    },
    {
      icon: Gem,
      title: t('benefits.card3.title'),
      description: t('benefits.card3.desc'),
      gradient: 'from-amber-500/20 to-yellow-500/20',
      iconColor: 'text-amber-500',
    },
    {
      icon: Heart,
      title: t('benefits.card4.title'),
      description: t('benefits.card4.desc'),
      gradient: 'from-accent/20 to-rose-500/20',
      iconColor: 'text-accent',
    },
  ];

  const serviceLinks = [
    { id: 'volumetric', labelKey: 'gallery.volumetric' },
    { id: 'exhibition', labelKey: 'gallery.exhibition' },
    { id: 'interior', labelKey: 'gallery.interior' },
    { id: 'lightbox', labelKey: 'gallery.lightbox' },
    { id: 'printing', labelKey: 'gallery.printing' },
  ];

  const scrollToService = (serviceId: string) => {
    const gallerySection = document.getElementById('services-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to set active category
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('setServiceCategory', { detail: serviceId }));
      }, 500);
    }
  };

  return (
    <section id="benefits" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={sectionDarkBg} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            {t('benefits.title')}
          </h2>
        </ScrollAnimation>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Service Links */}
        <ScrollAnimation delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">{t('benefits.servicesLabel')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceLinks.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  {t(service.labelKey)}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BenefitsSection;
