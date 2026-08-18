import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Thermometer, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionBadge } from '../ui/SectionBadge';
import { HeroGraphics } from './HeroGraphics';

export interface HeroProps {
  onConfigureClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onConfigureClick,
  onExploreClick,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-vanta-black border-b border-vanta-border overflow-hidden flex flex-col justify-between"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-30 pointer-events-none" />

      {/* Top Ambient Lighting Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-vanta-lime/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Monospace Section Indicator */}
            <SectionBadge number="01" label="PRECISION HARDWARE ARCHITECTURE" />

            {/* Dominant Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-vanta-text-primary leading-[0.95]">
              BUILT WITHOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vanta-lime via-vanta-lime-hover to-white text-glow-lime">
                COMPROMISE.
              </span>
            </h1>

            {/* Honest Product Positioning Subtitle */}
            <p className="text-base sm:text-lg text-vanta-text-muted font-sans max-w-2xl leading-relaxed">
              Premium gaming desktops engineered for players who care about thermal stability, acoustic discipline, and the luxury of owning hand-benched hardware.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={onConfigureClick}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-glow-lime"
              >
                BUILD YOUR SYSTEM
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreClick}
                className="w-full sm:w-auto"
              >
                VIEW SHOWCASE
              </Button>
            </div>

            {/* Technical Hardware Feature Badges */}
            <div className="pt-6 border-t border-vanta-border/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-vanta-surface/60 border border-vanta-border rounded-sm">
                <div className="p-2 bg-vanta-dark text-vanta-lime rounded-sm border border-vanta-border">
                  <Thermometer className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-vanta-text-primary font-semibold">
                    SUB-35°C AMBIENT
                  </div>
                  <div className="font-sans text-xs text-vanta-text-muted">
                    Dual-Chamber Ducting
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-vanta-surface/60 border border-vanta-border rounded-sm">
                <div className="p-2 bg-vanta-dark text-vanta-lime rounded-sm border border-vanta-border">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-vanta-text-primary font-semibold">
                    UNTHROTTLED
                  </div>
                  <div className="font-sans text-xs text-vanta-text-muted">
                    Hand-Benched Silicon
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-vanta-surface/60 border border-vanta-border rounded-sm">
                <div className="p-2 bg-vanta-dark text-vanta-lime rounded-sm border border-vanta-border">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-vanta-text-primary font-semibold">
                    72-HR BENCHED
                  </div>
                  <div className="font-sans text-xs text-vanta-text-muted">
                    Flight-Crate Protection
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hardware Visual Representation */}
          <div className="lg:col-span-5 w-full">
            <HeroGraphics />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Anchor Prompt */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-8 hidden sm:flex items-center justify-between text-vanta-text-muted border-t border-vanta-border/40 mt-8">
        <div className="font-mono text-[11px] uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-vanta-lime animate-ping" />
          <span>VANTA LABS // CHASSIS 01 FLAGSHIP</span>
        </div>
        <button
          onClick={onExploreClick}
          className="font-mono text-[11px] uppercase tracking-widest hover:text-vanta-lime flex items-center gap-1 transition-colors"
        >
          SCROLL TO EXPLORE <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
