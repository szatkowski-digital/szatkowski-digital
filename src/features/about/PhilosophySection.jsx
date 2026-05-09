"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export const PhilosophySection = ({ t }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative h-auto md:h-[400vh] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
    >
      <div className="relative md:sticky top-0 h-auto md:h-screen w-full flex flex-col md:flex-row overflow-hidden">
        <div className="hidden md:flex w-full h-full">
          {t.items.map((item, i) => (
            <PhilosophyPanel
              key={i}
              item={item}
              index={i}
              scrollYProgress={smoothProgress}
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

const PhilosophyPanel = ({ item, index, scrollYProgress, discoverLabel }) => {
  const width = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? ["25%", "55%", "15%", "15%", "15%"]
      : index === 1
        ? ["25%", "15%", "55%", "15%", "15%"]
        : index === 2
          ? ["25%", "15%", "15%", "55%", "15%"]
          : ["25%", "15%", "15%", "15%", "55%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [1, 1, 0.3, 0.2, 0.2]
      : index === 1
        ? [0.8, 0.3, 1, 0.3, 0.2]
        : index === 2
          ? [0.6, 0.2, 0.3, 1, 0.3]
          : [0.4, 0.2, 0.2, 0.3, 1]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [1, 1, 0, 0, 0]
      : index === 1
        ? [0, 0, 1, 0, 0]
        : index === 2
          ? [0, 0, 0, 1, 0]
          : [0, 0, 0, 0, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [0, 0, 40, 40, 40]
      : index === 1
        ? [40, 40, 0, 40, 40]
        : index === 2
          ? [40, 40, 40, 0, 40]
          : [40, 40, 40, 40, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [1, 1, 0.85, 0.8, 0.8]
      : index === 1
        ? [0.9, 0.85, 1, 0.85, 0.8]
        : index === 2
          ? [0.85, 0.8, 0.85, 1, 0.85]
          : [0.8, 0.8, 0.8, 0.85, 1]
  );

  return (
    <motion.div
      style={{ width, opacity }}
      className="relative h-full flex flex-col border-r border-n-1/5 overflow-hidden group"
    >
      {/* Background Accent Glow */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-0 bg-linear-to-br from-primary-pink/5 to-transparent pointer-events-none"
      />

      {/* Main Container */}
      <div className="absolute top-0 left-0 h-full w-screen md:w-[55vw] p-8 md:p-20 lg:pt-48 flex flex-col justify-between z-10">
        <div className="flex justify-start items-center gap-2 w-full md:w-auto">
          <item.icon
            style={{ opacity: useTransform(opacity, [0.2, 1], [0.2, 1]) }}
            className="w-4 h-4 text-primary-aqua/40 group-hover:text-primary-aqua transition-colors duration-500"
          />

          <motion.span
            style={{ opacity: useTransform(opacity, [0.2, 1], [0.2, 1]) }}
            className="font-mono text-[10px] tracking-[0.5em] text-primary-aqua/40 group-hover:text-primary-aqua uppercase transition-colors duration-500"
          >
            {item.label}
          </motion.span>
        </div>

        <motion.div style={{ scale, y: contentY }} className="origin-left">
          <h3 className="text-4xl md:text-[clamp(3rem,6vw,8rem)] font-display font-bold uppercase tracking-tighter leading-[0.8] mb-10">
            {item.q.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          <motion.div style={{ opacity: contentOpacity }} className="space-y-6">
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

          <span className="font-mono text-xs text-white/30 tabular-nums">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Active Indicator Line */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary-pink via-primary-aqua to-primary-pink bg-size-[200%_100%] animate-gradient-x"
      />
    </motion.div>
  );
};
