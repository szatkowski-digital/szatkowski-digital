import { memo } from "react";
import { motion } from "framer-motion";
import { TransitionLink } from "@/components/utils/TransitionLink";
import Button from "@/components/ui/Button";

export const PortfolioCard = memo(({ project, index, buttonText }) => {
  return (
    <div className="relative w-full h-full glass-card rounded-[40px] overflow-hidden group flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="relative w-full md:w-3/5 h-1/3 md:h-auto overflow-hidden">
        <motion.img
          layoutId={`img-${index}`}
          src={project[index].image}
          alt={project[index].alt}
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 scale-110 group-hover:scale-100"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-linear-to-r from-bg-dark/80 via-transparent to-transparent hidden md:block" />

        <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 via-transparent to-transparent md:hidden" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/5 h-2/3 md:h-full z-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col h-full w-full align-center justify-center gap-[clamp(.5rem,5%,1.5rem)] p-8 md:p-12"
        >
          <span className="font-michroma text-[0.5rem] tracking-[0.25rem] text-primary-aqua block uppercase">
            {project[index].label}
          </span>

          <h2 className="text-4xl md:text-[clamp(2rem,4.5vw,4rem)] font-display font-bold uppercase tracking-tighter leading-none">
            {project[index].title}
          </h2>

          <p className="text-white/50 font-light leading-relaxed mb-4 md:mb-2 text-sm lg:text-base">
            {project[index].description}
          </p>

          <TransitionLink href={project[index].href} className="self-start">
            <Button className="text-xl lg:text-lg 2xl:text-xl">
              {buttonText}
            </Button>
          </TransitionLink>
        </motion.div>
      </div>

      {/* Slide Index */}
      <div className="absolute top-8 right-12 font-mono text-6xl text-white/5 opacity-20 select-none">
        {project[index].id}
      </div>
    </div>
  );
});

PortfolioCard.displayName = "PortfolioCard";
