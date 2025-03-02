"use client";

import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  // Define the sections to monitor
  const sections = ["home", "about", "projects", "skills", "contact"];

  // Check which section is currently in view
  const checkActiveSection = () => {
    const scrollPosition = window.scrollY + 100; // Add offset for better UX

    // Check each section and update active state
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  // Handle component mounting animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll events for navbar styling and section detection
  useEffect(() => {
    const handleScroll = () => {
      // Check for navbar background change
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is active
      checkActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    checkActiveSection();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);

      // Scroll to element with smooth behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Offset to account for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-black/60 to-transparent backdrop-blur-sm py-5"
      } ${mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              label="Home"
              sectionId="home"
              active={activeSection === "home"}
              onClick={() => scrollToSection("home")}
            />
            <NavLink
              label="About"
              sectionId="about"
              active={activeSection === "about"}
              onClick={() => scrollToSection("about")}
            />
            <NavLink
              label="Projects"
              sectionId="projects"
              active={activeSection === "projects"}
              onClick={() => scrollToSection("projects")}
            />
            <NavLink
              label="Skills"
              sectionId="skills"
              active={activeSection === "skills"}
              onClick={() => scrollToSection("skills")}
            />
            <NavLink
              label="Contact"
              sectionId="contact"
              active={activeSection === "contact"}
              onClick={() => scrollToSection("contact")}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-blue-500/20 mt-2 shadow-lg backdrop-blur-md rounded-b-2xl">
          <div className="px-4 pt-3 pb-4 space-y-2 sm:px-3">
            <MobileNavLink
              label="Home"
              sectionId="home"
              active={activeSection === "home"}
              onClick={() => scrollToSection("home")}
            />
            <MobileNavLink
              label="About"
              sectionId="about"
              active={activeSection === "about"}
              onClick={() => scrollToSection("about")}
            />
            <MobileNavLink
              label="Projects"
              sectionId="projects"
              active={activeSection === "projects"}
              onClick={() => scrollToSection("projects")}
            />
            <MobileNavLink
              label="Skills"
              sectionId="skills"
              active={activeSection === "skills"}
              onClick={() => scrollToSection("skills")}
            />
            <MobileNavLink
              label="Contact"
              sectionId="contact"
              active={activeSection === "contact"}
              onClick={() => scrollToSection("contact")}
            />
          </div>
        </div>
      )}
    </header>
  );
}

type NavLinkProps = {
  label: string;
  sectionId: string;
  active: boolean;
  onClick: () => void;
};

function NavLink({ label, sectionId, active, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
        active
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
          : "text-white/80 hover:text-white"
      }`}
    >
      <span className={`relative z-10 ${active ? "font-semibold" : ""}`}>
        {label}
      </span>
      {active && (
        <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse opacity-20"></span>
      )}
      {!active && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      )}
    </button>
  );
}

function MobileNavLink({ label, sectionId, active, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-inner"
          : "text-white/80 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 hover:text-white"
      }`}
    >
      <div className="flex items-center">
        {active && (
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
        )}
        {label}
      </div>
    </button>
  );
}
