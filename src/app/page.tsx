"use client";

import Navbar from "@/components/layout/Navbar";
import { departments } from "@/data/departments";
import { events } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Target,
  Users,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";

// --- DATA KEMENTERIAN ---
const departmentsData = departments.map((department) => department.name);

// --- DATA KEGIATAN ---
const eventsData = events.map((event) => event.title);


export default function Home() {
  return (
    <main className="font-sans text-kmtb-navy selection:bg-kmtb-gold selection:text-kmtb-navy">
      <Navbar />

      {/* =========================================================================
          LAYER 0: BACKGROUND (FIXED / DIAM DI TEMPAT)
      ========================================================================== */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src="/bg-landing.jpg"
          alt="Background KMTB"
          fill
          className="object-cover object-bottom"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-[#202E50]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* =========================================================================
          LAYER 10: WRAPPER KONTEN (SCROLLABLE)
      ========================================================================== */}
      <div className="relative z-10">
        {/* --- A. HERO SECTION --- */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 pt-40">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-[2px] w-12 bg-white/50 hidden sm:block"></span>
              <h3 className="font-body text-white text-xs md:text-sm tracking-[0.3em] uppercase font-bold drop-shadow-md">
                SELAMAT DATANG DI OFFICIAL WEBSITE
              </h3>
              <span className="h-[2px] w-12 bg-white/50 hidden sm:block"></span>
            </div>

            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-wide mb-2 drop-shadow-2xl">
              KELUARGA MAHASISWA <br />
              <span className="text-white">TEKNIK BIOMEDIS</span>
            </h1>

            <h2 className="font-sans text-2xl md:text-4xl font-bold text-[#D4C2B0] leading-tight tracking-wider mt-4 drop-shadow-lg">
              TELKOM UNIVERSITY
            </h2>

            <div className="mt-12">
              <button className="px-10 py-4 bg-[#D4C2B0] text-[#202E50] rounded-full font-bold text-sm tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,194,176,0.3)] cursor-pointer border-2 border-transparent">
                EKSPLORASI KABINET
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-10 text-white/70 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-widest uppercase">
              Scroll Down
            </span>
            <ChevronDown size={24} />
          </motion.div>
        </section>

        {/* --- B. SECTION TENTANG KAMI --- */}
        <section
          id="filosofi"
          className="relative bg-white py-24 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] rounded-t-[2.5rem]"
        >
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[#325980] font-bold tracking-[0.2em] text-sm uppercase">
                Tentang Kami
              </span>
              <h2 className="text-4xl font-bold text-[#202E50] mt-3 mb-6">
                Kabinet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#202E50] to-[#325980]">
                  Lentakarya
                </span>
              </h2>
              <p className="text-gray-600 leading-loose text-lg font-body">
                Lentakarya hadir sebagai wadah pengembangan diri yang nyata,
                berintegritas, dan berdampak positif bagi lingkungan kampus dan
                masyarakat luas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 hover:border-[#D4C2B0] transition-colors group shadow-sm">
                <div className="w-12 h-12 bg-[#202E50] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Target size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#202E50] mb-2">
                  Visi Organisasi
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Menjadikan KMTB sebagai wadah yang berkesan untuk pengembangan
                  diri mahasiswa dalam pembentukan karakter yang baik.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 hover:border-[#D4C2B0] transition-colors group shadow-sm">
                <div className="w-12 h-12 bg-[#D4C2B0] rounded-lg flex items-center justify-center text-[#202E50] mb-4 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h4 className="text-xl font-bold text-[#202E50] mb-2">
                  Misi Utama
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Meningkatkan suasana internal yang harmonis serta optimalisasi
                  kinerja program kerja yang berdampak nyata.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- C. SECTION KEMENTERIAN (DIPINDAHKAN KE SINI) --- */}
        <section className="bg-[#F5F7FA] py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#202E50] mb-4">
                Kementerian Kami
              </h2>
              <div className="w-16 h-1 bg-[#D4C2B0] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-2 cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-[#202E50] mb-2 group-hover:text-[#325980] transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">
                    {dept.fungsi && dept.fungsi[0]
                      ? dept.fungsi[0]
                      : "Deskripsi kementerian."}
                  </p>
                  <span className="text-xs font-bold text-[#D4C2B0] flex items-center gap-1 uppercase tracking-wider group-hover:gap-2 transition-all">
                    Selengkapnya <ArrowRight size={14} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- D. SECTION KEGIATAN TERBARU (DIPINDAHKAN KE BAWAH) --- */}
        <section className="bg-[#202E50] py-24 text-white overflow-hidden relative">
          {/* Pattern Background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[#D4C2B0] font-bold tracking-widest text-xs uppercase">
                  Highlights
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Kegiatan Terbaru
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden md:flex items-center gap-2 text-sm text-[#D4C2B0] hover:text-white transition-colors"
              >
                Lihat Semua <ArrowRight size={16} />
              </Link>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-[#D4C2B0]/50 transition-all group cursor-pointer"
                >
                  {/* === PLACEHOLDER GAMBAR === */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#1a243d] flex items-center justify-center group-hover:bg-[#151e32] transition-colors">
                    <span className="text-gray-500 font-mono text-xs border border-gray-600 px-2 py-1 rounded">
                      LINK PHOTO
                    </span>
                    <div className="absolute top-3 left-3 bg-[#D4C2B0] text-[#202E50] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#D4C2B0] transition-colors line-clamp-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- E. FOOTER --- */}
        <footer className="relative z-20 bg-[#151e32] text-gray-400 py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* Kolom Kiri: Brand & Deskripsi */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  {/* Opsional: Bisa pasang logo kecil disini jika mau */}
                  KMTB Telkom University
                </h2>
                <p className="text-sm leading-relaxed mb-8 max-w-md opacity-80">
                  Kabinet Lentakarya berkomitmen untuk menjadi wadah aspirasi
                  dan pengembangan diri mahasiswa Teknik Biomedis yang
                  berintegritas, profesional, dan berdampak nyata bagi masyarakat.
                </p>
                
                {/* Social Media Icons */}
                <div className="flex gap-4">
                  {/* Instagram */}
                  <Link
                    href="https://instagram.com/kmtb.telkomuniversity"
                    target="_blank"
                    className="p-3 bg-white/5 rounded-full hover:bg-[#D4C2B0] hover:text-[#202E50] transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/company/kmtbtelu" 
                    target="_blank"
                    className="p-3 bg-white/5 rounded-full hover:bg-[#D4C2B0] hover:text-[#202E50] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </Link>

                  {/* YouTube */}
                  <Link
                    href="https://www.youtube.com/@kmtbtelkomuniversity2592" 
                    target="_blank"
                    className="p-3 bg-white/5 rounded-full hover:bg-[#D4C2B0] hover:text-[#202E50] transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </Link>

                  {/* TikTok (Custom SVG) */}
                  <Link
                    href="https://www.tiktok.com/@kmtb.telkomuniversity" 
                    target="_blank"
                    className="p-3 bg-white/5 rounded-full hover:bg-[#D4C2B0] hover:text-[#202E50] transition-all duration-300"
                    aria-label="TikTok"
                  >
                    {/* Ikon TikTok Custom */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </Link>

                  {/* Email */}
                  <Link
                    href="mailto:kmtb@telkomuniversity.ac.id" 
                    className="p-3 bg-white/5 rounded-full hover:bg-[#D4C2B0] hover:text-[#202E50] transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </Link>
                </div>
              </div>

              {/* Kolom Kanan: Alamat & Kontak */}
              <div className="text-left md:text-right">
                <h4 className="text-white font-bold mb-6 text-lg">Hubungi Kami</h4>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:items-end">
                    <span className="text-xs font-bold text-[#D4C2B0] uppercase tracking-wider mb-1">Alamat Sekretariat</span>
                    <p className="text-sm leading-relaxed max-w-xs">
                      Jl. Telekomunikasi No.1, Sukapura,<br />
                      Kec. Dayeuhkolot, Kabupaten Bandung,<br />
                      Jawa Barat 40257
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end">
                    <span className="text-xs font-bold text-[#D4C2B0] uppercase tracking-wider mb-1">Email Resmi</span>
                    <p className="text-sm hover:text-white transition-colors cursor-pointer">
                      kmtb@telkomuniversity.ac.id
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
              <p>&copy; 2025 KMTB Telkom University. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Kabinet Lentakarya</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button className="bg-[#D4C2B0] p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-white transition-all cursor-pointer text-[#202E50] border-2 border-[#202E50]/10">
          <MessageCircle size={28} />
        </button>
      </div>
    </main>
  );
}
