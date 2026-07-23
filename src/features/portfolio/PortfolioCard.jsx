import { motion } from "framer-motion";
import { TransitionLink } from "@/components/utils/TransitionLink";
import Button from "@/components/ui/Button";

export const PortfolioCard = ({
  project,
  index,
  isCurrentActive,
  buttonText,
}) => {
  return (
    <div className="relative w-full min-w-25 h-full glass-card rounded-[40px] overflow-hidden group flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="relative w-full md:w-3/5 h-1/3 md:h-auto overflow-hidden">
        <motion.img
          layoutId={`img-${index}`}
          src={project.image}
          alt={project.alt || project.title}
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
          animate={
            isCurrentActive ? { opacity: 1, x: 0 } : { opacity: 0.4, x: 10 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col h-full w-full items-start justify-center gap-[clamp(.5rem,4%,1.5rem)] p-8 md:p-12"
        >
          <span className="font-michroma text-[0.5rem] tracking-[0.25rem] text-primary-aqua block uppercase">
            {project.label}
          </span>

          <h2 className="text-4xl md:text-[clamp(1.5rem,3.5vw,4rem)] font-display font-bold uppercase tracking-tighter leading-none">
            {project.title}
          </h2>

          <TechBadge tech={project.technologies} />

          <p className="text-n-1/60 text-sm lg:text-base">
            {project.description}
          </p>

          <TransitionLink href={project.href} className="self-start mt-4">
            <Button className="text-xl lg:text-lg 2xl:text-xl">
              {buttonText}
            </Button>
          </TransitionLink>
        </motion.div>
      </div>

      {/* Slide Index */}
      <div className="absolute top-8 right-12 font-mono text-6xl text-white/5 opacity-20 select-none pointer-events-none">
        {project.id}
      </div>
    </div>
  );
};

const TechBadge = ({ tech }) => {
  return (
    <>
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 lg:gap-4">
          {tech.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] md:text-xs font-mono tracking-wider text-white/80 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );
};
