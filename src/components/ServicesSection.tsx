
import { Palette, Printer, Share2, Megaphone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServicesSectionProps {
  onScrollToContact: () => void;
}

const ServicesSection = ({ onScrollToContact }: ServicesSectionProps) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      titleKey: 'services.graphic.title',
      descKey: 'services.graphic.desc',
      color: 'text-pink-500',
      image: '/c/ali/bravix/design1.jpg',
    },
    {
      icon: Printer,
      titleKey: 'services.printing.title',
      descKey: 'services.printing.desc',
      color: 'text-green-500',
      image: '/c/ali/bravix/printing1.jpg',
    },
    {
      icon: Share2,
      titleKey: 'services.social.title',
      descKey: 'services.social.desc',
      color: 'text-blue-500',
      image: '/c/ali/bravix/social1.jpg',
    },
    {
      icon: Megaphone,
      titleKey: 'services.ads.title',
      descKey: 'services.ads.desc',
      color: 'text-bravix-orange',
      image: '/c/ali/bravix/advertising1.jpg',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-in border-0 shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-bravix-navy/20 to-bravix-orange/20 flex items-center justify-center hidden">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bravix-navy to-bravix-orange rounded-full mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300 -mt-8 relative z-10">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {t(service.descKey)}
                  </CardDescription>
                  
                  <Button
                    onClick={onScrollToContact}
                    variant="outline"
                    size="sm"
                    className="w-full border-bravix-orange text-bravix-orange hover:bg-bravix-orange hover:text-white transition-colors duration-300"
                  >
                    {t('services.cta')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
