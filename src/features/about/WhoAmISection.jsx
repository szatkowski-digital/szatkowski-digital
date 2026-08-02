"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const WhoAmISection = ({ t }) => {
  return (
    <section id="who-am-i" className="pt-28">
      <SectionHeader number={t.number} title={t.title} />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <p className="text-2xl md:text-4xl font-light leading-tight">
          {t.mainStatement}
        </p>
        <div className="space-y-6 text-white/60 leading-relaxed">
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>

          <div className="flex gap-4 pt-4">
            <SocialLink
              href="https://github.com/szatkowski-digital"
              icon={Github}
            />
            <SocialLink
              href="https://www.linkedin.com/in/pawe%C5%82-szatkowski-776959183/"
              icon={Linkedin}
            />
            <SocialLink
              href="https://www.instagram.com/szatkowski_digital/"
              icon={Instagram}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub profile"
      className="text-white/60 hover:text-primary-pink transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};
