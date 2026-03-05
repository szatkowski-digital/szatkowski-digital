"use client";

import { runPageTransition } from "@/hooks/pageTransitions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();

    router.prefetch(href);

    await runPageTransition();

    router.push(href);
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
