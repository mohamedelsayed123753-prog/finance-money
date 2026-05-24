"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Box, FileEdit, Megaphone, Cog } from "lucide-react";

const plans = [
  {
    icon: Box,
    text: "إعداد دراسات الجدوى الاقتصادية الشاملة للمشاريع الجديدة والتوسعية."
  },
  {
    icon: FileEdit,
    text: "دراسة وبناء خطط زيادة رأس المال واختيار مصادر التمويل الأنسب (تمويل بنكي، استثمار جريء، إلخ)."
  },
  {
    icon: Megaphone,
    text: "خطة تسويقية لمنتج جديد."
  }
];

export function FuturePlans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#030712] text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* الجانب الأيمن: العناوين */}
          <div className="flex-1 text-right">
            <h2 className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              FUTURE PLANS
            </h2>
            <div className="w-24 h-1 bg-purple-500 mb-8" />
            
            <div className="space-y-8">
              {plans.map((plan, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start gap-4 justify-end"
                >
                  <p className="text-lg text-slate-300 text-right">{plan.text}</p>
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <plan.icon size={28} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* الجانب الأيسر: أيقونة تروس كبيرة (تحاكي الرسمة في 9.jpg) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex-1 flex justify-center"
          >
            <div className="w-64 h-64 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(147,51,234,0.3)]">
              <Cog size={120} className="text-white animate-spin-slow" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}