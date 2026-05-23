"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#stats", label: "إنجازاتنا" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* اللوجو (الحتة اللي صلحناها) */}
        <motion.a
          href="#home"
          className="block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* هيدخل هنا يدور على اللوجو ويجيبه علطول بطول وعرض مناسبين للـ Navbar */}
          {/* شوف العنوان بقى مختصر وسهل إزاي! */}
          <img
            src="/images/BSS-no-bg.png"
            alt="BSS Logo"
            // {/* الأمر mix-blend-color-dodge ده هيطير أي خلفية غامقة أو ملونة ويسيب الدهبي منور */}
            className="h-15  w-auto  "
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
            احجز استشارة
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-4"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2 text-lg"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                احجز استشارة
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
