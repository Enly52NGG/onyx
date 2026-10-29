"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t, locale } = useI18n();

  const principles =
    locale === "uk"
      ? [
          "Оригінальні формулювання зберігаються без зміни змісту.",
          "Не вигадуються нові статті, санкції чи повноваження.",
          "Суперечності між джерелами позначаються для перевірки адміністрацією.",
          "Статус «потребує перевірки» встановлюється, якщо актуальність не підтверджена.",
        ]
      : [
          "Оригинальные формулировки сохраняются без изменения смысла.",
          "Не выдумываются новые статьи, санкции или полномочия.",
          "Противоречия между источниками отмечаются для проверки администрацией.",
          "Статус «требует проверки» устанавливается, если актуальность не подтверждена.",
        ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
      <h1 className="text-2xl font-semibold text-[#F2F2F2] mb-6">{t("aboutTitle")}</h1>

      <div className="space-y-6 text-[#929292] text-sm leading-relaxed">
        <section>
          <h2 className="text-[#F2F2F2] font-medium mb-2">{t("aboutPurpose")}</h2>
          <p>{t("aboutPurposeText")}</p>
        </section>

        <section>
          <h2 className="text-[#F2F2F2] font-medium mb-2">{t("aboutPrinciples")}</h2>
          <ul className="list-disc pl-5 space-y-1">
            {principles.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[#F2F2F2] font-medium mb-2">{t("aboutVersion")}</h2>
          <p>{t("docBase")}</p>
        </section>
      </div>

      <div className="mt-10">
        <Link href="/" className="text-[#B9A16B] hover:underline text-sm">
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
