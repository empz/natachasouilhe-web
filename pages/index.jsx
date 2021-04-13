import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/sections/Hero";
import { AboutMe } from "../components/sections/AboutMe";
import { Sessions } from "../components/sections/Sessions";
import { Treatments } from "../components/sections/treatments/Treatments";
import { Card } from "../components/sections/treatments/Card";
import { Diseases } from "../components/sections/Diseases";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { Contact } from "../components/sections/Contact";

const Homepage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("index-title")}</title>
        <meta name="description" content={t("index-description")} />

        <link
          rel="canonical"
          hreflang="en"
          href="https://natachasouilhe.com/en"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://natachasouilhe.com/es"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://natachasouilhe.com/" />
        <meta property="og:type" content="website" />
        <meta property="og-title" content={t("index-title")} />
        <meta property="og-description" content={t("index-description")} />
        <meta
          property="og:image"
          content="https://natachasouilhe.com/images/acerca-de-mi.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="natachasouilhe.com" />
        <meta property="twitter:url" content="https://natachasouilhe.com/" />
        <meta name="twitter-title" content={t("index-title")} />
        <meta name="twitter-description" content={t("index-description")} />
        <meta
          name="twitter:image"
          content="https://natachasouilhe.com/images/acerca-de-mi.png"
        />

        {/* Plausible Analytics */}
        {process.env.NODE_ENV === "production" && (
          <script
            async
            defer
            data-domain="natachasouilhe.com"
            src="https://plausible.io/js/plausible.outbound-links.js"
          ></script>
        )}
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Sessions></Sessions>
      <Treatments>
        <Card
          title={t("treatment-acupuntura-title")}
          description={t("treatment-acupuntura-description")}
          imageUrl="/images/treatments/acupuntura.jpg"
        />
        <Card
          title={t("treatment-puncion-title")}
          description={t("treatment-puncion-description")}
          imageUrl="/images/treatments/puncion-seca.jpg"
        />
        <Card
          title={t("treatment-manual-title")}
          description={t("treatment-manual-description")}
          imageUrl="/images/treatments/terapia-manual.jpg"
        />
        <Card
          title={t("treatment-ventosas-title")}
          description={t("treatment-ventosas-description")}
          imageUrl="/images/treatments/ventosas.jpg"
        />
        <Card
          title={t("treatment-auriculoterapia-title")}
          description={t("treatment-auriculoterapia-description")}
          imageUrl="/images/treatments/auriculoterapia.jpg"
        />
        <Card
          title={t("treatment-naturopatia-title")}
          description={t("treatment-naturopatia-description")}
          imageUrl="/images/treatments/fitoterapia.jpg"
        />
        <Card
          title={t("treatment-moxibustion-title")}
          description={t("treatment-moxibustion-description")}
          imageUrl="/images/treatments/moxibustion.jpg"
        />
        <Card
          title={t("treatment-kinesiotape-title")}
          description={t("treatment-kinesiotape-description")}
          imageUrl="/images/treatments/kinesiotape.jpg"
        />
      </Treatments>
      <Diseases />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
