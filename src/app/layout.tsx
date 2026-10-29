import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
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
  title: "ONYX RP — Официальный правовой портал",
  description:
    "Официальный правовой портал проекта ONYX RP. Правила, кодексы, регламенты и нормативные документы.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090909] text-[#F2F2F2]`}
      >
        <I18nProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
