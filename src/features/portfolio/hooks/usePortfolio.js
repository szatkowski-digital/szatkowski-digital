import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

export const useCarousel = ({
  total,
  gapRatio = 0.03,
  projectedVelocityMultiplier = 0.12,
}) => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const shellRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeRealIndex, setActiveRealIndex] = useState(0);

  const isAnimating = useRef(false);
  const currentIndexRef = useRef(0);

  const x = useMotionValue(0);

  const gap = containerWidth * gapRatio;
  const step = cardWidth + gap;

  const getTargetX = useCallback(
    (index) => {
      if (!containerWidth || !cardWidth) return 0;
      const containerCenter = containerWidth / 2;
      const itemCenter = index * step + cardWidth / 2;
      return containerCenter - itemCenter;
    },
    [containerWidth, cardWidth, step]
  );

  const constraints = useMemo(() => {
    return {
      left: getTargetX(total - 1),
      right: getTargetX(0),
    };
  }, [getTargetX, total]);

  useEffect(() => {
    const container = containerRef.current;
    const shell = shellRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          setContainerWidth(entry.contentRect.width);
        }
        if (entry.target === shell) {
          setCardWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(container);
    if (shell) observer.observe(shell);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerWidth > 0 && cardWidth > 0) {
      x.set(getTargetX(currentIndexRef.current));
      setActiveRealIndex(currentIndexRef.current);
    }
  }, [containerWidth, cardWidth, getTargetX, x]);

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

    setActiveRealIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
  });

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

  const handleDragEnd = useCallback(
    (e, info) => {
      if (!containerWidth || !cardWidth) return;

      const currentVelocityMultiplier = isMobile
        ? projectedVelocityMultiplier * 2.5
        : projectedVelocityMultiplier;

      let projectedX = x.get() + info.velocity.x * currentVelocityMultiplier;

      if (isMobile) {
        projectedX += info.offset.x * 0.5;
      }

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
      cardWidth,
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
      shellRef,
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
