"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (pathname === key) return;
    setVisible(false);
    const t = setTimeout(() => {
      setKey(pathname);
      setVisible(true);
    }, 180);
    return () => clearTimeout(t);
  }, [pathname, key]);

  return (
    <div
      key={key}
      className={`page-transition ${visible ? "page-in" : "page-out"}`}
    >
      {children}
    </div>
  );
}
