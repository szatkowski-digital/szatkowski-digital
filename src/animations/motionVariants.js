import { delay } from "framer-motion";

export const slideLeft = {
  initial: {
    scale: 0.95,
    opacity: 0,
    x: -60,
  },

  enter: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.3, 0, 0.6, 1],
    },
  },

  exit: {
    scale: 0.95,
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const rotate90Left = {
  initial: {
    opacity: 0,
    rotateY: 90,
    transformOrigin: "left center",
  },
  enter: (delay = 0) => ({
    opacity: 1,
    rotateY: 0,
    transformOrigin: "left center",
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      delay: delay,
    },
  }),
  exit: {
    opacity: 0,
    rotateY: 90,
    transformOrigin: "left center",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const slideRight = {
  initial: {
    scale: 0.95,
    opacity: 0,
    x: 60,
  },

  enter: (delay = 0) => ({
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.3, 0, 0.6, 1],
      delay: delay,
    },
  }),

  exit: {
    scale: 0.95,
    opacity: 0,
    x: 40,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const slideUp = {
  initial: {
    scale: 0.95,
    opacity: 0,
    y: 40,
  },
  enter: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.3, 0, 0.6, 1],
    },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};
