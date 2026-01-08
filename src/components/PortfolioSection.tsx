import { useState } from 'react';
import { ChevronLeft, ChevronRight, Building, Calendar, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolio1Before from '@/assets/portfolio-1-before.jpg';
import portfolio1After from '@/assets/portfolio-1-after.jpg';
import portfolio2Before from '@/assets/portfolio-2-before.jpg';
import portfolio2After from '@/assets/portfolio-2-after.jpg';
import portfolio3Before from '@/assets/portfolio-3-before.jpg';
import portfolio3After from '@/assets/portfolio-3-after.jpg';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      beforeImage: portfolio1Before,
      afterImage: portfolio1After,
      title: 'Магазин "Электроника"',
      days: 5,
      task: 'Световая вывеска с объёмными буквами',
      result: 'Поток клиентов +40%',
    },
    {
      beforeImage: portfolio2Before,
      afterImage: portfolio2After,
      title: 'Ресторан "Oasis"',
      days: 7,
      task: 'Неоновая вывеска и LED-подсветка фасада',
      result: 'Узнаваемость бренда выросла в 2 раза',
    },
    {
      beforeImage: portfolio3Before,
      afterImage: portfolio3After,
      title: 'Аптека "Здоровье"',
      days: 4,
      task: 'Светодиодный крест и объёмные буквы',
      result: 'Видимость с 350 метров',
    },
  ];

  const stats = [
    { value: t('portfolio.stat1'), label: 'установлено' },
    { value: t('portfolio.stat2'), label: 'на рынке' },
    { value: t('portfolio.stat3'), label: 'изготовлено' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6">
          {t('portfolio.title')}
        </h2>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Slide Content */}
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Before/After Images */}
              <div className="relative aspect-[4/3]">
                {/* Before */}
                <div className="absolute inset-0 w-1/2">
                  <img
                    src={projects[currentIndex].beforeImage}
                    alt="До"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-destructive/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('portfolio.before')}
                  </div>
                </div>
                {/* After */}
                <div className="absolute inset-0 left-1/2 w-1/2">
                  <img
                    src={projects[currentIndex].afterImage}
                    alt="После"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('portfolio.after')}
                  </div>
                </div>
                {/* Divider */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg -translate-x-1/2" />
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {projects[currentIndex].title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {projects[currentIndex].days} {t('portfolio.days')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {projects[currentIndex].task}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground font-medium">
                      {projects[currentIndex].result}
                    </span>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
