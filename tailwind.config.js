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
          black: '#070708',
          dark: '#0B0C0E',
          surface: '#111317',
          elevated: '#191C23',
          border: '#222631',
          'border-bright': '#323847',
          'text-primary': '#F3F4F6',
          'text-muted': '#888E9E',
          lime: '#CCFF00',
          'lime-hover': '#D6FF33',
          'lime-dim': 'rgba(204, 255, 0, 0.12)',
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
        'glow-lime': '0 0 25px rgba(204, 255, 0, 0.15)',
        'glow-lime-sm': '0 0 10px rgba(204, 255, 0, 0.2)',
        'card-sharp': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'line-grid': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
