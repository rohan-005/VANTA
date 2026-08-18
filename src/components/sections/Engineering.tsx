import React from 'react';
import { Shield, Cpu, Wind, Layers, ArrowUpRight, Check } from 'lucide-react';
import { SectionBadge } from '../ui/SectionBadge';
import { CoolingVisualizer } from '../product/CoolingVisualizer';

export const Engineering: React.FC = () => {
  return (
    <section
      id="engineering"
      className="relative w-full py-20 lg:py-32 bg-vanta-black border-b border-vanta-border overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-30 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <SectionBadge number="03" label="THERMAL & STRUCTURAL ENGINEERING" />
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-vanta-text-primary">
            ENGINEERED FOR <span className="text-vanta-lime">STABILITY</span>
          </h2>
          <p className="text-base text-vanta-text-muted font-sans max-w-2xl">
            Sustained high performance requires thermal management that scales linearly with silicon wattage. Here is how VANTA systems prevent thermal throttling under heavy 4K gaming and rendering.
          </p>
        </div>

        {/* Embedded Interactive Airflow & Cooling Visualizer */}
        <CoolingVisualizer />

        {/* 3 Technical Architecture Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-vanta-surface border border-vanta-border hover:border-vanta-lime/50 rounded-sm transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-vanta-dark border border-vanta-border rounded-sm flex items-center justify-center text-vanta-lime">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-vanta-text-primary">
                DUAL-CHAMBER ISOLATION
              </h3>
              <p className="font-sans text-xs text-vanta-text-muted leading-relaxed">
                Radiant heat from 1000W+ power supplies and storage drives is isolated in a rear secondary chamber, preventing heat bleed into CPU and GPU cold intake zones.
              </p>
            </div>
            <div className="pt-4 border-t border-vanta-border flex items-center justify-between font-mono text-[11px] text-vanta-text-muted">
              <span>ZONE: REAR_PSU</span>
              <span className="text-vanta-lime font-bold">ISOLATED</span>
            </div>
          </div>

          <div className="p-6 bg-vanta-surface border border-vanta-border hover:border-vanta-lime/50 rounded-sm transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-vanta-dark border border-vanta-border rounded-sm flex items-center justify-center text-vanta-lime">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-vanta-text-primary">
                STATIC PRESSURE TUNING
              </h3>
              <p className="font-sans text-xs text-vanta-text-muted leading-relaxed">
                High static-pressure fluid-dynamic fans force cool air through micro-mesh radiator fins, maintaining positive air acceleration while keeping noise below 28 dBA.
              </p>
            </div>
            <div className="pt-4 border-t border-vanta-border flex items-center justify-between font-mono text-[11px] text-vanta-text-muted">
              <span>ACOUSTICS: &lt;28 dBA</span>
              <span className="text-vanta-lime font-bold">WHISPER QUIET</span>
            </div>
          </div>

          <div className="p-6 bg-vanta-surface border border-vanta-border hover:border-vanta-lime/50 rounded-sm transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-vanta-dark border border-vanta-border rounded-sm flex items-center justify-center text-vanta-lime">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-vanta-text-primary">
                CNC BILLET STRENGTH
              </h3>
              <p className="font-sans text-xs text-vanta-text-muted leading-relaxed">
                6061 billet aluminum frame with integrated structural anti-sag column bolted directly to the chassis spine to eliminate heavy triple-slot GPU flex.
              </p>
            </div>
            <div className="pt-4 border-t border-vanta-border flex items-center justify-between font-mono text-[11px] text-vanta-text-muted">
              <span>RIGIDITY: STRUCTURAL</span>
              <span className="text-vanta-lime font-bold">ZERO SAG</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
