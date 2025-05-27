
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('graphic');

  const tabs = [
    { id: 'graphic', labelKey: 'portfolio.graphic' },
    { id: 'printing', labelKey: 'portfolio.printing' },
    { id: 'social', labelKey: 'portfolio.social' },
    { id: 'advertising', labelKey: 'portfolio.advertising' },
  ];

  const portfolioItems = [
    { id: 1, titleKey: 'portfolio.item.logoDesign', category: 'graphic', image: '/c/ali/bravix/design1.jpg' },
    { id: 2, titleKey: 'portfolio.item.brandIdentity', category: 'graphic', image: '/c/ali/bravix/design2.jpg' },
    { id: 3, titleKey: 'portfolio.item.socialKit', category: 'graphic', image: '/c/ali/bravix/design3.jpg' },
    { id: 4, titleKey: 'portfolio.item.businessCards', category: 'printing', image: '/c/ali/bravix/printing1.jpg' },
    { id: 5, titleKey: 'portfolio.item.brochures', category: 'printing', image: '/c/ali/bravix/printing2.jpg' },
    { id: 6, titleKey: 'portfolio.item.banners', category: 'printing', image: '/c/ali/bravix/printing3.jpg' },
    { id: 7, titleKey: 'portfolio.item.instagramCampaign', category: 'social', image: '/c/ali/bravix/social1.jpg' },
    { id: 8, titleKey: 'portfolio.item.facebookPosts', category: 'social', image: '/c/ali/bravix/social2.jpg' },
    { id: 9, titleKey: 'portfolio.item.socialStrategy', category: 'social', image: '/c/ali/bravix/social3.jpg' },
    { id: 10, titleKey: 'portfolio.item.googleAds', category: 'advertising', image: '/c/ali/bravix/advertising1.jpg' },
    { id: 11, titleKey: 'portfolio.item.facebookAds', category: 'advertising', image: '/c/ali/bravix/advertising2.jpg' },
    { id: 12, titleKey: 'portfolio.item.campaignDesign', category: 'advertising', image: '/c/ali/bravix/advertising3.jpg' },
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('portfolio.title')}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-bravix-orange hover:bg-bravix-orange/90 text-white'
                  : 'border-bravix-orange text-bravix-orange hover:bg-bravix-orange hover:text-white'
              }`}
            >
              {t(tab.labelKey)}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-bravix-navy/20 to-bravix-orange/20 flex items-center justify-center hidden">
                    <div className="w-20 h-20 bg-gradient-to-br from-bravix-navy to-bravix-orange rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{item.id}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{t(item.titleKey)}</h3>
                    <p className="text-sm opacity-90">{t(`portfolio.${item.category}`)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
