export const Footer = () => {
  return (
    <footer className="bg-blue-900 py-11 px-5 flex flex-col text-white space-y-5">
      <div className="font-sans text-xl italic text-center">
        "El éxito de la terapia es combinar lo mejor de los dos mundos"
        <img
          src="images/logo_simple.png"
          alt="Logo simple"
          className="my-7 m-auto"
        />
      </div>
      <div>
        <ul className="tracking-wider space-y-4 text-center">
          <li>Acerca de mi</li>
          <li>Sesiones</li>
          <li>Tratamientos</li>
          <li>Afecciones</li>
          <li>Preguntas frecuentes</li>
          <li>Testimonios</li>
          <li>Tratamientos</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="py-5">
        <ul className="tracking-wider space-y-4 text-center">
          <li>
            <img
              src="images/email_icon.svg"
              alt="Email icon"
              className="inline-block mr-2"
            />
            <a href="mailto:souilhenatacha@gmail.com">
              souilhenatacha@gmail.com
            </a>
          </li>
          <li>
            <img
              src="images/whatsapp_icon.svg"
              alt="Whatsapp icon"
              className="inline-block mr-2"
            />
            <a target="_blank" rel="noopener" href="https://wa.me/+34648903162">
              +34 648 903 162
            </a>
          </li>
          <li className="space-x-4">
            <a
              target="_blank"
              rel="noopener"
              href="https://instagram.com/natachasouilhe"
            >
              <img
                className="inline-block"
                src="images/instagram_icon.svg"
                alt="Instagram icon"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/natacha-souilhe"
            >
              <img
                className="inline-block"
                src="images/linkedin_icon.svg"
                alt="LinkedIn icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <hr className="opacity-30" />
      <div className="font-sans text-center text-bluegray-100">
        © 2021. Natacha Souilhe. Todos los derechos reservados.
      </div>
    </footer>
  );
};
