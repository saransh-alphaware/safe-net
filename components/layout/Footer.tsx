import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbCoinRupee } from "react-icons/tb";


const Footer = () => {
  return (
    <footer className="footer-main text-white font-sans">
      {/* Top Footer Section */}
      <div className="bg-[#0e1622] pt-20 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10">
            {/* Column 1: decshop Logo & Social Handles */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/safe-net/images/products/logo_full.webp"
                  alt="SafeNet & Co."
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
                <div className="hidden sm:block text-[28px] text-white tracking-wide">
                  <b>Safe</b>Net
                </div>
              </Link>

              <p className="text-[#828894] text-[15px] leading-relaxed max-w-65">
                Safety. Strength. Solutions. Premium safety net solutions for
                homes & commercial spaces across India.
              </p>
              <div className="flex items-center gap-5 text-[#828894]">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://dribbble.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  aria-label="Dribbble"
                >
                  <FaDribbble />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>

            {/* Column 2: Categories */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">
                Categories
              </h4>
              <ul className="flex flex-col gap-3 text-[15px] text-[#828894]">
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Invisible Grill
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Bird Net
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Mosquito Net
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Security Mesh
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Zip Screen
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Information */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">
                Information
              </h4>
              <ul className="flex flex-col gap-3 text-[15px] text-[#828894]">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                {/* Active link Payment in white */}
                <li>
                  <Link
                    href="/faqs"
                    className=" hover:text-white transition-colors"
                  >
                    Payment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Account */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">
                Account
              </h4>
              <ul className="flex flex-col gap-3 text-[15px] text-[#828894]">
                <li>
                  <Link
                    href="/my-account"
                    className="hover:text-white transition-colors"
                  >
                    My account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/orders"
                    className="hover:text-white transition-colors"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/checkout"
                    className="hover:text-white transition-colors"
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="hover:text-white transition-colors"
                  >
                    My wishlists
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Newsletter & Payment Systems */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <h4 className="text-[16px] font-bold text-white tracking-wide">
                Newsletter
              </h4>
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
                    <HiOutlineMail size={20} />
                  </span>
                </div>

                {/* White Payment Icons Row */}
                <div className="flex items-center gap-4 mt-4">
                  <RiVisaLine size={40} className="text-white" />
                  <FaPaypal size={20} className="text-white" />
                  <TbCoinRupee size={30}  className="text-white" />
                  <BsQrCodeScan size={20} className="text-white" />
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
                This site is protected by reCAPTCHA and the Google{" "}
                <Link
                  href="/privacy"
                  className="text-white underline underline-offset-4 hover:text-[#828894] transition-colors"
                >
                  privacy policy
                </Link>{" "}
                and terms of service apply.
              </p>
            </div>

            {/* Right Column: Support & Customer Care */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              <div className="flex flex-col">
                <span className="text-[12px] text-[#828894] font-medium tracking-wide uppercase">
                  Need support?
                </span>
                <a
                  href="tel:+918080703321"
                  className="text-[16px] font-bold text-white hover:text-[#828894] transition-colors mt-0.5"
                >
                  +91 8080703321 / +91 8851606948
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-[#828894] font-medium tracking-wide uppercase">
                  Customer care
                </span>
                <a
                  href="mailto:safenetandco@gmail.com"
                  className="text-[16px] font-bold text-white hover:text-[#828894] transition-colors mt-0.5"
                >
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
