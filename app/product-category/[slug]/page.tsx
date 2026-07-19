import type { Metadata } from 'next';
import CategoryClient from './CategoryClient'
import { products } from '@/lib/data/products'

export async function generateStaticParams() {
  const slugs = Array.from(
    new Set(
      products.map((p) =>
        p.category.toLowerCase().replace(/ /g, '-')
      )
    )
  )

  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title: `${categoryName} Safety Solutions | SafeNet & Co.`,
    description: `Shop our premium selection of ${categoryName} safety solutions. Professionally installed with Grade SS316 stainless steel materials.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CategoryClient slug={slug} />
}