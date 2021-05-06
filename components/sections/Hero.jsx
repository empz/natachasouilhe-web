import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { openPopupWidget, CalendlyEventListener } from "react-calendly";
import { usePlausible } from "next-plausible";

import * as ga from "lib/ga";

export const Hero = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const plausible = usePlausible();

  const handleBookButtonClick = () => {
    openPopupWidget({
      url: t("hero-call-to-action-link"),
      utm: { utmSource: "website" },
    });

    plausible("bookButtonClicked", {
      props: {
        locale: locale,
      },
    });

    ga.event({
      action: "book_button_clicked",
      params: {
        category: "booking",
        label: "Book button was clicked",
      },
    });
  };

  const quote =
    locale === "en" ? (
      <blockquote className="text-5xl md:text-6xl xl:text-7xl">
        <p>
          {t("el-equilibrio-no-es-algo-que-encuentras")}{" "}
          <span className="font-semibold text-primary-300">
            {t("es-algo-que-creas")}
          </span>
        </p>
      </blockquote>
    ) : (
      <blockquote>
        <p>{t("el-equilibrio-no-es-algo-que-encuentras")}</p>
        <p className="font-semibold text-primary-300">
          {t("es-algo-que-creas")}
        </p>
      </blockquote>
    );

  return (
    <section id="home" className="pt-14 -mb-14">
      <div
        className="bg-black bg-opacity-75 absolute h-screen w-full"
        style={{
          zIndex: -1,
        }}
      >
        <Image
          loading="eager"
          src="/images/hero_banner_web.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
        />
      </div>
      <div className="flex items-stretch text-center h-screen">
        <div className="self-center m-auto text-white px-3">
          <div className="text-3xl md:text-5xl tracking-wide">{quote}</div>

          <h1 className="flex flex-col flex-wrap justify-center text-center font-sans mt-10 text-xl tracking-widest sm:flex-row sm:text-2xl">
            <p>{t("hero-title")}</p>
            <p className="hidden px-3 sm:block">•</p>
            <p>Palma de Mallorca</p>
          </h1>

          <CalendlyEventListener
            onDateAndTimeSelected={(e) => {
              // console.log(e);

              plausible("calendlyDateSelected", {
                props: {
                  locale: locale,
                },
              });

              ga.event({
                action: "calendly_date_selected",
                params: {
                  category: "booking",
                  label: "Date was selected",
                },
              });
            }}
            onEventScheduled={(e) => {
              // console.log(e);

              plausible("calendlyEventScheduled", {
                props: {
                  locale: locale,
                  event: e.data.event.uri,
                },
              });

              ga.event({
                action: "calendly_event_scheduled",
                params: {
                  category: "booking",
                  label: "A booking was scheduled",
                },
              });
            }}
          >
            <div className="mt-16">
              <button
                onClick={handleBookButtonClick}
                className="bg-primary-500 rounded-lg p-4 text-2xl px-10
                tracking-wider shadow-2xl text-white font-sans font-bold shaodw-lg
                hover:bg-primary-600 focus:outline-none active:bg-primary-700"
              >
                {t("hero-call-to-action")}
              </button>
            </div>
          </CalendlyEventListener>
        </div>
      </div>
    </section>
  );
};
