"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import Image from "next/image";
import { ShieldCheck, Lightbulb, Lock, Star } from "lucide-react";
import { useLanguage } from './LanguageContext';

const ARABIC_DATA = {
  sectionTitle: "القيم الجوهرية",
  items: [
    { id: "commitment", title: "الالتزام", desc: "الالتزام بأعلى المعايير الأخلاقية، والمهنية والشفافية المطلقة.", icon: ShieldCheck },
    { id: "innovation", title: "الابتكار", desc: "تطوير حلول مالية مرنة ومبتكرة، تواكب العصر الرقمي.", icon: Lightbulb },
    { id: "quality", title: "الجودة", desc: "الالتزام بتقديم خدمات وحلول مالية عالية الجودة وفق أفضل المعايير لضمان رضاالعملاء وتحقيق نتائج مستدامه.", icon: Lock },
    { id: "confidentiality", title: "السرية", desc: "حماية بيانات العملاء ومعلوماتهم المالية بأقصى درجات الأمان.", icon: Star },
  ]
};

const ENGLISH_DATA = {
  sectionTitle: "CORE VALUES",
  items: [
    { id: "commitment", title: "COMMITMENT", desc: "Commitment to the highest ethical and professional standards and absolute transparency.", icon: ShieldCheck },
    { id: "innovation", title: "INNOVATION", desc: "Developing flexible and innovative financial solutions that keep pace with the digital era.", icon: Lightbulb },
    { id: "quality", title: "QUALITY", desc: "Delivering high-quality financial services and solutions according to the highest standards to ensure customer satisfaction and sustainable results.", icon: Lock },
    { id: "confidentiality", title: "CONFIDENTIALITY", desc: "Safeguarding customer data and financial information using the highest security standards.", icon: Star },
  ]
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { lang } = useLanguage();
  
  const data = useMemo(() => (lang === 'ar' ? ARABIC_DATA : ENGLISH_DATA), [lang]);

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: lang === 'ar' ? 20 : -20 }, 
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 120, damping: 18 }  
    }
  };

  return (
    <section id="stats" className="py-24 relative bg-[#030712] overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={isInView ? "visible" : "hidden"} 
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
         
          <motion.div 
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 70, damping: 15 } }
            }}
            className="lg:col-span-5 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(191,161,95,0.1)] border border-[#bfa15f]/20"
          >
            <Image 
              src="/images/vision.png" 
              alt="Core Values" 
              fill 
              className="object-cover transition-transform duration-[3s] hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
          </motion.div>

        
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 px-2 py-2">
              {data.sectionTitle}
            </motion.h2>
            
            <div className="grid gap-6">
              {data.items.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants} 
                  whileHover={{ x: lang === 'ar' ? -10 : 10 }}
                  className="group flex items-start gap-5 p-6 rounded-2xl border border-[#bfa15f]/10 bg-[#bfa15f]/[0.03] hover:bg-[#bfa15f]/[0.08] transition-all duration-300"
                >
                  <div className="mt-1 p-4 rounded-2xl bg-gradient-to-br from-[#bfa15f]/20 to-[#bfa15f]/5 text-[#bfa15f] group-hover:shadow-[0_0_20px_rgba(191,161,95,0.2)] transition-all">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#bfa15f] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}