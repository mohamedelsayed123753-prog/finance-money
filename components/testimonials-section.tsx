"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronLeft, ShieldCheck, PieChart, TrendingUp, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

// المحتوى المستوحى بالكامل من صورة 4.png وبأعلى دقة ترجمة وصياغة فخمة
const planSteps = [
  {
    id: "step-1",
    titleAr: "تخطيط الثروات وإدارة المحافظ (للأفراد والشركات)",
    titleEn: "Wealth planning and portfolio management (for individuals and companies)",
    pointsAr: [
      "تصميم استراتيجيات استثمارية متنوعة تتناسب مع حجم التدفقات النقدية ومستوى تحمل المخاطر.",
      "توجيه الاستثمارات نحو القطاعات الأكثر نمواً واستقراراً في السوق.",
    ],
    pointsEn: [
      "Designing diverse investment strategies that are appropriate to the size of cash flows and the level of risk tolerance.",
      "Directing investments towards the most growing and stable sectors.",
    ],
    icon: PieChart,
    color: "from-purple-500 to-blue-500",
  },
  {
    id: "step-2",
    titleAr: "إدارة المخاطر والامتثال المالي والتنظيمي",
    titleEn: "Risk management and compliance",
    pointsAr: [
      "تحليل المخاطر المادية والتشغيلية ووضع خطط التحوط المالي لحماية الأصول الكبرى.",
      "ضمان توافق العمليات المالية مع القوانين والتشريعات الضريبية والمحاسبية المحلية والدولية.",
      "تطوير نظم الرقابة الداخلية وإجراء التدقيق المالي الداخلي الدوري بكفاءة.",
    ],
    pointsEn: [
      "Analysis physical and operational risks and developing financial hedging plans to risk management.",
      "Ensuring financial operations comply with local and international tax and accounting laws and regulations.",
      "Developing internal control systems and conducting internal financial audits.",
    ],
    icon: ShieldCheck,
    color: "from-blue-500 to-purple-600",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % planSteps.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + planSteps.length) % planSteps.length);
  };

  const ActiveIcon = planSteps[currentIndex].icon;

  return (
    <section
      id="business-plan"
      className="py-24 md:py-32 relative overflow-hidden bg-[#060b19]"
    >
      {/* 🌌 الخلفية الرقمية مع التدرجات والـ Cyber Grid المتصل هندسياً */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#060b19] to-[#030712]" />

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

        {/* التوهج المركزي المضيء خلف كارت خطة العمل */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-purple-500/10 blur-[140px]" />
        
        {/* 📐 تلميح هندسي مجرد للمثلثات المتداخلة الموجودة أسفل كلمة Business Plan في الصورة */}
        <div className="absolute left-[8%] top-[25%] opacity-15 hidden xl:block">
          <div className="flex gap-2">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-purple-500" />
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-blue-400 transform rotate-180" />
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-purple-600" />
          </div>
        </div>
      </div>

      {/* خط فاصل علوي مضيء نيون */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        
        {/* 🎯 العناوين الرئيسية المستوحاة من نص واستايل الصورة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-purple-400 text-sm font-bold tracking-wider mb-4 block uppercase">
            المنهجية الاستراتيجية
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-normal md:leading-tight">
            خطة العمل المالي{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 px-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-500/40 after:to-transparent">
              BUSINESS PLAN
            </span>
          </h2>
        </motion.div>

        {/* السلايدر الزجاجي المتطور لعرض محاور الخطة الاستراتيجية */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group">
            
            {/* خط حاد نيون بنفسجي مستوحى من خطوط الهيكل بالصورة */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-purple-500 to-transparent" />
            <Layers className="absolute top-8 left-8 w-16 h-16 text-purple-500/5 pointer-events-none" />

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, x: 15 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* الرأس: الأيقونة + العنوان باللغتين */}
              <div className="flex flex-col items-center text-center mb-8 pb-6 border-b border-white/5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${planSteps[currentIndex].color} p-px mb-4 shadow-lg`}>
                  <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-white">
                    <ActiveIcon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-2 font-arabic">
                  {planSteps[currentIndex].titleAr}
                </h3>
                <p className="text-sm md:text-base font-medium text-purple-400 uppercase tracking-wide font-sans max-w-xl">
                  {planSteps[currentIndex].titleEn}
                </p>
              </div>

              {/* شبكة توزيع النقاط (عربي على اليمين - إنجليزي على اليسار) مثل توزيع الورقة بالصورة */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                
                {/* 🇸🇦 الجانب الأيمن: النقاط بالعربية */}
                <div className="flex flex-col gap-4 border-r-2 border-purple-500/30 pr-4">
                  {planSteps[currentIndex].pointsAr.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 flex-row-reverse">
                      <span className="text-purple-400 text-lg mt-0.5">•</span>
                      <p className="text-slate-100 text-base md:text-lg font-bold leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 🇬🇧 الجانب الأيسر: النقاط بالإنجليزية (محاذاة يسار كلياً) */}
                <div className="flex flex-col gap-4 border-l-2 border-blue-500/20 pl-4 text-left direction-ltr">
                  {planSteps[currentIndex].pointsEn.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 text-lg mt-0.5">•</span>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

            {/* أزرار التحكم الفخمة لتقليب محاور خطة العمل */}
            <div className="flex items-center justify-center gap-4 mt-10 relative z-20 pt-4 border-t border-white/5">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-white/10 bg-slate-950 text-slate-300 hover:bg-purple-500/20 hover:text-white transition-all rounded-xl w-10 h-10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {planSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-purple-500" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-white/10 bg-slate-950 text-slate-300 hover:bg-purple-500/20 hover:text-white transition-all rounded-xl w-10 h-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

          </div>
        </motion.div>
      </div>

      {/* خط فاصل سفلي نيون بنفسجي ناعم يعيد انسيابية التصفح للداكن */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </section>
  );
}