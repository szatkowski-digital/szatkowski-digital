"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SectionHeader = ({ number, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="flex flex-col mb-12 md:mb-20">
      <div className="flex items-baseline gap-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 0.4, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-2xl md:text-4xl text-n-1/50"
        >
          /{number}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-bold uppercase tracking-tighter"
        >
          {title}
        </motion.h2>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-px bg-n-1/10 mt-6 origin-left"
      />
    </div>
  );
};
