'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Check, Info, Award, AlertCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTitle from '@/components/ui/PageTitle';

const InvisibleGrillsClient = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Page Title & Breadcrumbs */}
        <PageTitle title="Invisible Grills" mainTitle="Invisible Safety Grills" />

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Column: Image Showcase */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] w-full shadow-custom-xl overflow-hidden rounded-[8px]">
                  <Image
                    src="/images/products/invisible_grill_hero.webp"
                    alt="Invisible Safety Grill for Balcony"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-[8px] shadow-custom-lg hidden sm:block max-w-[200px]"
                >
                  <p className="text-[28px] font-black leading-none mb-1">400+ kg</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/80">Tensile Load Capacity</p>
                </motion.div>
              </div>

              {/* Right Column: Key Details */}
              <div className="w-full lg:w-1/2">
                <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Modern Safety Solutions</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight mb-8">
                  Safety, Security & <br /><span className="text-secondary italic">Aesthetics Combined.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Invisible Safety Grills represent a modern revolution in building safety. Designed to replace bulky, industrial-looking traditional iron grills, they provide ultimate security for balconies and high-rise windows without blocking your stunning views.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Made of premium marine-grade <strong className="font-bold">SS316 stainless steel cables</strong> coated in a protective nylon casing, this safety shield is strong enough to support up to <strong className="font-bold">400 kg of impact load</strong>, protecting toddlers, elderly family members, and pets from accidental falls.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    'Unblocked Scenic Views',
                    'Zero Maintenance Required',
                    'Anti-Rust & Weatherproof',
                    'Safe for Children & Pets',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-secondary/15 rounded-full flex items-center justify-center text-secondary shrink-0">
                        <Check size={12} className="stroke-[3px]" />
                      </span>
                      <span className="text-[14px] font-bold text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-neutral-50 border-y border-border-custom">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Key Features</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Why Choose Invisible Grills?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Premium Materials',
                  desc: 'High-tensile heavy-duty marine grade stainless steel (SS316) cables wrapped in a protective, UV-resistant transparent nylon casing.',
                  icon: <Shield size={24} className="text-secondary" />
                },
                {
                  title: 'Aesthetic Integration',
                  desc: 'Crafted to seamlessly blend with your surrounding walls and outdoor ambiance. Nearly invisible from a distance, keeping your view completely clear.',
                  icon: <Award size={24} className="text-secondary" />
                },
                {
                  title: 'Compliance & Approval',
                  desc: 'Unlike traditional iron grills, invisible safety grills are permitted by almost all high-rise building premises and housing societies.',
                  icon: <Info size={24} className="text-secondary" />
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-8 border border-border-custom rounded-[5px] shadow-custom-sm flex flex-col gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wider">{card.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section: Aluminum vs Invisible Grill */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Side-By-Side Comparison</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Aluminum Grills vs. Invisible Grills</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Aluminum Grill Card */}
              <div className="bg-[#f8f9fa] p-10 rounded-[8px] border border-border-custom flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">Traditional Aluminum Grills</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed mb-6">
                    Typically mounted on side-to-side panels, traditional aluminum grills block significant airflow, obstruct outdoor views, and are easily corroded or damaged in harsh weather.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Blocks sunlight and outdoor scenery',
                      'Requires constant painting/cleaning to prevent discoloration',
                      'Bulky frame degrades structural aesthetics',
                      'Easily bent under concentrated stress',
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-[14px] text-text-secondary font-medium">
                        <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Invisible Safety Grill Card */}
              <div className="bg-[#1b3250] p-10 rounded-[8px] border border-secondary/20 text-white flex flex-col justify-between shadow-custom-xl">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">SafeNet & Co. Invisible Grills</h3>
                  <p className="text-[15px] text-white/80 leading-relaxed mb-6">
                    Forming a robust, permanent protective barrier with thin, high-tensile steel cables that are highly flexible, rust-proof, and allow 100% natural light and unblocked panoramic views.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Complete uncompromised view of the outdoors',
                      'Non-corrosive, erosion-resistant, paint-free design',
                      'Engineered SS316 marine-grade tensile core',
                      'Withstands impact force up to 400 kg',
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-[14px] text-white/90 font-medium">
                        <Check size={18} className="text-secondary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-neutral-50 border-t border-border-custom">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">Product Specifications</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Technical Data</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Specs Table */}
              <div className="bg-white border border-border-custom rounded-[5px] overflow-hidden shadow-custom-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white text-[12px] uppercase tracking-wider font-bold">
                      <th className="px-6 py-4">Specification</th>
                      <th className="px-6 py-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom text-[14px]">
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">Available Cable Gaps</td>
                      <td className="px-6 py-4 text-text-secondary">2 inches, 3 inches, 4 inches</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">Cable Material</td>
                      <td className="px-6 py-4 text-text-secondary">7x7 Core Wire SS316L Marine Grade Nylon Coated</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">Structural Track</td>
                      <td className="px-6 py-4 text-text-secondary">1.25-inch Aluminium Track (Duly White PU Coated)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">Fittings & Hardware</td>
                      <td className="px-6 py-4 text-text-secondary">SS304 Fittings, Nickel-plated SS316 Stiffeners</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">Finishes Available</td>
                      <td className="px-6 py-4 text-text-secondary">Powder coating, Anodizing & Wooden finish</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tensile Strength Table */}
              <div className="bg-white border border-border-custom rounded-[5px] overflow-hidden shadow-custom-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white text-[12px] uppercase tracking-wider font-bold">
                      <th className="px-6 py-4">Wire Rope Diameter</th>
                      <th className="px-6 py-4">Tensile Strength Capacity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom text-[14px]">
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">2.0 mm</td>
                      <td className="px-6 py-4 text-text-secondary">150 – 200 kg</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">2.5 mm</td>
                      <td className="px-6 py-4 text-text-secondary">250 – 300 kg</td>
                    </tr>
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">3.0 mm</td>
                      <td className="px-6 py-4 text-text-secondary">350 – 400 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="container relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Keep your home secure <br />without losing the view
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
              Get in touch with our experts for professional measurements and a customized, obligation-free quotation for your home.
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

export default InvisibleGrillsClient;
