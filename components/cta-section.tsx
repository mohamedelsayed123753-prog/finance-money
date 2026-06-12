"use client";

import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { TrendingUp, RefreshCw, Activity } from "lucide-react";
import { useLanguage } from './LanguageContext';

const ARABIC_CONTENT = {
  titleMain: "الاستشارات المالية",
  titleSub: "والاستراتيجية",
  services: [
    { id: "s1", title: "تخطيط مالي", desc: "إعداد الخطط المالية طويلة وقصيرة الأجل وتطوير الميزانيات التقديرية.", icon: TrendingUp },
    { id: "s2", title: "إعادة هيكلة", desc: "إعادة الهيكلة المالية للشركات لرفع كفاءة التشغيل وتقليص النفقات الفائضة.", icon: RefreshCw },
    { id: "s3", title: "تحليل الأداء", desc: "تحليل الأداء المالي وتقديم تقارير دورية لكشف نقاط القوة وفرص التحسين.", icon: Activity },
  ]
};

const ENGLISH_CONTENT = {
  titleMain: "FINANCIAL",
  titleSub: "STRATEGY",
  services: [
    { id: "s1", title: "Financial Planning", desc: "Preparing long-term and short-term financial plans and developing estimated budgets.", icon: TrendingUp },
    { id: "s2", title: "Restructuring", desc: "Financial restructuring for companies to enhance operational efficiency and reduce excess expenses.", icon: RefreshCw },
    { id: "s3", title: "Performance Analysis", desc: "Analyzing financial performance and providing periodic reports to identify strengths and improvement opportunities.", icon: Activity },
  ]
};

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { lang } = useLanguage();
  
  const data = useMemo(() => (lang === 'ar' ? ARABIC_CONTENT : ENGLISH_CONTENT), [lang]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotateY: 15 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateX: 45, y: 30 },
    visible: { opacity: 1, rotateX: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section id="consulting" ref={ref} className="py-24 relative bg-[#030712] overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
              {data.titleMain}{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bfa15f] to-[#f5e0a6]">
              {data.titleSub}
            </span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div variants={imageVariants} className="lg:col-span-5 relative h-[400px] w-full rounded-3xl overflow-hidden border border-[#bfa15f]/20">
            <Image src="/images/sha.png" alt="Consulting" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent/50" />
          </motion.div>

          <div className="lg:col-span-7 grid gap-4">
            {data.services.map((item) => (
              <motion.div key={`${lang}-${item.id}`} variants={itemVariants} className="flex items-start gap-4 p-6 rounded-2xl bg-[#0a0f1d] border border-[#bfa15f]/10 hover:border-[#bfa15f]/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#bfa15f]/10 flex items-center justify-center text-[#bfa15f] shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#bfa15f] transition-colors">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}