"use client";

import Navbar from "@/components/layout/Navbar";
import { departments } from "@/data/departments";
import { bph } from "@/data/pimpinan"; // Pastikan file ini ada
import { motion } from "framer-motion";
import { ArrowRight, User, Users, ChevronRight, Home } from "lucide-react";
import Image from "next/image"; // IMPORT PENTING
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

      {/* ================= BPH INTI (REVAMPED - LEBIH BESAR & MEWAH) ================= */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#D4C2B0] font-bold tracking-[0.3em] text-sm uppercase bg-[#202E50] px-4 py-2 rounded-full shadow-lg">
            PIMPINAN
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#202E50] mt-6">
            Badan Pengurus Harian
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Pilar utama penggerak visi dan misi Kabinet Lentakarya.
          </p>
        </div>

        {/* Tree Layout Wrapper */}
        <div className="flex flex-col items-center relative max-w-6xl mx-auto">
          {/* Garis Konektor Vertikal (Tiang Utama) - Dipertebal & Warnai */}
          <div className="absolute top-32 bottom-40 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#202E50] to-[#D4C2B0] -z-10 hidden md:block opacity-30"></div>

          {/* ================= LEVEL 1: PRESIDEN (HERO CARD) ================= */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-full flex justify-center mb-16"
          >
            <div className="relative bg-white w-full max-w-lg p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(32,46,80,0.15)] border border-white hover:border-[#D4C2B0]/50 transition-all duration-500 group text-center hover:-translate-y-3">
              {/* Decorative Top Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-[#D4C2B0] rounded-b-xl shadow-[0_0_15px_#D4C2B0]"></div>

              {/* Foto Besar */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                {/* Lingkaran Hiasan Berputar di Belakang */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4C2B0] animate-[spin_10s_linear_infinite] opacity-50"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-gray-100">
                  {bph.presiden.foto ? (
                    <Image
                      src={bph.presiden.foto}
                      alt={bph.presiden.nama}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <User className="w-full h-full text-gray-400 p-8" />
                  )}
                </div>

                {/* Badge Icon (Optional) */}
                <div className="absolute bottom-2 right-2 bg-[#202E50] text-white p-2 rounded-full border-4 border-white shadow-lg">
                  <Users size={20} />
                </div>
              </div>

              {/* Teks */}
              <h3 className="font-extrabold text-3xl text-[#202E50] mb-2 tracking-tight">
                {bph.presiden.nama}
              </h3>
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#202E50] to-[#325980] text-white text-sm font-bold rounded-full shadow-lg shadow-blue-900/20 uppercase tracking-widest">
                {bph.presiden.jabatan}
              </div>
            </div>
          </motion.div>

          {/* ================= LEVEL 2: WAPRES (DUAL CARDS) ================= */}

          {/* Horizontal Connector Line */}
          <div className="hidden md:block w-[60%] h-1 bg-gradient-to-r from-transparent via-[#D4C2B0] to-transparent mb-12 opacity-50 relative top-[-2rem]"></div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 w-full px-4">
            {/* Kartu Wapres Internal */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(32,46,80,0.1)] border border-gray-100 hover:border-[#325980]/30 transition-all duration-300 hover:-translate-y-2 group text-center relative overflow-hidden"
            >
              {/* Background Blob Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#325980]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative w-36 h-36 mx-auto mb-5 rounded-full p-1 bg-gradient-to-tr from-[#325980] to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-gray-100 relative">
                  {bph.wapresInt.foto ? (
                    <Image
                      src={bph.wapresInt.foto}
                      alt={bph.wapresInt.nama}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="w-full h-full text-gray-400 p-6" />
                  )}
                </div>
              </div>

              <h3 className="font-bold text-2xl text-[#202E50] mb-2">
                {bph.wapresInt.nama}
              </h3>
              <p className="text-[#325980] font-bold text-sm uppercase tracking-wider border-b-2 border-[#D4C2B0] inline-block pb-1">
                {bph.wapresInt.jabatan}
              </p>
            </motion.div>

            {/* Kartu Wapres Eksternal */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(32,46,80,0.1)] border border-gray-100 hover:border-[#325980]/30 transition-all duration-300 hover:-translate-y-2 group text-center relative overflow-hidden"
            >
              {/* Background Blob Decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4C2B0]/10 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative w-36 h-36 mx-auto mb-5 rounded-full p-1 bg-gradient-to-tl from-[#D4C2B0] to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-gray-100 relative">
                  {bph.wapresEks.foto ? (
                    <Image
                      src={bph.wapresEks.foto}
                      alt={bph.wapresEks.nama}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="w-full h-full text-gray-400 p-6" />
                  )}
                </div>
              </div>

              <h3 className="font-bold text-2xl text-[#202E50] mb-2">
                {bph.wapresEks.nama}
              </h3>
              <p className="text-[#325980] font-bold text-sm uppercase tracking-wider border-b-2 border-[#D4C2B0] inline-block pb-1">
                {bph.wapresEks.jabatan}
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
              Daftar kementerian yang siap bersinergi dalam membangun KMTB.
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
