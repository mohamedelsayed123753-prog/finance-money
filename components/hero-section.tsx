"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] text-slate-900"
    >
      {/* 🏙️ الخلفية الرقمية المتكاملة (بدون استخدام أي صور خارجية) */}
      <div className="absolute inset-0 z-0">
        
        {/* 1. التدرج اللوني الأساسي (Fintech Deep Blue to Dark Slate) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#030712] to-[#0f172a]" />

        {/* 2. الـ Cyber Grid (الشبكة الرقمية المنتظمة المنتشرة في لقطة الشاشة) */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* 3. تأثير الدوائر الرقمية المتداخلة (الـ Tech Rings خلف اللوجو والنص) */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full border border-blue-500/10 flex items-center justify-center pointer-events-none select-none">
          <div className="w-[450px] h-[450px] rounded-full border border-sky-500/5 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-purple-500/10" />
          </div>
        </div>

        {/* 4. الإضاءة والـ Glow الأزرق المنبعث من المنتصف (توهج التابلت) */}
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        
        {/* 5. التوهج البنفسجي الجانبي المتناسق مع كلمة "للحلول" واللوجو */}
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[130px] pointer-events-none" />

        {/* 6. تأثير الـ Particles المضيئة الناعمة في الخلفية */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-sky-400 opacity-40 blur-[1px]" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-purple-400 opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-blue-400 opacity-50 blur-[2px]" />
      </div>

      {/* Content Container - المحتوى منسق ومعزز بالكامل */}
      <div className="container mx-auto px-6 relative z-20 pt-20 w-full flex flex-col items-center justify-center text-center gap-8">
        
        {/* إسم وعنوان المؤسسة الفخم */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            مؤسسة بناء الاستراتيجيات <span className="text-purple-500 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">للحلول</span>
          </h1>
        </motion.div>

        {/* الوصف المالي الأنيق بخلفية زجاجية معتمة فائقة النقاوة (Glassmorphism) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed max-w-3xl bg-slate-950/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 text-center"
        >
          نقدم حلولاً استشارية مالية متكاملة للشركات والأفراد، مع التزامنا بأعلى معايير الجودة والشفافية.
        </motion.p>

        {/* CTA Buttons الزراير المنيرة المتناسقة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2"
        >
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-bold group shadow-lg shadow-blue-600/20 w-full sm:w-auto"
          >
            ابدأ رحلتك معنا
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500/50 text-purple-400 hover:bg-purple-950/40 px-8 py-6 text-lg font-bold group shadow-sm backdrop-blur-sm w-full sm:w-auto"
          >
            <Play className="ml-2 h-5 w-5 text-purple-400" />
            شاهد قصتنا
          </Button>
        </motion.div>
        
      </div>

      {/* 🖱️ مؤشر السكرول ونقاط التصفح الـ Pagination في الأسفل تماماً */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        
        {/* شكل الماوس / السكرول الحركي */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 bg-slate-950/40 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-blue-500 rounded-full"
          />
        </motion.div>

        {/* نقاط التصفح الـ Pagination Dots الراقية */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          {/* النقطة النشطة المضيئة */}
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-blue-500 shadow-md shadow-blue-500/50" 
          />
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
        </div>

      </div>
    </section>
  );
}