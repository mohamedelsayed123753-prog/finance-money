"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import Image from "next/image";
import { ShieldCheck, Lightbulb, Lock, Star } from "lucide-react";
import { useLanguage } from './LanguageContext';

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { lang } = useLanguage();
  
  const data = useMemo(() => {
    const VALUES_DATA = {
      ar: {
        sectionTitle: "القيم الجوهرية",
        items: [
          { id: "commitment", title: "الالتزام", desc: "الالتزام بأعلى المعايير الأخلاقية، والمهنية والشفافية المطلقة.", icon: ShieldCheck },
          { id: "innovation", title: "الابتكار", desc: "تطوير حلول مالية مرنة ومبتكرة، تواكب العصر الرقمي.", icon: Lightbulb },
          { id: "quality", title: "الجودة", desc: "الالتزام بتقديم خدمات وحلول مالية عالية الجودة وفق أفضل المعايير.", icon: Lock },
          { id: "confidentiality", title: "السرية", desc: "حماية بيانات العملاء ومعلوماتهم المالية بأقصى درجات الأمان.", icon: Star },
        ]
      },
      en: {
        sectionTitle: "CORE VALUES",
        items: [
          { id: "commitment", title: "COMMITMENT", desc: "Commitment to the highest ethical and professional standards and absolute transparency.", icon: ShieldCheck },
          { id: "innovation", title: "INNOVATION", desc: "Developing flexible and innovative financial solutions that keep pace with the digital era.", icon: Lightbulb },
          { id: "quality", title: "QUALITY", desc: "Delivering high-quality financial services according to the highest standards.", icon: Lock },
          { id: "confidentiality", title: "CONFIDENTIALITY", desc: "Safeguarding customer data and financial information using the highest security standards.", icon: Star },
        ]
      }
    };
    return (lang === 'ar' || lang === 'en') ? VALUES_DATA[lang] : VALUES_DATA.ar;
  }, [lang]);

  // تعديل الـ Animation ليكون أنعم بكتير
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, ease: "easeOut" } // تقليل التايمر لزيادة المرونة
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // يبدأ من تحت لتحت
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 60,  // قللنا الـ Stiffness عشان الحركة تبقى "سموث" مش "خشنة"
        damping: 12,    // زودنا الـ Damping عشان الارتداد يكون هادي
        mass: 0.8
      } 
    }
  };

  return (
    <section id="stats" className="py-24 relative bg-[#030712] overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Premium background composition */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient foundation with depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1318] via-[#030712] to-[#1e0f2a]" />
        
        {/* Animated radial shapes with golden theme */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 60% 30%, #bfa15f 0%, transparent 45%),
              radial-gradient(circle at 40% 70%, #7c3aed 0%, transparent 45%)
            `,
          }}
        />
        
        {/* Geometric pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #bfa15f 1px, transparent 1px), linear-gradient(to bottom, #bfa15f 1px, transparent 1px)`,
            backgroundSize: '55px 55px'
          }}
        />
        
        {/* Strategic glow placement */}
        <div className="absolute top-[-10%] right-[20%] w-[600px] h-[600px] rounded-full bg-[#bfa15f]/11 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-15%] w-[700px] h-[700px] rounded-full bg-purple-600/9 blur-[160px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={isInView ? "visible" : "hidden"} 
          className="grid lg:grid-cols-12 gap-16 items-center"
        >
          {/* الصورة خليناها تظهر بـ Fade بس عشان نركز الانسيابية في الكونتنت */}
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
            className="lg:col-span-5 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/jwels.png" 
              alt="Core Values" 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 1024px) 100vw, 40vw" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-white">
              {data.sectionTitle}
            </motion.h2>
            
            <div className="grid gap-6">
              {data.items.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants} 
                  whileHover={{ x: lang === 'ar' ? -5 : 5, transition: { duration: 0.2 } }}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="mt-1 p-4 rounded-2xl bg-purple-600/10 text-[#bfa15f]">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
