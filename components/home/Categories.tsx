import React from 'react';
import Link from 'next/link';
import { Sofa, Lamp, Armchair, ChevronRight } from 'lucide-react';

const categories = [
  { id: 1, name: 'Cabinet', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
  { id: 2, name: 'Chair', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 6V3c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v3"/><path d="M5 11h14"/><path d="M5 6v15"/><path d="M19 6v15"/></svg> },
  { id: 3, name: 'Lamp', icon: <Lamp size={40} strokeWidth={1} /> },
  { id: 4, name: 'Light', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/></svg> },
  { id: 5, name: 'Sofa', icon: <Sofa size={40} strokeWidth={1} /> },
  { id: 6, name: 'Stool', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21l3-14h4l3 14"/><path d="M8 11h8"/><circle cx="12" cy="4" r="3"/></svg> },
];

const Categories = () => {
  return (
    <section className="py-20 lg:py-24 border-b border-border-custom bg-white overflow-hidden">
      <div className="container overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Header */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[200px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#FF3E30]">🔥 Best seller</span>
            </div>
            <h2 className="text-[30px] lg:text-[34px] font-bold text-primary leading-tight tracking-tighter">
              Featured <br className="hidden lg:block" /> categories
            </h2>
          </div>

          {/* Categories List */}
          <div className="flex-1 w-full overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
              {categories.map((cat) => (
                <Link 
                  key={cat.id} 
                  href={`/category/${cat.name.toLowerCase()}`}
                  className="group flex flex-col items-center gap-6 transition-all duration-300"
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-[#f8f8f8] text-primary transition-all duration-500 group-hover:bg-white group-hover:shadow-custom-md group-hover:-translate-y-2">
                    {cat.icon}
                  </div>
                  <span className="text-[15px] font-bold text-primary group-hover:text-secondary transition-colors uppercase tracking-wider">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;
