"use client";
import React, { useState } from "react";
import { navInfos, socialInfos } from "@/components/navs";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track if the page is scrolled
  const pathname = usePathname();

  // Function to determine the active class
  const getActiveClasses = (path: string) => {
    return pathname === path
      ? "text-underline decoration-secondary-300 text-primary-400 text-sm decoration-solid decoration-[2px] underline-offset-[8px]"
      : "hover:text-primary-400";
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Attach the scroll event listener directly inside the component
  if (typeof window !== "undefined") {
    window.onscroll = handleScroll;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out
        bg-primary-800
        ${scrolled ? "lg:bg-primary-800" : "lg:bg-transparent"}`}
    >
      <div className="mx-auto flex justify-between items-center py-4 px-6">
        {/* Image Logo */}
        <a className="navbar-brand logo-image" href="index.html">
          {/* <img src="" alt="" /> */}
        </a>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 border-0 bg-transparent ml-auto"
        >
          <span className="text-white text-3xl">☰</span>
        </button>

        {/* Menu hidden off-screen by default */}
        <div
          className={`fixed top-[4.30rem] bottom-0 left-full w-full px-4 py-6 overflow-hidden bg-primary-800 transition-all duration-500 ease-in-out ${menuOpen ? "translate-x-[-100%] visible" : "invisible translate-x-full"}`}
        >
          <ul className="flex flex-col space-y-4">
            {navInfos.map(({ label, path }, idx) => (
              <li key={idx}>
                <a
                  href={`${path}`}
                  className={`py-6 text-sm font-medium leading-6 ${getActiveClasses(path)} 
                  ${label === "About" || label === "Services" || label === "Contact" ? "text-white" : ""}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons inside menu for mobile only */}
          <div className="mt-6 flex space-x-4">
            {socialInfos.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} className="" aria-label={label}>
                <Icon className="h-7 w-7 text-white p-[8px] rounded-full bg-secondary-500 hover:bg-white hover:text-secondary-500 duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Navbar links for large screens */}
        <div className="hidden lg:flex space-x-8">
          <ul className="flex space-x-8">
            {navInfos.map(({ label, path }, idx) => (
              <li key={idx}>
                <a
                  href={`${path}`}
                  className={`py-6 text-sm font-medium leading-6 ${getActiveClasses(path)} 
                    ${label === "About" || label === "Services" || label === "Contact" ? "lg:text-white" : ""}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons visible for large screen */}
          <div className="flex space-x-4 ml-auto">
            {socialInfos.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} className="" aria-label={label}>
                <Icon className="h-7 w-7 text-white p-[8px] rounded-full bg-secondary-500 hover:bg-white hover:text-secondary-500 duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
