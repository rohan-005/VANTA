import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionBadge } from '../ui/SectionBadge';
import { VANTA_SYSTEMS } from '../../data/systems';

export const BuildCTA: React.FC = () => {
  const [resolution, setResolution] = useState<'1440p' | '4k' | '4k-extreme'>('4k');
  const [workload, setWorkload] = useState<'gaming' | 'esports' | 'creation'>('gaming');

  const getRecommendedSystem = () => {
    if (resolution === '1440p') return VANTA_SYSTEMS[0]; // Core
    if (resolution === '4k-extreme' || workload === 'creation') return VANTA_SYSTEMS[2]; // Ultra
    return VANTA_SYSTEMS[1]; // Pro
  };

  const rec = getRecommendedSystem();

  return (
    <section
      id="build"
      className="relative w-full py-20 lg:py-32 bg-vanta-cream border-b border-vanta-sand overflow-hidden text-vanta-dark"
    >
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-40 pointer-events-none" />

      <div className="w-full gutter-padding relative z-10">
        
        <div className="bg-vanta-ivory border border-vanta-sand rounded-sm p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden shadow-card-sharp">
          
          {/* Top Corner Decorative Marker */}
          <div className="absolute top-0 left-0 w-32 h-1.5 bg-vanta-dark" />

          {/* Left Column: Headline & Interactive Config Teaser */}
          <div className="lg:col-span-7 space-y-6">
            <SectionBadge number="05" label="CUSTOM HARDWARE CONFIGURATOR" theme="light" />

            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tight text-vanta-dark leading-[0.95]">
              YOUR GAME. <br />
              <span className="text-vanta-dark underline decoration-vanta-lime decoration-4">YOUR BUILD.</span>
            </h2>

            <p className="text-base text-vanta-text-muted-dark font-sans leading-relaxed">
              Configure a hand-benched gaming system tuned specifically for your monitor's refresh rate and target frame times.
            </p>

            {/* Configurator Teaser Selector Matrix */}
            <div className="space-y-4 pt-4 border-t border-vanta-sand">
              
              {/* Target Resolution Selector */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-vanta-text-muted-dark font-bold block mb-2">
                  01 // SELECT TARGET RESOLUTION
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setResolution('1440p')}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                      resolution === '1440p'
                        ? 'bg-vanta-dark text-vanta-lime border-vanta-dark font-bold'
                        : 'bg-vanta-cream text-vanta-text-muted-dark border-vanta-sand hover:border-vanta-dark'
                    }`}
                  >
                    1440P HIGH-FPS
                  </button>
                  <button
                    onClick={() => setResolution('4k')}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                      resolution === '4k'
                        ? 'bg-vanta-dark text-vanta-lime border-vanta-dark font-bold'
                        : 'bg-vanta-cream text-vanta-text-muted-dark border-vanta-sand hover:border-vanta-dark'
                    }`}
                  >
                    4K COMPETITIVE
                  </button>
                  <button
                    onClick={() => setResolution('4k-extreme')}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                      resolution === '4k-extreme'
                        ? 'bg-vanta-dark text-vanta-lime border-vanta-dark font-bold'
                        : 'bg-vanta-cream text-vanta-text-muted-dark border-vanta-sand hover:border-vanta-dark'
                    }`}
                  >
                    4K EXTREME
                  </button>
                </div>
              </div>

              {/* Workload Selector */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-vanta-text-muted-dark font-bold block mb-2">
                  02 // PRIMARY WORKLOAD
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setWorkload('esports')}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                      workload === 'esports'
                        ? 'bg-vanta-stone text-vanta-dark border-vanta-dark font-bold'
                        : 'bg-vanta-cream text-vanta-text-muted-dark border-vanta-sand'
                    }`}
                  >
                    ESPORTS / LOW LATENCY
                  </button>
                  <button
                    onClick={() => setWorkload('gaming')}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                      workload === 'gaming'
                        ? 'bg-vanta-stone text-vanta-dark border-vanta-dark font-bold'
                        : 'bg-vanta-cream text-vanta-text-muted-dark border-vanta-sand'
                    }`}
                  >
                    AAA RAYTRACING
                  </button>
                  <button
                    onClick={() => setWorkload('creation')}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-colors ${
                      workload === 'creation'
                        ? 'bg-vanta-stone text-vanta-dark border-vanta-dark font-bold'
                        : 'bg-vanta-cream text-vanta-text-muted-dark border-vanta-sand'
                    }`}
                  >
                    CREATOR & AI
                  </button>
                </div>
              </div>

            </div>

            {/* Primary Action Button */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => alert(`Redirecting to custom configurator flow for ${rec.name}...`)}
                icon={<ArrowRight className="w-4 h-4 text-vanta-dark" />}
                className="w-full sm:w-auto shadow-md"
              >
                START CUSTOM CONFIGURATION →
              </Button>
            </div>
          </div>

          {/* Right Column: Dynamic Recommended System Preview Box */}
          <div className="lg:col-span-5 bg-vanta-dark text-vanta-ivory border border-vanta-dark rounded-sm p-6 space-y-4 relative shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-vanta-border">
              <span className="font-mono text-xs text-vanta-lime uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-vanta-lime animate-pulse" />
                RECOMMENDED MATCH
              </span>
              <span className="font-mono text-[10px] text-vanta-text-muted-light uppercase">
                PREVIEW
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] text-vanta-text-muted-light uppercase font-bold">
                {rec.category} ARCHITECTURE
              </span>
              <h3 className="text-3xl font-display font-extrabold text-vanta-ivory uppercase tracking-wide">
                {rec.name}
              </h3>
              <p className="font-sans text-xs text-vanta-lime mt-1 font-bold">
                {rec.tagline}
              </p>
            </div>

            <div className="space-y-2 py-3 border-t border-b border-vanta-border font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-vanta-text-muted-light">GPU</span>
                <span className="text-vanta-ivory font-semibold">{rec.specifications.gpu.split(' ')[2]} {rec.specifications.gpu.split(' ')[3]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-vanta-text-muted-light">CPU</span>
                <span className="text-vanta-ivory font-semibold">{rec.specifications.cpu.split(' ')[0]} {rec.specifications.cpu.split(' ')[2]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-vanta-text-muted-light">COOLER</span>
                <span className="text-vanta-ivory font-semibold">{rec.specifications.cooling}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-vanta-text-muted-light">EST. POWER</span>
                <span className="text-vanta-lime font-bold">{rec.estimatedPowerDraw}</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-2">
              <span className="font-mono text-xs text-vanta-text-muted-light">ESTIMATED PRICE</span>
              <span className="font-display font-extrabold text-3xl text-vanta-lime">
                {rec.startingPriceLabel}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-vanta-text-muted-light">
              <ShieldCheck className="w-4 h-4 text-vanta-lime shrink-0" />
              <span>3-YEAR COMPREHENSIVE WARRANTY INCLUDED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
