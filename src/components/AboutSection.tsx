
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.desc')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-bravix-orange mb-2">100+</div>
                <div className="text-sm text-muted-foreground">{t('about.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bravix-orange mb-2">500+</div>
                <div className="text-sm text-muted-foreground">{t('about.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bravix-orange mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">{t('about.support')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bravix-orange mb-2">5</div>
                <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-bravix-navy to-bravix-orange rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <img src="/c/ali/bravix/design1.jpg" alt="Design Sample" className="w-full h-20 object-cover rounded-lg mb-3" onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }} />
                    <div className="w-full h-20 bg-white/20 rounded-lg mb-3 hidden"></div>
                    <div className="w-3/4 h-3 bg-white/30 rounded mb-2"></div>
                    <div className="w-1/2 h-3 bg-white/30 rounded"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <img src="/c/ali/bravix/printing1.jpg" alt="Printing Sample" className="w-full h-20 object-cover rounded-lg mb-3" onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }} />
                    <div className="w-full h-20 bg-white/20 rounded-lg mb-3 hidden"></div>
                    <div className="w-2/3 h-3 bg-white/30 rounded mb-2"></div>
                    <div className="w-3/4 h-3 bg-white/30 rounded"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <img src="/c/ali/bravix/social1.jpg" alt="Social Media Sample" className="w-full h-20 object-cover rounded-lg mb-3" onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }} />
                    <div className="w-full h-20 bg-white/20 rounded-lg mb-3 hidden"></div>
                    <div className="w-1/2 h-3 bg-white/30 rounded mb-2"></div>
                    <div className="w-2/3 h-3 bg-white/30 rounded"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <img src="/c/ali/bravix/advertising1.jpg" alt="Advertising Sample" className="w-full h-20 object-cover rounded-lg mb-3" onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }} />
                    <div className="w-full h-20 bg-white/20 rounded-lg mb-3 hidden"></div>
                    <div className="w-3/4 h-3 bg-white/30 rounded mb-2"></div>
                    <div className="w-1/3 h-3 bg-white/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
