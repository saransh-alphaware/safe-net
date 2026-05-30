'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';
import { useApp } from '@/lib/context/AppContext';
import { products } from '@/lib/data/products';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  badge?: 'new' | 'sale' | 'hot';
  rating: number;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  oldPrice,
  imageUrl,
  badge,
  rating,
  slug,
}) => {
  const { addToCart, setQuickViewProduct, toggleWishlist, isInWishlist } = useApp();

  const product = React.useMemo(() => {
    return products.find(p => p.id === id) || products.find(p => p.slug === slug) || products[0];
  }, [id, slug]);

  const activeInWishlist = isInWishlist(product.id);

  return (
    <div className="group relative flex flex-col bg-white">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-secondary border border-transparent hover:border-border-custom transition-all duration-300">
        {/* Badge */}
        {badge && (
          <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white rounded-[2px] ${
            badge === 'new' ? 'bg-[#50b284]' : 
            badge === 'sale' ? 'bg-[#ff5252]' : 
            'bg-accent'
          }`}>
            {badge}
          </div>
        )}

        {/* Product Image */}
        <Link href={`/product/${slug}`} className="block h-full w-full">
          <Image
            src={product.imageUrl || imageUrl}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Hover Overlay Icons */}
        <div className="absolute right-[-50px] top-4 flex flex-col gap-2 transition-all duration-300 group-hover:right-4 z-20">
          <button 
            onClick={() => addToCart(product, 1)}
            className="flex h-10 w-10 items-center justify-center bg-white text-primary shadow-custom-sm transition-all hover:bg-primary hover:text-white rounded-full cursor-pointer" 
            aria-label="Add to cart"
            title="Add to cart"
          >
            <ShoppingCart size={16} />
          </button>
          <button 
            onClick={() => setQuickViewProduct(product)}
            className="flex h-10 w-10 items-center justify-center bg-white text-primary shadow-custom-sm transition-all hover:bg-primary hover:text-white rounded-full cursor-pointer" 
            aria-label="Quick view"
            title="Quick view"
          >
            <Eye size={16} />
          </button>
          <button 
            onClick={() => toggleWishlist(product)}
            className={`flex h-10 w-10 items-center justify-center shadow-custom-sm transition-all rounded-full cursor-pointer ${
              activeInWishlist 
                ? 'bg-primary text-white' 
                : 'bg-white text-primary hover:bg-primary hover:text-white'
            }`} 
            aria-label="Add to wishlist"
            title={activeInWishlist ? "In Wishlist" : "Add to wishlist"}
          >
            <Heart size={16} className={activeInWishlist ? "fill-white" : ""} />
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex flex-col py-6">
        <div className="mb-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < rating ? 'fill-[#ffcc00] text-[#ffcc00]' : 'text-gray-200'}
            />
          ))}
        </div>
        <Link href={`/product/${slug}`} className="mb-1 text-[15px] font-bold text-primary hover:text-secondary transition-colors leading-snug">
          {name}
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-[16px] font-black text-primary">{price}</span>
          {oldPrice && (
            <span className="text-[14px] text-text-secondary line-through font-medium opacity-65">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
