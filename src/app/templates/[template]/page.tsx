import { notFound } from "next/navigation";
import { ClassicHome } from "@/components/homes/ClassicHome";
import { DarkHome } from "@/components/homes/DarkHome";
import { HeritageHome } from "@/components/homes/HeritageHome";
import { MinimalHome } from "@/components/homes/MinimalHome";
import { getTemplate, templateBase } from "@/templates/config";

export default async function TemplateHome({ params }: { params: Promise<{ template: string }> }) {
  const t = getTemplate((await params).template);
  if (!t) notFound();
  const base = templateBase(t.id);

  switch (t.theme) {
    case "classic":
      return <ClassicHome base={base} />;
    case "minimal":
      return <MinimalHome base={base} />;
    case "heritage":
      return <HeritageHome base={base} />;
    case "dark":
      return <DarkHome base={base} />;
  }
}
