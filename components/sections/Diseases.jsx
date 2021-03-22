const Diseases = () => (
  <section
    className="py-16 px-5 text-center"
    style={{ background: "url(images/afecciones-background_treated.jpg) center" }}
    id="diseases"
  >
    <h3
      className="font-sans font-extrabold text-primary-500 uppercase mb-3"
      style={{ letterSpacing: "0.24em" }}
    >
      Afecciones
    </h3>

    <h2 className="font-bold text-3xl mb-10 text-white tracking-wider leading-normal">
      Afecciones que se tratan con Medicina Tradicional China
    </h2>

    <div
      className="font-sans text-lg text-white leading-8"
      style={{ letterSpacing: "0.05em" }}
    >
      Insomnio<span className="text-primary-300"> • </span>
      Ansiedad y manejo del estrés<span className="text-primary-300"> • </span>
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
  </section>
);

export default Diseases;
