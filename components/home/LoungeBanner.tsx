'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Invisible Grill',
    price: 0,
    originalPrice: 0,
    image: '/safe-net/images/products/invisible_grill_thumb.webp',
    slug: '/product/invisible-grill-ss316',
    label: 'Get Quote',
  },
  {
    id: 2,
    name: 'Mosquito Net',
    price: 0,
    originalPrice: 0,
    image: '/safe-net/images/products/mosquito_net_thumb.webp',
    slug: '/product/pleated-mosquito-net',
    label: 'Get Quote',
  },
  {
    id: 3,
    name: 'Aluminium Mesh',
    price: 0,
    originalPrice: 0,
    image: '/safe-net/images/products/aluminium_mesh_thumb.webp',
    slug: '/product/aluminium-security-mesh',
    label: 'Get Quote',
  },
  {
    id: 4,
    name: 'Zip Screen',
    price: 0,
    originalPrice: 0,
    image: '/safe-net/images/products/zip_screen_thumb.webp',
    slug: '/product/motorised-zip-screen',
    label: 'Get Quote',
  },
];

const LoungeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Intersection Observer — triggers slide-in animation once on first scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle products with a fade transition every 3s
  const goTo = (index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFading(false);
    }, 800);
  };

  const goPrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const prev = (currentIndex - 1 + products.length) % products.length;
    goTo(prev);
    startInterval();
  };

  const goNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const next = (currentIndex + 1) % products.length;
    goTo(next);
    startInterval();
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setFading(false);
      }, 800);
    }, 4500);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const product = products[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col lg:flex-row overflow-hidden font-sans"
      style={{ minHeight: '420px' }}
    >
      {/* ─── LEFT: Lounge Banner Image + Text ─────────────────────────────── */}
      <div
        className="relative flex-1 min-h-[320px] lg:min-h-[420px] overflow-hidden"
        style={{
          transform: inView ? 'translateX(0)' : 'translateX(-120px)',
          opacity: inView ? 1 : 0,
          transition: 'transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease',
        }}
      >
        {/* Background Image */}
        <Image
          src="/safe-net/images/products/aluminium_mesh_thumb.webp"
          alt="Aluminium Security Mesh Collection"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay content — centered vertically */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16 z-10">
          {/* "SAVE UP TO 50% OFF" underlined label */}
          <span className="inline-block text-[12px] font-bold tracking-[1px] text-[#1a2340] underline underline-offset-4 mb-4 uppercase">
            Safety. Strength. Solutions.
          </span>

          {/* Main heading */}
          <h2 className="text-[42px] lg:text-[54px] leading-[1.1] font-light text-[#1a2340] mb-8">
            Security <br />
            <span className="font-bold">Solutions</span>
          </h2>

          {/* CTA button */}
          <Link
            href="/product-category/security-mesh"
            className="inline-block self-start px-8 py-4 bg-[#1a2340] text-white text-[13px] font-medium tracking-wide hover:bg-[#0d1420] transition-colors duration-300"
          >
            Explore category
          </Link>
        </div>
      </div>

      {/* ─── RIGHT: Product Carousel ──────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-center bg-[#dce8f5] lg:w-[380px] xl:w-[420px] min-h-[320px] lg:min-h-[420px] overflow-hidden"
        style={{
          transform: inView ? 'translateX(0)' : 'translateX(120px)',
          opacity: inView ? 1 : 0,
          transition: 'transform 0.85s cubic-bezier(0.22,1,0.36,1) 0.1s, opacity 0.85s ease 0.1s',
        }}
      >
        {/* Left arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous product"
          className="absolute left-4 z-20 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={18} className="text-[#1a2340]" />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          aria-label="Next product"
          className="absolute right-4 z-20 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={18} className="text-[#1a2340]" />
        </button>

        {/* Outer wrapper — column layout, static blob + fading content stacked */}
        <div className="flex flex-col items-center gap-5 px-10 py-12">

          {/* ── STATIC: circular blob (never fades) ── */}
          <div className="relative w-52 h-52 xl:w-64 xl:h-64 flex items-center justify-center flex-shrink-0">
            {/* Static soft circle — always visible */}
            <div className="absolute inset-0 rounded-full bg-[#bcd5ec]/60" />

            {/* ── FADING: product image only ── */}
            <div
              className="relative w-44 h-44 xl:w-56 xl:h-56"
              style={{
                opacity: fading ? 0 : 1,
                transition: 'opacity 0.8s ease',
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1280px) 176px, 224px"
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* ── FADING: product name + price ── */}
          <div
            className="text-center"
            style={{
              opacity: fading ? 0 : 1,
              transition: 'opacity 0.8s ease',
            }}
          >
            <Link
              href={product.slug}
              className="block text-[17px] font-semibold text-[#1a2340] mb-1.5 hover:underline tracking-tight"
            >
              {product.name}
            </Link>
            <div className="flex items-center justify-center gap-3"><span className="text-[16px] font-bold text-[#1a2340]">Get Quote</span></div>
          </div>

          {/* ── STATIC: dot indicators ── */}
          <div className="flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-[#1a2340] scale-125'
                    : 'bg-[#1a2340]/30 hover:bg-[#1a2340]/60'
                }`}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoungeBanner;
