"use client";

import { runPageTransition } from "@/hooks/pageTransitions";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const LOCALES = ["en"];

function normalizePath(path = "") {
  const segments = path.split("/").filter(Boolean);

  if (LOCALES.includes(segments[0])) {
    segments.shift();
  }

  return "/" + segments.join("/");
}

export const TransitionLink = ({ onClick, children, href, ...props }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async (e) => {
    const target = typeof href === "string" ? href : (href?.pathname ?? "");

    const currentNormalized = normalizePath(pathname);
    const targetNormalized = normalizePath(target);

    if (currentNormalized === targetNormalized) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.refresh();
      if (onClick) onClick();
      return;
    }

    e.preventDefault();

    await runPageTransition();

    router.push(href);

    if (onClick) onClick();
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={handleClick}
      onMouseEnter={() => router.prefetch(href)}
    >
      {children}
    </Link>
  );
};
