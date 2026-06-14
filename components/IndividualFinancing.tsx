"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from './LanguageContext'; 
import { ShieldCheck, Target } from "lucide-react";

const ARABIC_CONTENT = {
  title: "تمويل الأفراد",
  cards: [
    { id: "c1", title: "دراسة جدوى التمويل العقاري والشخصي وخطط الادخار والاستثمار", icon: Target },
    { id: "c2", title: "ترتيب تمويل للأفراد العاطلين عن العمل", icon: ShieldCheck }
  ]
};

const ENGLISH_CONTENT = {
  title: "INDIVIDUAL FINANCING",
  cards: [
    { id: "c1", title: "FEASIBILITY STUDY FOR REAL ESTATE AND PERSONAL FINANCING, SAVINGS AND INVESTMENT PLANS", icon: Target },
    { id: "c2", title: "ARRANGING FINANCING FOR UNEMPLOYED INDIVIDUALS", icon: ShieldCheck }
  ]
};

export function IndividualFinancing() {
  const { lang } = useLanguage();
  const data = useMemo(() => (lang === 'ar' ? ARABIC_CONTENT : ENGLISH_CONTENT), [lang]);

  const coinVariants = {
    hidden: { rotateY: 180, opacity: 0 },
    visible: { 
      rotateY: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="IndividualFinancing" className="py-20 bg-[#030712] text-white w-full" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        
       
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#e5c378] to-[#bfa15f]">
          {data.title}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full [perspective:1000px]">
          {data.cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={`${lang}-${card.id}`}
                variants={coinVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
           
                className="w-[280px] h-[280px] rounded-full border-2 border-[#bfa15f] bg-[#0a0f1d] flex flex-col justify-center items-center text-center p-8 shadow-[0_0_20px_rgba(191,161,95,0.2)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Icon size={40} className="text-[#bfa15f] mb-4 flex-shrink-0" />
                
                <h3 className="text-sm md:text-base font-bold text-white leading-relaxed tracking-wide">
                  {card.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}