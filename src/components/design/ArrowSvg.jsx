export const ArrowSvg = ({ active, ...props }) => {
  return (
    <svg
      className={`overflow-visible transition-all duration-300 ${props.className || ""}`}
      width="18"
      height="14"
      viewBox="0 0 14 8"
      {...props}
    >
      {/* Arrow Head */}
      <path
        d="M9 0 L14 4 L9 8"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        stroke="currentColor"
        // Używamy transition-transform dla płynności
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
        // Dodajemy will-change, żeby GPU przygotowało się na animację
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
