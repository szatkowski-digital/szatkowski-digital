"use client";

import { rotate90Left } from "@/animations/motionVariants";
import { motion } from "framer-motion";

export default function MediaSection({ t, media }) {
  const { title, description, bottomText } = t;

  return (
    <section className="py-12 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-16 gap-y-12 lg:gap-y-24 ">
        {/* LEFT - MEDIA */}
        <div className="lg:col-span-3 w-full">{media}</div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full max-w-sm">
          {title && <h6 className="h6 font-bold mb-4">{title}</h6>}
          {description && (
            <p className="body-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* BOTTOM TEXT */}
        {bottomText && (
          <motion.div
            variants={rotate90Left}
            initial="initial"
            whileInView="enter"
            viewport={{ once: true }}
            className="lg:col-span-3 perspective-[1000px]"
          >
            <p className="h5 font-michroma text-start font-bold transform-3d">
              {bottomText}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
