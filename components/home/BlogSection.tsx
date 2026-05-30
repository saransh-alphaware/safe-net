'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: "Why invisible grills are the safest choice for high-rise balconies",
    category: "SAFETY",
    date: "15 MARCH 2025",
    image: "/images/products/invisible_grill_hero.png",
    slug: "invisible-grills-high-rise-balconies"
  },
  {
    id: 2,
    title: "HDPE vs Nylon bird nets: which one is right for your home?",
    category: "GUIDE",
    date: "20 APRIL 2025",
    image: "/images/products/bird_net_hero.png",
    slug: "hdpe-vs-nylon-bird-nets"
  },
  {
    id: 3,
    title: "How pleated mosquito nets keep insects out without blocking airflow",
    category: "TIPS",
    date: "05 MAY 2025",
    image: "/images/products/mosquito_net_hero.png",
    slug: "pleated-mosquito-nets-airflow"
  },
  {
    id: 4,
    title: "Motorised zip screens: the smart upgrade for modern patios",
    category: "INNOVATION",
    date: "18 MAY 2025",
    image: "/images/products/zip_screen_hero.png",
    slug: "motorised-zip-screens-patios"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white font-sans">
      <div className="container">
        
        {/* Centered Heading Section */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#828282] mb-2 block">
            EXPERT INSIGHTS
          </span>
          <h2 className="text-[34px] lg:text-[40px] font-bold text-[#232323] leading-tight tracking-tight">
            The SafeNet blog
          </h2>
        </div>

        {/* 4 Columns Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-4 lg:px-0">
          {blogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col gap-5">
              
              {/* Rounded Image Container */}
              <div className="relative aspect-[16/11.5] rounded-[6px] overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Text Meta & Title */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[12px] uppercase tracking-wider">
                  <span className="font-bold text-[#232323]">{blog.category}</span>
                  <span className="text-[#828282]">•</span>
                  <span className="text-[#828282]">{blog.date}</span>
                </div>
                <h3 className="text-[16px] lg:text-[17px] font-semibold text-[#232323] leading-snug group-hover:text-secondary transition-colors tracking-wide">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
