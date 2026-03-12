"use client";
import { useEffect, useRef, useState } from "react";
import {
  registerPageTransition,
  unregisterPageTransition,
} from "@/hooks/pageTransitions";

export function usePageExit() {
  const [exit, setExit] = useState(false);
  const resolveRef = useRef(null);

  useEffect(() => {
    const transition = () =>
      new Promise((resolve) => {
        resolveRef.current = resolve;
        setExit(true);
      });

    registerPageTransition(transition);

    return () => unregisterPageTransition();
  }, []);

  const handleAnimationComplete = () => {
    if (exit && resolveRef.current) {
      resolveRef.current();
      resolveRef.current = null;
    }
  };

  return {
    exit,
    onAnimationComplete: handleAnimationComplete,
  };
}
