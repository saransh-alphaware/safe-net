import React from 'react';
import Link from 'next/link';
import {  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-main bg-[#1a1a1a] text-white pt-24 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
          
          {/* Brand & About */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="text-[28px] font-extrabold tracking-tight text-white">
              SAFENET
            </Link>
            <p className="text-[#999] text-[15px] leading-relaxed max-w-[260px]">
              Lorem ipsum amet adipiscing elit to eiusmod ad tempor.
            </p>
            <div className="flex items-center gap-5">
              <Link href="https://facebook.com" target="_blank" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="18" height="18" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg>
              </Link>
              <Link href="https://dribbble.com" target="_blank" className="hover:text-secondary transition-colors" aria-label="Dribbble">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="currentColor"><path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"></path></svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-[#999]">Categories</h4>
            <ul className="flex flex-col gap-4 text-[15px] text-white font-medium">
              <li><Link href="/cabinet" className="hover:text-secondary transition-colors">Cabinet</Link></li>
              <li><Link href="/chair" className="hover:text-secondary transition-colors">Chair</Link></li>
              <li><Link href="/lamp" className="hover:text-secondary transition-colors">Lamp</Link></li>
              <li><Link href="/light" className="hover:text-secondary transition-colors">Light</Link></li>
              <li><Link href="/sofa" className="hover:text-secondary transition-colors">Sofa</Link></li>
              <li><Link href="/stool" className="hover:text-secondary transition-colors">Stool</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-[#999]">Information</h4>
            <ul className="flex flex-col gap-4 text-[15px] text-white font-medium">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact us</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms and conditions</Link></li>
              <li><Link href="/shipping" className="hover:text-secondary transition-colors">Shipping and delivery</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy policy</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="flex flex-col gap-8">
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-[#999]">Need help?</h4>
            <div className="flex flex-col gap-4">
              <p className="text-[20px] font-bold text-white hover:text-secondary transition-colors">
                <a href="mailto:info@safenet.com">info@safenet.com</a>
              </p>
              <div className="h-[1px] w-full bg-white/10 my-2" />
              <p className="text-[20px] font-bold text-white hover:text-secondary transition-colors">
                <a href="tel:+12345678910">+1 234 567 8910</a>
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[#666] text-[13px]">
          <p>© 2024 <span className="text-white font-medium">Safenet.</span> All rights reserved.</p>
          <div className="flex items-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="font-bold tracking-tighter">VISA • MASTERCARD • AMEX • PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
