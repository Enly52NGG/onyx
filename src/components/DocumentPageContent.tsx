"use client";

import Link from "next/link";
import { LegalDocument } from "@/lib/types";
import { categoryMap } from "@/data/categories";
import { DocumentActions } from "@/components/DocumentActions";
import { DocumentToc } from "@/components/DocumentToc";
import { useI18n } from "@/lib/i18n";
import { localizeCategory, localizeDocumentMeta } from "@/data/locale-content";

export function DocumentPageContent({ doc }: { doc: LegalDocument }) {
  const { t, locale } = useI18n();
  const cat = categoryMap[doc.category];
  const meta = localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale);
  const catLoc = localizeCategory(
    doc.category,
    cat?.title || doc.category,
    cat?.description || "",
    locale
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 lg:py-14">
      <nav className="text-sm text-[#CACBD2] mb-6 flex flex-wrap gap-2 items-center">
        <Link href="/" className="hover:text-[#2965B3]">
          {t("home")}
        </Link>
        <span>/</span>
        {doc.category === "server_rules" ? (
          <Link href="/documents/server-rules" className="hover:text-[#2965B3]">
            {t("projectRules")}
          </Link>
        ) : (
          <Link href="/documents" className="hover:text-[#2965B3]">
            {t("legislation")}
          </Link>
        )}
        <span>/</span>
        <span className="text-[#F7F7F8]">{meta.shortTitle}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <header className="mb-8 pb-6 border-b border-[#1E2F4A]">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2 py-0.5 rounded bg-[#16253D] text-[#2965B3] border border-[#1E2F4A]">
                {catLoc.title}
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-[#F7F7F8] mb-3">
              {meta.title}
            </h1>
            <p className="text-[#CACBD2] text-sm leading-relaxed mb-4">{meta.description}</p>

            <DocumentActions slug={doc.slug} title={meta.title} />
          </header>

          <div className="prose-legal space-y-10">
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-lg font-semibold text-[#2965B3] border-b border-[#1E2F4A] pb-2 mb-4">
                  {section.number ? `${t("chapter")} ${section.number}. ` : ""}
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-[#CACBD2] mb-4 text-sm leading-relaxed">{section.content}</p>
                )}
                <div className="space-y-4">
                  {(section.articles || []).map((art) => (
                    <article
                      key={art.id}
                      id={`art-${art.id}`}
                      className="p-4 rounded-lg bg-[#16253D] border border-[#1E2F4A] scroll-mt-24"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-medium text-[#F7F7F8]">
                          <span className="text-[#2965B3]">{art.number}.</span> {art.title}
                        </h3>
                      </div>
                      <div className="text-sm text-[#CACBD2] leading-relaxed whitespace-pre-line space-y-2">
                        {art.content}
                      </div>
                      {art.sanctions && (
                        <div className="mt-3 pt-3 border-t border-[#1E2F4A] flex flex-wrap gap-2 items-start">
                          <span className="text-xs uppercase tracking-wide text-[#CACBD2] shrink-0 pt-0.5">
                            {t("sanction")}
                          </span>
                          <span className="text-sm text-[#2965B3] whitespace-pre-line">{art.sanctions}</span>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="lg:w-64 shrink-0 no-print">
          <div className="lg:sticky lg:top-8">
            <DocumentToc sections={doc.sections} />
          </div>
        </aside>
      </div>
    </div>
  );
}
