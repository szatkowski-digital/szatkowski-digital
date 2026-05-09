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

/**
 * ------------------------------------------------------------------
 * HERO SECTION
 * ------------------------------------------------------------------
 */

export default function Hero() {
  const t = useTranslations("home");
  const isMobile = useIsMobile();
  const { exit, onAnimationComplete } = usePageExit();

  return (
    <section className="app-screen">
      {/* MAIN CONTAINER */}
      <div className="shell flex max-md:flex-col items-start justify-between max-md:space-y-12">
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
            className="text-[10vh] font-extrabold md:text-[6vw] uppercase tracking-tighter leading-[0.8] transform-3d"
          >
            {t.raw("hero.greeting").map((line, index) => (
              <motion.span key={`greeting-line-${index}`} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            custom={0.4}
            initial={rotate90Left.initial}
            animate={rotate90Left.enter}
            className="font-michroma text-xs md:text-sm tracking-[0.3em] text-n-1 uppercase mb-4 block transform-3d"
          >
            <span>{t("hero.subtitle")}</span>
          </motion.div>

          <motion.div
            custom={0.6}
            initial={rotate90Left.initial}
            animate={rotate90Left.enter}
            className="pt-3 transform-3d"
          >
            <TransitionLink href="/about">
              <Button className="text-xl lg:text-lg 2xl:text-xl">
                {t("hero.ctaButton")}
              </Button>
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
                <Button
                  color="primary-aqua"
                  className="text-xl lg:text-lg 2xl:text-xl"
                >
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
            className="transform-3d md:space-y-8 xl:space-y-12 w-[clamp(20rem,30vw,35rem)]"
          >
            <PortfolioPreview
              action={t("portfolioPreview.verticalTag.action")}
              subject={t("portfolioPreview.verticalTag.subject")}
            />
            <InterfacesBlock
              className=""
              header={t("portfolioPreview.header")}
              description={t("portfolioPreview.description")}
              footer={t("portfolioPreview.footer")}
            />
          </motion.div>
        )}
      </div>

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
 */

function PortfolioPreview({ action, subject }) {
  return (
    <div className="relative flex space-x-4 xl:space-x-6 w-full">
      {/* LEFT LABEL */}
      <div className="relative flex items-end justify-start">
        <div
          className="inline-block"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          <h4 className="text-xl font-bold tracking-wider xl:text-3xl font-michroma whitespace-nowrap">
            {action}
          </h4>
          <p className="text-lg xl:text-2xl font-michroma whitespace-nowrap">
            {subject}
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative group w-full">
        <TransitionLink
          href="/portfolio"
          className="pl-[clamp(1rem,3vw,4rem)] pb-[clamp(1rem,3vw,4rem)] block relative z-10 w-full overflow-visible"
        >
          <Image
            src="/images/Anyfab.webp"
            alt="Preview of portfolio project"
            width={500}
            height={300}
            priority
            className="w-[clamp(260px,25vw,420px)] h-auto transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:-translate-y-2 cursor-pointer drop-shadow-2xl"
          />
        </TransitionLink>

        <Image
          src="/portfolio_stripes.svg"
          alt="Decorative portfolio background stripes"
          width={100}
          height={100}
          className="absolute bottom-0 left-0 w-[clamp(5rem,8vw,9rem)] h-auto -z-10"
        />
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * INTERFACES BLOCK
 * ------------------------------------------------------------------
 */

function InterfacesBlock({ className, header, description, footer }) {
  return (
    <div className={`flex flex-col items-start w-full space-y-4 ${className}`}>
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
 */

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
];

function SocialsHero({ exit, onAnimationComplete }) {
  return (
    <motion.aside
      variants={slideUp}
      initial="initial"
      animate={exit ? "exit" : "enter"}
      onAnimationComplete={onAnimationComplete}
      className="absolute flex flex-col items-center gap-6 bottom-12 left-(--container-padding) text-n-1"
    >
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener"
          className="hover:opacity-70 transition-opacity"
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}

      <div className="w-px h-6 rounded bg-n-1" />

      <LanguageSwitcher />
    </motion.aside>
  );
}
