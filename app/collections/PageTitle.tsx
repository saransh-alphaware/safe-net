// components/collections/PageTitle.tsx

import Link from "next/link";

export default function PageTitle() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-[180px] pb-[100px] max-md:py-[75px]"
      style={{
        backgroundImage:
          "url('https://crafto.themezaa.com/decor-store/images/demo-decor-store-title-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white/65" />

      <div className="relative mx-auto max-w-[1250px] px-5 text-center">
        <h1 className="mb-3 text-[52px] font-bold leading-none tracking-[-1px] text-[#232323] max-md:text-[40px] max-sm:text-[34px]">
          Collections
        </h1>

        <div className="flex items-center justify-center gap-2 text-[16px] text-[#828282]">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-black"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-[#232323]">Collections</span>
        </div>
      </div>
    </section>
  );
}