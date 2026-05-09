export const DRAG_THRESHOLD = 50;

export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
    zIndex: 0,
  }),
};

export const transitionConfig = {
  x: { type: "spring", stiffness: 200, damping: 25, mass: 0.8 },
  opacity: { duration: 0.5 },
  scale: { duration: 0.5 },
  filter: { duration: 0.5 },
};
