import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { Star, Minus, Plus, Heart, Repeat, Share2, Mail } from 'lucide-react';
import Image from 'next/image';

const relatedProducts = [
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
  }
];

export default function ProductDetailPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-10 pb-20">
        <div className="container px-6 mx-auto">
          
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-text-secondary">
            <a href="/" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Home</a>
            <span>/</span>
            <a href="/product-category/designer-stool" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Designer Stool</a>
            <span>/</span>
            <span className="text-primary/40">Wifi speaker lamp</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Gallery */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-square bg-[#f8f8f8] overflow-hidden group">
                 <Image 
                   src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp" 
                   alt="Wifi speaker lamp" 
                   fill 
                   className="object-contain"
                 />
                 <div className="absolute top-6 left-6 bg-[#50b284] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">New</div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`aspect-square bg-[#f8f8f8] relative cursor-pointer border-2 transition-all ${i === 1 ? 'border-secondary' : 'border-transparent hover:border-secondary/30'}`}>
                    <Image 
                      src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp" 
                      alt="Thumbnail" 
                      fill 
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-4 text-[#ffcc00]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#ffcc00]" />)}
                <span className="text-text-secondary text-[12px] font-bold ml-2 uppercase tracking-wide">(3 customer reviews)</span>
              </div>

              <h1 className="text-[36px] font-black text-primary leading-tight mb-4 lowercase first-letter:uppercase">Wifi speaker lamp</h1>
              
              <div className="text-[28px] font-black text-primary mb-8">$65.00</div>

              <p className="text-[16px] text-text-secondary leading-[1.8] mb-10">
                A stylish and versatile lighting solution that blends seamlessly into any interior. This designer stool is not just a piece of furniture but a statement of luxury and comfort, handcrafted with the finest materials.
              </p>

              <div className="flex flex-col gap-8 mb-12">
                {/* SKU & Category */}
                <div className="flex flex-col gap-1 text-[13px] font-bold uppercase tracking-widest text-primary">
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary">SKU:</span>
                    <span>1204-101</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary">Category:</span>
                    <a href="#" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Designer Stool</a>
                  </div>
                </div>

                {/* Variations */}
                <div className="flex flex-col gap-4">
                  <span className="text-[13px] font-bold uppercase tracking-widest text-primary">Color: <span className="text-text-secondary">Black</span></span>
                  <div className="flex gap-3">
                    <button className="w-8 h-8 rounded-full bg-black border-2 border-primary outline outline-offset-2 outline-border-custom" />
                    <button className="w-8 h-8 rounded-full bg-gray-400 border border-border-custom" />
                    <button className="w-8 h-8 rounded-full bg-orange-200 border border-border-custom" />
                  </div>
                </div>

                {/* Counter & Add to Cart */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center border border-border-custom h-[54px] px-2 bg-[#f8f8f8]">
                    <button className="p-2 hover:text-secondary transition-colors"><Minus size={14} /></button>
                    <input type="text" value="1" readOnly className="w-12 text-center font-black bg-transparent outline-none" />
                    <button className="p-2 hover:text-secondary transition-colors"><Plus size={14} /></button>
                  </div>
                  <button className="flex-grow h-[54px] bg-primary text-white text-[13px] font-black uppercase tracking-widest px-10 hover:bg-secondary transition-all">
                    Add to cart
                  </button>
                </div>

                {/* Extra Actions */}
                <div className="flex items-center gap-8 border-t border-border-custom pt-8">
                  <button className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                    <Heart size={16} />
                    Add to wishlist
                  </button>
                  <button className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                    <Repeat size={16} />
                    Add to compare
                  </button>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center gap-4">
                 <span className="text-[12px] font-bold uppercase tracking-widest text-text-secondary">Share with:</span>
                 <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"><Share2 size={14} /></a>
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"><Mail size={14} /></a>
                 </div>
              </div>

            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-28 border-t border-border-custom">
             <div className="flex justify-center gap-12 mt-[-1px]">
                <button className="py-8 border-t-2 border-primary text-[14px] font-black uppercase tracking-[2px] text-primary">Description</button>
                <button className="py-8 border-t-2 border-transparent text-[14px] font-bold uppercase tracking-[2px] text-text-secondary hover:text-primary transition-colors">Information</button>
                <button className="py-8 border-t-2 border-transparent text-[14px] font-bold uppercase tracking-[2px] text-text-secondary hover:text-primary transition-colors">Reviews (3)</button>
             </div>
             
             <div className="py-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                   <div className="flex flex-col gap-6">
                      <h3 className="text-[28px] font-black text-primary leading-tight">Handcrafted with precision and love for details.</h3>
                      <p className="text-text-secondary leading-loose">
                        We believe that every piece of furniture should tell a story. Our designers work tirelessly to create pieces that are not only functional but also works of art. The wifi speaker lamp is a testament to this philosophy.
                      </p>
                      <ul className="flex flex-col gap-3">
                         {['Eco-friendly materials', 'Adjustable lighting', 'Integrated Bluetooth speaker', 'Wireless charging base'].map((item) => (
                           <li key={item} className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest text-primary">
                             <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                             {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div className="relative aspect-[4/3] bg-bg-secondary overflow-hidden">
                      <Image 
                        src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp" 
                        alt="Product visual" 
                        fill 
                        className="object-cover"
                      />
                   </div>
                </div>
             </div>
          </div>

          {/* Related Products */}
          <div className="mt-28 pt-20 border-t border-border-custom">
             <h2 className="text-[32px] font-black text-primary uppercase tracking-tight text-center mb-16 underline decoration-secondary decoration-4 underline-offset-[16px]">Related products</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
