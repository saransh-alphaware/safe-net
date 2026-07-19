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
    image: '/images/products/invisible_grill_thumb.webp',
    bgImage: '/images/products/invisible_grill_hero.webp',
    slug: '/product/invisible-grill-ss316',
    label: 'Get Quote',
    categorySlug: 'invisible-grill',
    badge: 'Safety. Strength. Solutions.',
  },
  {
    id: 2,
    name: 'Mosquito Net',
    price: 0,
    originalPrice: 0,
    image: '/images/products/mosquito_net_thumb.webp',
    bgImage: '/images/products/mosquito_net_hero.webp',
    slug: '/product/pleated-mosquito-net',
    label: 'Get Quote',
    categorySlug: 'mosquito-net',
    badge: 'Insect & Mosquito Protection',
  },
  {
    id: 3,
    name: 'Aluminium Mesh',
    price: 0,
    originalPrice: 0,
    image: '/images/products/aluminium_mesh_thumb.webp',
    bgImage: '/images/products/aluminium_mesh_hero.webp',
    slug: '/product/aluminium-security-mesh',
    label: 'Get Quote',
    categorySlug: 'security-mesh',
    badge: 'High Security Protection',
  },
  {
    id: 4,
    name: 'Zip Screen',
    price: 0,
    originalPrice: 0,
    image: '/images/products/zip_screen_thumb.webp',
    bgImage: '/images/products/zip_screen_hero.webp',
    slug: '/product/motorised-zip-screen',
    label: 'Get Quote',
    categorySlug: 'zip-screen',
    badge: 'Sunshade & Wind Protection',
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

  const leftProduct = products[currentIndex];
  const rightProduct = products[(currentIndex + 1) % products.length];

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
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.8s ease',
          }}
        >
          <Image
            src={leftProduct.bgImage}
            alt={leftProduct.name}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle dark overlay for readability of white text */}
          <div className="absolute inset-0 bg-[#1a2340]/40 z-10" />
        </div>

        {/* Overlay content — centered vertically */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16 z-10"
          style={{
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.8s ease',
          }}
        >
          {/* Underlined label */}
          <span className="inline-block text-[12px] font-bold tracking-[1px] text-white/80 underline underline-offset-4 mb-4 uppercase">
            {leftProduct.badge}
          </span>

          {/* Main heading */}
          <h2 className="text-[42px] lg:text-[54px] leading-[1.1] font-light text-white mb-8">
            {leftProduct.name.split(' ')[0]} <br />
            <span className="font-bold">{leftProduct.name.split(' ').slice(1).join(' ')}</span>
          </h2>

          {/* CTA button */}
          <Link
            href={`/product-category/${leftProduct.categorySlug}`}
            className="inline-block self-start px-8 py-4 bg-white text-[#1a2340] hover:bg-secondary hover:text-white text-[13px] font-bold uppercase tracking-wider transition-colors duration-300"
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

        {/* Outer wrapper — column layout, static blob + content stacked (fading removed from right section) */}
        <div className="flex flex-col items-center gap-5 px-10 py-12">

          {/* ── STATIC: circular blob ── */}
          <div className="relative w-52 h-52 xl:w-64 xl:h-64 flex items-center justify-center flex-shrink-0">
            {/* Static soft circle — always visible */}
            <div className="absolute inset-0 rounded-full bg-[#bcd5ec]/60" />

            {/* Product image (fading removed) */}
            <div className="relative w-44 h-44 xl:w-56 xl:h-56">
              <Image
                src={rightProduct.image}
                alt={rightProduct.name}
                fill
                sizes="(max-width: 1280px) 176px, 224px"
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Product name (fading removed) */}
          <div className="text-center">
            <Link
              href={rightProduct.slug}
              className="block text-[17px] font-semibold text-[#1a2340] mb-1.5 hover:underline tracking-tight"
            >
              {rightProduct.name}
            </Link>
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
