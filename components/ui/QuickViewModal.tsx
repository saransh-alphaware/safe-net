'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useApp } from '@/lib/context/AppContext';

const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');

  // Reset states when a new product is loaded
  useEffect(() => {
    if (quickViewProduct) {
      setQuantity(1);
      setSelectedColor(quickViewProduct.colors?.[0] || '');
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setQuickViewProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4">
        {/* Overlay backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white w-full max-w-[900px] shadow-2xl rounded-[3px] overflow-hidden z-10 flex flex-col md:flex-row font-sans text-primary"
        >
          {/* Close button top right */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-5 right-5 p-2 bg-white/80 hover:bg-white text-primary rounded-full shadow-sm hover:scale-110 transition-all z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Left: Gallery Frame */}
          <div className="relative w-full md:w-1/2 bg-[#f8f8f8] aspect-square md:aspect-auto min-h-[300px] md:min-h-[450px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain p-8 md:p-12"
            />
            {product.badge && (
              <span className="absolute top-6 left-6 px-3 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-[2px] z-10">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Info Area */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-y-auto max-h-[90vh] md:max-h-[600px]">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3 text-[#ffcc00]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={i < product.rating ? 'fill-[#ffcc00]' : 'text-gray-200'}
                />
              ))}
              <span className="text-text-secondary text-[10px] font-bold ml-2 uppercase tracking-wide">({product.rating}.0 Rating)</span>
            </div>

            {/* Title */}
            <h2 className="text-[26px] md:text-[32px] font-black leading-tight mb-2 tracking-tight">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[22px] font-black text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-[16px] text-text-secondary line-through opacity-60">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex flex-col gap-6">
              {/* Variation selectors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-text-secondary block mb-2.5">
                    Select Color: <span className="text-primary font-bold">{selectedColor}</span>
                  </span>
                  <div className="flex gap-2">
                    {product.colors.map((color) => {
                      const isActive = selectedColor === color;
                      // Fallback hex mapper
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
                          className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
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

              {/* Quantity Selector & Cart additions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border-custom">
                <div className="flex items-center border border-border-custom h-12 px-1 bg-[#f8f8f8] rounded-[2px]">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-2 hover:text-secondary transition-colors cursor-pointer"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-10 text-center font-bold text-[14px]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-2 hover:text-secondary transition-colors cursor-pointer"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-grow h-12 bg-primary text-white text-[11px] font-black uppercase tracking-widest px-8 hover:bg-secondary transition-all rounded-[2px] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  Add to cart
                </button>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-6 pt-4 border-t border-border-custom text-[11px] font-bold uppercase tracking-wider text-text-secondary space-y-1">
              <div>
                SKU: <span className="text-primary">{product.sku}</span>
              </div>
              <div>
                Category: <span className="text-primary">{product.category}</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
