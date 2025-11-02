"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DetailHero from "@/app/components/detailhero";

export default function PasarPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryPasar = [
    { src: "/images/blante1.jpeg", desc: "Suasana Pasar Blante Uner Satu" },
    { src: "/images/blante2.jpeg", desc: "Aktivitas jual beli sapi" },
    { src: "/images/blante3.jpeg", desc: "Area utama pasar" },
    { src: "/images/placeholder.png", desc: "Lokasi & Jam Operasional (Placeholder)" },
  ];

  const galleryKKT = [
    { src: "/images/blante4.jpeg", desc: "Pedagang dan Mahasiswa KKT 144 di pasar" },
    { src: "/images/blante5.jpeg", desc: "Mahasiswa KKT 144 berfoto di area pasar" },
    { src: "/images/blante6.jpeg", desc: "Wawancara sejarah dengan warga setempat" },
    { src: "/images/blante7.jpeg", desc: "Dokumentasi bersama Pala Lingkungan 1 dan warga setempat" },
  ];

  // Share link (can be reused)
  const shareLink = "https://unersatu.my.id/detail/blante";

  return (
    <>
      <DetailHero
        title="Pasar Blante Uner Satu"
        subtitle="Satu-satunya pasar blante di Sulawesi Utara"
        image="/images/blante1.jpeg"
      />

      <section className="max-w-6xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-red-700 hover:underline">
            Beranda
          </Link>{" "}
          / Informasi / Pasar Uner Satu
        </div>

        {/* History Section */}
        <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">Sejarah</h2>
        <p className="text-gray-700 leading-relaxed mb-10 text-sm sm:text-base">
          Pasar Uner Satu dikenal sebagai satu-satunya “pasar blante” di wilayah
          Sulawesi Utara yang berlokasi di Kelurahan Uner Satu. <br />
          Berdasarkan studi strategi pengembangan pasar sapi/blante Kawangkoan,
          pasar ini memiliki peranan penting sebagai pusat kegiatan ekonomi lokal
          di Kecamatan Kawangkoan. <br />
          Lokasi pasar ini berada di Kelurahan Uner Satu, Kecamatan Kawangkoan,
          Kabupaten Minahasa.
        </p>

        {/* Combined Gallery Section */}
        <div className="bg-white/70 backdrop-blur-md border rounded-2xl shadow-lg p-6">
          {/* Pasar Documentation */}
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Dokumentasi Pasar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {galleryPasar.map((img, i) => (
              <div
                key={i}
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300 bg-gray-50"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.desc}
                  width={400}
                  height={300}
                  className="object-cover w-full h-40 opacity-90"
                />
                {img.src.includes("placeholder") && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 text-sm font-semibold bg-white/70 backdrop-blur-sm">
                    <span>📍 Lokasi & Jam Operasional</span>
                    <span className="text-xs mt-1">Klik untuk lihat detail</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* KKT Gallery */}
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Dokumentasi KKT 144
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryKKT.map((img, i) => (
              <div
                key={i}
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.desc}
                  width={400}
                  height={300}
                  className="object-cover w-full h-40"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.src.includes("placeholder") ? (
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-red-700 mb-2">
                    Lokasi & Jam Operasional
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Pasar Blante Uner Satu berlokasi di:
                    <br />
                    <span className="font-semibold">
                      Kinali Satu, Kec. Kawangkoan, Kabupaten Minahasa, Sulawesi
                      Utara, Indonesia
                    </span>
                  </p>
                  <iframe
                    src="https://www.google.com/maps?q=1.202990,124.791296&hl=id&z=17&output=embed"
                    width="100%"
                    height="300"
                    className="rounded-lg border"
                    loading="lazy"
                  ></iframe>
                  <p className="text-gray-700 mt-4">
                    🕗 <span className="font-semibold">Hari Kamis</span> pukul{" "}
                    <span className="font-semibold">08.00–12.00 WITA</span>
                  </p>

                  {/* Share Buttons inside Modal */}
                  <div className="mt-6 flex justify-center gap-4">
                    {/* WhatsApp Share */}
                    <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/?text=${encodeURIComponent(
                            `Kunjungi Pasar Blante Uner Satu! 🐂\n${shareLink}`
                          )}`,
                          "_blank"
                        )
                      }
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.7 14.5c-.3-.1-1.7-.8-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.1-.3.2-.6.1-1.7-.6-3.1-1.8-4-3.4-.3-.5 0-.5.2-.7.2-.2.3-.3.5-.5.2-.2.3-.3.4-.5.1-.2 0-.4 0-.6 0-.2-.7-1.8-.9-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.4s1.1 2.8 1.3 3c.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.3s-.2-.2-.5-.3zM12 2C6.5 2 2 6.3 2 11.7c0 2 .5 3.8 1.5 5.4L2 22l5-1.3c1.5.8 3.2 1.2 5 1.2 5.5 0 10-4.3 10-9.7C22 6.3 17.5 2 12 2z" />
                      </svg>
                      WhatsApp
                    </button>

                    {/* Facebook Share */}
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`,
                          "_blank"
                        )
                      }
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1.2c-1 0-1.3.5-1.3 1.2v1.8h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12" />
                      </svg>
                      Facebook
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.desc}
                    width={1000}
                    height={700}
                    className="rounded-xl shadow-lg w-full h-auto object-contain"
                  />
                  <p className="text-center text-white mt-4 text-sm">
                    {selectedImage.desc}
                  </p>
                </>
              )}

              <button
                className="absolute top-2 right-4 text-white text-2xl font-bold hover:text-red-400 transition"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* More Info */}
        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Lokasi & Jam Operasi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pasar Uner Satu berlokasi di Kelurahan Uner Satu, Kecamatan Kawangkoan,
            Kabupaten Minahasa, Provinsi Sulawesi Utara. <br />
            Jam operasional hanya pada{" "}
            <span className="font-semibold">hari Kamis</span>, mulai pukul{" "}
            <span className="font-semibold">08.00–12.00 WITA</span>.
          </p>

          <iframe
            src="https://www.google.com/maps?q=1.202990,124.791296&hl=id&z=17&output=embed"
            width="100%"
            height="400"
            className="rounded-lg shadow-md border"
            loading="lazy"
          ></iframe>

          {/* Share Section */}
          <div className="mt-6 flex gap-4">
            {/* WhatsApp Share */}
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/?text=${encodeURIComponent(
                    `Kunjungi Pasar Blante Uner Satu! 🐂\n${shareLink}`
                  )}`,
                  "_blank"
                )
              }
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.7 14.5c-.3-.1-1.7-.8-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.1-.3.2-.6.1-1.7-.6-3.1-1.8-4-3.4-.3-.5 0-.5.2-.7.2-.2.3-.3.5-.5.2-.2.3-.3.4-.5.1-.2 0-.4 0-.6 0-.2-.7-1.8-.9-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.4s1.1 2.8 1.3 3c.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.3s-.2-.2-.5-.3zM12 2C6.5 2 2 6.3 2 11.7c0 2 .5 3.8 1.5 5.4L2 22l5-1.3c1.5.8 3.2 1.2 5 1.2 5.5 0 10-4.3 10-9.7C22 6.3 17.5 2 12 2z" />
              </svg>
              WhatsApp
            </button>

            {/* Facebook Share */}
            <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareLink
                  )}`,
                  "_blank"
                )
              }
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1.2c-1 0-1.3.5-1.3 1.2v1.8h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12" />
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
