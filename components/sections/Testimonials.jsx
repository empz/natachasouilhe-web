import { TestimonialCard } from "./TestimonialCard";

const Testimonials = () => (
  <section id="testimonials" className="bg-basic-50 px-5 pb-10 md:px-10">
    <div className="pt-20 text-center max-w-screen-xl mx-auto">
      <h2 className="text-secondary-500 text-4xl font-bold mb-16">
        Testimonios
      </h2>

      <div className="flex flex-col lg:flex-row">
        <TestimonialCard pictureUrl="images/Tomas-C.jpg" name="Tomas C">
          Excelente profesional, la Lic. Souilhe me trató en varias
          oportunidades. Logró curarme los esguinces crónicos que tenía en los
          dos tobillos, por lesiones de fútbol. También me realicé algunas
          sesiones de acupuntura, las cuales dieron increíbles resultados.
        </TestimonialCard>
        <TestimonialCard pictureUrl="images/Sebastian-P.jpg" name="Sebastian P">
          Visité a la Fisioterapeuta porque tenía dolores de espalda. Me aplicó
          varias técnicas de fisioterapia, masajes, etc. y después de un par de
          sesiones, comence a vislumbrar una rápida mejoría. He vuelto a mi vida
          normal y a mis entrenamientos deportivos.
        </TestimonialCard>
        <TestimonialCard pictureUrl="images/Martyna-M.jpg" name="Martyna M">
          Muy profesional, agradable, con mucha paciencia. Se fija mucho en las
          necesidades y bienestar del paciente. Tiene mucho conocimiento,
          experiencia y aunque no lo parezca tiene mucha fuerza con las
          contracturas viejas. ¡Es muy útil!
        </TestimonialCard>
      </div>
    </div>
  </section>
);

export default Testimonials;
