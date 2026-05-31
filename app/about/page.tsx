'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, MessageCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center bg-[#F8F9FA] overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#232323_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <div className="container relative z-10 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-4"
                        >
                            About us
                        </motion.h1>
                        <nav className="flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-text-secondary">
                            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                            <ChevronRight size={14} className="text-border-custom" />
                            <span className="text-primary/40">About us</span>
                        </nav>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-5/12 relative">
                                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto lg:mx-0">
                                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-border-custom animate-[spin_20s_linear_infinite]"></div>
                                    <div className="absolute inset-4 rounded-full bg-white shadow-custom-lg flex flex-col items-center justify-center text-center p-6">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                                            <Star className="text-secondary fill-secondary" size={20} />
                                        </div>
                                         <span className="text-[10px] font-bold uppercase tracking-[3px] text-text-secondary mb-1">SafeNet & Co.</span>
                                         <h4 className="text-xl font-black text-primary leading-tight">INDIA'S BEST <br/>SAFETY SOLUTIONS</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-7/12">
                                <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-6 block">Our Story</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight mb-8">
                                    Commitment to <br/><span className="text-secondary italic">safety & quality.</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <p className="text-text-secondary leading-relaxed">
                                        SafeNet & Co. is a leading provider of high-quality safety net systems and modern invisible grills in India. We specialize in balcony safety, bird proofing, window safety meshes, and motorized zip screens.
                                    </p>
                                    <p className="text-text-secondary leading-relaxed">
                                        Since our founding, we have focused on engineering robust, rust-free safety installations that blend seamlessly with modern architecture, ensuring unblocked views and maximum peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overlapping Image Grid */}
                <section className="py-12 pb-32">
                    <div className="container relative">
                        <div className="flex justify-center items-center relative min-h-[400px] md:min-h-[600px]">
                            {/* Left Image */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="absolute left-0 bottom-0 w-1/3 aspect-[3/4] z-10 hidden md:block"
                            >
                                <Image src="/safe-net/about_plant.webp" alt="Decor" fill className="object-cover rounded-[5px] shadow-custom-lg" />
                            </motion.div>
                            {/* Main Center Image */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-full md:w-1/2 aspect-[4/3] z-0 relative"
                            >
                                <Image src="/safe-net/about_sofa.webp" alt="Crafto Decor" fill className="object-cover rounded-[5px] shadow-custom-xl" />
                            </motion.div>
                            {/* Right Image */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="absolute right-0 top-0 w-1/3 aspect-[3/4] z-10 hidden md:block"
                            >
                                <Image src="/safe-net/about_studio.webp" alt="Design" fill className="object-cover rounded-[5px] shadow-custom-lg" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-24 bg-[#F8F9FA]">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { year: '2015', title: 'SafeNet Founded', desc: 'Started high-quality safety net installations in Mumbai.' },
                                { year: '2018', title: 'Delhi Office Opened', desc: 'Expanded safety solutions to New Delhi & NCR region.' },
                                { year: '2021', title: 'Invisible Grill Launch', desc: 'Introduced high-tensile SS316 invisible grills.' },
                                { year: '2024', title: 'Motorised Zip Screens', desc: 'Launched premium weather-proof zip screens.' }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col gap-6"
                                >
                                    <span className="text-6xl font-black text-transparent stroke-primary stroke-[1px] opacity-10 tracking-tighter" style={{ WebkitTextStroke: '1px var(--color-primary)' }}>
                                        0{idx + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-[14px] font-black text-primary uppercase tracking-widest mb-2">{item.title}</h3>
                                        <p className="text-[14px] text-text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="h-[2px] w-12 bg-secondary"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Banner */}
                <section className="py-32">
                    <div className="container text-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-primary text-white p-12 md:p-20 rounded-[10px] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-10">
                                <MessageCircle size={120} />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 relative z-10">
                                Join the 10000+ people <br/><span className="text-secondary">trusting us.</span>
                            </h2>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-secondary fill-secondary" />)}
                                    <span className="ml-2 font-bold">4.9/5</span>
                                </div>
                                <div className="h-10 w-[1px] bg-white/20 hidden md:block"></div>
                                <p className="text-white/60 font-medium">8,549 reviews and counting!</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Team Leaders */}
                <section className="py-24 border-t border-border-custom">
                    <div className="container text-center mb-16">
                        <span className="text-[12px] font-bold uppercase tracking-[4px] text-secondary mb-4 block">World class designers</span>
                        <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter">Company leaders</h2>
                    </div>
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Jeremy dupont', role: 'Director', img: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2023/02/team-01.jpg' },
                                { name: 'Jessica dover', role: 'Designer', img: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2023/02/team-02.jpg' },
                                { name: 'Matthew taylor', role: 'Manager', img: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2023/02/team-03.jpg' },
                                { name: 'John hammond', role: 'Designer', img: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2023/02/team-04.jpg' }
                            ].map((person, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[5px]">
                                        <Image src={person.img} alt={person.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                            {/* <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"><Twitter size={16} /></Link> */}
                                            {/* <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"><Linkedin size={16} /></Link> */}
                                            {/* <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"><Facebook size={16} /></Link> */}
                                        </div>
                                    </div>
                                    <div className="py-6">
                                        <h4 className="text-[16px] font-black text-primary uppercase tracking-tight group-hover:text-secondary transition-colors">{person.name}</h4>
                                        <span className="text-[12px] font-medium text-text-secondary uppercase tracking-widest">{person.role}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Client Logos */}
                <section className="py-24 border-t border-border-custom grayscale opacity-50 overflow-hidden">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-between gap-12">
                            {['TATA STEEL', 'SAIL', 'AIS GLASS', 'JINDAL STEEL', 'SAMSUNG'].map((brand, i) => (
                                <span key={i} className="text-2xl font-black text-primary tracking-[5px]">{brand}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
