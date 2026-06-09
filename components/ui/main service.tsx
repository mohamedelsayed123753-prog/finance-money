"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Banknote, BarChart3, Target, Rocket } from "lucide-react";
import { useLanguage } from '../LanguageContext'; 

const CONTENT = {
  ar: {
    title: "خدماتنا الرئيسية للشركات والمؤسسات",
    services: [
      { icon: Banknote, title: "حوكمة البيانات", points: ["تعزيز الحوكمة", "تحليل البيانات المالية", "دراسات الجدوى"] },
      { icon: BarChart3, title: "الأداء المالي", points: ["تقارير المخاطرة", "تحليل الأداء المالي", "إعادة الهيكلة المالية"] },
      { icon: Target, title: "تأسيس واستشارات", points: ["تأسيس الشركات", "استشارات التمويل", "حلول التعثر والربحية"] },
      { icon: Rocket, title: "تطوير الأداء", points: ["نظم تطوير الأداء", "الجدارة الائتمانية", "توسيع نطاق الأعمال"] }
    ]
  },
  en: {
    title: "OUR MAIN SERVICES",
    services: [
      { icon: Banknote, title: "Data Governance", points: ["Strengthening governance", "Financial data analysis", "Feasibility studies"] },
      { icon: BarChart3, title: "Financial Performance", points: ["Risk reporting service", "Performance analysis", "Capital restructuring"] },
      { icon: Target, title: "Formation & Consulting", points: ["Company formation", "Funding consulting", "Profitability solutions"] },
      { icon: Rocket, title: "Performance Development", points: ["Development systems", "Creditworthiness assessment", "Business expansion"] }
    ]
  }
};

// إعدادات الحاوية السينمائية
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
};

export function MainServices() {
  const { lang } = useLanguage();
  const data = CONTENT[lang as 'ar' | 'en'] || CONTENT['ar'];

  return (
    <section className="py-20 bg-[#030712] text-white overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        
        {/* العنوان */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-4xl md:text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600"
        >
          {data.title}
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* كروت الخدمات - تظهر بالتتابع */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {data.services.map((s, idx) => (
              <motion.div key={idx} variants={itemVariants} className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-purple-500/50 transition-colors shadow-xl">
                <s.icon className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-white">{s.title}</h3>
                <ul className="space-y-2">
                  {s.points.map((p, i) => <li key={i} className="text-slate-400 text-sm">{p}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* الصورة - حركة ظهور سينمائية */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative h-[500px] w-full rounded-3xl overflow-hidden border-2 border-purple-500/20 shadow-2xl"
          >
            <Image src="/images/n.png" alt="Services" fill className="object-cover" priority />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}