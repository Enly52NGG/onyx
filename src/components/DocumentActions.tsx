"use client";

import { IconCopy, IconPrint } from "./Icons";
import { useI18n } from "@/lib/i18n";

export function DocumentActions({ slug }: { slug: string; title?: string }) {
  const { t } = useI18n();

  const copyLink = () => {
    const url = `${window.location.origin}/documents/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      alert(t("linkCopied"));
    });
  };

  const printDoc = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap gap-3 mt-4 no-print">
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-[#151515] border border-[#292929] text-[#929292] hover:text-[#B9A16B] hover:border-[#B9A16B]/40 transition"
      >
        <IconCopy size={16} />
        {t("copyLink")}
      </button>
      <button
        onClick={printDoc}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-[#151515] border border-[#292929] text-[#929292] hover:text-[#B9A16B] hover:border-[#B9A16B]/40 transition"
      >
        <IconPrint size={16} />
        {t("print")}
      </button>
    </div>
  );
}
