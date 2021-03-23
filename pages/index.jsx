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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
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
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
            `,
              }}
            />
          </>
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
