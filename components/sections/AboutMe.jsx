import Image from "next/image";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-basic-50" id="about">
      <div className="flex flex-col flex-wrap max-w-6xl mx-auto md:flex-row md:items-center">
        <div className="flex-1 self-center p-8 md:p-10">
          <h2 className="text-secondary-500 text-4xl font-bold mb-6">
            {t("about")}
          </h2>

          <p className="mb-5 font-sans text-brown-800 text-lg leading-snug">
            {t("about-me-bio")}
          </p>

          <p className="font-lato text-xl text-brown-800 font-bold italic tracking-wide leading-normal">
            {t("about-me-quote")}
          </p>
        </div>
        <div className="flex-1 text-center w-9/12 mx-auto flex flex-col items-end md:ml-10 md:self-end">
          <Image
            loading="eager"
            src="/images/acerca-de-mi.png"
            alt="Natacha Souilhe picture"
            quality="85"
            width="516px"
            height="471px"
          />
        </div>
      </div>
    </section>
  );
};
