"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* 🏙️ الخلفية الرقمية المستمرة */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#091124] to-[#030712]" />
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
        <div className="absolute top-[25%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        
        {/* 🗺️ الجزء العلوي: هيدر العمارات المستقبلية المترابطة بصرياً (LTR) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden mb-16 shadow-2xl border border-white/10 bg-slate-950"
          dir="ltr"
        >
          {/* شبكة الصور - لقطات متكاملة معماريًا لنفس الطراز */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5 aspect-[21/9] w-full min-h-[350px]">
            
            {/* اللقطة الأولى (اليسار): تفاصيل المنحنيات الزجاجية الفخمة عن قرب */}
            <div className="relative md:col-span-2 h-full w-full bg-slate-900 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=800&auto=format&fit=crop" 
                alt="Futuristic Luxury Architecture Close-up"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 brightness-90"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent z-10" />
            </div>

            {/* اللقطة الثانية (اليمين): الامتداد الشامخ لنفس الكتلة المعمارية الزجاجية */}
            <div className="relative md:col-span-3 h-full w-full bg-slate-900 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                alt="Majestic Corporate Glass Skyscraper"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 brightness-90"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950/60 via-transparent to-transparent z-10" />
            </div>
          </div>

          {/* تأثير الـ Overlay السينمائي */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/40 z-10 pointer-events-none" />

          {/* النص العائم الكبير */}
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-8 md:px-16 text-left z-20 pointer-events-none select-none">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white opacity-95 uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              VISION &
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase mt-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              MISSION
            </h2>
          </div>
        </motion.div>

        {/* 🗺️ الجزء السفلي: كروت محتوى الرؤية والرسالة */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative items-start bg-slate-900/20 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
          
          {/* 👉 الجانب الأيمن: الرؤية */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right md:pl-12 flex flex-col items-end"
          >
            <div className="flex items-center gap-2 mb-4 justify-end">
              <h3 className="text-2xl font-black text-purple-400">الرؤية</h3>
              <Star className="w-5 h-5 fill-blue-400 text-blue-400" />
            </div>
            <p className="text-white text-lg font-bold leading-relaxed mb-8 text-right max-w-xl">
              أن نكون الوجهة الأولى والخيار الأكثر موثوقية في تقديم الاستشارات والحلول المالية الذكية على مستوى المنطقة.
            </p>
            <div className="flex items-center gap-2 mb-3 justify-end w-full direction-ltr text-left">
              <Star className="w-4 h-4 fill-blue-300 text-blue-300 mr-2 inline-block" />
              <h4 className="text-lg font-black text-purple-400 uppercase inline-block">VISION</h4>
            </div>
            <p className="text-slate-300 text-base leading-relaxed text-left w-full direction-ltr max-w-xl">
              We are the first destination as well as the most trusted choice for providing smart financial advice and solutions in the region.
            </p>
          </motion.div>

          {/* 🟪 العمود الفاصل البنفسجي */}
          <div className="hidden md:block absolute inset-y-12 left-1/2 w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-600 transform -translate-x-1/2 rounded-full opacity-80" />

          {/* 👉 الجانب الأيسر: الرسالة */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-right md:pr-12 flex flex-col items-end"
          >
            <div className="flex items-center gap-2 mb-4 justify-end">
              <h3 className="text-2xl font-black text-purple-400">الرسالة</h3>
              <Star className="w-5 h-5 fill-blue-400 text-blue-400" />
            </div>
            <p className="text-white text-lg font-bold leading-relaxed mb-8 text-right max-w-xl">
              تمكين الشركات والمستثمرين من اتخاذ قرارات مالية صائبة ومبنية على أسس علمية وتحليلات دقيقة، بما يضمن تعظيم الأرباح وإدارة المخاطر بكفاءة.
            </p>
            <div className="flex items-center gap-2 mb-3 justify-end w-full direction-ltr text-left">
              <Star className="w-4 h-4 fill-blue-300 text-blue-300 mr-2 inline-block" />
              <h4 className="text-lg font-black text-purple-400 uppercase inline-block">MISSION</h4>
            </div>
            <p className="text-slate-300 text-base leading-relaxed text-left w-full direction-ltr max-w-xl">
              Enabling companies and investors to make correct financial decisions based on scientific principles and accurate analysis, including the ensuring profit maximization and efficient risk management.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}