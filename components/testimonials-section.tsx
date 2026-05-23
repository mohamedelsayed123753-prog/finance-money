"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronRight, ChevronLeft, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "تعاملنا مع الفخامة للاستشارات كان نقطة تحول في مسيرة شركتنا المالية. خبرتهم وتفانيهم ساهم في تحقيق نمو مستدام تجاوز توقعاتنا.",
    name: "أحمد الراشد",
    title: "الرئيس التنفيذي",
    company: "مجموعة الراشد القابضة",
  },
  {
    quote: "الاحترافية والسرية التي يتمتع بها فريق الفخامة جعلتهم الخيار الأول لنا في إدارة ثرواتنا العائلية. نتائج مبهرة وخدمة استثنائية.",
    name: "سارة المنصور",
    title: "مديرة الاستثمار",
    company: "عائلة المنصور",
  },
  {
    quote: "ساعدتنا استشاراتهم في إعادة هيكلة ديوننا وتحسين التدفقات النقدية بشكل ملحوظ. فريق محترف يفهم تحديات السوق الخليجي.",
    name: "خالد العتيبي",
    title: "المدير المالي",
    company: "شركة العتيبي للتجارة",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 relative overflow-hidden bg-[#060b19]" /* 👈 درجة الخلفية المريحة للفصل البصري */
    >
      {/* الخلفية الرقمية */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#060b19] to-[#030712]" />

        {/* الـ Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* توهج جانبي مكثف يفصل السيكشن */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      {/* خط فاصل علوي مضيء وصريح */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* العناوين */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-400 text-sm font-bold tracking-wider mb-4 block">
            آراء عملائنا
          </span>
          
          {/* 🎯 تعديل العنوان لحمايته هندسياً ومنع تداخل الحروف مع الـ Gradient السفلي */}
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-normal md:leading-tight">
            قصص نجاح{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 px-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-500/40 after:to-transparent"> 
              عملائنا
            </span>
          </h2>
        </motion.div>

        {/* السلايدر الزجاجي النقي المنفصل بصرياً */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/10" />

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-lg md:text-2xl text-slate-100 leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <span className="text-2xl font-black text-blue-400">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm md:text-base text-slate-400">
                  {testimonials[currentIndex].title}
                  {testimonials[currentIndex].company && ` - ${testimonials[currentIndex].company}`}
                </p>
              </div>
            </motion.div>

            {/* أزرار التحكم */}
            <div className="flex items-center justify-center gap-4 mt-8 relative z-20">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-white/10 bg-slate-950 text-slate-300 hover:bg-blue-500/20 hover:text-white transition-all rounded-xl"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-white/10 bg-slate-950 text-slate-300 hover:bg-blue-500/20 hover:text-white transition-all rounded-xl"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* خط فاصل سفلي مضيء ينهي السيكشن بنعومة ويرجّعنا للداكن */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </section>
  )
}