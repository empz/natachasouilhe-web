import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { useToggle } from "../hooks/use-toggle";

export const Navbar = () => {
  const { t } = useTranslation("navbar");

  const [mobileMenuExpanded, toggleMobileMenuExpanded] = useToggle();

  const items = [
    "home",
    "about",
    "sessions",
    "treatments",
    "diseases",
    "testimonials",
    "faq",
    "contact",
  ];

  return (
    <div className="fixed z-50 flex flex-row flex-wrap justify-between w-full items-center bg-white text-gray-800 font-semibold p-2 pl-4">
      <div className="w-full bg-white flex flex-row items-center justify-between xl:w-auto">
        <Link
          to="home"
          className="flex flex-row items-center cursor-pointer"
          smooth={true}
          duration={300}
        >
          <img src="/images/logo.png" alt="Logo" style={{ height: "44px" }} />
          <h1
            className="font-cursive text-secondary-500 text-2xl sm:text-3xl"
            style={{ textShadow: "1px 1px 1px #EADAD3" }}
          >
            Natacha Souilhe
          </h1>
        </Link>
        <div
          id="hamburgerbtn"
          class="cursor-pointer xl:hidden"
          onClick={toggleMobileMenuExpanded}
        >
          🍔
        </div>
      </div>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="bg-white w-full pr-2 text-sm text-bluegray-800 flex flex-row justify-between justify-items-end xl:w-auto"
      >
        <ul
          className={`${
            mobileMenuExpanded ? "block" : "hidden"
          } justify-items-stretch justify-end mx-auto
            xl:flex xl:flex-row`}
        >
          {items.map((i) => (
            <li key={i} className="p-2">
              <Link
                to={i}
                className="cursor-pointer hover:text-secondary-500"
                activeClass="text-secondary-500"
                spy={true}
                smooth={true}
                duration={300}
                offset={-30}
                onClick={toggleMobileMenuExpanded}
              >
                {t(i)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
