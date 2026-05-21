"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Building2, 
  Coins, 
  FileCheck,
  ArrowLeft 
} from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: TrendingUp,
    title: "التخطيط المالي",
    description: "وضع استراتيجيات مالية شاملة تضمن تحقيق أهدافك على المدى القصير والطويل",
  },
  {
    icon: Shield,
    title: "إدارة المخاطر",
    description: "تحليل وتقييم المخاطر المالية وتطوير حلول للتخفيف منها وحماية استثماراتك",
  },
  {
    icon: BarChart3,
    title: "الاستشارات الاستثمارية",
    description: "توجيه استثماراتك نحو الفرص الأمثل مع تحقيق التوازن بين العائد والمخاطر",
  },
  {
    icon: Building2,
    title: "استشارات الشركات",
    description: "حلول مالية متكاملة للشركات تشمل إعادة الهيكلة والاندماج والاستحواذ",
  },
  {
    icon: Coins,
    title: "إدارة الثروات",
    description: "إدارة وتنمية ثرواتك الشخصية والعائلية مع الحفاظ على قيمتها للأجيال القادمة",
  },
  {
    icon: FileCheck,
    title: "الامتثال المالي",
    description: "ضمان التزام أعمالك بالمتطلبات التنظيمية والقانونية المحلية والدولية",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider mb-4 block">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            حلول مالية
            <span className="text-gradient-gold"> متكاملة </span>
            تناسب احتياجاتك
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم مجموعة شاملة من الخدمات الاستشارية المالية المصممة خصيصاً لتلبية متطلبات عملائنا المتنوعة
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full glass border-border/50 hover:border-primary/50 transition-all duration-500 p-8 bg-card">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center text-primary text-sm font-medium group/link"
                  whileHover={{ x: -5 }}
                >
                  اعرف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover/link:-translate-x-1 transition-transform" />
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
