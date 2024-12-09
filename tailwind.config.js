/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {        
        'brand-color-60-percent':"#e5e5e5",
        'brand-color-30-percent':"#14213d",

        'brand-color-accent-1':"#fca311",
        'brand-color-accent-2':"#ffffff",
        'brand-color-accent-3':"#000000",
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


    // extend: {
    //   screens: {
    //     'xs': '400px',
    //     // You can also use max-width queries
    //     'max-xs': {'max': '400px'}
    //   }

      
    // },
  },
  plugins: [],
}

