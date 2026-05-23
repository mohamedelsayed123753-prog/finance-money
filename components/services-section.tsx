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
    <section 
      id="services" 
      className="py-24 md:py-32 relative overflow-hidden bg-[#030712]"
    >
      {/* 🏙️ الخلفية الرقمية المتطابقة والمستمرة مع باقي السكاشن */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* 1. التدرج اللوني الموحد للموقع */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#091124] to-[#030712]" />

        {/* 2. الـ Cyber Grid المتصل هندسياً من السكشن اللي قبله */}
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

        {/* 3. توزيع الإضاءات والـ Glows بشكل عكسي ليعطي حركة مريحة أثناء الـ Scroll */}
        <div className="absolute top-[25%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header العنوان الرئيسي للخدمات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 text-right sm:text-center"
        >
          <span className="text-blue-500 text-sm font-bold tracking-wider mb-4 block">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            حلول مالية
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 px-2"> 
              متكاملة 
            </span>
            تناسب احتياجاتك
          </h2>
          <p className="text-slate-300 text-lg">
            نقدم مجموعة شاملة من الخدمات الاستشارية المالية المصممة خصيصاً لتلبية متطلبات عملائنا المتنوعة
          </p>
        </motion.div>

        {/* Services Grid كروت الخدمات الزجاجية */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* تعديل الـ Card ليكون مدمجاً بزجاج معتم فخم وخلفية شفافة متناسقة مع الموقع */}
              <Card className="group h-full bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-500 p-8 rounded-2xl shadow-xl flex flex-col justify-between items-start text-right">
                <div>
                  {/* Icon الحاوية الدائرية مع توهج ناعم للأيقونة */}
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-all duration-300 border border-blue-500/20">
                    <service.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Link السهم وحركة الانتقال الأنيقة */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center text-blue-400 text-sm font-bold group/link mt-auto hover:text-blue-300 transition-colors"
                  whileHover={{ x: -4 }}
                >
                  اعرف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover/link:-translate-x-1 transition-transform text-blue-400" />
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}