"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from './LanguageContext'; 

// تعريف الـ CONTENT بره عشان نضمن وجودها دائماً
const CONTENT = {
  ar: {
    mainTitle: "خدمات مكتب BSS",
    services: [
      { id: "01", title: "تحليل الميزانية", desc: "دراسة وتحليل القوائم المالية لضمان استقرار الأداء المالي والنمو المستدام." },
      { id: "02", title: "تحويل الكيانات القانونية", desc: "تحويل الشركات ذات المسؤولية المحدودة إلى مساهمة مغلقة باحترافية تامّة." },
      { id: "03", title: "إدارة المشاريع", desc: "إدارة متكاملة للمشاريع الحكومية والخاصة لضمان التنفيذ الفعال ودقة المواعيد." },
      { id: "04", title: "استشارات الإدارة العليا", desc: "توجيه استراتيجي للقيادات لتحسين الكفاءة التشغيلية وصناعة القرار." },
      { id: "05", title: "شهادات الآيزو", desc: "تجهيز وتأهيل المنشآت للحصول على أعلى معايير الجودة العالمية والاعتمادات." },
      { id: "06", title: "حوكمة وإعادة الهيكلة", desc: "بناء نظام حوكمة قوي وإعادة هيكلة الشركات لتعزيز الاستدامة." },
      { id: "07", title: "شهادة المحتوى المحلي", desc: "تجهيز المتطلبات للحصول على اعتماد المحتوى المحلي وتعزيز التنافسية." },
      { id: "08", title: "استشارات سوق المال", desc: "تنظيم الشركات وتأهيلها للطرح في سوق المال العربي والدولي." },
      { id: "09", title: "تحضير التصنيف", desc: "دعم المؤسسات في الحصول على التصنيفات المطلوبة للمشاريع الكبرى." },
      { id: "10", title: "التسويق والتصميم", desc: "صناعة هوية بصرية وحملات تسويقية احترافية تليق بمكانة شركتك." }
    ]
  },
  en: {
    mainTitle: "BSS SERVICES",
    services: [
      { id: "01", title: "Budget Analysis", desc: "In-depth financial statement analysis for stability and sustainable growth." },
      { id: "02", title: "Entity Conversion", desc: "Professional conversion of LLCs to closed joint-stock companies." },
      { id: "03", title: "Project Management", desc: "Integrated gov & private project management for efficient execution." },
      { id: "04", title: "Management Consulting", desc: "Strategic guidance for leaders to enhance efficiency and decision-making." },
      { id: "05", title: "ISO Certification", desc: "Preparing businesses for global quality standards and accreditation." },
      { id: "06", title: "Governance & Restructuring", desc: "Building strong governance and restructuring for sustainability." },
      { id: "07", title: "Local Content Certificate", desc: "Requirements preparation for local content accreditation and competitiveness." },
      { id: "08", title: "Capital Market Consulting", desc: "Organizing companies for regional and global market readiness." },
      { id: "09", title: "Classification Preparation", desc: "Supporting institutions in securing classifications for major projects." },
      { id: "10", title: "Marketing & Design", desc: "Professional visual identity and marketing campaigns." }
    ]
  }
};

export function BSSServices() {
  const { lang } = useLanguage();
  
  // اختيار اللغة مع Fallback آمن
  const data = useMemo(() => {
    return CONTENT[lang as 'ar' | 'en'] || CONTENT.ar;
  }, [lang]);

  // أنميشن الحاوية
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -10 },
    visible: { opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="BSSServices" className="py-24 bg-[#030712] text-white overflow-hidden relative" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-black text-center mb-20 text-white"
        >
          {data.mainTitle}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {data.services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(168, 85, 247, 0.3)" }}
              className="flex items-start gap-5 p-6 rounded-3xl bg-[#0a0c1a] border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 text-xl font-bold border border-purple-500/20 z-10">
                {service.id}
              </div>
              <div className="z-10">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}