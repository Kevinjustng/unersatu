"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-md shadow-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className={`text-2xl font-bold transition ${
            scrolled ? "text-white" : "text-indigo-600"
          }`}
        >
          Uner Satu
        </Link>

        <div className="hidden md:flex space-x-8 font-medium">
          <Link
            href="/"
            className={`transition ${
              scrolled
                ? "text-white hover:text-indigo-300"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            Beranda
          </Link>
          <Link
            href="#tentang"
            className={`transition ${
              scrolled
                ? "text-white hover:text-indigo-300"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            tentang
          </Link>
          <Link
            href="#map-section"
            className={`transition ${
              scrolled
                ? "text-white hover:text-indigo-300"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            lokasi
          </Link>
          <Link
            href="#kontak"
            className={`transition ${
              scrolled
                ? "text-white hover:text-indigo-300"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            kontak
          </Link>
        </div>

        {/* mobile menu */}
        <button
          className={`md:hidden transition ${
            scrolled ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700">
            <Link href="#beranda" onClick={() => setMenuOpen(false)}>
              beranda
            </Link>
            <Link href="#tentang" onClick={() => setMenuOpen(false)}>
              tentang
            </Link>
            <Link href="#map-section" onClick={() => setMenuOpen(false)}>
              lokasi
            </Link>
            <Link href="#kontak" onClick={() => setMenuOpen(false)}>
              kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
