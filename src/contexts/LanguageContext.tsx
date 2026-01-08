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
    'header.address': 'г. Ташкент, ул. Навои 25',
    'header.callback': 'Заказать звонок',
    'header.phone': '+998 90 123 45 67',
    
    // Hero
    'hero.title': 'Привлекайте на 35% больше клиентов',
    'hero.titleHighlight': 'с помощью вывесок, которые работают 24/7',
    'hero.subtitle': 'Полный цикл производства наружной рекламы в Ташкенте: от дизайна до монтажа за 3–7 дней',
    'hero.cta': 'Рассчитать стоимость бесплатно',
    'hero.benefit1': 'Своё производство',
    'hero.benefit2': 'Монтаж за 1 день',
    'hero.benefit3': 'Договор и документы',
    
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
    'solution.step4.desc': 'Профессиональная установка с гарантией 3 года',
    
    // Benefits
    'benefits.title': 'Почему выбирают нас',
    'benefits.card1.title': '0 проблем с законом',
    'benefits.card1.desc': 'Полное согласование с хокимиятом — работаем легально',
    'benefits.card2.title': 'Экономия на свете',
    'benefits.card2.desc': 'LED-модули потребляют на 70% меньше электричества',
    'benefits.card3.title': 'Видно за 300 метров',
    'benefits.card3.desc': 'Яркие вывески привлекают клиентов даже в пасмурную погоду',
    'benefits.card4.title': 'Сервис 24/7',
    'benefits.card4.desc': 'Оперативный ремонт в течение 24 часов по гарантии',
    
    // Portfolio
    'portfolio.title': 'Посмотрите на наши работы в Ташкенте',
    'portfolio.stat1': '500+ объектов',
    'portfolio.stat2': '12 лет опыта',
    'portfolio.stat3': '3500 м² вывесок',
    'portfolio.before': 'До',
    'portfolio.after': 'После',
    'portfolio.days': 'дней',
    
    // FAQ
    'faq.title': 'Частые вопросы',
    'faq.q1': 'Сколько стоит вывеска?',
    'faq.a1': 'Стоимость зависит от размера, типа подсветки и сложности. Средний чек — от $200 до $2000. Точную цену рассчитаем после замера.',
    'faq.q2': 'Как быстро вы изготовите вывеску?',
    'faq.a2': 'Стандартный срок — 3-7 рабочих дней. Срочные заказы выполняем за 1-2 дня с доплатой 30%.',
    'faq.q3': 'Вы помогаете с согласованием?',
    'faq.a3': 'Да, мы полностью берём на себя согласование с хокимиятом. Это входит в стоимость работ.',
    'faq.q4': 'Какая гарантия на вывеску?',
    'faq.a4': 'Гарантия 3 года на светодиоды и конструкцию. Бесплатный ремонт в течение 24 часов при поломке.',
    
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
    'header.address': 'Toshkent sh., Navoiy ko\'chasi 25',
    'header.callback': 'Qo\'ng\'iroq buyurtma qilish',
    'header.phone': '+998 90 123 45 67',
    
    // Hero
    'hero.title': '35% ko\'proq mijozlarni jalb qiling',
    'hero.titleHighlight': '24/7 ishlaydigan reklama tashqi belgilari bilan',
    'hero.subtitle': 'Toshkentda tashqi reklamani to\'liq ishlab chiqarish: dizayndan montajgacha 3-7 kun ichida',
    'hero.cta': 'Bepul narxni hisoblash',
    'hero.benefit1': 'O\'z ishlab chiqarishimiz',
    'hero.benefit2': '1 kunda montaj',
    'hero.benefit3': 'Shartnoma va hujjatlar',
    
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
    'solution.step4.desc': '3 yil kafolatli professional o\'rnatish',
    
    // Benefits
    'benefits.title': 'Nega bizni tanlashadi',
    'benefits.card1.title': 'Qonun bilan 0 muammo',
    'benefits.card1.desc': 'Hokimiyat bilan to\'liq kelishuv — qonuniy ishlaymiz',
    'benefits.card2.title': 'Yorug\'likda tejash',
    'benefits.card2.desc': 'LED-modullar 70% kam elektr energiyasini sarflaydi',
    'benefits.card3.title': '300 metrdan ko\'rinadi',
    'benefits.card3.desc': 'Yorqin belgilar bulutli ob-havoda ham mijozlarni jalb qiladi',
    'benefits.card4.title': '24/7 xizmat',
    'benefits.card4.desc': 'Kafolat bo\'yicha 24 soat ichida tezkor ta\'mirlash',
    
    // Portfolio
    'portfolio.title': 'Toshkentdagi ishlarimizni ko\'ring',
    'portfolio.stat1': '500+ obyekt',
    'portfolio.stat2': '12 yil tajriba',
    'portfolio.stat3': '3500 m² belgilar',
    'portfolio.before': 'Oldin',
    'portfolio.after': 'Keyin',
    'portfolio.days': 'kun',
    
    // FAQ
    'faq.title': 'Ko\'p beriladigan savollar',
    'faq.q1': 'Belgi qancha turadi?',
    'faq.a1': 'Narx o\'lcham, yoritish turi va murakkablikka bog\'liq. O\'rtacha chek — $200 dan $2000 gacha. Aniq narxni o\'lchovdan keyin hisoblaymiz.',
    'faq.q2': 'Belgini qanchalik tez tayyorlaysiz?',
    'faq.a2': 'Standart muddat — 3-7 ish kuni. Shoshilinch buyurtmalarni 30% qo\'shimcha to\'lov bilan 1-2 kunda bajaramiz.',
    'faq.q3': 'Kelishuvda yordam berasizmi?',
    'faq.a3': 'Ha, biz hokimiyat bilan kelishuvni to\'liq o\'z zimmamizga olamiz. Bu ishlar narxiga kiradi.',
    'faq.q4': 'Belgiga qanday kafolat?',
    'faq.a4': 'LEDlar va konstruksiyaga 3 yil kafolat. Buzilganda 24 soat ichida bepul ta\'mirlash.',
    
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
