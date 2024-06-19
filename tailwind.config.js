/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00B207',
        secendary:'#FF8A00',
        tertiary:'#84D187',
        danger:'#EA4B48',
        custom: '#2C742F',
        custom1:"#1A1A1A"
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },

    },
  },
  plugins: [],
}

