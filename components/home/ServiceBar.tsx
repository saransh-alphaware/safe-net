import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbMapPin2 } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const TruckIcon = () => (
  <TbTruckDelivery className="w-12 h-12 text-[#232323]" />
);

const PinIcon = () => <TbMapPin2 className="w-12 h-12 text-[#232323]" />;

const CardIcon = () => (
  <MdOutlinePayment className="w-12 h-12 text-[#232323]" />
);

const SupportIcon = () => (
  <MdOutlineSupportAgent className="w-12 h-12 text-[#232323]" />
);

const services = [
  {
    id: 1,
    title: "Free shipping",
    desc: "Free return & exchange",
    Icon: TruckIcon,
  },
  { id: 2, title: "Store locator", desc: "Find nearest store", Icon: PinIcon },
  {
    id: 3,
    title: "Secure payment",
    desc: "100% secure method",
    Icon: CardIcon,
  },
  {
    id: 4,
    title: "Online support",
    desc: "24/7 support center",
    Icon: SupportIcon,
  },
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
                index !== services.length - 1
                  ? "lg:border-r lg:border-[#e5e7eb]"
                  : ""
              }`}
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                <service.Icon />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[16px] font-bold text-[#232323] leading-tight">
                  {service.title}
                </h4>
                <p className="text-[13px] text-[#828282] mt-1 leading-tight">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
