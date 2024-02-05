/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xxs: "280px",
        xs: "360px",
      },
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   white: "#ffffff",
    //   primary: "#0C68FF",
    //   green: "#17B26A",
    //   lightGreen: "#F6FEF9",
    //   light: {
    //     300: "#FAF3FC",
    //   },
    //   blue: {
    //     300: "#0E7CFF",
    //     900: "#042966",
    //   },
    //   gray: {
    //     50: "#F9FAFB",
    //     200: "#EAECF0",
    //     300: "#D0D5DD",
    //     400: "#ccd4e0",
    //     500: "#667085",
    //     600: "#475467",
    //     700: "#344054",
    //     800: "#1D2939",
    //     900: "#101828",
    //   },
    //   gradient: {
    //     300: "#0E7CFF",
    //     500: "#0C68FF",
    //     600: "#0953CC",
    //   },
    //   red: "red",
    // },
  },
  plugins: [],
};
