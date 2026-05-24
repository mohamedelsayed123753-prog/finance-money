"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, TrendingUp, RefreshCw, PieChart, Activity } from "lucide-react";

const strategicServices = [
  {
    titleAr: "إعداد الخطط المالية طويلة وقصيرة الأجل وتطوير الميزانيات التقديرية",
    descEn: "Formulating comprehensive long-term and short-term financial strategies, maintaining structured corporate budgeting, and ensuring dynamic asset forecasting.",
    icon: TrendingUp,
  },
  {
    titleAr: "إعادة الهيكلة المالية للشركات لرفع كفاءة التشغيل وتقليص النفقات الفائضة",
    descEn: "Executing strategic corporate restructuring to maximize operational throughput, optimize overhead allocation, and eliminate redundant operational expenditures.",
    icon: RefreshCw,
  },
  {
    titleAr: "تحليل الأداء المالي وتقديم تقارير دورية لكشف نقاط القوة وفرص التحسين",
    descEn: "Conducting continuous financial performance evaluation and generating periodic audits to uncover systemic strengths and high-yield growth opportunities.",
    icon: Activity,
  },
];

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="marketing-strategy"
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* 🌌 الخلفية الرقمية الموحدة لضمان انسيابية السكرول السلس والتباين مع ما قبله */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050c1e] to-[#02040a]" />
        
        {/* الـ Cyber Grid المتصل هندسياً بالموقع */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* إضاءة نيون ناعمة مخصصة تبرز كروت المحتوى */}
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      {/* خط فاصل علوي مضيء نيون */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 🎯 الجانب الأيمن: العناوين الضخمة والـ Visual Box المستوحى من صورة image_02f9d0.png */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            {/* الشارة العلوية الصغيرة وبجوارها أيقونة رسم بياني */}
            <div className="flex items-center gap-2 flex-row-reverse mb-4">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm md:text-base font-black tracking-wider">
                الاستشارات المالية الاستراتيجية
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
              MARKETING
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 uppercase tracking-widest mb-10">
              STRATEGY
            </h3>

            {/* الـ Dashboard Interactive Card التوضيحي الذي يحاكي رسمة اللابتوب والعملات في الصورة */}
            <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-xl p-6 flex flex-col justify-between group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              
              {/* محاكاة الشارت والنمو المالي الرقمي */}
              <div className="flex justify-between items-start w-full">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <PieChart className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-slate-500 font-mono block">STRATEGIC ROI</span>
                  <span className="text-lg font-black text-emerald-400">+142.8%</span>
                </div>
              </div>

              {/* الأعمدة البيانية التفاعلية المنتفخة */}
              <div className="flex items-end justify-center gap-3 h-32 w-full pt-4 px-2">
                <div className="w-full bg-slate-800 rounded-t-lg h-[40%] group-hover:h-[55%] transition-all duration-700 delay-100" />
                <div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg h-[75%] group-hover:h-[85%] transition-all duration-700" />
                <div className="w-full bg-slate-800 rounded-t-lg h-[50%] group-hover:h-[65%] transition-all duration-700 delay-200" />
                <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg h-[90%] group-hover:h-[100%] transition-all duration-700 delay-75" />
              </div>

              {/* تأثير نيون خلفي ناعم متناسق مع زوايا الصورة */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur opacity-30 pointer-events-none" />
            </div>
          </motion.div>

          {/* 🎯 الجانب الأيسر: قائمة المحاور الاستشارية الـ 3 المتطابقة تماماً مع بنية الصورة */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {strategicServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-6 group relative"
              >
                {/* الأيقونة الدائرية الملتفة المستوحاة من شكل الدوائر الزرقاء/البنفسجية في الصورة */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-950 border-2 border-t-blue-400 border-r-purple-500 border-b-purple-600 border-l-slate-800 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:rotate-45 transition-transform duration-500">
                  <item.icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                {/* تفاصيل المحور محاذاة لليمين بالكامل */}
                <div className="flex-1 text-right flex flex-col items-end">
                  
                  {/* العنوان العربي الفخم وفي أسفله خط بنفسجي حاد ممتد كالصورة */}
                  <h4 className="text-lg md:text-xl font-black text-white group-hover:text-purple-400 transition-colors leading-snug max-w-2xl mb-3">
                    {item.titleAr}
                  </h4>
                  
                  {/* الخط البنفسجي الممتد ليعطي اللمسة الهندسية للورقة الأصليّة */}
                  <div className="w-full h-px bg-gradient-to-l from-purple-500/40 via-purple-500/20 to-transparent mb-3" />

                  {/* الوصف باللغة الإنجليزية في الأسفل بمحاذاة يسار (LTR) */}
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