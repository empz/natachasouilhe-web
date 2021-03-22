import Image from "next/image";

const AboutMe = () => (
  <section className="flex flex-col flex-wrap bg-basic-50 p-7 pb-0 md:flex-row" id="about">
    <div className="flex-1 self-center lg:pl-12">
      <h2 className="text-secondary-500 text-4xl font-bold mb-6">
        Acerca de mi
      </h2>

      <p className="mb-5 font-sans text-brown-400 text-lg leading-snug">
        Fisioterapeuta holística formada en universidad occidental y
        especializada en medicina tradicional china.
      </p>

      <p className="font-lato text-xl text-brown-400 font-bold italic tracking-wide leading-normal">
        "Cuando la fisioterapia convencional dejó de brindarme soluciones
        eficaces y reales para mis pacientes, comencé un camino alternativo y
        complementario"
      </p>
    </div>
    <div className="flex-1 text-center">
      <Image
        src="/images/acerca-de-mi.png"
        alt="Natacha Souilhe"
        width={566}
        height={518}
        layout="intrinsic"
      />
    </div>
  </section>
);

export default AboutMe;
