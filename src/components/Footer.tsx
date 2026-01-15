import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import kitLogo from '@/assets/kit-logo.png';

const Footer = () => {
  const { t } = useLanguage();

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
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service1')}</li>
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service2')}</li>
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service3')}</li>
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service4')}</li>
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service5')}</li>
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
