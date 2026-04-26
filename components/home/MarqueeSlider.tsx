'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSlider = () => {
  const items = [
    { text: "furniture", isSecondary: true },
    { text: "Free shipping for orders over $130", isSecondary: false },
    { text: "Easy Returns", isSecondary: true },
    { text: "Secure Payment Methods", isSecondary: false },
    { text: "Interior Design", isSecondary: true },
    { text: "Autumn Collection 2024", isSecondary: false },
  ];

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
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Repeat items multiple times for a very long track to ensure smoothness */}
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[28px] md:text-[42px] lg:text-[54px] font-bold tracking-tight px-12 transition-colors text-primary">
                {item.text}
              </span>
              <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 border border-primary/20 rounded-full flex-shrink-0" />
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

export default MarqueeSlider;

