"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/utils/TransitionLink";
import { ArrowLeft } from "lucide-react";

import MobileMenu from "@/features/header/MobileMenu";
import MenuSvg from "@/features/header/MenuSvg";

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
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const rawPathname = usePathname();
  const pathname = getNormalizedPath(rawPathname);
  const t = useTranslations("common");

  const isProjectPage =
    pathname.startsWith("/portfolio/") && pathname !== "/portfolio";

  const toggleNav = () => {
    if (open) {
      enablePageScroll();
      setOpen(false);
    } else {
      disablePageScroll();
      setOpen(true);
    }
  };

  const closeNav = () => {
    if (!open) return;
    enablePageScroll();
    setOpen(false);
  };

  useEffect(() => {
    enablePageScroll();
    setOpen(false);
  }, [rawPathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 175);
      setMobileScrolled(window.scrollY > 10);
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
        px-(--container-padding)
        ${
          mobileScrolled
            ? "max-lg:bg-n-8/90 max-lg:backdrop-blur-md"
            : "max-lg:bg-transparent"
        }
        ${scrolled ? "lg:px-32 xl:px-48 2xl:px-64" : ""}
      `}
    >
      {/* NAVBAR CONTAINER */}
      <div
        className={`
          relative flex items-center justify-between h-full
          rounded-full
          transition-all duration-300
          ${scrolled ? "lg:backdrop-blur-md lg:bg-n-8/30 lg:px-12" : ""}
        `}
      >
        {/* LOGO */}
        <Logo />

        {/* CONTAINER ANIMACJI DLA KONTROLEK */}
        <div className="flex flex-1 items-center justify-end h-full">
          <AnimatePresence mode="wait">
            {isProjectPage ? (
              <motion.div
                key="back-button"
                initial={{ opacity: 0, rotate: 135, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -135, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <BackToPortfolioButton
                  tooltip={
                    t("navigation.backToPortfolio") || "Powrót do portfolio"
                  }
                />
              </motion.div>
            ) : (
              <motion.div
                key="main-nav"
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="flex items-center"
              >
                {/* DESKTOP NAVIGATION */}
                <DesktopNav t={t} currentPath={pathname} />

                {/* MOBILE MENU BUTTON */}
                <MobileNavButton open={open} toggleNav={toggleNav} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isProjectPage && <MobileMenu open={open} handleClick={closeNav} />}
    </motion.header>
  );
}

function Logo() {
  return (
    <TransitionLink href="/" aria-label="Szatkowski Digital - Home">
      <img
        src="/logo.svg"
        alt="Logo"
        width={125}
        height={50}
        className="w-31.25 h-auto"
      />
    </TransitionLink>
  );
}

function BackToPortfolioButton({ tooltip }) {
  return (
    <TransitionLink
      href="/portfolio"
      aria-label={tooltip}
      className="relative group p-2 md:p-3 rounded-full flex items-center justify-center text-white"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: 0 }}
          variants={{ hover: { x: "-120%" } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: "120%" }}
          variants={{ hover: { x: 0 } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.div>
      </div>

      <span className="absolute top-full mt-2 right-0 lg:right-1/2 lg:translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-n-8 text-white text-xs px-3 py-1.5 rounded-md border border-white/10 shadow-lg z-10">
        {tooltip}
      </span>
    </TransitionLink>
  );
}

function DesktopNav({ t, currentPath }) {
  return (
    <nav className="flex-1 hidden lg:flex text-n-1 pr-2">
      <div className="flex items-center justify-end w-full gap-16 xl:gap-32">
        <NavItem
          href="/about"
          label={t("navigation.about")}
          underlineColor="bg-primary-pink"
          currentPath={currentPath}
        />

        <NavItem
          href="/portfolio"
          label={t("navigation.portfolio")}
          underlineColor="bg-primary-aqua"
          currentPath={currentPath}
        />

        <NavItem
          href="/contact"
          label={t("navigation.contact")}
          underlineColor="bg-primary-red"
          currentPath={currentPath}
        />
      </div>
    </nav>
  );
}

function NavItem({ href, label, underlineColor, currentPath }) {
  return (
    <TransitionLink href={href} className="relative group">
      <span className="relative px-1 py-2 menu-text">
        {label}
        <NavUnderline
          href={href}
          currentPath={currentPath}
          className={underlineColor}
        />
      </span>
    </TransitionLink>
  );
}

function NavUnderline({ href, currentPath, className = "" }) {
  const isActive = currentPath === href;

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

function MobileNavButton({ open, toggleNav }) {
  return (
    <button
      aria-label="Toggle navigation"
      onClick={toggleNav}
      className="text-2xl text-white lg:hidden z-60 flex items-center justify-center -mr-2 p-2"
    >
      <MenuSvg openNavigation={open} />
    </button>
  );
}

function getNormalizedPath(pathname) {
  const normalized = pathname.replace(/^\/(pl|en)(?=\/|$)/, "");
  return normalized === "" ? "/" : normalized;
}
