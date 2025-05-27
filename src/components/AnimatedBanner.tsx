
import { useEffect, useState } from 'react';

interface AnimatedBannerProps {
  isVisible: boolean;
  onComplete: () => void;
}

const AnimatedBanner = ({ isVisible, onComplete }: AnimatedBannerProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-br from-bravix-navy via-slate-900 to-bravix-orange animate-banner-slide-enhanced">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Enhanced Logo Animation */}
          <div className="text-center">
            <div className="mb-8 logo-zoom-enhanced">
              <img 
                src="/lovable-uploads/e3b4989b-a542-4ed9-83bf-78ca6f09bc57.png" 
                alt="Bravix Logo" 
                className="h-40 md:h-56 lg:h-64 w-auto mx-auto filter brightness-0 invert animate-spin-gentle"
              />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-white via-bravix-orange to-white bg-clip-text tracking-wider mb-4 animate-scale-in-bounce">
              برافيكس
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 animate-slide-in-glow" style={{ animationDelay: '0.5s' }}>
              حلول التسويق الرقمي
            </p>
          </div>
        </div>
        
        {/* Enhanced Animated geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/30 rounded-full animate-float-enhanced glow-white"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/30 rounded-full animate-float-enhanced glow-white" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/20 rounded-full animate-float-enhanced glow-white" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/30 rounded-full animate-float-enhanced glow-white" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-white/40 rotate-45 animate-pulse-strong glow-white"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-white/40 rotate-12 animate-pulse-strong glow-white" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
