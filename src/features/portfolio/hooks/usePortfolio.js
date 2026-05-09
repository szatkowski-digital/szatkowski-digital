import { useState, useCallback } from "react";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const usePortfolio = (projectsLength) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = wrap(0, projectsLength, page);

  const paginate = useCallback((newDirection) => {
    setPage((prev) => [prev[0] + newDirection, newDirection]);
  }, []);

  const goTo = useCallback(
    (targetIndex) => {
      setPage((prev) => {
        const currentIdx = wrap(0, projectsLength, prev[0]);
        if (targetIndex === currentIdx) return prev;
        return [
          prev[0] + (targetIndex - currentIdx),
          targetIndex > currentIdx ? 1 : -1,
        ];
      });
    },
    [projectsLength]
  );

  const handleDragEnd = useCallback(
    (_, info) => {
      const swipe = info.offset.x;
      if (swipe < -50) paginate(1);
      else if (swipe > 50) paginate(-1);
    },
    [paginate]
  );

  return {
    page,
    direction,
    currentIndex,
    handleNext: () => paginate(1),
    handlePrev: () => paginate(-1),
    goTo,
    handleDragEnd,
  };
};
