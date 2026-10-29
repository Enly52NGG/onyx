import { notFound } from "next/navigation";
import { getDocumentBySlug, documents } from "@/data/documents";
import { DocumentPageContent } from "@/components/DocumentPageContent";

export function generateStaticParams() {
  return documents.map((d) => ({ id: d.slug }));
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doc = getDocumentBySlug(id);
  if (!doc) notFound();

  return <DocumentPageContent doc={doc} />;
}
