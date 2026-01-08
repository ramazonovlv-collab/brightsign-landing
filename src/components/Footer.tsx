import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-background">SignPro</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">{t('footer.services')}</h3>
            <ul className="space-y-2 text-background/70">
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service1')}</li>
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service2')}</li>
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service3')}</li>
              <li className="hover:text-primary transition-colors cursor-pointer">{t('footer.service4')}</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">{t('footer.contacts')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+998901234567" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+998 90 123 45 67</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@signpro.uz" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@signpro.uz</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>г. Ташкент, ул. Навои 25</span>
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
