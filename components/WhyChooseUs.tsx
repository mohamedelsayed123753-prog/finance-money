"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Cpu, Settings, Award } from "lucide-react";

const reasons = [
  {
    icon: Network,
    title: "شبكة علاقات واسعة",
    desc: "نمتلك شبكة قوية مع المؤسسات المصرفية والجهات الاستثمارية لتسهيل الحلول التمويلية."
  },
  {
    icon: Cpu,
    title: "التزام بالتكنولوجيا",
    desc: "نقدم أحدث برمجيات التحليل المالي والذكاء الاصطناعي لضمان دقة وسرعة النتائج."
  },
  {
    icon: Settings,
    title: "حلول مخصصة",
    desc: "لا نؤمن بالحلول الجاهزة؛ بل ندرس كل منشأة بشكل منفصل لنقدم حلاً يناسب أعمالها."
  },
  {
    icon: Award,
    title: "خبرة ممتدة",
    desc: "فريق عمل يمتلك عقوداً من الخبرة التراكمية في قطاعات مالية واستثمارية متعددة."
  }
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#02040a] text-white">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">لماذا تختار شركة فيري القابضة؟</h2>
          <h3 className="text-2xl text-purple-500 font-bold uppercase tracking-widest">WHY CHOOSE US?</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0f1118] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}