"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MapSection() {
  const latitude = 1.2032056;
  const longitude = 124.7907854;
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=id`;

  return (
    <section
      id="map-section"
      className="w-full py-16 px-4 md:px-10 flex flex-col items-center"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 drop-shadow-md">
          PETA KANTOR LURAH UNER SATU
        </h2>
      </div>

      {/* Main Flex Layout */}
      <div className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-10 md:gap-14 w-full max-w-6xl">
        {/* LEFT: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col justify-between"
        >
          {/* Image */}
          <div className="relative w-full h-48 md:h-[250px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/unersatu.jpg"
              alt="Kantor Lurah Uner Satu"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Description */}
          <p className="text-gray-800 text-sm md:text-lg leading-relaxed mt-5 mb-6 border-l-4 border-red-600 pl-4">
            Kelurahan Uner Satu terletak di Kecamatan Kawangkoan, Kabupaten
            Minahasa. Wilayah ini menjadi lokasi kegiatan KKT 144 selama 23 hari,
            menghadirkan semangat gotong royong dan inovasi masyarakat lokal.
          </p>

          {/* Share Note */}
          <p className="text-gray-700/70 italic text-sm mb-2 select-none">
            💬 Bagikan lewat:
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 md:px-4 py-2 text-xs md:text-sm rounded-xl shadow hover:bg-blue-700 transition font-semibold"
            >
              📍 Google Maps
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `Hai! Lihat lokasi Kantor Lurah Uner Satu di Google Maps: ${mapsUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-3 md:px-4 py-2 text-xs md:text-sm rounded-xl shadow hover:bg-green-600 transition font-semibold"
            >
              💬 WhatsApp
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                mapsUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-3 md:px-4 py-2 text-xs md:text-sm rounded-xl shadow hover:bg-blue-900 transition font-semibold"
            >
              📘 Facebook
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex"
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-300 hover:shadow-2xl transition-all flex-grow h-60 md:h-auto">
            <iframe
              src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=id&z=18&output=embed`}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
