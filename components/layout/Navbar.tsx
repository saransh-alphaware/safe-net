'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu, ChevronDown } from 'lucide-react';
import { useApp } from '@/lib/context/AppContext';
import CartDrawer from './CartDrawer';
import SearchDrawer from './SearchDrawer';

const NAV_CATEGORIES = [
  { label: 'Invisible Grill', slug: 'invisible-grill' },
  { label: 'Bird Net', slug: 'bird-net' },
  { label: 'Mosquito Net', slug: 'mosquito-net' },
  { label: 'Security Mesh', slug: 'security-mesh' },
  { label: 'Zip Screen', slug: 'zip-screen' },
];

const Navbar = () => {
  const { cart, setCartOpen, setSearchOpen } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileShopOpen(false);
    setMobilePagesOpen(false);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header id="masthead" className="site-header w-full">
      {/* Mini Header / Promo Bar */}
      <div className="bg-white py-3 border-b border-border-custom hidden md:block">
        <div className="container flex justify-between items-center text-[13px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center leading-none font-semibold gap-1">
              Free Installation on orders. Safety. Strength. Solutions.
              <Link href="/shop" className="font-[700] border-b ml-1">Shop now</Link>
            </span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/contact" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <span className="font-medium">Customer service</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <span className="font-medium">Find our store</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-16 lg:h-16 flex items-center bg-white border-b border-border-custom sticky top-0 z-[999] backdrop-blur-md">
        <div className="container flex justify-between items-center">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image
                src="/safe-net/images/products/logo_full.png"
                alt="SafeNet & Co."
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <div className="hidden sm:block text-[28px] text-primary tracking-wide">
                <b>Safe</b>Net
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:block grow px-12">
            <ul className="flex justify-center gap-8 items-center h-full">
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors h-full flex items-center">
                <Link href="/">Home</Link>
              </li>

              {/* Shop mega menu */}
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors group h-full flex items-center relative">
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link href="/shop">Shop</Link>
                  <span className="bg-accent text-white text-[9px] px-2 py-0.5 rounded-xs font-bold">HOT</span>
                </div>
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-b border-border-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-custom-lg z-[1000] rounded-b-[5px]" style={{width: '900px', left: '-200px'}}>
                  <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" />
                  <div className="container py-12 mx-auto">
                    <div className="grid grid-cols-5 gap-8 mb-12">
                      {[
                        { title: 'Invisible Grill', items: ['Wire rope SS316', 'Aluminium track', '2mm diameter', '2.5mm diameter', '3mm diameter', 'Custom gaps'], slug: 'invisible-grill' },
                        { title: 'Bird Net', items: ['HDPE nets', 'Nylon nets', 'Diamond mesh', 'Square mesh', 'Black nets', 'Transparent nets'], slug: 'bird-net' },
                        { title: 'Mosquito Net', items: ['Pleated net', 'Sliding frame', 'Door net', 'Window net', 'Anti-rust', 'Custom sizes'], slug: 'mosquito-net' },
                        { title: 'Security Mesh', items: ['Aluminium mesh', 'Dual lock system', 'Insect proof', 'Weather resistant', 'All window types', 'Easy maintain'], slug: 'security-mesh' },
                        { title: 'Zip Screen', items: ['Motorised zip', 'Manual zip', 'Sunshade blinds', 'Mosquito screen', 'PVC screens', 'Blackout fabric'], slug: 'zip-screen' },
                      ].map((col) => (
                        <div key={col.title} className="flex flex-col gap-6">
                          <h4 className="text-[14px] font-black text-primary uppercase tracking-widest">
                            <Link href={`/product-category/${col.slug}`} className="hover:text-secondary transition-colors">{col.title}</Link>
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {col.items.map((item) => (
                              <li key={item} className="text-[14px] text-text-secondary hover:text-secondary transition-colors lowercase first-letter:uppercase font-medium">
                                <Link href={`/product-category/${col.slug}`}>{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="relative h-48 bg-accent overflow-hidden group/promo">
                        <div className="absolute inset-0 p-8 flex flex-col justify-center gap-3 z-10">
                          <h5 className="text-[22px] font-bold text-white leading-tight uppercase">Invisible Grill<br /><span className="text-[11px] font-medium tracking-widest">Safety meets elegance</span></h5>
                          <Link href="/product-category/invisible-grill" className="bg-white text-primary text-[10px] uppercase font-black tracking-widest px-8 pt-3 pb-3 w-fit hover:bg-primary hover:text-white transition-all">Shop now</Link>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/2">
                          <Image src="/safe-net/images/products/invisible_grill_thumb.png" alt="Invisible Grill" fill className="object-cover opacity-80 group-hover/promo:scale-105 transition-transform duration-700" />
                        </div>
                      </div>
                      <div className="relative h-48 bg-[#0e2340] overflow-hidden group/promo">
                        <div className="absolute inset-0 p-8 flex flex-col justify-center gap-3 z-10">
                          <h5 className="text-[22px] font-bold text-white leading-tight uppercase">Mosquito Net<br /><span className="text-[11px] font-medium tracking-widest">Keep insects out</span></h5>
                          <Link href="/product-category/mosquito-net" className="bg-white text-primary text-[10px] uppercase font-black tracking-widest px-8 pt-3 pb-3 w-fit hover:bg-primary hover:text-white transition-all">Shop now</Link>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/2">
                          <Image src="/safe-net/images/products/mosquito_net_thumb.png" alt="Mosquito Net" fill className="object-cover opacity-80 group-hover/promo:scale-105 transition-transform duration-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Collections mega menu */}
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors group h-full flex items-center relative">
                <Link href="/collections">Collections</Link>

                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-b border-border-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-custom-lg z-[1000] rounded-b-[5px]" style={{width: '860px', left: '-280px'}}>
                  {/* Invisible hover bridge */}
                  <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" />
                  <div className="container py-12 mx-auto">

                    {/* 6-column product image grid */}
                    <div className="grid grid-cols-6 gap-6 mb-12">
                      {[
                        { name: 'Invisible Grill', image: '/safe-net/images/products/invisible_grill_thumb.png', slug: 'invisible-grill' },
                        { name: 'Bird Net', image: '/safe-net/images/products/bird_net_nylon.png', slug: 'bird-net' },
                        { name: 'Mosquito Net', image: '/safe-net/images/products/mosquito_net_thumb.png', slug: 'mosquito-net' },
                        { name: 'Security Mesh', image: '/safe-net/images/products/aluminium_mesh_thumb.png', slug: 'security-mesh' },
                        { name: 'Zip Screen', image: '/safe-net/images/products/zip_screen_thumb.png', slug: 'zip-screen' },
                        { name: 'HDPE Nets', image: '/safe-net/images/products/bird_net_hdpe.png', slug: 'bird-net' },
                      ].map((item, idx) => (
                        <Link key={idx} href={`/product-category/${item.slug}`} className="group/item flex flex-col items-center gap-4">
                          <div className="aspect-square w-full bg-[#f8f8f8] p-4 relative overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                            />
                          </div>
                          <span className="text-[13px] font-bold text-primary group-hover/item:text-secondary transition-colors text-center uppercase tracking-wide">{item.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom promo cards */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="bg-[#eef3f8] p-8 flex items-center justify-between group/promo">
                        <div className="relative w-1/2 h-40">
                          <Image src="/safe-net/images/products/aluminium_mesh_thumb.png" alt="Security Mesh" fill className="object-cover transition-transform duration-700 group-hover/promo:scale-105" />
                        </div>
                        <div className="flex flex-col gap-3 w-1/2 pl-4">
                          <span className="text-[20px] font-bold text-[#1b3250] leading-tight">Security Mesh<br /><span className="text-[13px] font-medium tracking-tight text-primary/60">Aluminium premium mesh</span></span>
                          <Link href="/product-category/security-mesh" className="bg-[#1b3250] text-white text-[10px] uppercase font-black tracking-widest px-6 py-3 w-fit hover:bg-primary transition-all">Shop now</Link>
                        </div>
                      </div>
                      <div className="bg-[#eef3f8] p-8 flex items-center justify-between group/promo">
                        <div className="relative w-1/2 h-40">
                          <Image src="/safe-net/images/products/zip_screen_thumb.png" alt="Zip Screen" fill className="object-cover transition-transform duration-700 group-hover/promo:scale-105" />
                        </div>
                        <div className="flex flex-col gap-3 w-1/2 pl-4">
                          <span className="text-[20px] font-bold text-[#1b3250] leading-tight">Zip Screen<br /><span className="text-[13px] font-medium tracking-tight text-primary/60">Motorised &amp; manual</span></span>
                          <Link href="/product-category/zip-screen" className="bg-[#1b3250] text-white text-[10px] uppercase font-black tracking-widest px-6 py-3 w-fit hover:bg-primary transition-all">Shop now</Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </li>

              {/* Pages dropdown */}
              <li className="font-semibold text-[15px] uppercase tracking-wider hover:text-secondary transition-colors h-full flex items-center group relative">
                <Link href="/pages">Pages</Link>
                <div className="absolute top-[calc(100%+8px)] left-0 w-52 bg-white shadow-custom-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[1000] border-t-2 border-secondary/20 rounded-[5px] overflow-hidden">
                  <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" />
                  <ul className="flex flex-col py-4">
                    {['About', 'FAQs', 'Wishlist', 'Account', 'Cart', 'Checkout'].map((page) => (
                      <li key={page}>
                        <Link href={`/${page.toLowerCase()}`} className="block px-8 py-2.5 text-[14px] font-medium text-text-secondary hover:text-secondary hover:bg-gray-50 transition-all capitalize">
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
          <div className="flex gap-4 lg:gap-6 items-center">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-secondary transition-colors p-1 cursor-pointer"
              aria-label="Search"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            {/* My account — desktop only */}
            <Link href="/account" className="hidden lg:block hover:text-secondary transition-colors text-[14px] font-semibold uppercase tracking-wide">
              My account
            </Link>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative hover:text-secondary transition-colors p-1 cursor-pointer"
              aria-label="Cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 hover:text-secondary transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-1999 lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-90 bg-white z-2000 shadow-2xl flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-custom shrink-0">
          <Link href="/" onClick={closeMobile}>
            <Image src="/safe-net/images/products/logo_full.png" alt="SafeNet & Co." width={44} height={44} className="object-contain" />
          </Link>
          <button
            onClick={closeMobile}
            className="p-2 hover:text-secondary transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className="flex flex-col px-6 py-4 gap-1 grow">

          <Link href="/" onClick={closeMobile} className="py-3.5 text-[15px] font-bold uppercase tracking-wider border-b border-border-custom hover:text-secondary transition-colors">
            Home
          </Link>

          {/* Shop accordion */}
          <div className="border-b border-border-custom">
            <button
              onClick={() => setMobileShopOpen(!mobileShopOpen)}
              className="w-full flex items-center justify-between py-3.5 text-[15px] font-bold uppercase tracking-wider hover:text-secondary transition-colors cursor-pointer"
            >
              Shop
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileShopOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileShopOpen && (
              <div className="pb-4 flex flex-col gap-1 pl-4">
                {NAV_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/product-category/${cat.slug}`}
                    onClick={closeMobile}
                    className="py-2 text-[14px] font-medium text-text-secondary hover:text-secondary transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
                <Link href="/shop" onClick={closeMobile} className="mt-2 py-2 text-[14px] font-bold text-secondary hover:underline">
                  View all products →
                </Link>
              </div>
            )}
          </div>

          <Link href="/collections" onClick={closeMobile} className="py-3.5 text-[15px] font-bold uppercase tracking-wider border-b border-border-custom hover:text-secondary transition-colors">
            Collections
          </Link>

          {/* Pages accordion */}
          <div className="border-b border-border-custom">
            <button
              onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
              className="w-full flex items-center justify-between py-3.5 text-[15px] font-bold uppercase tracking-wider hover:text-secondary transition-colors cursor-pointer"
            >
              Pages
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobilePagesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobilePagesOpen && (
              <div className="pb-4 flex flex-col gap-1 pl-4">
                {['About', 'FAQs', 'Wishlist', 'Account', 'Cart', 'Checkout'].map((page) => (
                  <Link
                    key={page}
                    href={`/${page.toLowerCase()}`}
                    onClick={closeMobile}
                    className="py-2 text-[14px] font-medium text-text-secondary hover:text-secondary transition-colors capitalize"
                  >
                    {page}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" onClick={closeMobile} className="py-3.5 text-[15px] font-bold uppercase tracking-wider border-b border-border-custom hover:text-secondary transition-colors">
            Blog
          </Link>

          <Link href="/contact" onClick={closeMobile} className="py-3.5 text-[15px] font-bold uppercase tracking-wider border-b border-border-custom hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Drawer Footer */}
        <div className="shrink-0 px-6 py-6 border-t border-border-custom bg-[#f8f9fa]">
          <p className="text-[12px] text-text-secondary font-medium mb-1">Need help?</p>
          <a href="tel:+918080703321" className="text-[15px] font-black text-primary hover:text-secondary transition-colors">
            +91 8080703321
          </a>
          <div className="flex gap-4 mt-4">
            <Link href="/contact" onClick={closeMobile} className="flex-1 text-center py-3 bg-primary text-white text-[12px] font-bold uppercase tracking-wider hover:bg-secondary transition-colors">
              Get Quote
            </Link>
            <Link href="/shop" onClick={closeMobile} className="flex-1 text-center py-3 border border-primary text-primary text-[12px] font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Global Drawers */}
      <CartDrawer />
      <SearchDrawer />
    </header>
  );
};

export default Navbar;
