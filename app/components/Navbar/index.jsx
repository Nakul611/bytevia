"use client";

import React, { useState } from "react";
import { NavbarComponents } from "../../constants/NavbarComponents";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (key) => {
    setOpenSubmenu((prev) => (prev === key ? null : key));
  };

  return (
    <nav className="bg-blue-light-1 shadow-md px-6 py-3 border-0 rounded-b-lg relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 px-5">
          <a href="/dashboard">
            <img
              src="/BYTEVIA.png"
              alt="Logo"
              className="h-10 w-auto scale-125 rounded-md"
            />
          </a>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpenSubmenu(null);
            }}
            className="text-primary-dark text-2xl"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav Links & CTA */}
        <div className="hidden md:flex items-center justify-between flex-grow">
          {/* Nav Links */}
          <ul className="flex gap-12 justify-center flex-grow">
            {NavbarComponents.map((item) => (
              <li key={item.key} className="relative group">
                <a
                  href={item.href}
                  className="font-medium text-primary-dark hover:text-blue-light-3 transition-colors"
                >
                  {item.title}
                </a>

                {item.submenu?.length > 0 && (
                  <div className="absolute left-0 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50 p-4">
                    <div
                      className="grid grid-rows-6 auto-cols-max"
                      style={{ gridAutoFlow: "column" }}
                    >
                      {item.submenu.map((sub, index) => (
                        <div
                          key={index}
                          className="whitespace-nowrap px-4 py-2 text-sm text-primary-dark hover:bg-blue-light-2 transition-colors duration-200"
                        >
                          <a href={sub.href ?? "#"}>{sub.title}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button
              className="text-white px-4 py-2 rounded-full hover:bg-primary-dark transition"
              style={{ backgroundColor: "#0a192c" }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } bg-white rounded-xl shadow-lg p-4 space-y-4`}
      >
        {NavbarComponents.map((item) => (
          <div key={item.key}>
            <button
              onClick={() => toggleSubmenu(item.key)}
              className="w-full text-left font-semibold text-primary-dark flex justify-between items-center transition-colors duration-200"
            >
              {item.title}
              <span className="text-xl">
                {openSubmenu === item.key ? "−" : "+"}
              </span>
            </button>

            {/* Submenu Items */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSubmenu === item.key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 pl-4 space-y-1">
                {item.submenu?.map((sub, index) => (
                  <a
                    key={index}
                    href={sub.href ?? "#"}
                    className="block text-sm text-gray-700 hover:text-blue-light-3 transition-colors"
                  >
                    {sub.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* CTA Button - Mobile */}
        <div className="pt-4">
          <button className="w-full bg-[#0a192c] text-white py-2 rounded-full transition-all duration-300 hover:bg-primary-dark">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
