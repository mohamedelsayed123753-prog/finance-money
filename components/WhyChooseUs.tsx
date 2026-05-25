"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Cpu, Settings, Award } from "lucide-react";
import { useLanguage } from './LanguageContext'; // ده الأساس اللي بيربط كل حاجة

type Language = 'ar' | 'en';

const DATA: Record<Language, any> = {
  ar: {
    titlePart1: "لماذا تختار",
    titlePart2: "شركتنا ؟",
    reasons: [
      { icon: Network, title: "شبكة علاقات واسعة", desc: "نمتلك شبكة قوية مع المؤسسات المصرفية والجهات الاستثمارية لتسهيل الحلول التمويلية." },
      { icon: Cpu, title: "التزام بالتكنولوجيا", desc: "نقدم أحدث برمجيات التحليل المالي والذكاء الاصطناعي لضمان دقة وسرعة النتائج." },
      { icon: Settings, title: "حلول مخصصة", desc: "لا نؤمن بالحلول الجاهزة؛ بل ندرس كل منشأة بشكل منفصل لنقدم حلاً يناسب أعمالها." },
      { icon: Award, title: "خبرة ممتدة", desc: "فريق عمل يمتلك عقوداً من الخبرة التراكمية في قطاعات مالية واستثمارية متعددة." }
    ]
  },
  en: {
    titlePart1: "Why Choose",
    titlePart2: "Our Company?",
    reasons: [
      { icon: Network, title: "Extensive Network", desc: "We possess a strong network with banking institutions and investment entities to facilitate financing solutions." },
      { icon: Cpu, title: "Tech Commitment", desc: "We provide the latest financial analysis and AI software to ensure accurate and fast results." },
      { icon: Settings, title: "Customized Solutions", desc: "We don't believe in off-the-shelf solutions; we study each entity separately to provide a tailored solution." },
      { icon: Award, title: "Extensive Experience", desc: "A team with decades of cumulative experience across multiple financial and investment sectors." }
    ]
  }
};

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // هنا الربط الحقيقي بالـ Hook بتاعنا
  const { lang } = useLanguage(); 
  const data = DATA[lang as Language];

  return (
    <section 
      key={lang} 
      id="why-us" 
      className="py-24 bg-[#02040a] text-white" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">{data.titlePart1} </span>
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {data.titlePart2}
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.reasons.map((item: any, idx: number) => (
            <motion.div
              key={`${lang}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#0f1118] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}