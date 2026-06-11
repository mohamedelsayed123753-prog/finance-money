"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from './LanguageContext'; 

// البيانات الخاصة باللغة العربية فقط
const ARABIC_SERVICES = [
  { id: "01", title: "تحليل الميزانية", desc: "دراسة وتحليل القوائم المالية لضمان استقرار الأداء المالي والنمو المستدام." },
  { id: "02", title: "خدمات تحويل الشركة ذات مسؤولية محدودة لمساهمة مغلقة", desc: "خدمات تحويل كيان الشركة ذات مسؤولية محدودة إلى شركة مساهمة مغلقة." },
  { id: "03", title: "إدارة المشاريع الحكومية والخاصة", desc: "إدارة متكاملة للمشاريع الحكومية والخاصة لضمان التنفيذ الفعال ودقة المواعيد." },
  { id: "04", title: "خدمات استشارة الادارة العليا", desc: "تقديم استشارات استراتيجية للإدارة العليا لرفع كفاءة الأعمال." },
  { id: "05", title: "تجهيز شهادات الايزو", desc: "تأهيل وتجهيز المنشآت للحصول على شهادات الآيزو العالمية." },
  { id: "06", title: "خدمات حوكمة الشركات وإعادة هيكلة الشركات", desc: "تقديم خدمات حوكمة الشركات وإعادة الهيكلة لتعزيز الأداء المؤسسي." },
  { id: "07", title: "التجهيز لشهادة محتوى محلي", desc: "تجهيز وتأهيل الشركات للحصول على شهادات المحتوى المحلي." },
  { id: "08", title: "خدمات تنظيم الشركات والمساعدة في تجهيزها لسوق المال", desc: "تقديم خدمات تنظيم الشركات والمساعدة في تهيئتها لمتطلبات سوق المال." },
  { id: "09", title: "تحضير التصنيف", desc: "دعم الشركات في إجراءات تحضير والحصول على التصنيفات المهنية." },
  { id: "10", title: "التسويق والتصميم", desc: "تقديم خدمات متكاملة في التسويق والهوية البصرية والتصميم." }
];

// البيانات الخاصة باللغة الإنجليزية فقط
const ENGLISH_SERVICES = [
  { id: "01", title: "Budget analysis", desc: "Budget analysis" },
  { id: "02", title: "Services for converting a limited liability company entity into a closed joint-stock company.", desc: "Services for converting a limited liability company entity into a closed joint-stock company." },
  { id: "03", title: "MANAGEMENT OF GOVERNMENT AND PRIVATE PROJECTS", desc: "MANAGEMENT OF GOVERNMENT AND PRIVATE PROJECTS" },
  { id: "04", title: "Senior management consulting services", desc: "Senior management consulting services" },
  { id: "05", title: "PREPARING ISO CERTIFICATES", desc: "PREPARING ISO CERTIFICATES" },
  { id: "06", title: "Corporate governance and corporate restructuring services", desc: "Corporate governance and corporate restructuring services" },
  { id: "07", title: "Preparing for a local content certification", desc: "Preparing for a local content certification" },
  { id: "08", title: "Corporate organization services and assistance in preparing companies for the capital market", desc: "Corporate organization services and assistance in preparing companies for the capital market" },
  { id: "09", title: "Preparing the classification", desc: "Preparing the classification" },
  { id: "10", title: "Marketing and design", desc: "Marketing and design" }
];

export function BSSServices() {
  const { lang } = useLanguage();
  
  const services = useMemo(() => {
    return lang === 'en' ? ENGLISH_SERVICES : ARABIC_SERVICES;
  }, [lang]);

  const mainTitle = lang === 'en' ? "BSS SERVICES" : "خدمات مكتب BSS";

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
          className="text-4xl md:text-6xl font-black text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#e5c378] to-[#bfa15f]"
        >
          {mainTitle}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(191, 161, 95, 0.2)" }}
              className="flex items-start gap-5 p-6 rounded-3xl bg-[#0a0f1d] border border-[#bfa15f]/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#bfa15f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#bfa15f]/10 text-[#bfa15f] text-xl font-bold border border-[#bfa15f]/20 z-10">
                {service.id}
              </div>
              <div className="z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#bfa15f] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}