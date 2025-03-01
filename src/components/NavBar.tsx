"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if current path matches the link
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Handle scroll events to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="sr-only">Dyan Dananjaya</span>
            <div className="h-8 w-8 mr-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white">
              DD
            </div>
            <span className="hidden sm:block text-white">Dyan Dananjaya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" active={isActive("/")}>
              Home
            </NavLink>
            <NavLink href="/about" active={isActive("/about")}>
              About
            </NavLink>
            <NavLink href="/projects" active={isActive("/projects")}>
              Projects
            </NavLink>
            <NavLink href="/blog" active={isActive("/blog")}>
              Blog
            </NavLink>
            <NavLink href="/contact" active={isActive("/contact")}>
              Contact
            </NavLink>
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
        <div className="md:hidden bg-black/90 border-t border-blue-900/30 mt-2 shadow-lg backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" active={isActive("/")}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" active={isActive("/about")}>
              About
            </MobileNavLink>
            <MobileNavLink href="/projects" active={isActive("/projects")}>
              Projects
            </MobileNavLink>
            <MobileNavLink href="/blog" active={isActive("/blog")}>
              Blog
            </MobileNavLink>
            <MobileNavLink href="/contact" active={isActive("/contact")}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

type NavLinkProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
        active
          ? "text-white border-b-2 border-blue-500"
          : "text-white/70 hover:text-white border-b-2 border-transparent hover:border-blue-400/50"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        active
          ? "bg-blue-900/20 text-white"
          : "text-white/70 hover:bg-blue-900/10 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
