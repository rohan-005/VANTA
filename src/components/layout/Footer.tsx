import React from 'react';
import { ArrowUp, Instagram, Youtube, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-vanta-black border-t border-vanta-border text-vanta-text-muted overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
        
        {/* Top Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-vanta-surface border border-vanta-lime flex items-center justify-center rounded-sm">
                <span className="font-display font-bold text-lg text-vanta-lime">V</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-vanta-text-primary">
                VANTA
              </span>
            </div>

            <p className="font-sans text-xs text-vanta-text-muted leading-relaxed max-w-sm">
              Premium gaming systems engineered for players who care about thermal performance, design integrity, and the experience of owning exceptional hardware.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vanta-surface border border-vanta-border rounded-sm font-mono text-[11px] text-vanta-text-primary">
              <span className="w-2 h-2 rounded-full bg-vanta-lime animate-pulse" />
              <span>VANTA LABS // ONLINE & OPERATIONAL</span>
            </div>
          </div>

          {/* Navigation Columns (8 Cols divided into 4 columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 01: Systems */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-vanta-text-primary font-semibold">
                [ SYSTEMS ]
              </h4>
              <ul className="space-y-2 font-sans text-xs">
                <li><a href="#systems" className="hover:text-vanta-lime transition-colors">VANTA CORE</a></li>
                <li><a href="#systems" className="hover:text-vanta-lime transition-colors">VANTA PRO</a></li>
                <li><a href="#systems" className="hover:text-vanta-lime transition-colors">VANTA ULTRA</a></li>
                <li><a href="#build" className="hover:text-vanta-lime transition-colors">Custom Builds</a></li>
              </ul>
            </div>

            {/* Column 02: Technology */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-vanta-text-primary font-semibold">
                [ TECH ]
              </h4>
              <ul className="space-y-2 font-sans text-xs">
                <li><a href="#engineering" className="hover:text-vanta-lime transition-colors">Dual-Chamber Ducting</a></li>
                <li><a href="#engineering" className="hover:text-vanta-lime transition-colors">Copper Coldplates</a></li>
                <li><a href="#showcase" className="hover:text-vanta-lime transition-colors">Billet Chassis</a></li>
                <li><a href="#showcase" className="hover:text-vanta-lime transition-colors">72-Hour Benching</a></li>
              </ul>
            </div>

            {/* Column 03: Support */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-vanta-text-primary font-semibold">
                [ SUPPORT ]
              </h4>
              <ul className="space-y-2 font-sans text-xs">
                <li className="hover:text-vanta-lime transition-colors cursor-pointer">3-Year Warranty</li>
                <li className="hover:text-vanta-lime transition-colors cursor-pointer">Flight Crate Protection</li>
                <li className="hover:text-vanta-lime transition-colors cursor-pointer">Stress Certification</li>
                <li className="hover:text-vanta-lime transition-colors cursor-pointer">Contact Engineering</li>
              </ul>
            </div>

            {/* Column 04: Connect */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-vanta-text-primary font-semibold">
                [ CONNECT ]
              </h4>
              <div className="flex items-center gap-3 pt-1">
                <button
                  aria-label="Instagram Placeholder"
                  className="p-2 bg-vanta-surface border border-vanta-border hover:border-vanta-lime hover:text-vanta-lime rounded-sm transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </button>
                <button
                  aria-label="YouTube Placeholder"
                  className="p-2 bg-vanta-surface border border-vanta-border hover:border-vanta-lime hover:text-vanta-lime rounded-sm transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </button>
                <button
                  aria-label="GitHub Repository"
                  className="p-2 bg-vanta-surface border border-vanta-border hover:border-vanta-lime hover:text-vanta-lime rounded-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                </button>
              </div>
              <span className="font-mono text-[10px] text-vanta-text-muted block pt-2">
                EST. 2026 // ACDYON TRACK 2
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-vanta-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © 2026 VANTA TECHNOLOGIES INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-vanta-lime cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-vanta-lime cursor-pointer">TERMS OF SALE</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1 bg-vanta-surface border border-vanta-border hover:border-vanta-lime hover:text-vanta-lime rounded-sm flex items-center gap-1 transition-colors"
            >
              TOP <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
