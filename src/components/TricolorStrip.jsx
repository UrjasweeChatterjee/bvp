// Thin Indian tricolor band — used as a subtle separator between sections
// of the header. Pure CSS, decorative.
export default function TricolorStrip({ className = "" }) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`tricolor-bar ${className}`}
    />
  );
}
