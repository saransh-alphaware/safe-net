'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import { useApp } from "@/lib/context/AppContext";
import { products } from "@/lib/data/products";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  tag?: "Hot" | "New" | "Sale";
  originalPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  tag,
  originalPrice,
}) => {
  const { addToCart, setQuickViewProduct, toggleWishlist, isInWishlist } = useApp();

  // Find the exact matching product from database by name
  const product = React.useMemo(() => {
    return products.find(p => p.name.toLowerCase() === name.toLowerCase()) || products[0];
  }, [name]);

  const activeInWishlist = isInWishlist(product.id);

  return (
    <div className="group flex flex-col gap-5">
      <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden group/image border border-transparent hover:border-border-custom transition-all duration-300">
        {/* Badges */}
        {tag && (
          <div className="absolute top-5 left-5 z-20">
            <span
              className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm text-white ${
                tag === "Hot"
                  ? "bg-accent"
                  : tag === "New"
                    ? "bg-[#0039e3]"
                    : "bg-[#232323]"
              }`}
            >
              {tag}
            </span>
          </div>
        )}

        {/* Product Image */}
        <Link
          href={`/product/${product.slug}`}
          className="block h-full w-full"
        >
          <Image
            src={product.imageUrl || image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover/image:scale-110"
          />
        </Link>

        {/* Hover Actions — slide up from bottom with staggered animation */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
          <button
            onClick={() => addToCart(product, 1)}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-all duration-300 translate-y-6 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 cursor-pointer"
            style={{ transitionDelay: '0ms' }}
            title="Add to cart"
          >
            <ShoppingBag size={15} strokeWidth={2} />
          </button>
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-all duration-300 translate-y-6 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 cursor-pointer"
            style={{ transitionDelay: '80ms' }}
            title="Quick view"
          >
            <Eye size={15} strokeWidth={2} />
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 translate-y-6 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 cursor-pointer ${
              activeInWishlist 
                ? 'bg-primary text-white' 
                : 'bg-white text-primary hover:bg-primary hover:text-white'
            }`}
            style={{ transitionDelay: '160ms' }}
            title={activeInWishlist ? "In Wishlist" : "Add to wishlist"}
          >
            <Heart size={15} strokeWidth={2} className={activeInWishlist ? "fill-white" : ""} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-start">
        <Link
          href={`/product/${product.slug}`}
          className="text-[15px] font-bold text-primary hover:text-secondary transition-colors leading-tight"
        >
          {name}
        </Link>
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-[14px] text-text-secondary line-through opacity-50 font-medium">
              {originalPrice}
            </span>
          )}
          <span className="text-[14px] font-bold text-primary">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
