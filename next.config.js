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
      {
        source: "/primera-cita",
        destination: "https://calendly.com/natachasouilhe/primera-cita",
        permanent: true,
      },
      {
        source: "/first-appointment",
        destination: "https://calendly.com/natachasouilhe/first-appointment",
        permanent: true,
      },
    ];
  },
};
