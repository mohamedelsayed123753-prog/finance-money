"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from './LanguageContext';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  { id: 1, name: "Golden Churn", logo: "/images/1trusted.png" },
  { id: 2, name: "Beerenberg", logo: "/images/2trusted.png" },
  { id: 3, name: "Ballantyne", logo: "/images/3trusted.png" },
  { id: 4, name: "Altimate", logo: "/images/4trusted.png" },
  { id: 5, name: "Vitasoy", logo: "/images/5trusted.png" },
  { id: 6, name: "Bickford's Group", logo: "/images/6trusted.png" },
  { id: 7, name: "Bickford's", logo: "/images/7trusted.png" },
  { id: 8, name: "Bickford's", logo: "/images/8trusted.png" },
  

];

const INFINITE_PARTNERS = [...PARTNERS, ...PARTNERS];

export function TrustedPartners() {
  const { lang } = useLanguage();
  const cardWidth = 360;
  const cardHeight = 276;

  return (
    <section className="py-24 bg-[#030712] overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10" />

      <div className="container mx-auto px-6 relative z-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 tracking-wide"
          style={{ 
            color: '#bfa15f', 
            textShadow: '0 0 30px rgba(191, 161, 95, 0.4)' 
          }}
        >
          {lang === 'ar' ? "عملائنا" : "OUR CLIENTS"}
        </motion.h2>

        <div className="w-full relative overflow-hidden">
          <motion.div 
            animate={{ x: lang === 'ar' ? ['0%', '50%'] : ['0%', '-50%'] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-10"
            style={{ width: `${INFINITE_PARTNERS.length * (cardWidth + 40)}px` }} 
          >
            {INFINITE_PARTNERS.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
                // التعديل هنا: shadow-lg (ظل أخف)، bg-white/90 (خلفية شفافة قليلاً)، و border ذهبي أنحف
                className="flex-shrink-0 flex items-center justify-center bg-white/90 border border-[#bfa15f]/30 rounded-3xl shadow-[0_10px_40px_-15px_rgba(191,161,95,0.2)] overflow-hidden p-4 hover:scale-105 hover:border-[#bfa15f]/60 transition-all duration-500 group"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    sizes={`${cardWidth}px`}
                    className="object-contain" 
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}