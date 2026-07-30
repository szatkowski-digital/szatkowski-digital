"use client";

import { runPageTransition } from "@/hooks/pageTransitions";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LOCALES = ["en"];

function normalizePath(path = "") {
  const segments = path.split("/").filter(Boolean);

  if (LOCALES.includes(segments[0])) {
    segments.shift();
  }

  return "/" + segments.join("/");
}

export const TransitionLink = ({
  onClick,
  children,
  href,
  className,
  disabled,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = async () => {
    if (disabled) return;

    const target = typeof href === "string" ? href : (href?.pathname ?? "");
    const currentNormalized = normalizePath(pathname);
    const targetNormalized = normalizePath(target);

    if (currentNormalized === targetNormalized) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.refresh();
      if (onClick) onClick();
      return;
    }

    await runPageTransition();
    router.push(href);
    if (onClick) onClick();
  };

  return (
    <motion.a
      {...props}
      href={href}
      className={className}
      onTap={() => handleNavigate()}
      onClick={(e) => {
        e.preventDefault();
      }}
      onMouseEnter={() => router.prefetch(href)}
    >
      {children}
    </motion.a>
  );
};
