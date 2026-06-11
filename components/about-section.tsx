"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const DATA = {
  ar: {
    title1: "من",
    title2: "نحـن؟",
    desc1:
      ".نحن نمثل الشريك الاستراتيجي الموثوق لعملائنا في رحلتهم نحو تحقيق الاستدامه والتميز المالي. يضم المكتب نخبه من الخبراء والمستشارين الماليين المرخصين الملتزمين بتقديم تحليلات دقيقه ورؤى مبتكرة تتوافق مع التغيرات الديناميكيه في الاسواق المحليه والعالميه. ونقوم بتقديم استشارات مالية وتمويلية لحل المشاكل التي تواجه الشركات والمؤسسات  في الحصول على القروض من البنوك وشركات التمويل، وكذلك نقوم بتحويل التحديات الماليه المعقده الى فرص نمو ملموسه عبر صياغة استراتيجيات مخصصه تناسب تطلعات كل عميل ",
  },
  en: {
    title1: "About",
    title2: "Us?",
    subtitle: "Your Strategic Partner for Success",
    desc1:
      "At the Financial Solutions and Consulting Office, we represent a trusted strategic partner for our clients on their journey toward sustainability and financial excellence. Our office includes a group of experts and financial advisors committed to providing accurate analysis and innovative insights.",
    visionTitle: "Our Vision Goes Beyond Numbers",
    visionDesc:
      "We don't just provide numbers; we transform complex financial challenges into tangible growth opportunities, relying on scientific foundations and cumulative experience to ensure a sustainable financial future for your organization.",
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const data = DATA[lang as "ar" | "en"];

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Premium gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1320] via-[#030712] to-[#1a0f28]" />
        
        {/* Flowing diagonal lines inspired by logo geometry */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #bfa15f 1px, transparent 1px),
              linear-gradient(-45deg, #bfa15f 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Premium glow spots with golden accent */}
        <div className="absolute top-[15%] right-[-15%] w-[700px] h-[700px] rounded-full bg-[#bfa15f]/10 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-[150px]" />
        <div className="absolute top-[50%] left-[-20%] w-[500px] h-[500px] rounded-full bg-[#bfa15f]/8 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            key={lang}
            initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`flex flex-col gap-6 ${lang === "ar" ? "text-right" : "text-left"}`}
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tight">
                <span className="text-white">{data.title1} </span>
                <span className="text-purple-400">{data.title2}</span>
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-purple-400 text-xl font-bold block">
                {data.subtitle}
              </span>
              <p className="text-slate-200 text-lg leading-relaxed font-medium">
                {data.desc1}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[#bfa15f] text-sm font-bold uppercase tracking-wider mb-2 block">
                {data.visionTitle}
              </span>
              <p className="text-slate-400 text-base leading-relaxed">
                {data.visionDesc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square flex justify-center items-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 rounded-full bg-[#bfa15f] blur-[40px] z-0 pointer-events-none"
              />

              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    "0 0 20px 0px rgba(191, 161, 95, 0.1)",
                    "0 0 35px 5px rgba(191, 161, 95, 0.25)",
                    "0 0 20px 0px rgba(191, 161, 95, 0.1)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800/80 z-10 style-isolate"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                  transform: "translateZ(0)",
                }}
              >
                <Image
                  src="/images/newaboutUspng.png"
                  alt="About BSS Office"
                  fill
                  priority
                  className="object-cover w-full h-full rounded-full hover:scale-110 transition-transform duration-700"
                />
              </motion.div>

              <div className="absolute bottom-[-10px] left-6 z-30 pointer-events-none opacity-40">
                <svg width="90" height="90" viewBox="0 0 100 100">
                  <path d="M30 40 L5 85 L55 85 Z" fill="#bfa15f" />
                  <path d="M55 55 L25 95 L75 95 Z" fill="#7c3aed" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
