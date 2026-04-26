import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Eye, Layers } from "lucide-react";

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
  return (
    <div className="group flex flex-col gap-5">
      <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden group/image">
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
          href={`/product/${name.toLowerCase().replace(/ /g, "-")}`}
          className="block h-full w-full"
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover/image:scale-110"
          />
        </Link>

        {/* Hover Actions */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-30">
          <button
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-custom-md hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
            title="Add to cart"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
          <button
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-custom-md hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
            title="Quick view"
          >
            <Eye size={18} strokeWidth={1.5} />
          </button>
          <button
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-custom-md hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
            title="Compare"
          >
            <Layers size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-start">
        <Link
          href={`/product/${name.toLowerCase().replace(/ /g, "-")}`}
          className="text-[15px] font-bold text-primary hover:text-secondary transition-colors leading-tight"
        >
          {name}
        </Link>
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-[14px] text-text-secondary line-through opacity-50">
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
