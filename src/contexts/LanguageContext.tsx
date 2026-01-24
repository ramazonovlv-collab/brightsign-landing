import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.portfolio': 'Наши работы',
    'nav.partners': 'Наши партнёры',
    'nav.contacts': 'Контакты',
    
    // Header
    'header.tagline': 'Производство наружной рекламы в Ташкенте',
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
    'solution.badge': 'дней на изготовление',
    
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
    'benefits.servicesLabel': 'Наши направления:',
    
    // Portfolio
    'portfolio.title': 'Посмотрите на наши работы в Ташкенте',
    'portfolio.stat1': '500+ объектов',
    'portfolio.stat2': '11 лет опыта',
    'portfolio.stat3': '3500 м² вывесок',
    'portfolio.stat1.label': 'установлено',
    'portfolio.stat2.label': 'на рынке',
    'portfolio.stat3.label': 'изготовлено',
    'portfolio.before': 'До',
    'portfolio.after': 'После',
    'portfolio.days': 'дней',
    
    // Portfolio projects
    'portfolio.project1.title': 'Химчистка "UnoMomento"',
    'portfolio.project1.task': 'Оклейка оракалом',
    'portfolio.project1.result': 'Клиентов +40%',
    'portfolio.project2.title': 'Выставочный стенд "Durable Group"',
    'portfolio.project2.task': 'Выставочный стенд из металоконструкции',
    'portfolio.project3.title': 'Сеть магазинов косметики "BLOOM"',
    'portfolio.project3.task': 'Стелажи для продукции',
    'portfolio.project4.title': 'Супермаркет "EDISON"',
    'portfolio.project4.task': 'Световая вывеска + металоконструкция',
    'portfolio.project4.result': '40% поток клиентов + видимость',
    'portfolio.project5.title': 'Автосалон "Porsche"',
    'portfolio.project5.task': 'Интерьерные картины',
    'portfolio.project5.result': 'Атмосфера, имидж, статус',
    
    // Gallery
    'gallery.title': 'Виды услуг',
    'gallery.subtitle': 'Полный спектр рекламных решений для вашего бизнеса',
    'gallery.volumetric': 'Объёмно-пространственные композиции',
    'gallery.exhibition': 'Выставочные стенды',
    'gallery.interior': 'Интерьерное оформление',
    'gallery.lightbox': 'Световые короба',
    'gallery.printing': 'Широкоформатная печать',
    'gallery.professional': 'Профессиональное изготовление',
    'gallery.order': 'Заказать',
    'gallery.photos': 'фото',
    'gallery.clickToView': 'Нажмите, чтобы открыть галерею',
    'gallery.viewWorks': 'Смотреть работы',
    'gallery.worksInCategory': 'Работы в этой категории',
    'gallery.volumetric.desc': 'Создаём уникальные объёмные пространственные конструкции.',
    'gallery.volumetric.feature1': 'Объёмно-пространственные конструкции любой сложности',
    'gallery.volumetric.feature2': 'LED-подсветка с гарантией 1 год',
    'gallery.volumetric.feature3': 'Монтаж на любой высоте',
    'gallery.exhibition.desc': 'Проектируем и изготавливаем выставочные стенды под ключ — от эскиза до монтажа на выставке.',
    'gallery.exhibition.feature1': 'Индивидуальный дизайн',
    'gallery.exhibition.feature2': 'Быстрая сборка и разборка',
    'gallery.exhibition.feature3': 'Доставка и монтаж',
    'gallery.interior.desc': 'Комплексное оформление интерьеров: навигация, брендирование, декоративные элементы, картины.',
    'gallery.interior.feature1': 'Навигационные системы',
    'gallery.interior.feature2': 'Брендирование пространств',
    'gallery.interior.feature3': 'Декоративные панели и картины',
    'gallery.lightbox.desc': 'Производим световые короба любых размеров с яркой равномерной подсветкой.',
    'gallery.lightbox.feature1': 'Равномерная подсветка',
    'gallery.lightbox.feature2': 'Энергоэффективные LED',
    'gallery.lightbox.feature3': 'Влагозащита IP65',
    'gallery.printing.desc': 'Печатаем на любых материалах: баннеры, плёнки, холсты, сетка, перфорация.',
    'gallery.printing.feature1': 'Разрешение до 1440 dpi',
    'gallery.printing.feature2': 'Ширина печати до 5 метров',
    'gallery.printing.feature3': 'УФ-стойкие чернила',
    
    // Partners
    'partners.title': 'Нам доверяют',
    'partners.alt': 'Логотипы партнёров KIT',
    
    // CTA
    'cta.title': 'Получите расчёт стоимости',
    'cta.name': 'Ваше имя',
    'cta.phone': 'Ваш телефон',
    'cta.message': 'Ваш запрос',
    'cta.submit': 'Получить расчёт',
    'cta.privacy': 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
    
    // Footer
    'footer.desc': 'Производство наружной рекламы в Ташкенте',
    'footer.services': 'Услуги',
    'footer.service1': 'Объёмно-пространственные композиции',
    'footer.service2': 'Выставочные стенды',
    'footer.service3': 'Интерьерное оформление',
    'footer.service4': 'Световые короба',
    'footer.service5': 'Широкоформатная печать',
    'footer.contacts': 'Контакты',
    'footer.copyright': '© 2026 KIT. Все права защищены.',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.portfolio': 'Bizning ishlarimiz',
    'nav.partners': 'Hamkorlarimiz',
    'nav.contacts': 'Kontaktlar',
    // Header
    'header.tagline': 'Toshkentda tashqi reklama ishlab chiqarish',
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
    'solution.badge': 'kun ichida ishlab chiqarish',
    
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
    'benefits.servicesLabel': 'Bizning yo\'nalishlarimiz:',
    
    // Portfolio
    'portfolio.title': 'Toshkentdagi ishlarimizni ko\'ring',
    'portfolio.stat1': '500+ obyekt',
    'portfolio.stat2': '11 yil tajriba',
    'portfolio.stat3': '3500 m² belgilar',
    'portfolio.stat1.label': 'o\'rnatildi',
    'portfolio.stat2.label': 'bozorda',
    'portfolio.stat3.label': 'ishlab chiqildi',
    'portfolio.before': 'Oldin',
    'portfolio.after': 'Keyin',
    'portfolio.days': 'kun',
    
    // Portfolio projects
    'portfolio.project1.title': 'Kimyoviy tozalash "UnoMomento"',
    'portfolio.project1.task': 'Orakal bilan yopish',
    'portfolio.project1.result': 'Mijozlar +40%',
    'portfolio.project2.title': '"Durable Group" ko\'rgazma stendi',
    'portfolio.project2.task': 'Metall konstruktsiyadan ko\'rgazma stendi',
    'portfolio.project3.title': '"BLOOM" kosmetika do\'konlari tarmog\'i',
    'portfolio.project3.task': 'Mahsulotlar uchun javonlar',
    'portfolio.project4.title': '"EDISON" supermarketi',
    'portfolio.project4.task': 'Yorug\'lik belgisi + metall konstruktsiya',
    'portfolio.project4.result': '40% mijozlar oqimi + ko\'rinish',
    'portfolio.project5.title': '"Porsche" avtosaloni',
    'portfolio.project5.task': 'Interyer rasmlari',
    'portfolio.project5.result': 'Atmosfera, obro\', maqom',
    
    // Gallery
    'gallery.title': 'Xizmat turlari',
    'gallery.subtitle': 'Biznesingiz uchun reklama yechimlarining to\'liq spektri',
    'gallery.volumetric': 'Hajmiy-fazoviy kompozitsiyalar',
    'gallery.exhibition': 'Ko\'rgazma stendlari',
    'gallery.interior': 'Interyer bezash',
    'gallery.lightbox': 'Yorug\'lik qutilari',
    'gallery.printing': 'Keng formatli bosma',
    'gallery.professional': 'Professional ishlab chiqarish',
    'gallery.order': 'Buyurtma berish',
    'gallery.photos': 'rasm',
    'gallery.clickToView': 'Galereyani ochish uchun bosing',
    'gallery.viewWorks': 'Ishlarni ko\'rish',
    'gallery.worksInCategory': 'Ushbu kategoriyada ishlar',
    'gallery.volumetric.desc': 'Noyob hajmiy fazoviy konstruktsiyalarni yaratamiz.',
    'gallery.volumetric.feature1': 'Har qanday murakkablikdagi hajmiy-fazoviy konstruktsiyalar',
    'gallery.volumetric.feature2': '1 yil kafolatli LED yoritgich',
    'gallery.volumetric.feature3': 'Har qanday balandlikda o\'rnatish',
    'gallery.exhibition.desc': 'Ko\'rgazma stendlarini kalitga tayyor loyihalash va ishlab chiqarish — eskizdan ko\'rgazmadagi montajgacha.',
    'gallery.exhibition.feature1': 'Individual dizayn',
    'gallery.exhibition.feature2': 'Tez yig\'ish va demontaj',
    'gallery.exhibition.feature3': 'Yetkazib berish va montaj',
    'gallery.interior.desc': 'Interyerlarni kompleks bezash: navigatsiya, brendlash, dekorativ elementlar, rasmlar.',
    'gallery.interior.feature1': 'Navigatsiya tizimlari',
    'gallery.interior.feature2': 'Makonlarni brendlash',
    'gallery.interior.feature3': 'Dekorativ panellar va rasmlar',
    'gallery.lightbox.desc': 'Yorqin bir xil yoritgichli har qanday o\'lchamdagi yorug\'lik qutilarini ishlab chiqaramiz.',
    'gallery.lightbox.feature1': 'Bir xil yoritgich',
    'gallery.lightbox.feature2': 'Energiya tejamkor LED',
    'gallery.lightbox.feature3': 'IP65 namlikdan himoya',
    'gallery.printing.desc': 'Har qanday materiallarga bosma: bannerlar, plyonkalar, tuallar, to\'r, perforatsiya.',
    'gallery.printing.feature1': '1440 dpi gacha aniqlik',
    'gallery.printing.feature2': '5 metrgacha bosma kengligi',
    'gallery.printing.feature3': 'UV bardoshli siyohlar',
    
    // Partners
    'partners.title': 'Bizga ishonishadi',
    'partners.alt': 'KIT hamkorlar logotiplari',
    
    // CTA
    'cta.title': 'Narx hisobini oling',
    'cta.name': 'Ismingiz',
    'cta.phone': 'Telefon raqamingiz',
    'cta.message': 'Sizning so\'rovingiz',
    'cta.submit': 'Hisobni olish',
    'cta.privacy': 'Tugmani bosish orqali siz maxfiylik siyosatiga rozilik bildirasiz',
    
    // Footer
    'footer.desc': 'Toshkentda tashqi reklama ishlab chiqarish',
    'footer.services': 'Xizmatlar',
    'footer.service1': 'Hajmiy-fazoviy kompozitsiyalar',
    'footer.service2': 'Ko\'rgazma stendlari',
    'footer.service3': 'Interyer bezash',
    'footer.service4': 'Yorug\'lik qutilari',
    'footer.service5': 'Keng formatli bosma',
    'footer.contacts': 'Kontaktlar',
    'footer.copyright': '© 2026 KIT. Barcha huquqlar himoyalangan.',
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
