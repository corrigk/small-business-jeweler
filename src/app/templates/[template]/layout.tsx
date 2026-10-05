import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TemplateSwitcher } from "@/components/site/TemplateSwitcher";
import { getTemplate, templateBase, templates } from "@/templates/config";
import { fontClasses } from "@/templates/fonts";

type Params = { template: string };

export function generateStaticParams() {
  return templates.map((t) => ({ template: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const t = getTemplate((await params).template);
  return {
    title: t ? `Abe Harry & Son | Template ${t.id}: ${t.name}` : "Abe Harry & Son",
    description: "Jewelers in Independence, Ohio. Engagement rings, wedding bands, custom design, and repairs.",
  };
}

export default async function TemplateLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const t = getTemplate((await params).template);
  if (!t) notFound();
  const base = templateBase(t.id);

  return (
    <div data-theme={t.theme} className={`theme-root flex min-h-screen flex-col ${fontClasses[t.theme]}`}>
      <SiteHeader theme={t.theme} base={base} />
      <main className="flex-1">{children}</main>
      <SiteFooter theme={t.theme} base={base} />
      <div className="h-20" aria-hidden />
      <TemplateSwitcher current={t} />
    </div>
  );
}
