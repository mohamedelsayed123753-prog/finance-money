"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from './LanguageContext'; 

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
    // سرعة استجابة فورية للراوتنج
    setTimeout(() => {
      const element = document.getElementById(id.replace('#', ''));
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ 
          top: offsetPosition, 
          behavior: "smooth" 
        });
      }
    }, 50); 
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-transparent transition-all duration-300" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* اللوجو */}
        <button onClick={() => scrollToSection('#home')} className="flex items-center z-[1001]">
          <img src="/images/bssnew.png" alt="BSS Logo" className="h-10 w-auto object-contain" />
        </button>

        {/* روابط الـ Desktop */}
        <div className="hidden lg:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <button key={link.href} onClick={() => scrollToSection(link.href)} 
              className="text-white hover:text-[#bfa15f] transition-all duration-300 font-bold text-xs uppercase tracking-widest drop-shadow-lg">
              {link.label[lang as 'ar' | 'en']}
            </button>
          ))}
        </div>

        {/* زر اللغة Desktop */}
        <button onClick={toggleLang} className="hidden lg:block border border-[#bfa15f] text-[#bfa15f] hover:bg-[#bfa15f] hover:text-black transition-all px-6 py-1.5 rounded-full font-bold text-xs">
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>

        {/* زر الموبايل */}
        <button 
          className="lg:hidden text-[#bfa15f] w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[1001]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span className="w-6 h-0.5 bg-[#bfa15f] block" animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} />
          <motion.span className="w-6 h-0.5 bg-[#bfa15f] block" animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span className="w-6 h-0.5 bg-[#bfa15f] block" animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#030712] z-[999] flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollToSection(link.href)} 
                className="text-2xl text-white hover:text-[#bfa15f] transition-colors font-bold tracking-tight">
                {link.label[lang as 'ar' | 'en']}
              </button>
            ))}
            
            <button onClick={toggleLang} className="mt-8 border-2 border-[#bfa15f] text-[#bfa15f] px-10 py-3 rounded-full font-bold text-lg">
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}