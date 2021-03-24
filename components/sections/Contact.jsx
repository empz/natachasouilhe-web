import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

export const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, phone, message });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white">
      <div style={{ background: "rgba(141, 136, 94, 0.08)" }}>
        <div className="text-center max-w-screen-xl mx-auto py-16 px-5 md:px-10">
          <h2 className="text-primary-800 text-3xl font-bold">Contacto</h2>

          <p className="font-sans text-xl font-semibold text-primary-600 mt-5">
            ¿Tienes una consulta? Escríbeme y me pondré en contacto a la
            brevedad.
          </p>

          <form
            onSubmit={onSubmit}
            className="space-y-3 mt-5 lg:flex lg:flex-row lg:flex-wrap lg:space-y-0"
          >
            <div className="space-y-3 flex flex-col justify-between lg:w-1/2 lg:h-52 lg:px-2 lg:space-y-0">
              <input
                className={`bg-primary-50 rounded-lg p-4 w-full
                font-sans text-lg text-primary-600 font-bold
                placeholder-primary-400 placeholder-opacity-90
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:placeholder-opacity-60`}
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                className={`bg-primary-50 rounded-lg p-4 w-full
                font-sans text-lg text-primary-600 font-bold
                placeholder-primary-400 placeholder-opacity-90
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:placeholder-opacity-60`}
                type="text"
                name="email"
                id="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className={`bg-primary-50 rounded-lg p-4 w-full
                font-sans text-lg text-primary-600 font-bold
                placeholder-primary-400 placeholder-opacity-90
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:placeholder-opacity-60`}
                type="text"
                name="phone"
                id="phone"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="space-y-3 flex flex-col justify-between lg:w-1/2 lg:h-52 lg:px-2 lg:space-y-0">
              <textarea
                className={`bg-primary-50 rounded-lg p-4 w-full h-full mb-4
                font-sans text-lg text-primary-600 font-bold
                placeholder-primary-400 placeholder-opacity-90
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:placeholder-opacity-60`}
                type="text"
                name="message"
                id="message"
                placeholder="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button
                className={`bg-primary-500 rounded-lg w-full p-4 text-lg 
            tracking-wider text-white font-sans font-bold shaodw-lg
            hover:bg-primary-600 focus:outline-none active:bg-primary-700`}
                type="submit"
                disabled={submitting || submitted}
              >
                {submitting
                  ? "Enviando..."
                  : submitted
                  ? "¡Gracias!"
                  : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
