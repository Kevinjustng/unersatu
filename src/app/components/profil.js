"use client";

export default function Profil() {
  return (
    <section
      id="profil"
      className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-10 text-center drop-shadow-md">
        STRUKTUR ORGANISASI KELURAHAN UNER SATU
      </h2>

      {/* Lurah & Sekretaris */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
        {[
          { jabatan: "LURAH", nama: "MICHAEL J. H. MONING, S.Sos", nip: "197505092007011005" },
          { jabatan: "SEKRETARIS", nama: "Nama Sekretaris", nip: "----------------------" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg border-t-4 border-red-700 w-full sm:w-[360px] md:w-[400px] h-[180px] p-6 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-all"
          >
            <p className="text-red-700 font-bold text-lg uppercase tracking-wide">
              {item.jabatan}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-3">
              {item.nama}
            </h3>
            <p className="text-sm text-gray-700 mt-2">NIP. {item.nip}</p>
          </div>
        ))}
      </div>

      {/* Kepala Seksi Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mb-20 w-full">
        {[
          { jabatan: "Kepala Seksi Pemerintahan", nama: "DETBY F. SONDAKH, SE", nip: "197012212001012001" },
          { jabatan: "Kepala Seksi Pembangunan", nama: "Nama Kepala Seksi", nip: "----------------------" },
          { jabatan: "Kepala Seksi Kesejahteraan Rakyat", nama: "Nama Kepala Seksi", nip: "----------------------" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border-t-4 border-red-600 rounded-2xl shadow-lg p-6 h-[180px] flex flex-col justify-center hover:translate-y-[-4px] transition-all"
          >
            <h4 className="font-bold text-red-700 text-base uppercase tracking-wide whitespace-nowrap">
              {item.jabatan}
            </h4>
            <h3 className="text-base font-semibold text-gray-900 mt-2">
              {item.nama}
            </h3>
            <p className="text-sm text-gray-700 mt-2">NIP. {item.nip}</p>
          </div>
        ))}
      </div>

      {/* Kepala & Pembantu Lingkungan */}
      <div className="w-full mt-10">
        <h3 className="text-3xl font-extrabold text-red-700 mb-12 text-center tracking-wide">
          KEPALA DAN PEMBANTU KEPALA LINGKUNGAN
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: "LINGKUNGAN 1",
              list: [
                "Kepala Lingkungan: Tedje Liow",
                "Pembantu Kaling: Meidy Pola",
                "Pembantu Kaling: Alvian C. Rorong",
              ],
            },
            {
              title: "LINGKUNGAN 2",
              list: [
                "Kepala Lingkungan: Alfrtis Poluakan",
                "Pembantu Kaling: Bobby Poluakan",
                "Pembantu Kaling: Syntia Poluakan, SE",
              ],
            },
            {
              title: "LINGKUNGAN 3",
              list: [
                "Kepala Lingkungan: Alvian Manongko",
                "Pembantu Kaling: Fanny Pesik",
                "Pembantu Kaling: Meggie Rembet",
              ],
            },
          ].map((env, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-red-600 text-center hover:shadow-xl transition-all"
            >
              <h4 className="font-bold text-red-700 mb-3 text-base whitespace-nowrap">
                {env.title}
              </h4>
              <ul className="text-sm text-gray-800 space-y-1">
                {env.list.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
