"use client";

import { motion } from "framer-motion";
import { Box, FileText, Megaphone } from "lucide-react";
import { useLanguage } from './LanguageContext'; 

type Language = 'ar' | 'en';

const DATA: Record<Language, any> = {
  ar: {
    titlePart1: "خططنا",
    titlePart2: "المستقبلية",
    plans: [
      { icon: Box, title: "إعداد دراسات الجدوى الاقتصادية الشاملة للمشاريع الجديدة والتوسعية." },
      { icon: FileText, title: "دراسة وبناء خطط زيادة رأس المال واختيار مصادر التمويل الأنسب (تمويل بنكي، استثمار جريء، إلخ)." },
      { icon: Megaphone, title: "خطة تسويقية لمنتج جديد." }
    ]
  },
  en: {
    titlePart1: "FUTURE",
    titlePart2: "PLANS",
    plans: [
      { icon: Box, title: "A team with decades of accumulated experience across diverse financial and investment sectors." },
      { icon: FileText, title: "The preparation of comprehensive economic feasibility studies for new and expansion projects." },
      { icon: Megaphone, title: "Marketing business plan for a new product." }
    ]
  }
};

export function FuturePlans() {
  const { lang } = useLanguage(); 
  const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  const zigzagVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  });

  return (
    <section id="future-plans" className="py-24 bg-[#030712] text-white relative overflow-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#bfa15f]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center lg:text-start lg:max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
            <span className="text-white">{data.titlePart1} </span>
            <span className="bg-gradient-to-r from-white to-[#bfa15f] bg-clip-text text-transparent">
              {data.titlePart2}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#bfa15f] to-[#e5c378] mt-4 rounded-full opacity-80 mx-auto lg:mx-0" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {data.plans.map((item: any, idx: number) => (
              <motion.div
                key={`${currentLang}-${idx}`}
                variants={zigzagVariants(idx)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#bfa15f]/10 border border-[#bfa15f]/20 flex items-center justify-center text-[#bfa15f] shrink-0 group-hover:bg-[#bfa15f] group-hover:text-black transition-all duration-300">
                  <item.icon size={20} />
                </div>
                <div className="flex flex-col justify-center pt-2">
                  <h4 className="text-base md:text-lg font-medium text-slate-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-[400px]"
            >
              <img 
                src="/images/newe.png" 
                alt="BSS Future Plans" 
                className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(191,161,95,0.3)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}