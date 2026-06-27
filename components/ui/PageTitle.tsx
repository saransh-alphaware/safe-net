'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const PageTitle = ({ title , mainTitle = null }: any) => {
    return (
        <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center bg-[#F8F9FA] overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#232323_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="container relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-4"
                >
                    {mainTitle || title}
                </motion.h1>
                <nav className="flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-text-secondary">
                    <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-border-custom" />
                    <span className="text-primary/40">{title}</span>
                </nav>
            </div>
        </section>
    )
}

export default PageTitle