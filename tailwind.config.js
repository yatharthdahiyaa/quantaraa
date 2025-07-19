// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        // Add delays for sequential animations
        'fade-in-up-100': 'fadeInUp 0.6s ease-out 0.1s forwards',
        'fade-in-up-200': 'fadeInUp 0.6s ease-out 0.2s forwards',
        'fade-in-up-300': 'fadeInUp 0.6s ease-out 0.3s forwards',
        'fade-in-up-400': 'fadeInUp 0.6s ease-out 0.4s forwards',
        'fade-in-up-500': 'fadeInUp 0.6s ease-out 0.5s forwards',
      },
    },
  },
  plugins: [],
};