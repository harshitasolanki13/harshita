/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: '#FAFAFA',
        surface: '#FFFFFF',
        'surface-soft': '#F3F4F6',
        accent: '#6366F1',
        'accent-hover': '#4F46E5',
        'accent-muted': '#EEF2FF',
        'border-soft': '#E5E7EB',
        'text-main': '#111827',
        'text-muted': '#6B7280',
        'text-soft': '#9CA3AF',
        'dark-page': '#0F172A',
        'dark-surface': '#1E293B',
        'dark-accent': '#818CF8',
        'dark-accent-muted': '#1E1B4B',
        'dark-border': '#334155',
        'dark-text-main': '#F1F5F9',
        'dark-text-muted': '#94A3B8',
        'dark-text-soft': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(99,102,241,0.12)',
        'button-hover': '0 10px 24px rgba(99,102,241,0.18)',
      },
      transitionDuration: {
        180: '180ms',
        220: '220ms',
        300: '300ms',
        400: '400ms',
        600: '600ms',
        700: '700ms',
      },
      transitionTimingFunction: {
        'out-cubic': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
