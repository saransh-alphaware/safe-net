'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import ShopSidebar from '@/components/shop/ShopSidebar';
import { LayoutGrid, List, ChevronDown, RefreshCw } from 'lucide-react';
import { products } from '@/lib/data/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = React.use(params);
  
  // View & Sorting States
  const [sortBy, setSortBy] = useState<string>('default');
  const [columns, setColumns] = useState<number>(3);
  const [sortByOpen, setSortByOpen] = useState<boolean>(false);

  // Format category slug to matching name
  const categoryName = useMemo(() => {
    const norm = slug.toLowerCase();
    if (norm === 'designer-stool' || norm === 'stool') return 'Stool';
    if (norm === 'designer-sofa' || norm === 'sofa') return 'Sofa';
    if (norm === 'ceramic-pots' || norm === 'decor') return 'Decor';
    if (norm === 'wooden-table' || norm === 'furniture') return 'Furniture';
    if (norm === 'cabinet') return 'Cabinet';
    if (norm === 'chair') return 'Chair';
    if (norm === 'lamp') return 'Lamp';
    if (norm === 'light') return 'Light';
    
    // Capitalize fallback
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  }, [slug]);

  // Compute matching products
  const categoryProducts = useMemo(() => {
    let result = products.filter(
      p => p.category.toLowerCase() === categoryName.toLowerCase()
    );

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryName, sortBy]);

  const getSortByLabel = () => {
    switch (sortBy) {
      case 'price-asc': return 'Price: Low to High';
      case 'price-desc': return 'Price: High to Low';
      case 'rating': return 'Customer Rating';
      default: return 'Default sorting';
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Breadcrumbs Header */}
      <div className="bg-[#f8f9fa] py-14">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[36px] lg:text-[44px] font-black text-primary uppercase tracking-tight mb-2">
              {categoryName}
            </h1>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-text-secondary">
              <a href="/" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Home</a>
              <span>{">"}</span>
              <a href="/shop" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Product Category</a>
              <span>{">"}</span>
              <span className="text-primary/40">{categoryName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <main className="container px-6 mx-auto py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] shrink-0">
            <ShopSidebar activeCategory={categoryName} />
          </div>

          {/* Catalog Listing Area */}
          <div className="flex-grow">
            
            {/* Toolbar */}
            <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-border-custom relative z-40">
              <div className="text-[14px] font-medium text-text-secondary">
                Showing <span className="font-bold text-primary">{categoryProducts.length} results</span>
              </div>
              
              <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end">
                {/* Column toggle controls */}
                <div className="hidden md:flex items-center gap-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-primary/40">Columns:</span>
                  <div className="flex gap-1.5">
                    {[2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setColumns(num)}
                        className={`h-8 w-8 flex items-center justify-center border text-[12px] font-bold transition-all rounded-[2px] cursor-pointer ${
                          columns === num 
                            ? 'bg-primary text-white border-primary' 
                            : 'border-border-custom text-text-secondary hover:text-primary hover:border-primary'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dropdown Sorting selector */}
                <div className="relative">
                  <button 
                    onClick={() => setSortByOpen(!sortByOpen)}
                    className="flex items-center gap-2 text-[14px] font-bold text-primary hover:text-secondary transition-colors cursor-pointer"
                  >
                    <span>{getSortByLabel()}</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${sortByOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {sortByOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setSortByOpen(false)} />
                      <div className="absolute right-0 mt-3 w-56 bg-white border border-border-custom shadow-custom-lg rounded-[2px] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col py-1.5">
                          {[
                            { value: 'default', label: 'Default sorting' },
                            { value: 'price-asc', label: 'Price: Low to High' },
                            { value: 'price-desc', label: 'Price: High to Low' },
                            { value: 'rating', label: 'Customer Rating' }
                          ].map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => {
                                setSortBy(opt.value);
                                setSortByOpen(false);
                              }}
                              className={`text-left px-5 py-2.5 text-[14px] transition-colors cursor-pointer ${
                                sortBy === opt.value 
                                  ? 'bg-[#f8f9fa] text-secondary font-bold' 
                                  : 'text-text-secondary hover:bg-[#f8f9fa] hover:text-primary'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Catalog Grid */}
            {categoryProducts.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center gap-6">
                <RefreshCw size={36} className="text-text-secondary opacity-40 animate-spin" />
                <div>
                  <h3 className="text-[18px] font-bold uppercase tracking-wider mb-2">No products in this category</h3>
                  <p className="text-[14px] text-text-secondary max-w-[340px] leading-relaxed">
                    Check back later or search other categories in our design catalog.
                  </p>
                </div>
                <a 
                  href="/shop" 
                  className="px-8 py-3.5 bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-secondary transition-all rounded-[2px]"
                >
                  Return to shop
                </a>
              </div>
            ) : (
              <div className={`grid gap-x-8 gap-y-14 transition-all duration-500 ${
                columns === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                columns === 4 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' :
                'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
              }`}>
                {categoryProducts.map((product) => (
                  <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={`$${product.price.toFixed(2)}`}
                    oldPrice={product.originalPrice ? `$${product.originalPrice.toFixed(2)}` : undefined}
                    imageUrl={product.imageUrl}
                    badge={product.badge}
                    rating={product.rating}
                    slug={product.slug}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
