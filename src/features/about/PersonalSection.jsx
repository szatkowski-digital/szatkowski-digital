"use client";
import { motion } from "framer-motion";

export const PersonalSection = ({ t }) => {
  return (
    <section className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <span className="text-xs font-mono text-primary-pink/50 uppercase tracking-widest mb-6 block">
          {t.subtitle}
        </span>
        <p className="text-xl text-white/50 italic font-light">"{t.quote}"</p>
      </motion.div>
    </section>
  );
};
