'use client';

import React from 'react';
import Link from 'next/link';
import { Star, X } from 'lucide-react';
import { products } from '@/lib/data/products';

interface ShopSidebarProps {
  activeCategory?: string | null;
  onSelectCategory?: (category: string | null) => void;
  activeColor?: string | null;
  onSelectColor?: (color: string | null) => void;
  activeFabric?: string | null;
  onSelectFabric?: (fabric: string | null) => void;
  priceRange?: [number, number];
  onSelectPriceRange?: (range: [number, number]) => void;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({
  activeCategory = null,
  onSelectCategory,
  activeColor = null,
  onSelectColor,
  activeFabric = null,
  onSelectFabric,
  priceRange = [0, 150],
  onSelectPriceRange,
}) => {
  // Compute counts dynamically
  const categories = [
    { name: "Cabinet" },
    { name: "Chair" },
    { name: "Ceramic pots", categoryRef: "Decor" },
    { name: "Designer sofa", categoryRef: "Sofa" },
    { name: "Designer stool", categoryRef: "Stool" },
    { name: "Furniture" }
  ];

  const colors = [
    { name: 'Black', hex: '#232323' },
    { name: 'Blue', hex: '#5c8abd' },
    { name: 'Green', hex: '#87a86b' },
    { name: 'Orange', hex: '#d35e36' },
    { name: 'Pink', hex: '#da596a' },
    { name: 'Silver', hex: '#9d9d9d' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Yellow', hex: '#e3c066' },
  ];

  const fabrics = [
    { name: 'Crepe fabric', color: '#1a535c' },
    { name: 'Jute fabric', color: '#bc8a7e' },
    { name: 'Polyolefin', color: '#a66e38' },
    { name: 'Wollen fabric', color: '#334e68' },
  ];

  // Helper to count occurrences
  const getCategoryCount = (catName: string, refName?: string) => {
    const target = (refName || catName).toLowerCase();
    return products.filter(p => p.category.toLowerCase() === target).length;
  };

  const getColorCount = (colorName: string) => {
    return products.filter(p => p.colors.includes(colorName)).length;
  };

  const getFabricCount = (fabricName: string) => {
    return products.filter(p => p.fabrics.includes(fabricName)).length;
  };

  const hasAnyFilterActive = activeCategory || activeColor || activeFabric || priceRange[0] > 0 || priceRange[1] < 150;

  const handleReset = () => {
    if (onSelectCategory) onSelectCategory(null);
    if (onSelectColor) onSelectColor(null);
    if (onSelectFabric) onSelectFabric(null);
    if (onSelectPriceRange) onSelectPriceRange([0, 150]);
  };

  return (
    <aside className="flex flex-col gap-12 font-sans text-primary">
      {/* Active filters summary */}
      {hasAnyFilterActive && (
        <div className="p-5 bg-bg-secondary border border-border-custom rounded-[3px]">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-[14px] font-black uppercase tracking-wider">Active filters</h5>
            <button 
              onClick={handleReset}
              className="text-[11px] font-bold text-text-secondary hover:text-secondary flex items-center gap-1 cursor-pointer"
            >
              Clear all <X size={10} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeCategory && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[12px] font-bold border border-border-custom rounded-full">
                {activeCategory}
                <X size={10} className="cursor-pointer" onClick={() => onSelectCategory && onSelectCategory(null)} />
              </span>
            )}
            {activeColor && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[12px] font-bold border border-border-custom rounded-full">
                {activeColor}
                <X size={10} className="cursor-pointer" onClick={() => onSelectColor && onSelectColor(null)} />
              </span>
            )}
            {activeFabric && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[12px] font-bold border border-border-custom rounded-full">
                {activeFabric}
                <X size={10} className="cursor-pointer" onClick={() => onSelectFabric && onSelectFabric(null)} />
              </span>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 150) && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[12px] font-bold border border-border-custom rounded-full">
                ${priceRange[0]} - ${priceRange[1]}
                <X size={10} className="cursor-pointer" onClick={() => onSelectPriceRange && onSelectPriceRange([0, 150])} />
              </span>
            )}
          </div>
        </div>
      )}

      {/* Category Section */}
      <div>
        <h4 className="mb-6 text-[18px] font-bold tracking-tight uppercase tracking-wider text-[14px] font-black">
          Filter by category
        </h4>
        <ul className="flex flex-col gap-4">
          {categories.map((cat) => {
            const targetRef = cat.categoryRef || cat.name;
            const count = getCategoryCount(cat.name, cat.categoryRef);
            if (count === 0) return null; // hide empty categories

            const isActive = activeCategory === targetRef;
            return (
              <li key={cat.name}>
                <button
                  onClick={() => onSelectCategory && onSelectCategory(isActive ? null : targetRef)}
                  className="w-full flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`relative flex h-[16px] w-[16px] items-center justify-center rounded-full border transition-all ${
                      isActive ? 'border-primary' : 'border-gray-300 group-hover:border-secondary'
                    }`}>
                      {isActive && <div className="h-2 w-2 rounded-full bg-primary" />}
                    </div>
                    <span className={`text-[15px] font-medium transition-colors ${
                      isActive ? 'text-primary font-bold' : 'text-[#828282] group-hover:text-secondary'
                    }`}>
                      {cat.name}
                    </span>
                  </div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8f8f8] text-[10px] font-bold text-primary/60">
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price Section */}
      <div>
        <h4 className="mb-6 text-[14px] font-black uppercase tracking-wider">
          Filter by price
        </h4>
        <div className="flex flex-col gap-4">
          <input
            type="range"
            min="0"
            max="150"
            value={priceRange[1]}
            onChange={(e) => onSelectPriceRange && onSelectPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-text-secondary font-medium">
              Max Price: <span className="font-bold text-primary">${priceRange[1]}</span>
            </span>
            <button 
              onClick={() => onSelectPriceRange && onSelectPriceRange([0, priceRange[1]])}
              className="px-4 py-1.5 border border-border-custom text-[10px] font-bold uppercase tracking-widest text-[#828282] hover:bg-primary hover:text-white transition-all rounded-[3px] cursor-pointer"
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Color Section */}
      <div>
        <h4 className="mb-6 text-[14px] font-black uppercase tracking-wider">
          Filter by color
        </h4>
        <div className="flex flex-col gap-4">
          {colors.map((color) => {
            const count = getColorCount(color.name);
            if (count === 0) return null; // hide empty colors

            const isActive = activeColor === color.name;
            return (
              <button
                key={color.name}
                onClick={() => onSelectColor && onSelectColor(isActive ? null : color.name)}
                className="w-full flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span 
                    className={`h-4.5 w-4.5 rounded-full border border-gray-200 shadow-sm transition-transform group-hover:scale-115 ${
                      isActive ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className={`text-[15px] transition-colors ${
                    isActive ? 'text-primary font-bold' : 'text-[#828282] group-hover:text-secondary'
                  }`}>
                    {color.name}
                  </span>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8f8f8] text-[10px] font-bold text-primary/60">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fabric Section */}
      <div>
        <h4 className="mb-6 text-[14px] font-black uppercase tracking-wider">
          Filter by fabric
        </h4>
        <div className="flex flex-col gap-4">
          {fabrics.map((fabric) => {
            const count = getFabricCount(fabric.name);
            if (count === 0) return null; // hide empty fabrics

            const isActive = activeFabric === fabric.name;
            return (
              <button
                key={fabric.name}
                onClick={() => onSelectFabric && onSelectFabric(isActive ? null : fabric.name)}
                className="w-full flex items-center justify-between group group-hover:text-secondary cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span 
                    className={`h-4.5 w-4.5 rounded-full border border-gray-200 shadow-sm transition-transform group-hover:scale-115 ${
                      isActive ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: fabric.color }}
                  />
                  <span className={`text-[15px] transition-colors ${
                    isActive ? 'text-primary font-bold' : 'text-[#828282] group-hover:text-secondary'
                  }`}>
                    {fabric.name}
                  </span>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8f8f8] text-[10px] font-bold text-primary/60">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* New Arrivals Widget */}
      <div>
        <h4 className="mb-6 text-[14px] font-black uppercase tracking-wider">
          New arrivals
        </h4>
        <div className="flex flex-col gap-5">
          {products.filter(p => p.badge === 'new').slice(0, 2).map((item) => (
            <div key={item.name} className="flex gap-4 items-center">
              <div className="h-14 w-14 flex-shrink-0 bg-bg-secondary relative border border-border-custom rounded-[2px] overflow-hidden">
                <img src={item.imageUrl} alt={item.name} className="h-full w-full object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <Link href={`/product/${item.slug}`} className="text-[13px] font-bold text-primary hover:text-secondary cursor-pointer transition-colors leading-tight">
                  {item.name}
                </Link>
                <span className="text-[13px] font-black text-primary mt-1">${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
