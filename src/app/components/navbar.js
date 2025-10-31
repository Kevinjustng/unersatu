"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll or redirect
  const handleScrollTo = (id) => {
    if (pathname === "/") {
      const section = document.querySelector(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${id}`;
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-md shadow-md"
          : "bg-white/70 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 md:py-3">
        {/* 🔹 Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-red-700 transition"
        >
          Uner Satu
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 font-bold">
          <Link
            href="/"
            className={`transition ${
              scrolled
                ? "text-white hover:text-red-700"
                : "text-gray-800 hover:text-red-700"
            }`}
          >
            Beranda
          </Link>

          <Link
            href="/detail/tentang"
            className={`transition ${
              scrolled
                ? "text-white hover:text-red-700"
                : "text-gray-800 hover:text-red-700"
            }`}
          >
            Tentang
          </Link>

          <button
            onClick={() => handleScrollTo("#map-section")}
            className={`transition ${
              scrolled
                ? "text-white hover:text-red-700"
                : "text-gray-800 hover:text-red-700"
            }`}
          >
            Lokasi
          </button>

          <Link
            href="/detail/kontak"
            className={`transition ${
              scrolled
                ? "text-white hover:text-red-700"
                : "text-gray-800 hover:text-red-700"
            }`}
          >
            Kontak
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          className={`md:hidden transition ${
            scrolled ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg border-t">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-bold">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Beranda
            </Link>
            <Link href="/detail/tentang" onClick={() => setMenuOpen(false)}>
              Tentang
            </Link>
            <button onClick={() => handleScrollTo("#map-section")}>
              Lokasi
            </button>
            <Link href="/detail/kontak" onClick={() => setMenuOpen(false)}>
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
