"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";

export default function TechStackSection({ t, onNextProject }) {
  const { categories, title, buttonText } = t;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y = useSpring(rawY, {
    stiffness: 160,
    damping: 30,
    mass: 0.3,
  });

  return (
    <section ref={ref} className="shell md:shell-bleed relative pb-36 md:pb-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* LEFT TECH STACK */}
        <motion.div
          style={{ y }}
          className="order-2 lg:order-1 w-full lg:w-1/2
            flex flex-col gap-8
            text-lg text-n-1
          "
        >
          {categories.map((item) => (
            <div key={item.step}>
              <strong className="block mb-2">
                {item.step} {item.title}
              </strong>
              <p className="body-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* RIGHT HERO / NEXT PROJECT */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center gap-8 text-center lg:text-right min-h-[30vh] lg:min-h-[60vh]">
          <h1 className="h1 font-bold max-w-xl">{title}</h1>

          <Button onClick={onNextProject}>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
