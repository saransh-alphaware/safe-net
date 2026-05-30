'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '@/lib/context/AppContext';

const CartDrawer = () => {
  const { 
    cart, 
    cartOpen, 
    setCartOpen, 
    removeFromCart, 
    updateCartQuantity 
  } = useApp();

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
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
                <ShoppingBag size={20} className="text-primary" />
                <h3 className="text-[18px] font-bold uppercase tracking-wider">Your Cart ({cart.length})</h3>
              </div>
              <button 
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-bg-secondary rounded-full transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-20">
                  <div className="w-16 h-16 bg-[#f8f8f8] rounded-full flex items-center justify-center text-text-secondary opacity-60">
                    <ShoppingBag size={28} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold uppercase tracking-wider mb-2">Your cart is empty</h4>
                    <p className="text-[13px] text-text-secondary leading-relaxed max-w-[240px] mx-auto">
                      Explore our premium furniture and decors to add items here.
                    </p>
                  </div>
                  <Link 
                    href="/shop" 
                    onClick={() => setCartOpen(false)}
                    className="inline-block px-8 py-3.5 bg-primary text-white text-[11px] font-black uppercase tracking-widest hover:bg-secondary transition-all rounded-[2px]"
                  >
                    Return to shop
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor}`} className="flex gap-4 pb-6 border-b border-border-custom last:border-b-0 last:pb-0">
                    {/* Image */}
                    <div className="relative w-20 h-24 bg-[#f8f8f8] rounded-[2px] overflow-hidden flex-shrink-0">
                      <Image 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        fill 
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Link 
                            href={`/product/${item.product.slug}`}
                            onClick={() => setCartOpen(false)}
                            className="text-[14px] font-bold leading-tight hover:text-secondary transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                            className="text-text-secondary hover:text-red-500 transition-colors p-1 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        
                        {/* Variations */}
                        {item.selectedColor && (
                          <div className="text-[11px] text-text-secondary font-bold uppercase tracking-wider mt-1 flex items-center gap-1.5">
                            <span>Color:</span>
                            <span className="text-primary">{item.selectedColor}</span>
                          </div>
                        )}
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-2">
                        {/* Qty controls */}
                        <div className="flex items-center border border-border-custom bg-[#f8f9fa] rounded-[2px] h-8 px-1">
                          <button 
                            onClick={() => updateCartQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                            className="p-1 hover:text-secondary transition-colors cursor-pointer"
                          >
                            <Minus size={11} />
                          </button>
                          <span className="w-8 text-center text-[12px] font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                            className="p-1 hover:text-secondary transition-colors cursor-pointer"
                          >
                            <Plus size={11} />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-[14px] font-black">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary (Sticky at bottom) */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#f8f9fa] border-t border-border-custom space-y-4">
                <div className="flex items-center justify-between text-[15px] font-bold">
                  <span>Subtotal:</span>
                  <span className="text-[18px] font-black text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[12px] text-text-secondary leading-relaxed">
                  Shipping, taxes, and discounts calculated at checkout.
                </p>
                <div className="grid grid-cols-1 gap-2 pt-2">
                  <Link 
                    href="/checkout"
                    onClick={() => setCartOpen(false)}
                    className="w-full h-12 bg-primary text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-secondary transition-all rounded-[2px]"
                  >
                    Proceed to checkout
                  </Link>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="w-full h-12 border border-border-custom text-primary text-[11px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-white transition-all bg-transparent rounded-[2px] cursor-pointer"
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
