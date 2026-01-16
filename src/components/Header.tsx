import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import kitLogo from '@/assets/kit-logo.png';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t('nav.home'), action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: t('nav.about'), action: () => scrollToSection('benefits') },
    { label: t('nav.portfolio'), action: () => scrollToSection('portfolio') },
    { label: t('nav.partners'), action: () => scrollToSection('partners') },
    { label: t('nav.contacts'), action: () => scrollToSection('contacts') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={kitLogo} 
              alt="KIT - Производство наружной рекламы" 
              className="h-10 md:h-12 w-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

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
              href="tel:+998909273506"
              className="hidden lg:flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
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
              href="tel:+998909273506"
              className="lg:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center"
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
