"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const first = useRef(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setAnimating(true);
    const t = setTimeout(() => setAnimating(false), 560);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className={`page-transition${animating ? " page-in" : ""}`}>
      {children}
    </div>
  );
}
