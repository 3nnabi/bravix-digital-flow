
import { useState } from 'react';
import { MessageSquare, Instagram, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-in shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                {t('contact.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="border-bravix-orange/30 focus:border-bravix-orange"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="border-bravix-orange/30 focus:border-bravix-orange"
                  />
                </div>
                
                <div>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="border-bravix-orange/30 focus:border-bravix-orange">
                      <SelectValue placeholder={t('contact.service')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="graphic">{t('services.graphic.title')}</SelectItem>
                      <SelectItem value="printing">{t('services.printing.title')}</SelectItem>
                      <SelectItem value="social">{t('services.social.title')}</SelectItem>
                      <SelectItem value="ads">{t('services.ads.title')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Textarea
                    placeholder={t('contact.message')}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    required
                    className="border-bravix-orange/30 focus:border-bravix-orange"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-bravix-orange hover:bg-bravix-orange/90 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Create Something Amazing Together
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ready to elevate your digital presence? Contact us today and let's discuss how we can help your brand stand out in the digital world.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <MessageSquare className="h-6 w-6" />
                </a>
                
                <a
                  href="https://instagram.com/bravix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                
                <a
                  href="https://t.me/bravix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
                >
                  <Send className="h-6 w-6" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-bravix-navy to-bravix-orange rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Why Choose Bravix?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Premium Quality Designs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Fast Turnaround Time
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Competitive Pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
