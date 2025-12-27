"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 10px, aktifkan mode solid
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/about" },
    { name: "Kabinet", href: "/cabinet" },
    { name: "Kegiatan", href: "/events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#202E50]/95 backdrop-blur-md shadow-lg py-3" // Mode Scroll (Navy)
          : "bg-transparent py-6" // Mode Atas (Transparan)
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`relative transition-all duration-500 ${
              isScrolled ? "h-[50px]" : "h-[70px]" // Logo mengecil saat scroll
            }`}
          >
            <Image
              src="/logo-kmtb.png"
              alt="Logo KMTB"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-auto object-contain drop-shadow-lg"
              priority
            />
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-white hover:text-kmtb-gold transition-colors flex items-center gap-1 drop-shadow-md"
            >
              {link.name}
              {link.name === "Profil" && <ChevronDown size={14} />}
            </Link>
          ))}
          <Link
            href="https://linktr.ee/kmtb.telkomuniversity"
            className="px-5 py-2 text-xs font-bold rounded-full transition-all border border-white text-white hover:bg-white hover:text-kmtb-navy shadow-lg"
          >
            HUBUNGI KAMI
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute w-full bg-[#202E50] border-t border-white/10 transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white font-bold text-sm uppercase border-b border-white/10 pb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
