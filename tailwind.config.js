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
      signature: ["Yellowtail", "cursive"],
    },
    extend: {
      colors: {
        "primary-50": "#E3E1D7",
        "primary-100": "#D1CFBF",
        "primary-200": "#C0BDA6",
        "primary-300": "#AFAC8E",
        "primary-400": "#9E9A76",
        "primary-500": "#8D885E",
        "primary-600": "#817956",
        "primary-700": "#756B4E",
        "primary-800": "#695E46",
        "primary-900": "#5D513E",

        "secondary-50": "#EADAD3",
        "secondary-100": "#DEC4B9",
        "secondary-200": "#D1AE9F",
        "secondary-300": "#C59885",
        "secondary-400": "#B8826A",
        "secondary-500": "#AC6C50",
        "secondary-600": "#9D5D49",
        "secondary-700": "#8F4F42",
        "secondary-800": "#80423C",
        "secondary-900": "#723635",
      },

      textColor: {
        "bluegray-100": "#D9DBE1",
        "bluegray-400": "#8999A9",
        "bluegray-500": "#6E7F91",
        "bluegray-800": "#3E474D",

        "brown-400": "#8F837C",
        "brown-600": "#77675F",
        "brown-800": "#3E372A",

        "basic-800": "#404B5A",
      },

      backgroundColor: {
        "basic-50": "#faf3ed",
        "basic-100": "#F9EDDD",
        "blue-900": "#0B0D17",
        "primary-500": "#8D885E",
      },

      scale: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
