'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Users, Send, ChevronRight, MessageSquare } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  const [rotatedText, setRotatedText] = useState('hello!');
  const rotationWords = ['hello!', 'hallå!', 'salve!', 'hola!'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotationWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[#f8f8f8] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/products/lounge_collection.png" 
            alt="Contact Hero" 
            fill 
            className="object-cover opacity-10 grayscale"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-4">
            Contact us
          </h1>
          <nav className="flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-text-secondary">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight size={14} className="text-border-custom" />
            <span className="text-primary/40">Contact us</span>
          </nav>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <MapPin className="text-secondary" />, 
                title: 'Office location', 
                detail: '16122 Collins street, Melbourne, Australia',
                link: '#'
              },
              { 
                icon: <Mail className="text-secondary" />, 
                title: 'Send a message', 
                detail: 'info@yourdomain.com sales@yourdomain.com',
                link: 'mailto:info@yourdomain.com'
              },
              { 
                icon: <Phone className="text-secondary" />, 
                title: 'Call us directly', 
                detail: '1-800-222-000 1-800-222-002',
                link: 'tel:1800222000'
              },
              { 
                icon: <Users className="text-secondary" />, 
                title: 'Join our team', 
                detail: 'hire@yourdomain.com hr@yourdomain.com',
                link: 'mailto:hire@yourdomain.com'
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4 p-8 border border-border-custom hover:shadow-custom-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300 [&>svg]:w-5 [&>svg]:h-5">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-black text-primary uppercase tracking-wider mb-2">{card.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed whitespace-pre-line">
                    {card.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side: Image and Rotator */}
            <div className="w-full lg:w-1/2 relative">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/3] w-full"
                >
                    <Image 
                        src="/contact_hero.png" 
                        alt="Get in touch" 
                        fill 
                        className="object-cover rounded-[5px]"
                    />
                    <div className="absolute -right-8 -bottom-8 bg-[#1B3250] text-white p-8 md:p-12 hidden md:block rounded-[5px]">
                        <h2 className="text-4xl md:text-5xl font-black flex flex-col gap-2 uppercase tracking-tighter">
                            <span>Say</span>
                            <AnimatePresence mode="wait">
                                <motion.span 
                                    key={rotationWords[wordIndex]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-secondary"
                                >
                                    {rotationWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </h2>
                    </div>
                </motion.div>
            </div>

            {/* Right side: Contact Form */}
            <div className="w-full lg:w-1/2">
                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight mb-8">
                            Get in touch!
                        </h2>
                        
                        <form className="space-y-6" onSubmit={(e) => {
                          e.preventDefault();
                          const target = e.target as any;
                          const name = target[0].value;
                          const email = target[1].value;
                          const message = target[2].value;
                          
                          if(!name || !email) return;

                          // Simulate submission
                          const btn = target.querySelector('button');
                          const originalText = btn.innerHTML;
                          btn.innerHTML = 'Sending...';
                          btn.disabled = true;

                          setTimeout(() => {
                            btn.innerHTML = 'Sent Successfully!';
                            btn.style.backgroundColor = '#10b981'; // Green
                            target.reset();
                            
                            setTimeout(() => {
                              btn.innerHTML = originalText;
                              btn.style.backgroundColor = '';
                              btn.disabled = false;
                            }, 3000);
                          }, 1500);
                        }}>
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Your name*" 
                                    className="w-full border-b border-border-custom py-4 pl-10 focus:border-secondary outline-none transition-colors font-medium text-[15px]" 
                                    required
                                />
                                <Users size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary" />
                            </div>
                            
                            <div className="relative group">
                                <input 
                                    type="email" 
                                    placeholder="Your email address*" 
                                    className="w-full border-b border-border-custom py-4 pl-10 focus:border-secondary outline-none transition-colors font-medium text-[15px]" 
                                    required
                                />
                                <Mail size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary" />
                            </div>
                            
                            <div className="relative group">
                                <textarea 
                                    placeholder="Your message" 
                                    rows={4}
                                    className="w-full border-b border-border-custom py-4 pl-10 focus:border-secondary outline-none transition-colors font-medium text-[15px] resize-none"
                                ></textarea>
                                <MessageSquare size={18} className="absolute left-0 top-4 text-gray-400 group-focus-within:text-secondary" />
                            </div>

                            <button type="submit" className="bg-primary hover:bg-secondary text-white px-10 py-4 uppercase font-black tracking-widest text-[12px] flex items-center gap-3 transition-all duration-300 rounded-[2px] group disabled:opacity-70 disabled:cursor-not-allowed">
                                Send message
                                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537353153167!3d-37.81627977975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1619524964552!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
        ></iframe>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default ContactPage;
