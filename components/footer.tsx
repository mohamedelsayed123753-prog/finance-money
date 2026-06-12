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
    <footer id="footer" className="w-full bg-[#030712] border-t border-[#bfa15f]/20 py-24 relative overflow-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
   
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#bfa15f]/5 rounded-full blur-[150px]"
      />

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        
       
        <div className="lg:col-span-5">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-[#bfa15f]/30 group shadow-2xl"
            >
              <Image 
                  src="/images/FOOTER.png" 
                  alt="BSS Office" 
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </motion.div>
        </div>

    
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between h-full space-y-10"
        >
          <div>
              <h2 className="text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-[#bfa15f] italic">
                  {data.thankYou}
              </h2>
              <p className="text-[#bfa15f]/70 mt-4 text-lg font-medium">{data.subThankYou}</p>
          </div>

        
          <div className="bg-[#0a0f1d]/50 backdrop-blur-xl border border-[#bfa15f]/10 p-8 rounded-[2rem]">
            <h3 className="text-[#bfa15f] font-bold uppercase tracking-widest text-sm border-l-2 border-[#bfa15f] pl-4 mb-8">{data.contactTitle}</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    {data.phones.map((p: any, i: number) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="p-2 bg-[#bfa15f]/10 rounded-lg"><Phone size={18} className="text-[#bfa15f]" /></div>
                            <span className="text-lg font-mono tracking-wider text-white">{formatNumber(p.display, currentLang)}</span>
                            <span className="text-xs text-[#bfa15f]/60">({p.label})</span>
                        </div>
                    ))}
                </div>
                
                <div className="space-y-4 text-slate-300">
                    <div className="flex items-center gap-3"><Mail size={18} className="text-[#bfa15f]" /> {data.email}</div>
                    <div className="flex items-center gap-3"><Globe size={18} className="text-[#bfa15f]" /> {data.website}</div>
                    {/* <div className="flex items-center gap-3"><Clock size={18} className="text-[#bfa15f]" /> {data.hours}</div> */}
                    <div className="flex items-center gap-3"><MapPin size={18} className="text-[#bfa15f]" /> {data.location}</div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}