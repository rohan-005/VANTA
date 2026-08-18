import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { System } from '../../types';
import { Button } from '../ui/Button';

export interface SystemCardProps {
  system: System;
  onConfigure: (systemId: string) => void;
  onViewSpecs: (system: System) => void;
}

export const SystemCard: React.FC<SystemCardProps> = ({
  system,
  onConfigure,
  onViewSpecs,
}) => {
  const isPro = system.id === 'vanta-pro';

  return (
    <div
      className={`relative w-full bg-vanta-surface border ${
        isPro
          ? 'border-vanta-lime shadow-glow-lime-sm'
          : 'border-vanta-border hover:border-vanta-border-bright'
      } rounded-sm p-6 flex flex-col justify-between transition-all duration-300 group`}
    >
      {/* Featured Badge */}
      {system.badge && (
        <div className="absolute -top-3 left-6 px-3 py-0.5 bg-vanta-lime text-vanta-black font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md">
          {system.badge}
        </div>
      )}

      <div>
        {/* Hardware Render Thumbnail Box */}
        <div className="relative w-full aspect-[16/10] bg-vanta-dark border border-vanta-border rounded-sm p-4 mb-6 overflow-hidden flex items-center justify-center group-hover:border-vanta-lime/40 transition-colors">
          <div className="absolute inset-0 bg-line-grid-subtle opacity-20 pointer-events-none" />

          {/* Render Representation */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
            <div className={`w-20 h-24 border-2 ${isPro ? 'border-vanta-lime' : 'border-vanta-border'} bg-vanta-surface rounded-sm relative flex flex-col items-center justify-center p-2 shadow-xl`}>
              <Cpu className={`w-8 h-8 ${isPro ? 'text-vanta-lime' : 'text-vanta-text-muted'}`} />
              <span className="font-mono text-[8px] text-vanta-text-muted mt-2">
                {system.category.toUpperCase()}_RIG
              </span>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-vanta-lime" />
            </div>
            <span className="font-mono text-[10px] uppercase text-vanta-lime tracking-widest pt-1">
              [{system.targetResolution}]
            </span>
          </div>

          <div className="absolute bottom-2 left-3 font-mono text-[9px] text-vanta-text-muted">
            POWER: {system.estimatedPowerDraw}
          </div>
        </div>

        {/* System Title & Tagline */}
        <div className="space-y-1 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-display font-extrabold uppercase tracking-wide text-vanta-text-primary group-hover:text-vanta-lime transition-colors">
              {system.name}
            </h3>
            <span className="font-mono text-xs text-vanta-text-muted uppercase">
              {system.category} TIER
            </span>
          </div>
          <p className="font-sans text-xs text-vanta-lime font-medium">
            {system.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="font-sans text-xs text-vanta-text-muted leading-relaxed mb-6">
          {system.description}
        </p>

        {/* Key Hardware Specs Breakdown */}
        <div className="space-y-2 py-4 border-t border-b border-vanta-border/80 mb-6 font-mono text-xs">
          <div className="flex justify-between items-center py-1">
            <span className="text-vanta-text-muted text-[11px]">PROCESSOR</span>
            <span className="text-vanta-text-primary text-[11px] font-semibold truncate max-w-[200px]" title={system.specifications.cpu}>
              {system.specifications.cpu.split('(')[0]}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-t border-vanta-border/40">
            <span className="text-vanta-text-muted text-[11px]">GRAPHICS</span>
            <span className="text-vanta-lime text-[11px] font-bold truncate max-w-[200px]" title={system.specifications.gpu}>
              {system.specifications.gpu}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-t border-vanta-border/40">
            <span className="text-vanta-text-muted text-[11px]">MEMORY</span>
            <span className="text-vanta-text-primary text-[11px] font-medium">
              {system.specifications.memory.split(' ')[0]} {system.specifications.memory.split(' ')[1]}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-t border-vanta-border/40">
            <span className="text-vanta-text-muted text-[11px]">STORAGE</span>
            <span className="text-vanta-text-primary text-[11px] font-medium">
              {system.specifications.storage.split(' ')[0]} NVMe
            </span>
          </div>
        </div>

        {/* System Highlights Pills */}
        <div className="space-y-1.5 mb-6">
          {system.highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 font-sans text-[11px] text-vanta-text-muted">
              <span className="w-1 h-1 rounded-full bg-vanta-lime shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & CTAs */}
      <div className="space-y-4 pt-4 border-t border-vanta-border">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-xs text-vanta-text-muted">STARTING AT</span>
          <span className="font-display font-bold text-2xl text-vanta-text-primary">
            {system.startingPriceLabel}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={isPro ? "primary" : "secondary"}
            size="sm"
            onClick={() => onConfigure(system.id)}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="w-full text-[11px]"
          >
            CONFIGURE
          </Button>

          <Button
            variant="outline-lime"
            size="sm"
            onClick={() => onViewSpecs(system)}
            className="w-full text-[11px]"
          >
            FULL SPECS
          </Button>
        </div>
      </div>
    </div>
  );
};
