"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from './LanguageContext'; 

const navLinks = [
  { href: '#home', label: { ar: 'الرئيسية', en: 'Home' } },
  { href: '#about', label: { ar: 'من نحن', en: 'About' } },
  { href: '#services', label: { ar: 'الرؤية', en: 'Vision ' } }, 
  { href: '#financial-plan', label: { ar: 'خطة العمل', en: 'Financial Action Plan' } },
  { href: '#BSSServices', label: { ar: 'خدمات المكتب', en: 'BSS Services' } },
  { href: '#why-us', label: { ar: 'لماذا تختارنا', en: 'WHY CHOOSE US' } },
  { href: '#future-plans', label: { ar: 'الخطة المستقبلية', en: 'FUTURE PLANS' } },
  { href: '#footer', label: { ar: 'اتصل بنا', en: 'Contact' } },
];

// تعديل اللوجو ليعرض الصورة الشفافة بالكامل مع الكورة الذهبية الأصلية
const BrandLogo = memo(({ lang, onClick }: { lang: string, onClick: (e: React.MouseEvent) => void }) => (
  <a 
    href="#home" 
    onClick={onClick} 
    className="z-20 flex flex-col items-center group select-none"
  >
    {/* ربطنا هنا الصورة الشفافة اللي مفيهاش المربع الكحلي والكورة فيها ذهبية صافية */}
    <img 
      src="/images/bssnew.png" 
      alt="BSS Logo" 
      className="h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
      loading="eager"
    />
    <div className="flex flex-col items-center mt-1 text-center">
      {lang === 'ar' ? (
        <span className="text-[13px] md:text-sm font-bold text-[#bfa15f] tracking-wide leading-tight">
          مكتب الحلول والاستشارات المالية
        </span>
      ) : (
        <span className="text-[10px] md:text-[11px] font-semibold text-[#bfa15f] tracking-wider uppercase font-sans">
          Financial Solutions & Consulting Office
        </span>
      )}
    </div>
  </a>
));
BrandLogo.displayName = "BrandLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage(); 

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsMobileMenuOpen(false);
      
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 will-change-[background-color,backdrop-filter] ${
        isScrolled 
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-3" 
          : "bg-transparent py-6"
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center gap-4">
        
        <BrandLogo lang={lang} onClick={(e) => scrollToSection(e, '#home')} />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-8 z-10">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/90 hover:text-[#bfa15f] transition-colors font-bold text-sm"
            >
              {link.label[lang as 'ar' | 'en']}
            </a>
          ))}
          
          <button 
            onClick={toggleLang} 
            className="px-4 py-2 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all active:scale-95"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex justify-end lg:hidden items-center gap-4">
          <button onClick={toggleLang} className="px-3 py-1 bg-purple-600 rounded-lg text-white font-bold text-xs active:scale-95 transition-transform">
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 z-20 active:scale-90 transition-transform">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 absolute top-full w-full overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/80 py-4 font-bold border-b border-white/5 active:bg-white/5 px-2 transition-colors"
                >
                  {link.label[lang as 'ar' | 'en']}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}