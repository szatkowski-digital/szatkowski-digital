import { motion } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";

function ProjectsCarousel({ carouselProps, projects, t }) {
  const {
    containerRef,
    containerWidth,
    cardWidth,
    gap,
    x,
    constraints,
    handleDragEnd,
    activeRealIndex,
  } = carouselProps;

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden transition-opacity duration-300"
      style={{
        touchAction: "pan-y",
        opacity: containerWidth > 0 ? 1 : 0,
      }}
    >
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={constraints}
        onDragEnd={handleDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing"
      >
        {projects.map((item, index) => {
          return (
            <div
              key={item.id || index}
              style={{
                width: cardWidth,
                marginRight: gap,
                flexShrink: 0,
              }}
              className="h-[clamp(30rem,75dvh,50rem)] md:h-[clamp(25rem,60dvh,60rem)]"
            >
              <PortfolioCard
                project={item}
                index={index}
                isCurrentActive={activeRealIndex === index}
                buttonText={t("navigation.button")}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default ProjectsCarousel;
