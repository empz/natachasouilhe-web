import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const { t } = useTranslation("common");

  return (
    <section id="faq" className="bg-white px-5 py-20 md:px-10">
      <div className="text-center max-w-screen-xl mx-auto">
        <h2 className="text-secondary-500 text-3xl font-bold mb-10">
          {t("faq")}
        </h2>

        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{t('faq1-q')}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                {t('faq1-a')}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq2-q')}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                {t('faq2-a')}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq3-q')}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                {t('faq3-a')}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                {t('faq4-q')}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                {t('faq4-a')}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
