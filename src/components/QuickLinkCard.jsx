import Icon from "./Icon";

export default function QuickLinkCard({ title, description, icon }) {
  return (
    <a
      href="#"
      className="group relative flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-ink-100 hover:ring-brand-300/60 hover:shadow-xl hover:shadow-brand-500/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 to-brand-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400 rounded-t-2xl"
      />

      {/* Subtle background glow on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-50/0 via-brand-50/0 to-brand-50/0 group-hover:from-brand-50/60 group-hover:to-transparent transition-all duration-500 rounded-2xl"
      />

      {/* Icon */}
      <span className="relative inline-flex h-13 w-13 items-center justify-center rounded-xl bg-ink-50 text-brand-700 ring-1 ring-ink-100 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-all duration-300">
        <Icon name={icon} className="w-6 h-6" />
      </span>

      <h3 className="relative mt-5 text-base font-bold text-ink-900 tracking-tight">{title}</h3>
      <p className="relative mt-2 text-sm text-ink-500 leading-relaxed flex-1">
        {description}
      </p>
      <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 group-hover:text-brand-600 transition-all duration-200">
        Learn more
        <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </a>
  );
}
