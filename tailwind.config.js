module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0b1215"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
