"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Banknote, BarChart3, Target, Rocket, LucideIcon } from "lucide-react";
import { useLanguage } from '../LanguageContext'; 

// فصل المحتوى العربي
const ARABIC_SERVICES = {
  title: "خدماتنا الرئيسية للشركات والمؤسسات",
  items: [
    { icon: Banknote, title: "حوكمة البيانات", points: ["تعزيز الحوكمة", "تحليل البيانات المالية", "خدمة دراسة الجدوى"] },
    { icon: BarChart3, title: "الأداء المالي", points: ["خدمة إعداد تقارير المخاطرة", "تحليل الأداء المالي للشركات", "إعادة هيكلة رأس مال الشركات"] },
    { icon: Target, title: "تأسيس واستشارات", points: ["خدمة تأسيس الشركات والمؤسسات", "استشارات مالية وتمويلية", "تقديم حلول للتعثر وانخفاض الربحية"] },
    { icon: Rocket, title: "تطوير الأداء", points: ["إعداد نظام تطوير الأداء", "دراسة الجدارة الائتمانية", "دراسة الوضع الائتماني وطبيعة النشاط"] }
  ]
};

// فصل المحتوى الإنجليزي
const ENGLISH_SERVICES = {
  title: "OUR MAIN SERVICES",
  items: [
    { icon: Banknote, title: "Data Governance", points: ["Strengthening governance", "Financial data analysis", "Feasibility studies"] },
    { icon: BarChart3, title: "Financial Performance", points: ["Risk reporting service", "Performance analysis", "Capital restructuring"] },
    { icon: Target, title: "Formation & Consulting", points: ["Company formation", "Funding consulting", "Profitability solutions"] },
    { icon: Rocket, title: "Performance Development", points: ["Development systems", "Creditworthiness assessment", "Business expansion"] }
  ]
};

// أنيميشن سريع وعصبي (Snappy) - تم تسريعه
const itemVariants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: { 
    rotateX: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 180, damping: 20, duration: 0.5 } 
  }
};

export function MainServices() {
  const { lang } = useLanguage();
  
  // تحسين الأداء
  const data = useMemo(() => (lang === 'ar' ? ARABIC_SERVICES : ENGLISH_SERVICES), [lang]);

  return (
    <section className="py-24 bg-[#030712] text-white overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        
        {/* العنوان */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c378] via-[#bfa15f] to-[#a38038]">
            {data.title}
          </span>
          <div className="w-24 h-1 bg-[#bfa15f] mx-auto mt-6 rounded-full" />
        </motion.h2>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* كروت الخدمات */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000">
            {data.items.map((s, idx) => (
              <motion.div 
                key={`${lang}-${idx}`} 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" } 
                }}
                className="p-8 rounded-2xl bg-[#0a0f1d] border border-[#bfa15f]/20 hover:border-[#bfa15f]/60 transition-all shadow-2xl hover:shadow-[0_0_30px_rgba(191,161,95,0.15)] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#bfa15f]/10 flex items-center justify-center mb-6 text-[#bfa15f]">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">{s.title}</h3>
                <ul className="space-y-3">
                  {s.points.map((p, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#bfa15f] rounded-full shrink-0" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* الصورة الجانبية */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[500px] w-full rounded-3xl overflow-hidden border border-[#bfa15f]/30"
          >
            <Image src="/images/n.png" alt="Services" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}