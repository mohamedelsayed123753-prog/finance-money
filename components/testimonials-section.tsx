"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useCallback, useMemo } from "react";
import { ChevronRight, ChevronLeft, ShieldCheck, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageContext'; // الاستيراد الأساسي

const DATA = {
  ar: {
    sectionTitle: "خطة العمل المالي",
    steps: [
      {
        id: "step-1",
        title: "تخطيط الثروات وإدارة المحافظ",
        points: ["تصميم استراتيجيات استثمارية متنوعة تتناسب مع حجم التدفقات النقدية.", "توجيه الاستثمارات نحو القطاعات الأكثر نمواً واستقراراً في السوق."],
        icon: PieChart,
        color: "from-purple-500 to-blue-500",
      },
      {
        id: "step-2",
        title: "إدارة المخاطر والامتثال المالي",
        points: ["تحليل المخاطر التشغيلية ووضع خطط التحوط المالي لحماية الأصول.", "ضمان توافق العمليات المالية مع القوانين والتشريعات المحلية والدولية."],
        icon: ShieldCheck,
        color: "from-blue-500 to-purple-600",
      },
    ]
  },
  en: {
    sectionTitle: "FINANCIAL STRATEGY",
    steps: [
      {
        id: "step-1",
        title: "Wealth planning and portfolio management",
        points: ["Designing diverse investment strategies appropriate to cash flow size.", "Directing investments towards growing and stable sectors."],
        icon: PieChart,
        color: "from-purple-500 to-blue-500",
      },
      {
        id: "step-2",
        title: "Risk management and compliance",
        points: ["Analyzing operational risks and developing financial hedging plans.", "Ensuring financial operations comply with local and international regulations."],
        icon: ShieldCheck,
        color: "from-blue-500 to-purple-600",
      },
    ]
  }
};

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { lang } = useLanguage();
  const data = useMemo(() => DATA[lang as 'ar' | 'en'], [lang]);

  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % data.steps.length), [data.steps.length]);
  const prev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + data.steps.length) % data.steps.length), [data.steps.length]);

  const activeStep = data.steps[currentIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="financial-plan" className="py-24 relative overflow-hidden bg-[#060b19]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)", backgroundSize: "40px 40px" }} 
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {data.sectionTitle}
            </span> 
          </h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="max-w-4xl mx-auto">
          <div className="relative bg-slate-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep.id} 
                initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
              >
                <div className="flex flex-col items-center text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeStep.color} p-px mb-4`}>
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-white">
                      <ActiveIcon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white">{activeStep.title}</h3>
                </div>

                <div className="flex flex-col gap-4">
                  {activeStep.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-1.5 h-1.5 mt-2.5 bg-purple-500 rounded-full shrink-0" />
                      <p className="text-slate-100 font-bold">{p}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-6 mt-10 pt-6 border-t border-white/5">
              <Button onClick={lang === 'ar' ? next : prev} variant="outline" size="icon" className="rounded-xl border-purple-500/30 hover:bg-purple-900/20"><ChevronRight size={20} /></Button>
              <div className="flex gap-2">
                {data.steps.map((_, i) => (
                  <div key={i} className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-purple-500" : "w-2 bg-white/20"}`} />
                ))}
              </div>
              <Button onClick={lang === 'ar' ? prev : next} variant="outline" size="icon" className="rounded-xl border-purple-500/30 hover:bg-purple-900/20"><ChevronLeft size={20} /></Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}