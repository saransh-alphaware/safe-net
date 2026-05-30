// components/collections/CollectionsGrid.tsx

"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

import CategoryCard from "./CategoryCard";
import { collectionsData } from "@/lib/collections-data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    y: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function CollectionsGrid() {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="overflow-hidden py-[90px] max-md:py-[75px]">
      <div className="mx-auto max-w-[1320px] px-5">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="
            grid
            grid-cols-4
            gap-x-7
            gap-y-12
            max-[991px]:grid-cols-3
            max-[767px]:grid-cols-2
            max-[575px]:grid-cols-1
          "
        >
          {collectionsData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
            >
              <CategoryCard
                title={item.title}
                image={item.image}
                count={item.count}
                href={item.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}