import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

// Import gallery images
import volumetricImg from "@/assets/gallery/volumetric-compositions.jpg";
import exhibitionImg from "@/assets/gallery/exhibition-stands.jpg";
import interiorImg from "@/assets/gallery/interior-design.jpg";
import lightBoxImg from "@/assets/gallery/light-boxes.jpg";
import printingImg from "@/assets/gallery/large-format-printing.jpg";

interface ServiceCategory {
  id: string;
  titleKey: string;
  image: string;
  works: {
    image: string;
    titleKey?: string;
  }[];
}

const ServicesGallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("volumetric");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: ServiceCategory[] = [
    {
      id: "volumetric",
      titleKey: "gallery.volumetric",
      image: volumetricImg,
      works: [
        { image: volumetricImg },
      ],
    },
    {
      id: "exhibition",
      titleKey: "gallery.exhibition",
      image: exhibitionImg,
      works: [
        { image: exhibitionImg },
      ],
    },
    {
      id: "interior",
      titleKey: "gallery.interior",
      image: interiorImg,
      works: [
        { image: interiorImg },
      ],
    },
    {
      id: "lightbox",
      titleKey: "gallery.lightbox",
      image: lightBoxImg,
      works: [
        { image: lightBoxImg },
      ],
    },
    {
      id: "printing",
      titleKey: "gallery.printing",
      image: printingImg,
      works: [
        { image: printingImg },
      ],
    },
  ];

  const activeService = categories.find((c) => c.id === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-background">
      <div className="container mx-auto px-4">
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
                {/* Featured Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                    <img
                      src={activeService?.image}
                      alt={t(activeService?.titleKey || "")}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {t(activeService?.titleKey || "")}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        {t("gallery.professional")}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-8 right-8 w-12 h-12 border border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                  </div>
                </div>

                {/* Info Card */}
                <div className="flex flex-col justify-center">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full">
                    {/* Category icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <div className="w-8 h-8 rounded-lg bg-primary" />
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

                    {/* CTA */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      {t("gallery.order")}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollAnimation>

        {/* Thumbnail Grid */}
        <ScrollAnimation delay={0.3}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {categories.map((category, index) => (
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
                {activeCategory === category.id && (
                  <div className="absolute inset-0 border-2 border-primary rounded-xl" />
                )}
              </motion.button>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGallery;
