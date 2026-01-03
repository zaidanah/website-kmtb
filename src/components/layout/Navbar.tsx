"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State khusus untuk mobile dropdown profil
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // DATA NAVIGASI (Dengan Sub-menu untuk Profil)
  const navLinks = [
    { name: "Beranda", href: "/" },
    {
      name: "Profil",
      href: "/profile",
      // Sub-menu ditambahkan di sini
      dropdown: [
        { name: "Tentang KMTB", href: "/profile" },
        { name: "Visi & Misi", href: "/profile#visi-misi" },
        { name: "Lambang & Arti", href: "/profile#lambang" },
      ],
    },
    { name: "Kabinet", href: "/cabinet" },
    { name: "Kegiatan", href: "/events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#202E50]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`relative transition-all duration-500 ${
              isScrolled ? "h-[50px]" : "h-[70px]"
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

        {/* === MENU DESKTOP === */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {/* Main Link */}
              <Link
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-white hover:text-kmtb-gold transition-colors flex items-center gap-1 drop-shadow-md py-4"
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </Link>

              {/* Dropdown Menu (Hanya muncul saat hover group) */}
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 py-2">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-3 text-sm font-semibold text-[#202E50] hover:bg-[#202E50] hover:text-[#D4C2B0] transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="https://linktr.ee/kmtb.telkomuniversity"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* === MOBILE MENU === */}
      <div
        className={`md:hidden absolute w-full bg-[#202E50] border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {/* Jika punya dropdown, buat logic expand/collapse */}
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsMobileProfileOpen(!isMobileProfileOpen)}
                    className="w-full flex justify-between items-center text-white font-bold text-sm uppercase border-b border-white/10 pb-2"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isMobileProfileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu Mobile */}
                  <AnimatePresence>
                    {isMobileProfileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-2 space-y-2 border-l-2 border-[#D4C2B0]"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-300 text-sm hover:text-[#D4C2B0] py-1"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-bold text-sm uppercase border-b border-white/10 pb-2"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
