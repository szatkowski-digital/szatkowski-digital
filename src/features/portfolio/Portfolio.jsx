"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { slideVariants, transitionConfig } from "./constants";
import { PortfolioNavigation } from "./PortfolioNavigation";
import { PortfolioCard } from "./PortfolioCard";
import { getProjects } from "@/data/projects";
import { usePortfolio } from "./hooks/usePortfolio";
import { slideUpFast } from "@/animations/motionVariants";

/* PORTFOLIO SECTION */
export default function Portfolio() {
  const t = useTranslations("portfolio.projects");
  const projects = useMemo(() => getProjects(t), [t]);

  const {
    page,
    direction,
    currentIndex,
    handleNext,
    handlePrev,
    goTo,
    handleDragEnd,
  } = usePortfolio(projects.length);

  return (
    <section className="app-screen pt-20 pb-28 md:py-[clamp(6.5rem,20dvh,20rem)]">
      <motion.div
        variants={slideUpFast}
        initial="initial"
        animate="enter"
        className="shell relative h-[clamp(30rem,75dvh,50rem)] md:h-[clamp(25rem,60dvh,50rem)] flex flex-col items-center justify-center gap-[clamp(1rem,3dvh,2rem)]"
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transitionConfig}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={handleDragEnd}
            style={{ x: 0, touchAction: "pan-y" }}
            className="w-full h-full cursor-grab active:cursor-grabbing mx-auto items-center justify-center"
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
      </motion.div>

      {/* OPTIMALIZATION: IMAGES PRELOADING */}
      <div className="hidden" aria-hidden="true">
        {projects.map((p) => (
          <img key={p.id} src={p.image} alt="" />
        ))}
      </div>
    </section>
  );
}
