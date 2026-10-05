import { notFound } from "next/navigation";
import { ReviewsPage } from "@/components/site/ReviewsPage";
import { getTemplate, templateBase } from "@/templates/config";

export default async function Reviews({ params }: { params: Promise<{ template: string }> }) {
  const t = getTemplate((await params).template);
  if (!t) notFound();
  return <ReviewsPage theme={t.theme} base={templateBase(t.id)} />;
}
