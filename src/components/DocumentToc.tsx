"use client";

import { Section } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

export function DocumentToc({ sections }: { sections: Section[] }) {
  const { t } = useI18n();
  return (
    <div className="p-4 rounded-xl bg-[#151515] border border-[#292929]">
      <h3 className="text-sm font-medium text-[#F2F2F2] mb-3">{t("tableOfContents")}</h3>
      <nav className="space-y-1 max-h-[70vh] overflow-y-auto text-sm">
        {sections.map((s) => (
          <div key={s.id}>
            <a
              href={`#${s.id}`}
              className="block py-1 text-[#929292] hover:text-[#B9A16B] transition"
            >
              {s.number ? `${s.number}. ` : ""}
              {s.title}
            </a>
            {(s.articles || []).length > 0 && (
              <div className="ml-3 border-l border-[#292929] pl-2 space-y-0.5 mt-0.5">
                {(s.articles || []).slice(0, 8).map((a) => (
                  <a
                    key={a.id}
                    href={`#art-${a.id}`}
                    className="block py-0.5 text-xs text-[#929292] hover:text-[#B9A16B] transition"
                  >
                    {a.number}
                  </a>
                ))}
                {(s.articles || []).length > 8 && (
                  <span className="text-xs text-[#929292]">
                    +{(s.articles || []).length - 8}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
