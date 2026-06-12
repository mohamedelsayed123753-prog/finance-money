"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const ARABIC_DATA = {
  title1: "من",
  title2: "نحن؟",
  subtitle: "شريكك الاستراتيجي للنجاح",
  desc1: "نحن نمثل الشريك الاستراتيجي الموثوق لعملائنا في رحلتهم نحو تحقيق الاستدامة والتميز المالي. يضم المكتب نخبة من الخبراء والمستشارين الماليين المرخصين الملتزمين بتقديم تحليلات دقيقة ورؤى مبتكرة تتوافق مع التغيرات الديناميكية في الأسواق المحلية والعالمية. ونقوم بتقديم استشارات مالية وتمويلية لحل المشاكل التي تواجه الشركات والمؤسسات في الحصول على القروض من البنوك وشركات التمويل، وكذلك نقوم بتحويل التحديات المالية المعقدة إلى فرص نمو ملموسة عبر صياغة استراتيجيات مخصصة تناسب تطلعات كل عميل.",
};

const ENGLISH_DATA = {
  title1: "ABOUT",
  title2: "COMPANY",
  subtitle: "Your Trusted Strategic Partner",
  desc1: "We are a trusted strategic partner for our clients on their journey toward achieving sustainability and financial excellence. Our firm comprises a select group of licensed financial experts and advisors committed to providing accurate analyses and innovative insights that keep pace with the dynamic changes in local and global markets. We offer financial and funding advice to help companies and institutions overcome the challenges of securing loans from banks and finance companies. Furthermore, we transform complex financial challenges into tangible growth opportunities by developing customized strategies tailored to each client's specific aspirations.",
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { lang } = useLanguage();
  const data = lang === "ar" ? ARABIC_DATA : ENGLISH_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { x: lang === "ar" ? 100 : -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 80, damping: 12, mass: 1 } 
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#030712]" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#bfa15f 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          <motion.div variants={itemVariants} className={`flex flex-col gap-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
            <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter">
              <span className="text-white">{data.title1} </span>
              <span className="text-[#bfa15f]">{data.title2}</span>
            </h2>
            <div className="flex flex-col gap-3">
              <span className="text-[#bfa15f]/90 text-xl font-bold">{data.subtitle}</span>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                {data.desc1}
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { scale: 0.8, rotate: -10, opacity: 0 },
              visible: { scale: 1, rotate: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
            }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square border-2 border-[#bfa15f]/30 rounded-full p-2 animate-spin-slow">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/images/newaboutUspng.png" 
                  alt="About BSS Office" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}