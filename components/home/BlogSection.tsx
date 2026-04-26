'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: "The best influencers to follow for sartorial inspiration",
    category: "Decor",
    author: "Admin",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-01-600x430.jpg.webp",
    slug: "influencers-inspiration"
  },
  {
    id: 2,
    title: "Everything you need to know about decor’s big night out",
    category: "Design",
    author: "Admin",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-02-600x430.jpg.webp",
    slug: "decors-big-night-out"
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16 px-4 lg:px-0">
          <div className="max-w-xl">
            <span className="text-[12px] font-bold uppercase tracking-[4px] text-zinc-400 mb-4 block">Latest news</span>
            <h2 className="text-[40px] lg:text-[50px] font-bold text-primary leading-tight tracking-tighter">
              Beautiful blog <span className="font-light italic">posts</span>
            </h2>
          </div>
          <Link 
            href="/blog" 
            className="text-[13px] font-bold uppercase tracking-[2px] text-primary border-b border-primary pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
          >
            Read all posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {blogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col gap-8">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-wider text-zinc-400">
                  <span className="text-secondary">{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-[26px] lg:text-[32px] font-bold text-primary leading-tight group-hover:text-secondary transition-colors tracking-tighter">
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
