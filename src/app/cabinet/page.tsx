"use client";

import Navbar from "@/components/layout/Navbar";
import { departments } from "@/data/departments";
import { motion } from "framer-motion";
import { ArrowRight, User, Users } from "lucide-react";
import Link from "next/link";

export default function CabinetPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen text-kmtb-navy selection:bg-kmtb-gold selection:text-kmtb-navy">
      <Navbar />

      {/* ================= HEADER SECTION ================= */}
      <section className="relative bg-[#202E50] pt-40 pb-20 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Struktur Organisasi
          </motion.h1>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-[#D4C2B0] mx-auto rounded-full"
          ></motion.div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg font-light">
            Mengenal lebih dekat para penggerak di balik Kabinet Lentakarya.
          </p>
        </div>
      </section>

      {/* ================= BPH INTI (Tree Structure) ================= */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#202E50] uppercase tracking-widest border-b-2 border-[#D4C2B0] inline-block pb-2">
            Badan Pengurus Harian
          </h2>
        </div>

        {/* Tree Layout */}
        <div className="flex flex-col items-center gap-8 relative">
          {/* Garis Konektor Tengah */}
          <div className="absolute top-20 bottom-20 w-[2px] bg-gray-200 -z-10 hidden md:block"></div>

          {/* Level 1: Presiden */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#202E50] w-full max-w-xs text-center z-10"
          >
             <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#D4C2B0]">
               {/* Ganti dengan Foto Presiden */}
               <User className="w-full h-full text-gray-400 p-2" />
             </div>
             <h3 className="font-bold text-lg text-[#202E50]">Nama Presiden</h3>
             <p className="text-sm text-[#D4C2B0] font-bold uppercase tracking-wider">Presiden Mahasiswa</p>
          </motion.div>

          {/* Level 2: Wapres Internal & Eksternal */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-32 w-full justify-center">
            <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#325980] w-full max-w-xs text-center z-10"
            >
               <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                 <User className="w-full h-full text-gray-400 p-2" />
               </div>
               <h3 className="font-bold text-[#202E50]">Nama Wapres Int</h3>
               <p className="text-xs text-gray-500 uppercase">Wakil Presiden Internal</p>
            </motion.div>

            <motion.div 
               initial={{ x: 20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#325980] w-full max-w-xs text-center z-10"
            >
               <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                 <User className="w-full h-full text-gray-400 p-2" />
               </div>
               <h3 className="font-bold text-[#202E50]">Nama Wapres Eks</h3>
               <p className="text-xs text-gray-500 uppercase">Wakil Presiden Eksternal</p>
            </motion.div>
          </div>

          {/* Level 3: Sekjen & Bendahara (Contoh) */}
           <div className="flex flex-col md:flex-row gap-4 md:gap-16 w-full justify-center">
             {/* Kamu bisa tambah kotak lagi disini untuk Sekjen/Bendahara jika mau */}
           </div>
        </div>
      </section>

      {/* ================= GRID KEMENTERIAN ================= */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#202E50] mb-2">Daftar Kementerian</h2>
            <p className="text-gray-500">Klik kartu untuk melihat detail program kerja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <Link href={`/cabinet/${dept.id}`} key={dept.id} className="block group">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#D4C2B0] hover:bg-[#202E50] hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#202E50] shadow-sm group-hover:bg-[#D4C2B0] transition-colors">
                      {/* Render Icon Komponen */}
                      <dept.icon size={24} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-white/50 group-hover:text-white">
                       <ArrowRight size={14} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#202E50] group-hover:text-white mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 line-clamp-3 mb-4 flex-grow">
                    {dept.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#325980] group-hover:text-[#D4C2B0] mt-auto">
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
      <footer className="bg-[#151e32] text-center py-8 text-gray-500 text-sm">
        <p>&copy; 2025 Kabinet Lentakarya - KMTB Telkom University</p>
      </footer>
    </main>
  );
}