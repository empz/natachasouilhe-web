const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  async redirects() {
    return [
      {
        source: "/cita",
        destination: "https://calendly.com/natachasouilhe",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "https://calendly.com/natachasouilhe",
        permanent: true,
      },
    ];
  },
};
