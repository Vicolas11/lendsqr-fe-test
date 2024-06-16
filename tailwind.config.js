/** @type {import('tailwindcss').Config} */
const defaultTheme = import("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["AvenirBold", "AvenirRegular"],
        roboto: ["Roboto", "sans-serif"],
        worksans: ["Work+Sans"],
      },
      colors: {
        bgColor: "#ffffff",
        color1: "#213f7d",
        color2: "#39cdcc",
        color3: "#33afaf",
        color4: "#d93025",
        color5: "#fbfbfb",
        color6: "#f3fcfc",
        color7: "#7a8cb1",
        color8: "#545f7d",
        color9: "#213f7d1a",
        colorX: "#545f7d26",
        colorXI: "#e4033b",
      },
    },
    screens: {
      lit: { max: "300px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
