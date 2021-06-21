import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import {
  AiFillGoogleSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import sections from "../data/sections.json";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-blue-900 py-11 px-5 text-white">
      <div className="flex flex-col space-y-5 lg:flex-row lg:justify-between lg:space-y-0 lg:pb-10">
        <div className="font-sans text-xl italic text-center lg:w-1/4">
          {t("main-quote")}
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
              {t("location")}
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
                href="https://wa.me/+34683242526"
              >
                +34 683 24 25 26
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
                href={`mailto:${t("contact-email")}`}
              >
                {t("contact-email")}
              </a>
            </li>
            <li className="space-x-4">
              <a
                className="inline-block"
                target="_blank"
                rel="noopener"
                href="https://g.page/r/CWSqyyvpKa4IEAE"
              >
                <AiFillGoogleSquare
                  size="2rem"
                  className="transform hover:scale-125"
                />
              </a>
              <a
                className="inline-block"
                target="_blank"
                rel="noopener"
                href="https://facebook.com/natachasouilhe"
              >
                <AiFillFacebook
                  size="2rem"
                  className="transform hover:scale-125"
                />
              </a>
              <a
                className="inline-block"
                target="_blank"
                rel="noopener"
                href="https://instagram.com/natachasouilhe"
              >
                <AiFillInstagram
                  size="2rem"
                  className="transform hover:scale-125"
                />
              </a>
              <a
                className="inline-block"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/natacha-souilhe"
              >
                <AiFillLinkedin
                  size="2rem"
                  className="transform hover:scale-125"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="opacity-30 mb-5" />
      <div className="font-sans text-center text-bluegray-100">
        © 2021. Natacha Souilhe. {t("all-rights-reserved")}
      </div>
    </footer>
  );
};
