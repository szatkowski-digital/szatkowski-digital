"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { getProjects } from "@/data/projects";

import { PortfolioNavigation } from "./PortfolioNavigation";
import { slideUpFast } from "@/animations/motionVariants";
import ProjectsCarousel from "./ProjectsCarousel";
import { useCarousel } from "./hooks/usePortfolio";

export default function Portfolio() {
  const t = useTranslations("portfolio.projects");
  const projects = getProjects(t);
  const total = projects.length;

  const { carouselProps, navigationProps } = useCarousel({ total });

  return (
    <section className="app-screen pt-20 pb-30 md:py-[clamp(5.5rem,15dvh,10rem)] ">
      <motion.div
        variants={slideUpFast}
        initial="initial"
        animate="enter"
        className="shell-bleed relative h-[clamp(30rem,75dvh,50rem)] md:h-[clamp(25rem,70dvh,40rem)] flex flex-col items-center justify-center gap-[clamp(1rem,3dvh,2rem)]"
      >
        <ProjectsCarousel
          carouselProps={carouselProps}
          projects={projects}
          t={t}
        />

        <PortfolioNavigation navigationProps={navigationProps} t={t} />
      </motion.div>
    </section>
  );
}
