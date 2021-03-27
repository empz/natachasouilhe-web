import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export function LanguageSelector({ languages }) {
  const { locale } = useRouter();

  return (
    <>
      <div className="block xl:hidden">
        <hr className="mb-2" />
        {languages.map((lang) => (
          <Link href="/" locale={lang.key} key={lang.key}>
            <a
              className={`${
                lang.key === locale ? "text-secondary-500" : "text-current"
              } block w-full px-4 py-2 text-sm leading-5 text-center`}
            >
              {lang.caption}
            </a>
          </Link>
        ))}
      </div>
      <div className="relative hidden text-left xl:inline-block xl:pt-1">
        <Menu>
          {({ open }) => (
            <>
              <span className="rounded-md shadow-sm">
                <Menu.Button
                  className="inline-flex justify-center w-full text-sm font-medium leading-5 
              text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none 
              focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                >
                  <img
                    src="/images/globe_icon.svg"
                    className="inline w-6 h-6"
                    alt="Globe icon"
                  />
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-24 mt-2 origin-top-right bg-white border border-gray-200 
                divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <Menu.Item key={lang.key}>
                        <Link href="/" locale={lang.key}>
                          <a
                            className={`${
                              lang.key === locale
                                ? "text-secondary-500"
                                : "text-current"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            {lang.caption}
                          </a>
                        </Link>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}
