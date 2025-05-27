
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import AnimatedBanner from '@/components/AnimatedBanner';
import HeroSection from '@/components/HeroSection';
import WhyBravixSection from '@/components/WhyBravixSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [showBanner, setShowBanner] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionName: string) => {
    const refs = {
      hero: heroRef,
      services: servicesRef,
      about: aboutRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };

    const targetRef = refs[sectionName as keyof typeof refs];
    
    if (targetRef?.current) {
      setShowBanner(true);
      setTimeout(() => {
        targetRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 500);
    }
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} />
      
      <AnimatedBanner 
        isVisible={showBanner} 
        onComplete={() => setShowBanner(false)} 
      />

      <div ref={heroRef}>
        <HeroSection onScrollToContact={scrollToContact} />
      </div>

      <WhyBravixSection />

      <div ref={servicesRef}>
        <ServicesSection onScrollToContact={scrollToContact} />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={portfolioRef}>
        <PortfolioSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
