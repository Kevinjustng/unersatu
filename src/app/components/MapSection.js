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
      className="w-full bg-gradient-to-b py-16 px-6 flex flex-col items-center"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 drop-shadow-md">
          Peta Kantor Lurah Uner Satu
        </h2>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-7xl w-full">
        {/* Left: Image + Description + Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="relative w-full h-56 md:h-80 rounded-3xl overflow-hidden shadow-xl mb-6">
            <Image
              src="/images/unersatu.jpg"
              alt="Kantor Lurah Uner Satu"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 border-l-4 border-red-600 pl-4">
            Kelurahan Uner Satu terletak di Kecamatan Kawangkoan, Kabupaten
            Minahasa. Wilayah ini menjadi lokasi kegiatan KKT 144 selama 23 hari,
            menghadirkan semangat gotong royong dan inovasi masyarakat lokal.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 text-sm rounded-xl shadow hover:bg-blue-700 transition"
            >
              📍 Lihat di Google Maps
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                `Hai! Lihat lokasi Kantor Lurah Uner Satu di Google Maps: ${mapsUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 text-sm rounded-xl shadow hover:bg-green-600 transition"
            >
              💬 Bagikan via WhatsApp
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                mapsUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-4 py-2 text-sm rounded-xl shadow hover:bg-blue-900 transition"
            >
              📘 Bagikan di Facebook
            </a>
          </div>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-300 hover:shadow-2xl transition-all">
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
        </motion.div>
      </div>
    </section>
  );
}
