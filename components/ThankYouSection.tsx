"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export function ThankYouSection() {
  return (
    <section className="py-24 bg-[#030712] text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* الجانب الأيمن: النصوص (حسب image_03cc08.png) */}
        <div className="text-right">
          <h2 className="text-6xl font-black mb-8">
            THANK
            <br />
            YOU
          </h2>
          <div className="space-y-4 items-end flex flex-col">
            {[
              { icon: Phone, text: "+123-456-7890+" },
              { icon: Mail, text: "hello@reallygreatsite.com" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-purple-900/10 px-6 py-3 rounded-full border border-purple-500/20"
              >
                <span className="text-slate-300">{item.text}</span>
                <item.icon className="text-purple-400" size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* الجانب الأيسر: مساحة الصورة - التعديل هنا */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/images/very.png"
            alt="thank you"
            fill
            className="object-cover"
          />
          {/* جرادينت يدمج الصورة مع الخلفية السوداء */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
