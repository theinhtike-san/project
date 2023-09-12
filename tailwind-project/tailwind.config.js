/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'nunito': ['Nunito', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],

      },
      colors : {
        "primary" :  {
          100: "#cef1f5",
          200: "#9de4eb",
          300: "#6dd6e0",
          400: "#3cc9d6",
          500: "#0bbbcc",
          600: "#0996a3",
          700: "#07707a",
          800: "#044b52",
          900: "#022529"
},
      },
      keyframes: {
        slideUp : {
          '0%': { transform: 'translateY(500px)',
                  opacity: 0 },
          '100%': { transform: 'translateY(0px)',opacity:1},
        }
      },
      animation: {
        slideUp:'slideUp .7s ease-in-out 0s ',
        slideUp1:'slideUp .7s ease-in-out 100ms ',
        slideUp2:'slideUp .7s ease-in-out 200ms ',
        slideUp3:'slideUp .7s ease-in-out 300ms ',
      }
    },
  },
  plugins: [],
}

