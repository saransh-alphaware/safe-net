'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import AuthorBox from '@/components/blog/AuthorBox'
import BlogCard from '@/components/ui/BlogCard'
import Footer from '@/components/layout/Footer'

const AUTHOR = {
  name: "SafeNet & Co. Team",
  avatar: "/images/catalog/logo.png",
  bio: "We are India's leading safety net installation specialists. Our experts share knowledge on invisible grills, bird nets, mosquito screens, and security mesh solutions to help you make the safest choice for your home."
}

// Full blog content keyed by slug
const BLOG_DATA: Record<string, {
  title: string;
  category: string;
  date: string;
  image: string;
  author: typeof AUTHOR;
  tags: string[];
  likes: number;
  intro: string;
  subheading: string;
  body: string;
  quote: string;
  inlineImageSrc: string;
  inlineImageAlt: string;
  inlineImageCaption: string;
  ctaHeading: string;
  ctaBody: string;
  ctaBtn: string;
  ctaBtnLink: string;
  sideImageSrc: string;
  sideImageAlt: string;
}> = {
  'invisible-grills-high-rise-balconies': {
    title: "Why invisible grills are the safest choice for high-rise balconies",
    category: "Safety",
    date: "15 March 2025",
    image: "/images/products/invisible_grill_hero.png",
    author: AUTHOR,
    tags: ["Invisible Grill", "Balcony Safety", "SS316", "High-Rise"],
    likes: 38,
    intro: "High-rise living offers breathtaking views — but balcony safety is a genuine concern for families, especially those with young children or pets. Traditional iron grills solve the problem but at the cost of aesthetics, rusting over time and completely obscuring your panoramic view. SafeNet & Co.'s invisible grill systems offer a revolutionary alternative.",
    subheading: "What makes SS316 grade the gold standard?",
    body: "Our invisible grills use Grade SS316 stainless steel wire rope, coated with nanotechnology nylon for superior corrosion resistance. Each cable can independently withstand loads in excess of 200kg. The aluminium T-6063 alloy track system anchors the cables to walls and slabs with stainless steel bolts, creating a robust barrier that is virtually invisible from a distance while meeting all safety standards.",
    quote: "\"Safety should never compromise your view — our grills offer both.\" — SafeNet & Co.",
    inlineImageSrc: "/images/products/invisible_grill_wire_rope.png",
    inlineImageAlt: "SS316 wire rope close-up",
    inlineImageCaption: "Grade SS316 nylon-coated wire rope — the core of every invisible grill installation.",
    ctaHeading: "SS316 vs SS304 — does grade really matter for coastal homes?",
    ctaBody: "Yes. Homes within 5km of the coast experience accelerated salt-air corrosion. SS316 contains molybdenum, making it far more resistant than SS304. For Mumbai's coastal apartments, SS316 is the only responsible choice.",
    ctaBtn: "Get a Free Quote",
    ctaBtnLink: "/contact",
    sideImageSrc: "/images/products/invisible_grill_thumb.png",
    sideImageAlt: "Invisible grill installed on balcony"
  },
  'hdpe-vs-nylon-bird-nets': {
    title: "HDPE vs Nylon bird nets: which one is right for your home?",
    category: "Guide",
    date: "20 April 2025",
    image: "/images/products/bird_net_hero.png",
    author: AUTHOR,
    tags: ["Bird Net", "HDPE", "Nylon", "Guide"],
    likes: 27,
    intro: "Bird intrusion in balconies, open shafts, and rooftops is a persistent problem in Indian urban homes. SafeNet & Co. offers two premium bird netting systems — HDPE square mesh and nylon diamond/square mesh. Each has distinct advantages depending on your specific use case.",
    subheading: "HDPE nets: heavy-duty square mesh for large gaps",
    body: "HDPE (High-Density Polyethylene) nets come in square mesh sizes from 19mm to 50mm, with twine thickness up to 1mm. UV-stabilised and available in black or white, they are ideal for large balcony openings, industrial spaces, and open shafts where maximum durability is required. Nylon copolymer monofilament nets, by contrast, are virtually invisible (available in transparent or black) and suit smaller window openings, premium apartments, and spaces where aesthetics matter most.",
    quote: "\"The right net depends on your gap size, aesthetics, and budget — we help you find the perfect match.\"",
    inlineImageSrc: "/images/products/bird_net_hdpe.png",
    inlineImageAlt: "HDPE bird net installed on balcony",
    inlineImageCaption: "HDPE square mesh net — durable UV-stabilised protection for larger openings.",
    ctaHeading: "Which bird net is recommended for Mumbai high-rises?",
    ctaBody: "For open-shaft and large balcony areas, we recommend HDPE 25mm black square mesh. For premium apartments where visibility is important, transparent nylon monofilament in 25mm diamond mesh is the preferred choice.",
    ctaBtn: "View Bird Net Products",
    ctaBtnLink: "/product-category/bird-net",
    sideImageSrc: "/images/products/bird_net_nylon.png",
    sideImageAlt: "Nylon bird net close-up"
  },
  'pleated-mosquito-nets-airflow': {
    title: "How pleated mosquito nets keep insects out without blocking airflow",
    category: "Tips",
    date: "05 May 2025",
    image: "/images/products/mosquito_net_hero.png",
    author: AUTHOR,
    tags: ["Mosquito Net", "Pleated", "Ventilation", "Tips"],
    likes: 19,
    intro: "Mumbai's monsoon season brings welcome relief from the heat — but also a surge in mosquito activity. Traditional mosquito nets are effective but cumbersome, restricting light and airflow. SafeNet & Co.'s pleated mosquito net system offers a modern solution that is both effective and invisible when not in use.",
    subheading: "How pleated screens work",
    body: "Pleated mosquito nets feature a folded zigzag polyester mesh mounted in an extruded aluminium frame. Tensioned cords allow the screen to retract smoothly to one side (like a concertina) when you want full access. When deployed, the mesh forms a tight, insect-proof barrier. The mesh weave allows unrestricted airflow and natural light, unlike solid alternatives. Installation requires only a minimal frame — there is no bulky box housing to deal with.",
    quote: "\"Fresh air, no mosquitoes — our pleated screens give you both every single day.\"",
    inlineImageSrc: "/images/products/mosquito_net_thumb.png",
    inlineImageAlt: "Pleated mosquito net installed on window",
    inlineImageCaption: "Pleated polyester mesh — minimal profile, maximum insect protection.",
    ctaHeading: "Can pleated nets be retrofitted to existing windows?",
    ctaBody: "Yes. Our pleated mosquito net systems are designed for retrofit installation on standard casement, sliding, and fixed windows. No drilling into the glass is required — the aluminium frame attaches to the window surround.",
    ctaBtn: "View Mosquito Net Products",
    ctaBtnLink: "/product-category/mosquito-net",
    sideImageSrc: "/images/products/mosquito_net_hero.png",
    sideImageAlt: "Mosquito net installed on apartment window"
  },
  'motorised-zip-screens-patios': {
    title: "Motorised zip screens: the smart upgrade for modern patios",
    category: "Innovation",
    date: "18 May 2025",
    image: "/images/products/zip_screen_hero.png",
    author: AUTHOR,
    tags: ["Zip Screen", "Motorised", "Patio", "Smart Home"],
    likes: 44,
    intro: "Open patios and verandahs are among the most valued spaces in modern Indian homes. But without the right protection, they become unusable during summer afternoons or monsoon downpours. SafeNet & Co.'s motorised zip screen system transforms any exposed outdoor space into a year-round living area.",
    subheading: "What sets motorised zip screens apart?",
    body: "Unlike standard roller blinds, zip screens feature a zipped side channel system that prevents the fabric from billowing in wind — critical for outdoor use. The motorised drive allows silent, remote-controlled operation, and the screen can be programmed to deploy automatically at sunset or in high-UV conditions. Fabric choices include sunshade blinds for UV filtration, PVC rainproof screens for full weather protection, polyester mosquito mesh, and blackout fabrics for complete privacy.",
    quote: "\"A motorised zip screen doesn't just shade your patio — it extends your living space by months every year.\"",
    inlineImageSrc: "/images/products/zip_screen_thumb.png",
    inlineImageAlt: "Motorised zip screen on a patio",
    inlineImageCaption: "Motorised zip screens with remote control — silent, precise, weather-sealed.",
    ctaHeading: "Can zip screens be added to an apartment balcony?",
    ctaBody: "Yes. Zip screens are available in widths up to 6 metres and can be installed on balconies, terraces, and large windows. We offer both motorised and hand-crank manual variants depending on your preference and budget.",
    ctaBtn: "View Zip Screen Products",
    ctaBtnLink: "/product-category/zip-screen",
    sideImageSrc: "/images/products/zip_screen_hero.png",
    sideImageAlt: "Zip screen installed on large patio"
  },
  'aluminium-security-mesh-windows': {
    title: "Top 5 reasons to install aluminium security mesh on your windows",
    category: "Security",
    date: "02 April 2025",
    image: "/images/products/aluminium_mesh_hero.png",
    author: AUTHOR,
    tags: ["Security Mesh", "Aluminium", "Window Security", "Home Safety"],
    likes: 31,
    intro: "Standard fly screens keep insects out, but they offer no security. SafeNet & Co.'s aluminium security mesh is engineered to do both — providing 100% insect protection while acting as a formidable physical barrier against intrusion.",
    subheading: "Five reasons our security mesh stands out",
    body: "1. Dual lock system: Each frame includes a heavy-duty dual locking mechanism (2 keys) with optional magnetic closure. 2. High-grade aluminium construction: The extruded aluminium frame and mesh resist corrosion, warping, and forced entry. 3. Full insect protection: The fine mesh weave blocks mosquitoes, flies, and other insects completely. 4. Ventilation preserved: Unlike solid security grilles, the mesh allows full natural airflow. 5. Clean aesthetics: The slim profile and powder-coated finish blend seamlessly with any window style.",
    quote: "\"Security and ventilation are not opposites — our mesh delivers both simultaneously.\"",
    inlineImageSrc: "/images/products/aluminium_mesh_thumb.png",
    inlineImageAlt: "Aluminium security mesh door close-up",
    inlineImageCaption: "Dual-lock aluminium security mesh — premium protection with a clean, modern look.",
    ctaHeading: "Is security mesh suitable for rental apartments?",
    ctaBody: "Yes. Our frames are designed for non-destructive installation where possible, and can be removed when you vacate. They are ideal for renters who want added security without permanent structural modifications.",
    ctaBtn: "View Security Mesh Products",
    ctaBtnLink: "/product-category/security-mesh",
    sideImageSrc: "/images/products/aluminium_mesh_hero.png",
    sideImageAlt: "Security mesh window installation"
  }
}

