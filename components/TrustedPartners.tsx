"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from './LanguageContext';

const PARTNERS = [
  { id: 1, name: "Aqua Trading Co", logo: "/images/1trusted.png" },
  { id: 2, name: "Al Qalamoun For Transport", logo: "/images/2trusted.png" },
];

export function TrustedPartners() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-4xl md:text-6xl font-black text-center mb-24 text-white tracking-tighter"
        >
          {lang === 'ar' ? (
            <>شركاء <span className="text-[#bfa15f]">النجاح</span></>
          ) : (
            <>Success <span className="text-[#bfa15f]">Partners</span></>
          )}
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {PARTNERS.map((partner) => (
            <motion.div 
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut" }}
              
             
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -3, 3, -3, 0],
              }}
              
             
              className="relative w-full max-w-[650px] h-96 bg-[#0a0f1d] rounded-[3rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer"
            >
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={600} 
                height={350}
                className="object-contain w-full h-full" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}