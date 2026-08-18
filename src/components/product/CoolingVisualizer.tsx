import React, { useState } from 'react';
import { Thermometer, Play, Pause } from 'lucide-react';
import { THERMAL_FEATURES } from '../../data/systems';

export const CoolingVisualizer: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>(THERMAL_FEATURES[0].id);
  const [fanSpeed, setFanSpeed] = useState<'quiet' | 'balanced' | 'extreme'>('balanced');
  const [isSimulating, setIsSimulating] = useState(true);

  const activeFeature = THERMAL_FEATURES.find((f) => f.id === activeFeatureId) || THERMAL_FEATURES[0];

  const getFanRpm = () => {
    switch (fanSpeed) {
      case 'quiet': return '800 RPM // 18.2 dBA';
      case 'balanced': return '1,400 RPM // 24.5 dBA';
      case 'extreme': return '2,100 RPM // 31.0 dBA';
    }
  };

  return (
    <div className="w-full bg-vanta-surface border border-vanta-border rounded-sm p-6 sm:p-8 space-y-8">
      {/* Top Header & Simulation Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-vanta-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vanta-lime animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-vanta-text-muted">
              THERMAL_SIMULATOR // DUAL-CHAMBER FLOW
            </span>
          </div>
          <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-vanta-text-primary mt-1">
            AIRFLOW & THERMAL ARCHITECTURE
          </h3>
        </div>

        {/* Fan Speed Mode Toggles */}
        <div className="flex items-center gap-2 bg-vanta-dark p-1 rounded-sm border border-vanta-border">
          <span className="font-mono text-[10px] text-vanta-text-muted px-2 uppercase">
            FAN PROFILE:
          </span>
          <button
            onClick={() => setFanSpeed('quiet')}
            className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
              fanSpeed === 'quiet'
                ? 'bg-vanta-elevated border border-vanta-lime text-vanta-lime'
                : 'text-vanta-text-muted hover:text-vanta-text-primary'
            }`}
          >
            QUIET
          </button>
          <button
            onClick={() => setFanSpeed('balanced')}
            className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
              fanSpeed === 'balanced'
                ? 'bg-vanta-lime text-vanta-black font-semibold'
                : 'text-vanta-text-muted hover:text-vanta-text-primary'
            }`}
          >
            BALANCED
          </button>
          <button
            onClick={() => setFanSpeed('extreme')}
            className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
              fanSpeed === 'extreme'
                ? 'bg-vanta-elevated border border-vanta-lime text-vanta-lime'
                : 'text-vanta-text-muted hover:text-vanta-text-primary'
            }`}
          >
            MAX FLOW
          </button>
        </div>
      </div>

      {/* Main Vector Airflow Dynamic Visual Container */}
      <div className="relative w-full aspect-[16/9] min-h-[280px] bg-vanta-dark border border-vanta-border rounded-sm p-4 overflow-hidden flex flex-col justify-between">
        {/* Background Subtle Line Grid */}
        <div className="absolute inset-0 bg-line-grid-subtle opacity-30 pointer-events-none" />

        {/* SVG Thermal Flow Diagram */}
        <svg viewBox="0 0 800 400" className="w-full h-full relative z-10" fill="none">
          {/* Chassis Boundary Outline */}
          <rect x="100" y="40" width="600" height="320" rx="4" fill="#0C0E12" stroke="#222631" strokeWidth="2" />

          {/* Dual Chamber Divider Wall */}
          <line x1="100" y1="290" x2="700" y2="290" stroke="#2A2F3E" strokeWidth="2" strokeDasharray="4 4" />

          {/* Chamber Labels */}
          <text x="120" y="70" fill="#4B5162" fontSize="11" fontFamily="JetBrains Mono">
            [ PRIMARY MAIN HARDWARE CHAMBER ]
          </text>
          <text x="120" y="320" fill="#4B5162" fontSize="11" fontFamily="JetBrains Mono">
            [ ISOLATED REAR PSU & DRIVE ZONE ]
          </text>

          {/* Hardware Components Render */}
          {/* Motherboard & CPU Block */}
          <rect x="250" y="100" width="120" height="120" rx="2" fill="#141722" stroke="#2A2F3E" strokeWidth="1.5" />
          <rect x="280" y="130" width="60" height="60" fill="#1E2332" stroke="#CCFF00" strokeWidth="1.5" />
          <text x="290" y="165" fill="#CCFF00" fontSize="10" fontFamily="Rajdhani" fontWeight="bold">
            CPU BLOCK
          </text>

          {/* Flagship GPU Block */}
          <rect x="180" y="220" width="300" height="50" rx="2" fill="#161924" stroke="#2A2F3E" strokeWidth="1.5" />
          <text x="300" y="250" fill="#F3F4F6" fontSize="11" fontFamily="Rajdhani" fontWeight="bold">
            GPU COPPER VAPOR MATRIX
          </text>

          {/* Front Intake Fans (Left Side) */}
          <g>
            <circle cx="100" cy="110" r="16" fill="#191C28" stroke="#32384A" strokeWidth="2" />
            <circle cx="100" cy="190" r="16" fill="#191C28" stroke="#32384A" strokeWidth="2" />
            <circle cx="100" cy="270" r="16" fill="#191C28" stroke="#32384A" strokeWidth="2" />
          </g>

          {/* Dynamic Cold Air Flow Paths (Blue Gradient) */}
          <path
            d="M50 110 C150 110, 200 160, 280 160"
            stroke="#00E5FF"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />
          <path
            d="M50 190 C150 190, 180 245, 250 245"
            stroke="#00E5FF"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />
          <path
            d="M50 270 L700 270"
            stroke="#0088FF"
            strokeWidth="3"
            strokeDasharray="6 3"
            className={isSimulating ? "animate-pulse" : ""}
          />

          {/* Dynamic Hot Exhaust Flow Paths (Orange/Red Gradient) */}
          <path
            d="M340 130 C340 90, 450 70, 450 40"
            stroke="#FF5500"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />
          <path
            d="M480 230 C550 230, 650 180, 700 180"
            stroke="#FF3300"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />

          {/* Top Exhaust Fans */}
          <circle cx="450" cy="40" r="16" fill="#191C28" stroke="#32384A" strokeWidth="2" />
          <circle cx="550" cy="40" r="16" fill="#191C28" stroke="#32384A" strokeWidth="2" />

          {/* Feature Highlight Callout Pins */}
          <g onClick={() => setActiveFeatureId('chamber-isolation')} className="cursor-pointer group">
            <circle cx="120" cy="320" r="10" fill="#111317" stroke={activeFeatureId === 'chamber-isolation' ? '#CCFF00' : '#32384A'} strokeWidth="2" />
            <text x="117" y="324" fill={activeFeatureId === 'chamber-isolation' ? '#CCFF00' : '#888E9E'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">1</text>
          </g>

          <g onClick={() => setActiveFeatureId('negative-pressure')} className="cursor-pointer group">
            <circle cx="100" cy="150" r="10" fill="#111317" stroke={activeFeatureId === 'negative-pressure' ? '#CCFF00' : '#32384A'} strokeWidth="2" />
            <text x="97" y="154" fill={activeFeatureId === 'negative-pressure' ? '#CCFF00' : '#888E9E'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">2</text>
          </g>

          <g onClick={() => setActiveFeatureId('copper-plate')} className="cursor-pointer group">
            <circle cx="310" cy="160" r="10" fill="#111317" stroke={activeFeatureId === 'copper-plate' ? '#CCFF00' : '#32384A'} strokeWidth="2" />
            <text x="307" y="164" fill={activeFeatureId === 'copper-plate' ? '#CCFF00' : '#888E9E'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">3</text>
          </g>
        </svg>

        {/* Floating Simulation Status Bar */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between px-3 py-1.5 bg-vanta-surface/90 border border-vanta-border rounded-sm backdrop-blur-md text-[11px] font-mono">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="p-1 text-vanta-lime hover:bg-vanta-elevated rounded-sm"
              title={isSimulating ? "Pause Simulation" : "Play Simulation"}
            >
              {isSimulating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="text-vanta-text-primary">FAN VELOCITY: {getFanRpm()}</span>
          </div>

          <span className="text-vanta-lime hidden sm:inline">
            AIRFLOW VECTOR: NEGATIVE PRESSURE DUCTING
          </span>
        </div>
      </div>

      {/* Feature Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {THERMAL_FEATURES.map((feature, index) => {
          const isActive = feature.id === activeFeatureId;
          return (
            <button
              key={feature.id}
              onClick={() => setActiveFeatureId(feature.id)}
              className={`p-4 rounded-sm border text-left transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-vanta-lime ${
                isActive
                  ? 'bg-vanta-elevated border-vanta-lime shadow-glow-lime-sm'
                  : 'bg-vanta-dark border-vanta-border hover:border-vanta-border-bright'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-vanta-lime">
                  [{feature.tag}]
                </span>
                <span className="font-mono text-[10px] text-vanta-text-muted">
                  0{index + 1}
                </span>
              </div>
              <h4 className="font-display font-bold text-sm uppercase text-vanta-text-primary mt-2">
                {feature.title}
              </h4>
              <p className="font-sans text-xs text-vanta-text-muted mt-1 line-clamp-2">
                {feature.subtitle}
              </p>
              <div className="pt-3 mt-3 border-t border-vanta-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-vanta-text-muted">{feature.metricLabel}</span>
                <span className="text-vanta-lime font-bold">{feature.metricValue}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Feature Detail Drawer */}
      <div className="p-5 bg-vanta-dark border border-vanta-lime/30 rounded-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-vanta-surface border border-vanta-border text-vanta-lime rounded-sm shrink-0">
            <Thermometer className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-vanta-lime tracking-widest">
              SELECTED FEATURE IN-DEPTH // {activeFeature.tag}
            </span>
            <h4 className="font-display font-bold text-lg uppercase text-vanta-text-primary mt-1">
              {activeFeature.title}
            </h4>
            <p className="font-sans text-sm text-vanta-text-muted mt-2 leading-relaxed">
              {activeFeature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
