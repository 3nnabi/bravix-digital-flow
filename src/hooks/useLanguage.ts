
import { useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'fr';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية', fr: 'Accueil' },
  'nav.services': { en: 'Services', ar: 'الخدمات', fr: 'Services' },
  'nav.about': { en: 'About', ar: 'من نحن', fr: 'À propos' },
  'nav.portfolio': { en: 'Portfolio', ar: 'معرض الأعمال', fr: 'Portfolio' },
  'nav.contact': { en: 'Contact', ar: 'تواصل', fr: 'Contact' },
  
  // Hero Section
  'hero.title': { 
    en: 'Your Digital Identity Starts Here', 
    ar: 'هويتك الرقمية تبدأ من هنا', 
    fr: 'Votre Identité Numérique Commence Ici' 
  },
  'hero.subtitle': { 
    en: 'Integrated digital services including design, printing, social media management, and advertising — all in one modern platform.', 
    ar: 'خدمات رقمية متكاملة تشمل التصميم والطباعة وإدارة وسائل التواصل الاجتماعي والإعلان — كل ذلك في منصة حديثة واحدة.', 
    fr: 'Services numériques intégrés incluant design, impression, gestion des réseaux sociaux et publicité — tout sur une plateforme moderne.' 
  },
  'hero.cta': { en: 'Request a Service', ar: 'اطلب خدمة', fr: 'Demander un Service' },
  
  // Why Bravix Section
  'why.title': { en: 'Why Choose Bravix', ar: 'لماذا تختار برافيكس', fr: 'Pourquoi Choisir Bravix' },
  'why.quality.title': { en: 'Unmatched Quality', ar: 'جودة لا مثيل لها', fr: 'Qualité Inégalée' },
  'why.quality.desc': { en: 'Premium designs that stand out', ar: 'تصاميم فاخرة تتميز عن الباقي', fr: 'Designs premium qui se démarquent' },
  'why.speed.title': { en: 'Fast Execution', ar: 'تنفيذ سريع', fr: 'Exécution Rapide' },
  'why.speed.desc': { en: 'Quick turnaround without compromising quality', ar: 'تسليم سريع دون المساس بالجودة', fr: 'Livraison rapide sans compromettre la qualité' },
  'why.creative.title': { en: 'Creative Expertise', ar: 'خبرة إبداعية', fr: 'Expertise Créative' },
  'why.creative.desc': { en: 'Innovative solutions for your brand', ar: 'حلول مبتكرة لعلامتك التجارية', fr: 'Solutions innovantes pour votre marque' },
  
  // Services Section
  'services.title': { en: 'All Your Digital Needs in One Place', ar: 'جميع احتياجاتك الرقمية في مكان واحد', fr: 'Tous Vos Besoins Numériques en Un Lieu' },
  'services.graphic.title': { en: 'Graphic Design', ar: 'التصميم الجرافيكي', fr: 'Design Graphique' },
  'services.graphic.desc': { en: 'Logos, Brand Identity, Social Media Visuals', ar: 'الشعارات، الهوية التجارية، صور وسائل التواصل', fr: 'Logos, Identité de Marque, Visuels Réseaux Sociaux' },
  'services.printing.title': { en: 'Printing', ar: 'الطباعة', fr: 'Impression' },
  'services.printing.desc': { en: 'Business Cards, Brochures, Banners, Roll-ups', ar: 'كروت العمل، الكتيبات، اللافتات، الرول آب', fr: 'Cartes de Visite, Brochures, Bannières, Roll-ups' },
  'services.social.title': { en: 'Social Media Management', ar: 'إدارة وسائل التواصل', fr: 'Gestion Réseaux Sociaux' },
  'services.social.desc': { en: 'Content Creation, Scheduling, Analytics, Strategy', ar: 'إنشاء المحتوى، الجدولة، التحليلات، الاستراتيجية', fr: 'Création de Contenu, Planification, Analyses, Stratégie' },
  'services.ads.title': { en: 'Paid Advertising', ar: 'الإعلانات المدفوعة', fr: 'Publicité Payante' },
  'services.ads.desc': { en: 'Campaign Strategy, Targeting, Design, Execution', ar: 'استراتيجية الحملات، الاستهداف، التصميم، التنفيذ', fr: 'Stratégie de Campagne, Ciblage, Design, Exécution' },
  'services.cta': { en: 'Request Now', ar: 'اطلب الآن', fr: 'Demander Maintenant' },
  
  // About Section
  'about.title': { en: 'About Bravix', ar: 'حول برافيكس', fr: 'À Propos de Bravix' },
  'about.desc': { 
    en: 'At Bravix, we believe every project deserves a strong digital identity. We deliver more than just services — we craft digital presence with precision and creativity.', 
    ar: 'في برافيكس، نؤمن أن كل مشروع يستحق هوية رقمية قوية. نحن نقدم أكثر من مجرد خدمات — نصنع الحضور الرقمي بدقة وإبداع.', 
    fr: 'Chez Bravix, nous croyons que chaque projet mérite une identité numérique forte. Nous livrons plus que des services — nous créons une présence numérique avec précision et créativité.' 
  },
  
  // Portfolio Section
  'portfolio.title': { en: 'Our Work', ar: 'أعمالنا', fr: 'Nos Travaux' },
  'portfolio.graphic': { en: 'Graphic Design', ar: 'التصميم الجرافيكي', fr: 'Design Graphique' },
  'portfolio.printing': { en: 'Printing', ar: 'الطباعة', fr: 'Impression' },
  'portfolio.social': { en: 'Social Media', ar: 'وسائل التواصل', fr: 'Réseaux Sociaux' },
  'portfolio.advertising': { en: 'Advertising', ar: 'الإعلان', fr: 'Publicité' },
  
  // Contact Section
  'contact.title': { en: 'Get In Touch', ar: 'تواصل معنا', fr: 'Contactez-Nous' },
  'contact.name': { en: 'Name', ar: 'الاسم', fr: 'Nom' },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني', fr: 'Email' },
  'contact.service': { en: 'Service Type', ar: 'نوع الخدمة', fr: 'Type de Service' },
  'contact.message': { en: 'Message', ar: 'الرسالة', fr: 'Message' },
  'contact.send': { en: 'Send Message', ar: 'إرسال الرسالة', fr: 'Envoyer le Message' },
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ar', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return { language, changeLanguage, t };
};
