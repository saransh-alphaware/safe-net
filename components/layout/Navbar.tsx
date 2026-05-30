'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/lib/context/AppContext';
import CartDrawer from './CartDrawer';
import SearchDrawer from './SearchDrawer';

const Navbar = () => {
  const { cart, setCartOpen, setSearchOpen } = useApp();
  return (
    <header id="masthead" className="site-header w-full">
      {/* Mini Header / Promo Bar */}
      <div className="bg-white py-3 border-b border-border-custom hidden md:block">
        <div className="container flex justify-between items-center text-[13px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center leading-none font-semibold">
              Free Delivery on orders over £120. Don't miss discount. 
              <Link href="/shop" className="font-[700] border-b">Shop now</Link>
            </span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/contact" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <span className="font-medium">Customer service</span>
            </Link>
            <Link href="/store-locator" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <span className="font-medium">Find our store</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="h-24 flex items-center bg-white border-b border-border-custom sticky top-0 z-[1000] backdrop-blur-md">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-[28px] font-extrabold tracking-tight hover:text-secondary transition-colors text-primary">
              SAFENET
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden lg:block flex-grow px-12">
            <ul className="flex justify-center gap-8 items-center h-full">
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors h-full flex items-center">
                <Link href="/">Home</Link>
              </li>
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors group h-full flex items-center">
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link href="/shop">Shop</Link>
                  <span className="bg-[#1b3250] text-white text-[9px] px-2 py-0.5 rounded-[2px] font-bold">HOT</span>
                </div>

                {/* Mega Menu Container - Fixed positioning to span full width */}
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-b border-border-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-custom-lg z-[1000] rounded-b-[5px]">
                  {/* Invisible bridge to prevent hover loss */}
                  <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" />
                  <div className="container py-12 mx-auto">
                    <div className="grid grid-cols-5 gap-8 mb-12">
                      {/* Column 1: Furniture */}
                      <div className="flex flex-col gap-6">
                        <h4 className="text-[14px] font-black text-primary uppercase tracking-widest">Furniture</h4>
                        <ul className="flex flex-col gap-3">
                          {['Modern chair', 'Luxurious sofa', 'Sitting tables', 'Century cabinet', 'Wooden stool', 'Dining table'].map((item) => (
                            <li key={item} className="text-[14px] text-text-secondary hover:text-secondary transition-colors lowercase first-letter:uppercase font-medium">
                              <Link href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Column 2: Lighting */}
                      <div className="flex flex-col gap-6">
                        <h4 className="text-[14px] font-black text-primary uppercase tracking-widest">Lighting</h4>
                        <ul className="flex flex-col gap-3">
                          {['Table lamps', 'Wall lights', 'Ceiling lights', 'Chandeliers', 'Smart lights', 'Outdoor lights'].map((item) => (
                            <li key={item} className="text-[14px] text-text-secondary hover:text-secondary transition-colors lowercase first-letter:uppercase font-medium">
                              <Link href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Column 3: Decor */}
                      <div className="flex flex-col gap-6">
                        <h4 className="text-[14px] font-black text-primary uppercase tracking-widest">Decor</h4>
                        <ul className="flex flex-col gap-3">
                          {['Home decor', 'Kitchen decor', 'Office decor', 'Wooden mirrors', 'Designer clocks', 'Spiritual'].map((item) => (
                            <li key={item} className="text-[14px] text-text-secondary hover:text-secondary transition-colors lowercase first-letter:uppercase font-medium">
                              <Link href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Column 4: Cabinetry */}
                      <div className="flex flex-col gap-6">
                        <h4 className="text-[14px] font-black text-primary uppercase tracking-widest">Cabinetry</h4>
                        <ul className="flex flex-col gap-3">
                          {['Wardrobes', 'Shoe racks', 'Movable', 'Folding storage', 'Wooden units', 'Kids storage'].map((item) => (
                            <li key={item} className="text-[14px] text-text-secondary hover:text-secondary transition-colors lowercase first-letter:uppercase font-medium">
                              <Link href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Column 5: Commercial */}
                      <div className="flex flex-col gap-6">
                        <h4 className="text-[14px] font-black text-primary uppercase tracking-widest">Commercial</h4>
                        <ul className="flex flex-col gap-3">
                          {['Hotel furniture', 'Bar furniture', 'School furniture', 'Public furniture', 'Office furniture', 'Lab furniture'].map((item) => (
                            <li key={item} className="text-[14px] text-text-secondary hover:text-secondary transition-colors lowercase first-letter:uppercase font-medium">
                              <Link href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Promo Row */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="relative h-48 bg-[#fcc02a] overflow-hidden group/promo">
                        <div className="absolute inset-0 p-8 flex flex-col justify-center gap-3 z-10">
                          <h5 className="text-[28px] font-bold text-white leading-tight uppercase">40%OFF<br /><span className="text-[13px] font-medium tracking-widest">Lighting your home</span></h5>
                          <Link href="/shop" className="bg-black text-white text-[10px] uppercase font-black tracking-widest px-8 pt-3 pb-3 w-fit hover:bg-white hover:text-black transition-all">Shop collection</Link>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/2">
                           <Image src="/images/products/pottery.png" alt="Promo" fill className="object-contain opacity-80 group-hover/promo:scale-105 transition-transform duration-700" />
                        </div>
                      </div>
                      <div className="relative h-48 bg-[#ff5252] overflow-hidden group/promo">
                        <div className="absolute inset-0 p-8 flex flex-col justify-center gap-3 z-10">
                          <h5 className="text-[28px] font-bold text-white leading-tight uppercase">50%OFF<br /><span className="text-[13px] font-medium tracking-widest">Comfortable chair</span></h5>
                          <Link href="/shop" className="bg-black text-white text-[10px] uppercase font-black tracking-widest px-8 pt-3 pb-3 w-fit hover:bg-white hover:text-black transition-all">Shop collection</Link>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/2">
                           <Image src="/images/products/florence_compact.png" alt="Promo" fill className="object-contain opacity-80 group-hover/promo:scale-105 transition-transform duration-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors h-full flex items-center group">
                <Link href="/collections">Collections</Link>
                
                {/* Collections Mega Menu */}
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-b border-border-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-custom-lg z-[1000] fixed-full-width rounded-b-[5px]">
                  {/* Invisible bridge to prevent hover loss */}
                  <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" />
                  <div className="container py-12 mx-auto">
                    {/* Products Grid */}
                    <div className="grid grid-cols-6 gap-6 mb-12">
                      {[
                        { name: 'Ceramic pots', image: '/images/products/pottery.png' },
                        { name: 'Designer stool', image: '/images/products/florence_compact.png' },
                        { name: 'Home decor', image: '/images/products/pottery.png' },
                        { name: 'Modern chair', image: '/images/products/wooden_table.png' },
                        { name: 'Table lamp', image: '/images/products/pottery.png' },
                        { name: 'Wooden table', image: '/images/products/wooden_table.png' }
                      ].map((item, idx) => (
                        <Link key={idx} href={`/category/${item.name.toLowerCase().replace(/ /g, '-')}`} className="group/item flex flex-col items-center gap-4">
                          <div className="aspect-square w-full bg-[#f8f8f8] p-6 relative overflow-hidden">
                            <Image 
                              src={item.image} 
                              alt={item.name} 
                              fill 
                              className="object-contain transition-transform duration-500 group-hover/item:scale-110" 
                            />
                          </div>
                          <span className="text-[14px] font-bold text-primary group-hover/item:text-secondary transition-colors text-center">{item.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Promo Row */}
                    <div className="grid grid-cols-2 gap-8">
                       <div className="bg-[#f3f0ea] p-8 flex items-center justify-between group/promo">
                          <div className="relative w-1/2 h-40">
                             <Image src="/images/products/wooden_table.png" alt="Promo" fill className="object-contain transition-transform duration-700 group-hover/promo:scale-105" />
                          </div>
                          <div className="flex flex-col gap-3 w-1/2">
                             <span className="text-[28px] font-bold text-[#1b3250] leading-tight">40%OFF<br /><span className="text-[14px] font-medium tracking-tight text-primary/60">Century modern cabinet</span></span>
                             <Link href="/shop" className="bg-[#1b3250] text-white text-[10px] uppercase font-black tracking-widest px-8 py-3 w-fit hover:bg-primary transition-all">Shop collection</Link>
                          </div>
                       </div>
                       <div className="bg-[#f3f0ea] p-8 flex items-center justify-between group/promo">
                          <div className="relative w-1/2 h-40">
                             <Image src="/images/products/florence_compact.png" alt="Promo" fill className="object-contain transition-transform duration-700 group-hover/promo:scale-105" />
                          </div>
                          <div className="flex flex-col gap-3 w-1/2">
                             <span className="text-[28px] font-bold text-[#1b3250] leading-tight">50%OFF<br /><span className="text-[14px] font-medium tracking-tight text-primary/60">Modern kitchen decor set</span></span>
                             <Link href="/shop" className="bg-[#1b3250] text-white text-[10px] uppercase font-black tracking-widest px-8 py-3 w-fit hover:bg-primary transition-all">Shop collection</Link>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors h-full flex items-center group relative">
                <Link href="/pages">Pages</Link>

                {/* Pages Dropdown */}
                <div className="absolute top-[calc(100%+8px)] left-0 w-52 bg-white shadow-custom-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[1000] border-t-2 border-secondary/20 rounded-[5px] overflow-hidden">
                  {/* Invisible bridge to prevent hover loss */}
                  <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" />
                  
                  <ul className="flex flex-col py-4">
                    {['About', 'FAQs', 'Wishlist', 'Account', 'Cart', 'Checkout'].map((page) => (
                      <li key={page}>
                        <Link 
                          href={`/${page.toLowerCase()}`} 
                          className="block px-8 py-2.5 text-[14px] font-medium text-text-secondary hover:text-secondary hover:bg-gray-50 transition-all capitalize"
                        >
                          {page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors h-full flex items-center">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors h-full flex items-center">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="flex gap-6 items-center">
            <button 
              onClick={() => setSearchOpen(true)}
              className="hover:text-secondary transition-colors p-1 cursor-pointer" 
              aria-label="Search"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <Link href="/account" className="hidden sm:block hover:text-secondary transition-colors text-[14px] font-semibold uppercase tracking-wide">
              My account
            </Link>
            <button 
              onClick={() => setCartOpen(true)}
              className="relative hover:text-secondary transition-colors p-1 cursor-pointer" 
              aria-label="Cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Global Drawers rendering */}
      <CartDrawer />
      <SearchDrawer />
    </header>
  );
};

export default Navbar;
