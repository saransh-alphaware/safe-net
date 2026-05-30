'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { useApp } from '@/lib/context/AppContext';
import { products, Product } from '@/lib/data/products';

const SearchDrawer = () => {
  const { searchOpen, setSearchOpen } = useApp();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
      setQuery('');
      setResults([]);
    }
  }, [searchOpen]);

  // Reactive filtering
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = products.filter(
      p => p.name.toLowerCase().includes(query.toLowerCase()) || 
           p.category.toLowerCase().includes(query.toLowerCase()) ||
           p.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 6)); // limit to top 6 results
  }, [query]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 w-full h-full bg-white/95 backdrop-blur-md z-[5000] overflow-y-auto font-sans text-primary flex flex-col items-center justify-start py-20 px-6"
        >
          {/* Close button top right */}
          <button 
            onClick={() => setSearchOpen(false)}
            className="absolute top-10 right-10 p-3 hover:bg-bg-secondary rounded-full transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X size={26} />
          </button>

          {/* Search container */}
          <div className="w-full max-w-[800px] flex flex-col gap-12 mt-10">
            
            {/* Input form */}
            <div className="relative border-b-2 border-primary pb-4 flex items-center gap-4">
              <Search size={28} className="text-text-secondary opacity-60" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search premium products..."
                className="w-full text-[24px] md:text-[32px] font-light bg-transparent outline-none border-none placeholder-primary/20 text-primary"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="p-1 hover:text-secondary text-text-secondary cursor-pointer"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Results Grid */}
            <div className="w-full">
              {query.trim() === '' ? (
                // Quick categories/links when search is empty
                <div className="flex flex-col gap-6">
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-[#FF3E30]">Suggested categories</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Cabinet', 'Chair', 'Lamp', 'Light', 'Sofa', 'Stool'].map((cat) => (
                      <Link
                        key={cat}
                        href={`/product-category/${cat.toLowerCase()}`}
                        onClick={() => setSearchOpen(false)}
                        className="px-6 py-2.5 bg-[#f8f8f8] hover:bg-primary hover:text-white transition-all duration-300 text-[13px] font-bold uppercase tracking-wider rounded-[2px]"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                // No results
                <div className="py-12 text-center text-text-secondary">
                  <p className="text-[16px] font-medium">No products found matching "{query}"</p>
                  <p className="text-[13px] opacity-75 mt-2">Try searching for other terms like 'sofa', 'lamp', 'stool' or 'chair'.</p>
                </div>
              ) : (
                // Results List
                <div className="flex flex-col gap-6">
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-text-secondary border-b border-border-custom pb-3">Search results ({results.length})</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="group flex gap-4 p-4 border border-border-custom hover:border-primary transition-all duration-300 bg-white"
                      >
                        <div className="relative w-16 h-20 bg-[#f8f8f8] flex-shrink-0">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[15px] font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{product.name}</span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary mt-1">{product.category}</span>
                          <span className="text-[14px] font-black mt-1">${product.price.toFixed(2)}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchDrawer;
