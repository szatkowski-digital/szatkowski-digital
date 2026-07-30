"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export const CoreCapabilitiesSection = ({ t }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let newIndex = -1;
    if (latest > 0 && latest < 1) {
      if (latest < 1 / 3) newIndex = 0;
      else if (latest < 2 / 3) newIndex = 1;
      else newIndex = 2;
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <section ref={containerRef} className="relative h-auto md:h-[300vh]">
      <div className="hidden md:block sticky top-28 h-[calc(100vh-7rem-3.5rem)] w-full">
        <div className="flex w-full h-full border border-n-1/10 rounded-4xl overflow-hidden relative bg-n-8/50 backdrop-blur-sm z-10">
          {t.items.map((item, i) => (
            <CapabilityPanel
              key={item.id || i}
              item={item}
              index={i}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col w-full py-6">
        <div className="flex flex-col border border-n-1/10 rounded-3xl overflow-hidden bg-n-8/50 backdrop-blur-sm divide-y divide-n-1/10">
          {t.items.map((item, i) => (
            <div
              key={item.id || i}
              className="relative flex flex-col gap-6 p-6 sm:p-8 justify-center overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute top-1/2 -translate-y-1/2 right-[-5%] text-[8rem] font-display font-bold text-n-1/3 select-none pointer-events-none leading-none z-0"
              >
                0{i + 1}
              </div>

              <div className="relative z-10 flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-[0.4em] text-primary-aqua uppercase">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-n-1/20">0{i + 1}</span>
              </div>

              <h3 className="relative z-10 text-2xl sm:text-3xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
                {item.q}
              </h3>

              <p className="relative z-10 text-n-1/60 font-light leading-relaxed text-sm">
                {item.s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CapabilityPanel = ({ item, index, activeIndex }) => {
  const isActive = activeIndex === index;
  const isStarted = activeIndex !== -1;

  const targetWidth = !isStarted ? "33.33%" : isActive ? "60%" : "20%";
  const targetOpacity = !isStarted ? 0.6 : isActive ? 1 : 0.3;

  return (
    <motion.div
      initial={false}
      animate={{
        width: targetWidth,
        opacity: targetOpacity,
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative h-full flex flex-col border-r md:border-t-0 last:border-0 border-n-1/10 overflow-hidden group will-change-[width,opacity]"
    >
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isActive ? 1 : 0,
          x: isActive ? 0 : 30,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute top-12 right-[-8%] text-[25vw] font-display font-bold text-n-1/2 select-none pointer-events-none z-0 tracking-tighter leading-none will-change-transform"
      >
        0{index + 1}
      </motion.div>

      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-pink/5 via-transparent to-transparent pointer-events-none z-0"
        transition={{ duration: 0.8 }}
      />

      <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-center z-10">
        <motion.div
          animate={{
            y: isActive ? -64 : 0,
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <span className="font-mono text-[10px] tracking-[0.4em] text-primary-aqua uppercase opacity-80 whitespace-nowrap">
              {item.label}
            </span>
            <motion.div
              animate={{ width: isActive ? "3rem" : "0rem" }}
              className="h-px bg-primary-aqua/50"
              transition={{ duration: 0.8 }}
            />
          </div>

          <h3 className="text-3xl md:text-[clamp(2.2rem,4vw,5.5rem)] font-bold uppercase tracking-tighter leading-[0.85] whitespace-pre-line">
            {item.q.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          <motion.div
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 16,
            }}
            transition={{
              duration: isActive ? 0.6 : 0.25,
              delay: isActive ? 0.2 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute top-full left-0 w-full lg:w-[28rem] max-w-[calc(100vw-8rem)] pt-6 md:pt-8 pointer-events-none"
          >
            <p className="text-sm md:text-lg text-n-1/60 font-light leading-relaxed pointer-events-auto">
              {item.s}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.3,
          scaleX: isActive ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-r from-primary-pink via-primary-aqua to-primary-pink bg-size-[200%_100%] animate-[gradient_3s_linear_infinite] origin-left"
      />
    </motion.div>
  );
};
