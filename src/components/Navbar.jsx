import React, { useRef } from "react";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-lg font-bold">My Website</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-yellow-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-yellow-500"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-yellow-500"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-yellow-500"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
