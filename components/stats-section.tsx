"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Target, Star } from "lucide-react";

const values = [
  {
    titleAr: "الالتزام",
    titleEn: "COMMITMENT",
    descAr: "الالتزام بأعلى المعايير الأخلاقية والمهنية والشفافية المطلقة.",
    descEn: "commitment to the highest ethical and professional standards and absolute transparency.",
  },
  {
    titleAr: "الابتكار",
    titleEn: "INNOVATION",
    descAr: "تطوير حلول مالية مرنة ومبتكرة تواكب العصر الرقمي.",
    descEn: "Developing flexible and innovative financial solutions that keep pace with the digital era.",
  },
  {
    titleAr: "السرية",
    titleEn: "CONFIDENTIALITY",
    descAr: "حماية بيانات العملاء ومعلوماتهم المالية بأقصى درجات الأمان.",
    descEn: "Safeguarding customer data and financial information using the highest security standards.",
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="core-values"
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* 🏙️ الخلفية الرقمية الموحدة لضمان انسيابية السكرول المستمر */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0a142c] to-[#030712]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-600/5 blur-[140px]" />
      </div>

      {/* الخطوط الحدودية النيون الناعمة */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 🎯 الجانب الأيمن: عنوان السكشن واللوحة الفنية كما في صورة image_02eaad.png */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-wide font-arabic">
              القيم الجوهرية
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 uppercase tracking-widest mb-10">
              CORE VALUES
            </h3>

            {/* الإطار الفني المستوحى من الرسمة الزيتية الفخمة بالصورة */}
            <div className="relative w-full max-w-[380px] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-slate-950/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 to-transparent z-10 pointer-events-none" />
              <Image
                src="/images/background.png" // يمكنك استبدالها بـ لوحة الخيل الزيتية الفخمة فور تجهيزها
                alt="Core Values Artistic Oil Painting"
                fill
                className="object-cover object-center grayscale-[20%] group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              {/* تأثير نيون خفيف خلف الصورة */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* 🎯 الجانب الأيسر: قائمة القيم الثلاث المتطابقة تماماً مع التصميم */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {values.map((item, index) => (
              <motion.div
                key={item.titleEn}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start md:items-center gap-6 group relative"
              >
                {/* الأيقونة البنفسجية الدائرية (الـ Target 🎯) */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:border-purple-400 group-hover:text-purple-300 transition-all duration-300">
                  <Target className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* تفاصيل القيمة المحاذية لليمين كلياً */}
                <div className="flex-1 text-right flex flex-col items-end">
                  
                  {/* السطر الأول: العنوان العربي والإنجليزي وبينهما الخط الفاصل والنجمة */}
                  <div className="w-full flex flex-col md:flex-row-reverse md:items-center justify-start gap-x-3 gap-y-1 mb-3 relative">
                    <div className="flex items-center gap-2 flex-row-reverse">
                      <h4 className="text-xl md:text-2xl font-black text-white group-hover:text-purple-400 transition-colors">
                        {item.titleAr}
                      </h4>
                      <span className="text-purple-500 font-light hidden md:inline">|</span>
                      <span className="text-base md:text-lg font-black text-purple-400 uppercase tracking-wide font-sans">
                        {item.titleEn}
                      </span>
                    </div>

                    {/* الخط الفاصل الممتد والنجمة الزرقاء تماماً كالصورة الأصلية */}
                    <div className="flex-1 h-px bg-purple-500/30 relative min-w-[60px] hidden md:block">
                      <Star className="w-3 h-3 fill-blue-400 text-blue-400 absolute left-0 -top-1.5" />
                    </div>
                  </div>

                  {/* السطر الثاني: الوصف العربي */}
                  <p className="text-slate-200 text-base md:text-lg font-bold leading-relaxed mb-1.5 max-w-2xl">
                    {item.descAr}
                  </p>

                  {/* السطر الثالث: الوصف الإنجليزي */}
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans text-left w-full direction-ltr max-w-2xl">
                    {item.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}