import React, { useState } from 'react';
import { VANTA_SYSTEMS } from '../../data/systems';
import { System, SystemCategory } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';
import { SystemCard } from '../product/SystemCard';
import { Modal } from '../ui/Modal';
import { Cpu } from 'lucide-react';
import { SpecPill } from '../ui/SpecPill';

export interface SystemsLineupProps {
  onConfigureSystem?: (systemId: string) => void;
}

export const SystemsLineup: React.FC<SystemsLineupProps> = ({
  onConfigureSystem,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | SystemCategory>('All');
  const [activeModalSystem, setActiveModalSystem] = useState<System | null>(null);

  const filteredSystems = VANTA_SYSTEMS.filter((sys) => {
    if (selectedFilter === 'All') return true;
    return sys.category === selectedFilter;
  });

  const handleConfigure = (systemId: string) => {
    if (onConfigureSystem) {
      onConfigureSystem(systemId);
    } else {
      const buildSection = document.getElementById('build');
      if (buildSection) {
        buildSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="systems"
      className="relative w-full py-20 lg:py-32 bg-vanta-dark border-b border-vanta-border overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header & Tier Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <SectionBadge number="04" label="HARDWARE LINEUP" />
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-vanta-text-primary">
              SYSTEM <span className="text-vanta-lime">LINEUP</span>
            </h2>
            <p className="text-base text-vanta-text-muted font-sans max-w-xl">
              Three hand-benched hardware tiers configured around frame rates, target resolution, and workstation memory capacity.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2 bg-vanta-surface p-1.5 rounded-sm border border-vanta-border self-start md:self-auto">
            {(['All', 'Core', 'Pro', 'Ultra'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
                  selectedFilter === category
                    ? 'bg-vanta-lime text-vanta-black font-semibold'
                    : 'text-vanta-text-muted hover:text-vanta-text-primary'
                }`}
              >
                {category === 'All' ? 'ALL RIGS' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Cards (1 col mobile, 3 cols desktop 1440px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredSystems.map((system) => (
            <SystemCard
              key={system.id}
              system={system}
              onConfigure={handleConfigure}
              onViewSpecs={(sys) => setActiveModalSystem(sys)}
            />
          ))}
        </div>

      </div>

      {/* Hardware Detailed Inspection Modal */}
      {activeModalSystem && (
        <Modal
          isOpen={!!activeModalSystem}
          onClose={() => setActiveModalSystem(null)}
          title={activeModalSystem.name}
          subtitle={`FULL HARDWARE SPECIFICATION // ${activeModalSystem.category.toUpperCase()} TIER`}
        >
          <div className="space-y-6">
            <div className="p-4 bg-vanta-dark border border-vanta-border rounded-sm">
              <span className="font-mono text-[10px] text-vanta-lime uppercase tracking-widest block mb-1">
                SYSTEM SUMMARY
              </span>
              <p className="font-sans text-xs text-vanta-text-primary">
                {activeModalSystem.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm uppercase text-vanta-lime tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4" /> CORE HARDWARE SPECIFICATIONS
              </h4>

              <div className="space-y-2">
                <SpecPill label="PROCESSOR (CPU)" value={activeModalSystem.specifications.cpu} highlight />
                <SpecPill label="GRAPHICS (GPU)" value={activeModalSystem.specifications.gpu} highlight />
                <SpecPill label="SYSTEM MEMORY (RAM)" value={activeModalSystem.specifications.memory} />
                <SpecPill label="NVMe STORAGE" value={activeModalSystem.specifications.storage} />
                <SpecPill label="LIQUID COOLER" value={activeModalSystem.specifications.cooling} />
                <SpecPill label="POWER DELIVERY" value={activeModalSystem.specifications.powerSupply} />
                <SpecPill label="MOTHERBOARD" value={activeModalSystem.specifications.motherboard} />
                <SpecPill label="CHASSIS ENCLOSURE" value={activeModalSystem.specifications.chassis} />
              </div>
            </div>

            <div className="pt-4 border-t border-vanta-border flex items-center justify-between text-xs font-mono text-vanta-text-muted">
              <span>TARGET RESOLUTION: [{activeModalSystem.targetResolution}]</span>
              <span>PEAK POWER: [{activeModalSystem.estimatedPowerDraw}]</span>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
