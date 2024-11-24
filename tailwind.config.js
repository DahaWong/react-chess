/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [],
  theme: {
    extend: {},
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
};
