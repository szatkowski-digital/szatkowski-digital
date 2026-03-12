export const slideLeft = {
  initial: {
    opacity: 0,
    x: -60,
  },

  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.3, 0, 0.6, 1],
    },
  },

  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const slideRight = {
  initial: {
    opacity: 0,
    x: 60,
  },

  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.3, 0, 0.6, 1],
    },
  },

  exit: {
    opacity: 0,
    x: 40,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};
