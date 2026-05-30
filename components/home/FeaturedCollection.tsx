import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const FeaturedCollection = () => {
  return (
    <section className="bg-bg-secondary overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] md:h-auto lg:h-[800px]">
        <div className="relative min-h-[400px] lg:min-h-full">
          <div className="absolute inset-0">
             <Image src="/images/catalog/page-10.png" alt="Motorised Zip Screen Collection" fill className="object-cover" />
          </div>
        </div>
        <div className="flex items-center p-12 lg:p-24 bg-bg-secondary relative">
          <div className="w-full max-w-[400px]">
            <span className="text-sm font-bold uppercase text-secondary mb-2 block">SafeNet & Co.</span>
            <h2 className="text-[48px] lg:text-[64px] leading-[0.9] font-extrabold mb-12 text-primary">Zip <br />Screen</h2>
            <Button variant="primary">Lookbook collection</Button>
            
            <div className="mt-12 pt-12 border-t border-border-custom flex gap-6 items-end">
              <div className="bg-white p-4 shadow-custom-sm">
                <Image src="/images/products/zip_screen_thumb.png" alt="Zip Screen" width={100} height={120} className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-1">Motorised Zip Screen</h4>
                <p className="text-sm text-text-secondary mb-4">Remote & Manual variants</p>
                <div className="flex gap-2">
                  <button className="w-10 h-10 border border-border-custom rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white">←</button>
                  <button className="w-10 h-10 border border-border-custom rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
