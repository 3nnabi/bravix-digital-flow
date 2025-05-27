
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
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!shouldRender) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-banner-slide">
      <div className="bg-gradient-to-r from-bravix-navy to-bravix-orange text-white py-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
          Bravix
        </h2>
        <p className="text-sm mt-1 opacity-90">Digital Marketing Solutions</p>
      </div>
    </div>
  );
};

export default AnimatedBanner;
