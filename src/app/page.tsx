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
      <section className="relative border-b border-[#1E2F4A] bg-gradient-to-b from-[#122036] to-[#0A1627]">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div className="flex items-center gap-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="NEVA Role Play" className="w-14 h-14 rounded-lg object-cover border border-[#1E2F4A] shrink-0" />
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#F7F7F8]">
                NEVA Role Play
              </h1>
              <p className="text-[#2965B3] text-sm mt-1">{t("officialPortal")}</p>
            </div>
          </div>
          <p className="text-[#CACBD2] max-w-2xl text-base leading-relaxed mb-8">
            {t("heroDescription")}
          </p>

          <form action="/search" method="get" className="relative max-w-2xl">
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#CACBD2]" size={20} />
            <input
              type="search"
              name="q"
              placeholder={t("searchPlaceholder")}
              className="w-full bg-[#16253D] border border-[#1E2F4A] rounded-xl pl-12 pr-4 py-3.5 text-[#F7F7F8] placeholder:text-[#CACBD2] focus:outline-none focus:border-[#2965B3]/focus:ring-1 focus:ring-[#2965B3]/50 transition"
            />
          </form>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-lg font-medium text-[#F7F7F8] mb-6">{t("categories")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const count = documents.filter((d) => d.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/documents?category=${cat.id}`}
                className="group p-5 rounded-xl bg-[#16253D] border border-[#1E2F4A] hover:border-[#2965B3]/40 hover:bg-[#16253D] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#16253D] border border-[#1E2F4A] flex items-center justify-center text-[#2965B3]">
                    {cat.id === "server_rules" && <IconBook size={18} />}
                    {(cat.id === "criminal_code" || cat.id === "admin_code" || cat.id === "judiciary") && <IconScale size={18} />}
                    {(cat.id === "police" || cat.id === "fsb" || cat.id === "fso") && <IconShield size={18} />}
                    {!["server_rules", "criminal_code", "admin_code", "judiciary", "police", "fsb", "fso"].includes(cat.id) && <IconFile size={18} />}
                  </div>
                  <span className="text-xs text-[#CACBD2]">{count > 0 ? `${count}` : "—"}</span>
                </div>
                <h3 className="font-medium text-[#F7F7F8] group-hover:text-[#2965B3] transition-colors mb-1">
                  {localizeCategory(cat.id, cat.title, cat.description, locale).title}
                </h3>
                <p className="text-sm text-[#CACBD2] line-clamp-2">{localizeCategory(cat.id, cat.title, cat.description, locale).description}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <Link href="/documents" className="text-sm text-[#2965B3] hover:underline">
            {t("viewAllCategories")}
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8 border-t border-[#1E2F4A]">
        <h2 className="text-lg font-medium text-[#F7F7F8] mb-6">{t("popularDocs")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popular.map((doc) => (
            <Link
              key={doc.id}
              href={`/documents/${doc.slug}`}
              className="p-5 rounded-xl bg-[#16253D] border border-[#1E2F4A] hover:border-[#2965B3]/40 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded bg-[#16253D] text-[#2965B3] border border-[#1E2F4A]">
                  {localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).shortTitle}
                </span>
              </div>
              <h3 className="font-medium text-[#F7F7F8] mb-1">{localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).title}</h3>
              <p className="text-sm text-[#CACBD2] line-clamp-2">{localizeDocumentMeta(doc.slug, doc.title, doc.shortTitle, doc.description, locale).description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="p-5 rounded-xl bg-[#16253D] border border-[#1E2F4A]">
          <h3 className="font-medium text-[#2965B3] mb-2">{t("importantNotice")}</h3>
          <p className="text-sm text-[#CACBD2] leading-relaxed">{t("noticeText")}</p>
          <p className="text-xs text-[#CACBD2] mt-3">{t("lastUpdate")}</p>
        </div>
      </section>
    </div>
  );
}
