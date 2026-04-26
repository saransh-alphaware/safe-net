'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Medium", weight: "font-serif" },
  { name: "pepperfry", weight: "font-bold" },
  { name: "ARTICLE.", weight: "font-extrabold tracking-[0.2em]" },
  { name: "Instagram", weight: "font-medium" },
  { name: "Safenet", weight: "font-black" },
  { name: "Interior", weight: "font-light italic" },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white overflow-hidden border-y border-border-custom relative">
      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 w-32 md:w-60 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 md:w-60 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Duplicate brands for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center">
              <span className={`text-[24px] md:text-[32px] lg:text-[40px] px-16 text-primary select-none ${brand.weight}`}>
                {brand.name}
              </span>
              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute right-0 top-1/2 -rotate-90 origin-right translate-x-[-10px] lg:translate-x-[-20px] translate-y-[-50%] hidden md:block z-20">
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/30">Scroll</span>
          <div className="w-12 h-[1px] bg-primary/10" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

