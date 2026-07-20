import { Suspense } from 'react';
import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop Safety Nets & Invisible Grills Catalog | SafeNet & Co.",
  description: "Browse the full catalog of SafeNet & Co. safety products. Explore premium options for SS316 invisible grills, bird netting, pleated mosquito screens, security mesh, and motorized zip screens.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ShopClient />
    </Suspense>
  );
}
