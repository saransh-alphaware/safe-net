import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  return [
    { slug: "invisible-grills-high-rise-balconies" },
    { slug: "hdpe-vs-nylon-bird-nets" },
    { slug: "pleated-mosquito-nets-airflow" },
    { slug: "motorised-zip-screens-patios" },
    { slug: "aluminium-security-mesh-windows" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <BlogPostClient slug={slug} />;
}
