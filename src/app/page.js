"use client";

import Hero from "./components/hero";
import Profil from "./components/profil";
import MapSection from "./components/MapSection";
import InfoCardSection from "./components/infocardsection";
import StatistikPenduduk from "./components/statistikpenduduk"; // ✅ new import

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
      {/* Hero Section */}
      <Hero />

      {/* Profil Lurah & Sekretaris */}
      <div id="profil" className="w-full flex flex-col items-center py-10 px-4">
        <Profil />
      </div>

      {/* Statistik Penduduk Section */}
      <div id="statistik" className="w-full flex flex-col items-center py-10 px-4">
        
      
        <StatistikPenduduk />
      </div>

      {/* Info Card Section */}
      <div id="info" className="w-full flex flex-col items-center py-10 px-4">
        <InfoCardSection />
      </div>

      {/* Struktur Organisasi dan Tata Kerja */}
      <div id="sotk" className="w-full flex flex-col items-center py-10 px-4">
        
      </div>

      {/* Map Section */}
      <div id="map" className="w-full flex justify-center py-10 px-4">
        <MapSection />
      </div>
    </main>
  );
}
