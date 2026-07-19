'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Users, Send, ChevronRight, MessageSquare } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTitle from '@/components/ui/PageTitle';
import emailjs from '@emailjs/browser';

const ContactClient = () => {
  const [rotatedText, setRotatedText] = useState('hello!');
  const rotationWords = ['hello!', 'hallå!', 'salve!', 'hola!'];
  const [wordIndex, setWordIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotationWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        'service_1o3shko',
        'template_c5s728m',
        {
          title: "Enquiry",
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
          year: new Date().getFullYear(),
        },
        'EVkU1pCkbpEKh9009'
      );
      setStatus({
        type: 'success',
        message: "✅ Message sent successfully! We'll be in touch soon.",
      });
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: '❌ Failed to send. Please try again or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageTitle title="Contact Us" />

      {/* Info Cards Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {[
              { 
                icon: <MapPin size={18} />, 
                title: 'Office locations', 
                detail1: 'Andheri (E), Mumbai',
                detail2: 'Jafrabad, Delhi',
                link: '#'
              },
              { 
                icon: <Mail size={18} />, 
                title: 'Send a message', 
                detail1: 'safenetandco@gmail.com',
                link: 'mailto:safenetandco@gmail.com'
              },
              { 
                icon: <Phone size={18} />, 
                title: 'Call us directly', 
                detail1: '+91 8080703321',
                detail2: '+91 8851606948',
                link: 'tel:+918080703321'
              },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary">{card.icon}</span>
                  <h3 className="text-[17px] font-bold text-primary tracking-tight">{card.title}</h3>
                </div>
                <div className="h-[1px] w-full bg-primary" />
                <div className="flex flex-col mt-2">
                  <p className="text-[15px] text-[#828282] leading-relaxed">
                    {card.detail1}
                  </p>
                  <p className="text-[15px] text-[#828282] leading-relaxed">
                    {card.detail2}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Background "Get in touch" Text */}
        <div className="absolute bottom-0 left-12 lg:left-24 z-0 pointer-events-none select-none">
          <h2 className="text-[120px] lg:text-[240px] font-black text-[#f7f7f7] leading-none uppercase -translate-y-12">
            Get in touch
          </h2>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
            
            {/* Left side: Large Safety Image */}
            <div className="w-full lg:w-[65%] shrink-0 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] lg:aspect-[1.4/1] w-full shadow-custom-lg"
              >
                <Image 
                  src="/images/products/invisible_grill_hero.webp" 
                  alt="Contact Safety Solutions" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Right side: Dark Contact Card (Overlapping) */}
            <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#132c3f] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-custom-lg"
              >
                {/* Background Speech Bubble Icon */}
                <div className="absolute -top-4 -right-4 opacity-[0.03] pointer-events-none">
                  <MessageSquare size={180} className="text-white" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black text-white flex gap-3 items-center mb-12">
                    Say <AnimatePresence mode="wait">
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

                  <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name*" 
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-white placeholder-white/50 focus:border-white outline-none transition-colors font-medium text-[15px]" 
                        required
                      />
                      <Users size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white" />
                    </div>

                    <div className="relative group">
                      <input 
                        type="tel" 
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Your Mobile No.*" 
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-white placeholder-white/50 focus:border-white outline-none transition-colors font-medium text-[15px]" 
                        required
                      />
                      <Phone size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white" />
                    </div>
                    
                    <div className="relative group">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address*" 
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-white placeholder-white/50 focus:border-white outline-none transition-colors font-medium text-[15px]" 
                        required
                      />
                      <Mail size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white" />
                    </div>
                    
                    <div className="relative group">
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message" 
                        rows={3}
                        className="w-full bg-transparent border-b border-white/20 py-4 pr-10 text-white placeholder-white/50 focus:border-white outline-none transition-colors font-medium text-[15px] resize-none"
                      ></textarea>
                      <MessageSquare size={18} className="absolute right-0 top-6 text-white/30 group-focus-within:text-white" />
                    </div>

                    {status.message && (
                      <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.message}
                      </p>
                    )}

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full lg:w-fit bg-white hover:bg-secondary text-primary hover:text-white px-12 py-5 uppercase font-black tracking-[2px] text-[12px] transition-all duration-500 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send message'}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="flex flex-col md:flex-row w-full">
        {/* Mumbai Map */}
        <div className="h-[600px] flex-1 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
          {/* Grayscale Map Background */}
          <div className="absolute inset-0 grayscale contrast-125 opacity-40">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7891253457193!2d72.85966597587889!3d19.117967950785197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05c6e86f%3A0x334468f760e0a5d5!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717170000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
            ></iframe>
          </div>

          {/* Custom Marker Overlay */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Infowindow Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white shadow-custom-lg flex flex-col items-center text-center w-[300px] mb-[-1px]"
            >
              <div className="p-8">
                <h4 className="text-[15px] font-black text-primary uppercase tracking-wider mb-2">SafeNet & Co. (Mumbai)</h4>
                <p className="text-[13px] text-[#828282] leading-relaxed">
                  27, Jija Mata Marg, Pumphouse,<br />
                  Andheri (East), Mumbai - 400093
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=27,+Jija+Mata+Marg,+Pumphouse,+Andheri+(East),+Mumbai+-+400093" 
                target="_blank" 
                className="w-full bg-[#132c3f] text-white py-4 text-[10px] font-black uppercase tracking-[2px] hover:bg-secondary transition-all"
              >
                View larger map
              </a>
            </motion.div>
            {/* Pin Dot */}
            <div className="w-10 h-10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#132c3f] opacity-20 rounded-full animate-ping" />
              <div className="w-4 h-4 bg-[#132c3f] border-4 border-white rounded-full relative z-10 shadow-md" />
            </div>
          </div>
        </div>

        {/* Delhi Map */}
        <div className="h-[600px] flex-1 relative overflow-hidden flex items-center justify-center">
          {/* Grayscale Map Background */}
          <div className="absolute inset-0 grayscale contrast-125 opacity-40">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15419.838077245307!2d77.25881700654536!3d28.683051157555674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc6397d54ded%3A0x23df36013c45f71b!2sJafrabad%20Main%20Street%20No.%2021%2C%20Chauhan%20Banger%2C%20Delhi%2C%20110053!5e0!3m2!1sen!2sin!4v1784402629616!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
            ></iframe>
          </div>

          {/* Custom Marker Overlay */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Infowindow Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white shadow-custom-lg flex flex-col items-center text-center w-[300px] mb-[-1px]"
            >
              <div className="p-8">
                <h4 className="text-[15px] font-black text-primary uppercase tracking-wider mb-2">SafeNet & Co. (Delhi)</h4>
                <p className="text-[13px] text-[#828282] leading-relaxed">
                  KH. No.1032, Ground Floor, <br />
                  House No. 254, Plot No. Old 29,<br />
                  Jafrabad Main Street No. 21, <br />
                  Near Mithila Vihar Road,Delhi - 110053
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Jafrabad+Main+Street+No.+21,+Chauhan+Banger,+Delhi,+110053" 
                target="_blank" 
                className="w-full bg-[#132c3f] text-white py-4 text-[10px] font-black uppercase tracking-[2px] hover:bg-secondary transition-all"
              >
                View larger map
              </a>
            </motion.div>
            {/* Pin Dot */}
            <div className="w-10 h-10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#132c3f] opacity-20 rounded-full animate-ping" />
              <div className="w-4 h-4 bg-[#132c3f] border-4 border-white rounded-full relative z-10 shadow-md" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default ContactClient;
