"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  registerPageTransition,
  unregisterPageTransition,
} from "@/hooks/pageTransitions";

export default function MainTransition({ children }) {
  const [exit, setExit] = useState(false);
  const resolveRef = useRef(null);
  const mainRef = useRef(null);

  const [origin, setOrigin] = useState("50% 50%");

  useEffect(() => {
    const updateOrigin = () => {
      if (!mainRef.current) return;

      const rect = mainRef.current.getBoundingClientRect();

      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      const originX = viewportCenterX - rect.left;
      const originY = viewportCenterY - rect.top;

      setOrigin(`${originX}px ${originY}px`);
    };

    updateOrigin();
    window.addEventListener("resize", updateOrigin);
    window.addEventListener("scroll", updateOrigin);

    return () => {
      window.removeEventListener("resize", updateOrigin);
      window.removeEventListener("scroll", updateOrigin);
    };
  }, []);

  useEffect(() => {
    registerPageTransition(() => {
      return new Promise((resolve) => {
        resolveRef.current = resolve;
        setExit(true);
      });
    });

    return () => unregisterPageTransition();
  }, []);

  return (
    <motion.main
      ref={mainRef}
      style={{ transformOrigin: origin }}
      animate={{
        opacity: exit ? 0 : 1,
        scale: exit ? 0.95 : 1,
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 1, 1] }}
      onAnimationComplete={() => {
        if (exit && resolveRef.current) {
          resolveRef.current();
          resolveRef.current = null;
        }
      }}
    >
      {children}
    </motion.main>
  );
}
