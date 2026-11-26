"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { documents } from "@/data/documents";
import { categories, categoryMap } from "@/data/categories";
import { useI18n } from "@/lib/i18n";
import { localizeCategory, localizeDocumentMeta } from "@/data/locale-content";

function DocumentsContent() {
  const { t, locale } = useI18n();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || undefined;
  const legislationDocs = documents.filter((d) => d.category !== "server_rules");
  const filtered = category
    ? legislationDocs.filter((d) => d.category === category)
    : legislationDocs;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 lg:py-14">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#F7F7F8] mb-2">{t("allDocuments")}</h1>
        <p className="text-[#CACBD2] text-sm">{t("catalogDescription")}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/documents"
          className={`px-3 py-1.5 rounded-lg text-sm border transition ${
            !category
              ? "bg-[#16253D] border-[#2965B3] text-[#2965B3]"
              : "bg-[#16253D] border-[#1E2F4A] text-[#CACBD2] hover:text-[#F7F7F8]"
          }`}
        >
          {t("all")}
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/documents?category=${cat.id}`}
            className={`px-3 py-1.5 rounded-lg text-sm border transition ${
              category === cat.id
                ? "bg-[#16253D] border-[#2965B3] text-[#2965B3]"
                : "bg-[#16253D] border-[#1E2F4A] text-[#CACBD2] hover:text-[#F7F7F8]"
            }`}
          >
            {localizeCategory(cat.id, cat.title, cat.description, locale).title}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-[#CACBD2]">
          <p>{t("noDocsInCategory")}</p>
          <p className="text-sm mt-2">{t("materialsMayBeAdded")}</p>
        </div>
      ) : (
        <div className="space-y-3 stagger">
          {filtered.map((doc) => (
            <Link
              key={doc.id}
              href={`/documents/${doc.slug}`}
              className="block p-5 rounded-xl bg-[#16253D] border border-[#1E2F4A] hover:border-[#2965B3]/40 transition-all"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded bg-[#16253D] text-[#2965B3] border border-[#1E2F4A]">
                  {localizeCategory(doc.category, categoryMap[doc.category]?.title || doc.category, '', locale).title}
                </span>
              </div>
              <h2 className="font-medium text-[#F7F7F8] mb-1">{localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).title}</h2>
              <p className="text-sm text-[#CACBD2] line-clamp-2">{localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).description}</p>
              <div className="mt-2 text-xs text-[#CACBD2]">
                {t("sections")}: {doc.sections.length} · {t("articles")}:{" "}
                {doc.sections.reduce((acc, s) => acc + (s.articles?.length || 0), 0)}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DocumentsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-[#CACBD2]">...</div>}>
      <DocumentsContent />
    </Suspense>
  );
}
