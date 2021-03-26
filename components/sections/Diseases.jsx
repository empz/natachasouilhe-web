import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Diseases = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative " id="diseases">
      <div
        className="bg-black bg-opacity-75"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "1",
        }}
      >
        <Image
          loading="eager"
          src="/images/afecciones-background_treated_02.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative py-16 px-7 text-center z-10 m-auto max-w-6xl md:px-10">
        <h3
          className="font-sans font-extrabold text-primary-500 uppercase mb-3"
          style={{ letterSpacing: "0.24em" }}
        >
          {t("diseases")}
        </h3>

        <h2 className="font-bold text-3xl mb-9 text-white tracking-wider leading-normal">
          {t('diseases-subtitle')}
        </h2>

        <div
          className="font-sans text-lg text-white leading-8 p-3"
          style={{ letterSpacing: "0.05em" }}
        >
          {t('insomnio')}<span className="text-primary-300"> • </span>
          {t('ansiedad-estres')}
          <span className="text-primary-300"> • </span>
          {t('manejo-de-enfermedades-cronicas')}
          <span className="text-primary-300"> • </span>
          {t('migrana')}<span className="text-primary-300"> • </span>
          {t('fibromialgia')}<span className="text-primary-300"> • </span>
          {t('lesiones-deportivas')}<span className="text-primary-300"> • </span>
          {t('paralisis-facial')}<span className="text-primary-300"> • </span>
          {t('hormigueo-y-perdida-de-sensacion')}
          <span className="text-primary-300"> • </span>
          {t('tratamientos-para-fertilidad')}
        </div>
      </div>
    </section>
  );
};
