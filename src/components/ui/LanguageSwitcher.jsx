"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageChange } from "@/hooks/useLanguageChange";

const LANGUAGES = [
  { code: "pl", label: "Polski", icon: "/pl_icon.svg" },
  { code: "en", label: "English", icon: "/en_icon.svg" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { locale, changeLanguage } = useLanguageChange();

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (code) => {
    changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative z-50 text-sm font-mono tracking-widest">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center rounded-full border border-n-1/10 hover:border-n-1/30 bg-n-8/50 transition-colors"
        aria-label="Zmień język"
      >
        <Image
          src={current.icon}
          alt={current.label}
          className="object-contain"
          height={24}
          width={24}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 bottom-full mb-3 w-40 rounded-2xl border border-n-1/10 bg-n-8/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50 origin-bottom-left"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center gap-4 w-full px-5 py-4 hover:bg-n-1/10 transition-colors text-left uppercase text-xs ${
                  locale === lang.code ? "text-n-1" : "text-n-1/50"
                }`}
              >
                <Image
                  src={lang.icon}
                  alt={lang.label}
                  className="object-contain"
                  height={20}
                  width={20}
                />
                <span className="font-bold">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
