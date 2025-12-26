"use client";

import Navbar from "@/components/layout/Navbar";
import { departments } from "@/data/departments";
import { motion } from "framer-motion";
import { ArrowRight, User, Users, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function CabinetPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen text-kmtb-navy selection:bg-kmtb-gold selection:text-kmtb-navy">
      <Navbar />

      {/* ================= HEADER SECTION (REVAMPED) ================= */}
      <section className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden bg-[#202E50]">
        {/* 1. Background Elements (Abstract Glows) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2542] to-[#202E50]"></div>

          {/* Glowing Orbs (Ornamen Cahaya) */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4C2B0] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-10"></div>

          {/* Pattern Grid Halus */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* 2. Content */}
        <div className="relative z-10 container mx-auto px-6 text-center mt-16">
          {/* Breadcrumb (Navigasi Kecil) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-400 mb-6 font-medium uppercase tracking-widest"
          >
            <Link
              href="/"
              className="hover:text-[#D4C2B0] transition-colors flex items-center gap-1"
            >
              <Home size={14} /> Beranda
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#D4C2B0]">Kabinet</span>
          </motion.div>

          {/* Judul Besar */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl"
          >
            Struktur Organisasi
          </motion.h1>

          {/* Garis Hiasan */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-[#D4C2B0] mx-auto rounded-full mb-6"
          ></motion.div>

          {/* Deskripsi */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Mengenal lebih dekat para penggerak di balik{" "}
            <span className="font-bold text-white">Kabinet Lentakarya</span>{" "}
            yang siap bersinergi membangun KMTB.
          </motion.p>
        </div>
      </section>

      {/* ================= BPH INTI (Tree Structure) ================= */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#325980] font-bold tracking-[0.2em] text-sm uppercase">
            Pimpinan
          </span>
          <h2 className="text-3xl font-bold text-[#202E50] mt-2">
            Badan Pengurus Harian
          </h2>
        </div>

        {/* Tree Layout */}
        <div className="flex flex-col items-center gap-10 relative max-w-4xl mx-auto">
          {/* Garis Konektor Vertikal (Tiang Utama) */}
          <div className="absolute top-16 bottom-20 left-1/2 -translate-x-1/2 w-[2px] bg-gray-300 -z-10 hidden md:block"></div>

          {/* Level 1: Presiden */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full max-w-xs text-center z-10 hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md group-hover:border-[#D4C2B0] transition-colors">
              <User className="w-full h-full text-gray-400 p-4" />
            </div>
            <h3 className="font-bold text-xl text-[#202E50]">Nama Presiden</h3>
            <div className="mt-2 inline-block px-3 py-1 bg-[#202E50] text-[#D4C2B0] text-xs font-bold rounded-full uppercase tracking-wider">
              Presiden Mahasiswa
            </div>
          </motion.div>

          {/* Level 2: Wapres Internal & Eksternal (Connector Horizontal) */}
          <div className="hidden md:block w-3/4 h-[2px] bg-gray-300 absolute top-[13rem]"></div>

          {/* Level 2: Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full justify-center">
            {/* Wapres Internal */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#325980] w-full max-w-xs text-center z-10"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 overflow-hidden border-2 border-white shadow-sm">
                <User className="w-full h-full text-gray-400 p-3" />
              </div>
              <h3 className="font-bold text-lg text-[#202E50]">
                Nama Wapres Int
              </h3>
              <p className="text-xs text-gray-500 font-semibold uppercase mt-1">
                Wakil Presiden Internal
              </p>
            </motion.div>

            {/* Wapres Eksternal */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#325980] w-full max-w-xs text-center z-10"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 overflow-hidden border-2 border-white shadow-sm">
                <User className="w-full h-full text-gray-400 p-3" />
              </div>
              <h3 className="font-bold text-lg text-[#202E50]">
                Nama Wapres Eks
              </h3>
              <p className="text-xs text-gray-500 font-semibold uppercase mt-1">
                Wakil Presiden Eksternal
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= GRID KEMENTERIAN ================= */}
      <section className="bg-white py-24 border-t border-gray-100 relative">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4C2B0] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202E50] mb-4">
              Daftar Kementerian
            </h2>
            <div className="w-16 h-1 bg-[#D4C2B0] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 max-w-xl mx-auto">
              Departemen dan biro yang bergerak sinergis untuk mewujudkan visi
              Lentakarya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <Link
                href={`/cabinet/${dept.id}`}
                key={dept.id}
                className="block group h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#D4C2B0] hover:bg-white hover:shadow-[0_10px_30px_rgba(32,46,80,0.1)] transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                >
                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#202E50] transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300"></div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#202E50] shadow-sm border border-gray-100 group-hover:bg-[#202E50] group-hover:text-[#D4C2B0] transition-colors">
                      <dept.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-[#D4C2B0] group-hover:text-[#202E50] transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#202E50] mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                    {dept.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#325980] uppercase tracking-wider pt-4 border-t border-gray-100">
                    <Users size={14} />
                    <span>{dept.shortName}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-[#151e32] text-center py-8 text-gray-500 text-sm border-t border-white/5">
        <p>&copy; 2025 Kabinet Lentakarya - KMTB Telkom University</p>
      </footer>
    </main>
  );
}
