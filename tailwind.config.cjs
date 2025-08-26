/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {

        sans: ['"Noto Sans Display"', ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        mono: ["Montserrat", ...defaultTheme.fontFamily.sans],

      },
      colors: {
        pc: '#36436C',
        sc: "#ED3C96",
        wc: "#FFFFFF",
        bc: "#000000",
        customTeal: '#19A4AD',
        maintextcolor: '#03313D'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
