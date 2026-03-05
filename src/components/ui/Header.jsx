"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import MobileMenu from "@/components/design/MobileMenu";
import MenuSvg from "@/components/design/MenuSvg";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { TransitionLink } from "../utils/TransitionLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations("common");
  const pathname = usePathname();

  const toggleNav = () => {
    if (open) {
      setOpen(false);
      enablePageScroll();
    } else {
      setOpen(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!open) return;
    enablePageScroll();
    setOpen(false);
  };

  useEffect(() => {
    enablePageScroll();
    setOpen(false);
  }, [pathname]);

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
      className={`fixed top-0 lg:top-6 left-0 w-full z-100 transition-all duration-300 max-lg:bg-n-8 h-16 lg:h-20
${scrolled ? "px-4 lg:px-32 xl:px-48 2xl:px-64" : "px-4 lg:px-16"}`}
    >
      <div
        className={`flex rounded-full items-center justify-between h-full px-12 transition-all duration-300 
        ${scrolled ? "lg:backdrop-blur-md" : ""}`}
      >
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="" width={125} height={125} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex flex-1 text-n-1`}>
          <div
            className={`flex gap-16 xl:gap-32 items-center w-full justify-end pr-2`}
          >
            <TransitionLink href="/about" className="group relative">
              <div className="menu-text relative py-2 px-1">
                {t("navigation.about")}
                <NavUnderline href="/about" className="bg-primary-pink" />
              </div>
            </TransitionLink>

            <TransitionLink href="/portfolio" className="group relative">
              <div className="menu-text relative py-2 px-1">
                {t("navigation.portfolio")}
                <NavUnderline href="/portfolio" className="bg-primary-aqua" />
              </div>
            </TransitionLink>

            <TransitionLink href="/contact" className="group relative">
              <div className="menu-text relative py-2 px-1">
                {t("navigation.contact")}
                <NavUnderline href="/contact" className="bg-primary-red" />
              </div>
            </TransitionLink>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl absolute right-8 z-60"
          onClick={toggleNav}
        >
          <MenuSvg openNavigation={open} />
        </button>

        {/* Mobile Menu */}
      </div>

      <MobileMenu open={open} handleClick={handleClick} />
    </motion.header>
  );
}

const NavUnderline = ({ href, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <span
      className={`
        hidden lg:block
        absolute bottom-0 left-2 w-full h-0.75
        transition-transform origin-left rounded-sm
        ${className}
        ${isActive ? "scale-x-100" : "scale-x-0"}
        group-hover:scale-x-100
      `}
    />
  );
};
