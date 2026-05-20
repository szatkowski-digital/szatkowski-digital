"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export const PhilosophySection = ({ t }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = (latest) => {
      if (latest <= 0 || latest >= 1) {
        setActiveIndex(-1);
      } else if (latest < 0.25) {
        setActiveIndex(0);
      } else if (latest < 0.5) {
        setActiveIndex(1);
      } else if (latest < 0.75) {
        setActiveIndex(2);
      } else {
        setActiveIndex(3);
      }
    };

    update(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", update);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="shell-bleed relative h-auto md:h-[400vh]"
    >
      <div className="relative md:sticky top-0 h-auto md:h-screen w-full flex flex-col md:flex-row overflow-hidden">
        <div className="hidden md:flex w-full h-full">
          {t.items.map((item, i) => (
            <PhilosophyPanel
              key={i}
              item={item}
              index={i}
              activeIndex={activeIndex}
              discoverLabel={t.discoverLabel}
            />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col w-full">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-8 p-10 border-b border-n-1/5 min-h-[40vh] justify-center"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-[0.4em] text-primary-aqua uppercase">
                  {item.label}
                </span>

                <span className="font-mono text-xs text-n-1/20">0{i + 1}</span>
              </div>

              <h3 className="text-4xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
                {item.q}
              </h3>

              <p className="text-n-1/50 font-light leading-relaxed text-sm">
                {item.s}
              </p>

              <div className="flex items-center gap-3 text-primary-pink text-[10px] font-mono uppercase tracking-widest pt-4">
                <span>{t.exploreLabel}</span>

                <ArrowDown className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhilosophyPanel = ({ item, index, activeIndex, discoverLabel }) => {
  const isActive = activeIndex === index;
  const isStarted = activeIndex !== -1;

  // Determine width based on state
  // If not started: 25%
  // If started: active 55%, others 15%
  const targetWidth = !isStarted ? "25%" : isActive ? "55%" : "15%";
  const targetOpacity = !isStarted ? 0.6 : isActive ? 1 : 0.3;
  const targetContentOpacity = isActive ? 1 : 0;
  const targetScale = isActive ? 1 : 0.9;
  const targetContentY = isActive ? 0 : 30;

  return (
    <motion.div
      initial={false}
      animate={{
        width: targetWidth,
        opacity: targetOpacity,
      }}
      transition={{
        duration: 3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative h-full flex flex-col border-r border-y border-n-1/10 overflow-hidden group"
    >
      {/* Background Accent Glow */}
      <motion.div
        animate={{ opacity: targetContentOpacity }}
        className="absolute inset-0 bg-linear-to-br from-primary-pink/10 to-transparent pointer-events-none"
      />

      {/* Main Container */}
      <div className="absolute top-0 left-0 h-full w-full md:w-[55vw] p-8 md:p-20 lg:pt-32 flex flex-col justify-between z-10">
        <div className="flex justify-start items-center gap-2 w-full md:w-auto">
          <motion.span
            animate={{ opacity: targetOpacity }}
            className="font-mono text-[10px] tracking-[0.5em] text-primary-aqua group-hover:text-primary-aqua/50 uppercase transition-colors duration-500"
          >
            {item.label}
          </motion.span>
        </div>

        <motion.div
          animate={{ scale: targetScale, y: targetContentY }}
          className="origin-left"
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-4xl md:text-[clamp(3rem,6vw,8rem)] font-display font-bold uppercase tracking-tighter leading-[0.8] mb-10">
            {item.q.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          <motion.div
            animate={{ opacity: targetContentOpacity }}
            className="space-y-6"
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm md:text-xl text-n-1/50 font-light max-w-md leading-relaxed">
              {item.s}
            </p>

            <div className="flex items-center gap-4 text-primary-pink text-xs font-mono tracking-widest uppercase">
              <span>{discoverLabel}</span>

              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center gap-6">
          <div className="h-px grow bg-n-1/10" />

          <span className="font-mono text-xs text-n-1/30 tabular-nums">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Active Indicator Line */}
      <motion.div
        animate={{
          opacity: targetContentOpacity,
          scaleX: isActive ? 1 : 0,
        }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary-pink via-primary-aqua to-primary-pink bg-size-[200%_100%] animate-gradient-x origin-left"
      />
    </motion.div>
  );
};
