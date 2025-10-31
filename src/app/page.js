"use client";

import Hero from "./components/hero";
import Profil from "./components/profil";
import MapSection from "./components/MapSection";
import InfoCardSection from "./components/infocardsection";
import StatistikPenduduk from "./components/statistikpenduduk";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Info Card Section (Now Second) */}
      <section
        id="info"
        className="w-full flex flex-col items-center py-12 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <InfoCardSection />
      </section>

      {/* Profil Section */}
      <section
        id="profil"
        className="w-full flex flex-col items-center py-12 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <Profil />
      </section>

      {/* Statistik Penduduk */}
      <section
        id="statistik"
        className="w-full flex flex-col items-center py-12 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <StatistikPenduduk />
      </section>

      {/* Struktur Organisasi */}
      <section
        id="sotk"
        className="w-full flex flex-col items-center py-12 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        {/* Tambahkan komponen struktur organisasi di sini nanti */}
      </section>

      {/* Map Section */}
      <section
        id="map"
        className="w-full flex justify-center py-12 px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <MapSection />
      </section>
    </main>
  );
}
