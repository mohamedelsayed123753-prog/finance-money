"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Lightbulb, Target } from "lucide-react";
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    title: "رحلتك نحو التمويل المناسب",
    sub: "Your Journey to the Right Financing",
    steps: [
      { title: "التأهيل المالي وبناء الجاهزية", desc: "نساعدك في صياغة خطة عمل متكاملة وتطوير نماذج مالية تعكس قوة مشروعك." },
      { title: "الشراكة الاستراتيجية حتى الإغلاق", desc: "لا ينتهي دورنا عند تقديم الاستشارة؛ بل نرافقك خطوة بخطوة في جولات التفاوض وصياغة العقود." },
      { title: "تحديد الاحتياج وتوجيه البوصلة", desc: "نبدأ بتحليل دقيق لواقع مشروعك وتحديد حجم الفجوة التمويلية بدقة.", icon: Compass },
      { title: "مطابقة الخيارات وتصميم الحل البديل", desc: "نقوم بمسح شامل لكافة مصادر التمويل المتاحة في السوق ومطابقتها مع طبيعة مخاطرك.", icon: Lightbulb }
    ]
  },
  en: {
    title: "Your Journey to the Right Financing",
    sub: "Your Journey to the Right Financing",
    steps: [
      { title: "Financial Qualification & Readiness", desc: "We help you craft a comprehensive business plan and develop financial models that reflect your project's strength." },
      { title: "Strategic Partnership Until Closing", desc: "Our role doesn't end with consulting; we accompany you step-by-step through negotiations and contract drafting." },
      { title: "Need Identification & Compass Guidance", desc: "We start with an accurate analysis of your project's reality and define the funding gap.", icon: Compass },
      { title: "Matching Options & Custom Solution Design", desc: "We conduct a comprehensive scan of all available market funding sources and match them with your risk profile.", icon: Lightbulb }
    ]
  }
};

export function FinancingJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const data = DATA[lang as 'ar' | 'en'];

  return (
    <section id="journey" className="py-24 bg-[#030712] text-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">{data.title}</h2>
          <h3 className="text-xl md:text-2xl text-purple-400 font-bold">{data.sub}</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* الجانب الأيمن */}
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
              <h4 className="text-xl font-bold mb-2">{data.steps[0].title}</h4>
              <p className="text-slate-400 text-sm">{data.steps[0].desc}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
              <h4 className="text-xl font-bold mb-2">{data.steps[1].title}</h4>
              <p className="text-slate-400 text-sm">{data.steps[1].desc}</p>
            </motion.div>
          </div>

          {/* المنتصف */}
          <div className="hidden lg:flex justify-center items-center">
             <div className="w-48 h-64 border-l-2 border-b-2 border-slate-700 relative flex items-end gap-2 p-2">
                <div className="w-8 bg-purple-600 h-[30%]" />
                <div className="w-8 bg-purple-500 h-[50%]" />
                <div className="w-8 bg-purple-400 h-[70%]" />
                <div className="w-8 bg-blue-400 h-[90%]" />
             </div>
          </div>

          {/* الجانب الأيسر */}
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Compass className="text-purple-400" /> {data.steps[2].title}
              </h4>
              <p className="text-slate-400 text-sm">{data.steps[2].desc}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-purple-400" /> {data.steps[3].title}
              </h4>
              <p className="text-slate-400 text-sm">{data.steps[3].desc}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}