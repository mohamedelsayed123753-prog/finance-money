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
  {
    quote: "خدمة التخطيط للتقاعد التي قدموها لي كانت شاملة ومدروسة. أشعر بالاطمئنان تجاه مستقبلي المالي بفضل توجيهاتهم.",
    name: "فاطمة الحربي",
    title: "مستثمرة خاصة",
    company: "",
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
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            آراء عملائنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            قصص نجاح
            <span className="text-gradient-gold"> عملائنا</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/20" />

            {/* Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].title}
                  {testimonials[currentIndex].company && ` - ${testimonials[currentIndex].company}`}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-primary/30 hover:bg-primary/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-primary/30 hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
