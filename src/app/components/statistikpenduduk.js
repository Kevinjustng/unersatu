"use client";

import { useEffect, useState, useRef } from "react";
import { Users, User, User2, PieChart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function Statistikpenduduk() {
  const [counts, setCounts] = useState({ total: 0, male: 0, female: 0 });
  const [selectedStat, setSelectedStat] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🎯 Target values
  const targetCounts = { total: 490, male: 245, female: 245 };

  // 📈 Data for pie charts based on your raw data
  const chartData = {
    male: {
      religion: [
        { name: "ISLAM", value: 33, color: "#3B82F6" },
        { name: "KHATOLIK", value: 53, color: "#EF4444" },
        { name: "KRISTEN", value: 159, color: "#10B981" }
      ],
      education: [
        { name: "TAMAT SLTA", value: 118, color: "#8B5CF6" },
        { name: "TAMAT SD", value: 28, color: "#F59E0B" },
        { name: "TAMAT SLTP", value: 31, color: "#EC4899" },
        { name: "DIPLOMA/S1", value: 24, color: "#06B6D4" },
        { name: "LAINNYA", value: 44, color: "#84CC16" }
      ],
      occupation: [
        { name: "WIRASWASTA", value: 81, color: "#F97316" },
        { name: "KARYAWAN SWASTA", value: 9, color: "#6366F1" },
        { name: "PELAJAR/MAHASISWA", value: 44, color: "#10B981" },
        { name: "BURUH/TUKANG", value: 6, color: "#EF4444" },
        { name: "LAINNYA", value: 105, color: "#8B5CF6" }
      ],
      ageGroup: [
        { name: "0-17 Tahun", value: 85, color: "#3B82F6" },
        { name: "18-35 Tahun", value: 72, color: "#10B981" },
        { name: "36-50 Tahun", value: 55, color: "#F59E0B" },
        { name: "51+ Tahun", value: 33, color: "#EF4444" }
      ]
    },
    female: {
      religion: [
        { name: "ISLAM", value: 33, color: "#3B82F6" },
        { name: "KHATOLIK", value: 53, color: "#EF4444" },
        { name: "KRISTEN", value: 159, color: "#10B981" }
      ],
      education: [
        { name: "TAMAT SLTA", value: 119, color: "#8B5CF6" },
        { name: "TAMAT SD", value: 29, color: "#F59E0B" },
        { name: "TAMAT SLTP", value: 31, color: "#EC4899" },
        { name: "DIPLOMA/S1", value: 24, color: "#06B6D4" },
        { name: "LAINNYA", value: 42, color: "#84CC16" }
      ],
      occupation: [
        { name: "IRT", value: 78, color: "#EC4899" },
        { name: "WIRASWASTA", value: 81, color: "#F97316" },
        { name: "PELAJAR/MAHASISWA", value: 44, color: "#10B981" },
        { name: "KARYAWAN SWASTA", value: 9, color: "#6366F1" },
        { name: "LAINNYA", value: 33, color: "#8B5CF6" }
      ],
      ageGroup: [
        { name: "0-17 Tahun", value: 85, color: "#3B82F6" },
        { name: "18-35 Tahun", value: 72, color: "#10B981" },
        { name: "36-50 Tahun", value: 55, color: "#F59E0B" },
        { name: "51+ Tahun", value: 33, color: "#EF4444" }
      ]
    },
    total: {
      maritalStatus: [
        { name: "KAWIN", value: 232, color: "#10B981" },
        { name: "BELUM KAWIN", value: 210, color: "#3B82F6" },
        { name: "CERAI MATI", value: 40, color: "#6B7280" },
        { name: "CERAI HIDUP", value: 8, color: "#EF4444" }
      ],
      ageClassification: [
        { name: "USIA LANJUT", value: 132, color: "#EF4444" },
        { name: "DEWASA", value: 125, color: "#F59E0B" },
        { name: "PARUH BAYA", value: 99, color: "#8B5CF6" },
        { name: "DEWASA MUDA", value: 59, color: "#10B981" },
        { name: "REMAJA", value: 39, color: "#3B82F6" },
        { name: "ANAK-ANAK", value: 26, color: "#EC4899" },
        { name: "BALITA", value: 10, color: "#84CC16" }
      ]
    }
  };

  // 🧠 Detect scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 🔢 Animate count up
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCounts({
        total: Math.floor(progress * targetCounts.total),
        male: Math.floor(progress * targetCounts.male),
        female: Math.floor(progress * targetCounts.female),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [isVisible, controls]);

  // 📊 Animated Pie Chart Component
  const AnimatedPieChart = ({ data, title, delay = 0 }) => {
    const [animatedData, setAnimatedData] = useState(data.map(item => ({ ...item, animatedValue: 0 })));
    const total = data.reduce((sum, item) => sum + item.value, 0);

    useEffect(() => {
      const timer = setTimeout(() => {
        const duration = 1500;
        const startTime = performance.now();

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          
          setAnimatedData(data.map(item => ({
            ...item,
            animatedValue: Math.floor(progress * item.value)
          })));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }, [data, delay]);

    let accumulatedPercent = 0;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: delay / 1000 }}
        className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
      >
        <h4 className="font-semibold text-center mb-3 text-gray-800">{title}</h4>
        
        {/* Chart Container */}
        <div className="relative w-40 h-40 mx-auto mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {animatedData.map((item, index) => {
              const percent = (item.animatedValue / total) * 100;
              const startAngle = accumulatedPercent * 3.6;
              accumulatedPercent += percent;
              const endAngle = accumulatedPercent * 3.6;

              const x1 = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
              const y1 = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
              const x2 = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
              const y2 = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));

              const largeArcFlag = percent > 50 ? 1 : 0;

              return (
                <motion.path
                  key={index}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: (delay + index * 200) / 1000,
                    ease: "easeOut"
                  }}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  stroke="white"
                  strokeWidth="1"
                />
              );
            })}
            
            {/* Center circle */}
            <circle cx="50" cy="50" r="15" fill="white" />
          </svg>
          
          {/* Percentage in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-700">
              {total}
            </span>
          </div>
        </div>

        {/* Legend with animated numbers */}
        <div className="space-y-2 text-xs">
          {animatedData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (delay + index * 100) / 1000 }}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center flex-1">
                <div 
                  className="w-3 h-3 rounded-sm mr-2 shadow-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-700 font-medium truncate">{item.name}</span>
              </div>
              <div className="text-right ml-2">
                <motion.span 
                  className="font-bold text-gray-900 block"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (delay + index * 100 + 800) / 1000,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {item.animatedValue}
                </motion.span>
                <span className="text-gray-600 text-xs">
                  ({((item.value / total) * 100).toFixed(1)}%)
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  // 📱 Detail Modal Component
  const DetailModal = ({ stat, onClose }) => {
    const data = chartData[stat.key];
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="bg-white rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-red-700"
            >
              Analisis Demografi {stat.label}
            </motion.h3>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ×
            </motion.button>
          </div>
          
          {/* 📝 Note formal dalam modal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-8"
          >
            <p className="text-blue-800 text-sm text-center font-medium">
              Data statistik ini merepresentasikan kondisi demografi masyarakat Kelurahan Uner Satu 
              berdasarkan hasil sensus penduduk tahun 2025. Informasi disajikan untuk keperluan 
              perencanaan pembangunan dan peningkatan pelayanan publik.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {stat.key === 'male' && (
              <>
                <AnimatedPieChart data={data.ageGroup} title="Distribusi Kelompok Usia" delay={0} />
                <AnimatedPieChart data={data.education} title="Tingkat Pendidikan" delay={200} />
                <AnimatedPieChart data={data.occupation} title="Jenis Pekerjaan" delay={400} />
                <AnimatedPieChart data={data.religion} title="Komposisi Agama" delay={600} />
              </>
            )}
            
            {stat.key === 'female' && (
              <>
                <AnimatedPieChart data={data.ageGroup} title="Distribusi Kelompok Usia" delay={0} />
                <AnimatedPieChart data={data.education} title="Tingkat Pendidikan" delay={200} />
                <AnimatedPieChart data={data.occupation} title="Jenis Pekerjaan" delay={400} />
                <AnimatedPieChart data={data.religion} title="Komposisi Agama" delay={600} />
              </>
            )}
            
            {stat.key === 'total' && (
              <>
                <AnimatedPieChart data={data.maritalStatus} title="Status Perkawinan" delay={0} />
                <AnimatedPieChart data={data.ageClassification} title="Klasifikasi Usia" delay={200} />
              </>
            )}
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="mt-8 w-full bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-800 hover:to-red-700 font-semibold shadow-lg transition-all duration-300"
          >
            Tutup Analisis
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  const stats = [
    {
      key: "total",
      icon: <Users size={50} className="text-red-700" />,
      label: "Jumlah Jiwa",
      value: counts.total,
    },
    {
      key: "male",
      icon: <User size={50} className="text-blue-700" />,
      label: "Penduduk Laki-laki",
      value: counts.male,
    },
    {
      key: "female",
      icon: <User2 size={50} className="text-pink-600" />,
      label: "Penduduk Perempuan",
      value: counts.female,
    },
  ];

  return (
    <section
      id="statistik"
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-red-700 mb-12 text-center drop-shadow-md"
      >
        STATISTIK KEPENDUDUKAN UNER SATU
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedStat(stat);
              setShowDetail(true);
            }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-red-700 p-6 flex flex-col items-center justify-center cursor-pointer h-48 transition-all duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="mb-3"
            >
              {stat.icon}
            </motion.div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            <p className="text-red-700 font-semibold text-lg mb-2">
              {stat.label}
            </p>
            <motion.p 
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              className="text-gray-500 text-sm flex items-center"
            >
              <PieChart size={16} className="mr-1" />
              Klik untuk analisis detail
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* 📝 Note formal di bawah statistik */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-gray-500 text-sm mt-10 text-center max-w-2xl italic border-t border-gray-200 pt-6"
      >
        Data kependudukan ini disusun berdasarkan hasil registrasi dan sensus masyarakat 
        Kelurahan Uner Satu tahun 2025. Digunakan sebagai acuan dalam perencanaan 
        program pembangunan dan peningkatan kesejahteraan masyarakat.
      </motion.p>

      {showDetail && (
        <DetailModal 
          stat={selectedStat} 
          onClose={() => setShowDetail(false)} 
        />
      )}
    </section>
  );
}