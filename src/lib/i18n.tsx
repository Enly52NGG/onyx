"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "ru" | "uk";

const translations = {
  ru: {
    portalSubtitle: "Правовой портал",
    home: "Главная",
    legislation: "Законодательство",
    mainRules: "Основные правила",
    projectRules: "Правила проекта",
    regulations: "Регламенты",
    search: "Поиск",
    about: "О портале",
    officialPortal: "Официальный правовой портал проекта",
    heroDescription:
      "Единая база правил, кодексов, регламентов и нормативных документов. Быстрый поиск по статьям, санкциям и ключевым словам. Все формулировки сохранены в оригинальном виде.",
    searchPlaceholder: "Поиск по документам, статьям, номерам...",
    categories: "Категории документов",
    viewAllCategories: "Смотреть все категории →",
    popularDocs: "Популярные документы",
    statusRequiresReview: "Статус требует проверки",
    active: "Действует",
    importantNotice: "Важное уведомление",
    noticeText:
      "Портал публикует внутренние правила и нормативные документы ONYX RP. Документы могут обновляться. Актуальность отдельных положений требует проверки администрацией. При обнаружении противоречий между источниками они отмечаются для последующего согласования.",
    lastUpdate: "Последнее обновление базы: на основе предоставленных исходных файлов. Версия каталога: 1.0",
    allDocuments: "Законодательство",
    catalogDescription:
      "Каталог нормативных актов проекта. Статус «требует проверки» означает, что актуальность подтверждается администрацией.",
    all: "Все",
    noDocsInCategory: "В этой категории пока нет загруженных документов.",
    materialsMayBeAdded: "Материалы могут быть добавлены после проверки администрацией.",
    sections: "Разделов",
    articles: "Статей",
    source: "Источник",
    tableOfContents: "Содержание",
    copyLink: "Копировать ссылку",
    print: "Печать",
    linkCopied: "Ссылка на документ скопирована",
    searchTitle: "Поиск",
    searchHint:
      "Введите запрос для поиска по всем загруженным документам. Поддерживается поиск по номерам статей, названиям и тексту.",
    nothingFound: "По запросу ничего не найдено.",
    tryChangeQuery: "Попробуйте изменить формулировку или проверить номер статьи.",
    found: "Найдено",
    aboutTitle: "О правовом портале",
    aboutPurpose: "Назначение",
    aboutPurposeText:
      "Официальный правовой портал проекта ONYX RP предназначен для публикации, систематизации и поиска правил, законов, кодексов и внутренних нормативных документов проекта.",
    aboutPrinciples: "Принципы",
    aboutVersion: "Версия",
    backHome: "← На главную",
    docBase: "База документов v1.0",
    statusLabel: "Статус: требует проверки",
    chapter: "Глава",
    sanction: "Санкция",
    notFoundTitle: "404",
    notFoundText: "Запрашиваемая страница или документ не найдены. Возможно, материал ещё не загружен или ссылка устарела.",
    returnHome: "Вернуться на главную",
    language: "Язык",
    discord: "Discord",
  },
  uk: {
    portalSubtitle: "Правовий портал",
    home: "Головна",
    legislation: "Законодавство",
    mainRules: "Основні правила",
    projectRules: "Правила проєкту",
    regulations: "Регламенти",
    search: "Пошук",
    about: "Про портал",
    officialPortal: "Офіційний правовий портал проєкту",
    heroDescription:
      "Єдина база правил, кодексів, регламентів та нормативних документів. Швидкий пошук за статтями, санкціями та ключовими словами. Усі формулювання збережено в оригінальному вигляді.",
    searchPlaceholder: "Пошук за документами, статтями, номерами...",
    categories: "Категорії документів",
    viewAllCategories: "Дивитися всі категорії →",
    popularDocs: "Популярні документи",
    statusRequiresReview: "Статус потребує перевірки",
    active: "Чинний",
    importantNotice: "Важливе повідомлення",
    noticeText:
      "Портал публікує внутрішні правила та нормативні документи ONYX RP. Документи можуть оновлюватися. Актуальність окремих положень потребує перевірки адміністрацією. У разі виявлення суперечностей між джерелами вони позначаються для подальшого узгодження.",
    lastUpdate: "Останнє оновлення бази: на основі наданих вихідних файлів. Версія каталогу: 1.0",
    allDocuments: "Законодавство",
    catalogDescription:
      "Каталог нормативних актів проєкту. Статус «потребує перевірки» означає, що актуальність підтверджується адміністрацією.",
    all: "Усі",
    noDocsInCategory: "У цій категорії поки немає завантажених документів.",
    materialsMayBeAdded: "Матеріали можуть бути додані після перевірки адміністрацією.",
    sections: "Розділів",
    articles: "Статей",
    source: "Джерело",
    tableOfContents: "Зміст",
    copyLink: "Копіювати посилання",
    print: "Друк",
    linkCopied: "Посилання на документ скопійовано",
    searchTitle: "Пошук",
    searchHint:
      "Введіть запит для пошуку по всіх завантажених документах. Підтримується пошук за номерами статей, назвами та текстом.",
    nothingFound: "За запитом нічого не знайдено.",
    tryChangeQuery: "Спробуйте змінити формулювання або перевірити номер статті.",
    found: "Знайдено",
    aboutTitle: "Про правовий портал",
    aboutPurpose: "Призначення",
    aboutPurposeText:
      "Офіційний правовий портал проєкту ONYX RP призначений для публікації, систематизації та пошуку правил, законів, кодексів та внутрішніх нормативних документів проєкту.",
    aboutPrinciples: "Принципи",
    aboutVersion: "Версія",
    backHome: "← На головну",
    docBase: "База документів v1.0",
    statusLabel: "Статус: потребує перевірки",
    chapter: "Глава",
    sanction: "Санкція",
    notFoundTitle: "404",
    notFoundText: "Запитувану сторінку або документ не знайдено. Можливо, матеріал ще не завантажено або посилання застаріло.",
    returnHome: "Повернутися на головну",
    language: "Мова",
    discord: "Discord",
  },
} as const;

type TranslationKey = keyof typeof translations.ru;

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("onyx-locale") as Locale | null;
    if (saved === "ru" || saved === "uk") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("onyx-locale", l);
  };

  const t = (key: TranslationKey) => translations[locale][key] || translations.ru[key];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
