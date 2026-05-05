/** Reusable stat card for dashboard */
export function StatCard({ icon, label, value, sub, color = "brand" }) {
  const colorMap = {
    brand: "bg-brand-50 text-brand-600 ring-brand-200",
    green: "bg-green-50 text-green-600 ring-green-200",
    blue: "bg-blue-50 text-blue-600 ring-blue-200",
    purple: "bg-purple-50 text-purple-600 ring-purple-200",
    ink: "bg-ink-100 text-ink-600 ring-ink-200",
  };

  return (
    <div className="bg-white rounded-xl ring-1 ring-ink-100 shadow-sm p-4 sm:p-5 flex gap-4 items-start hover:shadow-md transition-shadow">
      <span
        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl ring-1 ${colorMap[color]}`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-ink-400 font-medium uppercase tracking-wide">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-ink-800 tabular-nums">{value}</p>
        {sub && <p className="text-xs text-ink-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

/** Referral status badge */
const statusStyles = {
  Given: "bg-ink-100 text-ink-600",
  "In Progress": "bg-amber-100 text-amber-700",
  Converted: "bg-green-100 text-green-700",
  Closed: "bg-ink-800 text-white",
};

export function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        statusStyles[status] || "bg-ink-100 text-ink-600"
      }`}
    >
      {status}
    </span>
  );
}

/** Generic card wrapper */
export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl ring-1 ring-ink-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

/** Section heading for platform pages */
export function PlatformSectionHeading({ title, action }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-base font-semibold text-ink-800">{title}</h2>
      {action && <div>{action}</div>}
    </div>
  );
}

/** Loading skeleton rows */
export function SkeletonRows({ count = 3 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton h-14 rounded-lg" />
      ))}
    </div>
  );
}

/** Empty state */
export function EmptyState({ icon = "📭", title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <span className="text-5xl mb-4">{icon}</span>
      <h3 className="text-base font-semibold text-ink-700">{title}</h3>
      {description && (
        <p className="text-sm text-ink-400 mt-1 max-w-xs">{description}</p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

/** Rupee formatter */
export function formatRupee(n) {
  return `₹${Number(n).toLocaleString("en-IN")}`;
}

/** Primary button */
export function BtnPrimary({ children, onClick, type = "button", disabled = false, loading = false, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-brand-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${className}`}
    >
      {loading && <span className="w-4 h-4 border-2 border-ink-900/30 border-t-ink-900 rounded-full animate-spin" />}
      {children}
    </button>
  );
}

/** Secondary / outline button */
export function BtnSecondary({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-lg bg-white ring-1 ring-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
