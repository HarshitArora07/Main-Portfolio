/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
  montserrat: ["Montserrat", "sans-serif"],
  poppins: ["Poppins", "sans-serif"],
  dmsans: ["DM Sans", "sans-serif"],
  playfair: ["Playfair Display", "serif"],
  orbitron: ["Orbitron", "sans-serif"],
},

  },
},

  plugins: [],
}
