import Image from "next/image";

export const Diseases = () => (
  <section className="relative " id="diseases">
    <div
      className="bg-black bg-opacity-75"
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: "1",
      }}
    >
      <Image
        loading="eager"
        src="/images/afecciones-background_treated_02.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

    <div className="relative py-16 px-7 text-center z-10 m-auto max-w-6xl md:px-10">
      <h3
        className="font-sans font-extrabold text-primary-500 uppercase mb-3"
        style={{ letterSpacing: "0.24em" }}
      >
        Afecciones
      </h3>

      <h2 className="font-bold text-3xl mb-9 text-white tracking-wider leading-normal">
        Afecciones que se tratan con Medicina Tradicional China
      </h2>

      <div
        className="font-sans text-lg text-white leading-8 p-3"
        style={{ letterSpacing: "0.05em" }}
      >
        Insomnio<span className="text-primary-300"> • </span>
        Ansiedad y manejo del estrés
        <span className="text-primary-300"> • </span>
        Manejo de enfermedades crónicas
        <span className="text-primary-300"> • </span>
        Migraña<span className="text-primary-300"> • </span>
        Fibromialgia<span className="text-primary-300"> • </span>
        Lesiones deportivas<span className="text-primary-300"> • </span>
        Parálisis facial<span className="text-primary-300"> • </span>
        Hormigueo y pérdida de sensación
        <span className="text-primary-300"> • </span>
        Tratamientos para fertilidad
      </div>
    </div>
  </section>
);
