"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from './LanguageContext';

const CREDENTIALS = [
  { id: 1, src: "/images/1quali.png", title: "Professional License" },
  { id: 2, src: "/images/4quali.png", title: "Certificate 1" },
  { id: 3, src: "/images/5quali.png", title: "Certificate 2" },
];

export function CredentialsSection() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-center mb-24 text-white"
        >
          {lang === 'ar' ? (
            <>الاعتمادات <span className="text-[#bfa15f]">والخبرات</span></>
          ) : (
            <>Professional <span className="text-[#bfa15f]">Credentials</span></>
          )}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 justify-items-center">
          {CREDENTIALS.map((cred, index) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15, 
                delay: index * 0.2 
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelected(cred.src)}
              className="relative w-full max-w-[400px] h-[280px] lg:h-[320px] cursor-pointer bg-[#0a0f1d] p-3 rounded-[2rem] shadow-[0_20px_0px_rgba(191,161,95,0.4)] group"
            >
              <Image 
                src={cred.src} 
                alt={cred.title} 
                fill 
                className="object-contain p-2 rounded-[1.8rem] transition-transform duration-500" 
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8"
            >
              <motion.div 
                initial={{ scale: 0.6, rotate: -5 }} 
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.6, rotate: 5 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <Image src={selected} alt="Full view" width={1000} height={700} className="rounded-3xl shadow-[0_0_100px_rgba(191,161,95,0.3)]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}