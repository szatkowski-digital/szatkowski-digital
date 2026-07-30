"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowSvg } from "../design/ArrowSvg";
import { TransitionLink } from "../utils/TransitionLink";

const Button = ({
  className = "",
  href,
  onClick,
  children,
  variant = "white", // "white" | "glow"
  showArrow = false,
  disabled,
}) => {
  const [active, setActive] = useState(false);
  const [ripples, setRipples] = useState([]);

  const isGlow = variant === "glow";

  const baseClasses = `relative flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-center transition-colors duration-200 whitespace-nowrap shrink-0 gap-2 z-10 overflow-hidden`;

  const glowClasses = disabled
    ? "bg-[#F8F8F8]/50 text-[#0F0F12]/50 cursor-not-allowed"
    : "bg-[#F8F8F8] text-[#0F0F12] hover:bg-white active:bg-white cursor-pointer";

  const whiteClasses = disabled
    ? "border border-white/10 text-white/20 cursor-not-allowed"
    : "border border-white/30 text-white hover:bg-white/10 active:bg-white/10 cursor-pointer";

  const buttonClasses = `${baseClasses} ${isGlow ? glowClasses : whiteClasses}`;

  const createRipple = (e) => {
    if (disabled) return;

    const button = e.currentTarget.getBoundingClientRect();
    const size = Math.max(button.width, button.height) * 2;
    const x = e.clientX - button.left - size / 2;
    const y = e.clientY - button.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  const removeRipple = (id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center font-mono pointer-events-none">
        {children}
      </span>
      {showArrow && <ArrowSvg active={active} />}

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.35 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => removeRipple(ripple.id)}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
            className={`absolute rounded-full pointer-events-none z-0 ${
              isGlow ? "bg-black/20" : "bg-white/30"
            }`}
          />
        ))}
      </AnimatePresence>
    </>
  );

  if (href) {
    return (
      <TransitionLink
        href={href}
        className={`group relative inline-flex w-full sm:w-auto ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        <div
          className="w-full sm:w-auto rounded-full"
          onMouseEnter={() => !disabled && setActive(true)}
          onMouseLeave={() => setActive(false)}
          onPointerDown={createRipple}
        >
          {isGlow && !disabled && (
            <div className="absolute -inset-1 bg-linear-to-r from-primary-pink via-primary-red to-primary-aqua rounded-full blur opacity-45 group-hover:opacity-75 transition-all duration-200 pointer-events-none" />
          )}
          <div className={buttonClasses}>{innerContent}</div>
        </div>
      </TransitionLink>
    );
  }

  return (
    <motion.button
      disabled={disabled}
      onTap={() => !disabled && onClick && onClick()}
      onPointerDown={createRipple}
      className={`group relative inline-flex w-full sm:w-auto rounded-full ${className}`}
      onHoverStart={() => !disabled && setActive(true)}
      onHoverEnd={() => setActive(false)}
    >
      {isGlow && !disabled && (
        <div className="absolute -inset-1 bg-linear-to-r from-primary-pink via-primary-red to-primary-aqua rounded-full blur opacity-45 group-hover:opacity-75 transition-all duration-200 pointer-events-none" />
      )}
      <div className={buttonClasses}>{innerContent}</div>
    </motion.button>
  );
};

export default Button;
