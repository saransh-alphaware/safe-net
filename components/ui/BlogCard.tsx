'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogCardProps {
  title: string
  category: string
  date: string
  image: string
  href: string
}

export default function BlogCard({ title, category, date, image, href }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link href={href} className="block overflow-hidden rounded-sm mb-4 relative aspect-[600/430]">
        <motion.div
           whileHover={{ scale: 1.05 }}
           transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
           className="w-full h-full relative"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </motion.div>
      </Link>
      
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-[13px] uppercase tracking-wider font-medium">
          <Link href={`/category/${category.toLowerCase()}`} className="text-black hover:text-gray-600 transition-colors">
            {category}
          </Link>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="text-gray-500">{date}</span>
        </div>
        
        <Link href={href} className="block">
          <h3 className="text-xl font-semibold leading-snug group-hover:underline decoration-1 underline-offset-4 transition-all">
            {title}
          </h3>
        </Link>
      </div>
    </motion.div>
  )
}
