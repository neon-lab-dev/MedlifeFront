/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["Lato", "cursive"]
    },
    colors: {
      white: '#FFFFFF',
      gray: {
        10: '#DAE5E2',
        20: '#D8DADB',
        30: '#FBFCFD',
        40: '#C3C3C3',
        50: '#C4C7C8'
      },
      neutral: {
        10: '#2F4961',
        20: '#5C5F60',
        30: '#363A3B',
        35: '#47617A',
        40: '#344E5F',
        50: '#444748',
        55: '#17324A',
        60: '#1D2021',
        70: '#000000',
        80: '#505257',
        90: '#47617A',
        95: '',
        100: '#000',
      },
      indigo: {
        10: '#5854A8',
        20: '#C4C0FF',
        30: '#E3DFFF',

      },
      teal: {
        10: '#00A79D',
        20: '#00A0AA',
        30: '#2CA9E1',
        40: '#00A0AA',
        50: '#8EF8FF',
        60: '#F1FEFF',
        70: '#ecf7fc'
      },
    },
  },
  plugins: [require("daisyui")],
}



// box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.12);