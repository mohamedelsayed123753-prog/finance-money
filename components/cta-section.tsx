"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BarChart3, TrendingUp, RefreshCw, Activity } from "lucide-react";
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    badge: "الاستشارات المالية الاستراتيجية",
    titleMain: "استراتيجية",
    titleSub: "العمل المالي",
    services: [
      { id: "s1", title: "إعداد الخطط المالية", desc: "إعداد الخطط المالية طويلة وقصيرة الأجل وتطوير الميزانيات.", icon: TrendingUp },
      { id: "s2", title: "إعادة الهيكلة المالية", desc: "رفع كفاءة التشغيل وتحسين تخصيص النفقات.", icon: RefreshCw },
      { id: "s3", title: "تحليل الأداء المالي", desc: "تقييم الأداء المالي وتقديم تقارير دقيقة.", icon: Activity },
    ]
  },
  en: {
    badge: "STRATEGIC FINANCIAL CONSULTING",
    titleMain: "FINANCIAL",
    titleSub: "STRATEGY",
    services: [
      { id: "s1", title: "Financial Planning", desc: "Long and short-term plans and budget development.", icon: TrendingUp },
      { id: "s2", title: "Financial Restructuring", desc: "Enhance efficiency and optimize expense allocation.", icon: RefreshCw },
      { id: "s3", title: "Financial Performance Analysis", desc: "Continuous assessment and reporting.", icon: Activity },
    ]
  }
};

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { lang } = useLanguage();
  
  const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  return (
    <section 
      id="marketing-strategy" 
      ref={ref}
      className="min-h-[85vh] flex flex-col justify-center py-12 relative overflow-hidden bg-[#030712] border-b border-white/5" 
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight break-words">
            {data.titleMain} <span className="text-purple-500">{data.titleSub}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* الصورة - حركة أسرع (0.8 ثانية) */}
          <motion.div 
            key={isInView ? "visible" : "hidden"}
            initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
            className="lg:col-span-5 relative h-[350px] lg:h-[450px] w-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.2)]"
          >
            <Image 
              src="images/workGod.png" 
              alt="Strategy" 
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* الخدمات */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {data.services.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-blue-400 border border-white/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}