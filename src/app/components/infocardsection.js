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
        "Merupakan tempat berdagang masyarakat, serta mencari mata uang dan merupakan potensi dalam desa yang diadakan pada hari-hari tertentu.",
      image: "/images/pasar1.jpg",
      link: "/detail/pasar",
    },
    {
      title: "Pasar Blante",
      description:
        "Membangun masyarakat yang mandiri, sejahtera, dan berdaya saing dengan semangat gotong royong dan pelayanan publik yang unggul.",
      image: "/images/blante1.jpeg",
      link: "/detail/blante",
    },
    {
      title: "SD Katolik Santo Agustinus",
      description:
        "SD Katolik santo agustinus kawangkoan Membentuk generasi yang beriman, berkarakter, dan berprestasi melalui pendidikan  humanis, disiplin, serta berlandaskan nilai-nilai Katolik untuk mewujudkan masa depan yang cerdas dan berakhlak mulia.",
      image: "/images/sekolah2.jpeg",
      link: "/detail/sekolah",
    },
    {
      title: "Coming Soon",
      description:
        "-",
      image: "/images/pelayanan.jpg",
      link: "/detail/kosong",
    },
  ];

  return (
    <section
      id="info"
      className="w-full flex flex-col items-center py-12 sm:py-16 px-3 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 mb-8 sm:mb-12 text-center drop-shadow-md">
        INFORMASI KELURAHAN UNER SATU
      </h2>

      <div className="relative w-full max-w-md sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
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
          spaceBetween={18}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          className="pb-12 sm:pb-16"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Link
                href={card.link}
                className="group w-[94%] sm:w-[95%] md:w-full bg-white rounded-2xl shadow-md hover:shadow-xl border-t-4 border-red-700 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Hover lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>

                {/* Text Section */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-red-700 transition">
                    {card.title}
                  </h3>

                  {/* Mobile Only */}
                  <div className="block sm:hidden mt-2">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {card.description.length > 100
                        ? card.description.substring(0, 100) + "..."
                        : card.description}
                    </p>
                    <span className="text-red-700 font-semibold mt-2 inline-block group-hover:underline text-sm">
                      Baca Selengkapnya →
                    </span>
                  </div>

                  {/* Desktop Only */}
                  <div className="hidden sm:block mt-2">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {card.description.length > 120
                        ? card.description.substring(0, 120) + "..."
                        : card.description}
                    </p>
                    <span className="text-red-700 font-semibold mt-2 inline-block group-hover:underline text-sm">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="hidden md:flex swiper-button-prev-custom absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md text-red-700 border border-red-200 p-3 rounded-full shadow-md cursor-pointer hover:bg-red-700 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          ❮
        </div>
        <div className="hidden md:flex swiper-button-next-custom absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md text-red-700 border border-red-200 p-3 rounded-full shadow-md cursor-pointer hover:bg-red-700 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
          ❯
        </div>

        {/* Pagination */}
        <div className="swiper-pagination-custom mt-8 flex justify-center gap-3"></div>
      </div>
    </section>
  );
}
