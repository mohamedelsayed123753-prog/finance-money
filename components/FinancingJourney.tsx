"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Lightbulb, Target } from "lucide-react";

export function FinancingJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#030712] text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">رحلتك نحو التمويل المناسب</h2>
          <h3 className="text-xl md:text-2xl text-purple-400 font-bold">Your Journey to the Right Financing</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* الجانب الأيمن: خدمات التأهيل والشراكة */}
          <div className="space-y-12 text-right">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
              <h4 className="text-xl font-bold mb-2">التأهيل المالي وبناء الجاهزية</h4>
              <p className="text-slate-400 text-sm">نساعدك في صياغة خطة عمل متكاملة وتطوير نماذج مالية تعكس قوة مشروعك.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
              <h4 className="text-xl font-bold mb-2">الشراكة الاستراتيجية حتى الإغلاق</h4>
              <p className="text-slate-400 text-sm">لا ينتهي دورنا عند تقديم الاستشارة؛ بل نرافقك خطوة بخطوة في جولات التفاوض وصياغة العقود.</p>
            </motion.div>
          </div>

          {/* المنتصف: تمثيل بياني جمالي (Graph Simulation) */}
          <div className="hidden lg:flex justify-center items-center">
             <div className="w-48 h-64 border-l-2 border-b-2 border-slate-700 relative flex items-end gap-2 p-2">
                <div className="w-8 bg-purple-600 h-[30%]" />
                <div className="w-8 bg-purple-500 h-[50%]" />
                <div className="w-8 bg-purple-400 h-[70%]" />
                <div className="w-8 bg-blue-400 h-[90%]" />
             </div>
          </div>

          {/* الجانب الأيسر: خدمات التوجيه والمطابقة */}
          <div className="space-y-12 text-right">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
              <h4 className="text-xl font-bold mb-2 flex items-center justify-end gap-2">
                <Compass className="text-purple-400" /> تحديد الاحتياج وتوجيه البوصلة
              </h4>
              <p className="text-slate-400 text-sm">نبدأ بتحليل دقيق لواقع مشروعك وتحديد حجم الفجوة التمويلية بدقة.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
              <h4 className="text-xl font-bold mb-2 flex items-center justify-end gap-2">
                <Lightbulb className="text-purple-400" /> مطابقة الخيارات وتصميم الحل البديل
              </h4>
              <p className="text-slate-400 text-sm">نقوم بمسح شامل لكافة مصادر التمويل المتاحة في السوق ومطابقتها مع طبيعة مخاطرك.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}