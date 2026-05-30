'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronRight, 
    LayoutGrid, 
    ShoppingBag, 
    CreditCard, 
    Package, 
    ShoppingCart, 
    HelpCircle,
    Plus,
    Minus
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const FAQ_DATA = {
    'General': [
        { 
            q: "How can I request a quote for installation?", 
            a: "You can request a free quote by visiting our Contact page, sending an email to safenetandco@gmail.com, or calling us directly at +91 8080703321. Our team will guide you on the measurement process and provide a detailed estimate." 
        },
        { 
            q: "What products does SafeNet & Co. offer?", 
            a: "We offer high-tensile stainless steel Invisible Grills, durable HDPE and Nylon Bird Netting, Pleated Mosquito Nets, Aluminium Security Meshes, and Motorised or Manual Zip Screens." 
        },
        { 
            q: "Do you provide installation services?", 
            a: "Yes, we provide end-to-end professional installation services. Our experienced technicians handle the complete setup of grills, nets, and screens at your residential or commercial property." 
        }
    ],
    'Invisible Grills': [
        { 
            q: "Are invisible grills safe for high-rise buildings?", 
            a: "Absolutely. Our invisible grills are made of high-tensile stainless steel (Grade SS 316) nylon-coated cables that can withstand loads of over 200+ kg, making them extremely safe for balconies and windows." 
        },
        { 
            q: "Do invisible grills rust?", 
            a: "No. The SS316 grade stainless steel cable has superior resistance to corrosion and is coated with a premium nanotechnology nylon sleeve, preventing rust even in coastal climates." 
        }
    ],
    'Bird Netting': [
        { 
            q: "What is the difference between HDPE and Nylon bird nets?", 
            a: "HDPE nets are heavy-duty, UV-stabilized, and come in square mesh sizes (19mm to 50mm). Nylon nets are copolymer monofilament nets, offering high strength while being virtually invisible (transparent or black)." 
        },
        { 
            q: "Will bird nets block light and airflow?", 
            a: "Not at all. Both HDPE and nylon monofilament nets are designed to let in maximum natural light and allow unrestricted ventilation while keeping birds out." 
        }
    ],
    'Mosquito Screens': [
        { 
            q: "What are pleated mosquito nets?", 
            a: "Pleated mosquito screens feature a folded zigzag polyester mesh with tensioned cords. They glide smoothly sideways in an aluminum frame and occupy minimal space when retracted." 
        }
    ],
    'Security & Zip Screens': [
        { 
            q: "What are the fabric options for Zip Screens?", 
            a: "Our Zip Screens are available in multiple fabric variants including Sunshade Blinds (for sun/UV protection), Rainproof PVC Screens, Mosquito Screen meshes, and complete Blackout fabrics." 
        },
        { 
            q: "How does the dual lock system on Security Mesh work?", 
            a: "Our Aluminium Security Mesh door and window frames feature a heavy-duty dual locking system (2 keys) with optional magnetic closure for maximum physical security against intruders." 
        }
    ],
    'Warranty & Service': [
        { 
            q: "What warranty do you offer on SafeNet products?", 
            a: "We offer a 3 to 5-year warranty on our SS316 invisible grills and bird nets. Our screens and zip screens come with a standard 1 to 2-year mechanical warranty." 
        },
        { 
            q: "How long does the installation take?", 
            a: "Once measurements are confirmed, installation is scheduled and completed within 24 to 48 hours for standard residential projects." 
        }
    ]
};

const CATEGORIES = [
    { id: 'General', icon: <LayoutGrid size={18} /> },
    { id: 'Invisible Grills', icon: <ShoppingBag size={18} /> },
    { id: 'Bird Netting', icon: <CreditCard size={18} /> },
    { id: 'Mosquito Screens', icon: <Package size={18} /> },
    { id: 'Security & Zip Screens', icon: <ShoppingCart size={18} /> },
    { id: 'Warranty & Service', icon: <HelpCircle size={18} /> }
];

const FaqAccordionItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => {
    return (
        <div className="border-b border-border-custom last:border-none">
            <button 
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-[16px] font-bold transition-colors ${isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
                    {question}
                </span>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={18} className="text-secondary" /> : <Plus size={18} className="text-gray-400 group-hover:text-secondary" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-text-secondary text-[15px] leading-relaxed max-w-4xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqPage = () => {
    const [activeCategory, setActiveCategory] = useState('General');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 bg-[#F8F9FA] border-b border-border-custom overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#232323_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <div className="container relative z-10 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight mb-6"
                        >
                            HOW CAN WE HELP YOU?
                        </motion.h1>
                        <nav className="flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-text-secondary">
                            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                            <ChevronRight size={14} className="text-border-custom" />
                            <span className="text-primary/40">Frequently asked questions</span>
                        </nav>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* Sidebar */}
                            <div className="w-full lg:w-4/12">
                                <div className="flex flex-col gap-1 border border-border-custom rounded-[5px] overflow-hidden sticky top-32">
                                    {CATEGORIES.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setActiveCategory(cat.id);
                                                setOpenIndex(0); // Reset accordion on category change
                                            }}
                                            className={`flex items-center gap-4 px-8 py-5 text-left text-[14px] font-bold uppercase tracking-wider transition-all duration-300 ${
                                                activeCategory === cat.id 
                                                ? 'bg-[#1B3250] text-white' 
                                                : 'bg-white text-primary hover:bg-gray-50'
                                            }`}
                                        >
                                            <span className={activeCategory === cat.id ? 'text-secondary' : 'text-gray-400'}>
                                                {cat.icon}
                                            </span>
                                            {cat.id}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="w-full lg:w-8/12">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="text-3xl font-black text-primary uppercase tracking-tighter mb-8 pb-4 border-b border-border-custom">
                                        {activeCategory}
                                    </h2>
                                    <div className="flex flex-col">
                                        {FAQ_DATA[activeCategory as keyof typeof FAQ_DATA].map((faq, idx) => (
                                            <FaqAccordionItem 
                                                key={idx}
                                                question={faq.q}
                                                answer={faq.a}
                                                isOpen={openIndex === idx}
                                                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FaqPage;
