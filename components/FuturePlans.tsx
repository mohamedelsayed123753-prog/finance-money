"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Box, FileEdit, Megaphone } from "lucide-react";
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    title: "خططنا المستقبلية",
    plans: [
      { icon: Box, text: "إعداد دراسات الجدوى الاقتصادية الشاملة للمشاريع الجديدة والتوسعية." },
      { icon: FileEdit, text: "دراسة وبناء خطط زيادة رأس المال واختيار مصادر التمويل الأنسب (تمويل بنكي، استثمار جريء، إلخ)." },
      { icon: Megaphone, text: "خطة تسويقية متكاملة لإطلاق وتطوير المنتجات الجديدة." }
    ]
  },
  en: {
    title: "OUR FUTURE PLANS",
    plans: [
      { icon: Box, text: "Preparing comprehensive economic feasibility studies for new and expansion projects." },
      { icon: FileEdit, text: "Studying and building capital increase plans and selecting the most appropriate financing sources (bank loans, venture capital, etc.)." },
      { icon: Megaphone, text: "An integrated marketing plan for launching and developing new products." }
    ]
  }
};

export function FuturePlans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const data = DATA[lang as 'ar' | 'en'];

  return (
    <section id="plans" className="py-24 bg-[#030712] text-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* النص والخدمات */}
          <div className="flex-1 text-right lg:text-start order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black mb-3 bg-gradient-to-l from-purple-500 to-white bg-clip-text text-transparent leading-tight">
              {data.title}
            </h2>
            <div className={`w-24 h-1 bg-purple-500 mb-10 ${lang === 'ar' ? 'mr-0' : 'ml-0'}`} />
            
            <div className="space-y-10">
              {data.plans.map((plan, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className={`flex items-start gap-4 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}
                >
                  {lang === 'ar' ? (
                    <>
                      <p className="text-lg md:text-xl text-slate-300 text-right leading-relaxed max-w-2xl">{plan.text}</p>
                      <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 shrink-0 mt-1"><plan.icon size={26} /></div>
                    </>
                  ) : (
                    <>
                      <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 shrink-0 mt-1"><plan.icon size={26} /></div>
                      <p className="text-lg md:text-xl text-slate-300 text-left leading-relaxed max-w-2xl">{plan.text}</p>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* الصورة - تغطي مساحة السكشن كاملة بحركة الطفو */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full h-[400px] lg:h-[500px] overflow-hidden rounded-3xl relative order-1 lg:order-2"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image 
                src="images/futurePlan.png" 
                alt="Future Plans" 
                fill
                className="object-cover drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}