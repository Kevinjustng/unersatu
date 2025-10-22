"use client";
import Image from "next/image";
import Link from "next/link";

export default function infocardsection() {
  const cards = [
    {
      title: "Sejarah Kelurahan Uner Satu",
      description:
        "Kelurahan Uner Satu memiliki sejarah panjang dalam perkembangan wilayah administrasi dan sosial masyarakat.",
      image: "/images/sejarah.jpg",
      link: "/detail/sejarah",
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
  ];

  return (
    <section
      id="info"
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-10 text-center drop-shadow-md">
        INFORMASI KELURAHAN
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-red-700 transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {card.description.length > 120
                  ? card.description.substring(0, 120) + "..."
                  : card.description}
              </p>
              <span className="text-red-600 font-semibold mt-3 inline-block group-hover:underline">
                Baca Selengkapnya →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
