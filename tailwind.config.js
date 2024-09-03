/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#101828",
        secondary:"#ae3be4",
        tertiary:"#ffffff",
        bColor:"#dee2e6",
        input:"#fdfeff"
      }
    },
  },
  plugins: [],
}

