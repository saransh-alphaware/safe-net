import { MetadataRoute } from 'next';
import { products } from '@/lib/data/products';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://safenetandco.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/faqs',
    '/shop',
    '/collections',
    '/invisible-grills',
    '/bird-net',
    '/mosquito-net',
    '/bird-netting',
    '/mosquito-netting',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Product categories
  const categories = [
    'invisible-grill',
    'bird-net',
    'mosquito-net',
    'security-mesh',
    'zip-screen',
  ];
  const categoryRoutes = categories.map((slug) => ({
    url: `${baseUrl}/product-category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Individual products
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Blog posts
  const blogSlugs = [
    'invisible-grills-high-rise-balconies',
    'hdpe-vs-nylon-bird-nets',
    'pleated-mosquito-nets-airflow',
    'motorised-zip-screens-patios',
    'aluminium-security-mesh-windows',
    'ss316-vs-ss304-stainless-steel',
    'bird-proofing-balcony-checklist',
    'zip-screen-fabric-guide',
  ];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...blogRoutes,
  ];
}
