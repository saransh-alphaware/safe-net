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
  { id: 1, name: 'Invisible Grill SS316', price: 'Get Quote', image: '/safe-net/images/products/invisible_grill_thumb.webp', tag: 'Hot' as any },
  { id: 2, name: 'Bird Net (HDPE)', price: 'Get Quote', image: '/safe-net/images/products/bird_net_hdpe.webp' },
  { id: 3, name: 'Pleated Mosquito Net', price: 'Get Quote', image: '/safe-net/images/products/mosquito_net_thumb.webp', tag: 'New' },
  { id: 4, name: 'Nylon Net (Diamond)', price: 'Get Quote', image: '/safe-net/images/products/bird_net_nylon.webp' },
  { id: 5, name: 'Aluminium Security Mesh', price: 'Get Quote', image: '/safe-net/images/products/aluminium_mesh_thumb.webp' },
  { id: 6, name: 'Motorised Zip Screen', price: 'Get Quote', image: '/safe-net/images/products/zip_screen_thumb.webp', tag: 'New' },
  { id: 7, name: 'Wire Rope Grill', price: 'Get Quote', image: '/safe-net/images/products/invisible_grill_wire_rope.webp' },
  { id: 8, name: 'Aluminium Track', price: 'Get Quote', image: '/safe-net/images/products/invisible_grill_track.webp', tag: 'Hot' as any },
];

const newArrivals: Product[] = [
  { id: 9, name: 'Invisible Grill (2mm)', price: 'Get Quote', image: '/safe-net/images/products/invisible_grill_hero.webp', tag: 'New' },
  { id: 10, name: 'Motorised Zip Screen', price: 'Get Quote', image: '/safe-net/images/products/zip_screen_thumb.webp', tag: 'Hot' },
  { id: 11, name: 'Bird Net (Nylon)', price: 'Get Quote', image: '/safe-net/images/products/bird_net_nylon.webp' },
  { id: 12, name: 'Security Mesh Window', price: 'Get Quote', image: '/safe-net/images/products/aluminium_mesh_thumb.webp' },
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
