import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import { products } from "@/lib/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return {
    title: product ? `${product.name} | SafeNet & Co.` : "Product Details | SafeNet & Co.",
    description: product ? product.description : "View details of our premium safety net and invisible grill products.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
