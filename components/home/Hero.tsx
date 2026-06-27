'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Info } from 'lucide-react';
import Button from '../ui/Button';

const slides = [
  {
    id: 1,
    title: 'Invisible Grill',
    description: 'High-tensile stainless steel cable system for balcony and window safety — nearly invisible from a distance.',
    image: '/safe-net/images/products/invisible_grill_hero.webp',
    color: 'bg-[#F2F2F2]',
  },
  {
    id: 2,
    title: 'Zip Screen',
    description: 'Motorised & manual retractable zip screens for balconies, patios and windows. Protection with elegance.',
    image: '/safe-net/images/products/zip_screen_hero.webp',
    color: 'bg-[#E8E8E8]',
  },
  {
    id: 3,
    title: 'Mosquito Net',
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
      className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden bg-bg-secondary pt-20 lg:pt-0"
    >
      {/* Circular background decoration */}
      <motion.div
        key={`circle-${currentSlide}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-0 lg:translate-x-1/4 w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-white/40 z-0"
      />

      <div className="container relative z-10 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start z-10"
            >
              <h1 className="text-[clamp(45px,10vw,100px)] leading-[1.0] lg:leading-[0.8] font-bold text-primary mb-8 tracking-tighter w-full text-center lg:text-left">
                {slide.title.split(' ')[0]} <br />
                <span className="font-light italic">{slide.title.split(' ')[1]}</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center lg:justify-start mb-8 lg:mb-0">
                <Link href="/shop" className="block">
                  <Button className="rounded-full px-8 py-4.5 bg-primary text-white flex items-center gap-3 group">
                    <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-bold tracking-wider text-xs">SHOP NOW</span>
                  </Button>
                </Link>

                {/* Mobile-only More Information */}
                <div
                  className="flex lg:hidden items-center gap-4 group cursor-pointer relative mt-2"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary">More information</span>
                  <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Info size={18} />
                  </div>

                  {/* Tooltip / Click Quote */}
                  <AnimatePresence>
                    {showInfo && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-primary text-white text-[13px] leading-relaxed p-4 rounded-[8px] shadow-custom-lg border border-white/10 z-50 text-left"
                      >
                        <p className="font-medium">{slide.description}</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Area */}
          <div className="relative h-[250px] sm:h-[350px] lg:h-[70vh] flex items-center justify-center w-full z-10">
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

      {/* Slider Controls - Desktop (Bottom Left) */}
      <div className="absolute left-0 bottom-0 z-20 hidden lg:flex h-24 border-t border-r border-border-custom w-[400px]">
        <button
          onClick={nextSlide}
          className="w-1/2 bg-white flex items-center justify-center font-black uppercase tracking-widest text-[14px] text-primary relative overflow-hidden group"
        >
          {/* Fill Background Layer */}
          <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Next</span>
        </button>
        <div className="w-1/2 relative bg-bg-accent overflow-hidden">
          <Image
            src={slides[(currentSlide + 1) % slides.length].image}
            alt="Next product preview"
            fill
            className="object-cover opacity-90 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* More Information - Desktop (Bottom Right) */}
      <div className="absolute right-12 bottom-12 z-20 hidden lg:block">
        <div
          className="flex items-center gap-4 group cursor-pointer relative"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary opacity-80 group-hover:opacity-100 transition-opacity">More information</span>
          <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-all shadow-custom-sm">
            <Info size={18} />
          </div>

          {/* Tooltip / Hover Quote */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-full right-0 mb-4 w-72 bg-primary text-white text-[13px] leading-relaxed p-4 rounded-[8px] shadow-custom-lg border border-white/10 z-50 text-left"
              >
                <p className="font-medium">{slide.description}</p>
                {/* Little triangle arrow pointing down */}
                <div className="absolute top-full right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-primary" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Next Control Bar */}
      <div className="w-full h-20 flex lg:hidden border-t border-border-custom mt-auto">
        <button
          onClick={nextSlide}
          className="w-1/2 bg-white flex items-center justify-center font-black uppercase tracking-widest text-[13px] text-primary"
        >
          Next
        </button>
        <div className="w-1/2 relative bg-bg-accent overflow-hidden">
          <Image
            src={slides[(currentSlide + 1) % slides.length].image}
            alt="Next product preview"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
