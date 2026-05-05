import { useState } from "react";

export default function EventCard({ title, date, description, image }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100 hover:ring-brand-300 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-4/3 bg-ink-100 overflow-hidden">
        {!loaded && <div className="absolute inset-0 skeleton" />}
        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Stronger gradient overlay for the date tag contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/10 via-transparent to-ink-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-lg bg-brand-500/95 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-ink-900 shadow-md ring-1 ring-brand-400">
          {date}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-900 tracking-tight">{title}</h3>
        <p className="mt-2.5 text-sm text-ink-500 leading-relaxed flex-1">
          {description}
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 group-hover:text-brand-600 transition-all duration-200"
        >
          View details
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
}
