import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.25rem', screens: { '2xl': '1240px' } },
    extend: {
      colors: {
        // InvoiceFlow brand (taken from the logo: electric blue → indigo)
        primary: { DEFAULT: '#3B82F6', 400: '#60A5FA', 600: '#2563EB', 700: '#1D4ED8' },
        secondary: { DEFAULT: '#6366F1', 400: '#818CF8', 600: '#4F46E5' },
        ink: { DEFAULT: '#090D16', 900: '#090D16', 800: '#0D1320', 700: '#111827', 600: '#1A2233', 500: '#232D40' },
        text: { DEFAULT: '#F3F4F6', muted: '#9CA3AF' },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: { xl: '12px', '2xl': '16px', '3xl': '24px' },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,.35), 0 8px 32px -6px rgba(59,130,246,.55)',
        'glow-lg': '0 0 80px -10px rgba(99,102,241,.55)',
        card: '0 1px 0 0 rgba(255,255,255,.04) inset, 0 20px 40px -24px rgba(0,0,0,.8)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
        'grid-fade':
          'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        'fade-up': { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite',
        'fade-up': 'fade-up .6s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
