"use client";
import Image from "next/image";

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("map-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      {/* Background image */}
      <Image
        src="/images/village-bg.jpg"
        alt="Pemandangan Desa Uner Satu"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 text-white max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Selamat Datang di <span className="text-yellow-300">Uner Satu</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Desa yang asri dan penuh kehangatan di jantung Kecamatan Kawangkoan,
          Kabupaten Minahasa.
        </p>
        <button
          onClick={handleScroll}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Lihat Lokasi Kami
        </button>
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
}
