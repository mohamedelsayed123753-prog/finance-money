"use client";

import { motion } from "framer-motion";
import { Box, FileText, Megaphone } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const DATA: Record<string, any> = {
  ar: {
    title: "الخطة المستقبلية", // شلت المسافة الزيادة لضبط التوسيط
    plans: [
      {
        icon: Box,
        title: "إعداد دراسات الجدوى الاقتصادية الشاملة للمشاريع الجديدة والتوسعية.",
      },
      {
        icon: FileText,
        title: "دراسة وبناء خطط زيادة رأس المال واختيار مصادر التمويل الأنسب.",
      },
      { icon: Megaphone, title: "خطة تسويقية لمنتج جديد." },
    ],
  },
  en: {
    title: "Future Plans", // شلت المسافة الزيادة لضبط التوسيط
    plans: [
      { icon: Box, title: "A team with decades of accumulated experience." },
      {
        icon: FileText,
        title: "The preparation of comprehensive economic feasibility studies.",
      },
      { icon: Megaphone, title: "Marketing business plan for a new product." },
    ],
  },
};

export function FuturePlans() {
  const { lang } = useLanguage();
  const data = DATA[lang] || DATA.ar;

  return (
    <section
      id="future-plans"
      className="py-24 bg-[#030712] text-white overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        {/* العنوان السينمائي: تم تعديل الـ padding والـ initial state لضمان عدم القص */}
        <motion.h2
          initial={{ opacity: 0, y: -20, rotateX: -45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-black text-center mb-20 py-4 italic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#bfa15f] to-[#bfa15f]"
        >
          {data.title}
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <Image
              src="/images/newe.png"
              alt="BSS Future Plans"
              width={400}
              height={400}
              priority={true}
              className="w-full max-w-[400px] h-auto object-contain"
            />
          </motion.div>

          {/* المحتوى */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            {data.plans.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6 + idx * 0.3,
                  ease: "easeOut",
                }}
                className="flex items-start gap-5"
              >
                <div className="p-2">
                  <item.icon size={24} className="text-[#bfa15f] shrink-0" />
                </div>
                <h4 className="text-lg font-medium text-slate-300 pt-0.5">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}