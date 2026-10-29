"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { searchDocuments } from "@/data/documents";
import { IconSearch } from "@/components/Icons";
import { useI18n } from "@/lib/i18n";

function SearchContent() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const results = q ? searchDocuments(q) : [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
      <h1 className="text-2xl font-semibold text-[#F2F2F2] mb-6">{t("searchTitle")}</h1>

      <form action="/search" method="get" className="relative mb-8">
        <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#929292]" size={20} />
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder={t("searchPlaceholder")}
          className="w-full bg-[#151515] border border-[#292929] rounded-xl pl-12 pr-4 py-3.5 text-[#F2F2F2] placeholder:text-[#929292] focus:outline-none focus:border-[#B9A16B] transition"
          autoFocus
        />
      </form>

      {!q && <p className="text-[#929292] text-sm">{t("searchHint")}</p>}

      {q && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#929292]">{t("nothingFound")}</p>
          <p className="text-sm text-[#929292] mt-2">{t("tryChangeQuery")}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-[#929292] mb-4">
            {t("found")}: {results.length}
          </p>
          {results.map((r, i) => (
            <Link
              key={i}
              href={
                r.article
                  ? `/documents/${r.document.slug}#art-${r.article.id}`
                  : `/documents/${r.document.slug}`
              }
              className="block p-4 rounded-xl bg-[#151515] border border-[#292929] hover:border-[#B9A16B]/40 transition"
            >
              <div className="text-xs text-[#B9A16B] mb-1">{r.document.shortTitle}</div>
              {r.article ? (
                <div className="font-medium text-[#F2F2F2]">
                  {r.article.number}. {r.article.title}
                </div>
              ) : (
                <div className="font-medium text-[#F2F2F2]">{r.document.title}</div>
              )}
              <p className="text-sm text-[#929292] mt-1 line-clamp-2">
                {r.article
                  ? r.article.content
                  : r.document.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-[#929292]">...</div>}>
      <SearchContent />
    </Suspense>
  );
}
