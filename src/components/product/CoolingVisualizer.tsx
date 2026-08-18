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
    <div className="w-full bg-vanta-cream border border-vanta-sand rounded-sm p-6 sm:p-8 space-y-8 shadow-sm">
      {/* Top Header & Simulation Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-vanta-sand pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vanta-dark animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-vanta-text-muted-dark font-semibold">
              THERMAL_SIMULATOR // DUAL-CHAMBER FLOW
            </span>
          </div>
          <h3 className="text-2xl font-display font-extrabold uppercase tracking-wide text-vanta-dark mt-1">
            AIRFLOW & THERMAL ARCHITECTURE
          </h3>
        </div>

        {/* Fan Speed Mode Toggles */}
        <div className="flex items-center gap-2 bg-vanta-ivory p-1 rounded-sm border border-vanta-sand">
          <span className="font-mono text-[10px] text-vanta-text-muted-dark px-2 uppercase font-semibold">
            FAN PROFILE:
          </span>
          <button
            onClick={() => setFanSpeed('quiet')}
            className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
              fanSpeed === 'quiet'
                ? 'bg-vanta-dark text-vanta-lime font-bold'
                : 'text-vanta-text-muted-dark hover:text-vanta-dark'
            }`}
          >
            QUIET
          </button>
          <button
            onClick={() => setFanSpeed('balanced')}
            className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
              fanSpeed === 'balanced'
                ? 'bg-vanta-lime text-vanta-dark font-bold shadow-sm'
                : 'text-vanta-text-muted-dark hover:text-vanta-dark'
            }`}
          >
            BALANCED
          </button>
          <button
            onClick={() => setFanSpeed('extreme')}
            className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
              fanSpeed === 'extreme'
                ? 'bg-vanta-dark text-vanta-lime font-bold'
                : 'text-vanta-text-muted-dark hover:text-vanta-dark'
            }`}
          >
            MAX FLOW
          </button>
        </div>
      </div>

      {/* Main Vector Airflow Visual Container (Dark Canvas Contrast) */}
      <div className="relative w-full aspect-[16/9] min-h-[280px] bg-vanta-dark border border-vanta-charcoal rounded-sm p-4 overflow-hidden flex flex-col justify-between shadow-inner">
        {/* Background Subtle Grid */}
        <div className="absolute inset-0 bg-line-grid-dark opacity-30 pointer-events-none" />

        {/* SVG Thermal Flow Diagram (ZERO BLUE - Emerald Green Intakes & Burnt Orange Exhausts) */}
        <svg viewBox="0 0 800 400" className="w-full h-full relative z-10" fill="none">
          {/* Chassis Boundary Outline */}
          <rect x="100" y="40" width="600" height="320" rx="4" fill="#111211" stroke="#2F312E" strokeWidth="2" />

          {/* Dual Chamber Divider Wall */}
          <line x1="100" y1="290" x2="700" y2="290" stroke="#3A3C37" strokeWidth="2" strokeDasharray="4 4" />

          {/* Chamber Labels */}
          <text x="120" y="70" fill="#9A9990" fontSize="11" fontFamily="JetBrains Mono">
            [ PRIMARY MAIN HARDWARE CHAMBER ]
          </text>
          <text x="120" y="320" fill="#9A9990" fontSize="11" fontFamily="JetBrains Mono">
            [ ISOLATED REAR PSU & DRIVE ZONE ]
          </text>

          {/* Hardware Components Render */}
          {/* Motherboard & CPU Block */}
          <rect x="250" y="100" width="120" height="120" rx="2" fill="#1F201D" stroke="#3A3C37" strokeWidth="1.5" />
          <rect x="280" y="130" width="60" height="60" fill="#2A2B27" stroke="#B8E600" strokeWidth="1.5" />
          <text x="290" y="165" fill="#B8E600" fontSize="10" fontFamily="Rajdhani" fontWeight="bold">
            CPU BLOCK
          </text>

          {/* Flagship GPU Block */}
          <rect x="180" y="220" width="300" height="50" rx="2" fill="#20211F" stroke="#3A3C37" strokeWidth="1.5" />
          <text x="300" y="250" fill="#F3F0E7" fontSize="11" fontFamily="Rajdhani" fontWeight="bold">
            GPU COPPER VAPOR MATRIX
          </text>

          {/* Front Intake Fans (Left Side) */}
          <g>
            <circle cx="100" cy="110" r="16" fill="#242522" stroke="#3E403B" strokeWidth="2" />
            <circle cx="100" cy="190" r="16" fill="#242522" stroke="#3E403B" strokeWidth="2" />
            <circle cx="100" cy="270" r="16" fill="#242522" stroke="#3E403B" strokeWidth="2" />
          </g>

          {/* Dynamic Cold Air Flow Paths (Emerald Green #00FF99 - ZERO BLUE) */}
          <path
            d="M50 110 C150 110, 200 160, 280 160"
            stroke="#00FF99"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />
          <path
            d="M50 190 C150 190, 180 245, 250 245"
            stroke="#00FF99"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />
          <path
            d="M50 270 L700 270"
            stroke="#B8E600"
            strokeWidth="3"
            strokeDasharray="6 3"
            className={isSimulating ? "animate-pulse" : ""}
          />

          {/* Dynamic Hot Exhaust Flow Paths (Burnt Orange #E86F2D) */}
          <path
            d="M340 130 C340 90, 450 70, 450 40"
            stroke="#E86F2D"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />
          <path
            d="M480 230 C550 230, 650 180, 700 180"
            stroke="#E86F2D"
            strokeWidth="4"
            strokeDasharray="8 4"
            className={isSimulating ? "animate-pulse" : ""}
          />

          {/* Top Exhaust Fans */}
          <circle cx="450" cy="40" r="16" fill="#242522" stroke="#3E403B" strokeWidth="2" />
          <circle cx="550" cy="40" r="16" fill="#242522" stroke="#3E403B" strokeWidth="2" />

          {/* Feature Highlight Callout Pins */}
          <g onClick={() => setActiveFeatureId('chamber-isolation')} className="cursor-pointer group">
            <circle cx="120" cy="320" r="10" fill="#171817" stroke={activeFeatureId === 'chamber-isolation' ? '#B8E600' : '#4A4C46'} strokeWidth="2" />
            <text x="117" y="324" fill={activeFeatureId === 'chamber-isolation' ? '#B8E600' : '#9A9990'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">1</text>
          </g>

          <g onClick={() => setActiveFeatureId('negative-pressure')} className="cursor-pointer group">
            <circle cx="100" cy="150" r="10" fill="#171817" stroke={activeFeatureId === 'negative-pressure' ? '#B8E600' : '#4A4C46'} strokeWidth="2" />
            <text x="97" y="154" fill={activeFeatureId === 'negative-pressure' ? '#B8E600' : '#9A9990'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">2</text>
          </g>

          <g onClick={() => setActiveFeatureId('copper-plate')} className="cursor-pointer group">
            <circle cx="310" cy="160" r="10" fill="#171817" stroke={activeFeatureId === 'copper-plate' ? '#B8E600' : '#4A4C46'} strokeWidth="2" />
            <text x="307" y="164" fill={activeFeatureId === 'copper-plate' ? '#B8E600' : '#9A9990'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">3</text>
          </g>
        </svg>

        {/* Floating Simulation Status Bar */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between px-3 py-1.5 bg-vanta-charcoal/90 border border-vanta-border rounded-sm backdrop-blur-md text-[11px] font-mono">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="p-1 text-vanta-lime hover:bg-vanta-dark rounded-sm"
              title={isSimulating ? "Pause Simulation" : "Play Simulation"}
            >
              {isSimulating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="text-vanta-ivory font-medium">FAN VELOCITY: {getFanRpm()}</span>
          </div>

          <span className="text-vanta-lime hidden sm:inline font-bold">
            AIRFLOW VECTOR: EMERALD INTAKE // BURNT ORANGE EXHAUST
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
              className={`p-4 rounded-sm border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-vanta-lime ${
                isActive
                  ? 'bg-vanta-dark border-vanta-dark text-vanta-ivory shadow-md'
                  : 'bg-vanta-ivory border-vanta-sand text-vanta-dark hover:border-vanta-dark'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[10px] uppercase font-bold ${isActive ? 'text-vanta-lime' : 'text-vanta-text-muted-dark'}`}>
                  [{feature.tag}]
                </span>
                <span className="font-mono text-[10px] opacity-70">
                  0{index + 1}
                </span>
              </div>
              <h4 className="font-display font-bold text-sm uppercase mt-2">
                {feature.title}
              </h4>
              <p className={`font-sans text-xs mt-1 line-clamp-2 ${isActive ? 'text-vanta-text-muted-light' : 'text-vanta-text-muted-dark'}`}>
                {feature.subtitle}
              </p>
              <div className="pt-3 mt-3 border-t border-vanta-sand/60 flex items-center justify-between text-xs font-mono">
                <span className="opacity-80">{feature.metricLabel}</span>
                <span className={isActive ? 'text-vanta-lime font-bold' : 'text-vanta-dark font-bold'}>{feature.metricValue}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Feature In-Depth Box */}
      <div className="p-5 bg-vanta-dark border border-vanta-dark rounded-sm text-vanta-ivory">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-vanta-charcoal border border-vanta-border text-vanta-orange rounded-sm shrink-0">
            <Thermometer className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-vanta-lime tracking-widest font-bold">
              SELECTED FEATURE IN-DEPTH // {activeFeature.tag}
            </span>
            <h4 className="font-display font-bold text-lg uppercase text-vanta-ivory mt-1">
              {activeFeature.title}
            </h4>
            <p className="font-sans text-sm text-vanta-text-muted-light mt-2 leading-relaxed">
              {activeFeature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
