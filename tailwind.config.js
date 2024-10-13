/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   'xs': '400px',
      //   // You can also use max-width queries
      //   'max-xs': {'max': '400px'}
      // }
    },
  },
  plugins: [],
}

