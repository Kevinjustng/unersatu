"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import DetailHero from "@/app/components/detailhero";
import Link from "next/link";
import { useState } from "react";

export default function TentangKamiPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showTeamGallery, setShowTeamGallery] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  // Function to scroll to team section
  const scrollToTeamSection = () => {
    const teamSection = document.getElementById('team-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const anggota = [
    {
      nama: "Denna Villa Putri Yanis",
      jabatan: "Koordinator Posko", 
      foto: "/images/denna.jpeg",
      pantun: "Berdaya untuk Memberdayakan!",
      fakultas: "Fakultas Ilmu Budaya",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "Bernike Ziza Sitanggang",
      jabatan: "Sekretaris",
      foto: "/images/ziza.jpeg",
      pantun: "Tugas rapi tak pernah alpa — sekretaris andalan KKT 144 Posko Uner Satu.",
      fakultas: "Fakultas Kesehatan Masyarakat",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "Nabila Naya Kuning",
      jabatan: "Bendahara",
      foto: "/images/naya.jpeg",
      pantun: "Uang dijaga, nota disimpan — keuangan aman, program jalan.",
      fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "Cinta Suratinoyo",
      jabatan: "Koordinator Bidang Humas",
      foto: "/images/cinta.jpeg",
      pantun: "Menjalin silaturahmi dengan senyum, karena humas itu jembatan kepercayaan.",
      fakultas: "Fakultas Kesehatan Masyarakat",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "Kevin Justine Ng",
      jabatan: "Koordinator Bidang Program",
      foto: "/images/kevin.jpeg",
      pantun: "hi.",
      fakultas: "Fakultas Teknik",
      prodi: "Informatika",
      angkatan: "2022"
    },
    {
      nama: "Destio Mamahit",
      jabatan: "Bidang Pubdok",
      foto: "/images/destio.jpeg",
      pantun: "Duravitasetvita, (Hidup Itu Keras Tapi Begitulah Hidup).",
      fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
      prodi: "Pemerintahan",
      angkatan: "2022"
    },
    {
      nama: "Ratu Ambarak",
      jabatan: "Bidang Pubdok",
      foto: "/images/ratu.jpeg",
      pantun: "Potret indah penuh makna, tersimpan rapi jadi kenangan KKT kita.",
      fakultas: "Fakultas Hukum",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "Misella Mambu",
      jabatan: "Bidang Pelaporan",
      foto: "/images/misel.jpeg",
      pantun: "Laporan disusun setiap hari, semoga nilainya nanti tinggi sekali!",
      fakultas: "Fakultas Teknik Informatika",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "Clarissa Rogahang",
      jabatan: "Bidang Pelaporan",
      foto: "/images/ica.jpeg",
      pantun: "Draft to doc, all in line, Laporan clear, looks so fine 💻",
      fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "Vita Runtu",
      jabatan: "Bidang Humas",
      foto: "/images/vita.jpeg",
      pantun: "Langkah kecil hari ini bisa jadi awal dari perubahan besar esok hari",
      fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
      prodi: "",
      angkatan: "2022"
    },
    {
      nama: "KKT 144",
      jabatan: "Posko Uner Satu",
      foto: "/images/us2.jpeg",
      pantun: "Bersama membangun Kelurahan, dengan semangat gotong royong!",
      specialCard: true,
    },
    {
      nama: "Arjun Owen Sembel",
      jabatan: "Bidang Perlengkapan",
      foto: "/images/owen.jpeg",
      pantun: "Palu, tali, paku di tangan — semua siap tanpa kekurangan.",
      fakultas: "Fakultas Matematika dan ilmu Pengetahuan Alam",
      prodi: "Fisika",
      angkatan: "2021"
    },
  ];

  const pemimpin = [
    { nama: "Elias Poluakan", masaJabatan: "1850-1890", status: "Desa" },
    { nama: "Daniel Poluakan", masaJabatan: "1890-1912", status: "Desa" },
    { nama: "Thobias Bujung", masaJabatan: "1912-1933", status: "Desa" },
    { nama: "Jansen Bororing", masaJabatan: "1933-1942", status: "Desa" },
    { nama: "Hendrik Najoan", masaJabatan: "1942-1944", status: "Desa" },
    { nama: "Justus Suwu", masaJabatan: "1944-1950", status: "Desa" },
    { nama: "Cornelius Sarajar", masaJabatan: "1950-1952", status: "Desa" },
    { nama: "Hanokh Poluakan", masaJabatan: "1952-1959", status: "Desa" },
    { nama: "Ambrosius Lamonge", masaJabatan: "1959-1969", status: "Desa" },
    { nama: "Gerard A. Supit", masaJabatan: "1969-1970", status: "Desa" },
    { nama: "Frans Manorek", masaJabatan: "1970-1981", status: "Desa" },
    { nama: "Frans Manorek", masaJabatan: "1981-1986", status: "Kelurahan" },
    { nama: "Bernard A. Poluakan, BA.", masaJabatan: "1986-1996", status: "Kelurahan" },
    { nama: "Albert Tutu", masaJabatan: "1996-2002", status: "Kelurahan" },
    { nama: "Ny. H. A. Sengkey Palit", masaJabatan: "2002-2004", status: "Kelurahan" },
    { nama: "Estefanus Palit", masaJabatan: "2004-2008", status: "Kelurahan" },
    { nama: "Desy M. Mapasa, SE.", masaJabatan: "2008-2017", status: "Kelurahan" },
    { nama: "Debbie M. K. Pinatik, SE.", masaJabatan: "2017-2019", status: "Kelurahan" },
    { nama: "Meidy Saada (PLT)", masaJabatan: "2019-2020", status: "Kelurahan" },
    { nama: "Michael J. H. Moniung, S.Sos", masaJabatan: "2020-Sekarang", status: "Kelurahan" },
  ];

  const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const groupedMembers = [];
  for (let i = 0; i < anggota.length; i += 3) {
    groupedMembers.push(anggota.slice(i, i + 3));
  }

  return (
    <>
      <DetailHero
        title="Tentang Kami"
        subtitle="Sejarah Kelurahan Uner Satu & Profile KKT 144 Posko Uner Satu"
        image="/images/kkt144.jpg"
      />

      {/* ✅ Breadcrumb Section - UPDATED WITH KKT 144 LINK */}
      <section className="max-w-6xl mx-auto px-6 pt-6">
        <div className="text-sm text-gray-500">
          <Link href="/" className="text-red-700 hover:underline">
            Beranda
          </Link>{" "}
          /{" "}
           Tentang Kami {" "}
          <span 
            className="text-red-700 hover:underline cursor-pointer"
            onClick={scrollToTeamSection}
          >
            / Profile-KKT 144 
          </span>{" "}
        </div>
      </section>

      {/* ✅ Sejarah Uner Satu */}
      <section className="w-full px-6 py-16 space-y-16">
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold text-red-700 mb-6">
            Sejarah Uner Satu
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            Pada awalnya, wilayah Uner Satu merupakan bagian dari Desa Uner yang
            terletak di Kecamatan Kawangkoan, Kabupaten Minahasa. Berdasarkan
            catatan sejarah, kepala desa pertama Uner adalah{" "}
            <strong>Elias Poluakan</strong>, yang menjabat sejak tahun 1850
            hingga 1890. Seiring berjalannya waktu, wilayah Desa Uner mengalami
            perkembangan pesat dalam jumlah penduduk maupun aktivitas
            masyarakatnya.
            <br />
            <br />
            Seiring dengan perubahan status pemerintahan di Kabupaten Minahasa,
            Desa Uner resmi berubah status menjadi{" "}
            <strong>Kelurahan Uner</strong>. Pergantian status ini menandai
            peningkatan tata kelola pemerintahan yang lebih modern dan
            administratif. Dalam perkembangannya, untuk memperluas jangkauan
            pelayanan kepada masyarakat, maka pada tanggal{" "}
            <strong>17 September 2008</strong>, wilayah Kelurahan Uner kemudian
            mekar menjadi dua bagian, yaitu <strong>Kelurahan Uner</strong> dan{" "}
            <strong>Kelurahan Uner Satu</strong>.
          </p>
        </motion.div>

        {/* ✅ Informasi Wilayah */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold text-red-700 mb-6 text-center">
            Wilayah Kelurahan Uner Satu
          </h2>
          <div className=" rounded-2xl p-8 shadow-lg border border-blue-100">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify mb-6">
              Kelurahan Uner Satu merupakan salah satu kelurahan yang terletak di
              Kecamatan Kawangkoan Kabupaten, Minahasa Provinsi Sulawesi Utara. Kelurahan ini
              memiliki luas wilayah sekitar <strong>106 hektare</strong> dan berada pada titik koordinat{" "}
              <strong>1.20324° LU dan 124.79078° BT</strong>. Secara geografis, Kelurahan Uner Satu berada di bagian tengah
              Kecamatan Kawangkoan, yang berbatasan dengan Kelurahan Sedangan dan Kelurahan
              Kinali. Kelurahan Uner Satu memiliki kode wilayah administrasi <strong>71.02.12.1028</strong>.
              Wilayah ini terus berkembang seiring dengan meningkatnya aktivitas masyarakat di
              bidang pemerintahan, ekonomi, sosial, dan budaya.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-bold text-red-700 mb-3">Ekonomi dan Mata Pencaharian</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Kelurahan Uner Satu dikenal dengan aktivitas ekonominya yang cukup beragam. 
                  Mayoritas penduduk bermata pencaharian sebagai <strong>pedagang</strong>, yang sebagian besar 
                  menjalankan usahanya di <strong>Pasar Kawangkoan</strong>. Aktivitas jual beli di pasar tersebut 
                  menjadi sumber penghidupan utama bagi warga, dengan berbagai jenis dagangan 
                  seperti hasil pertanian, bahan makanan, pakaian, dan kebutuhan rumah tangga lainnya.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-bold text-red-700 mb-3">Pusat Ekonomi</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Kegiatan perdagangan di Pasar Kawangkoan tidak hanya menjadi penopang ekonomi
                  keluarga, tetapi juga turut mendorong perputaran ekonomi lokal serta mempererat
                  interaksi sosial antarwarga di Kelurahan Uner Satu. Pasar ini menjadi jantung
                  perekonomian masyarakat setempat.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Tokoh Pemimpin - TEXT COLOR CHANGED TO BLACK */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold text-red-700 mb-6 text-center">
            Tokoh-tokoh Pemimpin Kelurahan Uner Satu
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg border border-green-100">
            <p className="text-gray-600 text-center mb-6 text-sm">
              Berikut merupakan tokoh-tokoh pemimpin Kelurahan Uner Satu dari tahun 1850 sampai sekarang.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="p-3 text-left">No.</th>
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">Masa Jabatan</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pemimpin.map((pemimpin, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 text-black">{index + 1}.</td>
                      <td className="p-3 font-medium text-black">{pemimpin.nama}</td>
                      <td className="p-3 text-black">{pemimpin.masaJabatan}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          pemimpin.status === 'Desa' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {pemimpin.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">
              *Pemekaran Kelurahan Uner Satu terjadi pada 17 September 2008
            </p>
          </div>
        </motion.div>

        {/* ✅ Siapa Kami - ADDED ID FOR SCROLLING */}
        <div id="team-section" className="space-y-16">
          {/* Trigger Button/Card untuk membuka Gallery */}
          <motion.div
            variants={fadeDown}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-red-700 mb-6">
              Tim KKT 144 Posko Uner Satu
            </h2>
            
            {/* Preview Card yang bisa diklik */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border border-red-200 cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setShowTeamGallery(true)}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-red-200 bg-white">
    <Image
      src="/images/logo_unsrat.jpeg"
      alt="Team KKT 144"
      fill
      className="object-contain p-2"
      sizes="96px"
      priority
    />
  </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-red-700 mb-2">
                    Perkenalkan Team Kami!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Klik untuk melihat profil lengkap tim KKT 144 Posko Uner Satu
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      11 Anggota
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Unsrat Manado
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      KKT 144
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Lihat Profil Team →
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal Gallery Team - DARK TRANSPARENT BACKGROUND */}
      {showTeamGallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 overflow-y-auto"
          onClick={() => setShowTeamGallery(false)}
        >
          <div className="min-h-screen p-4 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 max-w-6xl w-full border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Modal */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Team KKT 144 Posko Uner Satu
                  </h2>
                  <p className="text-white/80">
                    Mahasiswa Universitas Sam Ratulangi Manado - Berdaya untuk Memberdayakan!
                  </p>
                </div>
                <button
                  onClick={() => setShowTeamGallery(false)}
                  className="text-white hover:text-red-200 text-2xl font-bold bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Team Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {anggota.filter(member => !member.specialCard).map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={member.foto}
                        alt={member.nama}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                        <span className="text-white text-sm font-semibold">
                          Klik untuk detail
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2">
                      {member.nama}
                    </h3>
                    <p className="text-red-300 font-semibold text-sm mb-3 uppercase">
                      {member.jabatan}
                    </p>
                    <div className="text-white/70 text-xs space-y-1">
                      <p>{member.fakultas}</p>
                      <p>{member.prodi} - Angkatan {member.angkatan}</p>
                    </div>
                    <p className="text-white/80 italic text-sm mt-3">
                      "{member.pantun}"
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Team Photo Card - NOW CLICKABLE */}
              <motion.div
                variants={itemVariants}
                className="mt-8 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-red-300/30 cursor-pointer hover:border-red-300/50 transition-all duration-300"
                onClick={() => setShowFullImage(true)}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 group">
                    <Image
                      src="/images/us2.jpeg"
                      alt="Team KKT 144"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">Klik untuk memperbesar</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      KKT 144 - Posko Uner Satu
                    </h3>
                    <p className="text-white/80 mb-4">
                      "Bersama membangun Kelurahan, dengan semangat gotong royong!"
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        Universitas Sam Ratulangi
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        11 Anggota
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        Pengabdian Masyarakat
                      </span>
                    </div>
                    <p className="text-white/60 text-sm mt-3">
                      📸 Klik foto team untuk melihat ukuran penuh
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Modal Detail Anggota */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-red-700">Detail Anggota</h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-100">
                <Image
                  src={selectedMember.foto}
                  alt={selectedMember.nama}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h4 className="text-lg font-bold text-gray-800 mb-2">{selectedMember.nama}</h4>
              <p className="text-red-600 font-semibold mb-1">{selectedMember.jabatan}</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mt-4 text-left">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Fakultas:</span> {selectedMember.fakultas}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Program Studi:</span> {selectedMember.prodi}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Angkatan:</span> {selectedMember.angkatan}
                </p>
              </div>
              
              <p className="italic text-gray-700 mt-4 text-sm">"{selectedMember.pantun}"</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal Full Size Image - SMALLER AND SCROLLABLE */}
      {showFullImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex items-start justify-center p-4 overflow-y-auto"
          onClick={() => setShowFullImage(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-2xl w-full mx-auto my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - FIXED TO TOP */}
            <button
              onClick={() => setShowFullImage(false)}
              className="sticky top-4 ml-auto bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors shadow-2xl border-2 border-white/20 text-lg font-bold block mb-4"
            >
              ×
            </button>
            
            {/* Image Container - SMALLER */}
            <div className="relative w-full bg-black/40 rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl">
              <div className="relative aspect-[4/3] w-full max-h-[60vh]">
                <Image
                  src="/images/us2.jpeg"
                  alt="Team KKT 144 Posko Uner Satu"
                  fill
                  className="object-contain"
                  quality={90}
                  priority
                  sizes="(max-width: 768px) 95vw, 60vw"
                />
              </div>
            </div>
            
            {/* Image Info - COMPACT */}
            <div className="text-center mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-md border border-white/20">
              <p className="text-white font-bold text-xl mb-2">KKT 144 - Posko Uner Satu</p>
              <p className="text-white/90 text-lg mb-3">Universitas Sam Ratulangi Manado</p>
              <p className="text-white/70 text-sm italic mb-4">"Bersama membangun Kelurahan, dengan semangat gotong royong!"</p>
              
              {/* Additional Info */}
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                  📸 Foto Team
                </span>
                <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                  KKT 144
                </span>
                <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                  Unsrat Manado
                </span>
              </div>
            </div>

            {/* Navigation Hint */}
            <div className="text-center mt-4">
              <p className="text-white/60 text-sm bg-black/30 py-2 px-3 rounded-lg">
                Klik di luar gambar untuk menutup
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}