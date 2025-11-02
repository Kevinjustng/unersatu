"use client";
import Image from "next/image";
import Link from "next/link";
import DetailHero from "@/app/components/detailhero";
import { useState, useEffect } from "react";

export default function PasarPage() {
  const shareLink = "https://unersatu.my.id/detail/pasar";
  const images = ["/images/pasar1.jpg", "/images/pasar2.jpeg"];
  const [currentImage, setCurrentImage] = useState(0);

  // 🔄 Slider otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // ganti gambar tiap 4 detik
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero Section */}
      <DetailHero
        title="Pasar Uner Satu"
        subtitle="Pasar tradisional & sosial di Kawangkoan"
        image="/images/pasar1.jpg"
      />

      <section className="max-w-6xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-red-700 hover:underline">
            Beranda
          </Link>{" "}
          / Informasi / Pasar Kawangkoan
        </div>

        {/* Pasar Kawangkoan Section */}
        <h2 className="text-2xl font-bold text-red-700 mb-4">Pasar Kawangkoan</h2>
        <p className="text-gray-700 leading-relaxed mb-10 text-sm sm:text-base">
          Pasar Kawangkoan merupakan salah satu pasar utama di wilayah Minahasa
          yang memiliki sejarah panjang sebagai pusat ekonomi masyarakat lokal.
          Terletak di jantung Kecamatan Kawangkoan, pasar ini menjadi pusat
          perdagangan hasil bumi, rempah, buah-buahan, dan kebutuhan pokok bagi
          warga sekitar.  
          <br /><br />
          Suasana pasar ini ramai pada hari-hari tertentu di mana pedagang dari
          berbagai desa datang membawa hasil panen mereka. Selain menjadi tempat
          jual beli, Pasar Kawangkoan juga berfungsi sebagai ruang sosial, di mana
          warga saling berinteraksi dan mempererat hubungan antar masyarakat.
        </p>

        {/* Aktivitas Pasar + Slider */}
        <section className="mb-12 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Gambar Slider */}
          <div className="relative w-full md:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Pasar Uner Satu ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                priority={index === currentImage}
              />
            ))}
          </div>

          {/* Deskripsi Aktivitas */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Aktivitas di Pasar
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Pasar Kawangkoan beroperasi pada hari{" "}
              <strong>Senin, Kamis, dan Sabtu</strong> mulai pukul{" "}
              <strong>06.00 hingga 18.00 WITA</strong>. Sejak pagi, para pedagang
              mulai menata barang dagangan mereka: sayuran segar, buah, hasil
              tani, hingga hewan ternak.
              <br /><br />
              Aktivitas pasar bukan hanya transaksi ekonomi, melainkan juga menjadi
              ruang sosial tempat warga berinteraksi, memperkuat kebersamaan, dan
              menjaga tradisi masyarakat Kawangkoan.
            </p>
          </div>
        </section>

        {/* Lokasi & Jam Operasi */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Lokasi & Jam Operasi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            Pasar Uner Satu berlokasi di{" "}
            <strong>Kelurahan Uner Satu, Kecamatan Kawangkoan, Kabupaten Minahasa</strong>,
            Provinsi Sulawesi Utara. Lokasinya strategis dan mudah dijangkau dari
            pusat kota Kawangkoan.
            <br /><br />
            <strong>Jam operasional:</strong> Senin, Kamis, dan Sabtu pukul{" "}
            <strong>06.00–18.00 WITA</strong>.
          </p>

          {/* Map Embed */}
          <div className="rounded-lg shadow-md overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps?q=1.2025663,124.7923718&hl=id&z=18&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Info Tambahan */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Kegiatan Ekonomi & Budaya
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Kawangkoan terkenal dengan hasil pertanian seperti kacang, sayur, dan
            rempah yang sebagian besar dijual di pasar-pasar tradisional seperti
            Pasar Kawangkoan dan Pasar Uner Satu. Kedua pasar ini berperan penting
            dalam menjaga roda ekonomi masyarakat serta melestarikan budaya jual
            beli tradisional yang menjadi identitas khas Minahasa.
          </p>
        </div>

        {/* Bagikan Section */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 italic mb-2 opacity-80">Bagikan lewat:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Temukan info tentang Pasar Kawangkoan: ${shareLink}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition font-semibold text-sm sm:text-base"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareLink
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
