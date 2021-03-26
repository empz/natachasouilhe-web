import { useTranslation } from "react-i18next";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  const { t } = useTranslation("common");

  return (
    <section id="testimonials" className="bg-basic-50 px-5 pb-10 md:px-10">
      <div className="pt-20 text-center max-w-screen-xl mx-auto">
        <h2 className="text-secondary-500 text-4xl font-bold mb-16">
          {t("testimonials")}
        </h2>

        <div className="flex flex-col lg:flex-row">
          <TestimonialCard pictureUrl="/images/Tomas-C.jpg" name="Tomas C">
            {t('testomonio-1')}
          </TestimonialCard>
          <TestimonialCard
            pictureUrl="/images/Sebastian-P.jpg"
            name="Sebastian P"
          >
            {t('testimonio-2')}
          </TestimonialCard>
          <TestimonialCard pictureUrl="/images/Martyna-M.jpg" name="Martyna M">
            {t('testimonio-3')}
          </TestimonialCard>
        </div>
      </div>
    </section>
  );
};
