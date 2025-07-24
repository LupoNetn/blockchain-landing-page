import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/neofi-logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="border-b border-gray sticky top-0 z-50 bg-black backdrop-blur-3xl">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" />
          <p className="text-white font-bold text-xl">NEOFI</p>
        </div>

        {/* MOBILE NAV */}
        <div className="relative md:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <FiMenu size={24} className="text-white" />
            )}
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-10 right-0 bg-black shadow-lg rounded-lg p-4 w-60">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#home" className="text-gray p-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray p-2">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray p-2">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray p-2">
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="flex flex-col space-y-2">
                <button className="text-white rounded text-left p-2  cursor-pointer">
                  Log in
                </button>
                <button className="bg-green p-2 text-black cursor-pointer rounded-2xl text-left">
                  Try For Free
                </button>
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <ul className="flex flex-row space-x-4">
            <li>
              <a href="#home" className="text-gray p-2">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray p-2">
                Features
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray p-2">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray p-2">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex flex-row space-x-2 hidden">
          <button className="text-white rounded text-left p-2  cursor-pointer">
            Log in
          </button>
          <button className="bg-green text-black cursor-pointer rounded-[30px] text-left p-2">
            Try For Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
