"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4">
           Coming Soon 
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Kami sedang menyiapkan sesuatu yang luar biasa untuk Anda.  
          Nantikan pembaruan berikutnya!
        </p>

        <div className="bg-white shadow-lg border border-red-600 rounded-2xl py-4 px-6 mb-6">
          <p className="text-gray-700 font-semibold">
            Website ini akan segera hadir dalam waktu dekat.
          </p>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 px-6 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full hover:bg-blue-200 transition-all duration-300"
        >
          Kembali ke Beranda
        </button>
      </motion.div>

      <footer className="absolute bottom-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Kelurahan Uner Satu — All rights reserved
      </footer>
    </main>
  );
}
