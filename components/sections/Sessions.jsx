import Image from "next/image";

export const Sessions = () => (
  <section id="sessions">
    <div className="p-8 pt-10 flex flex-row flex-wrap lg:flex-row-reverse lg:p-0">
      <div className="bg-primary-50 bg-opacity-10 pb-5 lg:w-1/2 lg:p-5 lg:flex lg:flex-col lg:justify-center">
        <div className="lg:max-w-lg lg:pl-2">
          <h3
            className="font-sans font-extrabold text-primary-500 uppercase"
            style={{ letterSpacing: "0.24em" }}
          >
            Sesiones
          </h3>

          <h2 className="font-bold text-3xl mt-1 mb-7 text-primary-900">
            Qué esperar en una primer sesión
          </h2>

          <p className="font-sans text-primary-600">
            Haremos una evaluación inicial de 45' revisando hábitos e
            inquietudes. Luego del examen físico, estableceremos prioridades e
            implementaremos un plan de tratamiento específico.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          className="h-52 md:h-80 w-full object-cover"
          src="/images/acupuntura_BIG.jpg"
          layout="fill"
          alt="Agujas de acupuntura"
        />
      </div>
    </div>

    <div
      className="p-8 pt-10 flex flex-row flex-wrap lg:flex-row lg:p-0"
      style={{ background: "rgba(141, 136, 94, 0.08)" }}
    >
      <div className="pb-5 lg:w-1/2 lg:p-5 lg:flex lg:flex-col lg:justify-center">
        <div className="lg:max-w-lg lg:self-end lg:pl-2">
          <h3
            className="font-sans font-extrabold text-primary-500 uppercase"
            style={{ letterSpacing: "0.24em" }}
          >
            Sesiones
          </h3>

          <h2 className="font-bold text-3xl mt-1 mb-7 text-primary-900">
            Qué esperar del tratamiento
          </h2>

          <p className="font-sans text-primary-600">
            Las sesiones oscilarán entre 60’ y 90'. Trabajaremos sobre
            meridianos y puntos gatillo, abordaremos la fascia con terapia
            manual y masajes profundos. No se utilizará ningún aparato mecánico
            de fisioterapia en las sesiones.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          className="h-52 md:h-80 w-full object-cover"
          src="/images/terapia-manual_BIG.jpg"
          layout="fill"
          alt="Agujas de acupuntura"
        />
      </div>
    </div>
  </section>
);
