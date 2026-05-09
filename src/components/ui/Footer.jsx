"use client";

import { usePathname } from "next/navigation";
import { SOCIAL_LINKS, FOOTER_INFO } from "@/data/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/en";

  return (
    <footer className="absolute bottom-0 left-0 w-full pb-8 px-(--container-padding) z-50 pointer-events-none">
      <div className="mx-auto pointer-events-auto">
        {isHome ? (
          <div className="flex justify-center md:justify-end">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-n-1/30">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:grid md:grid-cols-3 items-center md:items-end gap-6 md:gap-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-n-1/30">
            <div className="hidden md:flex flex-col space-y-1">
              <div className="flex gap-4">
                <span className="text-n-1/30">{FOOTER_INFO.studio}</span>
              </div>

              <a
                href={`mailto:${FOOTER_INFO.email}`}
                className="text-n-1/30 hover:text-primary-aqua/50 transition-colors"
              >
                {FOOTER_INFO.email}
              </a>

              <div className="flex gap-4">
                <div className="flex gap-2">
                  <button className="text-white">PL</button>
                  <span>/</span>
                  <button className="hover:opacity-100">EN</button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="mb-2 md:mb-0">
                © {new Date().getFullYear()} {FOOTER_INFO.copyright}
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-1">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-n-1/50 transition-colors"
                >
                  <span className="hidden md:block text-[8px]">{link.id}</span>

                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
