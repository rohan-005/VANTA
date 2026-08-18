import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Shield, Sliders, Info, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-vanta-ivory/95 backdrop-blur-md border-b border-vanta-sand py-3 shadow-sm'
          : 'bg-gradient-to-b from-vanta-ivory to-transparent py-5'
      }`}
    >
      <div className="w-full gutter-padding flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-vanta-dark rounded-sm"
          aria-label="VANTA Homepage"
        >
          <div className="w-9 h-9 bg-vanta-dark border border-vanta-dark group-hover:border-vanta-lime flex items-center justify-center rounded-sm transition-colors shadow-sm">
            <span className="font-display font-extrabold text-xl text-vanta-lime">V</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-extrabold text-2xl tracking-wider text-vanta-dark group-hover:text-vanta-lime transition-colors leading-none">
              VANTA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-vanta-text-muted-dark mt-0.5 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-vanta-lime animate-pulse" />
              SYSTEMS // LABS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
          <button
            onClick={() => handleNavClick('showcase')}
            className="text-xs font-mono font-bold uppercase tracking-widest text-vanta-text-body hover:text-vanta-dark transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            SHOWCASE
          </button>

          <button
            onClick={() => handleNavClick('engineering')}
            className="text-xs font-mono font-bold uppercase tracking-widest text-vanta-text-body hover:text-vanta-dark transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            ENGINEERING
          </button>

          <button
            onClick={() => handleNavClick('systems')}
            className="text-xs font-mono font-bold uppercase tracking-widest text-vanta-text-body hover:text-vanta-dark transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            SYSTEMS
          </button>

          <button
            onClick={() => handleNavClick('build')}
            className="text-xs font-mono font-bold uppercase tracking-widest text-vanta-text-body hover:text-vanta-dark transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            BUILD
          </button>
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNavClick('systems')}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            EXPLORE SYSTEMS
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2.5 text-vanta-dark hover:text-vanta-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-vanta-dark rounded-sm border border-vanta-sand bg-vanta-cream"
          aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer (Responsive at 390px) */}
      {isMobileOpen && (
        <div className="md:hidden w-full bg-vanta-cream/98 border-b border-vanta-sand backdrop-blur-xl px-5 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-vanta-text-muted-dark px-2 pb-2 border-b border-vanta-sand flex items-center justify-between">
              <span>NAVIGATION</span>
              <span className="text-vanta-dark font-bold">● ACTIVE</span>
            </div>

            <button
              onClick={() => handleNavClick('showcase')}
              className="flex items-center justify-between p-3.5 rounded-sm bg-vanta-ivory border border-vanta-sand text-vanta-dark font-bold hover:border-vanta-dark text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">PRODUCT SHOWCASE</span>
              <Cpu className="w-4 h-4 text-vanta-dark" />
            </button>

            <button
              onClick={() => handleNavClick('engineering')}
              className="flex items-center justify-between p-3.5 rounded-sm bg-vanta-ivory border border-vanta-sand text-vanta-dark font-bold hover:border-vanta-dark text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">THERMAL ENGINEERING</span>
              <Shield className="w-4 h-4 text-vanta-dark" />
            </button>

            <button
              onClick={() => handleNavClick('systems')}
              className="flex items-center justify-between p-3.5 rounded-sm bg-vanta-ivory border border-vanta-sand text-vanta-dark font-bold hover:border-vanta-dark text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">SYSTEM LINEUP</span>
              <Sliders className="w-4 h-4 text-vanta-dark" />
            </button>

            <button
              onClick={() => handleNavClick('build')}
              className="flex items-center justify-between p-3.5 rounded-sm bg-vanta-ivory border border-vanta-sand text-vanta-dark font-bold hover:border-vanta-dark text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">CUSTOM BUILDER</span>
              <Info className="w-4 h-4 text-vanta-dark" />
            </button>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => handleNavClick('systems')}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                EXPLORE ALL SYSTEMS
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
