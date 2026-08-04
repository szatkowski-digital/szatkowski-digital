export const TechBadge = ({ tech }) => {
  return (
    <>
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 lg:gap-4">
          {tech.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/3 text-[10px] md:text-xs font-mono tracking-wider text-white/80 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default TechBadge;
