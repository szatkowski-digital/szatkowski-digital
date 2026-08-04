"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

import Button from "@/components/ui/Button";
import { ScrollFloatingPixels } from "@/components/ui/FloatingPixels";
import { slideUp2, staggerContainer } from "@/animations/motionVariants";

export const HeroSection = ({ t }) => {
  const heroRef = useRef(null);

  const scrollTowhoAmI = () => {
    const whoAmISection = document.getElementById("who-am-i");
    if (whoAmISection) {
      whoAmISection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} className="shell-bleed relative pt-28">
      <ScrollFloatingPixels sectionRef={heroRef} pixels={heroPixels} />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="enter"
        className="shell text-center"
      >
        {/* Main Title */}
        <motion.h1 variants={slideUp2} className="h1 uppercase mb-8">
          {t?.title_line1} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-pink via-n-1 to-primary-aqua">
            {t?.title_gradient}
          </span>{" "}
          <br />
          {t?.title_line2}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={slideUp2}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          {t?.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={slideUp2}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            onClick={scrollTowhoAmI}
            showArrow={true}
            className="text-xl lg:text-lg 2xl:text-xl"
          >
            {t?.button_more || "More about me"}
          </Button>

          <Button
            variant="glow"
            className="text-xl lg:text-lg 2xl:text-xl"
            onClick={() => {
              window.open(
                "https://github.com/szatkowski-digital",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            {t?.button_github || "Review My Github"}
            <Github className="w-4 h-4 ml-3" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const heroPixels = [
  {
    type: "square",
    color: "pink",
    size: 16,
    top: "15%",
    left: "10%",
    startX: -140,
    endX: 60,
    startY: -60,
    endY: 120,
  },
  {
    type: "rect",
    color: "aqua",
    size: 12,
    bottom: "25%",
    right: "8%",
    startX: 180,
    endX: -40,
    startY: 120,
    endY: -120,
  },
  {
    type: "square",
    color: "red",
    size: 20,
    top: "40%",
    right: "15%",
    startX: 220,
    endX: -100,
    startY: -90,
    endY: 90,
  },
];
