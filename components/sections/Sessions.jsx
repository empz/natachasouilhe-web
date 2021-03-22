import Image from "next/image";

const Sessions = () => (
  <section id="sessions">
    <div className="p-5 pt-10 pb-0 flex flex-row flex-wrap">
      <div>
        <h3
          className="font-sans font-extrabold text-primary-500 uppercase"
          style={{ letterSpacing: "0.24em" }}
        >
          Sesiones
        </h3>

        <h2 className="font-bold text-3xl mb-5 text-primary-900">
          Qué esperar en una primer sesión
        </h2>

        <p className="font-sans text-primary-500">
          Haremos una evaluación inicial de 45' revisando hábitos e inquietudes.
          Luego del examen físico, estableceremos prioridades e implementaremos
          un plan de tratamiento específico.
        </p>
      </div>
      <div>
        <Image
          src="/images/acupuntura_BIG.jpg"
          width={335}
          height={200}
          alt="Agujas de acupuntura"
          className="rounded-sm"
        />
      </div>
    </div>

    <div
      className="p-5 pt-10 pb-0 flex flex-row flex-wrap"
      style={{ backgroundColor: "rgba(141, 136, 94, 0.08)" }}
    >
      <div>
        <h3
          className="font-sans font-extrabold text-primary-500 uppercase"
          style={{ letterSpacing: "0.24em" }}
        >
          Sesiones
        </h3>

        <h2 className="font-bold text-3xl mb-5 text-primary-900">
          Qué esperar del tratamiento
        </h2>

        <p className="font-sans text-primary-500">
          Las sesiones oscilarán entre 60’ y 90'. Trabajaremos sobre meridianos
          y puntos gatillo, abordaremos la fascia con terapia manual y masajes
          profundos. No se utilizará ningún aparato mecánico de fisioterapia en
          las sesiones.
        </p>
      </div>
      <div>
        <Image
          src="/images/terapia-manual_BIG.jpg"
          width={335}
          height={200}
          alt="Agujas de acupuntura"
          className="rounded-sm"
        />
      </div>
    </div>
  </section>
);

export default Sessions;
