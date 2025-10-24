"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function InfoCardSection() {
  const cards = [
    {
      title: "Pasar Uner Satu",
      description:
        "Merupakan tempat berdagang masyarakat, Serta mencari mata uang dan merupakan potensi dalam desa yang di adakan pada hari-hari tertentu.",
      image: "/images/pasar1.jpg",
      link: "/detail/pasar",
    },
    {
      title: "Visi dan Misi",
      description:
        "Membangun masyarakat yang mandiri, sejahtera, dan berdaya saing dengan semangat gotong royong dan pelayanan publik yang unggul.",
      image: "/images/visi.jpg",
      link: "/detail/visi-misi",
    },
    {
      title: "Program dan Kegiatan",
      description:
        "Berbagai program pembangunan dan sosial dijalankan untuk meningkatkan kesejahteraan warga di Kelurahan Uner Satu.",
      image: "/images/program.jpg",
      link: "/detail/program",
    },
    {
      title: "Pelayanan Publik",
      description:
        "Layanan publik yang efisien dan ramah untuk seluruh masyarakat.",
      image: "/images/pelayanan.jpg",
      link: "/detail/pelayanan",
    },
    {
      title: "Struktur Organisasi",
      description:
        "Struktur organisasi Kelurahan Uner Satu yang mendukung pelayanan publik.",
      image: "/images/struktur.jpg",
      link: "/detail/struktur",
    },
    {
      title: "Kegiatan Sosial",
      description:
        "Kegiatan sosial dan kemasyarakatan yang mempererat hubungan antar warga.",
      image: "/images/sosial.jpg",
      link: "/detail/sosial",
    },
    {
      title: "Infrastruktur",
      description:
        "Pembangunan infrastruktur untuk mendukung kemajuan wilayah.",
      image: "/images/infrastruktur.jpg",
      link: "/detail/infrastruktur",
    },
    {
      title: "Ekonomi Kreatif",
      description:
        "Pengembangan ekonomi kreatif sebagai upaya pemberdayaan masyarakat.",
      image: "/images/ekonomi.jpg",
      link: "/detail/ekonomi",
    },
    {
      title: "Lingkungan Hidup",
      description:
        "Program kebersihan dan pelestarian lingkungan di Kelurahan Uner Satu.",
      image: "/images/lingkungan.jpg",
      link: "/detail/lingkungan",
    },
  ];

  return (
    <section
      id="info"
      className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-10 text-center drop-shadow-md">
        INFORMASI KELURAHAN
      </h2>

      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Link
                href={card.link}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border-t-4 border-red-700 transition-all duration-300 overflow-hidden"
              >
                <div className="relative w-full h-44 md:h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {card.description.length > 120
                      ? card.description.substring(0, 120) + "..."
                      : card.description}
                  </p>
                  <span className="text-red-700 font-semibold mt-3 inline-block group-hover:underline">
                    Baca Selengkapnya →
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✨ Custom Nav Buttons - Clean & Floating */}
        <div className="swiper-button-prev-custom absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white/40 backdrop-blur-md text-red-700 border border-white/30 p-3 md:p-4 rounded-full shadow-md cursor-pointer hover:bg-white/70 hover:shadow-lg hover:scale-105 transition-all">
          ❮
        </div>
        <div className="swiper-button-next-custom absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white/40 backdrop-blur-md text-red-700 border border-white/30 p-3 md:p-4 rounded-full shadow-md cursor-pointer hover:bg-white/70 hover:shadow-lg hover:scale-105 transition-all">
          ❯
        </div>

        {/* Pagination Dots */}
        <div className="swiper-pagination-custom mt-10 flex justify-center gap-3"></div>
      </div>
    </section>
  );
}
