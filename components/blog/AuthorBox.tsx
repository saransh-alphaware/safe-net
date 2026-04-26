'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface AuthorBoxProps {
  name: string
  avatar: string
  bio: string
}

export default function AuthorBox({ name, avatar, bio }: AuthorBoxProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white p-10 md:p-14 shadow-[0_10px_45px_rgba(0,0,0,0.05)] rounded-sm my-16 flex flex-col md:flex-row items-center md:items-start gap-12"
    >
      {/* Left side: Avatar and Name */}
      <div className="flex flex-col items-center flex-shrink-0 w-40">
        <div className="relative w-28 h-28 mb-4">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-black tracking-tight">{name}</h3>
      </div>
      
      {/* Right side: Bio and Link */}
      <div className="flex-1 text-center md:text-left space-y-6 pt-2">
        <p className="text-gray-500 leading-relaxed text-[17px]">
          {bio}
        </p>
        
        <Link 
          href={`/author/${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-block text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
        >
          All author posts
        </Link>
      </div>
    </motion.div>
  )
}
