import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import sections from "../data/sections.json";

export const Footer = () => {
  const { t } = useTranslation("navbar");

  return (
    <footer className="bg-blue-900 py-11 px-5 text-white">
      <div className="flex flex-col space-y-5 lg:flex-row lg:justify-between lg:space-y-0 lg:pb-10">
        <div className="font-sans text-xl italic text-center lg:w-1/4">
          "El éxito de la terapia es combinar lo mejor de los dos mundos"
          <img
            src="images/logo_simple.png"
            alt="Logo simple"
            className="my-7 m-auto"
          />
        </div>
        <div className="lg:w-2/4">
          <ul className="tracking-wider space-y-4 text-center lg:flex lg:flex-row lg:flex-wrap lg:space-y-0">
            {sections.map((section) => (
              <li key={section} className="lg:w-1/2 lg:py-2">
                <Link
                  to={section}
                  className="cursor-pointer hover:text-secondary-500"
                  smooth={true}
                  duration={300}
                  offset={-40}
                >
                  {t(section)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-5 lg:w-1/4 lg:py-0">
          <ul className="tracking-wider space-y-5 text-center">
            <li>
              <img
                src="images/pin.svg"
                alt="Pin icon"
                className="inline-block mr-2 align-bottom"
              />
              Palma de Mallorca, España
            </li>
            <li>
              <img
                src="images/whatsapp_icon.svg"
                alt="Whatsapp icon"
                className="inline-block mr-2 align-bottom"
              />
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://wa.me/+34648903162"
              >
                +34 648 903 162
              </a>
            </li>
            <li>
              <img
                src="images/email_icon.svg"
                alt="Email icon"
                className="inline-block mr-2 align-bottom"
              />
              <a
                className="hover:underline"
                href="mailto:hola@natachasouilhe.com"
              >
                hola@natachasouilhe.com
              </a>
            </li>
            <li className="space-x-4">
              <a
                target="_blank"
                rel="noopener"
                href="https://instagram.com/natachasouilhe"
              >
                <img
                  className="inline-block transform hover:scale-110"
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
                  className="inline-block transform hover:scale-110"
                  src="images/linkedin_icon.svg"
                  alt="LinkedIn icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="opacity-30 mb-5" />
      <div className="font-sans text-center text-bluegray-100">
        © 2021. Natacha Souilhe. Todos los derechos reservados.
      </div>
    </footer>
  );
};
