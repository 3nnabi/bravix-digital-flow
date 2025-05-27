
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onScrollToContact: () => void;
}

const HeroSection = ({ onScrollToContact }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-bravix-navy via-slate-900 to-bravix-navy">
      {/* Professional Animated Background Shapes */}
      <div className="absolute inset-0">
        {/* Floating circles with entrance animation */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-bravix-orange/20 rounded-full geometric-entrance"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full geometric-entrance animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-bravix-orange/10 rounded-full geometric-entrance animate-float" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-400/20 rounded-full geometric-entrance animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Shapes with entrance animation */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-bravix-orange/30 rotate-45 geometric-entrance animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-blue-400/30 rotate-12 geometric-entrance animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Additional professional geometric elements */}
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-bravix-orange/20 to-blue-500/20 transform rotate-45 geometric-entrance" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-3/4 right-10 w-14 h-14 border border-white/20 rounded-full geometric-entrance" style={{ animationDelay: '1.8s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-in-top">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in" style={{ animationDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>
          
          <Button
            onClick={onScrollToContact}
            size="lg"
            className="bg-bravix-orange hover:bg-bravix-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
