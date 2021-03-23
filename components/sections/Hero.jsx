const Hero = () => (
  <section className="flex items-stretch text-center hero-container" id="home">
    <div className="self-center m-auto text-white px-3">
      <div className="text-3xl md:text-5xl tracking-wide">
        <h1>"El equilibrio no es algo que encuentras,</h1>
        <h1 className="font-semibold text-primary-300">es algo que creas"</h1>
      </div>

      <div className="text-center font-sans mt-7 text-base tracking-widest md:text-lg">
        Diagnóstico Occidental <span className="invisible md:visible">•</span>{" "}
        Tratamientos Milenarios
      </div>
    </div>
  </section>
);

export default Hero;
