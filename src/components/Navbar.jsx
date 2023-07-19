import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const style_link_active =
  "relative hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium after:absolute after:h-[3px] after:w-[70%] after:bottom-[1px] after:left-[0] after:bg-[var(--main-color)]";
const style_link =
  "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

const style_dd_link_active =
  "relative  hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium after:absolute after:h-[3px] after:w-[70%] after:bottom-[1px] after:left-[0] after:bg-[var(--main-color)]";
const style_dd_link =
  "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className="bg-zinc-800">
        <div className="min-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-w-[90vw] flex items-center justify-between h-16">
            <div className="min-w-[60vw] md:min-w-[90vw] flex items-center justify-between">
              <Link
                to="https://kuchengames.de"
                className="p-2 text-[var(--white-color)] hover:text-white flex-shrink-0 font-bold flex flex-row items-center justify-around"
              >
                <img className="h-8 w-8" src={Logo} alt="Workflow" />
                <p className="ml-2 font-extrabold tracking-tight">
                  KuchenGames
                </p>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className={
                      currentPath === "/" ? style_link_active : style_link
                    }
                  >
                    Home
                  </Link>

                  <Link
                    to="https://dash.kuchengames.de"
                    className={
                      style_link +
                      " text-gray-500 pointer-events-none cursor-not-allowed"
                    }
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/team"
                    className={
                      currentPath === "/team" ? style_link_active : style_link
                    }
                  >
                    Team
                  </Link>

                  <Link to="https://shop.kuchengames.de" className={style_link}>
                    Shop
                  </Link>

                  <Link to="https://wiki.kuchengames.de" className={style_link}>
                    Wiki
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className={
                    currentPath === "/" ? style_dd_link_active : style_dd_link
                  }
                >
                  Home
                </Link>

                <Link
                  to="https://dash.kuchengames.de"
                  className={
                    style_dd_link +
                    " text-gray-500 pointer-events-none cursor-not-allowed"
                  }
                >
                  Dashboard
                </Link>

                <Link
                  to="/team"
                  className={
                    currentPath === "/team"
                      ? style_dd_link_active
                      : style_dd_link
                  }
                >
                  Team
                </Link>

                <Link
                  to="https://shop.kuchengames.de"
                  className={style_dd_link}
                >
                  Shop
                </Link>

                <Link
                  to="https://wiki.kuchengames.de"
                  className={style_dd_link}
                >
                  Wiki
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}
