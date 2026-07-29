/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#05070d',
          card: '#0c101d',
          surface: '#111827',
          border: 'rgba(255, 255, 255, 0.08)',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          pink: '#ec4899',
          glowBlue: 'rgba(59, 130, 246, 0.15)',
          glowPurple: 'rgba(139, 92, 246, 0.15)',
          glowCyan: 'rgba(6, 182, 212, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
