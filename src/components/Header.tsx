import { useState, useEffect } from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">SignPro</span>
              <p className="text-xs text-muted-foreground hidden md:block max-w-[200px] leading-tight">
                Производство наружной рекламы
              </p>
            </div>
          </div>

          {/* Center Info - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{t('header.schedule')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{t('header.address')}</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'ru'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${
                  language === 'uz'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                UZ
              </button>
            </div>

            {/* Phone */}
            <a
              href="tel:+998901234567"
              className="hidden md:flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t('header.phone')}</span>
            </a>

            {/* CTA Button */}
            <Button variant="cta" size="sm" className="hidden sm:inline-flex">
              {t('header.callback')}
            </Button>

            {/* Mobile Phone Icon */}
            <a
              href="tel:+998901234567"
              className="md:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center"
            >
              <Phone className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
