import React from 'react';

const PromoBar = () => {
  return (
    <div className="bg-white py-6 border-y border-border-custom overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll">
        <div className="flex items-center gap-12 text-[32px] font-bold text-primary uppercase">
          <span>Pay with multiple credit cards</span>
          <span className="text-secondary">•</span>
          <span>Pay with multiple credit cards</span>
          <span className="text-secondary">•</span>
          <span>Pay with multiple credit cards</span>
          <span className="text-secondary">•</span>
          <span>Pay with multiple credit cards</span>
          <span className="text-secondary">•</span>
          <span>Pay with multiple credit cards</span>
          <span className="text-secondary">•</span>
          <span>Pay with multiple credit cards</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;
