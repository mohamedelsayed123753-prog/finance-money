"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Lightbulb, Lock, Star } from "lucide-react";
import { useLanguage } from './LanguageContext';

const VALUES_DATA = {
  ar: {
    sectionTitle: "القيم الجوهرية",
    sectionSub: "قيمنا",
    items: [
      { title: "الالتزام", desc: "الالتزام بأعلى المعايير الأخلاقية والمهنية والشفافية المطلقة.", icon: ShieldCheck },
      { title: "الابتكار", desc: "تطوير حلول مالية مرنة ومبتكرة تواكب العصر الرقمي.", icon: Lightbulb },
      { title: "السرية", desc: "حماية بيانات العملاء ومعلوماتهم المالية بأقصى درجات الأمان.", icon: Lock },
      { title: "التميز", desc: "نسعى للتميز في كل ما نقدمه من خدمات لتحقيق أعلى قيمة لعملائنا.", icon: Star },
    ]
  },
  en: {
    sectionTitle: "CORE VALUES",
    sectionSub: "OUR VALUES",
    items: [
      { title: "COMMITMENT", desc: "Commitment to the highest ethical and professional standards and absolute transparency.", icon: ShieldCheck },
      { title: "INNOVATION", desc: "Developing flexible and innovative financial solutions that keep pace with the digital era.", icon: Lightbulb },
      { title: "CONFIDENTIALITY", desc: "Safeguarding customer data and financial information using the highest security standards.", icon: Lock },
      { title: "EXCELLENCE", desc: "We strive for excellence in everything we offer to achieve the highest value for our clients.", icon: Star },
    ]
  }
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  
  // تأكد من اختيار البيانات بناءً على اللغة
  const data = VALUES_DATA[lang as 'ar' | 'en'];

  return (
    <section id="stats" className="py-24 relative bg-[#030712]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* الصورة الرئيسية */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src="/images/jwels.png" 
              alt="Core Values Strategy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent/20" />
          </motion.div>

          {/* القيم */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="mb-6">
               <h2 className="text-4xl font-black text-white">{data.sectionTitle}</h2>
               <p className="text-purple-500 font-bold uppercase tracking-widest">{data.sectionSub}</p>
            </div>

            {data.items.map((item, index) => {
              const Icon = item.icon; // استخراج الأيقونة من الكائن
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}