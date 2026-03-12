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
