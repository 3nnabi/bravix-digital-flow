
import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface AnimatedBannerProps {
  isVisible: boolean;
  onComplete: () => void;
}

const AnimatedBanner = ({ isVisible, onComplete }: AnimatedBannerProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-bravix-navy via-slate-900 to-bravix-orange animate-banner-slide">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Prominent Logo Animation */}
          <div className="text-center">
            <div className="mb-8 logo-zoom-animation">
              <img 
                src="/lovable-uploads/e3b4989b-a542-4ed9-83bf-78ca6f09bc57.png" 
                alt="Bravix Logo" 
                className="h-32 md:h-48 lg:h-56 w-auto mx-auto filter brightness-0 invert"
              />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider mb-4 animate-scale-in">
              {t('banner.title')}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 animate-slide-in" style={{ animationDelay: '0.5s' }}>
              {t('banner.subtitle')}
            </p>
          </div>
        </div>
        
        {/* Enhanced Animated geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-white/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-white/30 rotate-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
