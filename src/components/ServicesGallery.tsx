import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

// Import backgrounds
import sectionDarkBg from "@/assets/bg/section-dark.jpg";

// Import gallery images
import volumetricImg from "@/assets/gallery/volumetric-compositions.jpg";
import exhibitionImg from "@/assets/gallery/exhibition-stands.jpg";
import interiorImg from "@/assets/gallery/interior-design.jpg";
import lightBoxImg from "@/assets/gallery/light-boxes.jpg";
import printingImg from "@/assets/gallery/large-format-printing.jpg";

// Import portfolio images for gallery works
import porsche1 from "@/assets/portfolio-porsche-1.jpg";
import porsche2 from "@/assets/portfolio-porsche-2.jpg";
import edison1 from "@/assets/portfolio-edison-1.jpg";
import edison2 from "@/assets/portfolio-edison-2.jpg";
import bloomAfter from "@/assets/portfolio-bloom-after.jpg";
import durableAfter from "@/assets/portfolio-durable-after.jpg";
import unomomentoAfter from "@/assets/portfolio-unomomento-after.jpg";
import volumetricKfc from "@/assets/gallery/volumetric-kfc.jpg";

interface ServiceCategory {
  id: string;
  titleKey: string;
  image: string;
  works: {
    image: string;
    title: string;
  }[];
}

const ServicesGallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("volumetric");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategoryWorks, setSelectedCategoryWorks] = useState<{ image: string; title: string }[]>([]);

  const categories: ServiceCategory[] = [
    {
      id: "volumetric",
      titleKey: "gallery.volumetric",
      image: volumetricImg,
      works: [
        { image: volumetricImg, title: "Объёмные буквы с подсветкой" },
        { image: volumetricKfc, title: "Объёмная инсталляция KFC" },
        { image: porsche1, title: "Брендирование Porsche" },
        { image: porsche2, title: "Объёмные конструкции Porsche" },
        { image: edison1, title: "Декоративные композиции" },
      ],
    },
    {
      id: "exhibition",
      titleKey: "gallery.exhibition",
      image: exhibitionImg,
      works: [
        { image: exhibitionImg, title: "Выставочный стенд премиум" },
        { image: edison1, title: "Стенд Edison" },
        { image: edison2, title: "Оформление экспозиции" },
        { image: porsche1, title: "Презентационная зона" },
      ],
    },
    {
      id: "interior",
      titleKey: "gallery.interior",
      image: interiorImg,
      works: [
        { image: interiorImg, title: "Интерьерное оформление" },
        { image: bloomAfter, title: "Оформление ресторана Bloom" },
        { image: durableAfter, title: "Брендирование офиса" },
        { image: unomomentoAfter, title: "Химчистка Unomomento" },
      ],
    },
    {
      id: "lightbox",
      titleKey: "gallery.lightbox",
      image: lightBoxImg,
      works: [
        { image: lightBoxImg, title: "Световой короб премиум" },
        { image: edison2, title: "Световая вывеска Edison" },
        { image: porsche2, title: "Лайтбокс Porsche" },
        { image: bloomAfter, title: "Неоновые вывески" },
      ],
    },
    {
      id: "printing",
      titleKey: "gallery.printing",
      image: printingImg,
      works: [
        { image: printingImg, title: "Широкоформатная печать" },
        { image: durableAfter, title: "Баннерная продукция" },
        { image: unomomentoAfter, title: "Рекламные постеры" },
        { image: bloomAfter, title: "Печать на пленке" },
      ],
    },
  ];

  const activeService = categories.find((c) => c.id === activeCategory);

  const openGallery = (works: { image: string; title: string }[], startIndex: number = 0) => {
    setSelectedCategoryWorks(works);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedCategoryWorks.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedCategoryWorks.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={sectionDarkBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background/80 to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("gallery.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Tabs */}
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium
                  transition-all duration-300 ease-out
                  ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                  }
                `}
              >
                {t(category.titleKey)}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Main Gallery Display */}
        <ScrollAnimation delay={0.2}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {/* Featured Image with Gallery Button */}
                <div className="relative group cursor-pointer" onClick={() => activeService && openGallery(activeService.works)}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                    <img
                      src={activeService?.image}
                      alt={t(activeService?.titleKey || "")}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Gallery indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                      <Images className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">
                        {activeService?.works.length} {t("gallery.photos")}
                      </span>
                    </div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {t(activeService?.titleKey || "")}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        {t("gallery.clickToView")}
                      </p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Images className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Card */}
                <div className="flex flex-col justify-center">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full">
                    {/* Category icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Images className="w-8 h-8 text-primary" />
                    </div>

                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {t(activeService?.titleKey || "")}
                    </h4>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {t(`gallery.${activeCategory}.desc`)}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-foreground">
                            {t(`gallery.${activeCategory}.feature${i}`)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* View Gallery Button */}
                    <button
                      onClick={() => activeService && openGallery(activeService.works)}
                      className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Images className="w-5 h-5" />
                      {t("gallery.viewWorks")}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollAnimation>

        {/* Works Grid Preview */}
        <ScrollAnimation delay={0.3}>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              {t("gallery.worksInCategory")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeService?.works.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => activeService && openGallery(activeService.works, index)}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium text-center">
                      {work.title}
                    </p>
                  </div>
                  {/* Number badge */}
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Thumbnail Grid */}
        <ScrollAnimation delay={0.4}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative overflow-hidden rounded-xl aspect-[4/3] group
                  ${activeCategory === category.id ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
                `}
              >
                <img
                  src={category.image}
                  alt={t(category.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs md:text-sm font-medium text-center line-clamp-2">
                    {t(category.titleKey)}
                  </p>
                </div>
                {/* Works count badge */}
                <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                  {category.works.length}
                </div>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 border-2 border-primary rounded-xl" />
                )}
              </motion.button>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && selectedCategoryWorks.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
            onClick={closeGallery}
          >
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-medium">
                {currentImageIndex + 1} / {selectedCategoryWorks.length}
              </span>
            </div>

            {/* Main image container */}
            <div className="flex items-center justify-center h-full px-16 py-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedCategoryWorks[currentImageIndex].image}
                    alt={selectedCategoryWorks[currentImageIndex].title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  />
                  {/* Image title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                      {selectedCategoryWorks[currentImageIndex].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Thumbnails strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl max-w-[90vw] overflow-x-auto">
              {selectedCategoryWorks.map((work, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-2 ring-primary scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGallery;
