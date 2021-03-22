module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: [
        "Roboto Slab",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      sans: ["Mukta", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      cursive: ["Handlee", "cursive"],
    },
    extend: {
      colors: {
        "primary-50": "#D1CFBF",
        "primary-100": "#C0BDA6",
        "primary-200": "#AFAC8E",
        "primary-300": "#AFAC8E",
        "primary-400": "#756B4E",
        "primary-500": "#8D885E",
        "primary-600": "#5D513E",
        "primary-700": "#9E9A76",
        "primary-800": "#8D885E",
        "primary-900": "#5D513E",

        "secondary-50": "#EADAD3",
        "secondary-100": "#D1AE9F",
        "secondary-200": "#C59885",
        "secondary-300": "#B8826A",
        "secondary-400": "#EADAD3",
        "secondary-500": "#AC6C50",
        "secondary-600": "#9D5D49",
        "secondary-700": "#8F4F42",
        "secondary-800": "#80423C",
        "secondary-900": "#723635",
      },

      textColor: {
        "bluegray-700": "#3E474D",

        "brown-400": "#8F837C",
        "brown-800": "#3E372A",
      },

      backgroundColor: {
        "basic-50": "#faf3ed",
        "basic-100": "#F9EDDD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
