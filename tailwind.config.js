/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "5xl" : { max: "1920px" },
      "4xl" : { max: "1870px" },
      "3xl" : { max: "1680px" },
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      boxShadow: {
        '3xl': '0px 0px 30px 30px rgba(242, 242, 242, 0.3)',
      },
      colors: {
        'lightGray': '#EDEDE9',
      },
      backgroundImage: {
        'desktop': "url('/src/assets/home/background-home-desktop.jpg')",
        'tablet': "url('/src/assets/home/background-home-tablet.jpg')",
        'mobile': "url('/src/assets/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
      },
      animation: {
        'fade': 'fade .5s linear',
        'fade-out': 'fade-out 22s ease-in-out infinite',
      },
      keyframes: {
        'fade': {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        'fade-out': {
          from: { scale: '100%' },
          to: { scale: '0%' },
        },
      }
    },
  },
  plugins: [animations],
}

