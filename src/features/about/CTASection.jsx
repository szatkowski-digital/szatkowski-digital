"use client";

import { motion } from "framer-motion";

import { TransitionLink } from "@/components/utils/TransitionLink";
import Button from "@/components/ui/Button";

export const CTASection = ({ t }) => {
  return (
    <section className="pb-32 mx-auto">
      <div className="glass-card p-12 md:p-24 rounded-[40px] text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-pink to-primary-aqua" />

        <motion.h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-12 tracking-tighter">
          {t.title1} <br />
          <span className="text-primary-aqua">{t.title2}</span>
        </motion.h2>

        <TransitionLink href="/contact">
          <Button
            color="primary-aqua"
            className="text-xl lg:text-lg 2xl:text-xl"
          >
            {t.buttonLabel}
          </Button>
        </TransitionLink>

        <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
          <p className="md:text-left">{t.footer.left}</p>
          <p className="text-center">{t.footer.middle}</p>
          <p className="md:text-right">{t.footer.right}</p>
        </div>
      </div>
    </section>
  );
};
