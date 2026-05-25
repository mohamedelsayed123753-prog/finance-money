"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useLanguage } from './LanguageContext';

const CONTENT = {
  ar: {
    titlePart1: "مؤسسة بناء الاستراتيجيات ",
    titlePart2: "للحلول",
    desc: "نقدم حلولاً استشارية مالية متكاملة للشركات والأفراد، مع التزامنا بأعلى معايير الجودة والشفافية.",
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

  // دالة الانتقال السلس عشان ننهي التهنيجة نهائياً
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
      {/* الخلفية الرقمية (زي ما هي بالظبط) */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#030712] to-[#0f172a]" />
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[130px] pointer-events-none" />
      </div>

      {/* المحتوى */}
      <div className="container mx-auto px-6 relative z-20 pt-20 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-lg">
            {data.titlePart1}<span className="text-purple-500">{data.titlePart2}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed max-w-3xl bg-slate-950/50 backdrop-blur-md p-6 rounded-2xl border border-white/10"
        >
          {data.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2"
        >
          {/* الأزرار المحدثة بدون التهنيجة */}
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
            className="border-purple-500/50 text-purple-400 hover:bg-purple-950/40 px-8 py-6 text-lg font-bold"
          >
            {lang === 'ar' ? <Play className="ml-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />} {data.btn2}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}