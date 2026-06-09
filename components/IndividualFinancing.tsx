"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from './LanguageContext'; 

const CONTENT = {
  ar: {
    title: "تمويل الأفراد",
    card1Title: "دراسة جدوى التمويل العقاري والشخصي وخطط الادخار والاستثمار",
    card1Desc: "نساعدك في تحليل وتقييم قدراتك المالية واختيار أفضل الحلول التمويلية المتاحة لتملك العقار أو الحصول على تمويل شخصي مع بناء خطة استثمارية متوازنة.",
    card2Title: "ترتيب تمويل للأفراد العاطلين عن العمل",
    card2Desc: "تقديم استشارات وحلول متكاملة لترتيب وتسهيل الحصول على الدعم والتمويل المناسب للفئات التي لا رأس مال لها أو تبحث عن بدء مشاريعها الخاصة."
  },
  en: {
    title: "INDIVIDUAL FINANCING",
    card1Title: "FEASIBILITY STUDY FOR REAL ESTATE AND PERSONAL FINANCING, SAVINGS AND INVESTMENT PLANS",
    card1Desc: "We help you analyze and assess your financial capabilities, choose the best available financing solutions for real estate or personal loans, and build a balanced investment plan.",
    card2Title: "ARRANGING FINANCING FOR UNEMPLOYED INDIVIDUALS",
    card2Desc: "Providing integrated consultations and solutions to arrange and facilitate access to appropriate support and financing for groups without capital or looking to start their own businesses."
  }
};

export function IndividualFinancing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const data = (lang === 'ar' || lang === 'en') ? CONTENT[lang] : CONTENT.ar;

  const coinSpinVariants = {
    hidden: { opacity: 0, rotateY: 720, scale: 0.3 },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      scale: 1,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, filter: "blur(5px)", y: 10 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { delay: 1.2, duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="IndividualFinancing" className="py-20 bg-[#030712] text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white tracking-tight">
          {data.title}
        </h2>

        {/* الحاويات متشابكة بتنسيق ثابت ومتناظر */}
        <div className="flex flex-row items-center justify-center -space-x-16">
          
          {/* الدائرة الزرقاء (في الخلف) */}
          <motion.div
            variants={coinSpinVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-[380px] h-[380px] rounded-full border-2 border-blue-500/30 bg-gradient-to-b from-slate-900/40 to-blue-950/10 p-8 flex flex-col justify-center items-center text-center z-10"
          >
            <motion.div variants={textRevealVariants} className="flex flex-col items-center justify-center h-full">
              <h3 className="text-sm font-bold text-blue-200 mb-4 leading-snug w-[220px]">
                {data.card2Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed w-[240px]">
                {data.card2Desc}
              </p>
            </motion.div>
          </motion.div>

          {/* الدائرة الأرجوانية (في المقدمة - تداخل) */}
          <motion.div
            variants={coinSpinVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-[380px] h-[380px] rounded-full border-2 border-purple-500/40 bg-gradient-to-b from-slate-900/60 to-purple-950/20 p-8 flex flex-col justify-center items-center text-center z-20 shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            <motion.div variants={textRevealVariants} className="flex flex-col items-center justify-center h-full">
              <h3 className="text-sm font-bold text-white mb-4 leading-snug w-[220px]">
                {data.card1Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed w-[240px]">
                {data.card1Desc}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}