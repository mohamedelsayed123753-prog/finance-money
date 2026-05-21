"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
              من نحن
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              خبرة تمتد لأكثر من
              <span className="text-gradient-gold"> عقدين </span>
              من التميز
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              نحن الفخامة للاستشارات المالية، نقدم خدمات استشارية متكاملة للشركات والأفراد في منطقة الخليج العربي. نجمع بين الخبرة العميقة والرؤية المستقبلية لنساعدك في تحقيق أهدافك المالية.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              فريقنا من الخبراء المتخصصين يعمل على تقديم حلول مبتكرة ومخصصة تناسب احتياجاتك الفريدة، مع الالتزام بأعلى معايير النزاهة والشفافية.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { number: "01", title: "خبرة معتمدة", desc: "مستشارون معتمدون دولياً" },
                { number: "02", title: "حلول مبتكرة", desc: "استراتيجيات مالية متطورة" },
                { number: "03", title: "سرية تامة", desc: "حماية معلوماتك أولويتنا" },
                { number: "04", title: "دعم مستمر", desc: "متابعة على مدار الساعة" },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="flex gap-4"
                >
                  <span className="text-primary text-2xl font-bold opacity-50">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-primary/20 rounded-lg transform rotate-6" />
              <div className="absolute inset-0 border border-primary/10 rounded-lg transform -rotate-3" />
              
              {/* Main content box */}
              <div className="relative h-full glass rounded-lg p-8 flex flex-col justify-center">
                <div className="text-center">
                  <span className="text-8xl md:text-9xl font-bold text-gradient-gold">20+</span>
                  <p className="text-xl text-muted-foreground mt-4">عاماً من الخبرة</p>
                </div>
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-foreground">500+</span>
                    <p className="text-sm text-muted-foreground">عميل راضٍ</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-foreground">50+</span>
                    <p className="text-sm text-muted-foreground">خبير متخصص</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
