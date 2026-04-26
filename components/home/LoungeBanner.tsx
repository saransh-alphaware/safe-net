'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LoungeBanner = () => {
  return (
    <section className="relative h-[400px] lg:h-[600px] overflow-hidden group">
      <div className="absolute inset-0">
        <Image 
          src="/images/products/lounge_collection.png" 
          alt="Lounge collection" 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      <div className="container relative z-10 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-md text-white"
        >
          <span className="text-[12px] font-bold uppercase tracking-[4px] mb-6 block text-white/80">Premium quality</span>
          <h2 className="text-[40px] lg:text-[60px] font-bold leading-[1.1] mb-10 tracking-tighter">
            Lounge <span className="font-light italic">collection</span>
          </h2>
          <Link 
            href="/shop" 
            className="inline-block px-12 py-5 bg-white text-primary text-[11px] font-black uppercase tracking-[2px] transition-all hover:bg-primary hover:text-white"
          >
            Shop collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LoungeBanner;
