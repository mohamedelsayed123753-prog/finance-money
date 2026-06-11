"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import Image from "next/image";
import { Target, Lightbulb } from "lucide-react";
import { useLanguage } from './LanguageContext';

// 1. تأكد أن تعريفات المحتوى موجودة هنا في بداية الملف
const ARABIC_CONTENT = {
  sectionTitle: "الرؤية والرسالة",
  visionTitle: "الرؤية",
  visionText: "أن نكون الوجهة الأولى والخيار الأكثر موثوقية في تقديم الاستشارات والحلول المالية الذكية على مستوى المنطقة.",
  missionTitle: "الرسالة",
  missionText: "تمكين الشركات والمستثمرين من اتخاذ قرارات مالية صائبة ومبنية على أسس علمية وتحليلات دقيقة، بما يضمن تعظيم الأرباح وإدارة المخاطر بكفاءة.",
};

const ENGLISH_CONTENT = {
  sectionTitle: "VISION AND MISSION",
  visionTitle: "VISION",
  visionText: "We are the first destination as well as the most trusted choice for providing smart financial advice and solutions in the region.",
  missionTitle: "MISSION",
  missionText: "Enabling companies and investors to make correct financial decisions based on scientific principles and accurate analysis, ensuring profit maximization and efficient risk management.",
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  
  // 2. الآن `useMemo` ستجد المتغيرات معرفة بوضوح
  const data = useMemo(() => (lang === 'ar' ? ARABIC_CONTENT : ENGLISH_CONTENT), [lang]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#030712] overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6" ref={ref}>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#bfa15f] to-[#e6c270] uppercase tracking-tight px-4 py-3 leading-tight">
                {data.sectionTitle}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#bfa15f] to-transparent mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 70, damping: 15 } }
            }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#bfa15f]/20"
          >
            <div className="absolute inset-0 bg-[#bfa15f]/10 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
              alt="Vision Mission"
              fill
              className="object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </motion.div>

          <div className="flex flex-col gap-10">
            <ServiceContent icon={Target} title={data.visionTitle} text={data.visionText} />
            <div className="w-full h-px bg-gradient-to-r from-[#bfa15f]/50 via-[#bfa15f]/10 to-transparent" />
            <ServiceContent icon={Lightbulb} title={data.missionTitle} text={data.missionText} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceContent({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 12 } }
      }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-[#bfa15f]/10">
            <Icon className="w-6 h-6 text-[#bfa15f]" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#bfa15f] transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium pl-9">
        {text}
      </p>
    </motion.div>
  );
}