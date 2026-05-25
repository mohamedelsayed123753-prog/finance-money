"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Banknote, BarChart3, Target, Rocket, LucideIcon } from "lucide-react";
// تعديل الاستيراد ليكون للمجلد الحالي أو المسار الصحيح
import { useLanguage } from '../LanguageContext'; 

// تعريف الـ Interfaces لضمان استقرار الـ TypeScript
interface Service {
  icon: LucideIcon;
  title: string;
  points: string[];
}

interface ContentType {
  sectionTitle: string;
  services: Service[];
}

const CONTENT: Record<'ar' | 'en', ContentType> = {
  ar: {
    sectionTitle: "خدماتنا الرئيسية",
    services: [
      { icon: Banknote, title: "إدارة وتأسيس الشركات", points: ["خدمة دراسة الجدوى", "تحليل الأعمال", "إعادة هيكلة الشركات", "تعزيز الحوكمة"] },
      { icon: BarChart3, title: "الاستشارات المالية", points: ["تحليل البيانات المالية", "خدمة إعداد تقارير المخاطرة", "تصميم الهيكل التنظيمي", "خدمة تأسيس الشركات والمؤسسات"] },
      { icon: Target, title: "تطوير الأداء المالي", points: ["أعداد وتطوير نظام تطوير الأداء للمؤسسات والشركات", "دراسة أسباب التعثر وهيكلة التسهيلات والتفاوض مع الجهات المقرضة"] },
      { icon: Rocket, title: "السيولة والائتمان", points: ["خدمة تحسين التدفق النقدي (السيولة)", "دراسة الجدارة الائتمانية للتمويل", "دراسة الوضع الائتماني وطبيعة النشاط لغرض التوسع"] }
    ]
  },
  en: {
    sectionTitle: "OUR MAIN SERVICES",
    services: [
      { icon: Banknote, title: "Company Management & Establishment", points: ["Feasibility studies", "Business analysis", "Corporate restructuring", "Governance enhancement"] },
      { icon: BarChart3, title: "Financial Consulting", points: ["Financial data analysis", "Risk reporting services", "Organizational structure design", "Corporate establishment services"] },
      { icon: Target, title: "Financial Performance Development", points: ["Developing performance systems for institutions", "Analyzing financial distress and negotiating with lenders"] },
      { icon: Rocket, title: "Liquidity & Credit", points: ["Cash flow improvement (Liquidity)", "Creditworthiness study for financing", "Credit status & expansion strategy"] }
    ]
  }
};

export function MainServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // استخدام الـ hook اللي بيقرأ من الـ Provider اللي غلفنا بيه الـ Layout
  const { lang } = useLanguage();
  
  const data = CONTENT[lang as 'ar' | 'en'] || CONTENT['ar'];

  // ضيف السطر ده جوه الكومبوننت عشان نشوف هو شايف اللغة إيه
console.log("Current Language from Context:", lang);

  return (
    <section 
      id="MainServices" 
      className="py-20 bg-[#030712] text-white overflow-hidden" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6" ref={ref}>
        {/* العنوان بيتغير حسب اللغة والـ Direction */}
        <h2 className={`text-4xl font-black mb-16 ${lang === 'ar' ? 'text-right border-r-4' : 'text-left border-l-4'} border-purple-500 pr-6 pl-6 text-purple-400`}>
          {data.sectionTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {data.services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center gap-6 bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <div className="p-4 bg-purple-900/20 rounded-full text-purple-400">
                <service.icon size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <ul className="text-sm text-slate-400 space-y-1">
                  {service.points.map((p, i) => (
                    <li key={i}>{lang === 'ar' ? '• ' : ''}{p}{lang === 'en' ? ' •' : ''}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}