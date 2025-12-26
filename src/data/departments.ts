// File: src/data/departments.ts

import {
  BadgeDollarSign,
  FileText,
  Scale,
  Home,
  Sprout,
  PackageSearch,
  Megaphone,
  Globe,
  Lightbulb,
  TrendingUp,
  HeartHandshake,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface Department {
  id: string;
  name: string;
  shortName: string;
  // Kita simpan nama icon sebagai string atau komponen langsung (disini kita pakai komponen agar mudah di render)
  icon: LucideIcon;
  desc: string;
  fungsi: string[];
  proker: string[];
}

export const departments: Department[] = [
  {
    id: "keuangan",
    name: "Keuangan Organisasi",
    shortName: "Keuangan",
    icon: BadgeDollarSign,
    desc: "Mengelola transparansi dan akuntabilitas keuangan organisasi.",
    fungsi: [
      "Mengelola dan mengawasi seluruh aspek keuangan di lingkungan KMTB.",
      "Menyusun dan menetapkan sistem pencatatan keuangan yang transparan dan akuntabel.",
      "Menjadi penghubung antara kementerian dan bendahara dalam pelaporan serta penggunaan dana.",
    ],
    proker: [
      "Monitoring dan evaluasi penggunaan dana pada setiap kegiatan.",
      "Pengelolaan laporan keuangan rutin setiap periode.",
      "Pendampingan penyusunan proposal dan LPJ kegiatan.",
      "Optimalisasi sistem keuangan berbasis digital.",
    ],
  },
  {
    id: "kesekretariatan",
    name: "Kesekretariatan Organisasi",
    shortName: "Sekretaris",
    icon: FileText,
    desc: "Bertanggung jawab atas administrasi, surat-menyurat, dan inventaris organisasi.",
    fungsi: [
      "Mengatur dan mengelola seluruh administrasi surat-menyurat serta arsip kegiatan organisasi.",
      "Menyediakan dukungan dokumentasi bagi seluruh kegiatan kementerian dan BPH.",
      "Menyusun jadwal kegiatan organisasi serta memastikan keteraturan agenda internal.",
    ],
    proker: [
      "Pengelolaan surat keluar dan surat masuk organisasi.",
      "Penyusunan database arsip kegiatan dan dokumen penting KMTB.",
      "Pembuatan sistem dokumentasi digital untuk efisiensi administrasi.",
    ],
  },
  {
    id: "panrb",
    name: "Kementerian Pendayagunaan Aparatur Negara & Reformasi Birokrasi",
    shortName: "PANRB",
    icon: Scale,
    desc: "Mengawasi kinerja pengurus dan kepatuhan terhadap konstitusi organisasi.",
    fungsi: [
      "Mengawasi dan menimbang layak atau tidaknya program kerja yang diajukan.",
      "Menimbang dan meninjau AD/ART serta Buku Kode Etik serta GBHO.",
      "Mengkoordinasi pelaksanaan tugas dan pembinaan anggota.",
    ],
    proker: [
      "Pelaksanaan Sidang, Musyawarah Besar, dan Musyawarah Luar Biasa KMTB.",
      "Pengkajian dan Peninjauan Ulang AD/ART.",
      "Pengawasan atas pelaksanaan tugas dan kinerja BPH.",
    ],
  },
  {
    id: "dagri",
    name: "Kementerian Dalam Negeri",
    shortName: "Dagri",
    icon: Home,
    desc: "Menjaga harmonisasi, kekeluargaan, dan iklim positif di internal warga KMTB.",
    fungsi: [
      "Menciptakan dan menjaga rasa kekeluargaan dan kesolidaritasan di lingkungan BPH maupun warga KMTB.",
      "Menjaga dan meningkatkan keharmonisan antar organisasi.",
    ],
    proker: [
      "Internalisasi (Kegiatan Internal Teknik Biomedis).",
      "Pusat Data Mahasiswa Teknik Biomedis.",
      "Pusat Aspirasi.",
      "Pengembangan Hard Skill untuk seluruh Warga KMTB.",
    ],
  },
  {
    id: "regenerasi",
    name: "Kementerian Regenerasi & Kaderisasi Organisasi",
    shortName: "RNKO",
    icon: Sprout,
    desc: "Wadah pengembangan potensi kepemimpinan dan kaderisasi anggota KMTB.",
    fungsi: [
      "Bertanggung jawab atas pelaksanaan rangkaian pelatihan kepemimpinan dasar.",
      "Menyiapkan kader-kader yang memiliki jiwa kepemimpinan di semua bidang.",
      "Membentuk kader-kader yang berkarakter baik.",
    ],
    proker: [
      "Caderization, Dissemination, Acceleration Program (CARDIAC).",
      "Open Recruitment Staf Pengurus.",
      "Magang Keorganisasian.",
    ],
  },
  {
    id: "inventaris",
    name: "Kementerian Pengadaan dan Perawatan Inventaris",
    shortName: "PPI",
    icon: PackageSearch,
    desc: "Mengelola pengadaan dan perawatan aset serta fasilitas himpunan.",
    fungsi: [
      "Bertanggung jawab atas pengadaan perawatan seluruh harta benda organisasi.",
      "Mengontrol terhadap setiap aset atau barang yang dimiliki organisasi.",
    ],
    proker: [
      "Pengadaan dan penyedia fasilitas kebutuhan inventaris organisasi.",
      "Pemelihara & penanggung jawab fasilitas dan sekretariat KMTB.",
      "Pusat data vendor yang berafiliasi dengan KMTB.",
    ],
  },
  {
    id: "medinfo",
    name: "Kementerian Media & Informasi",
    shortName: "Medinfo",
    icon: Megaphone,
    desc: "Pusat informasi dan publikasi kegiatan serta branding KMTB.",
    fungsi: [
      "Bertanggung jawab atas penyediaan informasi penting guna mendukung kemajuan KMTB.",
      "Bertanggung jawab atas lalu lintas informasi.",
    ],
    proker: [
      "National Day Awareness.",
      "Content Creation & Social Media Management.",
      "Appreciation Post untuk Warga KMTB.",
      "Design Request & Creative Facilitator.",
    ],
  },
  {
    id: "lugri",
    name: "Kementerian Luar Negeri",
    shortName: "Lugri",
    icon: Globe,
    desc: "Membangun relasi strategis dengan pihak eksternal kampus dan alumni.",
    fungsi: [
      "Melaksanakan kerjasama dan kolaborasi dengan pihak internal maupun eksternal.",
      "Membangun dan menjaga relasi strategis.",
    ],
    proker: [
      "Media Partner.",
      "Company Visit & Campus Visit.",
      "Studi Banding.",
      "Public Relation.",
    ],
  },
  {
    id: "riset",
    name: "Kementerian Pengembangan dan Perencanaan Riset",
    shortName: "PPR",
    icon: Lightbulb,
    desc: "Fasilitator pengembangan akademik dan keilmuan teknik biomedis.",
    fungsi: [
      "Mewadahi kegiatan yang berhubungan dengan riset, inovasi, dan penelitian.",
      "Menyediakan forum pengembangan diri guna menambah wawasan mahasiswa.",
    ],
    proker: [
      "BIO-EX (Biomedical Exhibition).",
      "Responsi mata kuliah.",
      "LearnForum by KMTB.",
      "Info Riset / Webinar.",
    ],
  },
  {
    id: "kewirausahaan",
    name: "Kementerian Kewirausahaan dan Investasi",
    shortName: "Kewirus",
    icon: TrendingUp,
    desc: "Mengelola pendanaan mandiri melalui usaha kreatif dan merchandise.",
    fungsi: [
      "Berpartisipasi dalam memenuhi kebutuhan keuangan KMTB melalui program kerja profit.",
      "Mengelola keuangan dalam bentuk lain (investasi/usaha).",
    ],
    proker: [
      "Business operator (Merch KMTB, Seragam, dll).",
      "Market analysis.",
      "Investment.",
    ],
  },
  {
    id: "pengmas",
    name: "Kementerian Pengabdian Masyarakat dan Kompetisi",
    shortName: "PNK",
    icon: HeartHandshake,
    desc: "Wadah kontribusi sosial mahasiswa kepada masyarakat luas.",
    fungsi: [
      "Sebagai fasilitator penyelenggara pelayanan masyarakat guna memenuhi Tri Dharma Perguruan Tinggi.",
      "Mendorong mahasiswa untuk aksi nyata dalam bidang sosial.",
    ],
    proker: [
      "Bengkel Prestasi & Gudang Talenta.",
      "PNK Berinfo.",
      "Biomedity & HumaniTB.",
    ],
  },
  {
    id: "pora",
    name: "Kementerian Pemuda & Olahraga",
    shortName: "Menpora",
    icon: Trophy,
    desc: "Mengembangkan minat bakat olahraga dan seni mahasiswa.",
    fungsi: [
      "Memanajemen massa dalam berbagai aspek kepemudaan dan olahraga.",
      "Meningkatkan sportivitas, solidaritas, dan potensi mahasiswa.",
    ],
    proker: [
      "Manajemen Massa (Supporter).",
      "Biomedical Engineering Sport Association (BESA).",
      "Biomedical Super League (BSL).",
    ],
  },
];
