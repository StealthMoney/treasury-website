"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./button";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const path = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#", label: "Solutions" },
    { href: "#", label: "About" },
    { href: "#", label: "Resources" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white/10 backdrop-blur-sm border border-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/stealth_treasury_logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white hover:text-white/80 transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Button
                text="Talk to us"
                type="button"
                className={` text-white px-6 py-2.5 border border-white font-medium transition-colors ${"bg-[var(--color-primary)]"}`}
              />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-24 px-6">
            {/* Mobile Navigation Links */}
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={handleNavClick}
                className={`py-4 hover:text-[var(--color-primary)] transition-colors text-base font-medium border-b border-gray-100 ${
                  path === link.href
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-dark)]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-8">
              <Button
                text="Talk to us"
                type="button"
                className={`w-full ${"bg-[var(--color-primary)]"} text-white px-6 py-3 border border-white font-medium transition-colors`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
