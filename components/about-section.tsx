"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* 🏙️ الخلفية الرقمية المتكاملة الموحدة مع الـ Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* 1. التدرج اللوني الأساسي للـ Fintech */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0b1329] to-[#030712]" />

        {/* 2. الـ Cyber Grid المنتظم المتصل بالـ Hero */}
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

        {/* 3. توهج أزرق جانبي ناعم لتعزيز مظهر النص */}
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

        {/* 4. هالة بنفسجية خلف الكارد الزجاجي لإعطائه عمق فخم */}
        <div className="absolute bottom-[15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* الخط الفاصل العلوي المضيء بنعومة */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 👈 المحتوى والنصوص (الجانب الأيسر/الأيمن حسب التوجيه) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <span className="text-blue-500 text-sm font-bold tracking-wider mb-4 block">
              من نحن
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-normal md:leading-tight">
              خبرة تمتد لأكثر من
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 px-2">
                عقدين
              </span>
              من التميز
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              نحن الفخامة للاستشارات المالية، نقدم خدمات استشارية متكاملة
              للشركات والأفراد في منطقة الخليج العربي. نجمع بين الخبرة العميقة
              والرؤية المستقبلية لنساعدك في تحقيق أهدافك المالية.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              فريقنا من الخبراء المتخصصين يعمل على تقديم حلول مبتكرة ومخصصة
              تناسب احتياجاتك الفريدة، مع الالتزام بأعلى معايير النزاهة
              والشفافية.
            </p>

            {/* Features شبكة المميزات الذكية */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  title: "خبرة معتمدة",
                  desc: "مستشارون معتمدون دولياً",
                },
                {
                  number: "02",
                  title: "حلول مبتكرة",
                  desc: "استراتيجيات مالية متطورة",
                },
                {
                  number: "03",
                  title: "سرية تامة",
                  desc: "حماية معلوماتك أولويتنا",
                },
                {
                  number: "04",
                  title: "دعم مستمر",
                  desc: "متابعة على مدار الساعة",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="flex gap-4 items-start justify-start direction-rtl"
                >
                  <span className="text-purple-500 text-2xl font-black opacity-60">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 👉 الجانب البصري المعزز بالـ Glassmorphism الفاخر */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* إطارات هندسية مضيئة خلف الكارد */}
              <div className="absolute inset-0 border border-blue-500/20 rounded-2xl transform rotate-6 pointer-events-none" />
              <div className="absolute inset-0 border border-purple-500/10 rounded-2xl transform -rotate-3 pointer-events-none" />

              {/* الكارد الزجاجي النقي (Glassmorphism Box) */}
              <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col justify-center shadow-2xl">
                <div className="text-center">
                  <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-md">
                    20+
                  </span>
                  <p className="text-xl font-bold text-purple-400 mt-4">
                    عاماً من الخبرة
                  </p>
                </div>

                {/* شبكة الإحصائيات الفرعية النظيفة */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <span className="text-3xl font-black text-white">500+</span>
                    <p className="text-sm text-slate-400 mt-1">عميل راضٍ</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-black text-white">50+</span>
                    <p className="text-sm text-slate-400 mt-1">خبير متخصص</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
