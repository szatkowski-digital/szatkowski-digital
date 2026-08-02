export const ArrowSvg = ({ active, className = "", ...props }) => {
  return (
    <svg
      className={`inline-block w-[1em] h-[1em] align-middle overflow-visible transition-all duration-300 ${className}`}
      viewBox="0 0 14 8"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Arrow Head */}
      <path
        d="M9 0 L14 4 L9 8"
        strokeWidth="1.8"
        strokeLinecap="round"
        stroke="currentColor"
        fill="none"
        className="transition-transform duration-300 ease-in-out"
        style={{
          transform: active ? "translateX(4px)" : "translateX(0px)",
        }}
      />
      {/* Sliding Line */}
      <line
        x1="6"
        y1="4"
        x2="14"
        y2="4"
        strokeWidth="1.8"
        strokeLinecap="round"
        stroke="currentColor"
        className="transition-all duration-300 ease-in-out"
        style={{
          transform: active
            ? "translateX(4px) scaleX(1)"
            : "translateX(0px) scaleX(0)",
          transformOrigin: "right",
          willChange: "transform",
        }}
      />
    </svg>
  );
};
