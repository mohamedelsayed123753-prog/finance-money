"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, TrendingUp, RefreshCw, Activity } from "lucide-react";
import { useLanguage } from './LanguageContext'; // الاستيراد المضاف

const DATA = {
  ar: {
    badge: "الاستشارات المالية الاستراتيجية",
    titleMain: "استراتيجية",
    titleSub: "العمل المالي",
    services: [
      { id: "s1", title: "إعداد الخطط المالية", desc: "إعداد الخطط المالية طويلة وقصيرة الأجل، وتطوير الميزانيات التقديرية بدقة لضمان استقرار الأصول ونموها.", icon: TrendingUp },
      { id: "s2", title: "إعادة الهيكلة المالية", desc: "تنفيذ عمليات إعادة هيكلة مالية استراتيجية لرفع كفاءة التشغيل، وتحسين تخصيص النفقات، والتخلص من التكاليف الفائضة.", icon: RefreshCw },
      { id: "s3", title: "تحليل الأداء المالي", desc: "إجراء تقييم مستمر للأداء المالي، وتقديم تقارير دورية دقيقة لكشف نقاط القوة وفرص التحسين المتاحة.", icon: Activity },
    ]
  },
  en: {
    badge: "STRATEGIC FINANCIAL CONSULTING",
    titleMain: "FINANCIAL",
    titleSub: "STRATEGY",
    services: [
      { id: "s1", title: "Financial Planning", desc: "Preparing long and short-term financial plans, and developing precise budget estimates to ensure asset stability and growth.", icon: TrendingUp },
      { id: "s2", title: "Financial Restructuring", desc: "Executing strategic financial restructuring to enhance operational efficiency, optimize expense allocation, and eliminate surplus costs.", icon: RefreshCw },
      { id: "s3", title: "Financial Performance Analysis", desc: "Conducting continuous financial performance assessments and providing accurate periodic reports to reveal strengths and improvement opportunities.", icon: Activity },
    ]
  }
};

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const data = DATA[lang as 'ar' | 'en'];

  return (
    <section 
      id="marketing-strategy" 
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712] border-b border-white/5" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#050c1e] via-[#030712] to-[#030712]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            key={lang}
            initial={{ opacity: 0, x: lang === 'ar' ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 flex flex-col items-center lg:items-start text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-black tracking-wider uppercase">{data.badge}</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-wide">
              {data.titleMain}
            </h2>
            <h3 className="text-3xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent uppercase mb-10 leading-[1.4] pb-2 tracking-wide">
              {data.titleSub}
            </h3>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            {data.services.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-6 group ${lang === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-purple-500/50 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <div className={`w-16 h-0.5 bg-purple-500 mb-3 ${lang === 'ar' ? 'mr-0' : 'ml-0'}`} />
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}