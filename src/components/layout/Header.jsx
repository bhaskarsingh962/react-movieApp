import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-white z-50">
          <NavLink to="/" className="transition duration-300 hover:text-green-400">
            Movie Duniya
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-4xl focus:outline-none">
            {isMenuOpen ? (
              <FiX className="text-green-400 transition-transform duration-300 transform rotate-180" />
            ) : (
              <FiMenu className="text-green-400 transition-transform duration-300 transform rotate-0" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-0 z-40 bg-gray-900 bg-opacity-95 lg:bg-transparent lg:static lg:translate-x-0 flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 justify-center items-center lg:justify-start transition-transform duration-500 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 w-full h-screen lg:h-auto justify-center items-center text-3xl space-y-8 lg:space-y-0">
            <li onClick={closeMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-300 hover:text-green-400 transition duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-blue-400 transition duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-300 hover:text-green-400 transition duration-300"
                }
              >
                Movies
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-300 hover:text-green-400 transition duration-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
