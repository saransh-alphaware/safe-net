'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: "The best influencers to follow for sartorial inspiration",
    category: "DECOR",
    date: "22 OCTOBER 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-07-600x430.jpg",
    slug: "influencers-inspiration"
  },
  {
    id: 2,
    title: "Everything you need to know about decor’s big night out",
    category: "DESIGN",
    date: "22 OCTOBER 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-08-600x430.jpg",
    slug: "decors-big-night-out"
  },
  {
    id: 3,
    title: "All the best looks & moments from the met gala 2023",
    category: "DECOR",
    date: "22 OCTOBER 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-04-600x430.jpg",
    slug: "looks-moments-met-gala"
  },
  {
    id: 4,
    title: "Find a colour palettes that reflects your passion",
    category: "DECOR",
    date: "22 OCTOBER 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-03-600x430.jpg",
    slug: "color-palettes-passion"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white font-sans">
      <div className="container">
        
        {/* Centered Heading Section */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#828282] mb-2 block">
            DESIGNERS IDEAS
          </span>
          <h2 className="text-[34px] lg:text-[40px] font-bold text-[#232323] leading-tight tracking-tight">
            The decor article
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
