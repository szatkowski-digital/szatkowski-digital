"use client";

import { slideUpFast } from "@/animations/motionVariants";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = ({ t }) => {
  return (
    <section className="relative h-screen mx-auto flex flex-col justify-center items-center">
      <motion.div
        variants={slideUpFast}
        initial="initial"
        animate="enter"
        className="flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="text-xs font-mono uppercase tracking-[0.4em] mb-8 text-n-1/50"
        >
          {t.subtitle}
        </motion.span>

        <h1 className="text-6xl md:text-[10vw] font-bold leading-[0.9] tracking-tighter uppercase mb-12">
          {t.title_line1} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-pink via-n-1 to-primary-aqua">
            {t.title_gradient}
          </span>{" "}
          <br />
          {t.title_line2}
        </h1>

        <p className="max-w-xl text-sm md:text-lg text-n-1/50 leading-relaxed font-light">
          {t.description}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className=""
        >
          {/* <div className="w-px h-24 bg-linear-to-b from-primary-pink to-transparent mx-auto" /> */}
          <HeroShapes />
        </motion.div>
      </motion.div>
    </section>
  );
};

const HeroShapes = () => {
  const { scrollY } = useScroll();

  const yContainer = useTransform(scrollY, [0, 500], [0, -200]);
  const scaleContainer = useTransform(scrollY, [0, 500], [1, 2]);
  const opacityContainer = useTransform(scrollY, [0, 500], [1, 0]);

  const xLeft = useTransform(scrollY, [0, 500], [-120, -200]);
  const xRight = useTransform(scrollY, [0, 500], [120, 200]);

  return (
    <motion.div
      style={{
        y: yContainer,
        scale: scaleContainer,
        opacity: opacityContainer,
      }}
      className="relative w-full h-64 mx-auto flex items-center justify-center"
    >
      {/* Pink Square (Left) */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: -120, rotate: -30 }}
        animate={{ opacity: 1, y: 0, x: -120, rotate: -15 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: xLeft }}
        className="absolute w-28 h-28 md:w-32 md:h-32 bg-primary-pink shadow-2xl blur-[1px] rounded-xl"
      />

      {/* Red Square (Middle) */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: 0 }}
        animate={{ opacity: 1, y: -20, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-32 h-32 md:w-36 md:h-36 bg-primary-aqua shadow-2xl blur-[1px] z-10 rounded-xl"
      />

      {/* Teal Square (Right) */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: 120, rotate: 30 }}
        animate={{ opacity: 1, y: 0, x: 120, rotate: 15 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: xRight }}
        className="absolute w-28 h-28 md:w-32 md:h-32 bg-primary-red shadow-2xl blur-[1px] rounded-xl"
      />
    </motion.div>
  );
};
