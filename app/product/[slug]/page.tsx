import ProductDetailClient from './ProductDetailClient'
import { products } from '@/lib/data/products'

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }))
}

export default function Page({
  params,
}: {
  params: { slug: string }
}) {
  return <ProductDetailClient slug={params.slug} />
}