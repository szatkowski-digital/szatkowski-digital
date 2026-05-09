"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const WhoAmISection = ({ t }) => {
  return (
    <section className="mx-auto">
      <SectionHeader number={t.number} title={t.title} />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-light leading-tight"
        >
          {t.mainStatement}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-white/60 leading-relaxed"
        >
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
          <div className="flex gap-4 pt-4">
            <Github className="w-5 h-5 hover:text-brand-pink cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-brand-teal cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 hover:text-brand-red cursor-pointer transition-colors" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
