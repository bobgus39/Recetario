// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      hammersmith: ["Hammersmith One", "sans-serif"],
      solway: ["Solway", "serif"],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
