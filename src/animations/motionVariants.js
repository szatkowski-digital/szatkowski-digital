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

export const slideRight = {
  initial: {
    scale: 0.95,
    opacity: 0,
    x: 60,
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
