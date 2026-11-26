"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IconHome,
  IconBook,
  IconSearch,
  IconFile,
  IconInfo,
  IconMenu,
  IconX,
  IconDiscord,
} from "./Icons";
import { useI18n } from "@/lib/i18n";

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const navItems = [
    { href: "/", label: t("home"), icon: IconHome, external: false },
    { href: "/documents/server-rules", label: t("projectRules"), icon: IconBook, external: false },
    { href: "/documents", label: t("legislation"), icon: IconFile, external: false },
    { href: "/search", label: t("search"), icon: IconSearch, external: false },
    { href: "/about", label: t("about"), icon: IconInfo, external: false },
    {
      href: "https://discord.gg/WJGhRMNxe3",
      label: t("discord"),
      icon: IconDiscord,
      external: true,
    },
  ];

  const NavContent = () => (
    <>
      <div className="px-5 py-6 border-b border-[#1E2F4A]">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="w-10 h-10 rounded-lg bg-[#16253D] border border-[#1E2F4A] overflow-hidden shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="NEVA Role Play" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-semibold text-[#F7F7F8] tracking-wide group-hover:text-[#2965B3] transition-colors">
              NEVA Role Play
            </div>
            <div className="text-xs text-[#CACBD2]">{t("portalSubtitle")}</div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const basePath = item.href.split("?")[0];
          let active = false;
          if (item.external) {
            active = false;
          } else if (item.href === "/") {
            active = pathname === "/";
          } else if (basePath === "/documents") {
            active =
              pathname === "/documents" ||
              (pathname.startsWith("/documents/") &&
                !pathname.startsWith("/documents/server-rules"));
          } else {
            active =
              pathname === basePath || pathname.startsWith(basePath + "/");
          }
          const Icon = item.icon;
          const className = `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
            active
              ? "bg-[#16253D] text-[#2965B3] border border-[#1E2F4A]"
              : "text-[#CACBD2] hover:text-[#F7F7F8] hover:bg-[#16253D]"
          }`;
          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={className}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={className}
            >
              <Icon size={18} className={active ? "text-[#2965B3]" : ""} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-3 border-t border-[#1E2F4A]">
        <div className="text-xs text-[#CACBD2] mb-2">{t("language")}</div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setLocale("ru")}
            className={`flex-1 py-1.5 text-xs rounded-lg border transition ${
              locale === "ru"
                ? "bg-[#16253D] border-[#2965B3] text-[#2965B3]"
                : "bg-[#16253D] border-[#1E2F4A] text-[#CACBD2] hover:text-[#F7F7F8]"
            }`}
          >
            Русский
          </button>
          <button
            type="button"
            onClick={() => setLocale("uk")}
            className={`flex-1 py-1.5 text-xs rounded-lg border transition ${
              locale === "uk"
                ? "bg-[#16253D] border-[#2965B3] text-[#2965B3]"
                : "bg-[#16253D] border-[#1E2F4A] text-[#CACBD2] hover:text-[#F7F7F8]"
            }`}
          >
            Українська
          </button>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-[#1E2F4A] text-xs text-[#CACBD2]">
        <div>{t("docBase")}</div>
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-[#16253D] border border-[#1E2F4A] text-[#F7F7F8]"
        aria-label="Menu"
      >
        <IconMenu size={20} />
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-[#122036] border-r border-[#1E2F4A] flex flex-col transform transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-1 text-[#CACBD2] hover:text-[#F7F7F8]"
        >
          <IconX size={20} />
        </button>
        <NavContent />
      </aside>

      <aside className="hidden lg:flex w-64 shrink-0 bg-[#122036] border-r border-[#1E2F4A] flex-col sticky top-0 h-screen">
        <NavContent />
      </aside>
    </>
  );
}
