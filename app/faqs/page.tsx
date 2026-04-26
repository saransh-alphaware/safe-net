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
            q: "Can i order over the phone?", 
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled to make type." 
        },
        { 
            q: "I am having difficulty placing an order?", 
            a: "If you're having trouble placing an order, please ensure all required fields are filled out correctly and your payment information is up to date. You can also try clearing your browser cache or using a different browser." 
        },
        { 
            q: "What payment methods does accept?", 
            a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay for your convenience." 
        },
        { 
            q: "Can i amend my order once placed?", 
            a: "Orders can typically be amended within 1 hour of placement. Please contact our support team immediately if you need to make changes." 
        },
        { 
            q: "How do i know if my order was successful?", 
            a: "Once your order is placed, you will receive a confirmation email with your order number and summary. You can also check your order status in your account dashboard." 
        },
        { 
            q: "What if my order is incorrect?", 
            a: "If you receive an incorrect item, please contact our support team within 48 hours of delivery. We will arrange a replacement or refund for you." 
        }
    ],
    'Shopping information': [
        { q: "How long does shipping take?", a: "Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days." },
        { q: "Do you offer international shipping?", a: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location." }
    ],
    'Payment information': [
        { q: "Is my payment information secure?", a: "Absolutely. We use industry-standard SSL encryption to protect your payment details and never store your full credit card information." }
    ],
    'Orders and returns': [
        { q: "What is your return policy?", a: "We offer a 30-day return policy for most items in their original condition. Returns are easy and can be initiated through your account." }
    ],
    'Ordering from Safenet': [
        { q: "Can I track my order?", a: "Yes, once your order is shipped, you will receive a tracking link via email to monitor its progress." }
    ],
    'Help and support': [
        { q: "How can I contact customer support?", a: "You can reach us through our contact form, email at support@safenet.com, or via live chat during business hours." }
    ]
};

const CATEGORIES = [
    { id: 'General', icon: <LayoutGrid size={18} /> },
    { id: 'Shopping information', icon: <ShoppingBag size={18} /> },
    { id: 'Payment information', icon: <CreditCard size={18} /> },
    { id: 'Orders and returns', icon: <Package size={18} /> },
    { id: 'Ordering from Safenet', icon: <ShoppingCart size={18} /> },
    { id: 'Help and support', icon: <HelpCircle size={18} /> }
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
