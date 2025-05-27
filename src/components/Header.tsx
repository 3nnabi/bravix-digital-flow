
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'الرئيسية', section: 'hero' },
    { key: 'الخدمات', section: 'services' },
    { key: 'من نحن', section: 'about' },
    { key: 'معرض الأعمال', section: 'portfolio' },
    { key: 'تواصل', section: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Large Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/e3b4989b-a542-4ed9-83bf-78ca6f09bc57.png" 
              alt="Bravix Logo" 
              className="h-16 w-auto logo-bounce-animation transform hover:scale-110 transition-all duration-500"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.section)}
                className="text-foreground hover:text-bravix-orange transition-all duration-300 font-bold text-lg hover:scale-105 transform"
              >
                {item.key}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center hover:scale-110 transition-transform duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.section);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-right px-3 py-3 text-base font-bold text-foreground hover:text-bravix-orange hover:bg-accent rounded-md transition-all duration-300 hover:scale-105 transform"
                >
                  {item.key}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
