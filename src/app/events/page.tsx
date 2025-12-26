"use client";

import Navbar from "@/components/layout/Navbar";
import { events } from "@/data/events";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Filter,
  Home,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EventsPage() {
  const [filter, setFilter] = useState("Semua");
  const categories = [
    "Semua",
    "Proker Besar",
    "Agenda Rutin",
    "Kompetisi",
    "Lainnya",
  ];

  // Filter Logic
  const filteredEvents =
    filter === "Semua" ? events : events.filter((ev) => ev.category === filter);

  return (
    <main className="font-sans bg-gray-50 min-h-screen text-kmtb-navy selection:bg-kmtb-gold selection:text-kmtb-navy">
      <Navbar />

      {/* ================= HEADER SECTION ================= */}
      <section className="relative h-[45vh] min-h-[350px] flex flex-col items-center justify-center overflow-hidden bg-[#202E50]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2542] to-[#202E50]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#325980] rounded-full blur-[150px] opacity-30"></div>
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-400 mb-4 font-medium uppercase tracking-widest"
          >
            <Link
              href="/"
              className="hover:text-[#D4C2B0] transition-colors flex items-center gap-1"
            >
              <Home size={14} /> Beranda
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#D4C2B0]">Kegiatan</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl"
          >
            Galeri Kegiatan
          </motion.h1>

          <div className="w-20 h-1.5 bg-[#D4C2B0] mx-auto rounded-full mb-6"></div>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
            Rekam jejak perjalanan dan kontribusi nyata Kabinet Lentakarya.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-20 container mx-auto px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === cat
                  ? "bg-[#202E50] text-[#D4C2B0] border-[#202E50]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#202E50] hover:text-[#202E50]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-200">
                {/* 
                           CATATAN: Pastikan 'item.img' mengarah ke file lokal yang valid (contoh: '/bg-landing.jpg') 
                           jika konfigurasi next.config.js belum mengizinkan domain eksternal.
                        */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202E50]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-[#D4C2B0] text-sm font-bold flex items-center gap-2">
                    <ImageIcon size={16} /> Lihat Dokumentasi
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#202E50] px-3 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
                  <Calendar size={12} /> {item.date}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4C2B0] bg-[#202E50]/5 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#202E50] mb-3 group-hover:text-[#325980] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Filter size={48} className="mx-auto mb-4 opacity-20" />
            <p>Belum ada kegiatan untuk kategori ini.</p>
          </div>
        )}
      </section>

      {/* Footer Simple */}
      <footer className="bg-[#151e32] text-center py-8 text-gray-500 text-sm border-t border-white/5">
        <p>&copy; 2025 Kabinet Lentakarya - KMTB Telkom University</p>
      </footer>
    </main>
  );
}
