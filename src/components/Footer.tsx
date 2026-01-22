import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import kitLogo from '@/assets/kit-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  const serviceLinks = [
    { labelKey: 'footer.service1', categoryId: 'volumetric' },
    { labelKey: 'footer.service2', categoryId: 'exhibition' },
    { labelKey: 'footer.service3', categoryId: 'interior' },
    { labelKey: 'footer.service4', categoryId: 'lightbox' },
    { labelKey: 'footer.service5', categoryId: 'printing' },
  ];

  const scrollToService = (categoryId: string) => {
    const gallerySection = document.getElementById('services-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to set active category
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('setServiceCategory', { detail: categoryId }));
      }, 500);
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={kitLogo} 
                alt="KIT - Производство наружной рекламы" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-xs text-background/70 max-w-[180px] leading-tight">
                  {t('footer.desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">{t('footer.services')}</h3>
            <ul className="space-y-2 text-background/70">
              {serviceLinks.map((service) => (
                <li 
                  key={service.categoryId}
                  onClick={() => scrollToService(service.categoryId)}
                  className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {t(service.labelKey)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">{t('footer.contacts')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+998909273506" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>{t('header.phone')}</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@kit.uz" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@kit.uz</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>{t('header.address')}</span>
              </li>
            </ul>
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/kit___studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-background hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/KIT_reklama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-background hover:scale-110 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/50 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
