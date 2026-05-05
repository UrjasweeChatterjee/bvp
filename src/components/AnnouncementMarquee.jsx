import { useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import { announcements } from "../data/mockData";

const TAG_STYLES = {
  New: "bg-india-green-500 text-white",
  Notice: "bg-brand-500 text-ink-900",
  Result: "bg-ink-800 text-white",
  Update: "bg-ink-200 text-ink-800",
  Circular: "bg-saffron-500 text-ink-900",
};

export default function AnnouncementMarquee() {
  const [paused, setPaused] = useState(false);

  // Duplicate the list so the CSS marquee can loop seamlessly.
  const items = [...announcements, ...announcements];

  return (
    <div className="bg-brand-50 border-y border-brand-200">
      <Container className="flex items-stretch">
        <div className="flex items-center gap-2 pr-4 py-2.5 border-r border-brand-200 shrink-0">
          <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand-500 text-ink-900">
            <Icon name="announce" className="w-4 h-4" />
          </span>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-800">
            What's New
          </span>
        </div>

        <div
          className={`relative flex-1 overflow-hidden py-2.5 ${paused ? "marquee-paused" : ""}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ul className="marquee-track gap-10" aria-label="Latest announcements">
            {items.map((a, i) => (
              <li
                key={`${a.text}-${i}`}
                className="flex items-center gap-2.5 shrink-0 text-sm text-ink-800"
              >
                <span
                  className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${TAG_STYLES[a.tag] || "bg-ink-200 text-ink-800"}`}
                >
                  {a.tag}
                </span>
                <a href={a.href} className="hover:text-brand-700 hover:underline">
                  {a.text}
                </a>
                <span className="text-ink-300" aria-hidden="true">•</span>
              </li>
            ))}
          </ul>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-brand-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-brand-50 to-transparent" />
        </div>

        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          className="hidden sm:inline-flex items-center gap-1 pl-4 py-2.5 border-l border-brand-200 shrink-0 text-xs font-medium text-ink-700 hover:text-ink-900"
          aria-pressed={paused}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </Container>
    </div>
  );
}
