import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar fixed top-0 z-50 backdrop-blur-sm bg-transparent shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img
          src={logo}
          alt="Hoobank logo"
          className="w-[124px] h-[32px] xs:w-[140px] xs:h-[36px] transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-secondary rounded"
          tabIndex={0}
        />

        {/* Desktop Navigation */}
        <ul
          className="list-none md:flex hidden justify-end items-center flex-1"
          role="menu"
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              role="menuitem"
              className={`font-poppins font-normal cursor-pointer text-[14px] ss:text-[16px] lg:text-[18px] xl:text-[20px] hover:text-secondary transition-colors ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${
                index === navLinks.length - 1
                  ? "mr-0"
                  : "mr-4 ss:mr-6 sm:mr-8 md:mr-10 lg:mr-12 xl:mr-16"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} aria-label={`Navigate to ${nav.title}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="w-[24px] h-[24px] ss:w-[28px] ss:h-[28px] object-contain cursor-pointer transition-all hover:opacity-80"
            onClick={() => setToggle(!toggle)}
          >
            <img src={toggle ? close : menu} alt="" />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 ss:p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] ss:min-w-[160px] rounded-xl sidebar shadow-2xl backdrop-blur-lg transition-all duration-300`}
          >
            <ul
              className="list-none flex justify-end items-start flex-1 flex-col w-full"
              role="menu"
            >
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  role="menuitem"
                  className={`font-poppins font-medium cursor-pointer text-[14px] ss:text-[16px] w-full hover:bg-secondary/20 rounded px-3 py-2 transition-all ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-2"}`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    aria-label={`Navigate to ${nav.title}`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
