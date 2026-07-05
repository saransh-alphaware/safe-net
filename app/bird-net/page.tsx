'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Heart, Wind, Hammer, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTitle from '@/components/ui/PageTitle';

const BirdNetPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Page Title */}
        <PageTitle title="Bird Net" mainTitle="Bird Control & Net" />

        {/* Intro Section with Health Hazard Warning */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Column: Content */}
              <div className="w-full lg:w-7/12">
                <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Professional Pest Control</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight mb-8">
                  Get rid of pigeon menace <br /><span className="text-secondary italic">safely & humanely.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Pigeons and other pest birds have become a major health and property hazard in urban residential and industrial complexes. Their highly acidic droppings cause permanent damage to buildings, stones, and painted materials, while increasing overall painting and maintenance costs.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  SafeNet & Co. offers premium bird proofing solutions that block perching and nesting places permanently. Our systems utilize high-quality, weather-proof materials that keep birds away <strong className="font-bold">without causing them any harm</strong>.
                </p>

                {/* Health Warning Alert Box */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-[5px]">
                  <div className="flex gap-4">
                    <AlertTriangle className="text-red-500 shrink-0" size={24} />
                    <div>
                      <h4 className="text-[15px] font-bold text-red-800 uppercase tracking-wide mb-1">Critical Health Warning</h4>
                      <p className="text-[13px] text-red-700 leading-relaxed">
                        Pigeon droppings carry harmful fungi and bacteria associated with serious respiratory diseases like <strong className="font-bold">Histoplasmosis</strong>, <strong className="font-bold">Cryptococcosis</strong>, and <strong className="font-bold">Psittacosis</strong>. These spores easily become airborne when droppings dry, posing respiratory risks to children and elderly residents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="w-full lg:w-5/12 relative">
                <div className="relative aspect-[4/3] w-full shadow-custom-xl overflow-hidden rounded-[8px]">
                  <Image
                    src="/safe-net/images/products/bird_net_hero.webp"
                    alt="Anti Bird Net balcony protection"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Varieties Section */}
        <section className="py-20 bg-neutral-50 border-y border-border-custom">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Product Categories</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Our Bird Proofing Solutions</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Residential Bird Net */}
              <div className="bg-white p-8 border border-border-custom rounded-[5px] shadow-custom-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full mb-6 rounded-[5px] overflow-hidden">
                    <Image src="/safe-net/images/products/bird_net_nylon.webp" alt="Residential Bird Net" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-primary uppercase tracking-wider mb-3">Residential Bird Net</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                    Perfect for balconies, kitchen ducts, and windows. Made of UV-stabilized Co-Polymer Nylon mesh (1 to 2-inch options) that prevents pigeon nesting while keeping your view and fresh air fully unblocked.
                  </p>
                </div>
                <div className="border-t border-border-custom pt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary">
                    <ShieldCheck size={16} className="text-secondary" />
                    <span>Dust resistant & easily washable</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary">
                    <ShieldCheck size={16} className="text-secondary" />
                    <span>Translucent & nearly invisible</span>
                  </div>
                </div>
              </div>

              {/* Industrial Bird Net */}
              <div className="bg-white p-8 border border-border-custom rounded-[5px] shadow-custom-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full mb-6 rounded-[5px] overflow-hidden">
                    <Image src="/safe-net/images/products/bird_net_hdpe.webp" alt="Industrial Bird Net" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-primary uppercase tracking-wider mb-3">Industrial Bird Net</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                    Designed for warehouses, factories, and commercial structures to prevent product contamination and equipment damage. Heavy-duty nets with high tensile strength yarns.
                  </p>
                </div>
                <div className="border-t border-border-custom pt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary">
                    <ShieldCheck size={16} className="text-secondary" />
                    <span>Breaking strength of 23.08 kg per yarn</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary">
                    <ShieldCheck size={16} className="text-secondary" />
                    <span>High melting point of 260°C</span>
                  </div>
                </div>
              </div>

              {/* Bird Spikes */}
              <div className="bg-white p-8 border border-border-custom rounded-[5px] shadow-custom-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-48 w-full mb-6 rounded-[5px] overflow-hidden">
                    <Image src="/safe-net/images/products/bird_spikes.webp" alt="Bird Spikes Deterrent" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-primary uppercase tracking-wider mb-3">Bird Spikes</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
                    HUMANE, low-profile spikes made of pure stainless steel or heavy-duty polycarbonate. Installed on ledges, AC units, and parapet walls to prevent birds from landing.
                  </p>
                </div>
                <div className="border-t border-border-custom pt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary">
                    <ShieldCheck size={16} className="text-secondary" />
                    <span>Unbreakable & maintenance-free</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-primary">
                    <ShieldCheck size={16} className="text-secondary" />
                    <span>Glue/Screw installation ensures longevity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Key Features</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Advantages of Our Net</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Permanent Solution',
                  desc: 'A permanent barrier that birds simply cannot penetrate. Installs once for lifetime peace of mind.',
                  icon: <ShieldCheck size={28} />
                },
                {
                  title: 'Translucent & Airy',
                  desc: 'Nets are thin and light-colored. They let in 100% natural light and allow air to circulate freely.',
                  icon: <Wind size={28}  />
                },
                {
                  title: 'Humane Treatment',
                  desc: 'Birds are prevented from nesting but never trapped, poisoned, or physically harmed.',
                  icon: <Heart size={28}  />
                },
                {
                  title: 'Custom Fit',
                  desc: 'Tailor-made for your specific structure, ensuring a clean, flush fit without gaps.',
                  icon: <Hammer size={28}  />
                }
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-[#1b3250] text-white rounded-full flex items-center justify-center shadow-md">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wider mt-2">{benefit.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-[#1b3250] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="container relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Protect your premises today
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
              Contact us for professional bird proofing consultation, site analysis, and customized quotation options.
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

export default BirdNetPage;
