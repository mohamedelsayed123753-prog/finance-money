"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { TrendingUp, RefreshCw, Activity } from "lucide-react";
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    titleMain: "الاستشارات المالية",
    titleSub: "والاستراتيجية",
    badge: "الاستراتيجية التسويقية",
    services: [
      { id: "s1", title: "إعداد الخطط المالية", desc: "تطوير الخطط المالية طويلة وقصيرة الأجل.", icon: TrendingUp },
      { id: "s2", title: "إعادة الهيكلة المالية", desc: "رفع كفاءة التشغيل وتقليل النفقات الفائضة.", icon: RefreshCw },
      { id: "s3", title: "تحليل الأداء المالي", desc: "تقديم تقارير دورية لكشف نقاط القوة وفرص التحسين.", icon: Activity },
    ]
  },
  en: {
    titleMain: "FINANCIAL & STRATEGIC",
    titleSub: "CONSULTING",
    badge: "MARKETING STRATEGY",
    services: [
      { id: "s1", title: "Financial Planning", desc: "Developing long-term and short-term financial plans.", icon: TrendingUp },
      { id: "s2", title: "Financial Restructuring", desc: "Enhancing operational efficiency and reducing excess expenses.", icon: RefreshCw },
      { id: "s3", title: "Financial Performance Analysis", desc: "Providing periodic reports to identify strengths and improvement opportunities.", icon: Activity },
    ]
  }
};

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { lang } = useLanguage();
  
  const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  return (
    <section 
      id="marketing-strategy" 
      ref={ref}
      className="min-h-[85vh] flex flex-col justify-center py-20 relative overflow-hidden bg-[#030712] border-b border-white/5" 
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Premium dynamic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rich gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1320] via-[#030712] to-[#1f0f30]" />
        
        {/* Flowing animated elements */}
        <motion.div
          animate={{ 
            rotate: [0, -180, -360],
            x: [0, 30, -30, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 35% 45%, #bfa15f 0%, transparent 50%),
              radial-gradient(circle at 65% 55%, #7c3aed 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Golden accent grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #bfa15f 1px, transparent 1px), linear-gradient(to bottom, #bfa15f 1px, transparent 1px)`,
            backgroundSize: '65px 65px'
          }}
        />
        
        {/* Strategic glow placement */}
        <div className="absolute top-[15%] left-[5%] w-[700px] h-[700px] rounded-full bg-[#bfa15f]/12 blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* العنوان الرئيسي والوسام */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 mb-6 text-sm md:text-base font-black tracking-[0.2em] text-purple-300 uppercase bg-purple-500/10 rounded-full border border-purple-500/30 shadow-lg">
            {data.badge}
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight uppercase">
            {data.titleMain} <span className="text-purple-500">{data.titleSub}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* الصورة */}
          <motion.div 
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative h-[350px] lg:h-[450px] w-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            <Image 
              src="/images/workGod.png" 
              alt="Financial Consulting" 
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* الخدمات (بتصميم مضغوط) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-3">
            {data.services.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: currentLang === 'ar' ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-purple-400 border border-purple-500/20 shrink-0 group-hover:bg-purple-500/10">
                  <item.icon className="w-5 h-5" />
                </div>
                
                {/* العنوان والوصف بجانب بعضهما */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 overflow-hidden">
                  <h4 className="text-base font-bold text-white shrink-0 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h4>
                  <span className="hidden sm:block text-slate-700">|</span>
                  <p className="text-slate-400 text-sm truncate">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
