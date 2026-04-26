import React from 'react';
import Link from 'next/link';

const categories = [
  { name: "Best sellers", count: "08" },
  { name: "Cabinet", count: "04" },
  { name: "Ceramic pots", count: "04" },
  { name: "Chair", count: "04" },
  { name: "Designer sofa", count: "04" },
  { name: "Designer stool", count: "04" },
  { name: "Furniture", count: "01" }
];

const colors = [
  { name: 'Black', hex: '#232323', count: '09' },
  { name: 'Blue', hex: '#5c8abd', count: '03' },
  { name: 'Green', hex: '#87a86b', count: '03' },
  { name: 'Orange', hex: '#d35e36', count: '02' },
  { name: 'Pink', hex: '#da596a', count: '04' },
  { name: 'Silver', hex: '#9d9d9d', count: '03' },
  { name: 'White', hex: '#FFFFFF', count: '06' },
  { name: 'Yellow', hex: '#e3c066', count: '01' },
];

const fabrics = [
  { name: 'Crepe fabric', color: '#1a535c', count: '02' },
  { name: 'Jute fabric', color: '#bc8a7e', count: '01' },
  { name: 'Polyolefin', color: '#a66e38', count: '02' },
  { name: 'Wollen fabric', color: '#334e68', count: '04' },
];

const ShopSidebar = () => {
  return (
    <aside className="flex flex-col gap-14">
      {/* Category Section */}
      <div>
        <h4 className="mb-8 text-[20px] font-bold text-primary tracking-tight">
          Filter by category
        </h4>
        <ul className="flex flex-col gap-5">
          {categories.map((cat) => {
            const isActive = cat.name === 'Designer stool';
            return (
              <li key={cat.name}>
                <Link
                  href={`/product-category/${cat.name.toLowerCase().replace(/ /g, '-')}`}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`relative flex h-[18px] w-[18px] items-center justify-center rounded-full border transition-all ${
                      isActive ? 'border-primary' : 'border-gray-300 group-hover:border-secondary'
                    }`}>
                      {isActive && <div className="h-2 w-2 rounded-full bg-primary" />}
                    </div>
                    <span className={`text-[17px] font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-[#828282] group-hover:text-secondary'
                    }`}>
                      {cat.name}
                    </span>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f8f8f8] text-[11px] font-bold text-primary/60">
                    {cat.count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Color Section */}
      <div>
        <h4 className="mb-8 text-[20px] font-bold text-primary tracking-tight">
          Filter by color
        </h4>
        <div className="flex flex-col gap-5">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <span 
                  className={`h-5 w-5 rounded-full border border-gray-100 shadow-sm`}
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-[17px] text-[#828282] group-hover:text-secondary transition-colors font-medium">
                  {color.name}
                </span>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f8f8f8] text-[11px] font-bold text-primary/60">
                {color.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fabric Section */}
      <div>
        <h4 className="mb-8 text-[20px] font-bold text-primary tracking-tight">
          Filter by fabric
        </h4>
        <div className="flex flex-col gap-5">
          {fabrics.map((fabric) => (
            <div key={fabric.name} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <span 
                  className={`h-6 w-6 rounded-full border border-gray-100 shadow-sm overflow-hidden`}
                  style={{ backgroundColor: fabric.color }}
                />
                <span className="text-[17px] text-[#828282] group-hover:text-secondary transition-colors font-medium">
                  {fabric.name}
                </span>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f8f8f8] text-[11px] font-bold text-primary/60">
                {fabric.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div>
        <h4 className="mb-8 text-[20px] font-bold text-primary tracking-tight">
          Filter by price
        </h4>
        <div className="relative pt-2 px-1">
          {/* Custom Range Slider Placeholder UI */}
          <div className="h-1 w-full bg-primary relative rounded-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full" />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="text-[17px] text-[#828282] font-medium">
              Price: <span className="text-[#828282]">$0 — $85</span>
            </div>
            <button className="px-4 py-1.5 border border-border-custom text-[11px] font-bold uppercase tracking-widest text-[#828282] hover:bg-primary hover:text-white transition-all rounded-[3px]">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* New Arrivals Widget */}
      <div>
        <h4 className="mb-8 text-[20px] font-bold text-primary tracking-tight">
          New arrivals
        </h4>
        <div className="flex flex-col gap-6">
          {[
            { name: 'Nordrana basket', price: '$65.00', image: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp' },
            { name: 'Vappeby speaker', price: '$55.00', image: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-08.jpg.webp' }
          ].map((item) => (
            <div key={item.name} className="flex gap-4 items-center">
              <div className="h-16 w-16 flex-shrink-0 bg-bg-secondary relative">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-primary hover:text-secondary cursor-pointer transition-colors leading-tight">{item.name}</span>
                <span className="text-[13px] font-black text-primary mt-1">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h4 className="mb-8 text-[20px] font-bold text-primary tracking-tight">
          Popular tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {['Benches', 'Chairs', 'Lighting', 'Mirror', 'Tables'].map((tag) => (
            <Link 
              key={tag} 
              href="#" 
              className="px-4 py-1.5 border border-border-custom text-[12px] font-bold uppercase tracking-widest text-text-secondary hover:bg-primary hover:text-white transition-all rounded-[3px]"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
