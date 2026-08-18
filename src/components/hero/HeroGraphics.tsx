import React, { useState } from 'react';
import { Eye, Flame } from 'lucide-react';

export const HeroGraphics: React.FC = () => {
  const [thermalMode, setThermalMode] = useState(false);
  const [activeLed, setActiveLed] = useState(true);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none flex flex-col items-center select-none">
      {/* Mode Control Bar */}
      <div className="absolute -top-10 right-0 z-20 flex items-center gap-2 bg-vanta-cream border border-vanta-sand p-1.5 rounded-sm shadow-sm">
        <button
          onClick={() => setThermalMode(!thermalMode)}
          className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors rounded-sm font-bold ${
            thermalMode
              ? 'bg-vanta-dark text-vanta-lime'
              : 'text-vanta-text-body hover:text-vanta-dark'
          }`}
          aria-label="Toggle thermal airflow view"
        >
          <Flame className="w-3.5 h-3.5 text-vanta-orange" />
          {thermalMode ? 'AIRFLOW VIEW' : 'THERMAL VIEW'}
        </button>

        <button
          onClick={() => setActiveLed(!activeLed)}
          className={`p-1.5 text-[11px] font-mono transition-colors rounded-sm ${
            activeLed
              ? 'text-vanta-dark border border-vanta-lime bg-vanta-lime/20 font-bold'
              : 'text-vanta-text-body hover:text-vanta-dark'
          }`}
          aria-label="Toggle LED accent lighting"
          title="Toggle LED Lighting"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Main Hardware Chassis Showroom Container */}
      <div className="relative w-full aspect-[4/3] bg-vanta-charcoal border border-vanta-dark rounded-sm p-6 shadow-card-warm flex items-center justify-center overflow-hidden group">
        {/* Background Subtle Lines */}
        <div className="absolute inset-0 bg-line-grid-dark opacity-20 pointer-events-none" />

        {/* Soft Ambient Backlight Glow (Acid Lime Accent) */}
        <div
          className={`absolute inset-0 bg-radial from-vanta-lime/10 via-transparent to-transparent transition-opacity duration-700 ${
            activeLed ? 'opacity-100' : 'opacity-10'
          }`}
        />

        {/* SVG Vector Hardware Graphic of VANTA Monolith Chassis */}
        <svg
          viewBox="0 0 500 400"
          className="relative z-10 w-full h-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F312D" />
              <stop offset="50%" stopColor="#1E1F1D" />
              <stop offset="100%" stopColor="#111211" />
            </linearGradient>

            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(243, 240, 231, 0.12)" />
              <stop offset="40%" stopColor="rgba(243, 240, 231, 0.03)" />
              <stop offset="100%" stopColor="rgba(17, 18, 17, 0.75)" />
            </linearGradient>

            <linearGradient id="copperLoop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E86F2D" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#E86F2D" />
            </linearGradient>

            <linearGradient id="coldIntakeEmerald" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#00FF99" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B8E600" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="hotExhaustOrange" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E86F2D" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF9900" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Outer Chassis Frame */}
          <rect x="80" y="40" width="340" height="320" rx="4" fill="url(#chassisGrad)" stroke="#3E403B" strokeWidth="2" />

          {/* Front Air Intake Mesh */}
          <rect x="80" y="40" width="45" height="320" fill="#171817" stroke="#2F312E" strokeWidth="1" />
          <pattern id="hexDots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.5" fill="#2A2B27" />
          </pattern>
          <rect x="85" y="50" width="35" height="300" fill="url(#hexDots)" />

          {/* Intake Fans */}
          <circle cx="102" cy="110" r="14" fill="#242522" stroke="#3E403B" strokeWidth="1.5" />
          <circle cx="102" cy="200" r="14" fill="#242522" stroke="#3E403B" strokeWidth="1.5" />
          <circle cx="102" cy="290" r="14" fill="#242522" stroke="#3E403B" strokeWidth="1.5" />

          {/* Glass Viewport */}
          <rect x="135" y="50" width="275" height="300" rx="2" fill="url(#glassGrad)" stroke="#3A3C37" strokeWidth="1" />

          {/* Internal Hardware Tray */}
          <rect x="145" y="60" width="255" height="280" fill="#111211" rx="1" />

          {/* CPU Liquid Block with Copper Accent & Subtle LED */}
          <rect x="230" y="95" width="55" height="55" rx="3" fill="#1C1D1A" stroke={activeLed ? "#B8E600" : "#3E403B"} strokeWidth="1.5" />
          <circle cx="257" cy="122" r="16" fill="#242522" stroke="#E86F2D" strokeWidth="2" />
          <path d="M250 122 L264 122 M257 115 L257 129" stroke={activeLed ? "#B8E600" : "#737067"} strokeWidth="1.5" />

          {/* DDR5 Memory Modules (4 Slots) */}
          <rect x="300" y="90" width="6" height="65" fill="#242522" stroke="#2F312E" />
          <rect x="310" y="90" width="6" height="65" fill="#242522" stroke={activeLed ? "#B8E600" : "#2F312E"} />
          <rect x="320" y="90" width="6" height="65" fill="#242522" stroke="#2F312E" />
          <rect x="330" y="90" width="6" height="65" fill="#242522" stroke={activeLed ? "#B8E600" : "#2F312E"} />

          {/* Copper Tubing Loop */}
          <path d="M245 95 C245 65, 340 65, 340 70" stroke="url(#copperLoop)" strokeWidth="4" fill="none" />
          <path d="M270 95 C270 75, 360 75, 360 70" stroke="url(#copperLoop)" strokeWidth="4" fill="none" />

          {/* Top Radiator Assembly */}
          <rect x="150" y="55" width="240" height="15" fill="#20211F" stroke="#3E403B" strokeWidth="1" />

          {/* GPU Block */}
          <rect x="160" y="195" width="220" height="60" rx="3" fill="#20211F" stroke="#3A3C37" strokeWidth="1.5" />
          <line x1="175" y1="205" x2="175" y2="245" stroke="#3A3C37" strokeWidth="2" />
          <line x1="185" y1="205" x2="185" y2="245" stroke="#3A3C37" strokeWidth="2" />
          <line x1="195" y1="205" x2="195" y2="245" stroke="#3A3C37" strokeWidth="2" />
          <line x1="205" y1="205" x2="205" y2="245" stroke="#3A3C37" strokeWidth="2" />

          {/* GPU Plate */}
          <rect x="250" y="215" width="115" height="20" rx="2" fill="#111211" stroke={activeLed ? "#B8E600" : "#2F312E"} />
          <text x="260" y="229" fill={activeLed ? "#B8E600" : "#F3F0E7"} fontSize="9" fontFamily="Rajdhani" fontWeight="bold" letterSpacing="1.5">
            VANTA // RTX 40
          </text>

          {/* Anti-Sag Column */}
          <rect x="365" y="195" width="10" height="120" fill="#2F312E" stroke="#4A4C46" />

          {/* Lower PSU Bay */}
          <rect x="145" y="290" width="255" height="50" fill="#171817" stroke="#2F312E" />
          <text x="160" y="320" fill="#A3A096" fontSize="10" fontFamily="JetBrains Mono">
            CHASSIS 01 // DUAL-CHAMBER
          </text>
          <circle cx="375" cy="315" r="4" fill={activeLed ? "#B8E600" : "#737067"} />

          {/* Thermal Vectors (NO BLUE) */}
          {thermalMode && (
            <g className="transition-opacity duration-300">
              <path d="M60 110 L130 110" stroke="url(#coldIntakeEmerald)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M60 200 L130 200" stroke="url(#coldIntakeEmerald)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M60 290 L130 290" stroke="url(#coldIntakeEmerald)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />

              <path d="M260 55 L260 20" stroke="url(#hotExhaustOrange)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M330 55 L330 20" stroke="url(#hotExhaustOrange)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
              <path d="M410 110 L440 110" stroke="url(#hotExhaustOrange)" strokeWidth="6" strokeDasharray="4 2" className="animate-pulse" />
            </g>
          )}
        </svg>

        {/* Bottom Spec Overlay Bar */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between px-3.5 py-2 bg-vanta-dark/90 border border-vanta-border rounded-sm backdrop-blur-md text-[11px] font-mono text-vanta-text-muted-light">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-vanta-lime" />
            <span className="text-vanta-ivory font-medium">FLAGSHIP BILLET CHASSIS</span>
          </div>
          <span className="text-vanta-lime hidden sm:inline font-bold">DUAL-CHAMBER COOLING</span>
        </div>
      </div>
    </div>
  );
};
