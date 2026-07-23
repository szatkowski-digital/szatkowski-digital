"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

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
      <div className="relative md:sticky top-0 h-auto md:h-screen w-full flex flex-col justify-center py-12 md:pt-28 md:mb-20">
        <div className="flex flex-col md:flex-row w-full h-[75vh] md:h-[80vh] border border-n-1/10 rounded-4xl overflow-hidden relative bg-n-8/50 backdrop-blur-sm">
          {/* Desktop Layout */}
          <div className="hidden md:flex w-full h-full z-10">
            {t.items.map((item, i) => (
              <CapabilityPanel
                key={i}
                item={item}
                index={i}
                activeIndex={activeIndex}
              />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col w-full h-full overflow-y-auto z-10">
            {t.items.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-6 p-8 border-b border-n-1/5 min-h-[40vh] justify-center overflow-hidden"
              >
                {/* Ucięty numer w tle (Mobile) */}
                <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] text-[10rem] font-display font-bold text-n-1/[0.03] select-none pointer-events-none leading-none">
                  0{i + 1}
                </div>

                <div className="relative z-10 flex justify-between items-center">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-primary-aqua uppercase">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-n-1/20">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative z-10 text-3xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
                  {item.q}
                </h3>

                <p className="relative z-10 text-n-1/50 font-light leading-relaxed text-sm">
                  {item.s}
                </p>
              </div>
            ))}
          </div>
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
  const targetContentOpacity = isActive ? 1 : 0;

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
      className="relative h-full flex flex-col border-r md:border-t-0 last:border-0 border-n-1/10 overflow-hidden group"
    >
      {/* Numer w tle – ustawiony wyżej po prawej */}
      <motion.div
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
        0{index + 2}
      </motion.div>

      {/* Tło Accent Glow */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        className="absolute inset-0 bg-linear-to-br from-primary-pink/5 via-transparent to-transparent pointer-events-none z-0"
        transition={{ duration: 0.8 }}
      />

      <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-center z-10">
        <motion.div
          animate={{
            y: isActive ? -24 : 0, // Delikatne uniesienie nagłówka w górę przy aktywacji
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl"
        >
          {/* Etykieta nad nagłówkiem */}
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

          {/* Główny Tytuł */}
          <h3 className="text-3xl md:text-[clamp(2.2rem,4vw,5.5rem)] font-bold uppercase tracking-tighter leading-[0.85] whitespace-pre-line">
            {item.q.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          {/* 
            Opis wyrzucony z przepływu za pomocą `absolute top-full`, 
            pojawia się poniżej wycentrowanego nagłówka.
          */}
          <motion.div
            animate={{
              opacity: targetContentOpacity,
              y: isActive ? 0 : 16,
            }}
            transition={{
              duration: 0.6,
              delay: isActive ? 0.25 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute top-full left-0 w-full pt-6 md:pt-8 pointer-events-none"
          >
            <p className="text-sm md:text-lg text-n-1/60 font-light max-w-md leading-relaxed pointer-events-auto">
              {item.s}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Wskaźnik Aktywności na dole */}
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.3,
          scaleX: isActive ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-primary-pink via-primary-aqua to-primary-pink bg-[length:200%_100%] animate-[gradient_3s_linear_infinite] origin-left"
      />
    </motion.div>
  );
};
