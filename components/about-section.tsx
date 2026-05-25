"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from './LanguageContext'; // ضفت الـ hook

const DATA = {
  ar: {
    title1: "من",
    title2: "نحـن؟",
    subtitle: "شريكك الاستراتيجي للنجاح",
    desc1: "نحن في قسم الحلول والاستشارات المالية بشركة فيري القابضة، نُمثّل الشريك الاستراتيجي الموثوق لعملائنا في رحلتهم نحو تحقيق الاستدامة والتميز المالي. يضم قسمنا نخبة من الخبراء والمستشارين الماليين الملتزمين بتقديم تحليلات دقيقة ورؤى مبتكرة.",
    visionTitle: "رؤيتنا تتجاوز الأرقام",
    visionDesc: "نحن لا نقدم مجرد أرقام، بل نحول التحديات المالية المعقدة إلى فرص نمو ملموسة، معتمدين على أسس علمية وخبرة تراكمية لضمان مستقبل مالي مستدام لمنشأتك."
  },
  en: {
    title1: "About",
    title2: "Us?",
    subtitle: "Your Strategic Partner for Success",
    desc1: "At the Financial Solutions and Consulting Department of Feeri Holding, we represent a trusted strategic partner for our clients on their journey toward sustainability and financial excellence. Our department includes a group of experts and financial advisors committed to providing accurate analysis and innovative insights.",
    visionTitle: "Our Vision Goes Beyond Numbers",
    visionDesc: "We don't just provide numbers; we transform complex financial challenges into tangible growth opportunities, relying on scientific foundations and cumulative experience to ensure a sustainable financial future for your organization."
  }
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const data = DATA[lang as 'ar' | 'en'];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#030712]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* الخلفية */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0b1329] to-[#030712]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب النصي */}
          <motion.div
            key={lang}
            initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-6 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tight">
                <span className="text-[#38bdf8]">{data.title1} </span>
                <span className="text-[#1e40af]">{data.title2}</span>
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[#c084fc] text-xl font-bold block">{data.subtitle}</span>
              <p className="text-slate-200 text-lg leading-relaxed font-medium">
                {data.desc1}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-wider mb-2 block">{data.visionTitle}</span>
              <p className="text-slate-400 text-base leading-relaxed">
                {data.visionDesc}
              </p>
            </div>
          </motion.div>

          {/* الجانب الصوري */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square flex justify-center items-center">
              <div className="absolute inset-4 rounded-full border-4 border-purple-600/80 z-20 pointer-events-none" />
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-800 z-10 shadow-2xl">
                <Image
                  src="/images/background.png"
                  alt="Feeri Holding Building"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 left-4 z-30 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 100 100" className="opacity-80">
                  <path d="M30 40 L5 85 L55 85 Z" fill="#7c3aed" />
                  <path d="M55 55 L25 95 L75 95 Z" fill="#7dd3fc" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}