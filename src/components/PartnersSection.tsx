import partnersImage from '@/assets/partners.jpg';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 md:py-20 bg-gradient-to-b from-muted/30 via-muted/30 to-primary/20">
      <div className="container mx-auto px-4">
        <img
          src={partnersImage}
          alt="Наши партнёры"
          className="w-full max-w-5xl mx-auto object-contain"
        />
      </div>
    </section>
  );
};

export default PartnersSection;
