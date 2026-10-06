/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0b9c8',
          400: '#8593a8',
          500: '#67768c',
          600: '#525f73',
          700: '#434e5f',
          800: '#3a4351',
          900: '#1a1f29',
          950: '#0c0f16',
        },
        brand: {
          50: '#eefbf3',
          100: '#d6f5e0',
          200: '#aeebc4',
          300: '#7ad9a3',
          400: '#45c07e',
          500: '#22a463',
          600: '#16854e',
          700: '#146a40',
          800: '#155435',
          900: '#13462d',
          950: '#082817',
        },
        accent: {
          50: '#eef6ff',
          100: '#d9edff',
          200: '#bcdeff',
          300: '#8ec8ff',
          400: '#59a8ff',
          500: '#3385fc',
          600: '#1c66f0',
          700: '#1551de',
          800: '#1843b4',
          900: '#1a3c8e',
          950: '#152556',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
