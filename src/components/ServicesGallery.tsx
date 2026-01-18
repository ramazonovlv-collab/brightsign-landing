import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

// Import backgrounds
import sectionDarkBg from "@/assets/bg/section-dark.jpg";

// Import gallery images
import volumetricImg from "@/assets/gallery/volumetric-compositions.jpg";
import exhibitionStandMain from "@/assets/gallery/exhibition-stand-main.jpg";
import interiorPorsche from "@/assets/gallery/interior-porsche.jpg";
import interiorOffice1 from "@/assets/gallery/interior-office-1.jpg";
import interiorNonBread from "@/assets/gallery/interior-non-bread.jpg";
import interiorMeetingRoom from "@/assets/gallery/interior-meeting-room.jpg";
import interiorBazar from "@/assets/gallery/interior-bazar.jpg";
import interiorStairway from "@/assets/gallery/interior-stairway.jpg";
import interiorCheese from "@/assets/gallery/interior-cheese.jpg";
import interiorStairway2 from "@/assets/gallery/interior-stairway-2.jpg";
import interiorReception from "@/assets/gallery/interior-reception.jpg";
import lightBoxImg from "@/assets/gallery/light-boxes.jpg";
import lightboxEdison1 from "@/assets/gallery/lightbox-edison-1.jpg";
import lightboxEdison2 from "@/assets/gallery/lightbox-edison-2.jpg";
import lightboxGalmart2 from "@/assets/gallery/lightbox-galmart-2.jpg";
import lightboxDafna from "@/assets/gallery/lightbox-dafna.jpg";
import lightboxMessika from "@/assets/gallery/lightbox-messika.jpg";
import lightboxBloom from "@/assets/gallery/lightbox-bloom.jpg";
import lightboxLv from "@/assets/gallery/lightbox-lv.jpg";
import lightboxKaganat from "@/assets/gallery/lightbox-kaganat.jpg";
import lightboxLoccitane from "@/assets/gallery/lightbox-loccitane.jpg";
import lightboxKaspiyka from "@/assets/gallery/lightbox-kaspiyka.jpg";
import printingImg from "@/assets/gallery/large-format-printing.jpg";

// Import portfolio images for gallery works
import porsche1 from "@/assets/portfolio-porsche-1.jpg";
import porsche2 from "@/assets/portfolio-porsche-2.jpg";
import edison1 from "@/assets/portfolio-edison-1.jpg";
import edison2 from "@/assets/portfolio-edison-2.jpg";
import bloomAfter from "@/assets/portfolio-bloom-after.jpg";
import durableAfter from "@/assets/portfolio-durable-after.jpg";
import unomomentoAfter from "@/assets/portfolio-unomomento-after.jpg";
import volumetricGrapes from "@/assets/gallery/volumetric-grapes.jpg";
import volumetricTeapot from "@/assets/gallery/volumetric-teapot.jpg";
import volumetricBird from "@/assets/gallery/volumetric-bird.jpg";
import volumetricKfcBucket from "@/assets/gallery/volumetric-kfc-bucket.jpg";
import volumetricPlants1 from "@/assets/gallery/volumetric-plants-1.jpg";
import volumetricJungle from "@/assets/gallery/volumetric-jungle.jpg";
import volumetricPlants2 from "@/assets/gallery/volumetric-plants-2.jpg";
import volumetricBooks from "@/assets/gallery/volumetric-books.jpg";
import volumetricPencils from "@/assets/gallery/volumetric-pencils.jpg";
import volumetricBookDisplay from "@/assets/gallery/volumetric-book-display.jpg";

// Import exhibition images
import exhibitionDulon from "@/assets/gallery/exhibition-dulon.png";
import exhibitionDafnaChristmas from "@/assets/gallery/exhibition-dafna-christmas.jpg";
import exhibitionDafnaMain from "@/assets/gallery/exhibition-dafna-main.png";
import exhibitionDafnaTowers from "@/assets/gallery/exhibition-dafna-towers.png";
import exhibitionAlubest from "@/assets/gallery/exhibition-alubest.jpg";
import exhibitionChangan from "@/assets/gallery/exhibition-changan.jpg";
import exhibitionOmega from "@/assets/gallery/exhibition-omega.jpg";
import exhibitionAlubestBooth from "@/assets/gallery/exhibition-alubest-booth.jpg";
import exhibitionYtong1 from "@/assets/gallery/exhibition-ytong-1.jpg";
import exhibitionYtong2 from "@/assets/gallery/exhibition-ytong-2.jpg";
import exhibitionDurableMain from "@/assets/gallery/exhibition-durable-main.jpg";

