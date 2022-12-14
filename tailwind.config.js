const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#F6E8DF",
      header: "#3E3C6E",
      login: "#3E3C6E",
      white: '#FFFFFF',
      text: {
        DEFAULT: "#000000",
        light: "#000000",
      },
      light: {
        DEFAULT: "#FFFFFF",
        lighter: "#FF969B",
      },
    },
    extend: {},
  },
  plugins: [],
}
