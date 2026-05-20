"use client";

import { useState } from "react";
import { ArrowSvg } from "../design/ArrowSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  color = "white",
  disabled,
}) => {
  const [active, setActive] = useState(false);
  const isAqua = color === "primary-aqua";
  const isPink = color === "primary-pink";

  const classes = `button relative inline-flex items-center justify-center py-3 md:py-4 px-5 md:px-7 space-x-1 rounded-full transition-colors duration-300 whitespace-nowrap shrink-0 
  ${className || ""}
  ${isAqua ? "bg-n-1 hover:bg-primary-aqua text-n-8 hover:text-n-1" : ""}
  ${isPink ? "bg-n-1 hover:bg-primary-pink text-n-8 hover:text-n-1" : ""}
  ${!isAqua && !isPink ? "border border-white hover:bg-n-1/10 text-n-1" : ""}
  ${disabled ? "border border-white/10 cursor-not-allowed text-n-1/10 hover:bg-transparent" : ""}
  `;
  const spanClasses =
    "relative z-10 flex items-center font-mono tracking-widest uppercase";

  const renderButton = () => (
    <button
      disabled={disabled}
      className={classes}
      onClick={onClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span className={spanClasses}>{children}</span>
      <ArrowSvg active={active} />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ArrowSvg active={active} />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;

{
  /* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-6 bg-n-1 text-n-8 font-bold rounded-full flex items-center gap-3 mx-auto hover:bg-primary-aqua hover:text-white transition-colors duration-300"
        >
          GET IN TOUCH <ArrowRight className="w-5 h-5" />
        </motion.button> */
}
