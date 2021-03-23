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
        <title>
          Natacha Souilhe: Fisioterapia y Medicina Tradicional China
        </title>
        <meta
          name="description"
          content="Fisioterapeuta especializada en Medicina Tradicional China. Palma de Mallorca, España."
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
          title="Acupuntura"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo"
          imageUrl="/images/treatments/acupuntura.jpg"
        />
        <Card
          title="Punción seca"
          description="Método destinado a la desactivación de puntos gatillo miofasciales"
          imageUrl="/images/treatments/puncion-seca.jpg"
        />
        <Card
          title="Terapia manual"
          description="Masajes y técnicas utilizadas para disfunciones neuro-músculo-esqueléticas"
          imageUrl="/images/treatments/terapia-manual.jpg"
        />
        <Card
          title="Ventosas"
          description="Técnica orientada a la liberación miofascial"
          imageUrl="/images/treatments/ventosas.jpg"
        />
        <Card
          title="Auriculoterapia"
          description='Tratamiento global desde una zona refleja "la oreja"'
          imageUrl="/images/treatments/auriculoterapia.jpg"
        />
        <Card
          title="Fitoterapia"
          description="Ciencia que estudia la utilización de productos de origen vegetal con finalidad terapéutica"
          imageUrl="/images/treatments/fitoterapia.jpg"
        />
        <Card
          title="Moxibustión"
          description="Método terapéutico de la medicina tradicional china que consiste en aplicar calor en puntos acupunturales"
          imageUrl="/images/treatments/moxibustion.jpg"
        />
        <Card
          title="Kinesiotape"
          description="Técnica que aporta estabilidad dinámica al sistema mio-articular"
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
    ...(await serverSideTranslations(locale, ["common", "footer", "navbar"])),
  },
});

export default Homepage;
