import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-soft': 'rgb(var(--bg-soft) / <alpha-value>)',
        'bg-soft-2': 'rgb(var(--bg-soft-2) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
        'ink-faint': 'rgb(var(--ink-faint) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',
        'inverse-bg': 'rgb(var(--inverse-bg) / <alpha-value>)',
        'inverse-ink': 'rgb(var(--inverse-ink) / <alpha-value>)',
        accent: '#3fae55',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      maxWidth: {
        wrap: '1360px',
      },
      keyframes: {
        'scroll-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'scroll-x': 'scroll-x 32s linear infinite',
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
