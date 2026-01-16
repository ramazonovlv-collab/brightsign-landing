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
    <section id="contacts" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
      </div>
      
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
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* Name Input */}
              <div className="text-left">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={t('cta.name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`pl-12 h-14 text-lg ${errors.name ? 'border-destructive' : ''}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

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
            </div>

            {/* Message Input */}
            <div className="text-left mb-6">
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <Textarea
                  placeholder={t('cta.message')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="pl-12 min-h-[100px] text-lg resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                t('cta.submit')
              )}
            </Button>

            {/* Privacy note */}
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
