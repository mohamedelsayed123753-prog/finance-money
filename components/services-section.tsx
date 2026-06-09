"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from './LanguageContext';

const CONTENT = {
  ar: {
    sectionTitle: "الرؤية والرسالة",
    visionTitle: "الرؤية",
    visionText: "أن نكون الوجهة الأولى والخيار الأكثر موثوقية في تقديم الاستشارات والحلول المالية الذكية على مستوى المنطقة.",
    missionTitle: "الرسالة",
    missionText: "تمكين الشركات والمستثمرين من اتخاذ قرارات مالية صائبة ومبنية على أسس علمية وتحليلات دقيقة، بما يضمن تعظيم الأرباح وإدارة المخاطر بكفاءة.",
  },
  en: {
    sectionTitle: "Vision & Mission",
    visionTitle: "VISION",
    visionText: "We are the first destination as well as the most trusted choice for providing smart financial advice and solutions in the region.",
    missionTitle: "MISSION",
    missionText: "Enabling companies and investors to make correct financial decisions based on scientific principles and accurate analysis, ensuring profit maximization and efficient risk management.",
  }
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  
  // Optimization: حل نهائي للـ Error بـ Fallback آمن
  const data = useMemo(() => {
    const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
    return CONTENT[currentLang];
  }, [lang]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: lang === 'ar' ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#030712] overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6" ref={ref}>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-black text-purple-400 uppercase tracking-wider">
                {data.sectionTitle}
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={imageVariants}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 will-change-transform"
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
              alt="Vision Mission"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-8">
            <ServiceContent title={data.visionTitle} text={data.visionText} delay={0.2} lang={lang} />
            <div className="w-full h-px bg-gradient-to-r from-purple-900 via-purple-500 to-transparent" />
            <ServiceContent title={data.missionTitle} text={data.missionText} delay={0.4} lang={lang} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceContent({ title, text, delay, lang }: { title: string, text: string, delay: number, lang: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: lang === 'ar' ? -20 : 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } }
      }}
      className="flex flex-col items-start will-change-transform"
    >
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 fill-purple-400 text-purple-400" />
        <h3 className="text-2xl font-black text-purple-400">{title}</h3>
      </div>
      <p className="text-white text-lg font-bold leading-relaxed">{text}</p>
    </motion.div>
  );
}