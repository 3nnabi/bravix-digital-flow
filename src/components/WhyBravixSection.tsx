
import { Zap, Rocket, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const WhyBravixSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      titleKey: 'why.quality.title',
      descKey: 'why.quality.desc',
      color: 'text-yellow-500',
    },
    {
      icon: Rocket,
      titleKey: 'why.speed.title',
      descKey: 'why.speed.desc',
      color: 'text-blue-500',
    },
    {
      icon: Lightbulb,
      titleKey: 'why.creative.title',
      descKey: 'why.creative.desc',
      color: 'text-bravix-orange',
    },
  ];

  return (
    <section id="why" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bravix-navy to-bravix-orange rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <Icon className={`h-8 w-8 text-white`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBravixSection;
