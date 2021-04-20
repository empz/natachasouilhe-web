import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Sessions = () => {
  const { t } = useTranslation("common");

  return (
    <section id="sessions" className="bg-white">
      <div className="p-8 pt-10 flex flex-row flex-wrap lg:flex-row-reverse lg:p-0">
        <div className="bg-primary-50 bg-opacity-10 pb-5 lg:w-1/2 lg:p-5 lg:flex lg:flex-col lg:justify-center">
          <div className="lg:max-w-lg lg:pl-2">
            <h2
              className="font-sans font-extrabold text-primary-500 uppercase"
              style={{ letterSpacing: "0.24em" }}
            >
              {t("sessions")}
            </h2>

            <h3 className="font-bold text-3xl mt-1 mb-7 text-primary-900">
              {t("que-esperar-en-una-primer-sesion")}
            </h3>

            <p className="font-sans text-primary-600">{t("que-esperar-2")}</p>
          </div>
        </div>
        <div className="relative h-64 md:h-80 w-full lg:w-1/2">
          <Image
            loading="eager"
            src="/images/acupuntura_BIG.jpg"
            alt="Agujas de acupuntura"
            layout="fill"
            objectFit="cover"
            className="rounded-md lg:rounded-none"
          />
        </div>
      </div>

      <div
        className="p-8 pt-10 flex flex-row flex-wrap lg:flex-row lg:p-0"
        style={{ background: "rgba(141, 136, 94, 0.08)" }}
      >
        <div className="pb-5 lg:w-1/2 lg:p-5 lg:flex lg:flex-col lg:justify-center">
          <div className="lg:max-w-lg lg:self-end lg:pl-2">
            <h2
              className="font-sans font-extrabold text-primary-500 uppercase"
              style={{ letterSpacing: "0.24em" }}
            >
              {t("sessions")}
            </h2>

            <h3 className="font-bold text-3xl mt-1 mb-7 text-primary-900">
              {t('que-esperar-del-tratamiento')}
            </h3>

            <p className="font-sans text-primary-600">
              {t('que-esperar-3')}
            </p>
          </div>
        </div>
        <div className="relative h-52 md:h-80 w-full lg:w-1/2">
          <Image
            loading="eager"
            src="/images/terapia-manual_BIG.jpg"
            alt="Terapia manual"
            layout="fill"
            objectFit="cover"
            className="rounded-md lg:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};
