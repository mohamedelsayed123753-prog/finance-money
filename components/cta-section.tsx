"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Mail } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]" /* 👈 رجعنا للون الأساسي الداكن ليحدث تباين صارخ مع السيكشن اللي قبله */
    >
      {/* الخلفية الرقمية */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#02040a]" />

        {/* الـ Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* إضاءة خلفية نيون مخصصة للكارت */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* الكارت الزجاجي العملاق البارز نتيجة التباين اللوني الجديد */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 max-w-5xl mx-auto text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* شارة الاستشارة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              استشارة مجانية
            </span>
          </motion.div>

          {/* العنوان الرئيسي */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight"
          >
            هل أنت مستعد لـ
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 px-2 block sm:inline">
              صناعة مستقبلك المالي؟
            </span>
          </motion.h2>

          {/* الوصف */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            احجز استشارتك المجانية اليوم ودعنا نساعدك في رسم خارطة طريق واضحة نحو تحقيق أهدافك المالية
          </motion.p>

          {/* الأزرار */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 relative z-10"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 font-bold px-10 py-6 text-lg group rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 w-full sm:w-auto"
            >
              احجز موعدك الآن
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform text-white" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-slate-950 text-slate-200 hover:bg-blue-500/10 hover:text-white hover:border-blue-500/30 font-bold px-10 py-6 text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
            >
              تعرف على خدماتنا
            </Button>
          </motion.div>

          {/* معلومات الاتصال */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 font-medium"
          >
            <a href="tel:+966500000000" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
              <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
              <span dir="ltr">+966 50 000 0000</span>
            </a>
            <a href="mailto:info@alfakhama.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
              <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
              <span>info@alfakhama.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}