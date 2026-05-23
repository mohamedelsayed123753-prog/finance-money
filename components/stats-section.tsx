"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "عميل راضٍ" },
  { value: 2.5, suffix: "B+", label: "ريال تحت الإدارة", decimal: true },
  { value: 98, suffix: "%", label: "نسبة رضا العملاء" },
  { value: 20, suffix: "+", label: "سنة من الخبرة" },
];

function AnimatedCounter({
  value,
  suffix,
  decimal = false,
}: {
  value: number;
  suffix: string;
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stats"
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* 🏙️ الخلفية الرقمية الموحدة لضمان انسيابية السكرول */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* 1. التدرج الداكن الممتد */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0a142c] to-[#030712]" />

        {/* 2. الـ Cyber Grid المتصل هندسياً بالموقع */}
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

        {/* 3. التوهج المضيء المركزي (Glow Effect) خلف الكروت */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* الخطوط الحدودية النيون الناعمة */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        
        {/* 🎯 هنا حطينا الكود المتدلع الجديد جوة الـ motion.div عشان يتحرك بسلاسة أول ما السيكشن يفتح */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* شارة علوية صغيرة تعطي فخامة وسياق للعنوان */}
          <span className="inline-block text-blue-400 text-sm font-bold tracking-wider mb-3 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10">
            الأداء والنمو
          </span>
          
          {/* العنوان الرئيسي المتدلع */}
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-normal md:leading-tight">
            أرقام تتحدث عن{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 px-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-500/40 after:to-transparent"> 
              نجاحنا
            </span>
          </h2>
          
          {/* وصف خفيف تحت العنوان لزيادة التوازن البصري */}
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            مسيرة حافلة بالإنجازات والقرارات الاستثمارية الصائبة التي شكلت فارقاً حقيقياً في ثروات عملائنا.
          </p>
        </motion.div>

        {/* Stats Grid شبكة الكروت الزجاجية الشفافة المحسنة */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* الكارد الزجاجي النقي (Fintech Glassmorphism Card) */}
              <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-500 p-6 md:p-8 rounded-2xl shadow-2xl group">
                <span className="text-3xl md:text-5xl font-black text-white block mb-2 tracking-tight group-hover:text-blue-400 transition-colors drop-shadow-[0_2px_10px_rgba(59,130,246,0.2)]">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                  />
                </span>
                <span className="text-slate-400 text-sm md:text-lg font-medium block transition-colors group-hover:text-slate-300">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}