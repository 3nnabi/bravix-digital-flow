
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
    },
    {
      icon: Printer,
      titleKey: 'services.printing.title',
      descKey: 'services.printing.desc',
      color: 'text-green-500',
    },
    {
      icon: Share2,
      titleKey: 'services.social.title',
      descKey: 'services.social.desc',
      color: 'text-blue-500',
    },
    {
      icon: Megaphone,
      titleKey: 'services.ads.title',
      descKey: 'services.ads.desc',
      color: 'text-bravix-orange',
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
                className="group hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bravix-navy to-bravix-orange rounded-full mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
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
