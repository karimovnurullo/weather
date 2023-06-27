/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      ss: "400px",
      sm: "567px",
      md: "767px",
      lg: "992px",
      xl: "1100px",
    },
    fontFamily: {
      ego: ["Ego", "san-serif"],
      ego_outline: ["Ego Outline", "san-serif"],
      arial_rounded: ["Arial Rounded", "san-serif"],
      poppins: ["Poppins", "san-serif"],
      inter: ["Inter", "san-serif"],
      associate: ["Associate Sans", "san-serif"],
      concord: ["Concord W00 Regular", "san-serif"],
      nord: ["Nord", "san-serif"],
      outfit: ["Outfit", "san-serif"],
      outfit_bold: ["Outfit Extra Bold", "san-serif"],
      centro: ["PF Centro Sans Pro", "san-serif"],
      chillax: ["Chillax", "san-serif"],
      clash_display: ["Clash Display", "san-serif"],
      technor: ["Technor", "san-serif"],
      author: ["Author", "san-serif"],
      pally: ["Pally", "san-serif"],
    },
  },
  plugins: [],
};
