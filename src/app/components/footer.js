"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side: Logo + site name */}
        <div className="flex items-center mb-4 md:mb-0">
          {/* Logo image */}
          <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3 border border-gray-700 shadow-md">
            <Image
              src="/images/kelurahan_unersatu.jpeg"
              alt="Logo Kelurahan Uner Satu"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-semibold text-white text-lg">
            Uner Satu
          </span>
        </div>

        {/* Right side: Text and links */}
        <div className="flex flex-col md:flex-row md:items-center text-center md:text-right space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Pemerintah Uner Satu. Semua hak dilindungi.
          </p>
          <div className="flex justify-center md:justify-end space-x-3 md:space-x-4">
            <a href="#beranda" className="hover:text-indigo-400 text-sm md:text-base">beranda</a>
            <a href="#tentang" className="hover:text-indigo-400 text-sm md:text-base">tentang</a>
            <a href="#map-section" className="hover:text-indigo-400 text-sm md:text-base">lokasi</a>
            <a href="#kontak" className="hover:text-indigo-400 text-sm md:text-base">kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
