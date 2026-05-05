export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <header className={`max-w-2xl mb-12 ${isCenter ? "text-center mx-auto" : "text-left"}`}>
      {eyebrow && (
        <p className={`inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-brand-600 mb-4 ${isCenter ? "justify-center" : ""}`}>
          <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" />
          {eyebrow}
          <span aria-hidden="true" className={`h-px w-8 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full ${isCenter ? "inline-block" : "hidden"}`} />
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-500 leading-relaxed text-sm sm:text-base">{description}</p>
      )}
    </header>
  );
}
