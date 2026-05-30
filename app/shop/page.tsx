'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import ShopSidebar from '@/components/shop/ShopSidebar';
import { LayoutGrid, List, ChevronDown, RefreshCw } from 'lucide-react';
import { products } from '@/lib/data/products';

export default function ShopPage() {
  // Filter States
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activeFabric, setActiveFabric] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  
  // View & Sorting States
  const [sortBy, setSortBy] = useState<string>('default');
  const [columns, setColumns] = useState<number>(3); // 2, 3 or 4 columns
  const [sortByOpen, setSortByOpen] = useState<boolean>(false);

  // Pagination
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory) {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Color filter
    if (activeColor) {
      result = result.filter(p => p.colors.includes(activeColor));
    }

    // Fabric filter
    if (activeFabric) {
      result = result.filter(p => p.fabrics.includes(activeFabric));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activeColor, activeFabric, priceRange, sortBy]);

  // Reset to page 1 whenever filters change
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleResetFilters = () => {
    setActiveCategory(null);
    setActiveColor(null);
    setActiveFabric(null);
    setPriceRange([0, 250]);
    setSortBy('default');
    setCurrentPage(1);
  };

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

      {/* Breadcrumb / Title Bar */}
      <div className="bg-[#f8f9fa] py-14">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[36px] lg:text-[44px] font-black text-primary uppercase tracking-tight mb-2">
              {activeCategory ? activeCategory : 'SafeNet & Co.'}
            </h1>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-text-secondary">
              <a href="/" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Home</a>
              <span>/</span>
              <a href="/shop" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Shop</a>
              {activeCategory && (
                <>
                  <span>/</span>
                  <span className="text-primary/40">{activeCategory}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Area */}
      <main className="container px-6 mx-auto py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Sidebar Filters */}
          <div className="w-full lg:w-[280px] shrink-0">
            <ShopSidebar 
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              activeColor={activeColor}
              onSelectColor={setActiveColor}
              activeFabric={activeFabric}
              onSelectFabric={setActiveFabric}
              priceRange={priceRange}
              onSelectPriceRange={setPriceRange}
            />
          </div>

          {/* Right Column: Products Display */}
          <div className="flex-grow">
            
            {/* Top Toolbar Controls */}
            <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-border-custom relative z-40">
              <div className="text-[14px] font-medium text-text-secondary">
                Showing {filteredProducts.length === products.length ? 'all ' : ''} 
                <span className="font-bold text-primary">{filteredProducts.length} results</span>
              </div>
              
              <div className="flex items-center gap-8 w-full sm:w-auto justify-between sm:justify-end">
                {/* Columns layout grid selectors */}
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
            {filteredProducts.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center gap-6">
                <RefreshCw size={40} className="text-text-secondary opacity-40 animate-spin duration-1000" />
                <div>
                  <h3 className="text-[18px] font-bold uppercase tracking-wider mb-2">No products match your filters</h3>
                  <p className="text-[14px] text-text-secondary max-w-[340px] leading-relaxed">
                    Try broadening your selection by resetting colorways, fabrics, or price limits.
                  </p>
                </div>
                <button 
                  onClick={handleResetFilters}
                  className="px-8 py-3.5 bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-secondary transition-all rounded-[2px] cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-x-8 gap-y-14 transition-all duration-500 ${
                columns === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                columns === 4 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' :
                'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
              }`}>
                {paginatedProducts.map((product) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center border-t border-border-custom pt-10">
                <div className="flex gap-2.5 flex-wrap justify-center">
                  {/* Prev */}
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="h-10 px-4 flex items-center justify-center border border-border-custom text-[13px] font-bold text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all rounded-[3px] cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ←
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 flex items-center justify-center text-[13px] font-bold rounded-[3px] transition-all cursor-pointer ${
                        currentPage === page
                          ? 'bg-primary text-white border border-primary'
                          : 'border border-border-custom text-text-secondary hover:bg-primary hover:text-white hover:border-primary'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="h-10 px-4 flex items-center justify-center border border-border-custom text-[13px] font-bold text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all rounded-[3px] cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    →
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
