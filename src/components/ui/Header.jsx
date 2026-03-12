"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import MobileMenu from "@/components/design/MobileMenu";
import MenuSvg from "@/components/design/MenuSvg";
import { TransitionLink } from "@/components/utils/TransitionLink";

/**
 * ------------------------------------------------------------------
 * HEADER
 * ------------------------------------------------------------------
 * Main navigation component of the website.
 *
 * Features:
 * - scroll-aware background
 * - animated appearance
 * - mobile navigation with scroll lock
 * - active link indicator
 * - internationalization support
 */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const t = useTranslations("common");

  /**
   * Toggle mobile navigation
   */
  const toggleNav = () => {
    if (open) {
      enablePageScroll();
      setOpen(false);
    } else {
      disablePageScroll();
      setOpen(true);
    }
  };

  /**
   * Close mobile menu after clicking link
   */
  const closeNav = () => {
    if (!open) return;
    enablePageScroll();
    setOpen(false);
  };

  /**
   * Close menu on route change
   */
  useEffect(() => {
    enablePageScroll();
    setOpen(false);
  }, [pathname]);

  /**
   * Detect scroll position
   */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 175);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`
        fixed top-0 lg:top-6 left-0 w-full z-100
        h-16 lg:h-20
        transition-all duration-300
        ${scrolled ? "lg:px-32 xl:px-48 2xl:px-64 max-lg:bg-n-8" : "xl:px-10"}
      `}
    >
      {/* NAVBAR CONTAINER */}
      <div
        className={`
          flex items-center justify-between h-full
          px-8 lg:px-12
          rounded-full
          transition-all duration-300
          ${scrolled ? "lg:backdrop-blur-md lg:bg-n-8/30" : ""}
        `}
      >
        {/* LOGO */}
        <Logo />

        {/* DESKTOP NAVIGATION */}
        <DesktopNav t={t} />

        {/* MOBILE MENU BUTTON */}
        <MobileNavButton open={open} toggleNav={toggleNav} />
      </div>

      {/* MOBILE MENU */}
      <MobileMenu open={open} handleClick={closeNav} />
    </motion.header>
  );
}

/**
 * ------------------------------------------------------------------
 * LOGO
 * ------------------------------------------------------------------
 */
function Logo() {
  return (
    <Link href="/" aria-label="Homepage">
      <Image src="/logo.svg" alt="Logo" width={125} height={125} priority />
    </Link>
  );
}

/**
 * ------------------------------------------------------------------
 * DESKTOP NAVIGATION
 * ------------------------------------------------------------------
 */
function DesktopNav({ t }) {
  return (
    <nav className="flex-1 hidden lg:flex text-n-1">
      <div className="flex items-center justify-end w-full gap-16 xl:gap-32 pr-2">
        <NavItem
          href="/about"
          label={t("navigation.about")}
          underlineColor="bg-primary-pink"
        />

        <NavItem
          href="/portfolio"
          label={t("navigation.portfolio")}
          underlineColor="bg-primary-aqua"
        />

        <NavItem
          href="/contact"
          label={t("navigation.contact")}
          underlineColor="bg-primary-red"
        />
      </div>
    </nav>
  );
}

/**
 * ------------------------------------------------------------------
 * NAVIGATION ITEM
 * ------------------------------------------------------------------
 */
function NavItem({ href, label, underlineColor }) {
  return (
    <TransitionLink href={href} className="relative group">
      <span className="relative px-1 py-2 menu-text">
        {label}

        <NavUnderline href={href} className={underlineColor} />
      </span>
    </TransitionLink>
  );
}

/**
 * ------------------------------------------------------------------
 * ACTIVE LINK UNDERLINE
 * ------------------------------------------------------------------
 */
function NavUnderline({ href, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <span
      className={`
        hidden lg:block
        absolute left-2 bottom-0
        w-full h-0.5
        rounded-sm origin-left
        transition-transform
        ${className}
        ${isActive ? "scale-x-100" : "scale-x-0"}
        group-hover:scale-x-100
      `}
    />
  );
}

/**
 * ------------------------------------------------------------------
 * MOBILE NAV BUTTON
 * ------------------------------------------------------------------
 */
function MobileNavButton({ open, toggleNav }) {
  return (
    <button
      aria-label="Toggle navigation"
      onClick={toggleNav}
      className="absolute text-2xl text-white right-8 lg:hidden z-60"
    >
      <MenuSvg openNavigation={open} />
    </button>
  );
}
