"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { del } from "framer-motion/client";

/**
 * ------------------------------------------------------------------
 * HERO BACKGROUND
 * ------------------------------------------------------------------
 * Full screen animated SVG background.
 *
 * Behaviour:
 * - always fills entire viewport
 * - behaves like CSS background-size: cover
 * - may crop edges but never leaves empty space
 * - layered parallax motion
 * - page transition exit animation
 */

const SvgComponent = ({ exit, onAnimationComplete }) => {
  /**
   * ------------------------------------------------------------------
   * PARALLAX LAYERS
   * ------------------------------------------------------------------
   */
  const slow = useMouseParallax({ strength: 10, stiffness: 50 });
  const medium = useMouseParallax({ strength: 20, stiffness: 50 });
  const fast = useMouseParallax({ strength: 30, stiffness: 50 });

  /**
   * ------------------------------------------------------------------
   * ZOOM ANIMATION
   * ------------------------------------------------------------------
   */
  const zoomVariants = {
    initial: {
      scale: 3,
      opacity: 0,
    },
    animate: {
      scale: 0.8,
      opacity: 1,
      transition: {
        duration: 3,
        ease: [0.145, 0.94, 0.245, 0.95],
        delay: 0.4,
      },
    },
    exitState: {
      scale: 3,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.145, 0.94, 0.245, 0.95],
      },
    },
  };

  return (
    <div className="absolute h-full w-full -z-10 blur-sm opacity-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 698.68 459.04"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {/* LAYER — GRAY */}
        <motion.g
          id="layer-gray"
          style={{ x: slow.x, y: slow.y }}
          variants={zoomVariants}
          initial="initial"
          animate={exit ? "exitState" : "animate"}
          onAnimationComplete={onAnimationComplete}
        >
          <path d="M234.3 277.76h35.42v35.42H234.3z" fill="#d9d9d9" />
          <path d="M436.68 316.97h35.42v35.42h-35.42z" fill="#d9d9d9" />
          <path d="M199.97 157.19h16.23v17.71h-16.23z" fill="#d9d9d9" />
          <path d="M147.29 423.61h8.86v8.86h-8.86z" fill="#d9d9d9" />
          <path d="M672.09 4.04h8.86v8.86h-8.86z" fill="#d9d9d9" />
          <path d="M233.91 174.9h17.71v17.71h-17.71z" fill="#d9d9d9" />
          <path d="M131.05 441.33h16.23v17.71h-16.23z" fill="#d9d9d9" />
          <path d="M164.68 226.56h17.71v17.71h-17.71z" fill="#d9d9d9" />
          <path d="M489.55 192.74h17.71v17.71h-17.71z" fill="#d9d9d9" />
          <path d="M146.97 244.27h17.71v17.71h-17.71z" fill="#d9d9d9" />
          <path d="M471.97 316.97h35.42v141.68h-35.42z" fill="#d9d9d9" />
          <path d="M463.5 66.4h35.42v35.42H463.5z" fill="#d9d9d9" />
        </motion.g>

        {/* LAYER — GREEN */}
        <motion.g
          id="layer-green"
          style={{ x: medium.x, y: medium.y }}
          variants={zoomVariants}
          initial="initial"
          animate={exit ? "exitState" : "animate"}
          onAnimationComplete={onAnimationComplete}
        >
          <path d="M147.29 405.9H165v17.71h-17.71z" fill="#06d8b3" />
          <path d="M690.21 410.85h8.47v8.47h-8.47z" fill="#06d8b3" />
          <path d="M76.7 0h8.47v8.47H76.7z" fill="#06d8b3" />
          <path d="M481.21 101.82h17.71v17.71h-17.71z" fill="#06d8b3" />
          <path d="M104.94 298.62h17.71v17.71h-17.71z" fill="#06d8b3" />
          <path d="M562.32 225.92h17.71v17.71h-17.71z" fill="#06d8b3" />
          <path d="M332.54 101.82h17.71v17.71h-17.71z" fill="#06d8b3" />
          <path d="M199.97 174.9h33.94v17.71h-33.94z" fill="#06d8b3" />
        </motion.g>

        {/* LAYER — PINK */}
        <motion.g
          id="layer-pink"
          style={{ x: fast.x, y: fast.y }}
          variants={zoomVariants}
          initial="initial"
          animate={exit ? "exitState" : "animate"}
          onAnimationComplete={onAnimationComplete}
        >
          <path d="M111.96 105.93h17.71v17.71h-17.71z" fill="#de3182" />
          <path d="M129.67 123.57h17.71v17.71h-17.71z" fill="#de3182" />
          <path d="M507.26 192.74h17.71v17.71h-17.71z" fill="#de3182" />
          <path d="M524.97 192.74h8.47v8.47h-8.47z" fill="#de3182" />
          <path d="M252.01 348.15h8.47v8.47h-8.47z" fill="#de3182" />
          <path d="M311.3 124.15h8.47v8.47h-8.47z" fill="#de3182" />
          <path d="M564.43 370.2h8.47v8.47h-8.47z" fill="#de3182" />
          <path d="M107.76 148.95h8.47v8.47h-8.47z" fill="#de3182" />
          <path d="M0 258.85h8.47v8.47H0z" fill="#de3182" />
          <path d="M563.73 308.21h35.42v35.42h-35.42z" fill="#de3182" />
          <path d="M251.62 373.53h70.84v35.42h-70.84z" fill="#de3182" />
          <path d="M243.99 66.4h106.26v35.42H243.99z" fill="#de3182" />
          <path d="M131.05 405.9h16.23v35.42h-16.23z" fill="#de3182" />
        </motion.g>
      </svg>
    </div>
  );
};

export default SvgComponent;
