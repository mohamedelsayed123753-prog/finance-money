"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from './LanguageContext'; // استيراد الـ hook

const CONTENT = {
  ar: {
    visionTitle: "الرؤية",
    visionText: "أن نكون الوجهة الأولى والخيار الأكثر موثوقية في تقديم الاستشارات والحلول المالية الذكية على مستوى المنطقة.",
    missionTitle: "الرسالة",
    missionText: "تمكين الشركات والمستثمرين من اتخاذ قرارات مالية صائبة ومبنية على أسس علمية وتحليلات دقيقة، بما يضمن تعظيم الأرباح وإدارة المخاطر بكفاءة.",
  },
  en: {
    visionTitle: "VISION",
    visionText: "We are the first destination as well as the most trusted choice for providing smart financial advice and solutions in the region.",
    missionTitle: "MISSION",
    missionText: "Enabling companies and investors to make correct financial decisions based on scientific principles and accurate analysis, ensuring profit maximization and efficient risk management.",
  }
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // ربطنا السكشن باللغة المختارة من الـ Context
  const { lang } = useLanguage();
  const data = CONTENT[lang as 'ar' | 'en'];

  return (
    <section id="services" className="scroll-mt-5 py-24 md:py-32 relative overflow-hidden bg-[#030712]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            key={lang}
            initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Vision Mission"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
          </motion.div>

          <div className="flex flex-col gap-8">
            <ServiceContent title={data.visionTitle} text={data.visionText} isInView={isInView} delay={0.2} lang={lang} />
            <div className="w-full h-px bg-gradient-to-r from-purple-900 via-purple-500 to-transparent" />
            <ServiceContent title={data.missionTitle} text={data.missionText} isInView={isInView} delay={0.4} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceContent({ title, text, isInView, delay, lang }: { title: string, text: string, isInView: boolean, delay: number, lang: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col ${lang === 'ar' ? 'items-start' : 'items-start'}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 fill-purple-400 text-purple-400" />
        <h3 className="text-2xl font-black text-purple-400">{title}</h3>
      </div>
      <p className="text-white text-lg font-bold leading-relaxed">{text}</p>
    </motion.div>
  );
}