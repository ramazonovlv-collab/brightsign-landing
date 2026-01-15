import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import ScrollAnimation from './ScrollAnimation';

const CTASection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [errors, setErrors] = useState<{ phone?: string; business?: string }>({});

  const validateForm = () => {
    const newErrors: { phone?: string; business?: string } = {};
    
    const phoneRegex = /^\+?[0-9]{9,15}$/;
    if (!phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Неверный формат телефона';
    }
    
    if (!business) {
      newErrors.business = 'Выберите тип бизнеса';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setPhone('');
      setBusiness('');
      setErrors({});
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <div className="max-w-2xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-10">
              {t('cta.title')}
            </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Phone Input */}
              <div className="text-left">
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder={t('cta.phone')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`pl-12 h-14 text-lg ${errors.phone ? 'border-destructive' : ''}`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Business Type Select */}
              <div className="text-left">
                <Select value={business} onValueChange={setBusiness}>
                  <SelectTrigger className={`h-14 text-lg ${errors.business ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder={t('cta.business')} />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border">
                    <SelectItem value="retail">{t('cta.business.retail')}</SelectItem>
                    <SelectItem value="restaurant">{t('cta.business.restaurant')}</SelectItem>
                    <SelectItem value="office">{t('cta.business.office')}</SelectItem>
                    <SelectItem value="other">{t('cta.business.other')}</SelectItem>
                  </SelectContent>
                </Select>
                {errors.business && (
                  <p className="text-destructive text-sm mt-1">{errors.business}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="cta" size="lg" className="w-full text-lg h-14 shadow-glow">
              {t('cta.submit')}
            </Button>

            {/* Privacy */}
            <p className="text-muted-foreground text-sm mt-4">
              {t('cta.privacy')}
            </p>
          </form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTASection;
