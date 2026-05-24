"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Banknote, BarChart3, Target, Rocket } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "إدارة وتأسيس الشركات",
    points: ["خدمة دراسة الجدوى", "تحليل الأعمال", "إعادة هيكلة الشركات", "تعزيز الحوكمة"]
  },
  {
    icon: BarChart3,
    title: "الاستشارات المالية",
    points: ["تحليل البيانات المالية", "خدمة إعداد تقارير المخاطرة", "تصميم الهيكل التنظيمي", "خدمة تأسيس الشركات والمؤسسات"]
  },
  {
    icon: Target,
    title: "تطوير الأداء المالي",
    points: ["أعداد وتطوير نظام تطوير الأداء للمؤسسات والشركات", "دراسة أسباب التعثر وهيكلة التسهيلات والتفاوض مع الجهات المقرضة"]
  },
  {
    icon: Rocket,
    title: "السيولة والائتمان",
    points: ["خدمة تحسين التدفق النقدي (السيولة)", "دراسة الجدارة الائتمانية للتمويل", "دراسة الوضع الائتماني وطبيعة النشاط لغرض التوسع"]
  }
];

export function MainServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#030712] text-white overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className="text-4xl font-black mb-16 text-right border-r-4 border-purple-500 pr-6">
          خدماتنا الرئيسية <span className="block text-xl text-purple-400 font-normal">OUR MAIN SERVICES</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6 bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all"
            >
              <div className="p-4 bg-purple-900/20 rounded-full text-purple-400"><service.icon size={32}/></div>
              <div className="text-right">
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <ul className="text-sm text-slate-400 space-y-1">
                  {service.points.map((p, i) => <li key={i}>• {p}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}