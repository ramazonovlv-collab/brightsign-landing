import tuborg from '@/assets/partners/tuborg.jpg';
import viko from '@/assets/partners/viko.jpg';
import yandexgo from '@/assets/partners/yandexgo.jpg';
import yurta from '@/assets/partners/yurta.jpg';
import yutong from '@/assets/partners/yutong.jpg';
import rybaPila from '@/assets/partners/ryba-pila.jpg';
import tkh from '@/assets/partners/tkh.jpg';
import horoshayaDevochka from '@/assets/partners/horoshaya-devochka.jpg';

const partners = [
  { name: 'Tuborg', logo: tuborg },
  { name: 'Viko', logo: viko },
  { name: 'Yandex Go', logo: yandexgo },
  { name: 'Yurta', logo: yurta },
  { name: 'Yutong', logo: yutong },
  { name: 'Рыба Пила', logo: rybaPila },
  { name: 'ТКХ', logo: tkh },
  { name: 'Хорошая девочка', logo: horoshayaDevochka },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 md:py-20 bg-gradient-to-b from-muted/30 via-muted/30 to-primary/20 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary/20 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
