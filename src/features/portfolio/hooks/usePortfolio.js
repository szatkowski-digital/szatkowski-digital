import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useMotionValue, animate, useMotionValueEvent } from "framer-motion";

/**
 * Performance-optimized carousel logic using Framer Motion and ResizeObserver.
 * Bypasses React VDOM re-renders during active drag interactions.
 */
export const useCarousel = ({
  total,
  cardWidthRatio = 0.75,
  gapRatio = 0.04,
  projectedVelocityMultiplier = 0.12,
}) => {
  const containerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [activeRealIndex, setActiveRealIndex] = useState(0);

  const isAnimating = useRef(false);
  const currentIndexRef = useRef(0);

  const x = useMotionValue(0);

  const cardWidth = containerWidth * cardWidthRatio;
  const gap = containerWidth * gapRatio;
  const step = cardWidth + gap;

  // Calculates target X position to perfectly center the current slide
  const getTargetX = useCallback(
    (index) => {
      if (!containerWidth) return 0;
      const containerCenter = containerWidth / 2;
      const itemCenter = index * step + cardWidth / 2;
      return containerCenter - itemCenter;
    },
    [containerWidth, step, cardWidth]
  );

  // Cache drag boundaries to prevent function evaluation on every render pass
  const constraints = useMemo(() => {
    return {
      left: getTargetX(total - 1),
      right: getTargetX(0),
    };
  }, [getTargetX, total]);

  // Tracks physical container size to handle RWD and layout shifts seamlessly
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width } = entries[0].contentRect;
      setContainerWidth(width);
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Sets initial centered position once the container width is available
  useEffect(() => {
    if (containerWidth > 0) {
      x.set(getTargetX(currentIndexRef.current));
      setActiveRealIndex(currentIndexRef.current);
    }
  }, [containerWidth, getTargetX, x]);

  // Decoupled listener tracking active slide index on the animation thread
  useMotionValueEvent(x, "change", (latestX) => {
    if (!containerWidth || total <= 0) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < total; i++) {
      const dist = Math.abs(latestX - getTargetX(i));
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = i;
      }
    }
    setActiveRealIndex(closestIndex);
  });

  // Snaps container to a specific card using fluid spring physics
  const handleSnap = useCallback(
    (closestIndex) => {
      isAnimating.current = true;
      const targetX = getTargetX(closestIndex);

      currentIndexRef.current = closestIndex;
      setActiveRealIndex(closestIndex);

      animate(x, targetX, {
        type: "spring",
        stiffness: 280,
        damping: 30,
        mass: 0.8,
      }).then(() => {
        isAnimating.current = false;
      });
    },
    [getTargetX, x]
  );

  // Calculates swipe inertia (velocity) on release to guess the next logical card
  const handleDragEnd = useCallback(
    (e, info) => {
      if (!containerWidth) return;

      const projectedX =
        x.get() + info.velocity.x * projectedVelocityMultiplier;
      let closestIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < total; i++) {
        const dist = Math.abs(projectedX - getTargetX(i));
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = i;
        }
      }

      const boundedIndex = Math.max(0, Math.min(total - 1, closestIndex));
      handleSnap(boundedIndex);
    },
    [
      containerWidth,
      x,
      total,
      projectedVelocityMultiplier,
      getTargetX,
      handleSnap,
    ]
  );

  const onNext = useCallback(() => {
    if (isAnimating.current) return;
    const nextIndex =
      currentIndexRef.current === total - 1 ? 0 : currentIndexRef.current + 1;
    handleSnap(nextIndex);
  }, [total, handleSnap]);

  const onPrev = useCallback(() => {
    if (isAnimating.current) return;
    const prevIndex =
      currentIndexRef.current === 0 ? total - 1 : currentIndexRef.current - 1;
    handleSnap(prevIndex);
  }, [total, handleSnap]);

  const onSelect = useCallback(
    (targetIdx) => {
      if (isAnimating.current) return;
      handleSnap(targetIdx);
    },
    [handleSnap]
  );

  return {
    carouselProps: {
      containerRef,
      containerWidth,
      cardWidth,
      gap,
      x,
      constraints,
      handleDragEnd,
      activeRealIndex,
    },
    navigationProps: {
      index: activeRealIndex,
      total,
      onNext,
      onPrev,
      onSelect,
    },
  };
};
