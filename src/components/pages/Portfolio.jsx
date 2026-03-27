"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { TransitionLink } from "../utils/TransitionLink";
import Button from "../ui/Button";

/**
 * ------------------------------------------------------------------
 * CONSTANTS
 * ------------------------------------------------------------------
 */
const DRAG_THRESHOLD = 50;

/**
 * ------------------------------------------------------------------
 * ANIMATION CONFIG
 * ------------------------------------------------------------------
 */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
    zIndex: 0,
  }),
};

const transitionConfig = {
  x: { type: "spring", stiffness: 200, damping: 25 },
  opacity: { duration: 0.5 },
  scale: { duration: 0.5 },
  filter: { duration: 0.5 },
};

/**
 * ------------------------------------------------------------------
 * PORTFOLIO SECTION
 * ------------------------------------------------------------------
 * Interactive portfolio slider displaying selected projects.
 * Supports:
 * - swipe navigation
 * - button navigation
 * - animated transitions
 */
export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const t = useTranslations("portfolio.projects");
  /**
   * ------------------------------------------------------------------
   * PROJECT CONFIGURATION
   * ------------------------------------------------------------------
   */
  const projects = [
    {
      id: "01",
      title: t("project1.title"),
      label: "MOBILE ARCHITECTURE",
      description: t("project1.description"),
      image: "/images/smokins_banner.png",
      href: "/portfolio/smokins-app",
      alt: t("project1.images_alt"),
    },
    {
      id: "02",
      title: t("project2.title"),
      label: "UI ENGINEERING",
      description: t("project2.description"),
      image: "/images/blitzform_banner.png",
      href: "/portfolio/blitzform",
      alt: t("project2.images_alt"),
    },
    {
      id: "03",
      title: t("project3.title"),
      label: "INTERACTIVE EXPERIENCE",
      description: t("project3.description"),
      image: "/images/sidequests_banner.webp",
      href: "/portfolio/side-quests",
      alt: t("project3.images_alt"),
    },
  ];

  /**
   * ------------------------------------------------------------------
   * NAVIGATION HANDLERS
   * ------------------------------------------------------------------
   */
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  const goTo = useCallback(
    (target) => {
      setDirection(target > currentIndex ? 1 : -1);
      setCurrentIndex(target);
    },
    [currentIndex]
  );

  const handleDragEnd = useCallback(
    (_, info) => {
      if (info.offset.x < -DRAG_THRESHOLD) handleNext();
      if (info.offset.x > DRAG_THRESHOLD) handlePrev();
    },
    [handleNext, handlePrev]
  );

  return (
    <section className="fixed inset-0 h-dvh w-screen overflow-hidden flex flex-col py-32">
      <div className="relative flex-1 min-h-0 w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transitionConfig}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full h-full max-w-7xl flex cursor-grab active:cursor-grabbing px-6 mx-auto"
          >
            <PortfolioCard
              project={projects}
              index={currentIndex}
              buttonText={t("navigation.button")}
            />
          </motion.div>
        </AnimatePresence>

        <PortfolioNavigation
          index={currentIndex}
          total={projects.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onSelect={goTo}
          nextText={t("navigation.next")}
          prevText={t("navigation.prev")}
        />
      </div>
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * PORTFOLIO CARD
 * ------------------------------------------------------------------
 */
function PortfolioCard({ project, index, buttonText }) {
  return (
    <div className="relative w-full h-full glass-card rounded-[40px] overflow-hidden group flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden">
        <motion.img
          layoutId={`img-${index}`}
          src={project[index].image}
          alt={project[index].alt}
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 scale-110 group-hover:scale-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-bg-dark/80 via-transparent to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 via-transparent to-transparent md:hidden" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-michroma text-[0.5rem] tracking-[0.25rem] text-primary-aqua mb-4 block uppercase">
            {project[index].label}
          </span>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none mb-8">
            {project[index].title}
          </h3>
          <p className="text-white/50 font-light leading-relaxed mb-10 text-sm md:text-base">
            {project[index].description}
          </p>

          <TransitionLink href={project[index].href} className="self-start">
            <Button className="text-xl">{buttonText}</Button>
          </TransitionLink>

          {/* <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-primary-pink text-xs font-mono tracking-widest uppercase group/btn"
          >
            <span>{buttonText}</span>
          </motion.button> */}
        </motion.div>
      </div>

      {/* Slide Index */}
      <div className="absolute top-8 right-12 font-mono text-4xl text-white/5 opacity-20 select-none">
        {project[index].id}
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * NAVIGATION
 * ------------------------------------------------------------------
 */
function PortfolioNavigation({
  index,
  total,
  onPrev,
  onNext,
  onSelect,
  nextText,
  prevText,
}) {
  return (
    <div className="absolute bottom-[-35px] md:bottom-[-70px] left-1/2 -translate-x-1/2 flex items-center gap-16 w-max">
      <button
        onClick={onPrev}
        className="group flex items-center gap-4 text-n-1/30 hover:text-white transition-colors"
      >
        <div className="w-12 h-px bg-n-1/10 group-hover:bg-primary-pink transition-colors" />
        <span className="font-mono text-[10px] tracking-widest uppercase">
          {prevText}
        </span>
      </button>

      <div className="flex gap-4">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="relative w-2 h-2 rounded-full bg-white/10 overflow-hidden"
          >
            {index === i && (
              <motion.div
                layoutId="portfolio-dot"
                className="absolute inset-0 bg-n-1"
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="group flex items-center gap-4 text-white/30 hover:text-white transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">
          {nextText}
        </span>
        <div className="w-12 h-px bg-white/10 group-hover:bg-primary-aqua transition-colors" />
      </button>
    </div>
  );
}
