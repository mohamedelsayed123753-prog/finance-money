"use client";

import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

type Language = 'ar' | 'en';

const formatNumber = (num: string, lang: Language) => {
  if (lang !== 'ar') return num;
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.replace(/[0-9]/g, (d) => arabicDigits[parseInt(d)]);
};

const DATA: Record<Language, any> = {
  ar: {
    thankYou: "شكراً لكم",
    subThankYou: "نتطلع للعمل معكم وبناء مستقبلك المالي الأفضل.",
    contactTitle: "تواصل معنا",
    location: "الرياض - الخليج - شارع سلمان الفارسي",
    hours: "الأحد - الخميس: ٩ ص - ٦ م",
    email: "hanan@bss-corp.net",
    website: "www.hanan.com",
    phones: [
      { display: "0532300548", label: "اتصال" },
      { display: "0550699276", label: "واتس" }
    ],
  },
  en: {
    thankYou: "THANK YOU",
    subThankYou: "We look forward to working with you",
    contactTitle: "Contact Us",
    location: "Riyadh - Al Khaleej - Salman Al Farsi Street",
    hours: "Sun - Thu: 9 AM - 6 PM",
    email: "hanan@bss-corp.net",
    website: "www.hanan.com",
    phones: [
      { display: "0532300548", label: "call" },
      { display: "0550699276", label: "wats" }
    ],
  }
};

export function Footer() {
  const context = useLanguage();
  const lang = context?.lang || 'ar';
  const currentLang: Language = (lang === 'ar' || lang === 'en') ? lang : 'ar';
  const data = DATA[currentLang];

  return (
    <footer id="footer" className="w-full bg-[#02040a] border-t border-purple-500/20 py-24 relative overflow-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* خلفية متوهجة للمسة الروشنة */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]"
      />

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        
        {/* عمود الصورة (يمتد بنفس عرض الكونتنت) */}
        <div className="lg:col-span-5">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-purple-500/30 group shadow-2xl"
            >
                <Image 
                    src="/images/FOOTER.png" 
                    alt="BSS Office" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </motion.div>
        </div>

        {/* عمود الكونتنت (شكراً لكم + معلومات الاتصال) */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 flex flex-col justify-between h-full space-y-10"
        >
          {/* العنوان */}
          <div>
              <h2 className="text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-purple-600 italic">
                  {data.thankYou}
              </h2>
              <p className="text-purple-300/70 mt-4 text-lg">{data.subThankYou}</p>
          </div>

          {/* بيانات الاتصال */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem]">
            <h3 className="text-purple-400 font-bold uppercase tracking-widest text-sm border-l-2 border-purple-500 pl-4 mb-8">{data.contactTitle}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    {data.phones.map((p: any, i: number) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg"><Phone size={18} className="text-purple-300" /></div>
                            <span className="text-lg font-mono tracking-wider text-white">{formatNumber(p.display, currentLang)}</span>
                            <span className="text-xs text-purple-500">({p.label})</span>
                        </div>
                    ))}
                </div>
                
                <div className="space-y-4 text-slate-300">
                    <div className="flex items-center gap-3"><Mail size={18} className="text-purple-400" /> {data.email}</div>
                    <div className="flex items-center gap-3"><Globe size={18} className="text-purple-400" /> {data.website}</div>
                    <div className="flex items-center gap-3"><Clock size={18} className="text-purple-400" /> {data.hours}</div>
                    <div className="flex items-center gap-3"><MapPin size={18} className="text-purple-400" /> {data.location}</div>
                </div>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}