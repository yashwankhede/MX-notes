import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark hacker theme colors
        'matrix-green': '#00ff41',
        'matrix-green-dark': '#00cc33',
        'matrix-green-light': '#33ff66',
        'bg-dark': '#0a0a0a',
        'bg-darker': '#050505',
        'bg-card': '#1a1a1a',
        'text-primary': '#e5e5e5',
        'text-secondary': '#a0a0a0',
        'accent-cyan': '#00ffff',
        'accent-purple': '#9d4edd',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41' },
          '100%': { boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41' },
        },
      },
    },
  },
  plugins: [],
}
export default config

