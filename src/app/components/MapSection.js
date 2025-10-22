"use client";
import Image from "next/image";

export default function MapSection() {
  const latitude = 1.2032056;
  const longitude = 124.7907854;
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=id`;

  return (
    <section
  id="map-section"
  className="w-full max-w-6xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row"
>
      {/* Left side: image + description */}
      <div className="md:w-1/2 flex flex-col items-center p-4">
        <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden shadow-md mb-4">
          <Image
            src="/images/unersatu.jpg"
            alt="Desa Uner Satu"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
          Desa Uner Satu merupakan salah satu desa yang berada di Kecamatan
          Kawangkoan, Kabupaten Minahasa. Desa ini dihuni KKT 144 selama 23 hari.
        </p>
      </div>

      {/* Right side: map + buttons */}
      <div className="md:w-1/2 p-4 flex flex-col items-center justify-center">
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md w-full h-64 md:h-80 mb-4">
          <iframe
            src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=id&z=18&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-2 text-sm rounded-lg shadow hover:bg-blue-700 transition"
          >
            📍 Buka di Maps
          </a>

          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              `Hai! Lihat lokasi Kantor Lurah Uner Satu di Google Maps: ${mapsUrl}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-3 py-2 text-sm rounded-lg shadow hover:bg-green-600 transition"
          >
            💬 WhatsApp
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              mapsUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-3 py-2 text-sm rounded-lg shadow hover:bg-blue-900 transition"
          >
            📘 Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
