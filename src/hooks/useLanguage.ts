
import { useState, useEffect } from 'react';

export type Language = 'ar';

interface Translations {
  [key: string]: string;
}

export const translations: Translations = {
  // Navigation
  'nav.home': 'الرئيسية',
  'nav.services': 'الخدمات',
  'nav.about': 'من نحن',
  'nav.portfolio': 'معرض الأعمال',
  'nav.contact': 'تواصل',
  
  // Hero Section
  'hero.title': 'هويتك الرقمية تبدأ من هنا',
  'hero.subtitle': 'خدمات رقمية متكاملة تشمل التصميم والطباعة وإدارة وسائل التواصل الاجتماعي والإعلان — كل ذلك في منصة حديثة واحدة.',
  'hero.cta': 'اطلب خدمة',
  
  // Animated Banner
  'banner.title': 'برافيكس',
  'banner.subtitle': 'حلول التسويق الرقمي',
  
  // Why Bravix Section
  'why.title': 'لماذا تختار برافيكس',
  'why.quality.title': 'جودة لا مثيل لها',
  'why.quality.desc': 'تصاميم فاخرة تتميز عن المنافسة',
  'why.speed.title': 'تنفيذ سريع',
  'why.speed.desc': 'تسليم سريع دون المساس بالجودة',
  'why.creative.title': 'خبرة إبداعية',
  'why.creative.desc': 'حلول مبتكرة لعلامتك التجارية',
  
  // Services Section
  'services.title': 'جميع احتياجاتك الرقمية في مكان واحد',
  'services.graphic.title': 'التصميم الجرافيكي',
  'services.graphic.desc': 'الشعارات، الهوية التجارية، صور وسائل التواصل',
  'services.printing.title': 'الطباعة',
  'services.printing.desc': 'كروت العمل، الكتيبات، اللافتات، الرول آب',
  'services.social.title': 'إدارة وسائل التواصل',
  'services.social.desc': 'إنشاء المحتوى، الجدولة، التحليلات، الاستراتيجية',
  'services.ads.title': 'الإعلانات المدفوعة',
  'services.ads.desc': 'استراتيجية الحملات، الاستهداف، التصميم، التنفيذ',
  'services.cta': 'اطلب الآن',
  
  // About Section
  'about.title': 'حول برافيكس',
  'about.desc': 'في برافيكس، نؤمن أن كل مشروع يستحق هوية رقمية قوية. نحن نقدم أكثر من مجرد خدمات — نصنع الحضور الرقمي بدقة وإبداع.',
  'about.clients': 'عملاء سعداء',
  'about.projects': 'مشاريع منجزة',
  'about.support': 'الدعم',
  'about.experience': 'سنوات خبرة',
  
  // Portfolio Section
  'portfolio.title': 'أعمالنا',
  'portfolio.graphic': 'التصميم الجرافيكي',
  'portfolio.printing': 'الطباعة',
  'portfolio.social': 'وسائل التواصل',
  'portfolio.advertising': 'الإعلان',
  
  // Portfolio Items
  'portfolio.item.logoDesign': 'تصميم الشعار',
  'portfolio.item.brandIdentity': 'الهوية التجارية',
  'portfolio.item.socialKit': 'حزمة وسائل التواصل',
  'portfolio.item.businessCards': 'كروت العمل',
  'portfolio.item.brochures': 'الكتيبات',
  'portfolio.item.banners': 'اللافتات',
  'portfolio.item.instagramCampaign': 'حملة إنستجرام',
  'portfolio.item.facebookPosts': 'منشورات فيسبوك',
  'portfolio.item.socialStrategy': 'استراتيجية اجتماعية',
  'portfolio.item.googleAds': 'إعلانات جوجل',
  'portfolio.item.facebookAds': 'إعلانات فيسبوك',
  'portfolio.item.campaignDesign': 'تصميم الحملة',
  
  // Contact Section
  'contact.title': 'تواصل معنا',
  'contact.name': 'الاسم',
  'contact.email': 'البريد الإلكتروني',
  'contact.service': 'نوع الخدمة',
  'contact.message': 'الرسالة',
  'contact.send': 'إرسال الرسالة',
  'contact.sending': 'جارٍ الإرسال...',
  'contact.subtitle': 'لننشئ شيئًا مذهلاً معًا',
  'contact.description': 'هل أنت مستعد لرفع مستوى حضورك الرقمي؟ تواصل معنا اليوم ولنناقش كيف يمكننا مساعدة علامتك التجارية على التميز في العالم الرقمي.',
  'contact.whyTitle': 'لماذا تختار برافيكس؟',
  'contact.premium': 'تصاميم عالية الجودة',
  'contact.fast': 'وقت تسليم سريع',
  'contact.support247': 'دعم العملاء 24/7',
  'contact.pricing': 'أسعار تنافسية',
  'contact.success': 'تم إرسال الرسالة!',
  'contact.successDesc': 'شكرًا لتواصلكم معنا. سنعود إليكم قريبًا.',
  'contact.error': 'خطأ',
  'contact.errorDesc': 'حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.',
  
  // NotFound Page
  'notfound.title': '404',
  'notfound.message': 'عذراً! الصفحة غير موجودة',
  'notfound.returnHome': 'العودة للرئيسية',
};

export const useLanguage = () => {
  const [language] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = 'rtl';
  }, []);

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return { language, t };
};
