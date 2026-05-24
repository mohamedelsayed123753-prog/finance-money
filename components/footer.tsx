"use client"

import { motion } from "framer-motion"
import { 
  Twitter, 
  Linkedin, 
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react"

const footerLinks = {
  services: [
    { label: "التخطيط المالي", href: "#" },
    { label: "إدارة المخاطر", href: "#" },
    { label: "الاستشارات الاستثمارية", href: "#" },
    { label: "استشارات الشركات", href: "#" },
    { label: "إدارة الثروات", href: "#" },
  ],
  company: [
    { label: "من نحن", href: "#about" },
    { label: "فريقنا", href: "#" },
    { label: "المدونة", href: "#" },
    { label: "الأخبار", href: "#" },
    { label: "الوظائف", href: "#" },
  ],
  legal: [
    { label: "سياسة الخصوصية", href: "#" },
    { label: "الشروط والأحكام", href: "#" },
    { label: "سياسة الامتثال", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden bg-[#030712]">
      {/* 🏙️ الخلفية الرقمية الموحدة للموقع بالكامل */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* التدرج اللوني الموحد للموقع */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0b1329] to-[#030712]" />

        {/* الـ Cyber Grid المتصل هندسياً */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* توهج سفلي هادئ جداً لإنهاء الصفحة بشكل مريح للعين */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      {/* الخط الفاصل العلوي المضيء بنعومة المتناسق مع باقي السكاشن */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* اللوجو بتأثير الجريدينت البنفسجي الفاخر */}
            <a href="#home" className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6 block">
              الفخامة
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
              شريكك الموثوق في الاستشارات المالية والاستثمارية. نصنع معاً مستقبلاً مالياً أفضل.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span dir="ltr">+966 50 000 0000</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@alfakhama.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <span>الأحد - الخميس: 9 ص - 6 م</span>
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:w-8 after:h-0.5 after:bg-blue-500">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 hover:translate-x-[-4px] inline-block transition-all duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:w-8 after:h-0.5 after:bg-blue-500">
              الشركة
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 hover:translate-x-[-4px] inline-block transition-all duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 relative after:absolute after:bottom-[-8px] after:right-0 after:w-8 after:h-0.5 after:bg-blue-500">
              روابط قانونية
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 hover:translate-x-[-4px] inline-block transition-all duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links السوشيال ميديا المضيئة بنعومة */}
            <h4 className="text-sm font-bold text-slate-300 mb-4">تابعنا</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 shadow-lg transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar الفوتر السفلي المقفل */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs md:text-sm text-center md:text-right">
              © {currentYear} مؤسسة بناء الاستراتيجيات للحلول للاستشارات المالية. جميع الحقوق محفوظة.
            </p>
            <p className="text-slate-500 text-xs md:text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              مرخصة من هيئة السوق المالية السعودية
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}