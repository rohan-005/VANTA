/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vanta: {
          // Light Base Palette
          ivory: '#F3F0E7',
          cream: '#F8F6F0',
          stone: '#E8E3D7',
          sand: '#C9C5BA',
          
          // Dark Contrast Palette
          charcoal: '#242522',
          dark: '#171817',
          black: '#111211',
          border: '#2F312E',
          
          // Text Colors
          'text-dark': '#171817',
          'text-muted-dark': '#6E6D66',
          'text-light': '#F3F0E7',
          'text-muted-light': '#9A9990',
          
          // Accents (NO BLUE)
          lime: '#B8E600',
          'lime-hover': '#C4F000',
          'lime-dim': 'rgba(184, 230, 0, 0.15)',
          orange: '#E86F2D',
          'orange-dim': 'rgba(232, 111, 45, 0.15)',
          emerald: '#00FF99',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
      },
      boxShadow: {
        'glow-lime': '0 0 25px rgba(184, 230, 0, 0.25)',
        'glow-lime-sm': '0 0 12px rgba(184, 230, 0, 0.2)',
        'glow-orange': '0 0 20px rgba(232, 111, 45, 0.25)',
        'card-sharp': '0 8px 30px -4px rgba(23, 24, 23, 0.12)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(23, 24, 23, 0.08) 1px, transparent 0)",
        'grid-pattern-dark': "radial-gradient(circle at 1px 1px, rgba(243, 240, 231, 0.08) 1px, transparent 0)",
        'line-grid-subtle': "linear-gradient(to right, rgba(23, 24, 23, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 24, 23, 0.04) 1px, transparent 1px)",
        'line-grid-dark': "linear-gradient(to right, rgba(243, 240, 231, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(243, 240, 231, 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
