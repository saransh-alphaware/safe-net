import React from 'react';
import { Heart, ShieldCheck, Wallet, Box } from 'lucide-react';

const services = [
  { id: 1, title: 'Satisfaction guarantee', desc: 'Exchange in 30 days', Icon: Heart },
  { id: 2, title: 'Secure payment', desc: 'Secure payment system', Icon: ShieldCheck },
  { id: 3, title: 'Efficient wallet', desc: 'Back up and running', Icon: Wallet },
  { id: 4, title: 'Handmade products', desc: 'Premium crafted goods', Icon: Box },
];

const ServiceBar = () => {
  return (
    <div className="bg-white py-16 lg:py-24 border-b border-border-custom">
      <div className="container overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
        <div className="flex justify-between items-center gap-12 min-w-[1000px] lg:min-w-0">
          {services.map((service) => (
            <div key={service.id} className="flex items-center gap-5 group items-start">
              <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform bg-bg-secondary p-4 rounded-full">
                <service.Icon size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-primary mb-0.5 tracking-tight uppercase">{service.title}</h4>
                <p className="text-[13px] text-text-secondary leading-tight">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
