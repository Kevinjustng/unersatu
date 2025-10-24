"use client";

import { useEffect, useState, useRef } from "react";
import { Users, User, User2 } from "lucide-react"; // 👨 User = Male, 👩 User2 = Female
import { motion, useAnimation } from "framer-motion";

export default function Statistikpenduduk() {
  const [counts, setCounts] = useState({ total: 0, male: 0, female: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🎯 Target values
  const targetCounts = { total: 999, male: 999, female: 999 };

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

  const stats = [
    {
      icon: <Users size={50} className="text-red-700" />,
      label: "Jumlah Jiwa",
      value: counts.total,
    },
    {
      icon: <User size={50} className="text-blue-700" />,
      label: "Penduduk Laki-laki",
      value: counts.male,
    },
    {
      icon: <User2 size={50} className="text-pink-600" />,
      label: "Penduduk Perempuan",
      value: counts.female,
    },
  ];

  return (
    <section
      id="statistik"
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-10 text-center drop-shadow-md">
        STATISTIK PENDUDUK UNER SATU
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full text-center"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-red-700 p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            <div className="mb-3">{stat.icon}</div>
            <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-red-700 font-semibold mt-1 text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
