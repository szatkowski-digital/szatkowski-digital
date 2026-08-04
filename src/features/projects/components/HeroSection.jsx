"use client";

import { slideUp2, staggerContainer } from "@/animations/motionVariants";
import TechBadge from "@/components/ui/TechBadge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({ t, src, tech }) {
  const { alt, title, description, keywords } = t;

  return (
    <section className="shell-bleed min-h-screen max-lg:pt-24 flex flex-col-reverse lg:flex-row overflow-hidden justify-center items-center gap-16">
      {/* IMAGE SIDE */}
      <div className="w-full lg:w-4/7 lg:py-32 flex items-center justify-center">
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 86% 100%, 0 100%)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.755, 0.05, 0.855, 0.06],
            delay: 0.3,
          }}
          className="
            relative
            w-full
            h-60
            lg:h-[calc(100vh-16rem)]
            xl:h-[calc(100vh-18rem)]
            2xl:h-[calc(100vh-24rem)]
            max-h-225
            overflow-hidden
          "
        >
          <Image
            src={src}
            width={1100}
            height={900}
            alt={alt}
            priority
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>

      {/* TEXT SIDE */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="enter"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center lg:items-end w-full lg:w-3/7 text-center lg:text-right max-lg:px-6 lg:pr-16 xl:pr-24 gap-4 md:gap-6"
      >
        <motion.h1 variants={slideUp2} className="h1 uppercase pb-6">
          {title}
        </motion.h1>

        <motion.div variants={slideUp2}>
          <TechBadge tech={tech} />
        </motion.div>

        <motion.p variants={slideUp2} className="body-lg max-w-xl text-n-1">
          {description}
        </motion.p>

        <motion.p
          variants={slideUp2}
          className="body-sm text-sm font-mono text-n-4 font-medium"
        >
          {keywords}
        </motion.p>
      </motion.div>
    </section>
  );
}
