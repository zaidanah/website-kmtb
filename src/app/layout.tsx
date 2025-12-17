import type { Metadata } from "next";
import { Montserrat, Fira_Sans } from "next/font/google";
import "./globals.css";

// Font Utama (Judul/Headings)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Regular, SemiBold, Bold, ExtraBold
  variable: "--font-montserrat",
});

// Font Pendukung (Body Text)
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "KMTB Telkom University - Kabinet Lentakarya",
  description: "Website resmi Keluarga Mahasiswa Teknik Biomedis Universitas Telkom.",
  icons: {
    icon: "/logo-kmtb.png",
    shortcut: "/logo-kmtb.png",
    apple: "/logo-kmtb.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} ${firaSans.variable} font-sans antialiased bg-kmtb-white text-kmtb-navy`}>
        {children}
      </body>
    </html>
  );
}