import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Element, Link } from "react-scroll";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import Sessions from "../components/sections/Sessions";
import Treatments from "../components/sections/treatments/Treatments";
import Card from "../components/sections/treatments/Card";
import Diseases from "../components/sections/Diseases";
import Testimonials from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { Contact } from "../components/sections/Contact";
import Image from "next/image";

const Homepage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Sessions></Sessions>
      <Treatments>
        <Card
          title="Acupuntura"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
          imageUrl="/images/treatments/acupuntura.jpg"
        />
        <Card
          title="Punción seca"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
          imageUrl="/images/treatments/puncion-seca.jpg"
        />
        <Card
          title="Terapia manual"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
          imageUrl="/images/treatments/terapia-manual.jpg"
        />
        <Card
          title="Auriculoterapia"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
          imageUrl="/images/treatments/auriculoterapia.jpg"
        />
        <Card
          title="Ventosas"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
          imageUrl="/images/treatments/ventosas.jpg"
        />
        <Card
          title="Fitoterapia"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
          imageUrl="/images/treatments/fitoterapia.jpg"
        />
        <Card
          title="Moxibustión"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
          imageUrl="/images/treatments/moxibustion.jpg"
        />
        <Card
          title="Kinesiotape"
          description="Técnica destinada a restablecer la bioelectricidad del cuerpo."
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
