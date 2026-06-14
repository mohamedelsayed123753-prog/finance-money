"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from './LanguageContext'; 

// 1. كل الروابط موجودة هنا
const navLinks = [
  { href: '#home', label: { ar: 'الرئيسية', en: 'Home' } },
  { href: '#about', label: { ar: 'من نحن', en: 'About' } },
  { href: '#services', label: { ar: 'الرؤية', en: 'Vision' } }, 
  { href: '#financial-plan', label: { ar: 'خطة العمل', en: 'Financial Action Plan' } },
  { href: '#BSSServices', label: { ar: 'خدمات المكتب', en: 'BSS Services' } },
  { href: '#why-us', label: { ar: 'لماذا تختارنا', en: 'WHY CHOOSE US' } },
  { href: '#future-plans', label: { ar: 'الخطة المستقبلية', en: 'FUTURE PLANS' } },
  { href: '#footer', label: { ar: 'اتصل بنا', en: 'Contact' } },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage(); 

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false); 
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      window.scrollTo({ 
        top: element.getBoundingClientRect().top + window.pageYOffset - 80, 
        behavior: "smooth" 
      });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] w-full h-20 bg-[#030712]/90 backdrop-blur-md border-b border-white/10 flex items-center transition-all duration-300" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* اللوجو */}
        <button onClick={() => scrollToSection('#home')} className="flex items-center cursor-pointer hover:scale-105 transition-transform">
          <img src="/images/bssnew.png" alt="BSS Logo" className="h-10 w-auto object-contain" />
        </button>

        {/* الروابط (تتغير تلقائياً مع اللغة) */}
        <div className="hidden lg:flex flex-1 justify-center gap-6">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-white hover:text-[#bfa15f] transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer">
              {lang === 'ar' ? link.label.ar : link.label.en}
            </button>
          ))}
        </div>

        {/* زر اللغة */}
        <button onClick={toggleLang} className="border border-[#bfa15f] text-[#bfa15f] px-5 py-1.5 rounded-full font-bold text-xs hover:bg-[#bfa15f] hover:text-black transition-all">
          {lang === 'ar' ? 'English' : 'العربية'}
        </button>

        {/* موبايل */}
        <button className="lg:hidden text-[#bfa15f]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* المنيو الخاص بالموبايل */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="lg:hidden absolute top-20 left-0 right-0 bg-[#030712] py-6 flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-white font-bold">
                {lang === 'ar' ? link.label.ar : link.label.en}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}