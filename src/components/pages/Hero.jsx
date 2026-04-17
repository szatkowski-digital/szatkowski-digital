"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Github, Instagram, Linkedin } from "lucide-react";

import HomeBg from "@/components/design/HomeBg";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { TransitionLink } from "@/components/utils/TransitionLink";

import useIsMobile from "@/hooks/useIsMobile";
import { usePageExit } from "@/hooks/usePageExit";
import {
  rotate90Left,
  slideLeft,
  slideRight,
  slideUp,
} from "@/animations/motionVariants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

/**
 * ------------------------------------------------------------------
 * HERO SECTION
 * ------------------------------------------------------------------
 * Main landing section of the homepage.
 * Contains:
 * - introduction CTA
 * - portfolio preview
 * - supporting interface description
 * - social links
 * - animated background
 */

export default function Hero() {
  const t = useTranslations("home");
  const isMobile = useIsMobile();
  const { exit, onAnimationComplete } = usePageExit();

  return (
    <section className="relative flex items-center justify-center h-dvh min-h-120 w-full overflow-hidden">
      {/* MAIN CONTAINER */}
      <motion.div
        // variants={itemVariants}
        // initial="hidden"
        // animate="visible"
        className="container max-w-7xl flex max-md:flex-col items-start justify-between px-6 max-md:space-y-12"
      >
        {/* HERO CTA */}
        <motion.div
          initial={slideLeft.initial}
          animate={exit ? slideLeft.exit : slideLeft.enter}
          onAnimationComplete={onAnimationComplete}
          className="max-w-xl text-n-1 perspective-[2000px] space-y-6"
        >
          <motion.h1
            custom={0.2}
            initial={rotate90Left.initial}
            animate={rotate90Left.enter}
            className="text-[10vh] font-black md:text-[6vw] uppercase tracking-tighter leading-[0.8] transform-3d"
          >
            {t("hero.greeting")}
          </motion.h1>

          <motion.p
            custom={0.4}
            initial={rotate90Left.initial}
            animate={rotate90Left.enter}
            className="text-lg md:text-xl font-michroma transform-3d"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            custom={0.6}
            initial={rotate90Left.initial}
            animate={rotate90Left.enter}
            className="transform-3d"
          >
            <TransitionLink href="/about">
              <Button className="text-xl">{t("hero.ctaButton")}</Button>
            </TransitionLink>
          </motion.div>

          {isMobile && (
            <motion.div
              custom={0.8}
              initial={rotate90Left.initial}
              animate={rotate90Left.enter}
              className="transform-3d"
            >
              <TransitionLink href="/portfolio">
                <Button className="text-xl">
                  {t("hero.ctaPortfolioButton")}
                </Button>
              </TransitionLink>
            </motion.div>
          )}
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        {!isMobile && (
          <motion.div
            custom={0.8}
            initial={slideRight.initial}
            animate={exit ? slideRight.exit : slideRight.enter}
            onAnimationComplete={onAnimationComplete}
            className="max-w-xl transform-3d md:space-y-16 xl:space-y-20"
          >
            <PortfolioPreview
              action={t("portfolioPreview.verticalTag.action")}
              subject={t("portfolioPreview.verticalTag.subject")}
            />
            <InterfacesBlock
              className="hidden lg:block"
              header={t("portfolioPreview.header")}
              description={t("portfolioPreview.description")}
              footer={t("portfolioPreview.footer")}
            />
          </motion.div>
        )}
      </motion.div>

      {/* SOCIAL LINKS */}
      {!isMobile && (
        <SocialsHero exit={exit} onAnimationComplete={onAnimationComplete} />
      )}

      {/* BACKGROUND */}
      <HomeBg exit={exit} onAnimationComplete={onAnimationComplete} />
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * PORTFOLIO PREVIEW
 * ------------------------------------------------------------------
 * Small preview directing the user to the portfolio section.
 */

function PortfolioPreview({ action, subject }) {
  return (
    <div className="relative flex">
      {/* LEFT LABEL */}
      <div className="relative flex items-center justify-center w-[30%] lg:w-[25%]">
        <div className="absolute -rotate-90 -left-6 xl:-left-14 bottom-4 xl:bottom-8">
          <h4 className="text-xl font-bold tracking-wider xl:text-3xl font-michroma whitespace-nowrap">
            {action}
          </h4>

          <p className="text-lg xl:text-2xl font-michroma whitespace-nowrap">
            {subject}
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex items-center justify-center w-[70%] lg:w-[75%]">
        <Image
          src="/portfolio_stripes.svg"
          alt="Decorative portfolio background stripes"
          width={100}
          height={100}
          className="absolute -bottom-10 xl:-bottom-12 -left-2 xl:-left-4 w-[5rem] xl:w-[8rem] -z-10"
        />

        <TransitionLink href="/portfolio">
          <Image
            src="/images/Anyfab.webp"
            alt="Preview of portfolio project"
            width={500}
            height={300}
            priority
            className="relative z-10 h-auto pl-4 transition-transform duration-300 ease-out w-[260px] lg:w-[300px] xl:w-[320px] 2xl:w-[380px] hover:scale-110 cursor-pointer"
          />
        </TransitionLink>
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * INTERFACES BLOCK
 * ------------------------------------------------------------------
 * Supporting marketing message about the developer's work.
 */

function InterfacesBlock({ className, header, description, footer }) {
  return (
    <div className={`flex items-start max-w-md space-y-4 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="w-8 h-px bg-primary-pink" />
        <h3 className="font-normal leading-snug font-michroma">{header}</h3>
      </div>

      <p className="text-sm font-michroma leading-relaxed text-n-1/70 font-light">
        {description}
        <br />
        {footer}
      </p>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * SOCIAL LINKS
 * ------------------------------------------------------------------
 * Vertical social links displayed on the left side of the hero.
 */

function SocialsHero({ exit, onAnimationComplete }) {
  return (
    <motion.aside
      initial={slideUp.initial}
      animate={exit ? slideUp.exit : slideUp.enter}
      transition={slideUp.enter.transition}
      onAnimationComplete={onAnimationComplete}
      className="absolute flex flex-col items-center gap-6 bottom-12 left-6 md:left-12 xl:left-24 text-n-1"
    >
      <Link
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-70" />
      </Link>

      <Link
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-70" />
      </Link>

      <Link
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-6 h-6 transition-opacity cursor-pointer hover:opacity-70" />
      </Link>

      <div className="w-px h-6 rounded bg-n-1" />

      <LanguageSwitcher />
    </motion.aside>
  );
}
