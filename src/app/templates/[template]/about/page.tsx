import { notFound } from "next/navigation";
import { AboutPage } from "@/components/site/AboutPage";
import { getTemplate, templateBase } from "@/templates/config";

export default async function About({ params }: { params: Promise<{ template: string }> }) {
  const t = getTemplate((await params).template);
  if (!t) notFound();
  return <AboutPage theme={t.theme} base={templateBase(t.id)} />;
}