// Default fallback post
const DEFAULT_POST = {
  title: "Expert advice on choosing the right safety solution for your home",
  category: "Guide",
  date: "01 January 2025",
  image: "/images/products/invisible_grill_hero.png",
  author: AUTHOR,
  tags: ["Safety", "Guide", "Installation"],
  likes: 12,
  intro: "Choosing the right safety product for your home can be overwhelming. SafeNet & Co. offers a comprehensive range — from invisible grills and bird nets to security mesh and zip screens. This guide helps you identify the right solution for your specific need.",
  subheading: "Start with the problem, not the product",
  body: "The most common mistake homeowners make is buying a product before defining the problem. Start by asking: Is this a fall-safety issue (balcony)? A pest problem (birds, mosquitoes)? An intrusion concern (windows, doors)? Or a weather-control need (patio)? Each answer points to a different product category.",
  quote: "\"The right safety product is the one that solves your specific problem reliably and looks good doing it.\"",
  inlineImageSrc: "/images/products/invisible_grill_thumb.png",
  inlineImageAlt: "Safety installation overview",
  inlineImageCaption: "SafeNet & Co. — India's comprehensive safety solutions provider.",
  ctaHeading: "Not sure which product you need?",
  ctaBody: "Our team will assess your space, understand your requirements, and recommend the most suitable solution. Get a free consultation today.",
  ctaBtn: "Contact Us",
  ctaBtnLink: "/contact",
  sideImageSrc: "/images/products/bird_net_hero.png",
  sideImageAlt: "SafeNet product range"
}

