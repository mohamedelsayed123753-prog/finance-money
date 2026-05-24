"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* 🏙️ الخلفية الرقمية المتكاملة الموحدة */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0b1329] to-[#030712]" />
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
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-[15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* الخط الفاصل العلوي المضيء */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 👈 الجانب الأيسر: المحتوى والنصوص (العربي والإنجليزي من الصورة) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 text-right lg:text-right"
          >
            {/* العناوين الرئيسية العلوية */}
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tight text-left">
                <span className="text-[#1e40af]">ABOUT </span>
                <span className="text-[#38bdf8]">OUR </span>
                <span className="text-[#1e40af]">COMPANY</span>
              </h2>
            </div>

            {/* الجزء العربي */}
            <div className="flex flex-col gap-3">
              <span className="text-[#c084fc] text-xl font-bold block">
                من نحن؟
              </span>
              <p className="text-slate-200 text-lg leading-relaxed font-medium">
                نحن في قسم الحلول والاستشارات المالية بشركة فيري القابضة، نُمثّل
                الشريك الاستراتيجي الموثوق لعملائنا في رحلتهم نحو تحقيق الاستدامة
                والتميز المالي. يضم قسمنا نخبة من الخبراء والمستشارين الماليين
                الملتزمين بتقديم تحليلات دقيقة ورؤى مبتكرة تتوافق مع التغيرات
                الديناميكية في الأسواق المحلية والعالمية. نقوم بتحويل التحديات المالية
                المعقدة إلى فرص نمو ملموسة عبر صياغة استراتيجيات مخصصة تناسب
                تطلعات كل عميل.
              </p>
            </div>

            {/* الخطوط الجمالية الفاصلة في المنتصف المنتقاة من التصميم */}
            <div className="flex flex-col gap-2 my-2 items-end">
              <div className="w-48 h-1 bg-gradient-to-l from-purple-600 to-transparent rounded-full" />
              <div className="w-36 h-1 bg-gradient-to-l from-purple-500 to-transparent rounded-full mr-8" />
              <div className="w-24 h-1 bg-gradient-to-l from-purple-400 to-transparent rounded-full mr-16" />
            </div>

            {/* الجزء الإنجليزي */}
            <div className="text-left direction-ltr">
              <span className="text-[#3b82f6] text-sm font-bold uppercase tracking-wider mb-2 block">
                ABOUT COMPANY
              </span>
              <p className="text-slate-300 text-base leading-relaxed">
                At Feeri Holdings' Financial Solutions and Advisory division, we are a trusted
                strategic partner for our clients on their journey towards achieving
                sustainability and financial excellence. Our division comprises a select group of
                experts and financial advisors committed to providing accurate analyses and
                innovative insights that align with the dynamic changes in local and global
                markets. We transform complex financial challenges into tangible growth
                opportunities by crafting customized strategies tailored to each client's
                aspirations.
              </p>
            </div>
          </motion.div>

          {/* 👉 الجانب الأيمن: الصورة الدائرية مع المثلثات والإطار البنفسجي */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square flex justify-center items-center">
              
              {/* الإطار الدائري البنفسجي الخارجي المحيط بالصورة */}
              <div className="absolute inset-4 rounded-full border-4 border-purple-600/80 pointer-events-none z-20" />
              
              {/* حاوية الصورة الدائرية المقصوصة تماماً كالتصميم */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-800 z-10 shadow-2xl">
                <Image
                  src="/images/background.png"
                  alt="Feeri Holding Building"
                  fill
                  className="object-cover object-center scale-105 transform hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* عناصر المثلثات الديكورية الملونة في أسفل اليمين */}
              <div className="absolute bottom-0 right-4 z-30 flex items-end justify-end pointer-events-none select-none">
                <svg
                  width="160"
                  height="160"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  {/* مثلث بنفسجي كبير */}
                  <path d="M70 40 L95 85 L45 85 Z" fill="#7c3aed" opacity="0.9" />
                  {/* مثلث أزرق فاتح متوسط */}
                  <path d="M45 55 L75 95 L25 95 Z" fill="#7dd3fc" opacity="0.8" />
                  {/* مثلث أزرق صغير خلفي */}
                  <path d="M80 65 L95 90 L65 90 Z" fill="#38bdf8" opacity="0.5" />
                  {/* مثلث بنفسجي غامق صغير جداً عائم */}
                  <path d="M85 50 L95 65 L75 65 Z" fill="#6b21a8" opacity="0.7" />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}