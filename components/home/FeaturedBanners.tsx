import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedBanners = () => {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Main Large Banner: Wooden classic table */}
          <div className="relative group overflow-hidden h-[500px] lg:h-[600px] flex flex-col justify-end p-10 lg:p-16">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/safe-net/images/products/invisible_grill_hero.png" 
                alt="Invisible Grill" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
            
            <div className="relative z-10 max-w-sm">
              <h3 className="text-[34px] lg:text-[44px] font-bold text-primary mb-8 leading-[1.1] tracking-tighter">
                Invisible <span className="font-light italic">Grill</span>
              </h3>
              <Link 
                href="/product-category/invisible-grill" 
                className="inline-block px-10 py-4 bg-white text-primary text-[11px] font-black uppercase tracking-[2px] transition-all hover:bg-primary hover:text-white"
              >
                Explore category
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Top Right Banner: Pottery products */}
            <div className="relative group overflow-hidden h-[234px] lg:h-[280px] flex flex-col justify-center p-10 lg:p-14">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/safe-net/images/products/mosquito_net_hero.png" 
                  alt="Mosquito Net" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              
              <div className="relative z-10 max-w-[200px]">
                <h4 className="text-[26px] lg:text-[32px] font-bold text-primary mb-6 leading-tight tracking-tighter">
                  Mosquito <span className="font-light italic">Net</span>
                </h4>
                <Link 
                  href="/product-category/mosquito-net" 
                  className="inline-block px-8 py-3 bg-white text-primary text-[10px] font-black uppercase tracking-[1px] transition-all hover:bg-primary hover:text-white"
                >
                  Explore category
                </Link>
              </div>
            </div>

            {/* Bottom Right Banner: Florence compact */}
            <div className="relative group overflow-hidden h-[234px] lg:h-[280px] flex flex-col justify-center p-10 lg:p-14">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/safe-net/images/products/aluminium_mesh_hero.png" 
                  alt="Aluminium Security Mesh" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              
              <div className="relative z-10 max-w-[200px]">
                <h4 className="text-[26px] lg:text-[32px] font-bold text-primary mb-6 leading-tight tracking-tighter">
                  Security <span className="font-light italic">Mesh</span>
                </h4>
                <Link 
                  href="/product-category/security-mesh" 
                  className="inline-block px-8 py-3 bg-white text-primary text-[10px] font-black uppercase tracking-[1px] transition-all hover:bg-primary hover:text-white"
                >
                  Explore category
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedBanners;
