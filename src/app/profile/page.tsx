"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Target, Users, Shield, BookOpen, Anchor } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen text-kmtb-navy">
      <Navbar />

      {/* ================= HERO PROFILE ================= */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#202E50]">
        {/* Background Image (Opsional, pakai warna solid dulu jika belum ada foto) */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/bg-landing.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#202E50] via-[#202E50]/80 to-transparent"></div>

        <div className="relative z-10 text-center container px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4C2B0] font-bold tracking-[0.4em] uppercase text-sm block mb-4"
          >
            Tentang Kami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl mx-auto leading-tight"
          >
            Mengenal Lebih Dekat <br /> KMTB Telkom University
          </motion.h1>
        </div>
      </section>

      {/* ================= SEJARAH / DESKRIPSI ================= */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#202E50] mb-6">
              Sejarah & Filosofi
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg text-justify">
              <p>
                Keluarga Mahasiswa Teknik Biomedis (KMTB) Universitas Telkom
                merupakan organisasi kemahasiswaan yang menaungi seluruh
                mahasiswa aktif program studi S1 Teknik Biomedis.
              </p>
              <p>
                Didirikan dengan semangat kekeluargaan, KMTB hadir sebagai wadah
                aspirasi, pengembangan potensi akademik maupun non-akademik,
                serta pembentukan karakter mahasiswa yang berintegritas dan siap
                berkontribusi bagi masyarakat.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
            {/* Ganti dengan foto himpunan ramai-ramai */}
            <Image
              src="/bg-landing.jpg"
              alt="Foto Bersama KMTB"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= VISI & MISI (ID untuk scroll) ================= */}
      <section
        id="visi-misi"
        className="py-24 bg-[#202E50] text-white relative overflow-hidden"
      >
        {/* Pattern Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Visi & Misi</h2>
            <div className="w-20 h-1 bg-[#D4C2B0] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Kartu Visi */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm lg:col-span-1">
              <div className="w-16 h-16 bg-[#D4C2B0] rounded-full flex items-center justify-center text-[#202E50] mb-6 shadow-lg">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#D4C2B0]">Visi</h3>
              <p className="leading-relaxed opacity-90">
                "Menjadikan KMTB sebagai wadah yang inklusif, progresif, dan
                berprestasi dalam lingkup nasional maupun internasional
                berlandaskan asas kekeluargaan."
              </p>
            </div>

            {/* List Misi */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm lg:col-span-2">
              <div className="w-16 h-16 bg-[#325980] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#D4C2B0]">Misi</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Membangun iklim organisasi yang harmonis dan profesional.",
                  "Memfasilitasi pengembangan minat dan bakat mahasiswa.",
                  "Menjalin relasi strategis dengan pihak eksternal.",
                  "Mengoptimalkan peran fungsi advokasi mahasiswa.",
                  "Berkontribusi aktif dalam pengabdian masyarakat.",
                ].map((misi, idx) => (
                  <li key={idx} className="flex items-start gap-3 opacity-90">
                    <span className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#D4C2B0]"></span>
                    {misi}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAMBANG & ARTI (ID untuk scroll) ================= */}
      <section id="lambang" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#202E50]">
            Identitas Organisasi
          </h2>
          <p className="text-gray-500 mt-2">
            Makna filosofis di balik lambang KMTB.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Display */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image
                src="/logo-kmtb.png"
                alt="Logo KMTB"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Penjelasan Filosofi */}
          <div className="space-y-6">
            {[
              {
                title: "Warna Biru Navy",
                desc: "Melambangkan kedalaman ilmu, profesionalisme, dan ketenangan dalam berpikir.",
                icon: Shield,
              },
              {
                title: "Warna Emas",
                desc: "Simbol kejayaan, prestasi, dan kualitas sumber daya mahasiswa yang unggul.",
                icon: Anchor,
              },
              {
                title: "Elemen Medis & Teknik",
                desc: "Menggambarkan kolaborasi keilmuan teknik dan kesehatan sebagai identitas utama.",
                icon: BookOpen,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
              >
                <div className="mt-1 text-[#325980]">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-[#202E50] text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
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
