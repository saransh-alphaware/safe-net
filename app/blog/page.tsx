import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogCard from '@/components/ui/BlogCard'
import PageTitle from '@/components/ui/PageTitle'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why invisible grills are the safest choice for high-rise balconies",
    category: "Safety",
    date: "15 March 2025",
    image: "/images/products/invisible_grill_hero.webp",
    href: "/blog/invisible-grills-high-rise-balconies"
  },
  {
    id: 2,
    title: "HDPE vs Nylon bird nets: which one is right for your home?",
    category: "Guide",
    date: "20 April 2025",
    image: "/images/products/bird_net_hero.webp",
    href: "/blog/hdpe-vs-nylon-bird-nets"
  },
  {
    id: 3,
    title: "How pleated mosquito nets keep insects out without blocking airflow",
    category: "Tips",
    date: "05 May 2025",
    image: "/images/products/mosquito_net_hero.webp",
    href: "/blog/pleated-mosquito-nets-airflow"
  },
  {
    id: 4,
    title: "Motorised zip screens: the smart upgrade for modern patios",
    category: "Innovation",
    date: "18 May 2025",
    image: "/images/products/zip_screen_hero.webp",
    href: "/blog/motorised-zip-screens-patios"
  },
  {
    id: 5,
    title: "Top 5 reasons to install aluminium security mesh on your windows",
    category: "Security",
    date: "02 April 2025",
    image: "/images/products/aluminium_mesh_hero.webp",
    href: "/blog/aluminium-security-mesh-windows"
  },
  {
    id: 6,
    title: "SS316 vs SS304 stainless steel: what grade is best for grills?",
    category: "Guide",
    date: "10 March 2025",
    image: "/images/products/invisible_grill_wire_rope.webp",
    href: "/blog/ss316-vs-ss304-stainless-steel"
  },
  {
    id: 7,
    title: "Bird-proofing your balcony: a complete homeowner's checklist",
    category: "Tips",
    date: "25 February 2025",
    image: "/images/products/bird_net_hdpe.webp",
    href: "/blog/bird-proofing-balcony-checklist"
  },
  {
    id: 8,
    title: "Zip screen fabric guide: sunshade, PVC, mosquito or blackout?",
    category: "Guide",
    date: "12 January 2025",
    image: "/images/products/zip_screen_thumb.webp",
    href: "/blog/zip-screen-fabric-guide"
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <PageTitle title="Blogs" />

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
      
      <Footer />
    </main>
  )
}
