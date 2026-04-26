'use client';

import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: 'Hot' | 'New' | 'Sale';
  originalPrice?: string;
}

const bestSellers: Product[] = [
  { id: 1, name: 'Wifi speaker lamp', price: '$65.00', image: '/images/products/pottery.png', tag: 'New' as any },
  { id: 2, name: 'Wall clock gray pink', price: '$85.00', image: '/images/products/florence_compact.png' },
  { id: 3, name: 'Nordrana basket', price: '$65.00', originalPrice: '$85.00', image: '/images/products/pottery.png', tag: 'Sale' },
  { id: 4, name: 'Sockeraert vase black', price: '$65.00', image: '/images/products/florence_compact.png' },
  { id: 5, name: 'Palm leaf handmade', price: '$65.00', image: '/images/products/pottery.png' },
  { id: 6, name: 'Earth globe black', price: '$55.00', originalPrice: '$65.00', image: '/images/products/florence_compact.png', tag: 'Sale' },
  { id: 7, name: 'Fejka artificial plant', price: '$65.00', image: '/images/products/pottery.png' },
  { id: 8, name: 'Vardande plant pot', price: '$27.00', image: '/images/products/florence_compact.png', tag: 'New' as any },
];

const newArrivals: Product[] = [
  { id: 9, name: 'Modern Chair', price: '$120.00', image: '/images/products/pottery.png', tag: 'New' },
  { id: 10, name: 'Designer Sofa', price: '$450.00', image: '/images/products/wooden_table.png', tag: 'Hot' },
  { id: 11, name: 'Minimalist Vase', price: '$45.00', image: '/images/products/pottery.png' },
  { id: 12, name: 'Classic Table', price: '$299.00', image: '/images/products/wooden_table.png' },
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('best');

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-12 mb-16 border-b border-border-custom relative">
          <button 
            className={`text-[15px] font-bold uppercase tracking-widest pb-6 transition-all duration-300 relative group ${activeTab === 'best' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}
            onClick={() => setActiveTab('best')}
          >
            Best sellers
            {activeTab === 'best' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary animate-in fade-in slide-in-from-left-2" />}
          </button>
          <button 
            className={`text-[15px] font-bold uppercase tracking-widest pb-6 transition-all duration-300 relative group ${activeTab === 'new' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}
            onClick={() => setActiveTab('new')}
          >
            New arrivals
            {activeTab === 'new' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary animate-in fade-in slide-in-from-left-2" />}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {(activeTab === 'best' ? bestSellers : newArrivals).map((product) => (
            <ProductCard 
              key={product.id} 
              image={product.image}
              name={product.name}
              price={product.price}
              tag={product.tag as any}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
