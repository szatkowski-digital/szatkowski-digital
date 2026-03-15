"use client";

import { delay, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Github, Instagram, Linkedin } from "lucide-react";

import HomeBg from "@/components/design/HomeBg";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { TransitionLink } from "@/components/utils/TransitionLink";

import { usePageExit } from "@/hooks/usePageExit";
import { slideLeft, slideRight, slideUp } from "@/animations/motionVariants";

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
  const { exit, onAnimationComplete } = usePageExit();

  return (
    <section className="relative flex items-start lg:items-center justify-center h-dvh w-full overflow-hidden">
      {/* MAIN CONTAINER */}
      <div className="container flex flex-col items-start justify-center px-6 mx-auto max-lg:mt-48">
        {/* HERO CTA */}
        <motion.div
          initial={slideLeft.initial}
          animate={exit ? slideLeft.exit : slideLeft.enter}
          transition={slideLeft.enter.transition}
          onAnimationComplete={onAnimationComplete}
          className="max-w-xl text-n-1"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-6xl font-michroma">
            {t("hero.greeting")}
          </h1>

          <p className="mb-6 text-lg md:text-2xl font-michroma">
            {t("hero.subtitle")}
          </p>

          <TransitionLink href="/about">
            <Button className="text-xl">{t("hero.ctaButton")}</Button>
          </TransitionLink>
        </motion.div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <motion.div
        initial={slideRight.initial}
        animate={exit ? slideRight.exit : slideRight.enter}
        transition={slideRight.enter.transition}
        onAnimationComplete={onAnimationComplete}
        className="absolute z-10 space-y-16 xl:space-y-20 right-8 md:right-16 xl:right-32 bottom-8 lg:bottom-24 xl:bottom-32"
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

      {/* SOCIAL LINKS */}
      <SocialsHero exit={exit} onAnimationComplete={onAnimationComplete} />

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
    <div className="relative flex w-full pb-10 xl:pb-12">
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
            className="relative z-10 h-auto pl-4 transition-transform duration-300 ease-out w-[260px] xl:w-[340px] 2xl:w-[380px] hover:scale-110 cursor-pointer"
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
    <div className={`flex items-start max-w-md space-x-4 ${className}`}>
      <div className="flex justify-start items-center">
        <span className="pr-2 text-xl">›</span>
        <h3 className="font-normal leading-snug font-michroma">{header}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed font-michroma whitespace-pre-line">
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
