import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollFloatingPixels({ sectionRef, pixels }) {
  // Capture scroll progress relative to this specific section entering and leaving viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create a spring-smoothed version for ultra-premium fluid responsiveness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 18,
    mass: 0.6,
  });

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      {pixels.map((pixel, idx) => {
        // Map smooth progress [0, 1] to translation ranges
        // Start position will be active when section is below viewport,
        // and translates as the user scrolls.
        const x = useTransform(
          smoothProgress,
          [0, 1],
          [pixel.startX, pixel.endX]
        );
        const y = useTransform(
          smoothProgress,
          [0, 1],
          [pixel.startY, pixel.endY]
        );

        // Map rotation if defined
        const rotate = useTransform(
          smoothProgress,
          [0, 1],
          [
            pixel.startRotate ?? 0,
            pixel.endRotate ?? (idx % 2 === 0 ? 90 : -90),
          ]
        );

        // Map subtle opacity fade in and out to ensure pixels are hidden when far away
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.15, 0.85, 1],
          [0, 0.75, 0.75, 0]
        );

        // Color mapper
        const getColorClasses = (color = "pink") => {
          switch (color) {
            case "pink":
              return {
                bg: "bg-primary-pink/15",
                border: "border-primary-pink/40",
                glow: "shadow-[0_0_15px_rgba(201,79,163,0.25)]",
              };
            case "aqua":
              return {
                bg: "bg-primary-aqua/15",
                border: "border-primary-aqua/40",
                glow: "shadow-[0_0_15px_rgba(4,207,167,0.25)]",
              };
            case "red":
              return {
                bg: "bg-primary-red/15",
                border: "border-primary-red/40",
                glow: "shadow-[0_0_15px_rgba(253,3,0,0.25)]",
              };
          }
        };

        const colors = getColorClasses(pixel.color);
        const isRect = pixel.type === "rect";
        const width = isRect
          ? pixel.size * (pixel.rectWidthMultiplier ?? 2.5)
          : pixel.size;
        const height = pixel.size;

        return (
          <motion.div
            key={idx}
            style={{
              x,
              y,
              rotate,
              opacity,
              width,
              height,
              top: pixel.top,
              bottom: pixel.bottom,
              left: pixel.left,
              right: pixel.right,
            }}
            className={`absolute border rounded-[3px] backdrop-blur-[1px] ${colors.bg} ${colors.border} ${colors.glow} ${
              pixel.blur ? "blur-[1px]" : ""
            } flex items-center justify-center`}
          >
            {/* Inner micro dot or detailing for that retro-futuristic high-tech pixel look */}
            <div
              className={`w-1 h-1 rounded-full ${
                pixel.color === "pink"
                  ? "bg-primary-pink"
                  : pixel.color === "aqua"
                    ? "bg-primary-aqua"
                    : "bg-primary-red"
              } opacity-40`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
