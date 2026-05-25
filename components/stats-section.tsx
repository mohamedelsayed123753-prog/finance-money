"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Target } from "lucide-react";
import { useLanguage } from './LanguageContext'; // الاستيراد المضاف

const VALUES_DATA = {
  ar: {
    sectionTitle: "القيم الجوهرية",
    sectionSub: "قيمنا",
    items: [
      { title: "الالتزام", desc: "الالتزام بأعلى المعايير الأخلاقية والمهنية والشفافية المطلقة." },
      { title: "الابتكار", desc: "تطوير حلول مالية مرنة ومبتكرة تواكب العصر الرقمي." },
      { title: "السرية", desc: "حماية بيانات العملاء ومعلوماتهم المالية بأقصى درجات الأمان." },
    ]
  },
  en: {
    sectionTitle: "CORE VALUES",
    sectionSub: "OUR VALUES",
    items: [
      { title: "COMMITMENT", desc: "Commitment to the highest ethical and professional standards and absolute transparency." },
      { title: "INNOVATION", desc: "Developing flexible and innovative financial solutions that keep pace with the digital era." },
      { title: "CONFIDENTIALITY", desc: "Safeguarding customer data and financial information using the highest security standards." },
    ]
  }
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { lang } = useLanguage();
  const data = VALUES_DATA[lang as 'ar' | 'en'];

  return (
    <section id="StatsSection" className="py-24 md:py-32 relative overflow-hidden bg-[#030712]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
        style={{ backgroundImage: "linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)", backgroundSize: "60px 60px" }} 
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            key={lang}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {data.sectionTitle}
                </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-purple-500 uppercase tracking-widest mb-10">{data.sectionSub}</h3>

            <div className="relative w-full max-w-[380px] aspect-square rounded-3xl overflow-hidden border border-white/10 bg-slate-950/40">
              <Image
                src="/images/background.png"
                alt="Core Values"
                fill
                className="object-cover opacity-80"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            {data.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Target className="w-8 h-8" />
                </div>

                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-black text-white mb-3">{item.title}</h4>
                  <p className="text-slate-200 text-lg font-bold leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}