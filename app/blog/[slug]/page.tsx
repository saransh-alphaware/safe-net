import type { Metadata } from 'next';
import BlogPostClient, { BLOG_DATA } from "./BlogPostClient";

export async function generateStaticParams() {
  return [
    { slug: "founder-journey-safenet-history" },
    { slug: "invisible-grills-high-rise-balconies" },
    { slug: "hdpe-vs-nylon-bird-nets" },
    { slug: "pleated-mosquito-nets-airflow" },
    { slug: "motorised-zip-screens-patios" },
    { slug: "aluminium-security-mesh-windows" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA[slug];
  return {
    title: post ? `${post.title} | SafeNet & Co. Blog` : "Blog | SafeNet & Co.",
    description: post ? post.intro.substring(0, 160) : "Read our latest safety solutions blog posts and guides.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <BlogPostClient slug={slug} />;
}
