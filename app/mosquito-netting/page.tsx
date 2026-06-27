'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldAlert, ArrowRight, Eye, Wind } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTitle from '@/components/ui/PageTitle';

const MosquitoNettingPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Page Title */}
        <PageTitle title="Mosquito Netting" mainTitle="Insect & Mosquito Screens" />

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Column: Image */}
              <div className="w-full lg:w-5/12 relative">
                <div className="relative aspect-[4/3] w-full shadow-custom-xl overflow-hidden rounded-[8px]">
                  <Image
                    src="/safe-net/images/products/mosquito_net_hero.webp"
                    alt="Retractable Pleated Mosquito Net for Balcony"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full lg:w-7/12">
                <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Premium Mosquito Protection</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight mb-8">
                  Enjoy fresh breeze <br /><span className="text-secondary italic">without the bugs.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Protect your home from flying insects, dengue, and malaria vector mosquitoes while preserving 100% natural ventilation and sunlight. Our modern insect screen systems are designed to fit seamlessly onto wooden, aluminum, and UPVC windows or doors.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  SafeNet & Co. utilizes high-density, dust-resistant fiberglass and polyester mesh configurations. Operating with premium tension cords and smooth-sliding tracks, our systems provide clean operation and durable shielding for years to come.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Zig-zag pleated space-saving mesh',
                    'Retractable vertical roller screens',
                    'Heavy-duty sliding tracks',
                    'High durability fiberglass & magnetic nets',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-secondary shrink-0" />
                      <span className="text-[14px] font-bold text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variety Grid Section */}
        <section className="py-20 bg-neutral-50 border-y border-border-custom">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Insect Screen Systems</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pleated Mosquito Net */}
              <div className="bg-white p-8 border border-border-custom rounded-[8px] shadow-custom-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-3">Retractable Pleated Nets</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                    Our best-selling solution for large French windows and balcony doors. This screen uses a zig-zag pleated polyester mesh that folds neatly to the side when opened, guided by high-strength tension cords.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Fits beautifully on wider openings</span>
                    </li>
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Dust-resistant & highly wind-proof</span>
                    </li>
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Available in White, Honey Gold, and Dark Brown frames</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Roller Mosquito Net */}
              <div className="bg-white p-8 border border-border-custom rounded-[8px] shadow-custom-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-3">Roller Insect Screens</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                    A sleek shutter-style spring loaded system for smaller and openable windows. The fiberglass screen rolls up inside a rounded top alloy cassette, staying clean and completely out of sight when not in use.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Spring-loaded vertical roll action</span>
                    </li>
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Retrieves 100% natural sunlight when open</span>
                    </li>
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Sturdy side aluminum guides hold mesh securely</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sliding and Velcro Netting */}
              <div className="bg-white p-8 border border-border-custom rounded-[8px] shadow-custom-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-3">Sliding Track Systems</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                    Double cassette doors and balcony windows utilize our premium bottom-rolling wheel sliding panels. Highly robust, sturdy, and extremely elegant.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Whisper-quiet bottom rolling wheel mechanism</span>
                    </li>
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Saint Gobain premium mesh options</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Netlon Velcro Netting */}
              <div className="bg-white p-8 border border-border-custom rounded-[8px] shadow-custom-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-3">Netlon Velcro Mesh</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                    The most budget-friendly, simple, and versatile insect barrier. Attaches directly to your window frame using heavy-duty velcro tapes, making it extremely easy to remove, wash, and reinstall.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Available in Fiberglass, Stainless Steel, & Magnetic meshes</span>
                    </li>
                    <li className="text-[13px] text-text-secondary flex items-center gap-2 font-medium">
                      <ArrowRight size={14} className="text-secondary shrink-0" />
                      <span>Lightweight & portable when shifting homes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pleated Specifications Table */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Product Specifications</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Pleated Screen System Data</h2>
            </div>

            <div className="max-w-3xl mx-auto bg-[#f8f9fa] border border-border-custom rounded-[5px] overflow-hidden shadow-custom-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1b3250] text-white text-[12px] uppercase tracking-wider font-bold">
                    <th className="px-8 py-4">Component</th>
                    <th className="px-8 py-4">System Standard Dimensions & Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom text-[14px]">
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-8 py-4 font-bold text-primary">Outer Profile Frame Width</td>
                    <td className="px-8 py-4 text-text-secondary">25 mm</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-8 py-4 font-bold text-primary">Sliding Panel Frame Width</td>
                    <td className="px-8 py-4 text-text-secondary">40 mm</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-8 py-4 font-bold text-primary">PVC Bottom Accessories</td>
                    <td className="px-8 py-4 text-text-secondary">40 mm high-grade nylon tracks</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-8 py-4 font-bold text-primary">Alloy Frame Color Choices</td>
                    <td className="px-8 py-4 text-text-secondary">Dark Brown, Honey Gold, White (PU Coated)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="px-8 py-4 font-bold text-primary">Mesh Types & Colors</td>
                    <td className="px-8 py-4 text-text-secondary">Fiber Foldable mesh in Gray / Black finishes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="container relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Create an insect-free home
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
              Schedule a professional site measurement and receive a personalized quote for your window or door sizes.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-white text-white hover:text-primary px-12 py-5 font-black uppercase tracking-[2px] text-[12px] transition-all duration-300 rounded-[5px] shadow-lg"
            >
              Request A Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MosquitoNettingPage;
