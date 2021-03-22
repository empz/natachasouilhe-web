import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export const FAQ = () => (
  <section className="px-5 py-20 md:px-10">
    <div className="text-center max-w-screen-xl mx-auto">
      <h2 className="text-secondary-500 text-3xl font-bold mb-10">
        Preguntas Frecuentes
      </h2>

      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>¿Duelen las agujas?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Es normal sentir un pellizco o una sensación de dolor sordo. No
              debería ser doloroso aunque algunas personas pueden llegar a
              sentirlas más que otras.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              ¿Es segura la acupuntura durante el embarazo?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              ¡Sí! La acupuntura es una forma segura y eficaz de aliviar muchas
              molestias comúnmente asociadas con el embarazo. Además, la
              acupuntura se puede utilizar para ayudar a promover un trabajo de
              parto más eficiente. De hecho, muchas parteras y obstetras derivan
              a sus pacientes embarazadas.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              ¿Cómo debo prepararme para un tratamiento?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Use ropa holgada y cómoda para acceder fácilmente a los puntos de
              acupuntura. No consuma comidas abundantes justo antes o después de
              su visita.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              ¿Qué pueden tratar los acupunturistas?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              La acupuntura está reconocida por la Organización Mundial de la
              Salud (OMS) por ser eficaz en el tratamiento de una amplia
              variedad de problemas médicos.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);
