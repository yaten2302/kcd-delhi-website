"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Agenda", href: "#agenda" },
  { name: "Speakers", href: "#speakers" },
  { name: "Venue", href: "#venue" },
  { name: "Team", href: "#team" },
  { name: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="relative h-12 w-12 md:h-20 md:w-20">
          <Image
            src="/KCD DELHI Logo.png"
            alt="KCD Delhi Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 48px, 80px"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-bold text-[24px] transition-all duration-300 hover:scale-105 text-shadow-lg/30 text-base-[80%] ${
                isScrolled
                  ? "text-[#004e66] hover:text-[#004e66]/80"
                  : "text-white hover:text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-[#004e66]" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 p-6 flex flex-col items-center gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#004e66] font-bold text-xl hover:scale-105 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
