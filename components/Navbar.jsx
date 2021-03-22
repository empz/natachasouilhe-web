import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export const Navbar = () => {
  const { t } = useTranslation("navbar");

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
    <div className="flex flex-row items-center text-gray-800 font-semibold p-2 pl-4">
      {/* <Image src="/images/logo.png" layout="fill" alt="Logo" /> */}
      <img src="/images/logo.png" alt="Logo" style={{ height: "44px" }} />
      <h1
        className="font-cursive text-secondary-500 text-2xl sm:text-3xl"
        style={{ textShadow: "1px 1px 1px #EADAD3" }}
      >
        Natacha Souilhe
      </h1>
      {/* <nav className="pr-2 text-sm">
        <ol className="flex flex-row justify-items-stretch text-current">
          {items.map((i) => (
            <li key={i} className="p-2">
              <Link to={i} activeClass="underline" spy={true}>
                {t(i)}
              </Link>
            </li>
          ))}
        </ol>
      </nav> */}
    </div>
  );
};
