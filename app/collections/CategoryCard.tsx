// components/collections/CategoryCard.tsx

import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  count: string;
  href: string;
}

export default function CategoryCard({
  title,
  image,
  count,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden bg-[#f5f5f5]">
        <div className="relative aspect-[600/585] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-400
              ease
              group-hover:scale-[1.05]
            "
            sizes="(max-width: 575px) 100vw,
                   (max-width: 767px) 50vw,
                   (max-width: 991px) 33vw,
                   25vw"
          />
        </div>

        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            bg-[#17304f]
            text-[15px]
            font-semibold
            text-white
            shadow-lg

            opacity-0
            scale-75
            translate-y-2

            transition-all
            duration-300
            ease-out

            group-hover:opacity-100
            group-hover:scale-100
            group-hover:translate-y-0
          "
        >
          {count}
        </div>
      </div>

      <div className="pt-5 text-center">
        <h3
          className="
            inline-block
            border-b
            border-[#232323]
            pb-[2px]
            text-[17px]
            font-semibold
            tracking-[-0.2px]
            text-[#232323]
          "
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}