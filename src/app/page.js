"use client";

import Hero from "./components/hero";
import Profil from "./components/profil"; // import Profil
import MapSection from "./components/MapSection";
import InfoCardSection from "./components/infocardsection"; // ✅ new import

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
      {/* Hero Section */}
      <Hero />

      {/* Profil Lurah & Sekretaris */}
      <div id="profil" className="w-full flex flex-col items-center py-10 px-4">
        <Profil />
      </div>

      {/* Info Card Section */}
      <div id="info" className="w-full flex flex-col items-center py-10 px-4">
        <InfoCardSection />
      </div>

      {/* Struktur Organisasi dan Tata Kerja */}
      <div id="sotk" className="w-full flex flex-col items-center py-10 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">
          Peta Kantor Lurah Uner Satu
        </h2>
        <div className="w-24 h-1 bg-blue-500 mb-8 rounded-full"></div>
      </div>

      {/* Map Section */}
      <div id="map" className="w-full flex justify-center py-10 px-4">
        <MapSection />
      </div>
    </main>
  );
}
