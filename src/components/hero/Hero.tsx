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
      className="relative w-full min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-vanta-ivory border-b border-vanta-sand overflow-hidden flex flex-col justify-between"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-40 pointer-events-none" />

      {/* Radial Accent Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-vanta-lime/10 via-vanta-cream to-transparent blur-3xl pointer-events-none" />

      <div className="w-full gutter-padding relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 3-Layer Clear Product Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Layer 1: Clear Category Eyebrow Badge */}
            <SectionBadge number="01" label="PREMIUM GAMING PCs" theme="light" />

            {/* Layer 2: Big Dominant Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-tight text-vanta-dark leading-[0.95]">
              BUILT FOR THE WAY <br />
              <span className="text-vanta-dark border-b-4 border-vanta-lime pb-1">
                YOU PLAY.
              </span>
            </h1>

            {/* Layer 3: Clear Supporting Value Proposition */}
            <p className="text-base sm:text-lg text-vanta-text-body font-sans max-w-xl leading-relaxed">
              High-performance custom gaming desktops engineered for serious players who demand unyielding 4K framerates, thermal management, and hand-benched craft.
            </p>

            {/* Action CTAs: Product-Specific Next Steps */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={onExploreClick}
                icon={<ArrowRight className="w-4 h-4 text-vanta-dark" />}
                className="w-full sm:w-auto shadow-md"
              >
                EXPLORE GAMING PCs
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onConfigureClick}
                className="w-full sm:w-auto"
              >
                BUILD YOUR GAMING PC
              </Button>
            </div>

            {/* Technical Hardware Feature Badges */}
            <div className="pt-6 border-t border-vanta-sand w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-vanta-cream border border-vanta-sand rounded-sm shadow-sm">
                <div className="p-2 bg-vanta-dark text-vanta-lime rounded-sm">
                  <Thermometer className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-vanta-dark font-bold">
                    SUB-35°C THERMALS
                  </div>
                  <div className="font-sans text-xs text-vanta-text-body">
                    Dual-Chamber Flow
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-vanta-cream border border-vanta-sand rounded-sm shadow-sm">
                <div className="p-2 bg-vanta-dark text-vanta-lime rounded-sm">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-vanta-dark font-bold">
                    UNTHROTTLED
                  </div>
                  <div className="font-sans text-xs text-vanta-text-body">
                    Hand-Benched Silicon
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-vanta-cream border border-vanta-sand rounded-sm shadow-sm">
                <div className="p-2 bg-vanta-dark text-vanta-lime rounded-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-vanta-dark font-bold">
                    72-HR BENCHED
                  </div>
                  <div className="font-sans text-xs text-vanta-text-body">
                    Flight-Crate Protection
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Gaming PC Hardware Render */}
          <div className="lg:col-span-5 w-full">
            <HeroGraphics />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Anchor Prompt */}
      <div className="w-full gutter-padding pt-8 hidden sm:flex items-center justify-between text-vanta-text-body border-t border-vanta-sand mt-8">
        <div className="font-mono text-[11px] uppercase tracking-widest flex items-center gap-2 font-bold">
          <span className="w-2 h-2 rounded-full bg-vanta-dark animate-ping" />
          <span className="text-vanta-dark">VANTA LABS // FLAGSHIP GAMING SYSTEMS</span>
        </div>
        <button
          onClick={onExploreClick}
          className="font-mono text-[11px] uppercase tracking-widest hover:text-vanta-dark flex items-center gap-1 transition-colors font-bold"
        >
          SCROLL TO EXPLORE SYSTEMS <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
