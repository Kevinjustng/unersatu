"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DetailHero from "@/app/components/detailhero";
import { motion, AnimatePresence } from "framer-motion";

export default function SekolahPage() {
  const shareLink =
    "https://unersatu.vercel.app/detail/sd-katolik-santo-agustinus";
  const [showModal, setShowModal] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const kktImages = [
    { src: "/images/teach1.jpeg", desc: "Kegiatan mengajar bersama anak-anak." },
    { src: "/images/teach2.jpeg", desc: "Suasana belajar interaktif dan menyenangkan." },
    { src: "/images/teach3.jpeg", desc: "Senyum ceria siswa dalam proses belajar." },
    { src: "/images/teach4.jpeg", desc: "Pendampingan literasi oleh KKT 144." },
    { src: "/images/thekids.jpeg", desc: "Buah kelapa pohonnya tinggi Minum degan ketika lelah Bangun tidur di saat pagi Agar cepat berangkat sekolah -Ello" },
    { src: "/images/sekolah4.jpeg", desc: "Foto Bersama KKT 144 Posko Uner Satu." },
    { src: "/images/teach5.jpeg", desc: "Miss periksa hasil sambil kumpul tugas." },
    { src: "/images/teach6.jpeg", desc: "Pelajaran Subject present tense dan past tense." },
    { src: "/images/teach7.jpeg", desc: "Foto bersama sebelum siswa siswa pulang ke rumah masing-masing." },
    { src: "/images/teach8.jpeg", desc: "Mengajar dan pemeriksaan siswa siswi dalam belajar bahasa inggris." },
    { src: "/images/teach9.jpeg", desc: "Belajar menyanyi dan memustuskan siswa atau siswi yang mana mau menyanyi duluan." },
    { src: "/images/teach10.jpeg", desc: "Menunjukan basic atau pendahuluan dalam abc maupun 123 dalam bahasa inggris." },
  ];

  const galleryImages = [
    "/images/sekolah1.jpeg",
    "/images/sekolah2.jpeg",
    "/images/sekolah3.jpeg",
    "/images/sekolah5.jpeg",
    "/images/sekolah.jpeg",
  ];

  return (
    <>
      {/* Hero Section */}
      <DetailHero
        title="SD Katolik Santo Agustinus Kawangkoan"
        subtitle="Pendidikan berkarakter di bawah naungan Yayasan Pendidikan Katolik Keuskupan Manado"
        image="/images/sekolah1.jpeg"
      />

      <section className="max-w-6xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-red-700 hover:underline">
            Beranda
          </Link>{" "}
          / Informasi / SD Katolik Santo Agustinus
        </div>

        {/* Profil Sekolah */}
        <h2 className="text-2xl font-bold text-red-700 mb-4">Profil Sekolah</h2>
        <p className="text-gray-700 leading-relaxed mb-10 text-sm sm:text-base">
          SD Katolik Santo Agustinus Kawangkoan adalah lembaga pendidikan dasar
          yang bernaung di bawah Yayasan Pendidikan Katolik Keuskupan Manado.
          Sekolah ini menempatkan pengembangan karakter, iman, dan prestasi
          sebagai fondasi utama, membentuk generasi yang beriman, berkarakter,
          dan berprestasi melalui pendidikan yang humanis, disiplin, serta
          berlandaskan nilai-nilai Katolik untuk mewujudkan masa depan yang
          cerdas dan berakhlak mulia.{" "}
          <a
            href="https://sekolah.data.kemendikdasmen.go.id/index.php/chome/profil/A0F881AC-30F5-E011-B1ED-39503AF1A7B7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-2 text-red-700/80 border border-red-700/30 px-2 py-1 rounded-md text-xs font-medium hover:bg-red-700/10 hover:text-red-800 transition"
          >
            Lihat Detail →
          </a>
        </p>

        {/* Visi dan Misi Section - BARU */}
<div className="mb-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Visi Card */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-red-700">Visi Sekolah</h3>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic border-l-4 border-red-200 pl-4 py-2 bg-white/50 rounded-r">
        "Terwujudnya manusia yang berprestasi, terdidik, berdaya saing jasmani dan rohani berdasarkan IMTAQ & IPTEK"
      </p>
    </motion.div>

    {/* Misi Card */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800">Misi Sekolah</h3>
      </div>
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <span className="text-red-600 text-xs font-bold">1</span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Mewujudkan peserta didik yang berprestasi dalam akademik dan non-akademik
          </p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <span className="text-red-600 text-xs font-bold">2</span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Membentuk pribadi yang terdidik dan berkarakter mulia
          </p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <span className="text-red-600 text-xs font-bold">3</span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Mengembangkan daya saing jasmani melalui pendidikan kesehatan dan olahraga
          </p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <span className="text-red-600 text-xs font-bold">4</span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Memperkuat aspek rohani melalui pembinaan IMTAQ (Iman dan Taqwa)
          </p>
        </div>
        <div className="flex items-start">
          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <span className="text-red-600 text-xs font-bold">5</span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            Mengintegrasikan IPTEK (Ilmu Pengetahuan dan Teknologi) dalam proses pembelajaran
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</div>

        {/* Galeri Sekolah */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Galeri Sekolah
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative group">
                <Image
                  src={img}
                  alt={`Kegiatan SD Katolik Santo Agustinus ${i + 1}`}
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full h-48"
                />
              </div>
            ))}

            {/* Card Dokumentasi KKT 144 */}
            <motion.div
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative bg-white/30 backdrop-blur-md border border-white/40 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md group h-48 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-gray-800 font-semibold text-sm mb-1 tracking-wide">
                Dokumentasi KKT 144
              </h3>
              <p className="text-gray-600 text-xs mb-3 opacity-80">
                Klik untuk melihat kegiatan mengajar
              </p>

              {/* Preview Images */}
              <div className="flex justify-center space-x-1 mb-2">
                {kktImages.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="relative w-10 h-8 rounded overflow-hidden shadow border border-gray-300"
                  >
                    <Image
                      src={item.src}
                      alt={item.desc}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                {kktImages.length > 2 && (
                  <div className="w-10 h-8 bg-gray-300 rounded flex items-center justify-center text-gray-700 text-xs font-bold border border-gray-400">
                    +{kktImages.length - 2}
                  </div>
                )}
              </div>

              <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>

        {/* Modal Gallery */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300/50">
                  <h3 className="text-xl font-bold text-gray-800">
                    Dokumentasi KKT 144 Posko Uner Satu
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Random Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                  {kktImages.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl break-inside-avoid cursor-pointer group"
                      onClick={() => setEnlargedImage(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.desc}
                        width={400}
                        height={300}
                        className="object-cover w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-300/50 text-center text-gray-600 text-sm">
                  {kktImages.length} foto dokumentasi
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enlarged Image */}
        <AnimatePresence>
          {enlargedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setEnlargedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-2xl max-h-[85vh] bg-white/90 backdrop-blur-lg rounded-lg p-3"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setEnlargedImage(null)}
                  className="absolute -top-2 -right-2 bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
                >
                  ✕
                </button>

                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src={enlargedImage.src}
                    alt={enlargedImage.desc}
                    fill
                    className="object-contain rounded"
                  />
                </div>

                <p className="text-gray-700 text-center text-sm mt-3">
                  {enlargedImage.desc}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lokasi Sekolah */}
        <div className="mb-12 mt-16">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Lokasi Sekolah
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            SD Katolik Santo Agustinus Kawangkoan berlokasi di{" "}
            <em>
              Uner, Kabupaten Minahasa, Sulawesi Utara, Uner Satu,
              Kabupaten Minahasa, Sulawesi Utara.
            </em>{" "}
            Klik peta di bawah untuk melihat lokasi di Google Maps.
          </p>

          {/* Peta dengan lokasi tepat & nama sekolah tampil */}
          <div className="rounded-lg shadow-md overflow-hidden mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.3069505242414!2d124.78975436952673!3d1.2025164181778208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328741f670d76ebb%3A0x6a2cbc0d52cf06da!2sSD%20Katolik%20Uner!5e0!3m2!1sid!2sid!4v1730038800000!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/kfJPoGbtTAAgBX9x7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:underline font-semibold"
            >
              Buka di Google Maps →
            </a>
          </div>
        </div>

        {/* Share Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 italic mb-2 opacity-80">Bagikan lewat:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Lihat lokasi dan profil SD Katolik Santo Agustinus Kawangkoan: https://maps.app.goo.gl/kfJPoGbtTAAgBX9x7`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition font-semibold text-sm sm:text-base"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                "https://maps.app.goo.gl/kfJPoGbtTAAgBX9x7"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}