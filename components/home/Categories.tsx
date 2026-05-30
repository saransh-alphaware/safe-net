import React from 'react';
import Link from 'next/link';


const categories = [
  { id: 1, name: 'Invisible Grill', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="2" x2="4" y2="22"/><line x1="8" y1="2" x2="8" y2="22"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="16" y1="2" x2="16" y2="22"/><line x1="20" y1="2" x2="20" y2="22"/></svg> },
  { id: 2, name: 'Bird Net', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18"/><path d="M3 9l6-6"/><path d="M9 3l6 6"/><path d="M15 9l6-6"/><path d="M3 15l6 6"/><path d="M9 15l6 6"/><path d="M15 15l6 6"/></svg> },
  { id: 3, name: 'Mosquito Net', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/><path d="M2 16h20"/><path d="M8 4v16"/><path d="M16 4v16"/></svg> },
  { id: 4, name: 'Security Mesh', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg> },
  { id: 5, name: 'Zip Screen', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M12 3v18"/><path d="M2 12h10"/></svg> },
  { id: 6, name: 'Get Quote', icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.18 2.38 2 2 0 012.18.18h3a2 2 0 012 1.72c.13 1.05.37 2.07.7 3.06a2 2 0 01-.45 2.11L6.91 8.09A16 16 0 0015.91 17l1.17-1.17a2 2 0 012.11-.45c.99.33 2.01.57 3.06.7a2 2 0 011.73 2z"/></svg> },
];

const Categories = () => {
  return (
    <section className="py-20 lg:py-24 border-b border-border-custom bg-white overflow-hidden">
      <div className="container overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Header */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[200px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#FF3E30]">⚡ Our Products</span>
            </div>
            <h2 className="text-[30px] lg:text-[34px] font-bold text-primary leading-tight tracking-tighter">
              Safety <br className="hidden lg:block" /> Solutions
            </h2>
          </div>

          {/* Categories List */}
          <div className="flex-1 w-full overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
              {categories.map((cat) => (
                <Link 
                  key={cat.id} 
                  href={cat.name === 'Get Quote' ? '/contact' : `/product-category/${cat.name.toLowerCase().replace(/ /g, '-')}`}
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
