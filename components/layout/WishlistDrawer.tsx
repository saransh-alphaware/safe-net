'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Heart, ShoppingBag } from 'lucide-react';
import { useApp } from '@/lib/context/AppContext';

const WishlistDrawer = () => {
  const { 
    wishlist, 
    wishlistOpen, 
    setWishlistOpen, 
    toggleWishlist,
    addToCart
  } = useApp();

  const handleMoveToCart = (product: any) => {
    addToCart(product, 1);
    // Optionally remove from wishlist when adding to cart
    toggleWishlist(product);
  };

  return (
    <AnimatePresence>
      {wishlistOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setWishlistOpen(false)}
            className="fixed inset-0 bg-black z-[2000]"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-0 right-0 h-screen w-full max-w-[440px] bg-white shadow-2xl z-[2001] flex flex-col font-sans text-primary"
          >
            {/* Header */}
            <div className="p-6 border-b border-border-custom flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart size={20} className="text-secondary fill-secondary" />
                <h3 className="text-[18px] font-bold uppercase tracking-wider">Your Wishlist ({wishlist.length})</h3>
              </div>
              <button 
                onClick={() => setWishlistOpen(false)}
                className="p-2 hover:bg-bg-secondary rounded-full transition-colors cursor-pointer"
                aria-label="Close wishlist"
              >
                <X size={20} />
              </button>
            </div>

            {/* Wishlist Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {wishlist.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-20">
                  <div className="w-16 h-16 bg-[#f8f8f8] rounded-full flex items-center justify-center text-text-secondary opacity-60">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold uppercase tracking-wider mb-2">Your wishlist is empty</h4>
                    <p className="text-[13px] text-text-secondary leading-relaxed max-w-[240px] mx-auto">
                      Explore our safety nets and invisible grills to add items you love.
                    </p>
                  </div>
                  <Link 
                    href="/shop" 
                    onClick={() => setWishlistOpen(false)}
                    className="inline-block px-8 py-3.5 bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-secondary transition-all rounded-[2px]"
                  >
                    Explore products
                  </Link>
                </div>
              ) : (
                wishlist.map((product) => (
                  <div key={product.id} className="flex gap-4 pb-6 border-b border-border-custom last:border-b-0 last:pb-0">
                    {/* Image */}
                    <div className="relative w-20 h-24 bg-[#f8f8f8] rounded-[2px] overflow-hidden flex-shrink-0">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <Link 
                            href={`/product/${product.slug}`}
                            onClick={() => setWishlistOpen(false)}
                            className="text-[14px] font-bold leading-tight hover:text-secondary transition-colors"
                          >
                            {product.name}
                          </Link>
                          <button 
                            onClick={() => toggleWishlist(product)}
                            className="text-text-secondary hover:text-red-500 transition-colors p-1 cursor-pointer"
                            title="Remove from wishlist"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        
                        <div className="text-[11px] text-text-secondary font-bold uppercase tracking-wider mt-1">
                          {product.category}
                        </div>
                      </div>

                      {/* Add to Cart (Inquiry) Action */}
                      <div className="flex items-center justify-between mt-3">
                        <button
                          onClick={() => handleMoveToCart(product)}
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all rounded-[2px] cursor-pointer"
                        >
                          <ShoppingBag size={12} />
                          Add to Inquiry
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {wishlist.length > 0 && (
              <div className="p-6 bg-[#f8f9fa] border-t border-border-custom">
                <button 
                  onClick={() => setWishlistOpen(false)}
                  className="w-full h-12 bg-primary text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-secondary transition-all rounded-[2px] cursor-pointer"
                >
                  Continue browsing
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistDrawer;
