import React from 'react';

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#232323]">
    <rect x="1" y="4" width="14" height="11" rx="1.5" ry="1.5"></rect>
    <polygon points="15 7 19 7 22 10 22 15 15 15 15 7"></polygon>
    <circle cx="5.5" cy="17.5" r="2"></circle>
    <circle cx="16.5" cy="17.5" r="2"></circle>
    <path d="M5.5 10.5l2 2 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#232323]">
    <path d="M17.5 9.5c0 4.5-5.5 9.5-5.5 9.5S6.5 14 6.5 9.5a5.5 5.5 0 1 1 11 0z" />
    <circle cx="12" cy="9.5" r="2" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 17h8M17 13v8" />
  </svg>
);

const CardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#232323]">
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="9" x2="22" y2="9" />
    <rect x="14" y="12" width="8" height="8" rx="4" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16.5 16l1 1 2-2" />
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#232323]">
    <path d="M8 8H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2m-2 4h4.5L22 16V9a2 2 0 0 0-2-2h-3" />
    <path d="M3 18l-1 3 3-1h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7.5Z" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6.5" cy="12.5" r="0.75" fill="currentColor" />
    <circle cx="9" cy="12.5" r="0.75" fill="currentColor" />
    <circle cx="11.5" cy="12.5" r="0.75" fill="currentColor" />
  </svg>
);

const services = [
  { id: 1, title: 'Free shipping', desc: 'Free return & exchange', Icon: TruckIcon },
  { id: 2, title: 'Store locator', desc: 'Find nearest store', Icon: PinIcon },
  { id: 3, title: 'Secure payment', desc: '100% secure method', Icon: CardIcon },
  { id: 4, title: 'Online support', desc: '24/7 support center', Icon: SupportIcon },
];

const ServiceBar = () => {
  return (
    <div className="bg-white py-12 border-y border-[#e5e7eb] font-sans">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex items-center gap-5 justify-start lg:justify-center w-full px-2 ${
                index !== services.length - 1 ? 'lg:border-r lg:border-[#e5e7eb]' : ''
              }`}
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                <service.Icon />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[16px] font-bold text-[#232323] leading-tight">{service.title}</h4>
                <p className="text-[13px] text-[#828282] mt-1 leading-tight">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
