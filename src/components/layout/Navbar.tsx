import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Cpu, Sliders, Info, ArrowUpRight } from 'lucide-react';
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
          ? 'bg-vanta-black/85 backdrop-blur-md border-b border-vanta-border py-3 shadow-2xl'
          : 'bg-gradient-to-b from-vanta-black/90 to-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-vanta-lime rounded-sm"
          aria-label="VANTA Homepage"
        >
          <div className="w-8 h-8 bg-vanta-surface border border-vanta-border group-hover:border-vanta-lime flex items-center justify-center rounded-sm transition-colors">
            <span className="font-display font-bold text-lg text-vanta-lime">V</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-2xl tracking-wider text-vanta-text-primary group-hover:text-vanta-lime transition-colors">
              VANTA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-vanta-text-muted -mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-vanta-lime animate-pulse" />
              SYSTEMS // LABS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
          <button
            onClick={() => handleNavClick('showcase')}
            className="text-xs font-mono uppercase tracking-widest text-vanta-text-muted hover:text-vanta-lime transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:text-vanta-lime"
          >
            <Cpu className="w-3.5 h-3.5 text-vanta-text-muted" />
            01 // SHOWCASE
          </button>

          <button
            onClick={() => handleNavClick('engineering')}
            className="text-xs font-mono uppercase tracking-widest text-vanta-text-muted hover:text-vanta-lime transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:text-vanta-lime"
          >
            <Shield className="w-3.5 h-3.5 text-vanta-text-muted" />
            02 // ENGINEERING
          </button>

          <button
            onClick={() => handleNavClick('systems')}
            className="text-xs font-mono uppercase tracking-widest text-vanta-text-muted hover:text-vanta-lime transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:text-vanta-lime"
          >
            <Sliders className="w-3.5 h-3.5 text-vanta-text-muted" />
            03 // LINEUP
          </button>

          <button
            onClick={() => handleNavClick('build')}
            className="text-xs font-mono uppercase tracking-widest text-vanta-text-muted hover:text-vanta-lime transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:text-vanta-lime"
          >
            <Info className="w-3.5 h-3.5 text-vanta-text-muted" />
            04 // BUILD
          </button>
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline-lime"
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
          className="md:hidden p-2 text-vanta-text-primary hover:text-vanta-lime focus:outline-none focus-visible:ring-1 focus-visible:ring-vanta-lime rounded-sm border border-vanta-border bg-vanta-surface"
          aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer (Responsive at 390px) */}
      {isMobileOpen && (
        <div className="md:hidden w-full bg-vanta-surface/98 border-b border-vanta-border backdrop-blur-xl px-4 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-vanta-text-muted px-2 pb-2 border-b border-vanta-border flex items-center justify-between">
              <span>SYSTEM_NAVIGATION</span>
              <span className="text-vanta-lime">● ACTIVE</span>
            </div>

            <button
              onClick={() => handleNavClick('showcase')}
              className="flex items-center justify-between p-3 rounded-sm bg-vanta-dark border border-vanta-border text-vanta-text-primary hover:border-vanta-lime text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">01 // PRODUCT SHOWCASE</span>
              <Cpu className="w-4 h-4 text-vanta-lime" />
            </button>

            <button
              onClick={() => handleNavClick('engineering')}
              className="flex items-center justify-between p-3 rounded-sm bg-vanta-dark border border-vanta-border text-vanta-text-primary hover:border-vanta-lime text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">02 // THERMAL ENGINEERING</span>
              <Shield className="w-4 h-4 text-vanta-lime" />
            </button>

            <button
              onClick={() => handleNavClick('systems')}
              className="flex items-center justify-between p-3 rounded-sm bg-vanta-dark border border-vanta-border text-vanta-text-primary hover:border-vanta-lime text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">03 // SYSTEM LINEUP</span>
              <Sliders className="w-4 h-4 text-vanta-lime" />
            </button>

            <button
              onClick={() => handleNavClick('build')}
              className="flex items-center justify-between p-3 rounded-sm bg-vanta-dark border border-vanta-border text-vanta-text-primary hover:border-vanta-lime text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest">04 // CUSTOM BUILDER</span>
              <Info className="w-4 h-4 text-vanta-lime" />
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
