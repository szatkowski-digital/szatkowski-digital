"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

/**
 * ------------------------------------------------------------------
 * CONSTANTS
 * ------------------------------------------------------------------
 */
const DRAG_THRESHOLD = 50;

/**
 * ------------------------------------------------------------------
 * PROJECT CONFIGURATION
 * ------------------------------------------------------------------
 */
const projects = [
  {
    id: "01",
    title: "SMOKINS APP",
    label: "MOBILE ARCHITECTURE",
    description:
      "A high-performance mobile application built with React Native and specialized for real-time data synchronization.",
    image: "/images/smokins_banner.png",
  },
  {
    id: "02",
    title: "BLITZFORM",
    label: "UI ENGINEERING",
    description:
      "An advanced form builder with a focus on speed, accessibility, and complex state management.",
    image: "/images/blitzform_banner.png",
  },
  {
    id: "03",
    title: "SIDE QUESTS",
    label: "INTERACTIVE EXPERIENCE",
    description:
      "A gamified platform designed to encourage daily productivity through immersive digital interactions.",
    image: "/images/sidequests_banner.webp",
  },
];

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
   * NAVIGATION HANDLERS
   * ------------------------------------------------------------------
   * Handles project switching through buttons or swipe gestures.
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
    <section className="py-32 overflow-hidden relative">
      <div className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
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
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              filter: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing px-6"
          >
            <div className="relative w-full max-w-7xl h-full md:h-137.5 glass-card rounded-4xl overflow-hidden group flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden">
                <motion.img
                  layoutId={`img-${currentIndex}`}
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
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
                  <span className="font-mono text-[10px] tracking-[0.5em] text-primary-aqua mb-4 block uppercase">
                    {projects[currentIndex].label}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none mb-8">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-white/50 font-light leading-relaxed mb-10 text-sm md:text-base">
                    {projects[currentIndex].description}
                  </p>

                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-primary-pink text-xs font-mono tracking-widest uppercase group/btn"
                  >
                    <span>View Project</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Slide Index */}
              <div className="absolute top-8 right-12 font-mono text-4xl text-white/5 opacity-20 select-none">
                {projects[currentIndex].id}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <PortfolioNavigation
          handleNext={handleNext}
          handlePrev={handlePrev}
          projects={projects}
          setDirection={setDirection}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * NAVIGATION
 * ------------------------------------------------------------------
 */
function PortfolioNavigation({
  handlePrev,
  handleNext,
  projects,
  setDirection,
  currentIndex,
  setCurrentIndex,
}) {
  return (
    <div className="absolute bottom-[-40px] md:bottom-[-80px] flex items-center gap-16">
      <button
        onClick={handlePrev}
        className="group flex items-center gap-4 text-n-1/30 hover:text-white transition-colors"
      >
        <div className="w-12 h-px bg-n-1/10 group-hover:bg-primary-pink transition-colors" />
        <span className="font-mono text-[10px] tracking-widest uppercase">
          Prev
        </span>
      </button>

      <div className="flex gap-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className="relative w-2 h-2 rounded-full bg-white/10 overflow-hidden"
          >
            {currentIndex === i && (
              <motion.div
                layoutId="portfolio-dot"
                className="absolute inset-0 bg-n-1"
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="group flex items-center gap-4 text-white/30 hover:text-white transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">
          Next
        </span>
        <div className="w-12 h-px bg-white/10 group-hover:bg-primary-aqua transition-colors" />
      </button>
    </div>
  );
}
