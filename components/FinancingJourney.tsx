"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Lightbulb } from "lucide-react";
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    title: "رحلتك نحو التمويل المناسب",
    sub: "خطواتنا نحو نجاح مشروعك",
    steps: [
      { title: "التأهيل المالي وبناء الجاهزية", desc: "نساعدك في صياغة خطة عمل متكاملة وتطوير نماذج مالية متماسكة تعكس قوة مشروعك." },
      { title: "الشراكة الاستراتيجية حتى الإغلاق", desc: "نرافقك خطوة بخطوة في جولات التفاوض، وصياغة العقود، وحتى استلام التدفقات النقدية." },
      { title: "تحديد الاحتياج وتوجيه البوصلة", desc: "تحليل دقيق لواقع مشروعك المالي وتحديد حجم الفجوة التمويلية لضمان أعلى عائد." },
      { title: "مطابقة الخيارات وتصميم الحل", desc: "مسح شامل لكافة مصادر التمويل المتاحة واختيار الهيكل التمويلي الأكثر أماناً." }
    ]
  },
  en: {
    title: "Your Journey to the Right Financing",
    sub: "Our steps towards your project's success",
    steps: [
      { title: "Financial Qualification & Readiness", desc: "We help you craft a comprehensive business plan and develop financial models that reflect your project's strength." },
      { title: "Strategic Partnership Until Closing", desc: "We accompany you step-by-step through negotiations, contract drafting, and receiving cash flows." },
      { title: "Need Identification & Compass", desc: "Accurate analysis of your project's reality and defining the funding gap to ensure the highest returns." },
      { title: "Matching Options & Custom Solution", desc: "A comprehensive scan of all available funding sources to choose the most secure financial structure." }
    ]
  }
};

export function FinancingJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  
  // فصل تام للبيانات بناءً على اللغة
  const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="journey" className="py-24 bg-[#030712] text-white overflow-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4">{data.title}</h2>
          <p className="text-xl text-purple-400 font-bold">{data.sub}</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* الجانب الأيمن */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 text-white">{data.steps[0].title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[0].desc}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 text-white">{data.steps[1].title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[1].desc}</p>
            </motion.div>
          </div>

          {/* المنتصف (تصميم متطور للرسم البياني) */}
          <div className="hidden lg:flex justify-center items-end h-64 gap-3 relative">
            {[30, 50, 70, 90].map((h, i) => (
              <motion.div key={i} initial={{ height: 0 }} animate={isInView ? { height: `${h}%` } : {}} transition={{ duration: 1.5, delay: i * 0.2 }} className={`w-10 rounded-t-lg ${i === 3 ? 'bg-blue-500' : 'bg-purple-500/80'}`} />
            ))}
          </div>

          {/* الجانب الأيسر */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Compass className="text-purple-400" /> {data.steps[2].title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[2].desc}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-purple-400" /> {data.steps[3].title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[3].desc}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}