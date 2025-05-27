
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

  const portfolioItems = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    title: `Project ${i + 1}`,
    category: tabs[Math.floor(Math.random() * tabs.length)].id,
  }));

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-bravix-navy/20 to-bravix-orange/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-bravix-navy to-bravix-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{item.id + 1}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`portfolio.${item.category}`)}
                  </p>
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
