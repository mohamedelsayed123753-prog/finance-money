"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useLanguage } from './LanguageContext';
import Image from 'next/image';

const CONTENT = {
  ar: {
    titlePart1: "مكتب الحلول  ",
    titlePart2: "والاستشارات المالية ",
    desc: "بناء الاستراتيجيات للحلول والاستشارات",
    btn1: "ابدأ رحلتك معنا",
    btn2: "شاهد قصتنا"
  },
  en: {
    titlePart1: "Strategy Building Solutions ",
    titlePart2: "",
    desc: "We provide integrated financial consulting solutions for companies and individuals, with our commitment to the highest quality and transparency standards.",
    btn1: "Start your journey with us",
    btn2: "Watch our story"
  }
};

export function HeroSection() {
  const { lang } = useLanguage();
  const data = CONTENT[lang as 'ar' | 'en'] || CONTENT['ar'];

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      key={lang}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] text-slate-900"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* 1. طبقة الصورة المتحركة (شاملة كل الاتجاهات) */}
      <motion.div 
        animate={{ 
          x: [0, -20, 20, -10, 0], 
          y: [0, 15, -15, 10, 0],
          scale: [1, 1.07, 1.04, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/images/heroImage.png" 
          alt="Background"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#030712]/40" />
      </motion.div>

      {/* 2. الخلفية الرقمية الممتازة */}
      <div className="absolute inset-0 z-10 will-change-transform">
        {/* Base gradient with dark tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0a1928] to-[#1a0f2e]" />
        
        {/* Animated flowing shapes inspired by logo */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #bfa15f 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, #7c3aed 0%, transparent 40%)
            `,
          }}
        />
        
        {/* Geometric grid pattern with golden accent */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #bfa15f 1px, transparent 1px), linear-gradient(to bottom, #bfa15f 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Premium glow zones */}
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#bfa15f]/8 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[5%] right-[15%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[140px] pointer-events-none" />
      </div>

      {/* 3. المحتوى */}
      <div className="container mx-auto px-6 relative z-20 pt-20 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl">
            {data.titlePart1}<span className="text-purple-500">{data.titlePart2}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white font-medium leading-relaxed max-w-3xl bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
        >
          {data.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2"
        >
          <Button 
            size="lg" 
            onClick={() => handleSmoothScroll('services')}
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-bold shadow-lg shadow-blue-600/20"
          >
            {data.btn1} {lang === 'ar' ? <ArrowLeft className="mr-2 h-5 w-5" /> : <ArrowLeft className="ml-2 h-5 w-5" />}
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => handleSmoothScroll('about')}
            className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
          >
            {lang === 'ar' ? <Play className="ml-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />} {data.btn2}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
