"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PixelFallBg({
  colorStart = "#00F2FE",
  colorEnd = "#4FACFE",
}) {
  const [pixels, setPixels] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const types = [
      { w: 32, h: 32 }, // Mały kwadrat (z 16)
      { w: 64, h: 64 }, // Duży kwadrat (z 32)
      { w: 32, h: 86 }, // Pionowy prostokąt (z 16x48)
      { w: 86, h: 32 }, // Poziomy prostokąt (z 48x16)
    ];

    const generatePixels = () =>
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        left: `${Math.random() * 100}%`,
        // Rozrzut startowy na całym ekranie
        delay: Math.random() * -80,
        duration: 50 + Math.random() * 40,
        opacity: 0.08 + Math.random() * 0.2,
        colorType: Math.random() > 0.5 ? "start" : "end",
      }));

    setPixels(generatePixels());
  }, []);

  if (!isMounted) return <div className="absolute inset-0 -z-10" />;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40 blur-sm">
      <div className="relative w-full h-full">
        <AnimatePresence>
          {pixels.map((px) => (
            <motion.div
              key={px.id}
              initial={{ y: "-20vh", opacity: 0 }}
              animate={{
                y: "120vh",
                opacity: [0, px.opacity, px.opacity, 0],
                // Płynna animacja zmiany koloru (bez przeskoku)
                backgroundColor:
                  px.colorType === "start" ? colorStart : colorEnd,
                boxShadow: `0 0 20px ${px.colorType === "start" ? colorStart : colorEnd}15`,
              }}
              transition={{
                y: {
                  duration: px.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: px.delay,
                },
                opacity: {
                  duration: px.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: px.delay,
                },
                // Transition dla koloru przy zmianie indexu
                backgroundColor: { duration: 2.5, ease: "easeInOut" },
                boxShadow: { duration: 2.5, ease: "easeInOut" },
              }}
              style={{
                position: "absolute",
                left: px.left,
                width: `${px.type?.w || 24}px`,
                height: `${px.type?.h || 24}px`,
                willChange: "transform",
              }}
              className="border border-white/[0.07] rounded-[1px] mix-blend-lighten"
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