// Related posts
const RELATED_POSTS = [
  {
    id: 1,
    title: "Why invisible grills are the safest choice for high-rise balconies",
    category: "Safety",
    date: "15 March 2025",
    image: "/images/products/invisible_grill_hero.png",
    href: "/blog/invisible-grills-high-rise-balconies"
  },
  {
    id: 2,
    title: "HDPE vs Nylon bird nets: which one is right for your home?",
    category: "Guide",
    date: "20 April 2025",
    image: "/images/products/bird_net_hero.png",
    href: "/blog/hdpe-vs-nylon-bird-nets"
  },
  {
    id: 4,
    title: "Motorised zip screens: the smart upgrade for modern patios",
    category: "Innovation",
    date: "18 May 2025",
    image: "/images/products/zip_screen_hero.png",
    href: "/blog/motorised-zip-screens-patios"
  },
]

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = BLOG_DATA[slug] || DEFAULT_POST

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Image Area */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-white flex justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            {/* Hero Image Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full"
            >
              <div className="relative w-full aspect-16/10 md:aspect-16/8 rounded-sm overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Overlapping Avatar */}
              <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 z-10">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-[5px] border-white shadow-lg overflow-hidden flex-shrink-0 bg-[#1a2340] flex items-center justify-center">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest text-center leading-tight px-1">SafeNet<br/>&amp; Co.</span>
                </div>
              </div>
            </motion.div>

            {/* Writer Info */}
            <div className="mt-16 text-center">
              <div className="flex items-center justify-center gap-1 text-[13px] text-gray-500 font-medium">
                <span>Written by</span>
                <span className="text-black font-bold">{post.author.name}</span>
                <span>in</span>
                <Link href={`/product-category/${post.category.toLowerCase().replace(/ /g, '-')}`} className="text-black font-bold hover:text-gray-600 transition-colors">{post.category}</Link>
              </div>
            </div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-black max-w-4xl text-center mt-6"
            >
              {post.title}
            </motion.h1>
            
            <div className="mt-10 mb-2">
              <div className="w-10 h-px bg-gray-200 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">

            <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] font-light">
              {/* Intro paragraph with drop cap */}
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left first-letter:mt-2">
                {post.intro}
              </p>

              {/* Inline image with caption */}
              <figure className="my-16 flex flex-col items-center">
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={post.inlineImageSrc} 
                    alt={post.inlineImageAlt} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm font-medium italic text-gray-400">
                  {post.inlineImageCaption}
                </figcaption>
              </figure>

              {/* Subheading */}
              <h3 className="text-3xl font-bold text-black mt-16 mb-8 underline decoration-gray-200 underline-offset-[12px]">
                {post.subheading}
              </h3>

              <p>{post.body}</p>

              {/* 2-col CTA + side image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-black mb-6">{post.ctaHeading}</h4>
                  <p>{post.ctaBody}</p>
                  <Link
                    href={post.ctaBtnLink}
                    className="inline-block mt-8 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                  >
                    {post.ctaBtn}
                  </Link>
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={post.sideImageSrc} 
                    alt={post.sideImageAlt} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Blockquote */}
              <blockquote className="my-16 p-8 border-l-4 border-black bg-gray-50 bg-opacity-50">
                <p className="text-2xl font-bold text-black italic">
                  {post.quote}
                </p>
              </blockquote>
            </div>

            {/* Tags & Likes Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-10 mt-12">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    href="/shop"
                    className="px-4 py-2 bg-white border border-gray-100 text-[11px] font-medium text-gray-500 hover:bg-black hover:text-white transition-all rounded-sm shadow-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              
              <div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-sm hover:bg-gray-50 transition-all shadow-sm group">
                  <Heart size={14} className="text-red-500 fill-red-500 opacity-60 group-hover:opacity-100" />
                  <span className="text-[11px] font-bold text-gray-800 uppercase tracking-widest">{post.likes} Likes</span>
                </button>
              </div>
            </div>

            {/* Author Box */}
            <AuthorBox {...post.author} />

            {/* Social Sharing */}
            <div className="flex justify-center items-center gap-10 py-8 border-b border-gray-50 mb-16">
              <Link href="https://facebook.com" target="_blank" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors">f</Link>
              <Link href="https://twitter.com" target="_blank" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors italic">X</Link>
              <Link href="https://linkedin.com" target="_blank" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors leading-none">in</Link>
              <Link href="https://wa.me/918080703321" target="_blank" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors font-serif">W</Link>
            </div>

            {/* Related Posts */}
            <div className="mt-24">
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">You may also like</span>
                <h2 className="text-3xl font-bold text-black">Related posts</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {RELATED_POSTS.map(post => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
