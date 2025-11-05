"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Copy } from "lucide-react";
import Image from "next/image";


export default function Kontak() {
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // ✅ Get current page URL safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  // ✅ Kelurahan Uner Satu coordinates
  const latitude = 1.2032256;
  const longitude = 124.7907823;

  const whatsappUrl = "https://wa.me/6285298337397";
  const email = "unersatu@gmail.com";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    "Cek halaman kontak Kelurahan Uner Satu: " + pageUrl
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50 py-14 px-6">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold text-[#800000] mb-10 text-center drop-shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Kontak Kelurahan Uner Satu
      </motion.h1>

      {/* MAP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-[#b33] overflow-hidden">
          <div className="h-96 sm:h-[450px] lg:h-[500px] w-full">
            <iframe
              src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=id&z=18&output=embed`}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Kantor Lurah Kelurahan Uner Satu"
            ></iframe>
          </div>
          <div className="bg-[#800000] text-white p-4 text-center">
            <p className="text-sm sm:text-base">
              📍 Lokasi Kantor Lurah Uner Satu, Uner, Kec. Kawangkoan, Kabupaten
              Minahasa, Sulawesi Utara
            </p>
            <a
              href="https://maps.app.goo.gl/kfJPoGbtTAAgBX9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-yellow-200 hover:text-yellow-100 text-sm font-medium"
            >
              Buka di Google Maps →
            </a>
          </div>
        </div>
      </motion.div>

      {/* CONTACT + IMAGE SECTION */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE — CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-[#a33] p-8 h-fit"
          >
            <h2 className="text-2xl font-bold text-[#800000] mb-6">
              Informasi Kontak
            </h2>

            <div className="space-y-5 text-gray-700">
              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-green-600"
                >
                  <path d="M12.04 2C6.54 2 2.04 6.5 2.04 12c0 2.1.55 4.05 1.6 5.75L2 22l4.4-1.55C8.15 21.5 10.05 22 12.05 22c5.5 0 10-4.5 10-10s-4.5-10-10.01-10z" />
                </svg>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition"
                >
                  WhatsApp: +62 852-9833-7397
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#800000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75"
                  />
                </svg>
                <p>Email: {email}</p>
              </div>

              {/* Jam Kantor */}
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-[#800000]">Jam Kantor:</p>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>Senin – Kamis: 07.45 – 17.00</li>
                    <li>Jumat – Sabtu: 07.45 – 12.00</li>
                    <li>Minggu: Libur</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SHARE SECTION */}
            <div className="mt-8 border-t pt-5 border-[#c44]">
              <p className="text-sm text-gray-500 mb-3 text-center font-medium">
                Bagikan lewat:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => window.open(whatsappShare, "_blank")}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12.04 2C6.54 2 2.04 6.5 2.04 12c0 2.1.55 4.05 1.6 5.75L2 22l4.4-1.55C8.15 21.5 10.05 22 12.05 22c5.5 0 10-4.5 10-10s-4.5-10-10.01-10z" />
                  </svg>
                  WhatsApp
                </button>

                <button
                  onClick={() => window.open(facebookShare, "_blank")}
                  className="flex items-center gap-2 bg-[#800000] hover:bg-[#a00000] text-white px-4 py-2 rounded-xl transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M22 12a10 10 0 10-11.63 9.87v-7H8v-3h2.37V9.5C10.37 7 11.93 5.75 14.17 5.75c1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48V12H16l-.38 3h-2.12v7A10 10 0 0022 12z" />
                  </svg>
                  Facebook
                </button>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition"
                >
                  <Copy className="w-5 h-5" />
                  {copied ? "Disalin!" : "Salin Link"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — KANTOR IMAGE PLACEHOLDER */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-[#a33] p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-[#800000] mb-4 text-center">
                Kantor Lurah Uner Satu
              </h2>

              {/* Image of Kantor Lurah Uner Satu */}
<div className="flex-1 flex items-center justify-center">
  <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden shadow-lg border border-gray-300">
    <Image
      src="/images/kantorlura.jpeg"
      alt="Kantor Lurah Uner Satu"
      fill
      className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
      priority
    />
  </div>
</div>

              {/* Additional Info */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Kantor Lurah Uner Satu siap melayani masyarakat dengan
                  sepenuh hati
                </p>
                <div className="flex justify-center gap-4 mt-3 text-xs text-gray-500">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pelayanan Prima
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ramah & Profesional
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
