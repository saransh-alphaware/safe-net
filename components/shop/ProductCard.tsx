import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye, Repeat, Star } from 'lucide-react';

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
  name,
  price,
  oldPrice,
  imageUrl,
  badge,
  rating,
  slug,
}) => {
  return (
    <div className="group relative flex flex-col bg-white">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-secondary">
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
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Hover Overlay Icons */}
        <div className="absolute right-[-50px] top-4 flex flex-col gap-2 transition-all duration-300 group-hover:right-4 z-20">
          <button className="flex h-10 w-10 items-center justify-center bg-white text-primary shadow-custom-sm transition-all hover:bg-secondary hover:text-white rounded-full" aria-label="Add to cart">
            <ShoppingCart size={18} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center bg-white text-primary shadow-custom-sm transition-all hover:bg-secondary hover:text-white rounded-full" aria-label="Quick view">
            <Eye size={18} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center bg-white text-primary shadow-custom-sm transition-all hover:bg-secondary hover:text-white rounded-full" aria-label="Compare">
            <Repeat size={18} />
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
              className={i < rating ? 'fill-[#ffcc00] text-[#ffcc00]' : 'text-gray-300'}
            />
          ))}
        </div>
        <Link href={`/product/${slug}`} className="mb-1 text-[15px] font-bold text-primary hover:text-secondary transition-colors">
          {name}
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-[16px] font-black text-primary">{price}</span>
          {oldPrice && (
            <span className="text-[14px] text-text-secondary line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
