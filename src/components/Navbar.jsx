import { useState } from "react";
import logo from "../assets/logo.png";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "About", path: "about" },
    { link: "Brochure", path: "brochure" },
    { link: "Contact Us", path: "contact" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-xl mx-auto flex justify-between">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="md:px-10 text-2xl font semibold flex items-center space-x-3 text-blue"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline block items-center"
              />
              <span>Recruitedia</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="md:hidden md:px-14 p-9">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary text-lg" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 md:px-10 p-9 px-5 pt-24 pb-5 bg-secondary text-xl ${
          isMenuOpen ? "block relative top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block text-white hover:text-gray-300"
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;