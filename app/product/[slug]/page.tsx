'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { Star, Minus, Plus, Heart, Share2, Mail, Check } from 'lucide-react';
import Image from 'next/image';
import { useApp } from '@/lib/context/AppContext';
import { products, Product } from '@/lib/data/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { slug } = React.use(params);
  const { addToCart, toggleWishlist, isInWishlist } = useApp();

  // Find active product
  const product = React.useMemo(() => {
    return products.find(p => p.slug === slug);
  }, [slug]);

  // Client states
  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState<'description' | 'info' | 'reviews'>('description');
  const [addedMessage, setAddedMessage] = useState(false);

  // Initialize values when product loads
  useEffect(() => {
    if (product) {
      setActiveImage(product.imageUrl);
      setQuantity(1);
      setSelectedColor(product.colors?.[0] || '');
      setAddedMessage(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center py-40 text-center gap-6">
          <h2 className="text-[32px] font-black text-primary uppercase">Product Not Found</h2>
          <p className="text-text-secondary max-w-sm">
            We couldn't locate the furniture item you are looking for. It may have been discontinued.
          </p>
          <a href="/shop" className="px-8 py-3.5 bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-secondary transition-all rounded-[2px]">
            Return to shop
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  // Related products under same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const activeInWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-10 pb-20 font-sans text-primary">
        <div className="container px-6 mx-auto">
          
          {/* Breadcrumbs */}
          <nav className="mb-12 flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-text-secondary">
            <a href="/" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Home</a>
            <span>/</span>
            <a href="/shop" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">Shop</a>
            <span>/</span>
            <a href={`/shop?category=${product.category}`} className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">{product.category}</a>
            <span>/</span>
            <span className="text-primary/40">{product.name}</span>
          </nav>

          {/* Product core detail showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
            
            {/* Gallery images display */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-square bg-[#f8f8f8] overflow-hidden rounded-[3px] border border-border-custom">
                 <Image 
                   src={activeImage || product.imageUrl} 
                   alt={product.name} 
                   fill 
                   priority
                   className="object-contain p-6"
                 />
                 {product.badge && (
                   <span className="absolute top-6 left-6 bg-accent text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-[2px]">
                     {product.badge}
                   </span>
                 )}
              </div>

              {/* Thumbnails grid */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.gallery.map((img, idx) => {
                    const isActive = activeImage === img;
                    return (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImage(img)}
                        className={`aspect-square bg-[#f8f8f8] relative cursor-pointer border-2 transition-all rounded-[2px] overflow-hidden ${
                          isActive ? 'border-primary' : 'border-transparent hover:border-primary/40'
                        }`}
                      >
                        <Image 
                          src={img} 
                          alt={`Thumbnail ${idx + 1}`} 
                          fill 
                          className="object-contain p-2"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Info details and additions */}
            <div className="flex flex-col justify-center">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 text-[#ffcc00]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < product.rating ? 'fill-[#ffcc00]' : 'text-gray-200'} 
                  />
                ))}
                <span className="text-text-secondary text-[11px] font-bold ml-2 uppercase tracking-wide">
                  (3 customer reviews)
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-[34px] lg:text-[44px] font-black leading-tight mb-4 tracking-tight">
                {product.name}
              </h1>
              
              {/* Price */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[28px] font-black text-primary">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-[20px] text-text-secondary line-through font-medium opacity-65">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Summary */}
              <p className="text-[15px] text-text-secondary leading-[1.8] mb-8">
                {product.description}
              </p>

              {/* Interactivity tools */}
              <div className="flex flex-col gap-6 mb-10 pt-6 border-t border-border-custom">
                {/* SKU and details */}
                <div className="flex flex-col gap-1.5 text-[12px] font-bold uppercase tracking-widest text-primary">
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary">SKU:</span>
                    <span>{product.sku}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary">Category:</span>
                    <span>{product.category}</span>
                  </div>
                </div>

                {/* Color selections */}
                {product.colors && product.colors.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-widest text-text-secondary">
                      Color: <span className="text-primary font-bold">{selectedColor}</span>
                    </span>
                    <div className="flex gap-2.5">
                      {product.colors.map((color) => {
                        const isActive = selectedColor === color;
                        // Color hex fallback
                        const hex = color === 'Black' ? '#232323' : 
                                    color === 'Blue' ? '#5c8abd' : 
                                    color === 'Green' ? '#87a86b' : 
                                    color === 'Orange' ? '#d35e36' : 
                                    color === 'Pink' ? '#da596a' : 
                                    color === 'Silver' ? '#9d9d9d' : 
                                    color === 'White' ? '#f0f0f0' : '#e3c066';
                        return (
                          <button 
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-7 h-7 rounded-full border transition-all cursor-pointer ${
                              isActive ? 'ring-2 ring-primary ring-offset-2 scale-110' : 'border-gray-200 hover:scale-105'
                            }`}
                            style={{ backgroundColor: hex }}
                            title={color}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity + cart actions */}
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center border border-border-custom h-[54px] px-2 bg-[#f8f8f8] rounded-[2px]">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="p-2 hover:text-secondary transition-colors cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <input 
                      type="text" 
                      value={quantity} 
                      readOnly 
                      className="w-12 text-center font-black bg-transparent outline-none" 
                    />
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-2 hover:text-secondary transition-colors cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className="flex-grow h-[54px] bg-primary text-white text-[12px] font-black uppercase tracking-widest px-10 hover:bg-secondary transition-all rounded-[2px] cursor-pointer flex items-center justify-center gap-2"
                  >
                    Add to cart
                  </button>
                </div>

                {addedMessage && (
                  <div className="text-[12px] text-green-600 font-bold uppercase tracking-wider flex items-center gap-1.5 animate-bounce">
                    <Check size={14} /> Added item successfully to cart drawer!
                  </div>
                )}

                {/* Additional quick actions */}
                <div className="flex items-center gap-8 border-t border-border-custom pt-6">
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                      activeInWishlist ? 'text-secondary font-black' : 'text-primary hover:text-secondary'
                    }`}
                  >
                    <Heart size={15} className={activeInWishlist ? 'fill-secondary' : ''} />
                    {activeInWishlist ? 'Saved in wishlist' : 'Add to wishlist'}
                  </button>
                </div>
              </div>

              {/* Share icons */}
              <div className="flex items-center gap-4 border-t border-border-custom pt-6">
                 <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">Share this:</span>
                 <div className="flex gap-2.5">
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-text-secondary">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-text-secondary">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-text-secondary"><Share2 size={13} /></a>
                    <a href="#" className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-text-secondary"><Mail size={13} /></a>
                 </div>
              </div>

            </div>
          </div>

          {/* Dynamic Tabs section */}
          <div className="mt-28 border-t border-border-custom">
             <div className="flex justify-center gap-12 mt-[-1px]">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`py-6 border-t-2 text-[13px] font-black uppercase tracking-[2px] transition-colors cursor-pointer ${
                    activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                  }`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('info')}
                  className={`py-6 border-t-2 text-[13px] font-black uppercase tracking-[2px] transition-colors cursor-pointer ${
                    activeTab === 'info' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                  }`}
                >
                  Information
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`py-6 border-t-2 text-[13px] font-black uppercase tracking-[2px] transition-colors cursor-pointer ${
                    activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-primary'
                  }`}
                >
                  Reviews (3)
                </button>
             </div>
             
             {/* Tab Content Panels */}
             <div className="py-12 max-w-4xl mx-auto min-h-[300px]">
                {activeTab === 'description' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-in fade-in duration-300">
                     <div className="flex flex-col gap-6">
                        <h3 className="text-[24px] lg:text-[28px] font-black leading-tight text-primary">Handcrafted with precision and love for details.</h3>
                        <p className="text-text-secondary leading-loose text-[14px]">
                          We believe that every piece of furniture should tell a unique story. Our local designers work tirelessly to create structures that are not only extremely functional but also organic works of art that capture luxury.
                        </p>
                        <ul className="flex flex-col gap-3">
                           {['Eco-friendly sustainable materials', 'Sleek premium textures', 'Intense quality controls', 'Crafted by local rural artisans'].map((item) => (
                             <li key={item} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-primary">
                               <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                               {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                     <div className="relative aspect-[4/3] bg-bg-secondary overflow-hidden rounded-[2px]">
                        <Image 
                          src={product.imageUrl} 
                          alt="Product detail highlight" 
                          fill 
                          className="object-cover"
                        />
                     </div>
                  </div>
                )}

                {activeTab === 'info' && (
                  <div className="max-w-xl mx-auto space-y-4 animate-in fade-in duration-300">
                    <h3 className="text-[20px] font-black mb-6 uppercase tracking-wider text-center">Technical Specifications</h3>
                    {[
                      { label: 'Weight', value: '4.5 kg' },
                      { label: 'Dimensions', value: '45 x 45 x 65 cm' },
                      { label: 'Material', value: 'Solid Oak, Brushed Steel, Handmade Ceramics' },
                      { label: 'Finish', value: 'Matte lacquer, raw natural glaze finish' },
                      { label: 'Eco-Friendly', value: 'Yes (100% FSC certified timber)' }
                    ].map((row, idx) => (
                      <div key={idx} className="flex justify-between py-3.5 border-b border-border-custom text-[14px]">
                        <span className="font-bold text-text-secondary uppercase text-[11px] tracking-wider">{row.label}</span>
                        <span className="text-primary font-medium">{row.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <h3 className="text-[20px] font-black uppercase tracking-wider mb-6 text-center">Customer Testimonials</h3>
                    {[
                      { author: 'Elena Rostova', date: 'April 14, 2026', text: 'Stunning design! It completely transformed my bedroom corner styling. High-quality acoustics and soft comfortable light glow.', stars: 5 },
                      { author: 'Marc Dubois', date: 'May 02, 2026', text: 'Handcrafted quality is definitely outstanding. Tapered lines and lacquer details look premium. Would recommend Safenet highly.', stars: 4 },
                      { author: 'Sarah Jenkins', date: 'May 19, 2026', text: 'I am in love with this decor. Exquisite look, feels heavy and solid. Shipping was extremely fast too!', stars: 5 }
                    ].map((rev, idx) => (
                      <div key={idx} className="p-6 bg-[#f8f9fa] border border-border-custom rounded-[3px] space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-bold text-primary block text-[15px]">{rev.author}</span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary mt-0.5 block">{rev.date}</span>
                          </div>
                          <div className="flex gap-0.5 text-[#ffcc00]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={11} className={i < rev.stars ? 'fill-[#ffcc00]' : 'text-gray-300'} />
                            ))}
                          </div>
                        </div>
                        <p className="text-[14px] text-text-secondary leading-relaxed italic">
                          "{rev.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}
             </div>
          </div>

          {/* Related Products Grid */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-20 border-t border-border-custom">
               <h2 className="text-[28px] md:text-[32px] font-black text-primary uppercase tracking-tight text-center mb-16 underline decoration-secondary decoration-4 underline-offset-[16px]">
                 Related products
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {relatedProducts.map((p) => (
                    <ProductCard 
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      price={`$${p.price.toFixed(2)}`}
                      oldPrice={p.originalPrice ? `$${p.originalPrice.toFixed(2)}` : undefined}
                      imageUrl={p.imageUrl}
                      badge={p.badge}
                      rating={p.rating}
                      slug={p.slug}
                    />
                  ))}
               </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
