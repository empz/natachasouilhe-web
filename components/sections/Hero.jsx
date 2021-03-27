import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

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

          <div className="flex flex-col flex-wrap justify-center text-center font-sans mt-7 text-base tracking-widest sm:flex-row sm:text-lg">
            <p>{t("diagnostico-occidental")}</p>
            <p className="hidden px-3 sm:block">•</p>
            <p>{t("tratamientos-milenarios")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
