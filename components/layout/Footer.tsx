import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-main text-white font-sans">
      {/* Top Footer Section */}
      <div className="bg-[#0e1622] pt-20 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10">

            {/* Column 1: decshop Logo & Social Handles */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <Link href="/" className="inline-block" aria-label="SafeNet &amp; Co.">
                <img src="/images/products/logo_full.png" alt="SafeNet &amp; Co." style={{ height: '56px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </Link>
              <p className="text-[#828894] text-[15px] leading-relaxed max-w-[260px]">
                Safety. Strength. Solutions. Premium safety net solutions for homes & commercial spaces across India.
              </p>
              <div className="flex items-center gap-5 text-[#828894]">
                <Link href="https://facebook.com" target="_blank" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg>
                </Link>
                <Link href="https://dribbble.com" target="_blank" className="hover:text-white transition-colors" aria-label="Dribbble">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"></path></svg>
                </Link>
                <Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                </Link>
                <Link href="https://instagram.com" target="_blank" className="hover:text-white transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </Link>
              </div>
            </div>

            {/* Column 2: Categories */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">Categories</h4>
              <ul className="flex flex-col gap-3 text-[15px] text-[#828894]">
                <li><Link href="/shop" className="hover:text-white transition-colors">Invisible Grill</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Bird Net</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Mosquito Net</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Security Mesh</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Zip Screen</Link></li>
              </ul>
            </div>

            {/* Column 3: Information */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">Information</h4>
              <ul className="flex flex-col gap-3 text-[15px] text-[#828894]">
                <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
                <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
                {/* Active link Payment in white */}
                <li><Link href="/faqs" className="text-white hover:text-white font-medium transition-colors">Payment</Link></li>
              </ul>
            </div>

            {/* Column 4: Account */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">Account</h4>
              <ul className="flex flex-col gap-3 text-[15px] text-[#828894]">
                <li><Link href="/my-account" className="hover:text-white transition-colors">My account</Link></li>
                <li><Link href="/orders" className="hover:text-white transition-colors">Orders</Link></li>
                <li><Link href="/checkout" className="hover:text-white transition-colors">Checkout</Link></li>
                <li><Link href="/wishlist" className="hover:text-white transition-colors">My wishlists</Link></li>
              </ul>
            </div>

            {/* Column 5: Newsletter & Payment Systems */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">Newsletter</h4>
              <div className="flex flex-col gap-3">
                <p className="text-[15px] text-[#828894] leading-relaxed">
                  Get everything you need succeed!
                </p>

                {/* Email subscription box with mail icon */}
                <div className="relative mt-2 w-full max-w-[280px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#080d15] text-[15px] text-white placeholder-[#828894] py-3.5 pl-4 pr-12 rounded border border-[#ffffff10] focus:outline-none focus:border-[#ffffff30] transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#828894] hover:text-white transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                </div>

                {/* White Payment Icons Row */}
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-payment-icon-01.png"
                    alt="Visa"
                    className="h-[18px] w-auto brightness-100 grayscale-0"
                  />
                  <img
                    src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-payment-icon-02.png"
                    alt="PayPal"
                    className="h-[18px] w-auto brightness-100 grayscale-0"
                  />
                  <img
                    src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-payment-icon-03.png"
                    alt="Klarna"
                    className="h-[18px] w-auto brightness-100 grayscale-0"
                  />
                  <img
                    src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-payment-icon-04.png"
                    alt="eWay"
                    className="h-[18px] w-auto brightness-100 grayscale-0"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright & Dual Contacts Strip */}
      <div className="bg-[#090f17] py-10 border-t border-white/5">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

            {/* Left Column: Protection Disclaimer & Copyright */}
            <div className="flex flex-col gap-2">
              <p className="text-[13px] text-[#828894] leading-relaxed max-w-[520px]">
                This site is protected by reCAPTCHA and the Google{' '}
                <Link href="/privacy" className="text-white underline underline-offset-4 hover:text-[#828894] transition-colors">
                  privacy policy
                </Link>{' '}
                and terms of service apply.
              </p>
            </div>

            {/* Right Column: Support & Customer Care */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              <div className="flex flex-col">
                <span className="text-[12px] text-[#828894] font-medium tracking-wide uppercase">Need support?</span>
                <a href="tel:+918080703321" className="text-[16px] font-bold text-white hover:text-[#828894] transition-colors mt-0.5">
                  +91 8080703321 / +91 8851606948
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-[#828894] font-medium tracking-wide uppercase">Customer care</span>
                <a href="mailto:safenetandco@gmail.com" className="text-[16px] font-bold text-white hover:text-[#828894] transition-colors mt-0.5">
                  safenetandco@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
