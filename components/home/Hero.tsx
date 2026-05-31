'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Info, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const slides = [
  {
    id: 1,
    title: 'Invisible Grill',
    price: 'Get a Quote',
    description: 'High-tensile stainless steel cable system for balcony and window safety — nearly invisible from a distance.',
    image: '/images/products/invisible_grill_hero.png',
    color: 'bg-[#F2F2F2]',
  },
  {
    id: 2,
    title: 'Zip Screen',
    price: 'Get a Quote',
    description: 'Motorised & manual retractable zip screens for balconies, patios and windows. Protection with elegance.',
    image: '/images/products/zip_screen_hero.png',
    color: 'bg-[#E8E8E8]',
  },
  {
    id: 3,
    title: 'Mosquito Net',
    price: 'Get a Quote',
    description: 'Pleated polyester mesh nets for doors and windows — keeps insects out while maintaining fresh airflow.',
    image: '/images/products/mosquito_net_hero.png',
    color: 'bg-[#EAECF0]',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-secondary pt-12 lg:pt-0">
      {/* Circular background decoration */}
      <motion.div 
        key={`circle-${currentSlide}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-white/50 z-0 hidden lg:block"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-[clamp(60px,10vw,110px)] leading-[0.8] font-bold text-primary mb-8 tracking-tighter">
                {slide.title.split(' ')[0]} <br />
                <span className="font-light italic">{slide.title.split(' ')[1]}</span>
              </h1>
              
              <p className="text-lg text-text-secondary mb-8 flex items-center gap-2">
                <span className="text-primary font-bold border-b-2 border-primary pb-0.5">
                  {slide.price}
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link href="/shop" className="block">
                  <Button className="rounded-full px-8 py-6 bg-primary text-white flex items-center gap-3 group">
                    <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-bold tracking-wider text-xs">GET QUOTE</span>
                  </Button>
                </Link>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">More information</span>
                  <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Info size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Area */}
          <div className="relative h-[400px] lg:h-[70vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentSlide}`}
                initial={{ scale: 0.9, opacity: 0, rotate: 5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.1, opacity: 0, rotate: -5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image 
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Floating Info Box */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-10 right-0 max-w-[200px] bg-primary/90 text-white p-6 rounded-lg backdrop-blur-sm hidden xl:block"
                >
                  <p className="text-[11px] leading-relaxed opacity-80">
                    {slide.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute left-container left-6 bottom-0 z-20 hidden lg:block">
        <button 
          onClick={nextSlide}
          className="bg-white px-12 py-10 flex items-center gap-4 group hover:bg-primary transition-all duration-500"
        >
          <span className="text-[14px] font-black uppercase tracking-widest group-hover:text-white">Next</span>
          <ArrowRight size={20} className="group-hover:text-white group-hover:translate-x-2 transition-all" />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, idx) => (
          <div 
            key={idx}
            className={`w-1 h-12 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-primary' : 'bg-primary/10'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
