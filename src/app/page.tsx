"use client";

import Link from "next/link";
import { documents } from "@/data/documents";
import { categories } from "@/data/categories";
import { IconSearch, IconBook, IconScale, IconShield, IconFile } from "@/components/Icons";
import { useI18n } from "@/lib/i18n";
import { localizeCategory, localizeDocumentMeta } from "@/data/locale-content";

export default function HomePage() {
  const { t, locale } = useI18n();
  const popular = documents.filter((d) => d.category !== "server_rules").slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="relative border-b border-[#292929] bg-gradient-to-b from-[#101010] to-[#090909]">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div className="flex items-center gap-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="ONYX" className="w-14 h-14 rounded-full object-cover border border-[#292929] shrink-0" />
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#F2F2F2]">
                ONYX RP
              </h1>
              <p className="text-[#B9A16B] text-sm mt-1">{t("officialPortal")}</p>
            </div>
          </div>
          <p className="text-[#929292] max-w-2xl text-base leading-relaxed mb-8">
            {t("heroDescription")}
          </p>

          <form action="/search" method="get" className="relative max-w-2xl">
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#929292]" size={20} />
            <input
              type="search"
              name="q"
              placeholder={t("searchPlaceholder")}
              className="w-full bg-[#151515] border border-[#292929] rounded-xl pl-12 pr-4 py-3.5 text-[#F2F2F2] placeholder:text-[#929292] focus:outline-none focus:border-[#B9A16B]/focus:ring-1 focus:ring-[#B9A16B]/50 transition"
            />
          </form>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-lg font-medium text-[#F2F2F2] mb-6">{t("categories")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const count = documents.filter((d) => d.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/documents?category=${cat.id}`}
                className="group p-5 rounded-xl bg-[#151515] border border-[#292929] hover:border-[#B9A16B]/40 hover:bg-[#1C1C1C] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1C1C1C] border border-[#292929] flex items-center justify-center text-[#B9A16B]">
                    {cat.id === "server_rules" && <IconBook size={18} />}
                    {(cat.id === "criminal_code" || cat.id === "admin_code" || cat.id === "judiciary") && <IconScale size={18} />}
                    {(cat.id === "police" || cat.id === "fsb" || cat.id === "fso") && <IconShield size={18} />}
                    {!["server_rules", "criminal_code", "admin_code", "judiciary", "police", "fsb", "fso"].includes(cat.id) && <IconFile size={18} />}
                  </div>
                  <span className="text-xs text-[#929292]">{count > 0 ? `${count}` : "—"}</span>
                </div>
                <h3 className="font-medium text-[#F2F2F2] group-hover:text-[#B9A16B] transition-colors mb-1">
                  {localizeCategory(cat.id, cat.title, cat.description, locale).title}
                </h3>
                <p className="text-sm text-[#929292] line-clamp-2">{localizeCategory(cat.id, cat.title, cat.description, locale).description}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <Link href="/documents" className="text-sm text-[#B9A16B] hover:underline">
            {t("viewAllCategories")}
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8 border-t border-[#292929]">
        <h2 className="text-lg font-medium text-[#F2F2F2] mb-6">{t("popularDocs")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popular.map((doc) => (
            <Link
              key={doc.id}
              href={`/documents/${doc.slug}`}
              className="p-5 rounded-xl bg-[#151515] border border-[#292929] hover:border-[#B9A16B]/40 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded bg-[#1C1C1C] text-[#B9A16B] border border-[#292929]">
                  {localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).shortTitle}
                </span>
                <span className="text-xs text-[#929292]">
                  {doc.status === "requires_review" ? t("statusRequiresReview") : t("active")}
                </span>
              </div>
              <h3 className="font-medium text-[#F2F2F2] mb-1">{localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).title}</h3>
              <p className="text-sm text-[#929292] line-clamp-2">{localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="p-5 rounded-xl bg-[#1C1C1C] border border-[#292929]">
          <h3 className="font-medium text-[#B9A16B] mb-2">{t("importantNotice")}</h3>
          <p className="text-sm text-[#929292] leading-relaxed">{t("noticeText")}</p>
          <p className="text-xs text-[#929292] mt-3">{t("lastUpdate")}</p>
        </div>
      </section>
    </div>
  );
}
