"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from './LanguageContext'; 
 
// Navigation links used in the navbar (labels in Arabic and English)
const navLinks: { href: string; label: { ar: string; en: string } }[] = [
  { href: '#home', label: { ar: 'الرئيسية', en: 'Home' } },
  { href: '#about', label: { ar: 'من نحن', en: 'About' } },
  { href: '#MainServices', label: { ar: 'خدماتنا', en: 'Services' } },
  { href: '#journey', label: { ar: 'رحلة التمويل', en: 'Journey' } },
  { href: '#plans', label: { ar: 'خططنا', en: 'Plans' } },
  { href: '#contact', label: { ar: 'اتصل بنا', en: 'Contact' } },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // use the function name exported by the LanguageContext
  const { lang, toggleLang } = useLanguage(); 

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent py-6"
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'} // التعديل هنا
    >
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center">
        
        <a href="#home" className="z-20">
          <img src="/images/BSS-no-bg.png" alt="BSS Logo" className="h-12 w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center justify-center gap-8 z-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors font-bold text-sm">
              {link.label[lang as 'ar' | 'en']}
            </a>
          ))}
          
          {/* الزر الموحد */}
          <button 
            onClick={toggleLang} 
            className="px-4 py-2 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>

        <div className="flex justify-end lg:hidden items-center gap-4">
          <button onClick={toggleLang} className="px-3 py-1 bg-purple-600 rounded-lg text-white font-bold text-xs">
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground p-2 z-20">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b absolute top-full w-full"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/80 py-2 font-medium border-b">
                  {link.label[lang as 'ar' | 'en']}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}