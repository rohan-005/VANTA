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
          // Warm Light Editorial Base Canvas
          ivory: '#F3F0E7',
          cream: '#FAF8F2',
          beige: '#E8E2D5',
          stone: '#DDD6C7',
          sand: '#C9C3B5',
          'sand-dark': '#B5AE9E',
          
          // Dark Contrast & Hardware Surface Palette
          charcoal: '#171717',
          dark: '#242522',
          black: '#111211',
          border: '#2F312E',
          
          // Typography Colors
          'text-dark': '#171717',
          'text-heading': '#242522',
          'text-body': '#4F4D47',
          'text-muted-dark': '#737067',
          'text-light': '#F3F0E7',
          'text-muted-light': '#A3A096',
          
          // Sparing Accent Colors (NO BLUE)
          lime: '#B8E600',
          'lime-hover': '#A0C900',
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
        'card-warm': '0 8px 30px -4px rgba(23, 23, 23, 0.06)',
        'card-dark': '0 8px 30px -4px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'line-grid-subtle': "linear-gradient(to right, rgba(23, 23, 23, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 23, 23, 0.04) 1px, transparent 1px)",
        'line-grid-dark': "linear-gradient(to right, rgba(243, 240, 231, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(243, 240, 231, 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
