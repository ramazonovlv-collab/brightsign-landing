import { useState } from "react";
import { ChevronLeft, ChevronRight, Building, Calendar, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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
      beforeImage: portfolioUnomomentoBefore,
      afterImage: portfolioUnomomentoAfter,
      title: 'Химчистка "UnoMomento"',
      days: 5,
      task: "Оклейка оракалом",
      result: "Клиентов +40%",
    },
    {
      beforeImage: portfolioDurableBefore,
      afterImage: portfolioDurableAfter,
      title: 'Выставочный стенд "Durable Group"',
      days: 20,
      task: "Выставочный стенд из металоконструкции",
    },
    {
      beforeImage: portfolioBloomBefore,
      afterImage: portfolioBloomAfter,
      title: 'Сеть магазинов косметики "BLOOM"',
      days: 20,
      task: "Стелажи для продукции",
    },
    {
      images: [portfolioEdison1, portfolioEdison2],
      imagePositions: ['60% center', '30% center'],
      title: 'Супермаркет "EDISON"',
      days: 10,
      task: "Световая вывеска + металоконструкция",
      result: "40% поток клиентов + видимость",
    },
    {
      singleImage: portfolioPorsche,
      title: 'Автосалон "Porsche"',
      days: 2,
      task: "Интерьерные картины",
      result: "Атмосфера, имидж, статус",
    },
  ];

  const stats = [
    { value: t("portfolio.stat1"), label: "установлено" },
    { value: t("portfolio.stat2"), label: "на рынке" },
    { value: t("portfolio.stat3"), label: "изготовлено" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6">
          {t("portfolio.title")}
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
              {/* Images */}
              <div className="relative aspect-[4/3]">
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
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">{projects[currentIndex].title}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {projects[currentIndex].days} {t("portfolio.days")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{projects[currentIndex].task}</span>
                  </div>
                  {projects[currentIndex].result && (
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-foreground font-medium">{projects[currentIndex].result}</span>
                    </div>
                  )}
                </div>

                {/* Dots */}
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-border hover:bg-muted-foreground/30"
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
