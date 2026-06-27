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
    image: '/safe-net/images/products/invisible_grill_hero.webp',
    color: 'bg-[#F2F2F2]',
  },
  {
    id: 2,
    title: 'Zip Screen',
    price: 'Get a Quote',
    description: 'Motorised & manual retractable zip screens for balconies, patios and windows. Protection with elegance.',
    image: '/safe-net/images/products/zip_screen_hero.webp',
    color: 'bg-[#E8E8E8]',
  },
  {
    id: 3,
    title: 'Mosquito Net',
    price: 'Get a Quote',
    description: 'Pleated polyester mesh nets for doors and windows — keeps insects out while maintaining fresh airflow.',
    image: '/safe-net/images/products/mosquito_net_hero.webp',
    color: 'bg-[#EAECF0]',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  const slide = slides[currentSlide];

  return (
    <section 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-secondary pt-20 lg:pt-0"
    >
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
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h1 className="text-[clamp(50px,10vw,110px)] leading-[0.9] lg:leading-[0.8] font-bold text-primary mb-8 tracking-tighter w-full">
                {slide.title.split(' ')[0]} <br />
                <span className="font-light italic">{slide.title.split(' ')[1]}</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 w-full justify-center lg:justify-start">
                <Link href="/shop" className="block">
                  <Button className="rounded-full px-8 py-6 bg-primary text-white flex items-center gap-3 group">
                    <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-bold tracking-wider text-xs">GET QUOTE</span>
                  </Button>
                </Link>

                <div 
                  className="flex items-center gap-4 group cursor-pointer relative"
                  onMouseEnter={() => setShowInfo(true)}
                  onMouseLeave={() => setShowInfo(false)}
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">More information</span>
                  <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Info size={18} />
                  </div>

                  {/* Tooltip / Hover Quote */}
                  <AnimatePresence>
                    {showInfo && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 mb-4 w-72 bg-primary text-white text-[13px] leading-relaxed p-4 rounded-[8px] shadow-custom-lg border border-white/10 z-50 text-left"
                      >
                        <p className="font-medium">{slide.description}</p>
                        {/* Little triangle arrow pointing down */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Area */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[70vh] flex items-center justify-center w-full">
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider Controls - Desktop only */}
      <div className="absolute left-container left-6 bottom-0 z-20 hidden lg:block">
        <button 
          onClick={nextSlide}
          className="relative bg-white px-12 py-10 flex items-center gap-4 group overflow-hidden"
        >
          {/* Fill Background Layer */}
          <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
          
          {/* Content */}
          <span className="relative z-10 text-[14px] font-black uppercase tracking-widest text-primary group-hover:text-white transition-colors duration-300">Next</span>
          <ArrowRight size={20} className="relative z-10 text-primary group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
