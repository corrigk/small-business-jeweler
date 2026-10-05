import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/site/ProductDetail";
import { getProduct, products } from "@/data/products";
import { getTemplate, templateBase, templates } from "@/templates/config";

type Params = { template: string; slug: string };

export function generateStaticParams() {
  return templates.flatMap((t) => products.map((p) => ({ template: t.id, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return { title: p ? `${p.name} | Abe Harry & Son` : "Abe Harry & Son" };
}

export default async function RingPage({ params }: { params: Promise<Params> }) {
  const { template, slug } = await params;
  const t = getTemplate(template);
  const product = getProduct(slug);
  if (!t || !product) notFound();

  return <ProductDetail product={product} theme={t.theme} base={templateBase(t.id)} />;
}
