// File: src/data/events.ts

export interface EventItem {
  id: string;
  title: string;
  date: string;
  category: "Proker Besar" | "Agenda Rutin" | "Kompetisi" | "Lainnya";
  desc: string;
  img: string; // Path ke foto
}

export const events: EventItem[] = [
  {
    id: "pelantikan",
    title: "Pelantikan Kabinet Lentakarya",
    date: "14 April 2025",
    category: "Proker Besar",
    desc: "Upacara peresmian kepengurusan baru Kabinet Lentakarya masa bakti 2025/2026, dihadiri oleh civitas akademika.",
    img: "/bg-landing.jpg", // Ganti dengan foto asli
  },
  {
    id: "first-meet",
    title: "First Meet Staff",
    date: "Mei 2025",
    category: "Agenda Rutin",
    desc: "Pertemuan perdana seluruh anggota untuk pengenalan struktur, budaya kerja, dan penyamaan visi misi.",
    img: "/bg-landing.jpg",
  },
  {
    id: "fgd-aklimasi",
    title: "FGD Aklimasi x Lentakarya",
    date: "Juni 2025",
    category: "Agenda Rutin",
    desc: "Forum diskusi transisi antar kabinet demisioner dan kabinet baru untuk menjaga keberlanjutan program kerja.",
    img: "/bg-landing.jpg",
  },
  {
    id: "pkkmb-2025",
    title: "PKKMB Prodi 2025",
    date: "Agustus 2025",
    category: "Proker Besar",
    desc: "Penyambutan mahasiswa baru Teknik Biomedis dengan semangat solidaritas dan pengenalan lingkungan kampus.",
    img: "/bg-landing.jpg",
  },
  {
    id: "ppgd",
    title: "PPGD Training",
    date: "Agustus 2025",
    category: "Lainnya",
    desc: "Pelatihan Pertolongan Gawat Darurat (Basic Life Support) untuk meningkatkan kesiapsiagaan mahasiswa.",
    img: "/bg-landing.jpg",
  },
  {
    id: "learn-forum",
    title: "Learn Forum Workshop",
    date: "14 Juni 2025",
    category: "Agenda Rutin",
    desc: "Diskusi interaktif membahas kesehatan mental mahasiswa di tengah tekanan akademik bersama ahli.",
    img: "/bg-landing.jpg",
  },
  {
    id: "humani-tb",
    title: "Humani-TB Social Project",
    date: "4 Sept 2025",
    category: "Proker Besar",
    desc: "Kegiatan pengabdian masyarakat berbagi kasih bersama lansia di Panti Sosial Tresna Werdha.",
    img: "/bg-landing.jpg",
  },
];