"use client";

import { useEffect, useState } from "react";

export function GlassSettings() {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(0.55);

  useEffect(() => {
    const saved = localStorage.getItem("neva-glass-opacity");
    if (saved) {
      const v = parseFloat(saved);
      if (!isNaN(v)) setOpacity(v);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--glass-alpha", String(opacity));
    localStorage.setItem("neva-glass-opacity", String(opacity));
  }, [opacity]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Настройки прозрачности"
        className={`gear-btn fixed top-4 right-4 z-[60] w-11 h-11 rounded-2xl flex items-center justify-center ${
          open ? "gear-open" : ""
        }`}
      >
        <svg
          className="gear-icon w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>

      {open && (
        <div className="glass-panel fixed top-16 right-4 z-[60] w-72 p-5 rounded-3xl">
          <div className="text-sm font-medium text-[#F7F7F8] mb-1">Liquid Glass</div>
          <div className="text-xs text-[#CACBD2] mb-4">Прозрачность интерфейса</div>
          <input
            type="range"
            min="0.15"
            max="0.85"
            step="0.01"
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value))}
            className="glass-slider w-full"
          />
          <div className="flex justify-between text-xs text-[#CACBD2] mt-2">
            <span>Прозрачнее</span>
            <span>{Math.round(opacity * 100)}%</span>
            <span>Плотнее</span>
          </div>
        </div>
      )}
    </>
  );
}
