import { useTranslation } from "react-i18next";

export const Treatments = ({ children }) => {
  const { t } = useTranslation("common");

  return (
    <section id="treatments" className="bg-white">
      <div className="py-16 text-center max-w-7xl m-auto md:py-20">
        <h2 className="text-secondary-500 text-4xl font-bold mb-3">
          {t("treatments")}
        </h2>

        <div
          className={`mx-auto justify-items-center justify-center pt-5 pb-12 
      md:flex md:flex-row md:flex-wrap md:max-w-3xl
      xl:grid-cols-4 xl:max-w-screen-2xl`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
