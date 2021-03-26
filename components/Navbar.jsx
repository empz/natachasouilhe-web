import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { useToggle } from "../hooks/use-toggle";
import sections from "../data/sections.json";

export const Navbar = () => {
  const { t } = useTranslation("common");

  const [mobileMenuExpanded, toggleMobileMenuExpanded] = useToggle();

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
          className="cursor-pointer mr-2 xl:hidden"
          onClick={toggleMobileMenuExpanded}
        >
          <img
            src={`images/${
              mobileMenuExpanded
                ? "navbar_menu_close_btn"
                : "navbar_menu_button"
            }.svg`}
            alt="Menu expand/collapse button"
          />
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
          } justify-items-stretch justify-end mx-auto text-center tracking-wider
            xl:flex xl:flex-row`}
        >
          {sections.map((link) => (
            <li key={link} className="p-2">
              <Link
                to={link}
                className="cursor-pointer hover:text-secondary-500"
                activeClass="text-secondary-500"
                spy={true}
                hashSpy={false}
                smooth={true}
                duration={300}
                offset={-40}
                onClick={toggleMobileMenuExpanded}
              >
                {t(link)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
