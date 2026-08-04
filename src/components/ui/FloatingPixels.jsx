import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function ScrollFloatingPixels({ sectionRef, pixels }) {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 18,
    mass: 0.6,
  });

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {pixels.map((pixel, idx) => {
        const x = useTransform(
          smoothProgress,
          [0, 1],
          shouldReduceMotion ? [0, 0] : [pixel.startX, pixel.endX]
        );

        const y = useTransform(
          smoothProgress,
          [0, 1],
          shouldReduceMotion ? [0, 0] : [pixel.startY, pixel.endY]
        );

        const rotate = useTransform(
          smoothProgress,
          [0, 1],
          shouldReduceMotion
            ? [pixel.startRotate ?? 0, pixel.startRotate ?? 0]
            : [
                pixel.startRotate ?? 0,
                pixel.endRotate ?? (idx % 2 === 0 ? 90 : -90),
              ]
        );

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
            default:
              return {
                bg: "bg-primary-pink/15",
                border: "border-primary-pink/40",
                glow: "shadow-[0_0_15px_rgba(201,79,163,0.25)]",
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

              transformOrigin: "center center",

              willChange: "transform, opacity",
            }}
            className={`absolute border rounded-[3px] backdrop-blur-[1px] ${colors.bg} ${colors.border} ${colors.glow} ${
              pixel.blur ? "blur-[1px]" : ""
            } flex items-center justify-center`}
          >
            {/* Inner micro dot or detailing */}
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
