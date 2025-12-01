"use client";
import React, { useState, useEffect } from "react";
import { RiMenuFoldFill, RiMenuFold2Fill } from "react-icons/ri";
import { navInfos, socialInfos } from "@/components/navs";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Function to determine the active class
  const getActiveClasses = (path: string) => {
    const isActive = pathname === path || activeSection === path;
    return isActive
      ? "text-peach-500 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-peach-500 after:via-purple-500 after:to-blue-500 after:animate-pulse"
      : "text-white hover:text-peach-500";
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Detect which section is in view
    const sections = document.querySelectorAll("section[id]");
    let currentSection = "";

    sections.forEach((section) => {
      const htmlSection = section as HTMLElement;
      const sectionTop = htmlSection.offsetTop;
      const sectionHeight = htmlSection.clientHeight;
      if (
        window.scrollY >= sectionTop - 150 &&
        window.scrollY < sectionTop + sectionHeight - 150
      ) {
        currentSection = `#${section.getAttribute("id")}`;
      }
    });

    setActiveSection(currentSection);
  };

  // Detect viewport size changes and reset menuOpen for desktop view
  useEffect(() => {
    const handleResize = () => {
      // Assuming lg breakpoint is 1024px, adjust if your breakpoint differs
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    // Run on mount to check initial viewport
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="mx-auto flex justify-between items-center py-4 px-6 max-w-7xl">
        {/* Logo Section */}
        <a
          className="navbar-brand logo-image flex items-center z-50"
          href="#home"
          aria-label="Home"
        >
          <Image
            src="/assets/image/logo.png"
            alt="Joshua Bala Noma Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 border-0 bg-transparent ml-auto z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <RiMenuFold2Fill className="text-gray-400 text-3xl" />
          ) : (
            <RiMenuFoldFill className="text-gray-400 text-3xl" />
          )}
        </button>

        {/* Mobile Menu - hidden off-screen by default */}
        <div
          className={`fixed top-0 bottom-0 left-full w-full px-4 py-6 overflow-hidden bg-slate-900/98 backdrop-blur-lg transition-all duration-500 ease-in-out z-40 ${
            menuOpen
              ? "translate-x-[-100%] visible"
              : "invisible translate-x-full"
          }`}
        >
          {/* Spacer to account for header height */}
          <div className="h-[4.30rem]"></div>
          <ul className="flex flex-col space-y-4">
            {navInfos.map(({ label, path }, idx) => (
              <li key={idx}>
                <a
                  href={`${path}`}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium leading-6 transition-all duration-300 ${getActiveClasses(
                    path
                  )}`}
                  style={{
                    filter:
                      pathname !== path && activeSection !== path
                        ? "drop-shadow(0 0 0px rgba(251, 146, 60, 0))"
                        : "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== path && activeSection !== path) {
                      e.currentTarget.style.filter =
                        "drop-shadow(0 0 20px rgba(251, 146, 60, 0.9)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.6))";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== path && activeSection !== path) {
                      e.currentTarget.style.filter =
                        "drop-shadow(0 0 0px rgba(251, 146, 60, 0))";
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons inside menu for mobile only */}
          <div className="mt-6 flex space-x-4">
            {socialInfos.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className=""
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-7 w-7 text-gray-300 rounded-full p-[8px] bg-slate-800 hover:bg-peach-500 hover:text-white transition-all duration-300 hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Navbar links */}
        <div className="hidden lg:flex space-x-8 items-center">
          <ul className="flex space-x-8">
            {navInfos.map(({ label, path }, idx) => (
              <li key={idx}>
                <a
                  href={`${path}`}
                  className={`text-sm font-medium leading-6 transition-all duration-300 ${getActiveClasses(
                    path
                  )}`}
                  style={{
                    filter:
                      pathname !== path && activeSection !== path
                        ? "drop-shadow(0 0 0px rgba(251, 146, 60, 0))"
                        : "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== path && activeSection !== path) {
                      e.currentTarget.style.filter =
                        "drop-shadow(0 0 20px rgba(251, 146, 60, 0.9)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.6))";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== path && activeSection !== path) {
                      e.currentTarget.style.filter =
                        "drop-shadow(0 0 0px rgba(251, 146, 60, 0))";
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons visible for large screen */}
          <div className="flex space-x-4 ml-4">
            {socialInfos.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className=""
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-7 w-7 p-[8px] text-gray-300 rounded-full bg-slate-800 hover:bg-peach-500 hover:text-white transition-all duration-300 hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
