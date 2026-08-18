import React, { useState } from 'react';
import { Cpu, Zap, HardDrive, Wind, Thermometer, Droplets, Shield, Layers, Box, CheckCircle2, Activity, Package, ArrowUpRight } from 'lucide-react';
import { SHOWCASE_TABS } from '../../data/systems';
import { ShowcaseTab, ShowcaseFeature } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';
import { SpecPill } from '../ui/SpecPill';

export const ProductShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<ShowcaseTab['id']>('performance');

  const activeTab = SHOWCASE_TABS.find((tab) => tab.id === activeTabId) || SHOWCASE_TABS[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-vanta-lime" />;
      case 'Zap': return <Zap className="w-5 h-5 text-vanta-lime" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-vanta-lime" />;
      case 'Wind': return <Wind className="w-5 h-5 text-vanta-lime" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5 text-vanta-lime" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-vanta-lime" />;
      case 'Shield': return <Shield className="w-5 h-5 text-vanta-lime" />;
      case 'Layers': return <Layers className="w-5 h-5 text-vanta-lime" />;
      case 'Box': return <Box className="w-5 h-5 text-vanta-lime" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-vanta-lime" />;
      case 'Activity': return <Activity className="w-5 h-5 text-vanta-lime" />;
      case 'Package': return <Package className="w-5 h-5 text-vanta-lime" />;
      default: return <Cpu className="w-5 h-5 text-vanta-lime" />;
    }
  };

  return (
    <section
      id="showcase"
      className="relative w-full py-20 lg:py-32 bg-vanta-dark border-b border-vanta-border overflow-hidden"
    >
      {/* Background Subtle Line Grid */}
      <div className="absolute inset-0 bg-line-grid-subtle opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-12">
          <SectionBadge number="02" label="PRODUCT SHOWCASE" />
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-vanta-text-primary">
            INSPECT THE <span className="text-vanta-lime">HARDWARE</span>
          </h2>
          <p className="text-base text-vanta-text-muted font-sans max-w-2xl">
            Select an engineering domain below to inspect how component selection, chassis structural design, and liquid cooling interact.
          </p>
        </div>

        {/* Tab Navigation Switcher */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-vanta-surface border border-vanta-border rounded-sm mb-10">
          {SHOWCASE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex flex-col items-start p-3 sm:p-4 rounded-sm transition-all text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-vanta-lime ${
                  isActive
                    ? 'bg-vanta-elevated border border-vanta-lime/50 text-vanta-text-primary shadow-lg'
                    : 'bg-transparent border border-transparent text-vanta-text-muted hover:text-vanta-text-primary hover:bg-vanta-surface/50'
                }`}
              >
                <span className={`font-mono text-[10px] uppercase tracking-widest ${isActive ? 'text-vanta-lime' : 'text-vanta-text-muted'}`}>
                  [{tab.indexLabel}]
                </span>
                <span className="font-display font-bold text-sm sm:text-base uppercase tracking-wider mt-1">
                  {tab.navTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Panel Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Domain Copy & Specifications */}
          <div className="lg:col-span-6 bg-vanta-surface border border-vanta-border p-6 sm:p-8 rounded-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block px-2.5 py-1 bg-vanta-lime-dim border border-vanta-lime/30 text-vanta-lime font-mono text-[11px] uppercase tracking-widest rounded-sm mb-4">
                {activeTab.specPill}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-vanta-text-primary leading-snug">
                {activeTab.headline}
              </h3>

              <p className="text-sm sm:text-base text-vanta-text-muted font-sans mt-3 leading-relaxed">
                {activeTab.description}
              </p>
            </div>

            {/* Hardware Component Highlights */}
            <div className="space-y-4 pt-4 border-t border-vanta-border">
              {activeTab.features.map((feature: ShowcaseFeature, idx: number) => (
                <div
                  key={idx}
                  className="p-4 bg-vanta-dark border border-vanta-border hover:border-vanta-border-bright rounded-sm transition-colors flex items-start gap-4"
                >
                  <div className="p-2 bg-vanta-surface border border-vanta-border rounded-sm shrink-0 mt-0.5">
                    {getIcon(feature.iconName)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-vanta-text-muted">
                        {feature.title}
                      </span>
                      <span className="font-mono text-xs font-bold text-vanta-lime">
                        {feature.value}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-vanta-text-primary mt-1">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Visual Hardware Viewport */}
          <div className="lg:col-span-6 bg-vanta-surface border border-vanta-border p-6 sm:p-8 rounded-sm flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Viewport Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-vanta-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-vanta-lime animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-vanta-text-primary">
                  HARDWARE_INSPECTOR // {activeTab.navTitle}
                </span>
              </div>
              <span className="font-mono text-[10px] text-vanta-text-muted uppercase">
                CAM_0{activeTab.indexLabel} // 1:1 SCALE
              </span>
            </div>

            {/* Dynamic Hardware Graphical Viewport */}
            <div className="py-8 my-auto flex flex-col items-center justify-center relative min-h-[300px]">
              
              {/* Domain Specific Interactive Render Graphics */}
              {activeTab.id === 'performance' && (
                <div className="w-full flex flex-col items-center space-y-6">
                  <div className="w-48 h-48 bg-vanta-dark border-2 border-vanta-lime rounded-sm relative flex items-center justify-center shadow-glow-lime">
                    <Cpu className="w-20 h-20 text-vanta-lime" />
                    <div className="absolute top-2 left-2 font-mono text-[9px] text-vanta-lime">
                      SILICON_BENCH
                    </div>
                    <div className="absolute bottom-2 right-2 font-mono text-[9px] text-vanta-text-muted">
                      LGA-1700 / AM5
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                    <SpecPill label="GPU BUS" value="PCIe 5.0 x16" highlight />
                    <SpecPill label="VRAM TEMP" value="62°C Peak" />
                  </div>
                </div>
              )}

              {activeTab.id === 'cooling' && (
                <div className="w-full flex flex-col items-center space-y-6">
                  <div className="w-full max-w-md h-48 bg-vanta-dark border border-vanta-lime/60 rounded-sm relative p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-vanta-lime">DUAL 360mm RADIATORS</span>
                      <Wind className="w-5 h-5 text-vanta-lime animate-spin" />
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <div className="p-3 bg-vanta-surface border border-vanta-border rounded-sm text-center">
                        <span className="block font-mono text-xs text-vanta-text-muted">INLET TEMP</span>
                        <span className="font-mono text-lg font-bold text-vanta-lime">22.4°C</span>
                      </div>
                      <div className="text-vanta-text-muted">→</div>
                      <div className="p-3 bg-vanta-surface border border-vanta-border rounded-sm text-center">
                        <span className="block font-mono text-xs text-vanta-text-muted">EXHAUST TEMP</span>
                        <span className="font-mono text-lg font-bold text-vanta-text-primary">34.8°C</span>
                      </div>
                    </div>
                    <div className="font-mono text-[10px] text-vanta-text-muted text-right">
                      ACOUSTIC: 26.5 dBA UNDER FULL LOAD
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                    <SpecPill label="COOLANT" value="Dielectric Fluid" highlight />
                    <SpecPill label="FAN DENSITY" value="7x High Pressure" />
                  </div>
                </div>
              )}

              {activeTab.id === 'architecture' && (
                <div className="w-full flex flex-col items-center space-y-6">
                  <div className="w-full max-w-md h-48 bg-vanta-dark border border-vanta-border rounded-sm relative p-4 flex flex-col justify-between">
                    <div className="font-mono text-xs text-vanta-text-primary flex items-center justify-between">
                      <span>CHASSIS FRAMEWORK</span>
                      <span className="text-vanta-lime font-mono">6061 ALUMINUM</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-4">
                      <div className="border border-vanta-border p-2 text-center bg-vanta-surface">
                        <span className="block font-mono text-[10px] text-vanta-text-muted">PANEL</span>
                        <span className="font-mono text-xs text-vanta-lime font-bold">4mm Glass</span>
                      </div>
                      <div className="border border-vanta-border p-2 text-center bg-vanta-surface">
                        <span className="block font-mono text-[10px] text-vanta-text-muted">RIGIDITY</span>
                        <span className="font-mono text-xs text-vanta-lime font-bold">Zero Sag</span>
                      </div>
                      <div className="border border-vanta-border p-2 text-center bg-vanta-surface">
                        <span className="block font-mono text-[10px] text-vanta-text-muted">DUST FILTER</span>
                        <span className="font-mono text-xs text-vanta-lime font-bold">Magnetic</span>
                      </div>
                    </div>
                    <div className="font-mono text-[10px] text-vanta-text-muted">
                      DIMENSIONS: 480mm (H) x 235mm (W) x 495mm (D)
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                    <SpecPill label="FRAME MATERIAL" value="CNC Billet Alloy" highlight />
                    <SpecPill label="CABLE ROUTING" value="35mm Rear Tunnel" />
                  </div>
                </div>
              )}

              {activeTab.id === 'craft' && (
                <div className="w-full flex flex-col items-center space-y-6">
                  <div className="w-full max-w-md h-48 bg-vanta-dark border border-vanta-lime/40 rounded-sm relative p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-vanta-lime">QC CERTIFICATION PASSED</span>
                      <CheckCircle2 className="w-5 h-5 text-vanta-lime" />
                    </div>
                    <div className="space-y-2 py-2">
                      <div className="flex justify-between font-mono text-xs text-vanta-text-muted">
                        <span>FURMARK BURN-IN (24H)</span>
                        <span className="text-vanta-lime">PASSED // STABLE</span>
                      </div>
                      <div className="flex justify-between font-mono text-xs text-vanta-text-muted">
                        <span>PRIME95 CPU STRESS (24H)</span>
                        <span className="text-vanta-lime">PASSED // NO THROTTLE</span>
                      </div>
                      <div className="flex justify-between font-mono text-xs text-vanta-text-muted">
                        <span>MEMTEST86 PRO (24H)</span>
                        <span className="text-vanta-lime">0 ERRORS</span>
                      </div>
                    </div>
                    <div className="font-mono text-[10px] text-vanta-text-muted text-right">
                      SERIAL: VANTA-LABS-2026-QC-08
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                    <SpecPill label="BUILD OWNER" value="Single Technician" highlight />
                    <SpecPill label="CRATE TYPE" value="Industrial Flight Case" />
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Status Bar */}
            <div className="pt-4 border-t border-vanta-border flex items-center justify-between font-mono text-xs text-vanta-text-muted">
              <span>ACTIVE DOMAIN: [{activeTab.navTitle}]</span>
              <span className="text-vanta-lime flex items-center gap-1">
                HARDWARE_VERIFIED <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
