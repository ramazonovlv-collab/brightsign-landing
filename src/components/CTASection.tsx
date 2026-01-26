import { useState } from 'react';
import { Phone, User, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ScrollAnimation from './ScrollAnimation';
import ctaBg from '@/assets/bg/cta-bg.jpg';

const CTASection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {};
    
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Введите ваше имя';
    }
    
    const phoneRegex = /^\+?[0-9]{9,15}$/;
    if (!phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Неверный формат телефона';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-telegram', {
        body: {
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim() || 'Не указано',
        },
      });

      if (error) throw error;

      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setName('');
      setPhone('');
      setMessage('');
      setErrors({});
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="relative py-12 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
      </div>
      
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <div className="max-w-2xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 md:mb-10">
              {t('cta.title')}
            </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
              {/* Name Input */}
              <div className="text-left">
                <div className="relative">
                  <User className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={t('cta.name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`pl-10 md:pl-12 h-12 md:h-14 text-base md:text-lg ${errors.name ? 'border-destructive' : ''}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-destructive text-xs md:text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone Input */}
              <div className="text-left">
                <div className="relative">
                  <Phone className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder={t('cta.phone')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`pl-10 md:pl-12 h-12 md:h-14 text-base md:text-lg ${errors.phone ? 'border-destructive' : ''}`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-destructive text-xs md:text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Message Input */}
            <div className="text-left mb-4 md:mb-6">
              <div className="relative">
                <MessageSquare className="absolute left-3 md:left-4 top-3 md:top-4 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                <Textarea
                  placeholder={t('cta.message')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="pl-10 md:pl-12 min-h-[80px] md:min-h-[100px] text-base md:text-lg resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                t('cta.submit')
              )}
            </Button>

            {/* Privacy note */}
            <p className="text-muted-foreground text-xs md:text-sm mt-3 md:mt-4">
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
