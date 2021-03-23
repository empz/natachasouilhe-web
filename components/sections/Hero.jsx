import { BackgroundImg } from "react-cloudimage-responsive";

export const Hero = () => (
  <BackgroundImg
    src="hero_banner_web.png"
    params="q=100"
    style={{ background: "center center / cover no-repeat" }}
  >
    <section className="flex items-stretch text-center h-screen" id="home">
      <div className="self-center m-auto text-white px-3">
        <div className="text-3xl md:text-5xl tracking-wide">
          <h1>"El equilibrio no es algo que encuentras,</h1>
          <h1 className="font-semibold text-primary-300">es algo que creas"</h1>
        </div>

        <div className="flex flex-col flex-wrap justify-center text-center font-sans mt-7 text-base tracking-widest sm:flex-row sm:text-lg">
          <div>Diagnóstico Occidental</div>
          <div className="hidden px-3 sm:block">•</div>
          <div> Tratamientos Milenarios</div>
        </div>
      </div>
    </section>
  </BackgroundImg>
);
