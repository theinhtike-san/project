/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'agdasima': ['Agdasima', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'freehand': ['Freehand', 'cursive'],
    },
    extend: {
      colors: {
        'primary': {
          100: "#ffd2d2",
          200: "#ffa5a5",
          300: "#ff7878",
          400: "#ff4b4b",
          500: "#ff1e1e",
          600: "#cc1818",
          700: "#991212",
          800: "#660c0c",
          900: "#330606"
        },
        'secondary': {
          100: "#fef1d2",
          200: "#fee3a4",
          300: "#fdd677",
          400: "#fdc849",
          500: "#fcba1c",
          600: "#ca9516",
          700: "#977011",
          800: "#654a0b",
          900: "#322506"
        },
        'opacity0': 
          "rgba(255, 255, 255, 0.200)",

        
      },
      plugins: [
        require('flowbite/plugin')],
    },
  }
}