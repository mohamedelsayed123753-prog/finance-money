"use client";

import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { TrendingUp, RefreshCw, Activity } from "lucide-react";
import { useLanguage } from './LanguageContext';

// 1. التعريفات يجب أن تكون هنا في الأعلى (خارج دالة الـ Component)
const ARABIC_CONTENT = {
  titleMain: "الاستشارات المالية",
  titleSub: "والاستراتيجية",
  badge: "التميز التشغيلي",
  services: [
    { id: "s1", title: "إعداد الخطط المالية", desc: "إعداد الخطط المالية طويلة وقصيرة الأجل وتطوير الميزانيات التقديرية.", icon: TrendingUp },
    { id: "s2", title: "إعادة الهيكلة المالية", desc: "إعادة الهيكلة المالية للشركات لرفع كفاءة التشغيل وتقليص النفقات الفائضة.", icon: RefreshCw },
    { id: "s3", title: "تحليل الأداء المالي", desc: "تحليل الأداء المالي وتقديم تقارير دورية لكشف نقاط القوة وفرص التحسين.", icon: Activity },
  ]
};

const ENGLISH_CONTENT = {
  titleMain: "FINANCIAL & STRATEGIC",
  titleSub: "CONSULTING",
  badge: "OPERATIONAL EXCELLENCE",
  services: [
    { id: "s1", title: "Financial Planning", desc: "Preparing long-term and short-term financial plans and developing estimated budgets.", icon: TrendingUp },
    { id: "s2", title: "Financial Restructuring", desc: "Financial restructuring for companies to enhance operational efficiency and reduce excess expenses.", icon: RefreshCw },
    { id: "s3", title: "Financial Performance Analysis", desc: "Analyzing financial performance and providing periodic reports to identify strengths and improvement opportunities.", icon: Activity },
  ]
};

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { lang } = useLanguage();
  
  // 2. الآن `useMemo` ستجد البيانات معرفة ومتاحة بشكل صحيح
  const data = useMemo(() => (lang === 'ar' ? ARABIC_CONTENT : ENGLISH_CONTENT), [lang]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotateY: 15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateX: 45, y: 30 },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  return (
    <section id="consulting" ref={ref} className="py-24 relative bg-[#030712] overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <div className="inline-block px-8 py-2 mb-6 text-sm font-bold tracking-[0.2em] text-[#bfa15f] uppercase bg-[#bfa15f]/10 rounded-full border border-[#bfa15f]/30">
            {data.badge}
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            {data.titleMain} <span className="text-[#bfa15f]">{data.titleSub}</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          <motion.div 
            variants={imageVariants}
            className="lg:col-span-5 relative h-[450px] w-full rounded-3xl overflow-hidden border border-[#bfa15f]/20"
          >
            <Image src="/images/sha.png" alt="Consulting" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent/50" />
          </motion.div>

          <div className="lg:col-span-7 grid gap-4">
            {data.services.map((item) => (
              <motion.div
                key={`${lang}-${item.id}`}
                variants={itemVariants}
                className="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0f1d] border border-[#bfa15f]/10 hover:border-[#bfa15f]/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#bfa15f]/10 flex items-center justify-center text-[#bfa15f]">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#bfa15f] transition-colors">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}