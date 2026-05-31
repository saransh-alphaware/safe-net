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

export default function Page({
  params,
}: {
  params: { slug: string }
}) {
  return <CategoryClient slug={params.slug} />
}