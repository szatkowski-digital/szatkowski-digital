import { motion } from "framer-motion";

export const PortfolioNavigation = ({
  index,
  total,
  onPrev,
  onNext,
  onSelect,
  nextText,
  prevText,
}) => {
  return (
    <div className="flex items-center gap-16 w-max">
      <button
        onClick={onPrev}
        className="group flex items-center gap-4 text-n-1/30 hover:text-white transition-colors"
      >
        <div className="w-12 h-px bg-n-1/10 group-hover:bg-primary-pink transition-colors" />

        <span className="font-mono text-[10px] tracking-widest uppercase">
          {prevText}
        </span>
      </button>

      <div className="flex gap-4">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="relative w-2 h-2 rounded-full bg-white/10 overflow-hidden"
          >
            {index === i && (
              <motion.div
                layoutId="portfolio-dot"
                className="absolute inset-0 bg-n-1"
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="group flex items-center gap-4 text-white/30 hover:text-white transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">
          {nextText}
        </span>

        <div className="w-12 h-px bg-white/10 group-hover:bg-primary-aqua transition-colors" />
      </button>
    </div>
  );
};
