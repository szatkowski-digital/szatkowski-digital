"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import BackButton from "../ui/BackButton";
import NextButton from "../ui/NextButton";

import ProjectsBg from "../design/ProjectsBg";
import { Project1, Project2, Project3 } from "../design/Projects";

/**
 * ------------------------------------------------------------------
 * PORTFOLIO SECTION
 * ------------------------------------------------------------------
 * Interactive portfolio slider displaying selected projects.
 * Supports:
 * - swipe navigation
 * - button navigation
 * - animated transitions
 * - dynamic background gradients
 */
export default function Portfolio() {
  const [direction, setDirection] = useState(0);
  const [threshold, setThreshold] = useState(0);

  const t = useTranslations("portfolio.projects");

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (typeof window === "undefined") return 0;

    const saved = sessionStorage.getItem("portfolioIndex");
    return saved ? parseInt(saved) : 0;
  });

  /**
   * ------------------------------------------------------------------
   * PROJECT CONFIGURATION
   * ------------------------------------------------------------------
   * List of portfolio projects displayed in the slider.
   */
  const projects = [
    <Project1 key="p1" href="/portfolio/smokins-app" t={t} />,
    <Project2 key="p2" href="/portfolio/blitzform" t={t} />,
    <Project3 key="p3" href="/portfolio/side-quests" t={t} />,
  ];

  /**
   * ------------------------------------------------------------------
   * SESSION STATE
   * ------------------------------------------------------------------
   * Persist currently opened project between page reloads.
   */
  useEffect(() => {
    sessionStorage.setItem("portfolioIndex", currentIndex.toString());
  }, [currentIndex]);

  /**
   * ------------------------------------------------------------------
   * DRAG THRESHOLD
   * ------------------------------------------------------------------
   * Calculates the swipe threshold dynamically based on viewport width.
   * Prevents accidental slide navigation.
   */
  useEffect(() => {
    const updateThreshold = () => setThreshold(window.innerWidth * 0.2);
    updateThreshold();

    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateThreshold, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * ------------------------------------------------------------------
   * NAVIGATION HANDLERS
   * ------------------------------------------------------------------
   * Handles project switching through buttons or swipe gestures.
   */
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleDragEnd = (e, info) => {
    if (Math.abs(info.offset.x) < threshold) return;

    if (info.offset.x < 0) handleNext();
    else handlePrev();
  };

  return (
    <section className="relative h-dvh w-full overflow-hidden pt-22 md:pt-29 pb-20 lg:pb-28">
      <AnimatePresence custom={[direction, threshold]} mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          custom={[direction, threshold]}
          variants={{
            enter: ([dir, thr]) => slideVariants.enter(dir, thr),
            exit: ([dir, thr]) => slideVariants.exit(dir, thr),
            center: slideVariants.center,
          }}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          dragMomentum={false}
          style={{ touchAction: "pan-y" }}
          onDragEnd={handleDragEnd}
        >
          {projects[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <PortfolioNavigation
        projects={projects}
        nextButton={t("navigation.next")}
        prevButton={t("navigation.prev")}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      <ProjectsBg
        colorStart={bgColors[currentIndex].colorStart}
        colorEnd={bgColors[currentIndex].colorEnd}
      />
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * PORTFOLIO NAVIGATION
 * ------------------------------------------------------------------
 * Navigation controls displayed at the bottom of the section.
 * Includes:
 * - previous / next buttons
 * - project indicators
 */
function PortfolioNavigation({
  projects,
  nextButton,
  prevButton,
  currentIndex,
  handlePrev,
  handleNext,
}) {
  return (
    <div className="absolute bottom-6 lg:bottom-12 w-full flex justify-center gap-8 md:gap-24">
      <BackButton className="text-lg" onClick={handlePrev}>
        {prevButton}
      </BackButton>

      <div className="flex items-center gap-4">
        {projects.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full ${
              currentIndex === i ? "bg-neutral-300" : "bg-neutral-600"
            }`}
            animate={{
              scale: currentIndex === i ? 1.4 : 1,
              opacity: currentIndex === i ? 1 : 0.5,
            }}
            transition={{ duration: 0.25 }}
          />
        ))}
      </div>

      <NextButton className="text-lg" onClick={handleNext}>
        {nextButton}
      </NextButton>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * BACKGROUND GRADIENT CONFIG
 * ------------------------------------------------------------------
 * Gradient colors mapped to each project slide.
 */
const bgColors = [
  { colorStart: "#ec4899", colorEnd: "#22c55e" },
  { colorStart: "#3b82f6", colorEnd: "#9333ea" },
  { colorStart: "#f59e0b", colorEnd: "#10b981" },
];

/**
 * ------------------------------------------------------------------
 * SLIDE ANIMATION VARIANTS
 * ------------------------------------------------------------------
 * Framer Motion animation variants controlling
 * slide transitions between projects.
 */
const slideVariants = {
  enter: (dir, threshold) => ({
    x: dir === 0 ? 0 : dir > 0 ? threshold : -threshold,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: [0.3, 0, 0.6, 1],
    },
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.3, 0, 0.6, 1],
    },
  },

  exit: (dir, threshold) => ({
    x: dir > 0 ? -threshold : threshold,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  }),
};
