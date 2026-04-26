'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Heart, Share2 } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import AuthorBox from '@/components/blog/AuthorBox'
import BlogCard from '@/components/ui/BlogCard'

// Mock data for blog posts (should eventually come from a CMS or JSON file)
const BLOG_DATA = {
  'influencers-inspiration': {
    title: "The best influencers to follow for sartorial inspiration",
    category: "Decor",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-01.jpg.webp",
    author: {
      name: "Colene Landin",
      avatar: "https://crafto.themezaa.com/decor-store/wp-content/themes/crafto-child/assets/images/author.jpg.webp",
      bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type."
    },
    tags: ["Development", "Event", "Fashion", "Multimedia"],
    likes: 16
  }
}

// Default data for other slugs if they don't match
const DEFAULT_POST = {
  title: "A classic white kitchen with colorful patterned",
  category: "Design",
  date: "15 April 2024",
  image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-11.jpg.webp",
  author: {
    name: "Colene Landin",
    avatar: "https://crafto.themezaa.com/decor-store/wp-content/themes/crafto-child/assets/images/author.jpg.webp",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type."
  },
  tags: ["Design", "Home", "Kitchen"],
  likes: 24
}

// Related posts mock
const RELATED_POSTS = [
  {
    id: 6,
    title: "Our new beach house tour with before photos!",
    category: "Design",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-06-600x430.jpg.webp",
    href: "/blog/beach-house-tour"
  },
  {
    id: 5,
    title: "The 7 biggest trends of the oscars red carpet",
    category: "Decor",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-05-600x430.jpg.webp",
    href: "/blog/oscars-red-carpet-trends"
  },
  {
      id: 4,
      title: "Find a colour palettes that reflects your passion",
      category: "Decor",
      date: "12 April 2024",
      image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-04-600x430.jpg.webp",
      href: "/blog/colour-palettes-passion"
    },
]

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = BLOG_DATA[slug as keyof typeof BLOG_DATA] || DEFAULT_POST

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section / Hero Image Area */}
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
              <div className="relative w-full aspect-[16/10] md:aspect-[16/8] rounded-sm overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Overlapping Avatar (Now outside overflow-hidden) */}
              <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 z-10">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-[5px] border-white shadow-lg overflow-hidden flex-shrink-0">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Writer Info */}
            <div className="mt-16 text-center">
              <div className="flex items-center justify-center gap-1 text-[13px] text-gray-500 font-medium">
                <span>Writer by</span>
                <Link href="#" className="text-black font-bold hover:text-gray-600 transition-colors">{post.author.name}</Link>
                <span>in</span>
                <Link href="#" className="text-black font-bold hover:text-gray-600 transition-colors">{post.category}</Link>
              </div>
            </div>

            {/* Main Title below image and info */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-black max-w-4xl text-center mt-6"
            >
              {post.title}
            </motion.h1>
            
            {/* Subtle separator as in PertiBlog.txt */}
            <div className="mt-10 mb-2">
              <div className="w-10 h-[1px] bg-gray-200 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Removed the extra meta info that was here before as it's now above */}

              {/* Main Text Content */}
              <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] font-light">
                <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left first-letter:mt-2">
                  MLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla, sapien luctus fermentum cursus, risus arcu tristique libero, eu ultricies mauris risus at mauris. Duis sit amet tempus massa, sit amet luctus erat. Quisque pulvinar ac nibh non sodales. Fusce facilisis est. Vestibulum venenatis, mauris ut accumsan lacinia ipsum nisl volutpat leo ut dictum mauris quam eget nibhmauris ut accumsan lacinia.
                </p>

                <figure className="my-16 flex flex-col items-center">
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-4">
                    <Image 
                      src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-single-classic-02-1024x602.jpg.webp" 
                      alt="Interior detail" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-sm font-medium italic text-gray-400">
                    We must never confuse elegance with snobbery
                  </figcaption>
                </figure>

                <h3 className="text-3xl font-bold text-black mt-16 mb-8 underline decoration-gray-200 underline-offset-[12px]">
                  Diversity lasts when it no longer has to be the subject of a story.
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla, sapien luctus fermentum cursus, risus arcu tristique libero, eu ultricies mauris risus at mauris. Duis sit amet tempus massa, sit amet luctus erat. Vestibulum venenatis accumsan lacinia ipsum nisl volutpat leo, ut dictum mauris quam eget Suspendisse fringilla sapien luctus.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 items-center">
                   <div>
                      <h4 className="text-2xl font-bold text-black mb-6">Fashion is what you're offered four times a year by designers.</h4>
                      <p>Suspendisse fringilla, sapien luctus and fermentum cursus, risus arcu tristique libero, eu ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      <button className="mt-8 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                        Fashion trends
                      </button>
                   </div>
                   <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                      <Image 
                        src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-single-classic-03.jpg.webp" 
                        alt="Fashion detail" 
                        fill 
                        className="object-cover"
                      />
                   </div>
                </div>

                <blockquote className="my-16 p-8 border-l-4 border-black bg-gray-50 bg-opacity-50">
                  <p className="text-2xl font-bold text-black italic">
                    "I want people to see the dress, but focus on the woman"
                  </p>
                </blockquote>

                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden my-16">
                   <Image 
                    src="https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-single-classic-04.jpg.webp" 
                    alt="Living space" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Tags & Likes Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-10 mt-12">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag} 
                      href="#" 
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

              {/* Social Sharing Icons (Centered below Author Box) */}
              <div className="flex justify-center items-center gap-10 py-8 border-b border-gray-50 mb-16">
                <Link href="#" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors">f</Link>
                <Link href="#" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors italic">X</Link>
                <Link href="#" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors leading-none">in</Link>
                <Link href="#" className="text-black font-extrabold text-xl hover:text-gray-400 transition-colors font-serif italic text-2xl">Bē</Link>
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

      {/* Simple Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">
            © 2024 Safenet Storefront. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
