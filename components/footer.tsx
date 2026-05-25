"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

const DATA = {
  ar: {
    name: "مؤسسة بناء الاستراتيجيات للحلول",
    desc: "شريكك الموثوق في الاستشارات المالية والاستثمارية. نصنع معاً مستقبلاً مالياً أفضل.",
    quickLinksTitle: "روابط سريعة",
    contactTitle: "تواصل معنا",
    location: "📍 الرياض، المملكة العربية السعودية",
    hours: "🕒 الأحد - الخميس: 9 ص - 6 م",
    links: [
      { label: "الرئيسية", href: "#home" },
      { label: "من نحن", href: "#about" },
      { label: "الرؤية والرسالة", href: "#services" },
      { label: "القيم الجوهرية", href: "#StatsSection" },
      { label: "خطة العمل المالي", href: "#financial-plan" },
      { label: "الاستشارات المالية الاستراتيجية", href: "#marketing-strategy" },
      { label: "رحلتك نحو التمويل المناسب", href: "#funding-journey" },
      { label: "لماذا تختار الشركة؟", href: "#why-us" },
      { label: "الخطة المستقبلية", href: "#future-plan" },
    ]
  },
  en: {
    name: "Strategy Building Solutions",
    desc: "Your trusted partner in financial and investment consulting. Together, we create a better financial future.",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact Us",
    location: "📍 Riyadh, Kingdom of Saudi Arabia",
    hours: "🕒 Sun - Thu: 9 AM - 6 PM",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Vision & Mission", href: "#services" },
      { label: "Core Values", href: "#StatsSection" },
      { label: "Financial Strategy", href: "#financial-plan" },
      { label: "Strategic Financial Consulting", href: "#marketing-strategy" },
      { label: "Your Funding Journey", href: "#funding-journey" },
      { label: "Why Choose Us?", href: "#why-us" },
      { label: "Future Plan", href: "#future-plan" },
    ]
  }
};

export function Footer() {
  const { lang } = useLanguage();
  const data = DATA[lang as 'ar' | 'en'];

  return (
    <footer id="contact" className="bg-[#030712] py-16 border-t border-white/10 w-full overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* العمود الأول */}
        <div className={`md:col-span-4 flex flex-col ${lang === 'ar' ? 'items-center md:items-start text-center md:text-right' : 'items-center md:items-start text-center md:text-left'}`}>
          <div className="relative w-[70px] h-[50px] mb-4">
            <Image 
              src="/images/BSS-no-bg.png" 
              alt="BSS Logo" 
              fill
              sizes="70px"
              className="object-contain"
              priority={false}
            />
          </div>
          <h3 className="text-[#D4AF37] text-lg font-bold">{data.name}</h3>
          <p className="text-slate-300 mt-4 leading-relaxed max-w-[280px]">
            {data.desc}
          </p>
        </div>

        {/* العمود الثاني */}
        <div className={`md:col-span-4 flex flex-col ${lang === 'ar' ? 'items-center md:items-start' : 'items-center md:items-start'}`}>
          <h4 className="text-white font-bold mb-6 border-b border-purple-500/50 pb-2">{data.quickLinksTitle}</h4>
          <nav className="grid grid-cols-1 gap-2 text-slate-400 text-sm">
            {data.links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-purple-400 transition-colors duration-200 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* العمود الثالث */}
        <div className={`md:col-span-4 flex flex-col ${lang === 'ar' ? 'items-center md:items-start' : 'items-center md:items-start'} text-slate-300 text-sm`}>
          <h4 className="text-white font-bold mb-6 border-b border-purple-600 pb-2">{data.contactTitle}</h4>
          <div className="space-y-4">
            <p>{data.location}</p>
            <p>📞 +966 50 000 0000</p>
            <p>✉️ info@alfakhama.com</p>
            <p>{data.hours}</p>
          </div>
        </div>

      </div>
    </footer>
  );
}