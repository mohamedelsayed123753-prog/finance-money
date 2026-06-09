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
      { icon: FileText, title: "دراسة وبناء خطط زيادة رأس المال واختيار مصادر التمويل الأنسب." },
      { icon: Megaphone, title: "خطة تسويقية لمنتج جديد." }
    ]
  },
  en: {
    titlePart1: "FUTURE",
    titlePart2: "PLANS",
    plans: [
      { icon: Box, title: "Preparation of comprehensive economic feasibility studies for new and expansion projects." },
      { icon: FileText, title: "Building capital increase plans and selecting the most appropriate funding sources." },
      { icon: Megaphone, title: "Marketing business plan for a new product." }
    ]
  }
};

export function FuturePlans() {
  const { lang } = useLanguage(); 
  const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  return (
    <section 
      id="future-plans" 
      className="py-24 bg-[#02040a] text-white relative overflow-hidden" 
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center lg:text-start lg:max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
            <span className="text-white">{data.titlePart1} </span>
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
              {data.titlePart2}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mt-4 rounded-full opacity-80 mx-auto lg:mx-0" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {data.plans.map((item: any, idx: number) => (
              <motion.div
                key={`${currentLang}-${idx}`}
                // أنيميشن "الصعود" يضمن ظهوراً موحداً في كل اللغات
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, duration: 0.7, ease: "easeOut" }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-all duration-300">
                  <item.icon size={20} />
                </div>
                <div className="flex flex-col justify-center pt-2">
                  <h4 className="text-base md:text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              key={`img-${currentLang}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[400px]"
            >
              <img 
                src="/images/futurePlan.png" 
                alt="BSS Future Plans" 
                className="w-full h-auto object-contain opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}