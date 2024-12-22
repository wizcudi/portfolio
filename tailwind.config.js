/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'color60':"#fcf8f5",
        'color30':"#3f2440",

        'color10a':"#ff875c",
        'color10b':"#ffffff",
        'color10c':"#000000",
      },
      screens: {
        'w-one-1000': {'max': '1000px'},
        'w-nine-100': {'max': '900px'},
        'w-seven-50': {'max': '750px'},
        'w-seven-100': {'max': '700px'},
        'w-six-100': {'max': '600px'},
        'w-five-100': {'max': '500px'},
        'w-four-100': {'max': '400px'},
        'w-three-50': {'max': '350px'},

        
      }
    },

  },
  plugins: [],
}

