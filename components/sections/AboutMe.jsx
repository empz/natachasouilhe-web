import Image from "next/image";

export const AboutMe = () => (
  <section className="bg-basic-50" id="about">
    <div className="flex flex-col flex-wrap max-w-6xl mx-auto md:flex-row md:items-center">
      <div className="flex-1 self-center p-8 md:p-10">
        <h2 className="text-secondary-500 text-4xl font-bold mb-6">
          Acerca de mi
        </h2>

        <p className="mb-5 font-sans text-brown-800 text-lg leading-snug">
          Fisioterapeuta holística formada en universidad occidental y
          especializada en medicina tradicional china.
        </p>

        <p className="font-lato text-xl text-brown-800 font-bold italic tracking-wide leading-normal">
          "Cuando la fisioterapia convencional dejó de brindarme soluciones
          eficaces y reales para mis pacientes, comencé un camino alternativo y
          complementario"
        </p>
      </div>
      <div className="flex-1 text-center w-9/12 mx-auto flex flex-col items-end md:ml-10 md:self-end">
        <Image
          src="/images/acerca-de-mi.png"
          alt="Natacha Souilhe"
          width={566}
          height={518}
          layout="intrinsic"
        />
      </div>
    </div>
  </section>
);
