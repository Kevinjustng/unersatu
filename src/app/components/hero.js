"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation once after refresh
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("map-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated background image */}
      <div className="absolute inset-0 animate-slowzoom">
        <Image
          src="/images/unersatu.jpeg"
          alt="Pemandangan Desa Uner Satu"
          fill
          className="object-cover brightness-75 scale-110"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center content with fade-in animation */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
          Selamat Datang di{" "}
          <span className="text-red-600">Uner Satu</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8 drop-shadow-md">
          Kelurahan yang asri dan penuh kehangatan di jantung Kecamatan Kawangkoan,
          Kabupaten Minahasa.
        </p>

        <button
          onClick={handleScroll}
          className="bg-red-400 hover:bg-red-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Lihat Lokasi Kami
        </button>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slowzoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
        .animate-slowzoom {
          animation: slowzoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
