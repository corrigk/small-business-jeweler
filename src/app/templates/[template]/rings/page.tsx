import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Catalog } from "@/components/site/Catalog";
import { PageHeader } from "@/components/site/PageHeader";
import { products } from "@/data/products";
import { getTemplate, templateBase } from "@/templates/config";

export default async function RingsPage({ params }: { params: Promise<{ template: string }> }) {
  const t = getTemplate((await params).template);
  if (!t) notFound();

  return (
    <>
      <PageHeader
        theme={t.theme}
        eyebrow="The collection"
        title="Rings"
        intro="Engagement rings, wedding bands, men's rings, and fashion pieces. Stop in to try any of them on."
      />
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <Suspense fallback={<p className="py-20 text-center text-muted">Loading rings…</p>}>
          <Catalog products={products} theme={t.theme} base={templateBase(t.id)} />
        </Suspense>
      </section>
    </>
  );
}
