import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    'header.schedule': 'Пн-Сб: 9:00 - 18:00',
    'header.address': 'г. Ташкент, ул. Султанали Машхади 210',
    'header.callback': 'Заказать звонок',
    'header.phone': '+998 90 927 35 06',
    
    // Hero
    'hero.title': 'Привлекайте на 35% больше клиентов',
    'hero.titleHighlight': 'с помощью вывесок, которые работают 24/7',
    'hero.subtitle': 'Полный цикл производства наружной рекламы в Ташкенте: от дизайна до монтажа за 3–7 дней',
    'hero.cta': 'Рассчитать стоимость бесплатно',
    'hero.stat1': 'Сделанных вывесок',
    'hero.stat2': 'Производство',
    'hero.stat3': 'Работаем по всему Узбекистану',
    'hero.stat4': 'Довольных клиентов',
    
    // Pain
    'pain.title': 'Почему 70% вывесок не приносят клиентов?',
    'pain.card1.title': 'Штрафы до $5000',
    'pain.card1.desc': 'Несогласованная реклама влечёт крупные штрафы и демонтаж за ваш счёт',
    'pain.card2.title': 'Тусклый свет через год',
    'pain.card2.desc': 'Дешёвые диоды выгорают, и вывеска перестаёт привлекать внимание',
    'pain.card3.title': 'Невидимый дизайн',
    'pain.card3.desc': 'Мелкий шрифт и неудачные цвета делают вывеску незаметной с дороги',
    
    // Solution
    'solution.title': 'Как мы работаем',
    'solution.subtitle': 'Полный цикл от идеи до установки — вам не нужно ничего контролировать',
    'solution.step1.title': 'Бесплатный замер',
    'solution.step1.desc': 'Выезжаем на объект, оцениваем условия и снимаем размеры',
    'solution.step2.title': 'Дизайн-проект',
    'solution.step2.desc': '3D-визуализация вывески на фасаде вашего здания',
    'solution.step3.title': 'Производство',
    'solution.step3.desc': 'Изготовление на собственном оборудовании за 3-7 дней',
    'solution.step4.title': 'Монтаж и гарантия',
    'solution.step4.desc': 'Профессиональная установка с гарантией 1 год',
    
    // Benefits
    'benefits.title': 'Почему выбирают нас',
    'benefits.card1.title': 'Опыт',
    'benefits.card1.desc': 'Существуем на рынке с 2015 года',
    'benefits.card2.title': 'Сроки',
    'benefits.card2.desc': 'Не срываем сроки и делаем всё вовремя',
    'benefits.card3.title': 'Качество',
    'benefits.card3.desc': 'Используем высококачественные материалы',
    'benefits.card4.title': 'Лояльность',
    'benefits.card4.desc': 'Предлагаем лояльную цену, ниже рынка',
    
    // Portfolio
    'portfolio.title': 'Посмотрите на наши работы в Ташкенте',
    'portfolio.stat1': '500+ объектов',
    'portfolio.stat2': '11 лет опыта',
    'portfolio.stat3': '3500 м² вывесок',
    'portfolio.before': 'До',
    'portfolio.after': 'После',
    'portfolio.days': 'дней',
    
    // Partners
    'partners.title': 'Нам доверяют',
    'partners.alt': 'Логотипы партнёров KIT',
    
    // CTA
    'cta.title': 'Получите расчёт стоимости',
    'cta.bonus': '+ датчик освещённости в подарок',
    'cta.phone': 'Ваш телефон',
    'cta.business': 'Тип бизнеса',
    'cta.business.retail': 'Магазин',
    'cta.business.restaurant': 'Ресторан/Кафе',
    'cta.business.office': 'Офис/Компания',
    'cta.business.other': 'Другое',
    'cta.submit': 'Получить расчёт и подарок',
    'cta.privacy': 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
    
    // Footer
    'footer.desc': 'Производство наружной рекламы в Ташкенте',
    'footer.services': 'Услуги',
    'footer.service1': 'Световые вывески',
    'footer.service2': 'Объёмные буквы',
    'footer.service3': 'Неоновые вывески',
    'footer.service4': 'LED-экраны',
    'footer.contacts': 'Контакты',
    'footer.copyright': '© 2024 SignPro. Все права защищены.',
  },
  uz: {
    // Header
    'header.schedule': 'Du-Sha: 9:00 - 18:00',
    'header.address': 'Toshkent sh., Sultonali Mashxadi ko\'chasi 210',
    'header.callback': 'Qo\'ng\'iroq buyurtma qilish',
    'header.phone': '+998 90 927 35 06',
    
    // Hero
    'hero.title': '35% ko\'proq mijozlarni jalb qiling',
    'hero.titleHighlight': '24/7 ishlaydigan reklama tashqi belgilari bilan',
    'hero.subtitle': 'Toshkentda tashqi reklamani to\'liq ishlab chiqarish: dizayndan montajgacha 3-7 kun ichida',
    'hero.cta': 'Bepul narxni hisoblash',
    'hero.stat1': 'Tayyorlangan belgilar',
    'hero.stat2': 'Ishlab chiqarish',
    'hero.stat3': 'Butun O\'zbekiston bo\'ylab ishlaymiz',
    'hero.stat4': 'Mamnun mijozlar',
    
    // Pain
    'pain.title': 'Nega 70% belgilar mijozlarni jalb qilmaydi?',
    'pain.card1.title': '$5000 gacha jarima',
    'pain.card1.desc': 'Kelishilmagan reklama katta jarimalar va sizning hisobingizga demontajga olib keladi',
    'pain.card2.title': 'Bir yildan keyin xira yorug\'lik',
    'pain.card2.desc': 'Arzon diodlar yonib ketadi va belgi e\'tiborni jalb qilishni to\'xtatadi',
    'pain.card3.title': 'Ko\'rinmas dizayn',
    'pain.card3.desc': 'Kichik shrift va muvaffaqiyatsiz ranglar belgini yo\'ldan ko\'rinmas qiladi',
    
    // Solution
    'solution.title': 'Biz qanday ishlaymiz',
    'solution.subtitle': 'G\'oyadan o\'rnatishgacha to\'liq tsikl — siz hech narsani nazorat qilishingiz shart emas',
    'solution.step1.title': 'Bepul o\'lchov',
    'solution.step1.desc': 'Obyektga boramiz, sharoitlarni baholaymiz va o\'lchamlarni olamiz',
    'solution.step2.title': 'Dizayn-loyiha',
    'solution.step2.desc': 'Binongiz fasadida belgining 3D vizualizatsiyasi',
    'solution.step3.title': 'Ishlab chiqarish',
    'solution.step3.desc': 'O\'z uskunalarimizda 3-7 kun ichida ishlab chiqarish',
    'solution.step4.title': 'Montaj va kafolat',
    'solution.step4.desc': '1 yil kafolatli professional o\'rnatish',
    
    // Benefits
    'benefits.title': 'Nega bizni tanlashadi',
    'benefits.card1.title': 'Tajriba',
    'benefits.card1.desc': '2015 yildan beri bozorda ishlaymiz',
    'benefits.card2.title': 'Muddatlar',
    'benefits.card2.desc': 'Muddatlarni buzmay, hamma narsani o\'z vaqtida qilamiz',
    'benefits.card3.title': 'Sifat',
    'benefits.card3.desc': 'Yuqori sifatli materiallardan foydalanamiz',
    'benefits.card4.title': 'Sodiqlik',
    'benefits.card4.desc': 'Bozordan past, sodiq narx taklif qilamiz',
    
    // Portfolio
    'portfolio.title': 'Toshkentdagi ishlarimizni ko\'ring',
    'portfolio.stat1': '500+ obyekt',
    'portfolio.stat2': '11 yil tajriba',
    'portfolio.stat3': '3500 m² belgilar',
    'portfolio.before': 'Oldin',
    'portfolio.after': 'Keyin',
    'portfolio.days': 'kun',
    
    // Partners
    'partners.title': 'Bizga ishonishadi',
    'partners.alt': 'KIT hamkorlar logotiplari',
    
    // CTA
    'cta.title': 'Narx hisobini oling',
    'cta.bonus': '+ sovg\'a sifatida yorug\'lik sensori',
    'cta.phone': 'Telefon raqamingiz',
    'cta.business': 'Biznes turi',
    'cta.business.retail': 'Do\'kon',
    'cta.business.restaurant': 'Restoran/Kafe',
    'cta.business.office': 'Ofis/Kompaniya',
    'cta.business.other': 'Boshqa',
    'cta.submit': 'Hisob va sovg\'ani olish',
    'cta.privacy': 'Tugmani bosish orqali siz maxfiylik siyosatiga rozilik bildirasiz',
    
    // Footer
    'footer.desc': 'Toshkentda tashqi reklama ishlab chiqarish',
    'footer.services': 'Xizmatlar',
    'footer.service1': 'Yorug\'lik belgilari',
    'footer.service2': 'Hajmli harflar',
    'footer.service3': 'Neon belgilari',
    'footer.service4': 'LED-ekranlar',
    'footer.contacts': 'Kontaktlar',
    'footer.copyright': '© 2024 SignPro. Barcha huquqlar himoyalangan.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
