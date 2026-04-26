import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import ShopSidebar from '@/components/shop/ShopSidebar';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Wifi speaker lamp',
    price: '$65.00',
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp',
    badge: 'new' as const,
    rating: 5,
    slug: 'wifi-speaker-lamp'
  },
  {
    id: '2',
    name: 'Nordrana basket',
    price: '$65.00',
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp',
    badge: 'sale' as const,
    rating: 4,
    slug: 'nordrana-basket'
  },
  {
    id: '3',
    name: 'Earth globe black',
    price: '$55.00',
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-11.jpg.webp',
    rating: 5,
    slug: 'earth-globe-black'
  },
  {
    id: '4',
    name: 'Vappeby speaker lamp',
    price: '$55.00',
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-08.jpg.webp',
    badge: 'new' as const,
    rating: 5,
    slug: 'vappeby-speaker-lamp'
  },
  {
    id: '5',
    name: 'Modern chair green',
    price: '$120.00',
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-02.jpg.webp',
    rating: 4,
    slug: 'modern-chair-green'
  },
  {
    id: '6',
    name: 'Wooden wall clock',
    price: '$45.00',
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-10.jpg.webp',
    badge: 'sale' as const,
    rating: 5,
    slug: 'wooden-wall-clock'
  }
];

export default function CategoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Breadcrumb Section */}
      <div className="bg-[#f8f9fa] py-14">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[44px] font-black text-primary uppercase tracking-tight mb-2">Designer Stool</h1>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-text-secondary">
              <a href="/" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Home</a>
              <span>/</span>
              <a href="/" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Product Category</a>
              <span>/</span>
              <span className="text-primary/40">Designer Stool</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-6 mx-auto py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] shrink-0">
            <ShopSidebar />
          </div>

          {/* Product Listing Area */}
          <div className="flex-grow">
            
            {/* Top Controls */}
            <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-border-custom">
              <div className="text-[14px] font-medium text-text-secondary">
                Showing all <span className="font-bold text-primary">6 results</span>
              </div>
              
              <div className="flex items-center gap-8">
                {/* View Switch */}
                <div className="hidden md:flex items-center gap-4">
                  <span className="text-[12px] font-black uppercase tracking-widest text-primary/40">Columns:</span>
                  <div className="flex gap-2">
                    <button className="text-primary hover:text-secondary transition-colors"><LayoutGrid size={18} /></button>
                    <button className="text-text-secondary hover:text-secondary transition-colors opacity-30"><List size={18} /></button>
                  </div>
                </div>

                {/* Sorting */}
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[14px] font-medium text-text-secondary group-hover:text-secondary transition-colors">Default sorting</span>
                  <ChevronDown size={14} className="text-text-secondary group-hover:text-secondary transition-colors" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-20 flex justify-center">
              <div className="flex gap-3">
                 <span className="h-10 w-10 flex items-center justify-center bg-primary text-white text-[14px] font-bold rounded-full">1</span>
                 <button className="h-10 w-10 flex items-center justify-center border border-border-custom text-[14px] font-bold hover:bg-primary hover:text-white transition-all rounded-full">2</button>
                 <button className="h-10 w-10 flex items-center justify-center border border-border-custom text-[14px] font-bold hover:bg-primary hover:text-white transition-all rounded-full">→</button>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
