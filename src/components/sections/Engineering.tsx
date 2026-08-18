import React from 'react';
import { Shield, Wind, Layers } from 'lucide-react';
import { SectionBadge } from '../ui/SectionBadge';
import { CoolingVisualizer } from '../product/CoolingVisualizer';

export const Engineering: React.FC = () => {
  return (
    <section
      id="engineering"
      className="relative w-full py-20 lg:py-32 bg-vanta-cream border-b border-vanta-sand overflow-hidden text-vanta-dark"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-40 pointer-events-none" />

      <div className="w-full gutter-padding relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <SectionBadge number="03" label="THERMAL & STRUCTURAL ENGINEERING" theme="light" />
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-vanta-dark">
            ENGINEERED FOR <span className="text-vanta-dark underline decoration-vanta-lime decoration-4">STABILITY</span>
          </h2>
          <p className="text-base text-vanta-text-body font-sans max-w-2xl leading-relaxed">
            Sustained high performance requires thermal management that scales linearly with silicon wattage. Here is how VANTA systems prevent thermal throttling under heavy 4K gaming and rendering.
          </p>
        </div>

        {/* Embedded Interactive Airflow & Cooling Visualizer */}
        <CoolingVisualizer />

        {/* 3 Technical Architecture Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-vanta-ivory border border-vanta-sand hover:border-vanta-dark rounded-sm transition-colors space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-vanta-dark border border-vanta-dark rounded-sm flex items-center justify-center text-vanta-lime">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-xl uppercase tracking-wide text-vanta-dark">
                DUAL-CHAMBER ISOLATION
              </h3>
              <p className="font-sans text-xs text-vanta-text-body leading-relaxed">
                Radiant heat from 1000W+ power supplies and storage drives is isolated in a rear secondary chamber, preventing heat bleed into CPU and GPU cold intake zones.
              </p>
            </div>
            <div className="pt-4 border-t border-vanta-sand flex items-center justify-between font-mono text-[11px] text-vanta-text-body">
              <span>POWER BAY</span>
              <span className="text-vanta-dark font-bold">ISOLATED</span>
            </div>
          </div>

          <div className="p-6 bg-vanta-ivory border border-vanta-sand hover:border-vanta-dark rounded-sm transition-colors space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-vanta-dark border border-vanta-dark rounded-sm flex items-center justify-center text-vanta-lime">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-xl uppercase tracking-wide text-vanta-dark">
                STATIC PRESSURE TUNING
              </h3>
              <p className="font-sans text-xs text-vanta-text-body leading-relaxed">
                High static-pressure fluid-dynamic fans force cool air through micro-mesh radiator fins, maintaining positive air acceleration while keeping noise below 28 dBA.
              </p>
            </div>
            <div className="pt-4 border-t border-vanta-sand flex items-center justify-between font-mono text-[11px] text-vanta-text-body">
              <span>ACOUSTICS</span>
              <span className="text-vanta-dark font-bold">&lt;28 dBA</span>
            </div>
          </div>

          <div className="p-6 bg-vanta-ivory border border-vanta-sand hover:border-vanta-dark rounded-sm transition-colors space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-vanta-dark border border-vanta-dark rounded-sm flex items-center justify-center text-vanta-lime">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-xl uppercase tracking-wide text-vanta-dark">
                CNC BILLET STRENGTH
              </h3>
              <p className="font-sans text-xs text-vanta-text-body leading-relaxed">
                6061 billet aluminum frame with integrated structural anti-sag column bolted directly to the chassis spine to eliminate heavy triple-slot GPU flex.
              </p>
            </div>
            <div className="pt-4 border-t border-vanta-sand flex items-center justify-between font-mono text-[11px] text-vanta-text-body">
              <span>FRAME RIGIDITY</span>
              <span className="text-vanta-dark font-bold">ZERO SAG</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
