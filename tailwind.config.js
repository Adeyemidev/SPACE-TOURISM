/** @type {import('tailwindcss').Config} */
export default {
  content:[
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {colors: {
      'white': '#FFFFFF',
     'dark': '#D0D6F9',
       'black': '#0B0D17',
  
    },
    fontSize:{
      'text-xl': '15px',
      'text-3xl': '28px',
      'text-4xl': '32px',
      'text-5xl': '56px',
      'text-6xl': '80px',
      'text-7xl': '100px',
      'text-8xl' : '150px'
    } ,
  
    lineHeight:{
      "leading-8": '34px',
      'leading-10': '171.9px'
    },
    fontWeight:{

    },
    letterSpacing:{
    }
  },
  },
  plugins: [],
}

