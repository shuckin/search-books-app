module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#8058EC",
      white: "#FFFFFF",
      gray: {
        light: "#F2F2FA",
        DEFAULT: "#9D9CA1",
        dark: "#5A595E",
      },
      secondary: {
        one: "#7D93F8",
        two: "#5EB6A8",
        three: "#E8EBF2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
