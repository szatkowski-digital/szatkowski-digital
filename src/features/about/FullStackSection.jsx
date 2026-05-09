"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const TechStackSection = ({ t }) => {
  return (
    <section className="mx-auto">
      <SectionHeader number={t.header.number} title={t.header.title} />
      <div className="flex flex-wrap gap-4 max-w-4xl">
        {t.technologies.map((tech) => (
          <TechBadge key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};

const TechBadge = ({ tech }) => (
  <motion.a
    href={tech.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.05,
      backgroundColor: "rgba(255,255,255,0.08)",
      borderColor: "rgba(255,255,255,0.3)",
    }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 rounded-full border border-n-1/10 bg-n-1/5 text-sm font-mono tracking-wider transition-colors duration-300 flex items-center gap-2 group"
  >
    <span className="text-white/70 group-hover:text-white transition-colors">
      {tech.name}
    </span>

    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-px">
      ↗
    </span>
  </motion.a>
);
