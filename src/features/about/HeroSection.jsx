"use client";

import { slideUpFast } from "@/animations/motionVariants";
import { motion } from "framer-motion";

export const HeroSection = ({ t }) => {
  return (
    <section className="relative h-screen mx-auto flex flex-col justify-center items-center">
      <motion.div
        variants={slideUpFast}
        initial="initial"
        animate="enter"
        className="flex flex-col items-center text-center"
      >
        <div className="overflow-hidden mb-8">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 0.5 }}
            transition={{ delay: 0.5 }}
            className="block text-xs font-mono uppercase tracking-[0.4em] text-n-1 origin-bottom"
          >
            {t.subtitle}
          </motion.span>
        </div>

        <h1 className="text-6xl md:text-[10vw] font-bold leading-[0.9] tracking-tighter uppercase mb-8">
          {t.title_line1} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-pink via-n-1 to-primary-aqua">
            {t.title_gradient}
          </span>{" "}
          <br />
          {t.title_line2}
        </h1>

        <p className="max-w-xl text-sm md:text-lg text-n-1/50 leading-relaxed font-light mb-8">
          {t.description}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-px h-24 bg-linear-to-b from-primary-pink to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
};
