import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { GlassSettings } from "@/components/GlassSettings";
import { PageTransition } from "@/components/PageTransition";
import { I18nProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEVA Role Play — Официальный правовой портал",
  description:
    "Официальный правовой портал проекта NEVA Role Play. Правила, кодексы, регламенты и нормативные документы.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A1627] text-[#F7F7F8]`}
      >
        <I18nProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <GlassSettings />
            <main className="flex-1 min-w-0 overflow-x-hidden"><PageTransition>{children}</PageTransition></main>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
