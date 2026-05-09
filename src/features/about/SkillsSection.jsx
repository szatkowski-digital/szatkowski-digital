"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const SkillsSection = ({ t }) => {
  return (
    <section className="mx-auto">
      <SectionHeader number={t.header.number} title={t.header.title} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.items.map((skill, index) => {
          const IconComponent = Icons[skill.icon] || Icons.Code2;

          return (
            <SkillCard
              key={index}
              icon={IconComponent}
              title={skill.title}
              desc={skill.desc}
              delay={index * 0.1}
            />
          );
        })}
      </div>
    </section>
  );
};

const SkillCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 rounded-2xl group hover:border-primary-aqua/30 transition-colors duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-aqua/10 transition-colors duration-500">
        <Icon className="w-6 h-6 text-primary-aqua" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
};
