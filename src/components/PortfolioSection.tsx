import { useState } from "react";
import { ChevronLeft, ChevronRight, Building, Calendar, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";
import sectionLightBg from "@/assets/bg/section-light.jpg";
import portfolio1Before from "@/assets/portfolio-1-before.jpg";
import portfolio1After from "@/assets/portfolio-1-after.jpg";
import portfolio2Before from "@/assets/portfolio-2-before.jpg";
import portfolio2After from "@/assets/portfolio-2-after.jpg";
import portfolio3Before from "@/assets/portfolio-3-before.jpg";
import portfolio3After from "@/assets/portfolio-3-after.jpg";
import portfolioUnomomentoAfter from "@/assets/portfolio-unomomento-after.jpg";
import portfolioUnomomentoBefore from "@/assets/portfolio-unomomento-before.jpg";
import portfolioDurableBefore from "@/assets/portfolio-durable-before.jpg";
import portfolioDurableAfter from "@/assets/portfolio-durable-after.jpg";
import portfolioBloomBefore from "@/assets/portfolio-bloom-before.jpg";
import portfolioBloomAfter from "@/assets/portfolio-bloom-after.jpg";
import portfolioEdison1 from "@/assets/portfolio-edison-1.jpg";
import portfolioEdison2 from "@/assets/portfolio-edison-2.jpg";
import portfolioPorsche from "@/assets/portfolio-porsche.jpg";

interface Project {
  beforeImage?: string;
  afterImage?: string;
  images?: string[];
  imagePositions?: [string, string];
  singleImage?: string;
  singleImagePosition?: string;
  title: string;
  days: number;
  task: string;
  result?: string;
}

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      singleImage: portfolioPorsche,
      title: t('portfolio.project5.title'),
      days: 2,
      task: t('portfolio.project5.task'),
      result: t('portfolio.project5.result'),
    },
    {
      beforeImage: portfolioDurableBefore,
      afterImage: portfolioDurableAfter,
      title: t('portfolio.project2.title'),
      days: 20,
      task: t('portfolio.project2.task'),
    },
    {
      beforeImage: portfolioBloomBefore,
      afterImage: portfolioBloomAfter,
      title: t('portfolio.project3.title'),
      days: 20,
      task: t('portfolio.project3.task'),
    },
    {
      images: [portfolioEdison1, portfolioEdison2],
      imagePositions: ['60% center', '30% center'],
      title: t('portfolio.project4.title'),
      days: 10,
      task: t('portfolio.project4.task'),
      result: t('portfolio.project4.result'),
    },
    {
      beforeImage: portfolioUnomomentoBefore,
      afterImage: portfolioUnomomentoAfter,
      title: t('portfolio.project1.title'),
      days: 5,
      task: t('portfolio.project1.task'),
      result: t('portfolio.project1.result'),
    },
  ];

  const stats = [
    { value: t("portfolio.stat1"), label: t("portfolio.stat1.label") },
    { value: t("portfolio.stat2"), label: t("portfolio.stat2.label") },
    { value: t("portfolio.stat3"), label: t("portfolio.stat3.label") },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="relative py-12 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={sectionLightBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <ScrollAnimation>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4 md:mb-6">
            {t("portfolio.title")}
          </h2>
        </ScrollAnimation>

        {/* Stats */}
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-8 md:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-primary mb-0.5 md:mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Slider */}
        <ScrollAnimation delay={0.2}>
          <div className="relative max-w-5xl mx-auto px-8 md:px-0">
            {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-lg md:-translate-x-12"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-lg md:translate-x-12"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          {/* Slide Content */}
          <div className="bg-card rounded-2xl md:rounded-3xl border border-border overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Images */}
              <div className="relative aspect-[4/3] md:aspect-[4/3]">
                {projects[currentIndex].singleImage ? (
                  /* Single image mode - full width */
                  <img
                    src={projects[currentIndex].singleImage}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: projects[currentIndex].singleImagePosition || 'center' }}
                  />
                ) : projects[currentIndex].images ? (
                  /* Gallery mode - two images side by side */
                  <>
                    <div className="absolute inset-0 w-1/2">
                      <img
                        src={projects[currentIndex].images[0]}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: projects[currentIndex].imagePositions?.[0] || 'center' }}
                      />
                    </div>
                    <div className="absolute inset-0 left-1/2 w-1/2">
                      <img
                        src={projects[currentIndex].images[1]}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: projects[currentIndex].imagePositions?.[1] || 'center' }}
                      />
                    </div>
                  </>
                ) : (
                  /* Before/After mode */
                  <>
                    <div className="absolute inset-0 w-1/2">
                      <img src={projects[currentIndex].beforeImage} alt="До" className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-4 bg-destructive/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {t("portfolio.before")}
                      </div>
                    </div>
                    <div className="absolute inset-0 left-1/2 w-1/2">
                      <img src={projects[currentIndex].afterImage} alt="После" className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {t("portfolio.after")}
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg -translate-x-1/2" />
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-8 flex flex-col justify-center">
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-4">{projects[currentIndex].title}</h3>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm md:text-base">
                      {projects[currentIndex].days} {t("portfolio.days")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <Building className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm md:text-base">{projects[currentIndex].task}</span>
                  </div>
                  {projects[currentIndex].result && (
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm md:text-base">{projects[currentIndex].result}</span>
                    </div>
                  )}
                </div>

                {/* Dots */}
                <div className="flex gap-1.5 md:gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-border hover:bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PortfolioSection;
