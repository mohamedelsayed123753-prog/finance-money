"use client";

import { motion } from "framer-motion";
import { Network, Cpu, Settings, Award } from "lucide-react";
import { useLanguage } from './LanguageContext'; 

type Language = 'ar' | 'en';

const DATA: Record<Language, any> = {
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

  return (
    <section 
      id="why-us" 
      className="py-24 bg-[#02040a] text-white relative overflow-hidden flex flex-col items-center w-full" 
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* تأثيرات الإضاءة خلفية ثابتة */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* الـ container مضبوط بـ mx-auto لضمان التمركز التام */}
      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* العنوان */}
        <div className="text-center mb-20 max-w-4xl w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight uppercase">
            <span className="text-white block mb-3 md:inline md:mb-0">{data.titlePart1} </span>
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent block md:inline">
              {data.titlePart2}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* الـ grid متمركز باستخدام justify-items-center */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl justify-items-center">
          {data.reasons.map((item: any, idx: number) => (
            <motion.div
              key={`${currentLang}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              // العرض هنا max-w-[350px] يضمن اتزان الكرت في كل الشاشات
              className="w-full max-w-[350px] bg-[#0f1118]/80 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/10 hover:border-purple-500/60 transition-all duration-300 group flex flex-col justify-between relative"
            >
              <div>
                <div className="w-12 h-12 bg-purple-950/40 rounded-2xl flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300">
                  <item.icon size={22} />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-4 text-slate-100 group-hover:text-purple-300 transition-colors uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}