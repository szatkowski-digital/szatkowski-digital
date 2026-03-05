"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({
  src,
  alt,
  title,
  description,
  keywords,
}) {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] max-lg:pt-24 flex flex-col-reverse lg:flex-row overflow-hidden justify-center items-center gap-16">
      {/* IMAGE SIDE */}
      <div className="w-full lg:w-4/7 lg:py-32 flex items-center justify-center">
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.755, 0.05, 0.855, 0.06],
            delay: 0.3,
          }}
          className="
            relative
            w-full
            h-80
            lg:h-[calc(100vh-16rem)]
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
      <div className="flex flex-col justify-center items-center lg:items-end w-full lg:w-3/7 text-center lg:text-right max-lg:px-6 lg:pr-16 xl:pr-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h1 font-bold"
        >
          {title}
        </motion.h1>
        <p className="body-lg mt-6 max-w-xl text-n-1">{description}</p>
        <p className="body-sm mt-4 text-n-4">{keywords}</p>
      </div>
    </section>
  );
}