// Import large format printing images
import largeformatManana from "@/assets/gallery/largeformat-manana.jpg";
import largeformatSungroup from "@/assets/gallery/largeformat-sungroup.jpg";
import largeformatPepsi from "@/assets/gallery/largeformat-pepsi.jpg";
import largeformatBlackstar from "@/assets/gallery/largeformat-blackstar.jpg";
import largeformatTherose from "@/assets/gallery/largeformat-therose.jpg";
import largeformatAirastana from "@/assets/gallery/largeformat-airastana.jpg";
import largeformatMakro from "@/assets/gallery/largeformat-makro.jpg";
import largeformatYandex from "@/assets/gallery/largeformat-yandex.jpg";

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
      image: volumetricGrapes,
      works: [
        { image: volumetricTeapot, title: "Подвесная инсталляция чайник Galmart" },
        { image: volumetricBird, title: "Объёмная скульптура птицы Galmart" },
        { image: volumetricKfcBucket, title: "Пекарня NON ХЛЕБ Galmart" },
        { image: volumetricPlants1, title: "Подвесные островки с растениями" },
        { image: volumetricJungle, title: "Декоративные джунгли в ТЦ" },
        { image: volumetricPlants2, title: "Парящие деревья" },
        { image: volumetricBooks, title: "Подвесная инсталляция книги" },
        { image: volumetricPencils, title: "Объёмные карандаши" },
        { image: volumetricBookDisplay, title: "Книжная выставочная композиция" },
      ],
    },
    {
      id: "exhibition",
      titleKey: "gallery.exhibition",
      image: exhibitionDurableMain,
      works: [
        { image: exhibitionDulon, title: "Выставочный стенд Durable Group" },
        { image: exhibitionDafnaChristmas, title: "Новогодняя инсталляция Dafna" },
        { image: exhibitionDafnaMain, title: "Выставочный стенд Dafna" },
        { image: exhibitionDafnaTowers, title: "Подвесные конструкции Dafna" },
        { image: exhibitionAlubest, title: "Стенд Alubest x Modernism" },
        { image: exhibitionChangan, title: "Автомобильный стенд Changan" },
        { image: exhibitionOmega, title: "Выставочный стенд Омега" },
        { image: exhibitionAlubestBooth, title: "Интерактивная будка Alubest" },
        { image: exhibitionYtong1, title: "Выставочный стенд YTONG" },
        { image: exhibitionYtong2, title: "Объёмные буквы YTONG" },
      ],
    },
    {
      id: "interior",
      titleKey: "gallery.interior",
      image: interiorOffice1,
      works: [
        { image: interiorOffice1, title: "Офис Porsche - кабинет" },
        { image: interiorNonBread, title: "Пекарня NON Хлеб" },
        { image: interiorMeetingRoom, title: "Офис Porsche - переговорная" },
        { image: interiorBazar, title: "Sharqona Bozor - Восточный Базар" },
        { image: interiorStairway, title: "Офис Porsche - лестница" },
        { image: interiorCheese, title: "Galmart - сырный отдел" },
        { image: interiorStairway2, title: "Офис Porsche - холл" },
        { image: interiorReception, title: "Galmart - ресепшн" },
        { image: interiorPorsche, title: "Интерьерное оформление" },
      ],
    },
    {
      id: "lightbox",
      titleKey: "gallery.lightbox",
      image: lightBoxImg,
      works: [
        { image: lightBoxImg, title: "Световые короба Galmart" },
        { image: lightboxEdison1, title: "Световая вывеска Edison" },
        { image: lightboxEdison2, title: "Edison - фасад" },
        { image: lightboxGalmart2, title: "Galmart - колосья" },
        { image: lightboxKaspiyka, title: "Каспийка Fish Restaurant" },
        { image: lightboxMessika, title: "MESSIKA Paris" },
        { image: lightboxBloom, title: "Bloom Beauty Shop" },
        { image: lightboxLv, title: "Объёмные буквы LV" },
        { image: lightboxKaganat, title: "KAGANAT" },
        { image: lightboxLoccitane, title: "L'OCCITANE en Provence" },
      ],
    },
    {
      id: "printing",
      titleKey: "gallery.printing",
      image: printingImg,
      works: [
        { image: printingImg, title: "Широкоформатная печать" },
        { image: largeformatManana, title: "Оклейка витрин ресторана Manana" },
        { image: largeformatSungroup, title: "Рекламный баннер Sun Group" },
        { image: largeformatPepsi, title: "Крышная установка Pepsi" },
        { image: largeformatBlackstar, title: "Брендирование авто Black Star" },
        { image: largeformatTherose, title: "Брендирование авто The Rose" },
        { image: largeformatAirastana, title: "Оклейка витрин Air Astana" },
        { image: largeformatMakro, title: "Брендирование интерьера Makro" },
        { image: largeformatYandex, title: "Уличные флаги Yandex Lavka" },
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
