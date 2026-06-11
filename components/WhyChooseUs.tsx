"use client";

import { motion } from "framer-motion";
import { Network, Cpu, Settings, Award } from "lucide-react";
import { useLanguage } from './LanguageContext'; 

const DATA: any = {
  ar: {
    titlePart1: "لماذا تختار",
    titlePart2: "مكتب بناء الاستراتيجيات للحلول والاستشارات المالية ؟",
    reasons: [
      { icon: Network, title: "شبكة علاقات واسعة", desc: "نمتلك شبكة قوية مع المؤسسات المصرفية والجهات الاستثمارية لتسهيل الحلول التمويلية." },
      { icon: Cpu, title: "التزام بالتكنولوجيا", desc: "ندمج أحدث برمجيات التحليل المالي والذكاء الاصطناعي لضمان دقة وسرعة النتائج." },
      { icon: Settings, title: "حلول مخصصة", desc: "لا نؤمن بالحلول الجاهزة؛ بل ندرس وضع كل منشأة بشكل منفصل لنقدم حلاً يفيد أعمالها بشكل مباشر." },
      { icon: Award, title: "خبرة ممتدة", desc: "فريق عمل يمتلك عقوداً من الخبرة التراكمية في قطاعات مالية واستثمارية متعددة." }
    ]
  },
  en: {
    titlePart1: "WHY CHOOSE",
    titlePart2: "US ?",
    reasons: [
      { icon: Network, title: "EXTENSIVE NETWORK OF RELATIONSHIPS", desc: "We maintain a strong network of banking institutions and investment entities to facilitate effective financing solutions." },
      { icon: Cpu, title: "COMMITMENT TO TECHNOLOGY", desc: "We integrate the latest financial analysis software and AI technologies to ensure accuracy, efficiency, and rapid results." },
      { icon: Settings, title: "CUSTOMIZED SOLUTIONS", desc: "We do not believe in one-size-fits-all solutions; we assess each organization individually to deliver tailored solutions." },
      { icon: Award, title: "EXTENSIVE EXPERIENCE", desc: "A team with decades of accumulated experience in multiple financial and investment sectors." }
    ]
  }
};

export function WhyChooseUs() {
  const { lang } = useLanguage();
  const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  const titleVariant = {
    animate: {
      color: ["#ffffff", "#bfa15f", "#ffffff"],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#030712] text-white relative overflow-hidden flex flex-col items-center w-full" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-4xl w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            <span className="block mb-2">{data.titlePart1} </span>
            <motion.span animate={titleVariant.animate} className="block">
              {data.titlePart2}
            </motion.span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl justify-items-center">
          {data.reasons.map((item: any, idx: number) => (
            <motion.div
              key={`${currentLang}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, borderColor: "#bfa15f" }}
              className="w-full max-w-[350px] bg-[#0a0f1d] p-8 rounded-3xl border border-[#bfa15f]/20 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#bfa15f]/10 rounded-2xl flex items-center justify-center mb-6 text-[#bfa15f] border border-[#bfa15f]/20">
                  <item.icon size={22} />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-4 text-white uppercase">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}