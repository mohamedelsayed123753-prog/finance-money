"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Banknote, BarChart3, Target, Rocket } from "lucide-react";
import { useLanguage } from '../LanguageContext'; 

const SERVICES_DATA = {
  ar: {
    title: "خدماتنا الرئيسية للشركات والمؤسسات",
    items: [
      { icon: Banknote, title: "الخدمات التأسيسية", points: ["تعزيز الحوكمة", "تحليل البيانات المالية", "خدمة دراسة الجدوى", "خدمة إعداد تقارير المخاطرة"] },
      { icon: BarChart3, title: "إعادة الهيكلة والأداء", points: ["إعادة هيكلة رأس مال الشركات (لأغراض الاستثمار والتمويل والاستحواذ)", "تحليل الأداء المالي للشركات والمؤسسات والأعمال"] },
      { icon: Target, title: "التأسيس والتمويل", isComplex: true, mainPoint: "خدمة تأسيس الشركات والمؤسسات واستشارات مالية وتمويلية:", subPoints: ["تحسين الأداء المالي للعميل الحالي والمستقبلي", "تحليل المخاطر الائتمانية الحالية والمستقبلية", "تقديم حلول للتعثر وانخفاض الربحية", "تقديم خطط مستقبلية للعميل لضمان الحصول على التمويل"] },
      { icon: Rocket, title: "تطوير الأداء والائتمان", points: ["إعداد نظام تطوير الأداء للمؤسسات والشركات (الأداء المالي والائتماني)", "دراسة الجدارة الائتمانية للتمويل سواء للمقترض أو المقرض", "دراسة الوضع الائتماني وطبيعة النشاط لغرض التوسع في النشاط"] }
    ]
  },
  en: {
    title: "OUR MAIN SERVICES",
    items: [
      { icon: Banknote, title: "Foundational Services", points: ["Strengthening governance", "Financial data analysis", "FEASIBILITY STUDY SERVICE", "Risk reporting service"] },
      { icon: BarChart3, title: "Restructuring & Performance", points: ["Corporate capital restructuring (for investment, financing, and acquisition purposes)", "Financial performance analysis of companies, institutions, and businesses"] },
      { icon: Target, title: "Formation & Funding", isComplex: true, mainPoint: "Company and Institution Formation Services & Financial and Funding Consulting:", subPoints: ["Improving the financial performance of current and future clients", "Analyzing current and future credit risks", "Providing solutions for default and low profitability", "Preparing future plans for clients to ensure access to financing"] },
      { icon: Rocket, title: "Performance & Credit Development", points: ["Numbers of performance development systems for institutions and companies (financial and credit performance)", "Creditworthiness assessment for financing, whether for the borrower or the lender.", "Studying the credit situation and the nature of the business for the purpose of expanding the business."] }
    ]
  }
};

export function MainServices() {
  const { lang } = useLanguage();
  const currentLang = lang || 'ar';
  
  const data = useMemo(() => SERVICES_DATA[currentLang === 'ar' ? 'ar' : 'en'], [currentLang]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.5 } 
    }
  };

  return (
    <section className="py-24 bg-[#030712] text-white overflow-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl md:text-5xl font-black text-center mb-20">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5c378] via-[#bfa15f] to-[#a38038]">
            {data.title}
          </span>
        </motion.h2>
        
        <motion.div 
          key={currentLang}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-12 gap-8 items-stretch"
        >
          <motion.div 
            variants={{
                hidden: { opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", rotate: -2 },
                visible: { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", rotate: 0 }
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative w-full min-h-[500px] rounded-3xl overflow-hidden border border-[#bfa15f]/30"
          >
            <Image src="/images/n.png" alt="Services" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.items.map((s: any, idx: number) => (
              <motion.div 
                key={`${currentLang}-${idx}`}
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="p-6 rounded-2xl bg-[#0a0f1d] border border-[#bfa15f]/20 hover:border-[#bfa15f]/60 transition-all flex flex-col justify-start shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#bfa15f]/10 flex items-center justify-center mb-4 text-[#bfa15f]">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase">{s.title}</h3>
                <ul className="space-y-3">
                  {s.isComplex && <li className="text-slate-200 font-medium text-base leading-relaxed">{s.mainPoint}</li>}
                  {(s.isComplex ? s.subPoints : s.points)?.map((item: string, i: number) => (
                    <li key={i} className="text-slate-200 text-base flex items-start gap-2">
                      <span className="text-[#bfa15f] font-bold shrink-0">
                         {s.isComplex ? (currentLang === 'ar' ? (['٠','١','٢','٣','٤'][i+1]) + "." : `${i + 1}.`) : "•"}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}