/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'burnt-orange': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
        },
        'sage': {
          50: '#F0F9F4',
          100: '#DCF2E4',
          200: '#BBE5CC',
          300: '#8DD1A8',
          400: '#5BB67D',
          500: '#369B5B',
          600: '#267D47',
          700: '#1F643A',
          800: '#1C5131',
          900: '#18422A',
          950: '#0C2416',
        }
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.5',
      }
    },
  },
  plugins: [],
};