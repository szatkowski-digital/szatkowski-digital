"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";
import { useRef } from "react";

export default function TechStackSection() {
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
    <section ref={ref} className="container relative py-16 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* LEFT — TECH STACK */}
        <motion.div
          style={{ y }}
          className="
            order-2 lg:order-1
            flex flex-col gap-8
            text-lg text-n-1
            max-w-md
            mx-auto lg:mx-0
          "
        >
          <div>
            <strong className="block mb-2">01 Design & Strategy</strong>
            <p className="body-sm">
              UI/UX Design, Interactive Prototyping, Brand Identity
            </p>
          </div>

          <div>
            <strong className="block mb-2">02 Technical Stack</strong>
            <p className="body-sm">
              React Native, Expo SDK, JavaScript (ES6), NativeWind
            </p>
          </div>

          <div>
            <strong className="block mb-2">03 Backend & Infrastructure</strong>
            <p className="body-sm">
              Firebase / Google Cloud, Auth, Database, Deployment
            </p>
          </div>
        </motion.div>

        {/* RIGHT — HERO */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center gap-8 text-center lg:text-right min-h-[30vh] lg:min-h-[60vh]">
          <h1 className="h1 font-bold max-w-xl">Smokins Loyalty App</h1>

          <Button>Następny Projekt</Button>
        </div>
      </div>
    </section>
  );
}
