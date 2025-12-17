export interface Department {
  id: string;
  name: string;
  shortName: string; // Nama pendek untuk tampilan mobile/card
  icon: string; // Nama icon dari Lucide-React
  fungsi: string[];
  proker: string[];
}

export const departments: Department[] = [
  // SLIDE 4
  {
    id: "keuangan",
    name: "Keuangan Organisasi",
    shortName: "Keuangan",
    icon: "BadgeDollarSign",
    fungsi: [
      "Mengelola dan mengawasi seluruh aspek keuangan di lingkungan KMTB.",
      "Menyusun dan menetapkan sistem pencatatan keuangan yang transparan dan akuntabel.",
      "Menjadi penghubung antara kementerian dan bendahara dalam pelaporan serta penggunaan dana.",
      "Mengelola penyaluran sumbangan bagi warga KMTB yang sedang berduka.",
      "Mengatur pengadaan pin dan plakat penghargaan pada KMTB.",
    ],
    proker: [
      "Monitoring dan evaluasi penggunaan dana pada setiap kegiatan.",
      "Pengelolaan laporan keuangan rutin setiap periode.",
      "Pendampingan penyusunan proposal dan LPJ kegiatan.",
      "Optimalisasi sistem keuangan berbasis digital untuk transparansi dan efisiensi.",
    ],
  },
  // SLIDE 5
  {
    id: "kesekretariatan",
    name: "Kesekretariatan Organisasi",
    shortName: "Sekretaris",
    icon: "FileText",
    fungsi: [
      "Mengatur dan mengelola seluruh administrasi surat-menyurat serta arsip kegiatan organisasi.",
      "Menyediakan dukungan dokumentasi bagi seluruh kegiatan kementerian dan BPH.",
      "Menyusun jadwal kegiatan organisasi serta memastikan keteraturan agenda internal.",
    ],
    proker: [
      "Pengelolaan surat keluar dan surat masuk organisasi.",
      "Penyusunan database arsip kegiatan dan dokumen penting KMTB.",
      "Pembuatan sistem dokumentasi digital untuk efisiensi administrasi.",
      "Penyusunan laporan kesekretariatan tiap akhir periode.",
    ],
  },
  // SLIDE 6
  {
    id: "panrb",
    name: "Kementerian Pendayagunaan Aparatur Organisasi & Birokrasi",
    shortName: "PANRB",
    icon: "Scale", // Simbol Timbangan/Hukum
    fungsi: [
      "Mengawasi dan menimbang layak atau tidaknya program kerja yang diajukan oleh kementerian-kementerian.",
      "Menimbang dan meninjau AD/ART serta Buku Kode Etik serta GBHO.",
      "Mengkoordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organisasi di lingkungan organisasi.",
    ],
    proker: [
      "Pelaksanaan Sidang, Musyawarah Besar, dan Musyawarah Luar Biasa KMTB.",
      "Pengkajian dan Peninjauan Ulang AD/ART, Buku Kode Etik dan GBHO.",
      "Pengawasan atas pelaksanaan tugas dan kinerja BPH di lingkungan KMTB.",
      "Penegakan AD/ART serta Buku Kode Etik. Penerimaan laporan dan/atau pengaduan.",
    ],
  },
  // SLIDE 7
  {
    id: "dagri",
    name: "Kementerian Dalam Negeri",
    shortName: "Dagri",
    icon: "Home", // Simbol Rumah/Kekeluargaan
    fungsi: [
      "Menciptakan dan menjaga rasa kekeluargaan dan kesolidaritasan di lingkungan BPH maupun warga KMTB.",
      "Menjaga dan meningkatkan keharmonisan antar organisasi.",
      "Melaksanakan pengembangan sumber daya manusia di bidang pemerintahan dalam negeri.",
    ],
    proker: [
      "Internalisasi (Kegiatan Internal Teknik Biomedis).",
      "Pusat Data Mahasiswa Teknik Biomedis.",
      "Pusat Aspirasi.",
      "Pengembangan Hard Skill untuk seluruh Warga KMTB.",
    ],
  },
  // SLIDE 8
  {
    id: "regenerasi",
    name: "Kementerian Regenerasi & Kaderisasi",
    shortName: "Regenerasi",
    icon: "Sprout", // Simbol Tunas/Pertumbuhan
    fungsi: [
      "Bertanggung jawab atas pelaksanaan rangkaian pelatihan kepemimpinan dasar dan karakter serta regenerasi BPH.",
      "Menyiapkan kader-kader yang memiliki jiwa kepemimpinan di semua bidang.",
      "Membentuk kader-kader yang berkarakter baik.",
    ],
    proker: [
      "Caderization, Dissemination, Acceleration Program (CARDIAC).",
      "Open Recruitment Staf Pengurus.",
      "Magang Keorganisasian untuk Mahasiswa Teknik Biomedis.",
    ],
  },
  // SLIDE 9
  {
    id: "inventaris",
    name: "Kementerian Pengadaan & Perawatan Inventaris",
    shortName: "Inventaris",
    icon: "PackageSearch", // Simbol Barang/Logistik
    fungsi: [
      "Bertanggung jawab atas pengadaan perawatan seluruh harta benda organisasi dan penyediaan logistik organisasi.",
      "Mengontrol terhadap setiap aset atau barang yang dimiliki organisasi.",
    ],
    proker: [
      "Pengadaan dan penyedia fasilitas kebutuhan inventaris organisasi.",
      "Pemelihara & penanggung jawab fasilitas dan sekretariat KMTB.",
      "Pusat data vendor yang berafiliasi dengan KMTB.",
    ],
  },
  // SLIDE 10
  {
    id: "medinfo",
    name: "Kementerian Media & Informasi",
    shortName: "Medinfo",
    icon: "Megaphone", // Simbol Informasi/Broadcast
    fungsi: [
      "Bertanggung jawab atas penyediaan informasi-informasi penting guna mendukung kemajuan dan pengembangan KMTB dalam bentuk visualisasi terstruktur.",
      "Bertanggung jawab atas lalu lintas informasi.",
    ],
    proker: [
      "National Day Awareness.",
      "Content Creation.",
      "Appreciation Post untuk Warga KMTB.",
      "Design Request.",
      "Creative Facilitator.",
      "Foto Profil Kabinet & Social Media Management.",
    ],
  },
  // SLIDE 11
  {
    id: "lugri",
    name: "Kementerian Luar Negeri",
    shortName: "Lugri",
    icon: "Globe", // Simbol Dunia
    fungsi: [
      "Melaksanakan kerjasama dan kolaborasi serta membangun dan menjaga relasi dengan pihak internal maupun eksternal.",
      "Melakukan riset event guna mendukung kemajuan KMTB.",
    ],
    proker: [
      "Media Partner.",
      "Company Visit & Campus Visit.",
      "Studi Banding.",
      "Undangan.",
      "Contact Person / Public Relation.",
    ],
  },
  // SLIDE 12
  {
    id: "riset",
    name: "Kementerian Perencanaan Pengembangan & Riset",
    shortName: "Riset &bang",
    icon: "Lightbulb", // Simbol Ide/Inovasi
    fungsi: [
      "Mewadahi kegiatan-kegiatan yang berhubungan dengan riset, inovasi, dan penelitian mahasiswa Teknik Biomedis.",
      "Menyediakan forum pengembangan diri guna menambah wawasan serta mempertajam pemahaman mahasiswa.",
    ],
    proker: [
      "BIO-EX.",
      "Responsi mata kuliah.",
      "LearnForum by KMTB.",
      "Info Riset / Webinar.",
      "Mentoring tugas besar.",
    ],
  },
  // SLIDE 13
  {
    id: "kewirausahaan",
    name: "Kementerian Kewirausahaan & Investasi",
    shortName: "KWU",
    icon: "TrendingUp", // Simbol Grafik Naik/Profit
    fungsi: [
      "Berpartisipasi dalam memenuhi kebutuhan keuangan KMTB melalui pelaksanaan program kerja yang menghasilkan profit.",
      "Mengelola keuangan dalam bentuk lain.",
    ],
    proker: [
      "Business operator (Merch KMTB, Seragam, dll).",
      "Market analysis.",
      "Investment.",
    ],
  },
  // SLIDE 14
  {
    id: "pengmas",
    name: "Kementerian Pengabdian Masyarakat & Kompetisi",
    shortName: "Pengmas",
    icon: "HeartHandshake", // Simbol Pengabdian/Sosial
    fungsi: [
      "Sebagai fasilitator penyelenggara pelayanan masyarakat guna memenuhi tri dharma perguruan tinggi tingkat organisasi.",
      "Mendorong mahasiswa Teknik biomedis untuk eksperimental dalam bidang sosial dan akademik.",
    ],
    proker: [
      "Bengkel Prestasi.",
      "Gudang Talenta.",
      "PNK Berinfo.",
      "Kompetisi Mandiri dan Kompetisi BELMAWA.",
      "Biomedity.",
      "HumaniTB.",
    ],
  },
  // SLIDE 15
  {
    id: "pora",
    name: "Kementerian Pemuda & Olahraga",
    shortName: "Pora",
    icon: "Trophy", // Simbol Juara/Olahraga
    fungsi: [
      "Memanajemen massa dalam berbagai aspek kepemudaan, termasuk olahraga, kepemimpinan, dan pengembangan diri.",
      "Berfokus pada kompetisi internal dan eksternal guna meningkatkan sportivitas, solidaritas, dan potensi mahasiswa.",
    ],
    proker: [
      "Manajemen Massa (Supporter, Arak Arakan, dsb).",
      "Biomedical Engineering Sport Association (BESA).",
      "Biomedical Super League (BSL).",
    ],
  },
];
