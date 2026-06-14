"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useLanguage } from './LanguageContext';
import NextImage from 'next/image';

export function HeroSection() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      window.scrollTo({ 
        top: element.getBoundingClientRect().top + window.pageYOffset - 80, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <section ref={ref} id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]">
      <motion.div 
        layout
        animate={isInView ? { scale: 1.15 } : { scale: 1 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
      >
        <NextImage 
          src="/images/heronew.png" 
          alt="Financial Strategy" 
          fill 
          priority 
          loading="eager"
          className="object-cover object-[65%_center]" 
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
      </motion.div>

      <div className="container relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 tracking-tight leading-[1.1] drop-shadow-2xl px-4"
        >
          {lang === 'ar' ? "مكتب الحلول والاستشارات المالية" : "Strategy Building Solutions"}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 px-8 py-3 border border-[#bfa15f]/50 rounded-full bg-[#030712]/60"
        >
          <p className="text-lg md:text-2xl font-semibold text-[#f5e0a6] tracking-wide">
            {lang === 'ar' ? "بناء الاستراتيجيات للحلول والاستشارات المالية" : "Building Strategies for Financial Consulting"}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex gap-4 mt-10">
          <Button onClick={() => scrollToSection('#services')} size="lg" className="bg-[#bfa15f] text-black font-bold rounded-full px-8 py-6 hover:scale-105 transition-all">
            {lang === 'ar' ? "ابدأ رحلتك" : "Start Journey"}
          </Button>
          <Button onClick={() => scrollToSection('#about')} variant="ghost" className="text-white hover:bg-white/10 rounded-full px-8 py-6">
            <Play className="mr-2 h-4 w-4 fill-current" /> {lang === 'ar' ? "شاهد قصتنا" : "Watch Story"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}