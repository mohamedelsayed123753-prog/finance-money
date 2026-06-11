"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, Briefcase, Handshake } from "lucide-react";
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    title: "رحلتك نحو التمويل المناسب",
    sub: "خطواتنا نحو نجاح مشروعك",
    steps: [
      { title: "التأهيل المالي وبناء الجاهزية", desc: "نساعدك في صياغة خطة عمل متكاملة وتطوير نماذج مالية متماسكة تعكس قوة مشروعك، مما يرفع من مستوى موثوقيتك ويجعلك الخيار الأول والأكثر جاذبية لجهات التمويل", icon: Briefcase },
      { title: "الشراكة الاستراتيجية حتى الإغلاق", desc: "لا ينتهي دورنا عند تقديم الاستشارة؛ بل نرافقك خطوة بخطوة في جولات التفاوض، وصياغة العقود، وحتى استلام التدفقات النقدية التي تضمن انطلاقة مشروعك واستدامته", icon: Handshake },
      { title: "تحديد الاحتياج وتوجيه البوصلة", desc: "نبدأ بتحليل دقيق لواقع مشروعك المالي وتحديد حجم الفجوة التمويلية بدقة، لضمان توجيه الدعم نحو القنوات التي تحقق أعلى عائد استثماري وتخدم أهدافك التوسعية", icon: Compass },
      { title: "مطابقة الخيارات وتصميم الحل البديل", desc: "نقوم بمسح شامل لكافة مصادر التمويل المتاحة في السوق ومطابقتها مع طبيعة مخاطر وحجم (جريء، ملائكي، بنكي) مشروعك، لنختار لك الهيكل التمويلي الأكثر أماناً والأقل تكلفة", icon: Lightbulb }
    ]
  },
  en: {
    title: "Your Journey to the Right Financing",
    sub: "Our steps towards your project's success",
    steps: [
      { title: "Financial qualification and readiness building", desc: "We help you formulate a comprehensive business plan and develop coherent financial models that reflect the strength of your project, thus increasing your credibility and making you the first and most attractive choice for funding entities.", icon: Briefcase },
      { title: "Strategic partnership until closing", desc: "Our role doesn't end with providing advice; rather, we accompany you step by step through negotiation rounds, contract drafting, and even securing the cash flows that ensure the launch and sustainability of your project.", icon: Handshake },
      { title: "IDENTIFYING THE NEED AND SETTING THE COMPASS", desc: "We begin with a thorough analysis of your project's financial situation and a precise determination of the funding gap, to ensure that support is directed towards the channels that achieve the highest return on investment and serve your expansion goals.", icon: Compass },
      { title: "MATCHING OPTIONS AND DESIGNING AN ALTERNATIVE SOLUTION", desc: "We conduct a comprehensive survey of all available funding sources in the market (venture, angel, bank) and match them with the nature of your project's risks and size, to select the safest and least costly financing structure for you.", icon: Lightbulb }
    ]
  }
};

export function FinancingJourney() {
  const { lang } = useLanguage();
  const currentLang = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="journey" className="py-24 bg-[#030712] text-white overflow-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#e5c378] to-[#bfa15f]">
            {data.title}
          </h2>
          <p className="text-xl text-[#bfa15f]/80 font-bold">{data.sub}</p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                {(() => { const Icon = data.steps[0].icon; return <Icon className="text-[#bfa15f]" size={24} />; })()}
                {data.steps[0].title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[0].desc}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                {(() => { const Icon = data.steps[1].icon; return <Icon className="text-[#bfa15f]" size={24} />; })()}
                {data.steps[1].title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[1].desc}</p>
            </motion.div>
          </div>

          <div className="hidden lg:flex justify-center items-end h-64 gap-4">
            {[90, 70, 50, 30].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0 }} 
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }} 
                className={`w-10 rounded-t-lg ${i % 2 === 0 ? 'bg-[#bfa15f]' : 'bg-[#1e3a8a]'}`} 
              />
            ))}
          </div>

          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                {(() => { const Icon = data.steps[2].icon; return <Icon className="text-[#bfa15f]" size={24} />; })()}
                {data.steps[2].title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[2].desc}</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                {(() => { const Icon = data.steps[3].icon; return <Icon className="text-[#bfa15f]" size={24} />; })()}
                {data.steps[3].title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">{data.steps[3].desc}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}