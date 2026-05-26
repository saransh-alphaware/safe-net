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
              <Link href="/" className="inline-block" aria-label="decshop">
                <svg xmlns="http://www.w3.org/2000/svg" width="145" height="31" viewBox="0 0 334 72" fill="none" className="text-white">
                  <g clipPath="url(#clip0_5218_956)">
                    <path d="M104.704 55.5448C101.636 55.5448 98.8829 54.8172 96.4443 53.3618C94.0449 51.8672 92.1372 49.8612 90.7213 47.3438C89.3446 44.8265 88.6562 41.9945 88.6562 38.8478C88.6562 35.7012 89.3642 32.8692 90.7803 30.3518C92.1962 27.8345 94.1039 25.8482 96.5032 24.3928C98.9026 22.9375 101.617 22.2098 104.645 22.2098C107.202 22.2098 109.464 22.7212 111.43 23.7438C113.397 24.7665 114.951 26.1825 116.091 27.9918L115.088 29.5258V10.1738H121.696V54.8368H115.383V48.3468L116.15 49.5858C115.049 51.5132 113.476 52.9882 111.43 54.0108C109.385 55.0335 107.143 55.5448 104.704 55.5448ZM105.353 49.3498C107.202 49.3498 108.854 48.8975 110.309 47.9928C111.804 47.0882 112.964 45.8492 113.79 44.2758C114.656 42.6632 115.088 40.8538 115.088 38.8478C115.088 36.8418 114.656 35.0522 113.79 33.4788C112.964 31.9055 111.804 30.6665 110.309 29.7618C108.854 28.8572 107.202 28.4048 105.353 28.4048C103.505 28.4048 101.833 28.8572 100.338 29.7618C98.8436 30.6665 97.6833 31.9055 96.8573 33.4788C96.0312 35.0522 95.6182 36.8418 95.6182 38.8478C95.6182 40.8538 96.0312 42.6632 96.8573 44.2758C97.6833 45.8492 98.8239 47.0882 100.279 47.9928C101.774 48.8975 103.465 49.3498 105.353 49.3498Z" fill="currentColor"></path>
                    <path d="M143.876 55.5448C140.69 55.5448 137.858 54.8172 135.38 53.3618C132.941 51.8672 131.033 49.8612 129.657 47.3438C128.28 44.7872 127.592 41.9355 127.592 38.7888C127.592 35.5635 128.28 32.7118 129.657 30.2338C131.073 27.7558 132.961 25.8088 135.321 24.3928C137.681 22.9375 140.355 22.2098 143.345 22.2098C145.744 22.2098 147.888 22.6228 149.776 23.4488C151.664 24.2748 153.257 25.4155 154.555 26.8708C155.853 28.2868 156.836 29.9192 157.505 31.7678C158.213 33.6165 158.567 35.5832 158.567 37.6678C158.567 38.1792 158.547 38.7102 158.508 39.2608C158.468 39.8115 158.39 40.3228 158.272 40.7948H132.843V35.4848H154.496L151.31 37.9038C151.703 35.9765 151.565 34.2655 150.897 32.7708C150.267 31.2368 149.284 30.0372 147.947 29.1718C146.649 28.2672 145.115 27.8148 143.345 27.8148C141.575 27.8148 140.001 28.2672 138.625 29.1718C137.248 30.0372 136.186 31.2958 135.439 32.9478C134.691 34.5605 134.396 36.5272 134.554 38.8478C134.357 41.0112 134.652 42.8992 135.439 44.5118C136.265 46.1245 137.405 47.3832 138.861 48.2878C140.355 49.1925 142.047 49.6448 143.935 49.6448C145.862 49.6448 147.494 49.2122 148.832 48.3468C150.208 47.4815 151.29 46.3605 152.077 44.9838L157.505 47.6388C156.875 49.1335 155.892 50.4905 154.555 51.7098C153.257 52.8898 151.683 53.8338 149.835 54.5418C148.025 55.2105 146.039 55.5448 143.876 55.5448Z" fill="currentColor"></path>
                    <path d="M179.646 55.5448C176.46 55.5448 173.628 54.8172 171.15 53.3618C168.712 51.8672 166.765 49.8612 165.309 47.3438C163.893 44.8265 163.185 41.9748 163.185 38.7888C163.185 35.6422 163.893 32.8102 165.309 30.2928C166.725 27.7755 168.672 25.8088 171.15 24.3928C173.628 22.9375 176.46 22.2098 179.646 22.2098C181.81 22.2098 183.835 22.6032 185.723 23.3898C187.611 24.1372 189.244 25.1795 190.62 26.5168C192.036 27.8542 193.079 29.4078 193.747 31.1778L187.906 33.8918C187.238 32.2398 186.156 30.9222 184.661 29.9388C183.206 28.9162 181.534 28.4048 179.646 28.4048C177.837 28.4048 176.205 28.8572 174.749 29.7618C173.333 30.6272 172.212 31.8662 171.386 33.4788C170.56 35.0522 170.147 36.8418 170.147 38.8478C170.147 40.8538 170.56 42.6632 171.386 44.2758C172.212 45.8492 173.333 47.0882 174.749 47.9928C176.205 48.8975 177.837 49.3498 179.646 49.3498C181.574 49.3498 183.245 48.8582 184.661 47.8748C186.117 46.8522 187.198 45.4952 187.906 43.8038L193.747 46.5768C193.118 48.2682 192.095 49.8022 190.679 51.1788C189.303 52.5162 187.67 53.5782 185.782 54.3648C183.894 55.1515 181.849 55.5448 179.646 55.5448Z" fill="white"></path>
                    <path d="M211.297 55.5448C208.268 55.5448 205.613 54.7778 203.332 53.2438C201.05 51.7098 199.398 49.6252 198.376 46.9898L202.093 45.2198C202.997 47.1472 204.256 48.6812 205.869 49.8218C207.521 50.9625 209.33 51.5328 211.297 51.5328C213.185 51.5328 214.778 51.0805 216.076 50.1758C217.374 49.2318 218.023 48.0125 218.023 46.5178C218.023 45.4165 217.708 44.5512 217.079 43.9218C216.449 43.2532 215.722 42.7418 214.896 42.3878C214.07 42.0338 213.342 41.7782 212.713 41.6208L208.17 40.3228C205.259 39.4968 203.155 38.3365 201.857 36.8418C200.559 35.3472 199.91 33.6165 199.91 31.6498C199.91 29.8012 200.382 28.1885 201.326 26.8118C202.27 25.4352 203.548 24.3732 205.161 23.6258C206.773 22.8785 208.563 22.5048 210.53 22.5048C213.204 22.5048 215.623 23.2128 217.787 24.6288C219.989 26.0055 221.543 27.9328 222.448 30.4108L218.672 32.1808C217.885 30.4108 216.744 29.0342 215.25 28.0508C213.794 27.0282 212.162 26.5168 210.353 26.5168C208.583 26.5168 207.167 26.9692 206.105 27.8738C205.043 28.7785 204.512 29.9192 204.512 31.2958C204.512 32.3578 204.787 33.2035 205.338 33.8328C205.888 34.4622 206.518 34.9342 207.226 35.2488C207.973 35.5635 208.622 35.7995 209.173 35.9568L214.424 37.4908C216.98 38.2382 218.967 39.3985 220.383 40.9718C221.838 42.5452 222.566 44.3938 222.566 46.5178C222.566 48.2485 222.074 49.8022 221.091 51.1788C220.147 52.5555 218.829 53.6372 217.138 54.4238C215.446 55.1712 213.499 55.5448 211.297 55.5448Z" fill="white"></path>
                    <path d="M229.751 54.8368V10.1738H234.176V29.3488L233.173 29.1128C233.96 27.0675 235.238 25.4548 237.008 24.2748C238.817 23.0948 240.902 22.5048 243.262 22.5048C245.504 22.5048 247.51 23.0162 249.28 24.0388C251.089 25.0615 252.505 26.4775 253.528 28.2868C254.59 30.0568 255.121 32.0628 255.121 34.3048V54.8368H250.696V36.0158C250.696 34.0885 250.342 32.4562 249.634 31.1188C248.926 29.7815 247.943 28.7588 246.684 28.0508C245.465 27.3035 244.068 26.9298 242.495 26.9298C240.922 26.9298 239.506 27.3035 238.247 28.0508C236.988 28.7588 235.985 29.8012 235.238 31.1778C234.53 32.5152 234.176 34.1278 234.176 36.0158V54.8368H229.751Z" fill="white"></path>
                    <path d="M278.381 55.5448C275.392 55.5448 272.678 54.8368 270.239 53.4208C267.801 51.9655 265.854 49.9988 264.398 47.5208C262.982 45.0035 262.274 42.1518 262.274 38.9658C262.274 35.8192 262.982 33.0068 264.398 30.5288C265.814 28.0508 267.722 26.1038 270.121 24.6878C272.56 23.2325 275.313 22.5048 278.381 22.5048C281.449 22.5048 284.183 23.2128 286.582 24.6288C289.021 26.0448 290.929 27.9918 292.305 30.4698C293.721 32.9478 294.429 35.7798 294.429 38.9658C294.429 42.1912 293.702 45.0625 292.246 47.5798C290.791 50.0578 288.844 52.0048 286.405 53.4208C284.006 54.8368 281.331 55.5448 278.381 55.5448ZM278.381 51.1198C280.505 51.1198 282.413 50.5888 284.104 49.5268C285.835 48.4648 287.192 47.0095 288.175 45.1608C289.198 43.3122 289.709 41.2472 289.709 38.9658C289.709 36.6845 289.198 34.6392 288.175 32.8298C287.192 31.0205 285.835 29.5848 284.104 28.5228C282.413 27.4608 280.505 26.9298 278.381 26.9298C276.257 26.9298 274.33 27.4608 272.599 28.5228C270.908 29.5848 269.551 31.0205 268.528 32.8298C267.506 34.6392 266.994 36.6845 266.994 38.9658C266.994 41.2472 267.506 43.3122 268.528 45.1608C269.551 47.0095 270.908 48.4648 272.599 49.5268C274.33 50.5888 276.257 51.1198 278.381 51.1198Z" fill="white"></path>
                    <path d="M301.643 66.6368V23.2128H306.068V30.2928L305.36 29.0538C306.619 27.0478 308.291 25.4548 310.375 24.2748C312.499 23.0948 314.918 22.5048 317.632 22.5048C320.622 22.5048 323.277 23.2325 325.597 24.6878C327.957 26.1038 329.806 28.0508 331.143 30.5288C332.52 33.0068 333.208 35.8388 333.208 39.0248C333.208 42.1715 332.52 45.0035 331.143 47.5208C329.806 49.9988 327.957 51.9655 325.597 53.4208C323.277 54.8368 320.622 55.5448 317.632 55.5448C314.918 55.5448 312.46 54.9352 310.257 53.7158C308.094 52.4572 306.462 50.6872 305.36 48.4058L306.068 47.7568V66.6368H301.643ZM317.396 51.1198C319.52 51.1198 321.408 50.5888 323.06 49.5268C324.752 48.4648 326.069 47.0292 327.013 45.2198C327.997 43.3712 328.488 41.3062 328.488 39.0248C328.488 36.7042 327.997 34.6392 327.013 32.8298C326.069 31.0205 324.752 29.5848 323.06 28.5228C321.408 27.4608 319.52 26.9298 317.396 26.9298C315.272 26.9298 313.345 27.4608 311.614 28.5228C309.923 29.5848 308.566 31.0402 307.543 32.8888C306.56 34.6982 306.068 36.7435 306.068 39.0248C306.068 41.3062 306.56 43.3712 307.543 45.2198C308.566 47.0292 309.923 48.4648 311.614 49.5268C313.345 50.5888 315.272 51.1198 317.396 51.1198Z" fill="white"></path>
                    <rect x="0.5" y="36.002" width="16" height="35.998" fill="white"></rect>
                    <rect x="48.5078" y="18.0029" width="16" height="35.998" fill="white"></rect>
                    <rect x="24.5039" y="0.00195312" width="16" height="71.9766" fill="white"></rect>
                  </g>
                  <defs>
                    <clipPath id="clip0_5218_956">
                      <rect width="334" height="72" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <p className="text-[#828894] text-[15px] leading-relaxed max-w-[260px]">
                Lorem ipsum amet adipiscing elit to eiusmod ad tempor.
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
                <li><Link href="/product-category/home-decor" className="hover:text-white transition-colors">Bed room</Link></li>
                <li><Link href="/product-category/ceramic-pots" className="hover:text-white transition-colors">Living room</Link></li>
                <li><Link href="/product-category/designer-sofa" className="hover:text-white transition-colors">Lightning</Link></li>
                <li><Link href="/product-category/wooden-table" className="hover:text-white transition-colors">Fabrics sofa</Link></li>
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
              <p className="text-[13px] text-[#828894]">
                © 2026 Crafto is Proudly Powered by{' '}
                <Link href="https://crafto.themezaa.com/decor-store/" className="text-white hover:underline transition-all">
                  ThemeZaa
                </Link>
              </p>
            </div>

            {/* Right Column: Support & Customer Care */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              <div className="flex flex-col">
                <span className="text-[12px] text-[#828894] font-medium tracking-wide uppercase">Need support?</span>
                <a href="tel:+12345678910" className="text-[16px] font-bold text-white hover:text-[#828894] transition-colors mt-0.5">
                  +1 234 567 8910
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-[#828894] font-medium tracking-wide uppercase">Customer care</span>
                <a href="mailto:info@domain.com" className="text-[16px] font-bold text-white hover:text-[#828894] transition-colors mt-0.5">
                  info@domain.com
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
