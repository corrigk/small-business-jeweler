import { notFound } from "next/navigation";
import { ContactPage } from "@/components/site/ContactPage";
import { getTemplate } from "@/templates/config";

export default async function Contact({ params }: { params: Promise<{ template: string }> }) {
  const t = getTemplate((await params).template);
  if (!t) notFound();
  return <ContactPage theme={t.theme} />;
}
