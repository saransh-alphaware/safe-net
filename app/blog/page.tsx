import Navbar from '@/components/layout/Navbar'
import BlogCard from '@/components/ui/BlogCard'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 1,
    title: "The best influencers to follow for sartorial inspiration",
    category: "Decor",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-01-600x430.jpg.webp",
    href: "/blog/influencers-inspiration"
  },
  {
    id: 2,
    title: "Everything you need to know about decor’s big night out",
    category: "Design",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-02-600x430.jpg.webp",
    href: "/blog/decors-big-night-out"
  },
  {
    id: 3,
    title: "All the best looks & moments from the met gala 2023",
    category: "Decor",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-03-600x430.jpg.webp",
    href: "/blog/met-gala-2023"
  },
  {
    id: 4,
    title: "Find a colour palettes that reflects your passion",
    category: "Decor",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-04-600x430.jpg.webp",
    href: "/blog/colour-palettes-passion"
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
    id: 6,
    title: "Our new beach house tour with before photos!",
    category: "Design",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-blog-06-600x430.jpg.webp",
    href: "/blog/beach-house-tour"
  },
  {
    id: 7,
    title: "Standing desk for working from home in a small space",
    category: "Decor",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-07-600x430.jpg.webp",
    href: "/blog/standing-desk-small-space"
  },
  {
    id: 8,
    title: "Simple strawberry crisp recipe with easter pie crust cutouts",
    category: "Decor",
    date: "12 April 2024",
    image: "https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/10/demo-decor-store-blog-08-600x430.jpg.webp",
    href: "/blog/strawberry-crisp-recipe"
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#F8F8F8] border-b border-gray-100 mt-[70px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-black mb-6">
              Latest blog
            </h1>
            
            <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-widest">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              < ChevronRight size={14} className="text-gray-300" />
              <span className="text-gray-400">Latest blog</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {BLOG_POSTS.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                category={post.category}
                date={post.date}
                image={post.image}
                href={post.href}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Placeholder (or use actual footer if exists) */}
      <footer className="py-10 border-t border-gray-100 bg-black text-white">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400 uppercase tracking-widest">
          © 2024 Safenet Storefront. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
