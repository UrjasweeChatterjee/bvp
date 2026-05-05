// Stylized 24-spoke Ashoka chakra used as the institutional seal/mark.
// Pure SVG, scales to any size, color via currentColor.

export default function Emblem({ className = "w-10 h-10", spinning = false }) {
  const spokes = Array.from({ length: 24 });
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${spinning ? "spin-slow" : ""}`}
      role="img"
      aria-label="Ashoka chakra"
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {spokes.map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="14"
            x2="50"
            y2="42"
            transform={`rotate(${(360 / 24) * i} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="6.5" fill="currentColor" />
    </svg>
  );
}
