"use client";

import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 left-0 right-0 pointer-events-none z-50 flex justify-between px-6 md:px-8">
      {/* Floating Phone Button (Bottom Left) */}
      <a
        href="tel:+918851606948"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#1E3A8A] to-[#2563EB] text-white rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group relative overflow-hidden"
        aria-label="Call SafeNet Customer Support"
      >
        {/* Hover overlay ring */}
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out" />
        {/* Ripple/ping animation on hover */}
        <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:animate-ping group-hover:opacity-60 pointer-events-none" />
        <FaPhone size={22} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
      </a>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <a
        href="https://wa.me/918851606948?text=Hi,%20I'm%20interested%20in%20SafeNet%20services%20(Invisible%20Grills,%20Bird%20Net,%20Mosquito%20Net)%20and%20would%20love%20to%20get%20more%20details.%20Please%20connect%20with%20me.%20Thanks!"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#059669] to-[#10B981] text-white rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group relative overflow-hidden"
        aria-label="Chat with SafeNet on WhatsApp"
      >
        {/* Hover overlay ring */}
        <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out" />
        {/* Ripple/ping animation on hover */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-0 group-hover:animate-ping group-hover:opacity-60 pointer-events-none" />
        <FaWhatsapp size={28} className="relative z-10 transition-transform duration-300 group-hover:scale-105" />
      </a>
    </div>
  );
}
