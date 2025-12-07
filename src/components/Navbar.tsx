"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent backdrop-blur-sm md:backdrop-blur-none transition-all duration-300">
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-[#004e66] hover:text-[#004e66]/80 font-bold text-2xl transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[#004e66] p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Dropdown */}
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
