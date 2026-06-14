"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ShieldCheck, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    sectionTitle: "خطة العمل المالي",
    steps: [
      {
        id: "step-1",
        title: "تخطيط الثروات وإدارة المحافظ (للأفراد والشركات)",
        points: ["تصميم استراتيجيات استثمارية متنوعة تتناسب مع حجم التدفقات النقدية ومستوى تحمل المخاطر.", "توجيه الاستثمارات نحو القطاعات الأكثر نمواً واستقراراً."],
        icon: PieChart,
      },
      {
        id: "step-2",
        title: "إدارة المخاطر والامتثال",
        points: ["تحليل المخاطر المادية والتشغيلية ووضع خطط التحوط المالي لحماية الأصول.", "ضمان توافق العمليات المالية مع القوانين والتشريعات الضريبية والمحاسبية المحلية والدولية.", "تطوير نظم الرقابة الداخلية وإجراء التدقيق المالي الداخلي."],
        icon: ShieldCheck,
      },
    ]
  },
  en: {
    sectionTitle: "BUSINESS PLAN",
    steps: [
      {
        id: "step-1",
        title: "Wealth planning and portfolio management (for individuals and companies)",
        points: ["Designing diverse investment strategies that are appropriate to the size of cash flows and the level of risk tolerance.", "Directing investments towards the most growing and stable sectors."],
        icon: PieChart,
      },
      {
        id: "step-2",
        title: "Risk management and compliance",
        points: ["Analysis physical and operational risks and developing financial hedging plans to risk management.", "Ensuring financial operations comply with local and international tax and accounting laws and regulations.", "Developing internal control systems and conducting internal financial audits."],
        icon: ShieldCheck,
      },
    ]
  }
};

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { lang } = useLanguage();
  const data = useMemo(() => DATA[lang === 'ar' ? 'ar' : 'en'], [lang]);


  useMemo(() => setCurrentIndex(0), [lang]);

  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % data.steps.length), [data.steps.length]);
  const prev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + data.steps.length) % data.steps.length), [data.steps.length]);

  const activeStep = data.steps[currentIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="financial-plan" className="py-24 md:py-32 relative overflow-hidden bg-[#030712]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(#bfa15f 1px, transparent 1px)", backgroundSize: "50px 50px" }} 
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
                {data.sectionTitle}
            </span> 
          </h2>
          <div className="w-24 h-1 bg-[#bfa15f] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 rounded-2xl bg-[#bfa15f]/20 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            
            <div className="relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border border-[#bfa15f]/20 bg-[#030712]">
              <Image
                src="/images/planWork.png" 
                alt="Financial Strategy Team"
                fill
                priority
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent/40" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-[#0a0f1d] backdrop-blur-lg border border-[#bfa15f]/10 rounded-3xl p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${lang}-${activeStep.id}`} 
                  initial={{ opacity: 0, filter: "blur(10px)", x: lang === 'ar' ? 20 : -20 }} 
                  animate={{ opacity: 1, filter: "blur(0px)", x: 0 }} 
                  exit={{ opacity: 0, filter: "blur(10px)", x: lang === 'ar' ? -20 : 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#bfa15f]/10 p-px mb-4">
                      <div className="w-full h-full bg-[#030712] rounded-[15px] flex items-center justify-center text-[#bfa15f]">
                        <ActiveIcon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white">{activeStep.title}</h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    {activeStep.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-[#bfa15f]/5 rounded-xl border border-[#bfa15f]/10">
                        <div className="w-1.5 h-1.5 mt-2.5 bg-[#bfa15f] rounded-full shrink-0" />
                        <p className="text-slate-300 font-medium leading-relaxed">{p}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-6 mt-10 pt-6 border-t border-[#bfa15f]/10">
                <Button onClick={lang === 'ar' ? next : prev} variant="outline" size="icon" className="rounded-xl border-[#bfa15f]/30 hover:bg-[#bfa15f]/20 text-white"><ChevronRight size={20} /></Button>
                <div className="flex gap-2">
                  {data.steps.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-[#bfa15f]" : "w-2 bg-white/10"}`} />
                  ))}
                </div>
                <Button onClick={lang === 'ar' ? prev : next} variant="outline" size="icon" className="rounded-xl border-[#bfa15f]/30 hover:bg-[#bfa15f]/20 text-white"><ChevronLeft size={20} /></Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}