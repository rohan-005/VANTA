import React, { useState } from 'react';
import { Eye, Flame } from 'lucide-react';

export const HeroGraphics: React.FC = () => {
  const [thermalMode, setThermalMode] = useState(false);
  const [activeLed, setActiveLed] = useState(true);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none flex flex-col items-center select-none">
      {/* Interactive Mode Control Overlay */}
      <div className="absolute -top-10 right-0 z-20 flex items-center gap-2 bg-vanta-surface/90 border border-vanta-border p-1.5 rounded-sm backdrop-blur-md">
        <button
          onClick={() => setThermalMode(!thermalMode)}
          className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors rounded-sm ${
            thermalMode
              ? 'bg-vanta-lime text-vanta-black font-semibold'
              : 'text-vanta-text-muted hover:text-vanta-text-primary'
          }`}
          aria-label="Toggle thermal airflow view"
        >
          <Flame className="w-3 h-3" />
          {thermalMode ? 'THERMAL VIEW' : 'STANDARD VIEW'}
        </button>

        <button
          onClick={() => setActiveLed(!activeLed)}
          className={`p-1.5 text-[11px] font-mono transition-colors rounded-sm ${
            activeLed
              ? 'text-vanta-lime border border-vanta-lime/40 bg-vanta-lime-dim'
              : 'text-vanta-text-muted hover:text-vanta-text-primary'
          }`}
          aria-label="Toggle LED accent lighting"
          title="Toggle LED Lighting"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Hardware Chassis Visual Container */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-vanta-surface to-vanta-dark border border-vanta-border rounded-sm p-6 shadow-2xl flex items-center justify-center overflow-hidden group">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-line-grid-subtle opacity-40" />

        {/* Ambient Lime Backlight Glow */}
        <div
          className={`absolute inset-0 bg-radial from-vanta-lime/10 via-transparent to-transparent transition-opacity duration-700 ${
            activeLed ? 'opacity-100' : 'opacity-10'
          }`}
        />

        {/* Precision SVG Vector Graphics of VANTA Monolith Chassis */}
        <svg
          viewBox="0 0 500 400"
          className="relative z-10 w-full h-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Chassis Gradients */}
            <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C202B" />
              <stop offset="50%" stopColor="#111318" />
              <stop offset="100%" stopColor="#08090C" />
            </linearGradient>

            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.02)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.6)" />
            </linearGradient>

            <linearGradient id="copperLoop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B87333" />
              <stop offset="50%" stopColor="#E59866" />
              <stop offset="100%" stopColor="#B87333" />
            </linearGradient>

            <linearGradient id="limeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#CCFF00" />
              <stop offset="100%" stopColor="#88B800" />
            </linearGradient>

            {/* Thermal Airflow Vectors */}
            <linearGradient id="coldIntake" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0088FF" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="hotExhaust" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF3300" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF9900" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Chassis Outer Steel Frame */}
          <rect x="80" y="40" width="340" height="320" rx="4" fill="url(#chassisGrad)" stroke="#2D3342" strokeWidth="2" />

          {/* Front Intake Mesh Section */}
          <rect x="80" y="40" width="45" height="320" fill="#0C0E12" stroke="#222631" strokeWidth="1" />
          {/* Hex mesh dots */}
          <pattern id="hexDots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.5" fill="#1C202B" />
          </pattern>
          <rect x="85" y="50" width="35" height="300" fill="url(#hexDots)" />

          {/* Dual Intake Fans behind Mesh */}
          <circle cx="102" cy="110" r="14" fill="#161922" stroke="#2D3342" strokeWidth="1.5" />
          <circle cx="102" cy="200" r="14" fill="#161922" stroke="#2D3342" strokeWidth="1.5" />
          <circle cx="102" cy="290" r="14" fill="#161922" stroke="#2D3342" strokeWidth="1.5" />

          {/* Main Hardware Chamber Glass Viewport */}
          <rect x="135" y="50" width="275" height="300" rx="2" fill="url(#glassGrad)" stroke="#2A2F3D" strokeWidth="1" />

          {/* Internal Motherboard Tray */}
          <rect x="145" y="60" width="255" height="280" fill="#0B0C0E" rx="1" />

          {/* CPU Liquid Block with Copper Accent & LED */}
          <rect x="230" y="95" width="55" height="55" rx="3" fill="#141720" stroke={activeLed ? "#CCFF00" : "#2D3342"} strokeWidth="1.5" />
          <circle cx="257" cy="122" r="16" fill="#1A1E29" stroke="#B87333" strokeWidth="2" />
          <path d="M250 122 L264 122 M257 115 L257 129" stroke={activeLed ? "#CCFF00" : "#888E9E"} strokeWidth="1.5" />

          {/* DDR5 Memory Modules (4 Slots) */}
          <rect x="300" y="90" width="6" height="65" fill="#1A1E2A" stroke="#222631" />
          <rect x="310" y="90" width="6" height="65" fill="#1A1E2A" stroke={activeLed ? "#CCFF00" : "#222631"} />
          <rect x="320" y="90" width="6" height="65" fill="#1A1E2A" stroke="#222631" />
          <rect x="330" y="90" width="6" height="65" fill="#1A1E2A" stroke={activeLed ? "#CCFF00" : "#222631"} />

          {/* Liquid Cooling Tubing Loop */}
          <path d="M245 95 C245 65, 340 65, 340 70" stroke="url(#copperLoop)" strokeWidth="4" fill="none" />
          <path d="M270 95 C270 75, 360 75, 360 70" stroke="url(#copperLoop)" strokeWidth="4" fill="none" />

          {/* Top Radiator Assembly */}
          <rect x="150" y="55" width="240" height="15" fill="#151821" stroke="#2A2F3D" strokeWidth="1" />

          {/* Flagship GPU Block with Aluminum Heatsink Fins */}
          <rect x="160" y="195" width="220" height="60" rx="3" fill="#161922" stroke="#2A303F" strokeWidth="1.5" />
          {/* Heatsink Grill Lines */}
          <line x1="175" y1="205" x2="175" y2="245" stroke="#2A303F" strokeWidth="2" />
          <line x1="185" y1="205" x2="185" y2="245" stroke="#2A303F" strokeWidth="2" />
          <line x1="195" y1="205" x2="195" y2="245" stroke="#2A303F" strokeWidth="2" />
          <line x1="205" y1="205" x2="205" y2="245" stroke="#2A303F" strokeWidth="2" />
          <line x1="215" y1="205" x2="215" y2="245" stroke="#2A303F" strokeWidth="2" />
          <line x1="225" y1="205" x2="225" y2="245" stroke="#2A303F" strokeWidth="2" />

          {/* GPU LED Branding Plate */}
          <rect x="250" y="215" width="115" height="20" rx="2" fill="#0C0E12" stroke={activeLed ? "#CCFF00" : "#222631"} />
          <text x="260" y="229" fill={activeLed ? "#CCFF00" : "#F3F4F6"} fontSize="9" fontFamily="Rajdhani" fontWeight="bold" letterSpacing="1.5">
            VANTA // RTX 40
          </text>

          {/* Anti-Sag CNC Aluminum Support Column */}
          <rect x="365" y="195" width="10" height="120" fill="#222631" stroke="#323847" />

          {/* Lower PSU Shroud Zone */}
          <rect x="145" y="290" width="255" height="50" fill="#0C0E12" stroke="#1A1D27" />
          <text x="160" y="320" fill="#4B5162" fontSize="10" fontFamily="JetBrains Mono">
            CHASSIS_01 // ISOLATED_PSU_BAY
          </text>
          <circle cx="375" cy="315" r="4" fill={activeLed ? "#CCFF00" : "#4B5162"} />

          {/* Thermal Overlay Elements when thermalMode is active */}
          {thermalMode && (
            <g className="transition-opacity duration-300">
              {/* Cold Air Intake Vectors */}
              <path d="M60 110 L130 110" stroke="url(#coldIntake)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M60 200 L130 200" stroke="url(#coldIntake)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M60 290 L130 290" stroke="url(#coldIntake)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />

              {/* Hot Air Exhaust Vectors */}
              <path d="M260 55 L260 20" stroke="url(#hotExhaust)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M330 55 L330 20" stroke="url(#hotExhaust)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M410 110 L440 110" stroke="url(#hotExhaust)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />

              <text x="50" y="360" fill="#00E5FF" fontSize="9" fontFamily="JetBrains Mono">
                [ BLUE: COLD INTAKE vector 185 CFM ]
              </text>
              <text x="260" y="18" fill="#FF5500" fontSize="9" fontFamily="JetBrains Mono">
                [ RED: TOP EXHAUST VECTOR ]
              </text>
            </g>
          )}
        </svg>

        {/* Bottom Hardware Spec Badge Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between px-3 py-1.5 bg-vanta-black/90 border border-vanta-border rounded-sm backdrop-blur-md text-[11px] font-mono text-vanta-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-vanta-lime" />
            <span className="text-vanta-text-primary">CHASSIS 01 // BILLET ALUMINUM</span>
          </div>
          <span className="text-vanta-lime hidden sm:inline">DUAL-CHAMBER COOLING</span>
        </div>
      </div>
    </div>
  );
};
