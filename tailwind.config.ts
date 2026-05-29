import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f7',
          100: '#d5dcea',
          200: '#abbad5',
          300: '#7c95bc',
          400: '#4e6fa0',
          500: '#2a4d82',
          600: '#1e3a6e',
          700: '#1a2642',
          800: '#141e35',
          900: '#0f1628',
          950: '#0a0f1a',
          DEFAULT: '#1a2642',
          dark: '#0f1b35',
          light: '#243555',
        },
        silver: {
          light: '#d4dae3',
          DEFAULT: '#8a9bb0',
          dark: '#5a6b80',
        },
        accent: {
          blue: '#2a8fd4',
          'blue-light': '#5ab8e8',
          'blue-pale': '#e8f4fd',
        },
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          'Hiragino Sans',
          'ヒラギノ角ゴ ProN W3',
          'メイリオ',
          'Meiryo',
          'sans-serif',
        ],
      },
      letterSpacing: {
        widest: '0.15em',
        'super-wide': '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
