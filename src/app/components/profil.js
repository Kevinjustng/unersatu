"use client";
import Image from "next/image";

export default function Profil() {
  return (
    <section
      id="profil"
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-10 text-center drop-shadow-md">
        STRUKTUR ORGANISASI KELURAHAN UNER SATU
      </h2>

      {/* Lurah & Sekretaris */}
<div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 w-full">
  {/* Lurah */}
  <div className="bg-white rounded-2xl shadow-xl w-full sm:w-[320px] md:w-[340px] h-auto py-6 flex flex-col items-center border-t-4 border-red-700 px-4 relative">
    {/* Jabatan di atas */}
    <p className="absolute top-3 text-red-700 font-semibold text-lg text-center">
      LURAH
    </p>

    {/* Spacer agar teks tidak tumpang tindih */}
    <div className="mt-8 relative w-32 h-32 rounded-full overflow-hidden shadow-md">
      <Image
        src="/images/tio.jpeg"
        alt="Lurah Uner Satu"
        fill
        className="object-cover"
      />
    </div>

    <div className="mt-4 text-center">
      <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">
        MICHAEL J. H. MONING, S.Sos
      </h3>
      <p className="text-sm text-gray-700 whitespace-nowrap">
        NIP. 197505092007011005
      </p>
    </div>
  </div>

  {/* Sekretaris */}
  <div className="bg-white rounded-2xl shadow-xl w-full sm:w-[320px] md:w-[340px] h-auto py-6 flex flex-col items-center border-t-4 border-red-700 px-4 relative">
    {/* Jabatan di atas */}
    <p className="absolute top-3 text-red-700 font-semibold text-lg text-center">
      SEKRETARIS
    </p>

    {/* Spacer agar teks tidak tumpang tindih */}
    <div className="mt-8 relative w-32 h-32 rounded-full overflow-hidden shadow-md">
      <Image
        src="/images/sekretaris.jpg"
        alt="Sekretaris Desa"
        fill
        className="object-cover"
      />
    </div>

    <div className="mt-4 text-center">
      <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">
        Nama Sekretaris
      </h3>
      <p className="text-sm text-gray-700 whitespace-nowrap">
        NIP. ----------------------
      </p>
    </div>
  </div>
</div>


      {/* Kepala Seksi Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-10 w-full">
        {/* Pemerintahan */}
        <div className="bg-white border-t-4 border-red-600 rounded-2xl shadow-lg p-5 flex flex-col items-center">
          <h4 className="font-bold text-red-700 text-lg mb-2 text-center">
            KEPALA SEKSI PEMERINTAHAN
          </h4>
          <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md mb-3">
            <Image
              src="/images/pemerintahan.jpg"
              alt="Kepala Seksi Pemerintahan"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 text-sm whitespace-nowrap mb-1">
            NIP. 197012212001012001
          </p>
          <p className="text-gray-900 font-semibold whitespace-nowrap">
            DETBY F. SONDAKH, SE
          </p>
        </div>

        {/* Pembangunan */}
        <div className="bg-white border-t-4 border-red-600 rounded-2xl shadow-lg p-5 flex flex-col items-center">
          <h4 className="font-bold text-red-700 text-lg mb-2 text-center">
            KEPALA SEKSI PEMBANGUNAN
          </h4>
          <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md mb-3">
            <Image
              src="/images/pembangunan.jpg"
              alt="Kepala Seksi Pembangunan"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 text-sm whitespace-nowrap mb-1">
            NIP. ----------------------
          </p>
          <p className="text-gray-900 font-semibold whitespace-nowrap">
            Nama Kepala Seksi
          </p>
        </div>

        {/* Kesejahteraan Rakyat */}
        <div className="bg-white border-t-4 border-red-600 rounded-2xl shadow-lg p-5 flex flex-col items-center">
          <h4 className="font-bold text-red-700 text-lg mb-2 text-center">
            KEPALA SEKSI KESEJAHTERAAN RAKYAT
          </h4>
          <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md mb-3">
            <Image
              src="/images/kesejahteraan.jpg"
              alt="Kepala Seksi Kesejahteraan Rakyat"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 text-sm whitespace-nowrap mb-1">
            NIP. ----------------------
          </p>
          <p className="text-gray-900 font-semibold whitespace-nowrap">
            Nama Kepala Seksi
          </p>
        </div>
      </div>

      {/* Kepala & Pembantu Lingkungan */}
      <div className="w-full mt-10">
        <h3 className="text-2xl font-extrabold text-red-700 mb-10 text-center mb-6">
          KEPALA DAN PEMBANTU KEPALA LINGKUNGAN
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Lingkungan 1 */}
          <div className="bg-white shadow-md rounded-2xl p-5 border-l-4 border-red-600 flex flex-col justify-center">
            <h4 className="font-bold text-red-700 mb-2 text-lg text-center">
              LINGKUNGAN 1
            </h4>
            <ul className="text-sm text-gray-800 space-y-1 text-center">
              <li>
                <b>Kepala Lingkungan:</b> Tedje Liow
              </li>
              <li>
                <b>Pembantu Kaling:</b> Meidy Pola
              </li>
              <li>
                <b>Pembantu Kaling:</b> Alvian C. Rorong
              </li>
            </ul>
          </div>

          {/* Lingkungan 2 */}
          <div className="bg-white shadow-md rounded-2xl p-5 border-l-4 border-red-600 flex flex-col justify-center">
            <h4 className="font-bold text-red-700 mb-2 text-lg text-center">
              LINGKUNGAN 2
            </h4>
            <ul className="text-sm text-gray-800 space-y-1 text-center">
              <li>
                <b>Kepala Lingkungan:</b> Alfrtis Poluakan
              </li>
              <li>
                <b>Pembantu Kaling:</b> Bobby Poluakan
              </li>
              <li>
                <b>Pembantu Kaling:</b> Syntia Poluakan, SE
              </li>
            </ul>
          </div>

          {/* Lingkungan 3 */}
          <div className="bg-white shadow-md rounded-2xl p-5 border-l-4 border-red-600 flex flex-col justify-center">
            <h4 className="font-bold text-red-700 mb-2 text-lg text-center">
              LINGKUNGAN 3
            </h4>
            <ul className="text-sm text-gray-800 space-y-1 text-center">
              <li>
                <b>Kepala Lingkungan:</b> Alvian Manongko
              </li>
              <li>
                <b>Pembantu Kaling:</b> Fanny Pesik
              </li>
              <li>
                <b>Pembantu Kaling:</b> Meggie Rembet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
