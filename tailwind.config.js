/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#C4C4C4",
      gray_1: "#282828",
      green: "#1C3947",
      yellow: "#F7C868",
      blue_1: "#203ED6",
      error: "#CA462A",
      white_4: "#B6B6B6",
      black_2: "#07070ccf",
      black_3: "#636060",
      blue: "#1772eb",
      purple_4: "#5B46F6",
      blue_2: "#589CFF"
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        poppins_semibold: ["Poppins SemiBold", ...defaultTheme.fontFamily.sans],
        pragmatica_bold: ["Pragmatica Bold", ...defaultTheme.fontFamily.sans],
        space_grotesk: ["Space Grotesk"],
        open_sans: ["Open Sans"]
      },
      backgroundImage: {
        gradient_b_overlay_1: "linear-gradient(90deg, #5446f5 0%, #8075C6 50%, #451483 100%)",
        gradient_black_4: "linear-gradient(0deg, #151515 0%, #282828 100%)",
        gradient_p_1: 'linear-gradient(270deg, rgba(84, 70, 245, 1) 0.0%, rgba(128, 117, 198, 1) 100.01%, rgba(69, 20, 131, 1) 0.1%)',
      },
      backgroundColor: {
        bg_color_dark: "#07070c",
      },
      boxShadow: {
        white_shadow_15: "0px 0px 15px 0px rgba(255, 255, 255, 0.18)",
      },
      screens: {
        ios: "320px",
        samsungS8: "360px",
        xs: "390px",
        sm: "640px",
        md: "768px",
        "2md": "820px",
        "3md": "960px",
        lg: "1024px",
        "2lg": "1080px",
        "3lg": "1180px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
