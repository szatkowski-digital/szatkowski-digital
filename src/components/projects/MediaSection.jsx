"use client";
import { motion } from "framer-motion";

export default function MediaSection({
  media,
  title,
  description,
  bottomText,
}) {
  return (
    <section className="container py-12 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-16 gap-y-24">
        {/* LEFT — MEDIA */}
        <div className="lg:col-span-3 w-full">{media}</div>

        {/* RIGHT — SIDEBAR */}
        <motion.div
          className="w-full max-w-sm"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {title && <h3 className="h3 mb-4">{title}</h3>}
          {description && (
            <p className="body-sm text-white/70">{description}</p>
          )}
        </motion.div>

        {/* BOTTOM TEXT */}
        {bottomText && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:col-span-3"
          >
            <p className="h5 text-n-1 text-start">{bottomText}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
