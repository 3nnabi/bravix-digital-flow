
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onScrollToContact: () => void;
}

const HeroSection = ({ onScrollToContact }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-bravix-navy via-slate-900 to-bravix-navy" dir="rtl">
      {/* Enhanced Animated Background Shapes */}
      <div className="absolute inset-0">
        {/* Multiple floating circles with staggered animations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-bravix-orange/30 rounded-full animate-float-slow glow-orange"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/30 rounded-full animate-float-medium glow-blue" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-bravix-orange/20 rounded-full animate-float-fast glow-orange" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-400/30 rounded-full animate-float-slow glow-blue" style={{ animationDelay: '1s' }}></div>
        
        {/* Enhanced Geometric Shapes */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-bravix-orange/40 rotate-45 animate-spin-slow glow-orange"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-blue-400/40 rotate-12 animate-pulse-strong glow-blue"></div>
        
        {/* Additional enhanced elements */}
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-bravix-orange/30 to-blue-500/30 transform rotate-45 animate-bounce-subtle"></div>
        <div className="absolute top-3/4 right-10 w-14 h-14 border border-white/30 rounded-full animate-scale-pulse"></div>
        
        {/* New animated particles */}
        <div className="absolute top-10 left-1/2 w-6 h-6 bg-bravix-orange/50 rounded-full animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-8 h-8 bg-blue-400/50 rounded-full animate-float-particle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-10 w-5 h-5 bg-white/40 rounded-full animate-float-particle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Bravix Brand Element */}
          <div className="mb-8 animate-brand-entrance">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-gradient-to-r from-bravix-orange via-white to-bravix-orange bg-clip-text animate-gradient-shift mb-4">
              Bravix
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-bravix-orange to-blue-500 mx-auto animate-line-expand"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-top" style={{ animationDelay: '0.5s' }}>
            هويتك الرقمية تبدأ من هنا
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in" style={{ animationDelay: '0.8s' }}>
            خدمات رقمية متكاملة تشمل التصميم والطباعة وإدارة وسائل التواصل الاجتماعي والإعلان — كل ذلك في منصة حديثة واحدة.
          </p>
          
          <Button
            onClick={onScrollToContact}
            size="lg"
            className="bg-gradient-to-r from-bravix-orange to-orange-600 hover:from-orange-600 hover:to-bravix-orange text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-bravix-orange/50 transition-all duration-500 transform hover:scale-110 animate-scale-in glow-button"
            style={{ animationDelay: '1.1s' }}
          >
            اطلب خدمة
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
