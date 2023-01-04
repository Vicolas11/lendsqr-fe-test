/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["AvenirBold", "AvenirRegular"],
        roboto: ["Roboto", "sans-serif"],
        worksans: ["WorkSansRegular"],
      },
    },
    screens: {
      lit: { max: "300px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
